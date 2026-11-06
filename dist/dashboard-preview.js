document.querySelectorAll('[data-workspace]').forEach(workspace=>{
 const tabs=[...workspace.querySelectorAll('[data-service-tab]')];
 function select(id,focus=false){
  const active=tabs.find(t=>t.dataset.serviceTab===id);if(!active)return;
  tabs.forEach(t=>{const selected=t===active;t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1});
  workspace.querySelectorAll('[data-service-panel]').forEach(p=>p.hidden=p.dataset.servicePanel!==id);
  workspace.querySelector('[data-workspace-title]').textContent=active.innerText.trim();
  if(focus)active.focus();
 }
 const param=new URLSearchParams(location.search).get('service');
 select(param||workspace.dataset.initialService);
 tabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=>select(tab.dataset.serviceTab));
  tab.addEventListener('keydown',e=>{
   let next;if(['ArrowDown','ArrowRight'].includes(e.key))next=(index+1)%tabs.length;
   if(['ArrowUp','ArrowLeft'].includes(e.key))next=(index-1+tabs.length)%tabs.length;
   if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;
   if(next!==undefined){e.preventDefault();select(tabs[next].dataset.serviceTab,true)}
  });
 });
 workspace.querySelectorAll('[data-service-panel]').forEach(panel=>{
  const search=panel.querySelector('[data-workspace-search]'),filter=panel.querySelector('[data-workspace-filter]');
  const update=()=>{let count=0;panel.querySelectorAll('[data-preview-row]').forEach(row=>{const show=(filter.value==='all'||filter.value===row.dataset.state)&&row.textContent.toLowerCase().includes(search.value.trim().toLowerCase());row.hidden=!show;if(show)count++});panel.querySelector('[data-preview-empty]').hidden=count!==0;panel.querySelector('[data-preview-count]').textContent=`${count} sample item${count===1?'':'s'}`};
  search.addEventListener('input',update);filter.addEventListener('change',update);
 });
});
document.addEventListener('click',e=>{document.querySelectorAll('.service-menu[open]').forEach(menu=>{if(!menu.contains(e.target))menu.open=false})});
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.service-menu[open]').forEach(menu=>{menu.open=false;menu.querySelector('summary').focus()})});
