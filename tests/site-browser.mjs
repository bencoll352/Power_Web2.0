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
      if ((await page.locator('#navigation .service-menu').count()) !== 2) {
        throw Error('Expected 2 header dropdown menus ' + route);
      }
      if (await page.locator('footer .service-menu,.breadcrumb .service-menu').count()) {
        throw Error('Menu outside header ' + route);
      }
      const bodyText = await page.locator('body').innerText();
      if (/â€™|â†|Â©|Â£/.test(bodyText)) {
        throw Error('Broken punctuation ' + route);
      }
      if (/\bbranch(es)?\b/i.test(bodyText)) {
        throw Error('Unexpected "branch" copy on ' + route);
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

  // 3. Verify homepage follows Power-Up Talent live flow (snippet, What We Do, Strategic Pillars, brief 7 services, Why Us, no right hero screenshot box)
  await page.goto(origin + '/');
  const h1Text = await page.locator('h1').first().innerText();
  if (!h1Text.includes('Elite Headhunters.')) {
    throw Error('Unexpected homepage H1: ' + h1Text);
  }
  if ((await page.locator('.hero-screenshot-panel').count()) !== 0) {
    throw Error('Hero should not contain right-side screenshot panel');
  }
  if (!(await page.locator('.strategic-hero-box').first().isVisible())) {
    throw Error('Strategic Sector Difference snippet box not visible on homepage');
  }
  if (!(await page.locator('a:has-text("Hire Top Talent")').first().isVisible())) {
    throw Error('Hire Top Talent CTA not visible on homepage');
  }
  if (!(await page.locator('a:has-text("Explore AI Business Services")').first().isVisible())) {
    throw Error('Explore AI Business Services CTA not visible on homepage hero');
  }
  if (!(await page.locator('main a[href="/contact?path=candidate#candidate-path"]').first().isVisible())) {
    throw Error('Confidential Candidate Register link not visible on homepage');
  }
  for (const sec of [
    '#headhunting-overview',
    '#coaching-overview',
    '#what-you-can-do',
    '#strategic-difference',
    '#one-company-per-sector'
  ]) {
    if ((await page.locator(sec).count()) !== 1) {
      throw Error('Missing homepage section: ' + sec);
    }
  }
  if ((await page.locator('.hero-foot').count()) !== 0) {
    throw Error('Hero foot link strip should be removed from homepage');
  }
  if ((await page.locator('#what-we-do').count()) !== 0) {
    throw Error('Redundant #what-we-do section should be removed from homepage');
  }
  if ((await page.locator('#strategic-pillars').count()) !== 0) {
    throw Error('Strategic pillars duplicate section should be removed from homepage');
  }
  if ((await page.locator('#home-faq').count()) !== 0) {
    throw Error('FAQ section should be removed from homepage');
  }
  if ((await page.locator('#what-you-can-do .service-directory-cta').count()) !== 0) {
    throw Error('Staff-led handover CTA card should be removed from homepage');
  }

  // Verify Commercial Concierge Chatbot opens, runs Path 1, and routes to contact.html
  await page.locator('[data-pu-concierge="launcher"]').click();
  if (!(await page.locator('#pu-concierge-panel').isVisible())) {
    throw Error('Concierge chatbot panel did not open');
  }
  await page.locator('.pu-chat-opt').first().click();
  await page.locator('.pu-chat-input').fill('Energy & Facilities');
  await page.locator('.pu-chat-send').click();
  await page.locator('.pu-chat-input').fill('Commercial Director · Nationwide UK');
  await page.locator('.pu-chat-send').click();
  await page.locator('.pu-chat-input').fill('Alex Morgan · alex@example.co.uk');
  await page.locator('.pu-chat-send').click();
  if (!(await page.locator('.pu-chat-cta-btn.primary').isVisible())) {
    throw Error('Concierge chatbot did not render Send to Power-Up Team CTA');
  }
  await page.keyboard.press('Escape');
  if (await page.locator('#pu-concierge-panel').isVisible()) {
    throw Error('Concierge chatbot did not close on Escape');
  }

  // 4. Verify Guided 3-Scenario Product Demo (complete, live feedback, reset, and Contact preselection)
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(origin + '/platforms');
  if ((await page.locator('.service-directory-card .hub-card-dl').count()) !== 7) {
    throw Error('Expected 7 four-part service cards on /platforms');
  }
  const guidedHeading = await page.locator('#guided-demo-heading').innerText();
  if (!guidedHeading.includes('Try three workflows') || !guidedHeading.includes('with sample data')) {
    throw Error('Guided demo heading mismatch: ' + guidedHeading);
  }
  const handoverOrder = await page.locator('#won-deal-handover ol li').allInnerTexts();
  if (
    handoverOrder.length !== 3 ||
    !handoverOrder[0].includes('Sales Intelligence') ||
    !handoverOrder[1].includes('Approval Studio') ||
    !handoverOrder[2].includes('Business Delivery')
  ) {
    throw Error('Won deal handover steps order mismatch on /platforms');
  }
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
    const href = await sPanel.locator('.scenario-links a.button').getAttribute('href');
    await page.goto(origin + (href.startsWith('/') ? href : '/' + href));
    if ((await page.locator('select[name="interest"]').inputValue()) !== expectedInterest) {
      throw Error(`Guided scenario ${scenId} did not preselect ${expectedInterest}`);
    }
    await page.goto(origin + '/platforms');
  }

  // Verify Live in Power CRM Automation briefing, Information Hub resources, Talent deliverables & 301 redirects
  await page.goto(origin + '/automation');
  const briefingText = await page.locator('#live-power-crm-briefing').innerText();
  if (!briefingText.includes('Live in Power CRM') || !briefingText.includes('Outreach Centre')) {
    throw Error('Missing Live in Power CRM Automation briefing on /automation');
  }
  await page.goto(origin + '/information');
  if ((await page.locator('#quote-followup-checklist').count()) !== 1 || (await page.locator('#handover-guide').count()) !== 1) {
    throw Error('Missing practical resources on /information');
  }
  await page.goto(origin + '/talent');
  if ((await page.locator('#recruitment-deliverables').count()) !== 1) {
    throw Error('Missing example deliverables on /talent');
  }
  for (const [legacy, dest] of [['/intelligence.html', '/platforms'], ['/academy', '/coaching'], ['/demo', '/dashboard']]) {
    const r = await page.request.get(origin + legacy, { maxRedirects: 0 });
    if (r.status() !== 301 || r.headers()['location'] !== dest) {
      throw Error(`Redirect check failed for ${legacy}: got ${r.status()} -> ${r.headers()['location']}`);
    }
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
  await page.locator('.recruitment-menu summary').click();
  if (!(await page.locator('.recruitment-menu .service-menu-panel').isVisible())) throw Error('Recruitment dropdown');
  if ((await page.locator('.recruitment-menu .service-menu-panel a[href="/partnerships"]').count()) !== 1) throw Error('Partnerships missing under Recruitment dropdown');
  await page.locator('.ai-services-menu summary').click();
  if (!(await page.locator('.ai-services-menu .service-menu-panel').isVisible())) throw Error('Services dropdown');
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

  await page.goto(origin + '/contact?service=crm&email=should-be-scrubbed@example.com');
  if (page.url().includes('should-be-scrubbed')) {
    throw Error('PII email query parameter was not scrubbed from URL');
  }
  if ((await page.locator('select[name="interest"]').inputValue()) !== 'AI services: CRM') {
    throw Error('Service alias mapping failed');
  }
  if (!(await page.locator('#selected-intent-banner').innerText()).includes('AI services: CRM')) {
    throw Error('Selected intent banner did not reflect preselected service');
  }
  if (!(await page.locator('#enquiry-form button[type="submit"]').innerText()).includes('Open email draft')) {
    throw Error('Unconfigured form button must clearly state Open email draft');
  }
  await page.goto(origin + '/contact?interest=UnknownCustomService');
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
  if (!(await page.locator('#enquiry-form input[name="email"]').getAttribute('aria-describedby'))) {
    throw Error('Invalid field missing programmatic aria-describedby link');
  }
  if ((await page.locator('#enquiry-form input[name="name"]').inputValue()) !== 'Synthetic Tester') {
    throw Error('Client brief discarded entered value on validation failure');
  }

  // Test direct submission against local synthetic receiver (/api/test-enquiry), failure recovery, and private-channel guard
  await page.evaluate(() => {
    window.POWERUP_ENQUIRY_CONFIG = {
      commercialEndpoint: '/api/test-enquiry',
      candidateEndpoint: '/api/test-enquiry',
      candidateChannelPrivate: false,
      territoryEndpoint: '/api/test-enquiry',
      timeoutMs: 5000,
      extraHeaders: { 'X-Test-Simulate-Error': '1' }
    };
  });
  await page.locator('#enquiry-form input[name="email"]').fill('synthetic@example.co.uk');
  await page.locator('#enquiry-form textarea[name="message"]').fill('Synthetic commercial walkthrough enquiry for testing.');
  await page.locator('#enquiry-form button[type="submit"]').click();
  await page.locator('#enquiry-form-feedback.is-error').waitFor({ state: 'visible', timeout: 5000 });
  if ((await page.locator('#enquiry-form textarea[name="message"]').inputValue()) !== 'Synthetic commercial walkthrough enquiry for testing.') {
    throw Error('Form did not preserve entered values after submission error');
  }
  await page.evaluate(() => {
    window.POWERUP_ENQUIRY_CONFIG.extraHeaders = {};
  });
  await page.locator('#enquiry-form button[type="submit"]').click();
  await page.locator('#enquiry-form-feedback.is-success').waitFor({ state: 'visible', timeout: 5000 });
  if (!(await page.locator('#enquiry-form-feedback').innerText()).includes('SYN-COM-')) {
    throw Error('Direct commercial submission did not show receiver reference');
  }

  // Candidate private-channel guard & direct synthetic submission
  await page.goto(origin + '/contact?path=candidate#candidate-path');
  if (!(await page.locator('#candidate-path').isVisible())) {
    throw Error('Candidate tab did not activate via ?path=candidate');
  }
  await page.locator('#candidate-form input[name="cand_name"]').fill('Synthetic Candidate');
  await page.locator('#candidate-form button[type="submit"]').click();
  if ((await page.locator('#candidate-form .field-error').count()) < 1) {
    throw Error('Candidate form validation did not trigger on missing contact');
  }
  await page.locator('#candidate-form input[name="cand_email"]').fill('candidate.test@example.co.uk');
  await page.evaluate(() => {
    window.POWERUP_ENQUIRY_CONFIG = { candidateEndpoint: '/api/test-enquiry', candidateChannelPrivate: true, timeoutMs: 5000 };
  });
  await page.locator('#candidate-form button[type="submit"]').click();
  await page.locator('#candidate-form-feedback.is-success').waitFor({ state: 'visible', timeout: 5000 });
  if (!(await page.locator('#candidate-form-feedback').innerText()).includes('SYN-CAN-')) {
    throw Error('Direct candidate submission did not show receiver reference');
  }

  await page.goto(origin + '/check');
  await page.locator('#territory-check-form input[name="name"]').fill('Synthetic Director');
  await page.locator('#territory-check-form button[type="submit"]').click();
  if ((await page.locator('#territory-check-form .field-error').count()) < 1) {
    throw Error('Territory form validation did not trigger');
  }
  await page.locator('#territory-check-form input[name="title"]').fill('Managing Director');
  await page.locator('#territory-check-form input[name="company"]').fill('Synthetic UK Ltd');
  await page.locator('#territory-check-form input[name="email"]').fill('director@example.co.uk');
  await page.locator('#territory-check-form input[name="industry"]').fill('Commercial Services');
  await page.locator('#territory-check-form input[name="region"]').fill('Midlands');
  await page.evaluate(() => {
    window.POWERUP_ENQUIRY_CONFIG = { territoryEndpoint: '/api/test-enquiry', timeoutMs: 5000 };
  });
  await page.locator('#territory-check-form button[type="submit"]').click();
  await page.locator('#territory-check-form-feedback.is-success').waitFor({ state: 'visible', timeout: 5000 });
  if (!(await page.locator('#territory-check-form-feedback').innerText()).includes('SYN-TER-')) {
    throw Error('Direct territory submission did not show receiver reference');
  }

  // 7. Mobile menu & service navigation
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(origin + '/');
  await page.locator('.menu-toggle').click();
  if (!(await page.locator('#navigation').isVisible())) throw Error('Mobile menu');
  await page.locator('.ai-services-menu summary').click();
  await page.locator('.ai-services-menu .service-menu-panel a[href="/crm"]').click();
  if (!page.url().endsWith('/crm')) throw Error('Mobile service navigation');

  if (errors.length) throw Error(errors.join('\n'));
  console.log(
    `PASS: ${checked} responsive page checks; 7 responsive product captures; 3 guided scenarios (complete/feedback/reset/CTA); 7 demo tabs; client/candidate/territory enquiry checks; keyboard & mobile menu. No browser errors.`
  );

  if (process.env.SCREENSHOT_DIR) {
    fs.mkdirSync(process.env.SCREENSHOT_DIR, { recursive: true });
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(origin + '/', { waitUntil: 'networkidle' });
    await page.screenshot({ path: process.env.SCREENSHOT_DIR + '/index_html-1440.png' });
    await page.locator('#headhunting-overview').scrollIntoViewIfNeeded();
    await page.screenshot({ path: process.env.SCREENSHOT_DIR + '/index-headhunting.png' });
    await page.locator('#coaching-overview').scrollIntoViewIfNeeded();
    await page.screenshot({ path: process.env.SCREENSHOT_DIR + '/index-coaching.png' });
    await page.locator('#strategic-difference').scrollIntoViewIfNeeded();
    await page.screenshot({ path: process.env.SCREENSHOT_DIR + '/index-difference.png' });
    await page.locator('#what-you-can-do').scrollIntoViewIfNeeded();
    await page.screenshot({ path: process.env.SCREENSHOT_DIR + '/index-seven-services.png' });
    await page.locator('#one-company-per-sector').scrollIntoViewIfNeeded();
    await page.screenshot({ path: process.env.SCREENSHOT_DIR + '/index-unstoppable.png' });
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
    await page.goto(origin + '/information.html');
    await page.screenshot({ path: process.env.SCREENSHOT_DIR + '/information-final.png' });
    await page.goto(origin + '/about.html');
    if ((await page.locator('#about-faq').count()) !== 1) {
      throw Error('Missing #about-faq section on about.html');
    }
    await page.screenshot({ path: process.env.SCREENSHOT_DIR + '/about-final.png' });
    await page.locator('#about-faq').scrollIntoViewIfNeeded();
    await page.screenshot({ path: process.env.SCREENSHOT_DIR + '/about-faq.png' });
    await page.locator('#one-company-per-sector').scrollIntoViewIfNeeded();
    await page.screenshot({ path: process.env.SCREENSHOT_DIR + '/about-unstoppable.png' });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(origin + '/');
    await page.screenshot({ path: process.env.SCREENSHOT_DIR + '/index_html-390.png' });
    await page.goto(origin + '/dashboard.html');
    await page.locator('[data-workspace]').screenshot({ path: process.env.SCREENSHOT_DIR + '/dashboard-mobile.png' });
  }
} finally {
  await browser.close();
}
