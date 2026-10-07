import fs from 'node:fs';
import path from 'node:path';

const pages = fs.readdirSync('.').filter(x => x.endsWith('.html'));
const failures = [];

for (const page of pages) {
  const html = fs.readFileSync(page, 'utf8');
  for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:|#|data:)/.test(url)) continue;
    const target = url.split(/[?#]/)[0];
    if (!fs.existsSync(target)) failures.push(`${page}: missing ${target}`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`PASS: ${pages.length} pages, all local links and assets validated.`);
