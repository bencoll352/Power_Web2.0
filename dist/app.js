const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('#navigation');
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}});
const challenges={hire:['A focused search.<br>A clearer hiring brief.','Start with the commercial need behind the vacancy. We’ll define the role, map relevant talent and agree a discreet search approach.','talent.html','Explore headhunting'],team:['Practical coaching.<br>Stronger everyday habits.','Identify where your people need support, then build a programme around sales, branch performance or leadership.','coaching.html','Explore coaching'],market:['Relevant research.<br>A more focused plan.','Explore the talent, accounts and market signals that matter to your business, with human judgement guiding the next step.','intelligence.html','Explore intelligence'],growth:['Connected support.<br>A lasting partnership.','Bring recurring hiring, development and intelligence together around your priorities, with clear responsibilities and regular reviews.','partnerships.html','Explore partnerships']};
document.querySelectorAll('[data-challenge]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-challenge]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));const [title,text,url,label]=challenges[b.dataset.challenge];document.querySelector('#finder-title').innerHTML=title;document.querySelector('#finder-text').textContent=text;const a=document.querySelector('#finder-link');a.href=url;a.textContent=label+' ↗'}));
const form=document.querySelector('#enquiry-form');if(form){const sp=new URLSearchParams(location.search);const interest=sp.get('interest');if(interest&&Array.from(form.elements.interest.options).some(o=>o.value===interest))form.elements.interest.value=interest;const msg=sp.get('message');if(msg&&form.elements.message)form.elements.message.value=msg;form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const d=new FormData(form);const body=`Hello Power-Up Talent,\n\nI’d like to discuss: ${d.get('interest')}\n\nName: ${d.get('name')}\nCompany: ${d.get('company')||'Not specified'}\nEmail: ${d.get('email')}\n\n${d.get('message')}\n\nKind regards,\n${d.get('name')}`;document.querySelector('#email-copy').value=body;document.querySelector('#email-result').hidden=false;location.href=`mailto:info@power-uptalent.co.uk?subject=${encodeURIComponent('Website enquiry — '+d.get('interest'))}&body=${encodeURIComponent(body)}`});document.querySelector('#copy-brief').addEventListener('click',async()=>{const text=document.querySelector('#email-copy');try{await navigator.clipboard.writeText(text.value);document.querySelector('#copy-status').textContent='Brief copied. Paste it into your email.'}catch{text.focus();text.select();document.querySelector('#copy-status').textContent='Select and copy the brief above.'}})}

document.querySelectorAll('[data-intel-tab]').forEach(btn=>{btn.addEventListener('click',()=>{document.querySelectorAll('[data-intel-tab]').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));const targetId=btn.dataset.intelTab;document.querySelectorAll('.intel-panel').forEach(p=>{p.hidden=(p.id!==targetId)})})});

// Interactive Commercial Growth & Territory ROI Engine / Simulator
function initSimulator(){
  const branchCountEl=document.querySelector('#sim-branches');
  const turnoverEl=document.querySelector('#sim-turnover');
  const marginEl=document.querySelector('#sim-margin');
  const teamSizeEl=document.querySelector('#sim-team');
  const vacantSeatsEl=document.querySelector('#sim-vacant');
  if(!branchCountEl||!turnoverEl)return;

  const presets={
    electrical:{branches:4,turnover:3.5,margin:23,team:4,vacant:1},
    engineering:{branches:2,turnover:5.5,margin:32,team:5,vacant:1},
    construction:{branches:3,turnover:7.0,margin:19,team:6,vacant:2},
    facilities:{branches:5,turnover:4.2,margin:26,team:5,vacant:1},
    distribution:{branches:6,turnover:4.8,margin:21,team:4,vacant:2}
  };

  function fmt(val){
    if(val>=1000000)return '£'+(val/1000000).toFixed(2)+'M';
    if(val>=1000)return '£'+Math.round(val/1000).toLocaleString('en-GB')+'k';
    return '£'+Math.round(val).toLocaleString('en-GB');
  }

  function update(){
    const branches=parseFloat(branchCountEl.value);
    const turnover=parseFloat(turnoverEl.value)*1000000;
    const margin=parseFloat(marginEl.value)/100;
    const teamSize=parseFloat(teamSizeEl.value);
    const vacant=parseFloat(vacantSeatsEl.value);

    document.querySelector('#disp-branches').textContent=branches+(branches===1?' branch':' branches');
    document.querySelector('#disp-turnover').textContent='£'+parseFloat(turnoverEl.value).toFixed(1)+'M';
    document.querySelector('#disp-margin').textContent=parseFloat(marginEl.value)+'%';
    document.querySelector('#disp-team').textContent=teamSize+' people';
    document.querySelector('#disp-vacant').textContent=vacant+(vacant===1?' seat':' seats');

    const totalTurnover=turnover*branches;
    const perRepTurnover=turnover/(teamSize||1);
    const annualLeakage=vacant*perRepTurnover*0.48;
    const grossMarginLeakage=annualLeakage*margin;
    const territoryWhitespace=totalTurnover*0.18;

    const recoveredTurnover=annualLeakage*0.85;
    const coachingTurnover=totalTurnover*0.08;
    const intelligenceTurnover=totalTurnover*0.04;
    const totalNewTurnover=recoveredTurnover+coachingTurnover+intelligenceTurnover;
    const grossProfitUplift=totalNewTurnover*margin;

    const estInvestment=Math.min(85000,Math.max(18000,totalTurnover*0.012));
    const roiMultiple=Math.max(3.5,grossProfitUplift/estInvestment).toFixed(1);

    const elLeakage=document.querySelector('#metric-leakage');
    const elProfit=document.querySelector('#metric-profit');
    const elRoi=document.querySelector('#metric-roi');
    const elWhitespace=document.querySelector('#metric-whitespace');

    if(elLeakage)elLeakage.textContent=fmt(grossMarginLeakage);
    if(elProfit)elProfit.textContent=fmt(grossProfitUplift);
    if(elRoi)elRoi.textContent=roiMultiple+'x';
    if(elWhitespace)elWhitespace.textContent=fmt(territoryWhitespace);

    const elSubLeak=document.querySelector('#sub-leakage');
    if(elSubLeak)elSubLeak.textContent=`from ${fmt(annualLeakage)} unserviced turnover`;

    const elSubProfit=document.querySelector('#sub-profit');
    if(elSubProfit)elSubProfit.textContent=`from ${fmt(totalNewTurnover)} added commercial revenue`;

    const elBreakRecovered=document.querySelector('#break-recovered');
    if(elBreakRecovered)elBreakRecovered.textContent=fmt(recoveredTurnover*margin);

    const elBreakCoaching=document.querySelector('#break-coaching');
    if(elBreakCoaching)elBreakCoaching.textContent=fmt(coachingTurnover*margin);

    const elBreakIntel=document.querySelector('#break-intel');
    if(elBreakIntel)elBreakIntel.textContent=fmt(intelligenceTurnover*margin);

    const briefBtn=document.querySelector('#sim-export-btn');
    if(briefBtn){
      const summary=`ROI Modeling: ${branches} branches @ £${(turnover/1000000).toFixed(1)}M (${margin*100}% margin). Vacant seats: ${vacant}. Projected gross profit upside: ${fmt(grossProfitUplift)} (${roiMultiple}x ROI multiple).`;
      briefBtn.href=`contact.html?interest=Growth%20partnership&message=${encodeURIComponent(summary)}`;
    }
  }

  [branchCountEl,turnoverEl,marginEl,teamSizeEl,vacantSeatsEl].forEach(inp=>{
    inp?.addEventListener('input',update);
  });

  document.querySelectorAll('[data-sim-preset]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('[data-sim-preset]').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const p=presets[btn.dataset.simPreset];
      if(p){
        branchCountEl.value=p.branches;
        turnoverEl.value=p.turnover;
        marginEl.value=p.margin;
        teamSizeEl.value=p.team;
        vacantSeatsEl.value=p.vacant;
        update();
      }
    });
  });

  update();
}
initSimulator();
