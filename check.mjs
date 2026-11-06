import fs from 'node:fs';
import path from 'node:path';
const pages=fs.readdirSync('dist').filter(x=>x.endsWith('.html')&&x!=='service-collection-v2.html');const failures=[];
for(const page of pages){const html=fs.readFileSync('dist/'+page,'utf8');if((html.match(/<h1[ >]/g)||[]).length!==1)failures.push(page+': expected one H1');for(const [,url]of html.matchAll(/(?:href|src)="([^"]+)"/g)){if(/^(https?:|mailto:|#)/.test(url))continue;const target=url.split(/[?#]/)[0];if(!fs.existsSync(path.join('dist',target)))failures.push(page+': missing '+target)}if(!html.includes('Skip to content'))failures.push(page+': missing skip link')}
for(const page of pages){
  const html=fs.readFileSync('dist/'+page,'utf8');
  for(const [,href] of html.matchAll(/href="([^"]*#[^"]+)"/g)){
    if(/^(https?:|mailto:)/.test(href))continue;
    const [file,fragment]=href.split('#');
    const target=path.join('dist',file.split('?')[0]||page);
    if(fs.existsSync(target)&&!fs.readFileSync(target,'utf8').includes(`id="${fragment}"`))failures.push(page+': missing anchor '+href);
  }
}
const ai=fs.readFileSync('dist/intelligence.html','utf8');
const contact=fs.readFileSync('dist/contact.html','utf8');
for(const [id,name] of [['crm','CRM'],['communications','Communications'],['sales','Sales & Intelligence'],['delivery','Business Delivery'],['automation','Automation'],['ai-team','AI Team'],['marketing','Marketing & Social Media']]){
  if(!ai.includes(`id="${id}"`))failures.push('Missing AI service detail: '+id);
  if(!fs.existsSync(path.join('dist','assets','services-v2',`${id}.svg`)))failures.push('Missing AI service icon: '+id);
  if(!contact.includes(`<option>AI services: ${name}</option>`))failures.push('Missing enquiry option: '+name);
}
if(failures.length){console.error(failures.join('\n'));process.exit(1)}console.log(`PASS: ${pages.length} pages, local links, assets and anchors, headings, skip links, 7 AI service details/icons and enquiry options.`);
