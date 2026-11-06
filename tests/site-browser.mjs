import fs from 'node:fs';
import { pathToFileURL } from 'node:url';
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE?pathToFileURL(process.env.PLAYWRIGHT_MODULE).href:'playwright');
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
const origin=process.env.TEST_URL||'http://127.0.0.1:4173';
const pages=fs.readdirSync('dist').filter(f=>f.endsWith('.html')&&!['404.html','service-collection-v2.html'].includes(f));
const errors=[];let checked=0;
const page=await browser.newPage();page.on('pageerror',e=>errors.push(e.message));
try{
 for(const width of [390,820,1024,1440]){
  await page.setViewportSize({width,height:1000});
  for(const route of pages){
   const response=await page.goto(origin+'/'+route);if(response.status()!==200)throw Error('HTTP '+response.status()+' '+route);
   if(await page.locator('h1').count()!==1)throw Error('Heading structure '+route);
   if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw Error('Page overflow '+route+' @ '+width);
   if(await page.locator('#navigation .service-menu').count()!==1)throw Error('Missing header services menu '+route);
   if(await page.locator('footer .service-menu,.breadcrumb .service-menu').count())throw Error('Menu outside header '+route);
   if(/â€™|â†|Â©|Â£/.test(await page.locator('body').innerText()))throw Error('Broken punctuation '+route);
   const ids=await page.locator('[id]').evaluateAll(nodes=>nodes.map(n=>n.id));if(new Set(ids).size!==ids.length)throw Error('Duplicate IDs '+route);
   checked++;
  }
 }
 await page.setViewportSize({width:1440,height:1000});await page.goto(origin+'/dashboard.html');
 const workspace=page.locator('[data-workspace]');
 const ids=['crm','communications','sales','delivery','automation','ai-team','marketing'];
 for(const id of ids){
  await workspace.locator(`[data-service-tab="${id}"]`).click();
  const panel=workspace.locator(`[data-service-panel="${id}"]`);if(!await panel.isVisible())throw Error('Tab selection '+id);
  await panel.locator('[data-workspace-filter]').selectOption('review');if(await panel.locator('[data-preview-row]:visible').count()!==1)throw Error('Status filter '+id);
  await panel.locator('[data-workspace-search]').fill('no-matching-example');if(!await panel.locator('[data-preview-empty]').isVisible())throw Error('Empty state '+id);
  await panel.locator('[data-workspace-search]').fill('');await panel.locator('[data-workspace-filter]').selectOption('all');
  if(await panel.locator('[data-preview-row]:visible').count()!==4)throw Error('Filter reset '+id);
  await panel.locator('.workspace-bottom a').click();if(!(await page.locator('select[name="interest"]').inputValue()).startsWith('AI services:'))throw Error('Enquiry preselection '+id);
  await page.goto(origin+'/dashboard.html');
 }
 await page.goto(origin+'/dashboard.html?service=marketing');if(!await page.locator('#panel-marketing').isVisible())throw Error('Deep link selection');
 await page.locator('#tab-marketing').focus();await page.keyboard.press('Home');if(!await page.locator('#panel-crm').isVisible())throw Error('Keyboard tabs');await page.keyboard.press('End');if(!await page.locator('#panel-marketing').isVisible())throw Error('Keyboard End');
 await page.locator('.service-menu summary').click();if(!await page.locator('.service-menu-panel').isVisible())throw Error('Services dropdown');await page.keyboard.press('Escape');
 await page.setViewportSize({width:390,height:844});await page.goto(origin+'/');await page.locator('.menu-toggle').click();if(!await page.locator('#navigation').isVisible())throw Error('Mobile menu');await page.locator('.service-menu summary').click();await page.locator('.service-menu-panel a[href="crm.html"]').click();if(!page.url().endsWith('/crm.html'))throw Error('Mobile service navigation');
 if(errors.length)throw Error(errors.join('\n'));
 console.log(`PASS: ${checked} responsive page checks; 7 dashboard tabs, search/status/empty states, enquiry selections, deep links, keyboard tabs and mobile dropdown. No browser errors.`);
 if(process.env.SCREENSHOT_DIR){fs.mkdirSync(process.env.SCREENSHOT_DIR,{recursive:true});await page.setViewportSize({width:1440,height:1000});await page.goto(origin+'/dashboard.html');await page.locator('[data-workspace]').screenshot({path:process.env.SCREENSHOT_DIR+'/dashboard-final.png'});await page.goto(origin+'/crm.html');await page.screenshot({path:process.env.SCREENSHOT_DIR+'/crm-final.png'});await page.setViewportSize({width:390,height:844});await page.goto(origin+'/dashboard.html');await page.locator('[data-workspace]').screenshot({path:process.env.SCREENSHOT_DIR+'/dashboard-mobile.png'});}
}finally{await browser.close()}
