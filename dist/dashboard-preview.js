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
  const resets=[...panel.querySelectorAll('[data-workspace-reset]')];
  const rows=[...panel.querySelectorAll('[data-preview-row]')];
  const total=rows.length;
  const update=()=>{
   let count=0;
   const q=search.value.trim().toLowerCase();
   const activeFilter=filter.value!=='all'||q.length>0;
   rows.forEach(row=>{
    const show=(filter.value==='all'||filter.value===row.dataset.state)&&row.textContent.toLowerCase().includes(q);
    row.hidden=!show;if(show)count++;
   });
   panel.querySelector('[data-preview-empty]').hidden=count!==0;
   panel.querySelector('[data-preview-count]').textContent=activeFilter?`Showing ${count} of ${total} sample items`:`${count} sample item${count===1?'':'s'}`;
   if(resets[0])resets[0].hidden=!activeFilter;
  };
  search.addEventListener('input',update);filter.addEventListener('change',update);
  resets.forEach(btn=>btn.addEventListener('click',()=>{search.value='';filter.value='all';update();search.focus()}));
 });
});
document.addEventListener('click',e=>{document.querySelectorAll('.service-menu[open]').forEach(menu=>{if(!menu.contains(e.target))menu.open=false})});
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.service-menu[open]').forEach(menu=>{menu.open=false;menu.querySelector('summary').focus()})});
