import fs from 'node:fs';
import { pathToFileURL } from 'node:url';

const { chromium } = await import(
  process.env.PLAYWRIGHT_MODULE ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : 'playwright'
);
const browser = await chromium.launch({
  headless: true,
  ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {})
});
const origin = process.env.TEST_URL || 'http://127.0.0.1:4173';
const pages = fs.readdirSync('dist').filter(f => f.endsWith('.html') && !['404.html', 'service-collection-v2.html'].includes(f));
const errors = [];
let checked = 0;

const page = await browser.newPage();
page.on('pageerror', e => errors.push(e.message));

try {
  // 1. Responsive layout, heading, overflow, menu, encoding & duplicate-ID checks
  for (const width of [390, 820, 1024, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of pages) {
      const response = await page.goto(origin + '/' + route);
      if (response.status() !== 200) throw Error('HTTP ' + response.status() + ' ' + route);
      if ((await page.locator('h1').count()) !== 1) throw Error('Heading structure ' + route);
      if (await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)) {
        throw Error('Page overflow ' + route + ' @ ' + width);
      }
      if ((await page.locator('#navigation .service-menu').count()) !== 1) {
        throw Error('Missing header services menu ' + route);
      }
      if (await page.locator('footer .service-menu,.breadcrumb .service-menu').count()) {
        throw Error('Menu outside header ' + route);
      }
      if (/â€™|â†|Â©|Â£/.test(await page.locator('body').innerText())) {
        throw Error('Broken punctuation ' + route);
      }
      const ids = await page.locator('[id]').evaluateAll(nodes => nodes.map(n => n.id));
      if (new Set(ids).size !== ids.length) throw Error('Duplicate IDs ' + route);
      checked++;
    }
  }

  // 2. Verify all seven product pages load real captured screens responsively.
  await page.setViewportSize({ width: 390, height: 844 });
  const productPages = [
    'crm.html',
    'communications.html',
    'sales-intelligence.html',
    'business-delivery.html',
    'automation.html',
    'ai-team.html',
    'marketing-social-media.html'
  ];
  for (const prod of productPages) {
    await page.goto(origin + '/' + prod);
    const capture=page.locator('.signature-visual-wrap .product-capture');
    if (!(await capture.isVisible())) throw Error('Missing product capture on ' + prod);
    const img=capture.locator('img');
    await img.scrollIntoViewIfNeeded();
    await img.evaluate(el=>el.decode());
    if(!await img.evaluate(el=>el.naturalWidth>0 && el.currentSrc.endsWith('-mobile.webp'))) throw Error('Missing responsive mobile capture on '+prod);
    if(!await img.getAttribute('alt')) throw Error('Missing capture alt text on '+prod);
    if(!await capture.locator('figcaption').textContent()) throw Error('Missing action caption on '+prod);
    const detail=await capture.locator('figcaption a').getAttribute('href');
    const detailResponse=await page.request.get(origin+'/'+detail);
    if(!detailResponse.ok() || !detailResponse.headers()['content-type'].includes('image/webp')) throw Error('Broken workflow detail image on '+prod);
  }

  // 3. Verify B2B homepage hero CTAs and core sections are visible on mobile (390px)
  await page.goto(origin + '/');
  if (!(await page.locator('a:has-text("Request a demo")').first().isVisible())) {
    throw Error('Request a demo CTA not visible on mobile homepage');
  }
  if (!(await page.locator('a:has-text("Explore the seven services")').first().isVisible())) {
    throw Error('Explore the seven services CTA not visible on mobile homepage');
  }
  if ((await page.locator('#how-intelligence-works').count()) !== 1) {
    throw Error('Missing How the intelligence works section on homepage');
  }
  if ((await page.locator('#connected-journey').count()) !== 1) {
    throw Error('Missing From opportunity to delivery section on homepage');
  }
  if ((await page.locator('#home-faq').count()) !== 1) {
    throw Error('Missing FAQ section on homepage');
  }

  // 4. Verify Guided 3-Scenario Product Demo (complete, live feedback, reset, and Contact preselection)
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(origin + '/platforms.html');
  const guided = page.locator('[data-guided-demo]');
  const scenarios = [
    ['enquiry', 'AI services: Communications'],
    ['quote', 'AI services: Sales & Intelligence'],
    ['handover', 'AI services: Business Delivery']
  ];
  for (const [scenId, expectedInterest] of scenarios) {
    await guided.locator(`[data-scenario-tab="${scenId}"]`).click();
    const sPanel = guided.locator(`[data-scenario-panel="${scenId}"]`);
    if (!(await sPanel.isVisible())) throw Error('Guided scenario panel not visible: ' + scenId);
    if (!(await sPanel.locator('[data-scenario-before]').isVisible())) {
      throw Error('Guided scenario initial state not visible: ' + scenId);
    }
    await sPanel.locator('[data-scenario-action]').click();
    if (!(await sPanel.locator('[data-scenario-after]').isVisible())) {
      throw Error('Guided scenario completed state did not appear: ' + scenId);
    }
    const liveMsg = await sPanel.locator('[data-scenario-live]').textContent();
    if (!liveMsg || liveMsg.length < 10) {
      throw Error('Guided scenario live region did not announce state update: ' + scenId);
    }
    await sPanel.locator('[data-scenario-reset]').click();
    if (!(await sPanel.locator('[data-scenario-before]').isVisible())) {
      throw Error('Guided scenario reset did not restore initial state: ' + scenId);
    }
    // Check walkthrough link carries product into Contact
    const href = await sPanel.locator('.scenario-links a.button').getAttribute('href');
    await page.goto(origin + '/' + href);
    if ((await page.locator('select[name="interest"]').inputValue()) !== expectedInterest) {
      throw Error(`Guided scenario ${scenId} did not preselect ${expectedInterest}`);
    }
    await page.goto(origin + '/platforms.html');
  }

  // 5. Interactive product demo checks (7 tabs, status filter, search, empty state, reset, enquiry preselection, keyboard)
  await page.goto(origin + '/dashboard.html');
  const workspace = page.locator('[data-workspace]');
  const ids = ['crm', 'communications', 'sales', 'delivery', 'automation', 'ai-team', 'marketing'];
  for (const id of ids) {
    await workspace.locator(`[data-service-tab="${id}"]`).click();
    const panel = workspace.locator(`[data-service-panel="${id}"]`);
    if (!(await panel.isVisible())) throw Error('Tab selection ' + id);
    await panel.locator('[data-workspace-filter]').selectOption('review');
    if ((await panel.locator('[data-preview-row]:visible').count()) !== 1) throw Error('Status filter ' + id);
    await panel.locator('[data-workspace-search]').fill('no-matching-example');
    if (!(await panel.locator('[data-preview-empty]').isVisible())) throw Error('Empty state ' + id);
    await panel.locator('[data-workspace-search]').fill('');
    await panel.locator('[data-workspace-filter]').selectOption('all');
    if ((await panel.locator('[data-preview-row]:visible').count()) !== 4) throw Error('Filter reset ' + id);
    await panel.locator('.workspace-bottom a').click();
    if (!(await page.locator('select[name="interest"]').inputValue()).startsWith('AI services:')) {
      throw Error('Enquiry preselection ' + id);
    }
    await page.goto(origin + '/dashboard.html');
  }

  await page.goto(origin + '/dashboard.html?service=marketing');
  if (!(await page.locator('#panel-marketing').isVisible())) throw Error('Deep link selection');
  await page.locator('#tab-marketing').focus();
  await page.keyboard.press('Home');
  if (!(await page.locator('#panel-crm').isVisible())) throw Error('Keyboard tabs');
  await page.keyboard.press('End');
  if (!(await page.locator('#panel-marketing').isVisible())) throw Error('Keyboard End');
  await page.locator('.service-menu summary').click();
  if (!(await page.locator('.service-menu-panel').isVisible())) throw Error('Services dropdown');
  await page.keyboard.press('Escape');

  // 6. Enquiry flow verification (Client Commercial Brief, Candidate Enquiry, Territory Review)
  await page.addInitScript(() => {
    window.addEventListener(
      'click',
      e => {
        const a = e.target.closest('a[href^="mailto:"]');
        if (a) e.preventDefault();
      },
      true
    );
  });

  await page.goto(origin + '/contact.html?service=crm');
  if ((await page.locator('select[name="interest"]').inputValue()) !== 'AI services: CRM') {
    throw Error('Service alias mapping failed');
  }
  await page.goto(origin + '/contact.html?interest=UnknownCustomService');
  if ((await page.locator('select[name="interest"]').inputValue()) !== 'Growth partnership') {
    throw Error('Unknown interest fallback failed');
  }
  if (!(await page.locator('#interest-fallback-note').isVisible())) {
    throw Error('Fallback notice not shown for unknown interest');
  }

  await page.locator('#enquiry-form input[name="name"]').fill('Synthetic Tester');
  await page.locator('#enquiry-form button[type="submit"]').click();
  if ((await page.locator('#enquiry-form .field-error').count()) < 1) {
    throw Error('Client brief field-level validation did not trigger');
  }
  if ((await page.locator('#enquiry-form input[name="name"]').inputValue()) !== 'Synthetic Tester') {
    throw Error('Client brief discarded entered value on validation failure');
  }

  await page.goto(origin + '/contact.html?path=candidate#candidate-path');
  if (!(await page.locator('#candidate-path').isVisible())) {
    throw Error('Candidate tab did not activate via ?path=candidate');
  }
  await page.locator('#candidate-form input[name="cand_name"]').fill('Synthetic Candidate');
  await page.locator('#candidate-form button[type="submit"]').click();
  if ((await page.locator('#candidate-form .field-error').count()) < 1) {
    throw Error('Candidate form validation did not trigger on missing contact');
  }
  if ((await page.locator('#candidate-form input[name="cand_name"]').inputValue()) !== 'Synthetic Candidate') {
    throw Error('Candidate form lost name on validation error');
  }

  await page.goto(origin + '/check.html');
  await page.locator('#territory-check-form input[name="name"]').fill('Synthetic Director');
  await page.locator('#territory-check-form button[type="submit"]').click();
  if ((await page.locator('#territory-check-form .field-error').count()) < 1) {
    throw Error('Territory form validation did not trigger');
  }
  if ((await page.locator('#territory-check-form input[name="name"]').inputValue()) !== 'Synthetic Director') {
    throw Error('Territory form lost input on validation failure');
  }

  // 7. Mobile menu & service navigation
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(origin + '/');
  await page.locator('.menu-toggle').click();
  if (!(await page.locator('#navigation').isVisible())) throw Error('Mobile menu');
  await page.locator('.service-menu summary').click();
  await page.locator('.service-menu-panel a[href="crm.html"]').click();
  if (!page.url().endsWith('/crm.html')) throw Error('Mobile service navigation');

  if (errors.length) throw Error(errors.join('\n'));
  console.log(
    `PASS: ${checked} responsive page checks; 7 responsive product captures; 3 guided scenarios (complete/feedback/reset/CTA); 7 demo tabs; client/candidate/territory enquiry checks; keyboard & mobile menu. No browser errors.`
  );

  if (process.env.SCREENSHOT_DIR) {
    fs.mkdirSync(process.env.SCREENSHOT_DIR, { recursive: true });
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(origin + '/');
    await page.screenshot({ path: process.env.SCREENSHOT_DIR + '/index_html-1440.png' });
    await page.goto(origin + '/platforms.html');
    await page.screenshot({ path: process.env.SCREENSHOT_DIR + '/platforms-hub.png' });
    await page.goto(origin + '/sales-intelligence.html');
    await page.screenshot({ path: process.env.SCREENSHOT_DIR + '/sales-intelligence-final.png' });
    await page.goto(origin + '/contact.html');
    await page.screenshot({ path: process.env.SCREENSHOT_DIR + '/contact-final.png' });
    await page.goto(origin + '/dashboard.html');
    await page.locator('[data-workspace]').screenshot({ path: process.env.SCREENSHOT_DIR + '/dashboard-final.png' });
    await page.goto(origin + '/crm.html');
    await page.screenshot({ path: process.env.SCREENSHOT_DIR + '/crm-final.png' });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(origin + '/');
    await page.screenshot({ path: process.env.SCREENSHOT_DIR + '/index_html-390.png' });
    await page.goto(origin + '/dashboard.html');
    await page.locator('[data-workspace]').screenshot({ path: process.env.SCREENSHOT_DIR + '/dashboard-mobile.png' });
  }
} finally {
  await browser.close();
}
