import fs from 'node:fs';
import path from 'node:path';

const pages = fs.readdirSync('dist').filter(x => x.endsWith('.html') && x !== 'service-collection-v2.html');
const failures = [];
const seenMeta = new Map();

for (const page of pages) {
  const html = fs.readFileSync('dist/' + page, 'utf8');
  if ((html.match(/<h1[ >]/g) || []).length !== 1) failures.push(page + ': expected one H1');
  if (!html.includes('Skip to content')) failures.push(page + ': missing skip link');
  if (!/<link rel="canonical" href="https:\/\/power-up-talent\.web\.app\/[^"]*">/.test(html)) {
    failures.push(page + ': missing canonical link');
  }
  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  const descMatch = html.match(/<meta name="description" content="([^"]+)">/);
  if (!titleMatch) failures.push(page + ': missing title');
  if (!descMatch) failures.push(page + ': missing description');
  if (page !== 'intelligence.html' && page !== '404.html') {
    const key = titleMatch?.[1] || '';
    if (seenMeta.has(key)) failures.push(`${page}: duplicate title with ${seenMeta.get(key)}`);
    seenMeta.set(key, page);
  }

  for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|#)/.test(url)) continue;
    const target = url.split(/[?#]/)[0];
    if (!fs.existsSync(path.join('dist', target))) failures.push(page + ': missing ' + target);
  }
  for (const [, href] of html.matchAll(/href="([^"]*#[^"]+)"/g)) {
    if (/^(https?:|mailto:)/.test(href)) continue;
    const [file, fragment] = href.split('#');
    const target = path.join('dist', file.split('?')[0] || page);
    if (fs.existsSync(target) && !fs.readFileSync(target, 'utf8').includes(`id="${fragment}"`)) {
      failures.push(page + ': missing anchor ' + href);
    }
  }
}

const platformsHub = fs.readFileSync('dist/platforms.html', 'utf8');
const aiLegacy = fs.readFileSync('dist/intelligence.html', 'utf8');
const contact = fs.readFileSync('dist/contact.html', 'utf8');

for (const [id, name] of [
  ['crm', 'CRM'],
  ['communications', 'Communications'],
  ['sales', 'Sales & Intelligence'],
  ['delivery', 'Business Delivery'],
  ['automation', 'Automation'],
  ['ai-team', 'AI Team'],
  ['marketing', 'Marketing & Social Media']
]) {
  if (!platformsHub.includes(`id="${id}"`)) failures.push('Missing platform card on platforms.html: ' + id);
  if (!aiLegacy.includes(`id="${id}"`)) failures.push('Missing AI service detail on intelligence.html: ' + id);
  if (!fs.existsSync(path.join('dist', 'assets', 'services-v2', `${id}.svg`))) failures.push('Missing AI service icon: ' + id);
  if (!contact.includes(`<option>AI services: ${name}</option>`)) failures.push('Missing enquiry option: ' + name);
}

const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
if (sitemap.includes('/intelligence<')) failures.push('sitemap.xml should not list non-canonical /intelligence');
if (sitemap.includes('/dashboard<')) failures.push('sitemap.xml should not list non-indexed /dashboard');
if (!sitemap.includes('/platforms<')) failures.push('sitemap.xml missing canonical /platforms');

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`PASS: ${pages.length} pages, canonical metadata, sitemap, local links, assets, anchors, headings, skip links, 7 platform details/icons and enquiry options.`);
