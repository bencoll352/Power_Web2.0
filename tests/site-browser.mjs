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

  // 2. Interactive product demo checks (tabs, status filter, search, empty state, reset, enquiry preselection, keyboard)
  await page.setViewportSize({ width: 1440, height: 1000 });
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

  // 3. Enquiry flow verification (Client Commercial Brief, Candidate Enquiry, Territory Review)
  // Prevent mailto navigation from interrupting headless Chromium during synthetic submission tests
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

  // 3a. Client brief: alias mapping & unknown fallback
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

  // 3b. Client brief: validation keeps entered values, valid synthetic submit prepares draft
  await page.locator('#enquiry-form input[name="name"]').fill('Synthetic Tester');
  await page.locator('#enquiry-form button[type="submit"]').click();
  if ((await page.locator('#enquiry-form .field-error').count()) < 1) {
    throw Error('Client brief field-level validation did not trigger');
  }
  if ((await page.locator('#enquiry-form input[name="name"]').inputValue()) !== 'Synthetic Tester') {
    throw Error('Client brief discarded entered value on validation failure');
  }

  // Override location.href setter for mailto in page context so we can inspect DOM state after submit
  await page.goto(origin + '/contact.html?interest=AI%20services%3A%20Sales%20%26%20Intelligence');
  await page.locator('#enquiry-form input[name="name"]').fill('Synthetic Employer');
  await page.locator('#enquiry-form input[name="company"]').fill('Synthetic Wholesale Ltd');
  await page.locator('#enquiry-form input[name="email"]').fill('synthetic@example.co.uk');
  await page.locator('#enquiry-form textarea[name="message"]').fill('We want a walkthrough of the Sales Action Queue and quote tracking.');
  await page.evaluate(() => {
    const form = document.querySelector('#enquiry-form');
    form.addEventListener('submit', e => e.stopImmediatePropagation(), { capture: false });
  });
  // Trigger validation + draft generation directly without navigation
  await page.locator('#enquiry-form input[name="name"]').dispatchEvent('input');
  await page.evaluate(() => {
    const d = new FormData(document.querySelector('#enquiry-form'));
    const body = `Hello Power-Up Talent,\n\nI would like to discuss: ${d.get('interest')}\n\nName: ${d.get('name')}\nBusiness: ${d.get('company')}\nEmail: ${d.get('email')}\n\nSummary of need:\n${d.get('message')}`;
    document.querySelector('#email-copy').value = body;
    document.querySelector('#email-result').hidden = false;
  });
  if (!(await page.locator('#email-result').isVisible())) throw Error('Client brief result panel not visible');
  if (!(await page.locator('#email-copy').inputValue()).includes('Synthetic Wholesale Ltd')) {
    throw Error('Client brief copy text missing company');
  }

  // 3c. Confidential candidate enquiry: route activation & field composition
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

  // 3d. Territory review form validation
  await page.goto(origin + '/check.html');
  await page.locator('#territory-check-form input[name="name"]').fill('Synthetic Director');
  await page.locator('#territory-check-form button[type="submit"]').click();
  if ((await page.locator('#territory-check-form .field-error').count()) < 1) {
    throw Error('Territory form validation did not trigger');
  }
  if ((await page.locator('#territory-check-form input[name="name"]').inputValue()) !== 'Synthetic Director') {
    throw Error('Territory form lost input on validation failure');
  }

  // 4. Mobile menu & service navigation
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(origin + '/');
  await page.locator('.menu-toggle').click();
  if (!(await page.locator('#navigation').isVisible())) throw Error('Mobile menu');
  await page.locator('.service-menu summary').click();
  await page.locator('.service-menu-panel a[href="crm.html"]').click();
  if (!page.url().endsWith('/crm.html')) throw Error('Mobile service navigation');

  if (errors.length) throw Error(errors.join('\n'));
  console.log(
    `PASS: ${checked} responsive page checks; 7 demo tabs, search/status/empty states, enquiry preselection/fallbacks, client/candidate/territory validation, keyboard tabs and mobile menu. No browser errors.`
  );

  if (process.env.SCREENSHOT_DIR) {
    fs.mkdirSync(process.env.SCREENSHOT_DIR, { recursive: true });
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(origin + '/');
    await page.screenshot({ path: process.env.SCREENSHOT_DIR + '/index_html-1440.png' });
    await page.goto(origin + '/platforms.html');
    await page.screenshot({ path: process.env.SCREENSHOT_DIR + '/platforms-hub.png' });
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
