import fs from 'node:fs';
import path from 'node:path';
const pages=fs.readdirSync('dist').filter(x=>x.endsWith('.html'));const failures=[];
for(const page of pages){const html=fs.readFileSync('dist/'+page,'utf8');if((html.match(/<h1[ >]/g)||[]).length!==1)failures.push(page+': expected one H1');for(const [,url]of html.matchAll(/(?:href|src)="([^"]+)"/g)){if(/^(https?:|mailto:|#)/.test(url))continue;const target=url.split(/[?#]/)[0];if(!fs.existsSync(path.join('dist',target)))failures.push(page+': missing '+target)}if(!html.includes('Skip to content'))failures.push(page+': missing skip link')}
if(failures.length){console.error(failures.join('\n'));process.exit(1)}console.log(`PASS: ${pages.length} pages, all local links and assets, one H1 per page, skip links.`);
