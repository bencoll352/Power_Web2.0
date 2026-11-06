import fs from 'node:fs';
import { partnershipHome, aiServicesPage, refreshPage, refreshShared } from './site-offer.mjs';

const nav = [
  ['partnerships', 'Partnerships'],
  ['talent', 'Headhunting'],
  ['coaching', 'Coaching'],
  ['intelligence', 'AI Business Services'],
  ['about', 'About']
];

const arrow = '<span aria-hidden="true">â†—</span>';
const button = (text, href = 'contact.html', secondary = false) =>
  `<a class="button ${secondary ? 'secondary' : ''}" href="${href}">${text}${arrow}</a>`;
const tag = t => `<p class="eyebrow"><span></span>${t}</p>`;
const sectionHead = (small, title, desc = '') =>
  `<div class="section-head"><div>${tag(small)}<h2>${title}</h2></div>${desc ? `<p>${desc}</p>` : ''}</div>`;
const cta = () =>
  `<section class="cta wrap"><div>${tag('THE NEXT CHAPTER')}<h2>What could your<br>business do next?</h2><p>Tell us what youâ€™re building, where youâ€™re stuck, or who you need.<br>Weâ€™ll start with the right conversation.</p></div>${button('Letâ€™s talk', 'contact.html')}</section>`;

const shell = (id, title, description, body) => `<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} | Power-Up Talent</title><meta name="description" content="${description}"><meta name="theme-color" content="#151815"><meta property="og:title" content="${title} | Power-Up Talent"><meta property="og:description" content="${description}"><meta property="og:type" content="website"><link rel="icon" href="assets/favicon.svg"><link rel="stylesheet" href="styles.css?v=7.0"><script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@context":"https://schema.org","@type":"ProfessionalService","name":"Power-Up Talent","url":"https://power-uptalent.co.uk","logo":"https://power-uptalent.co.uk/assets/logo-brand.png","image":"https://power-uptalent.co.uk/assets/logo-brand.png","description":"Specialist executive headhunting, outcome-led commercial performance coaching, and AI market intelligence for UK technical distribution, engineering, manufacturing, construction and facilities management.","email":"info@power-uptalent.co.uk","telephone":"+44-20-8000-0000","priceRange":"Â£Â£Â£","address":{"@type":"PostalAddress","addressCountry":"GB"},"areaServed":{"@type":"Country","name":"United Kingdom"},"knowsAbout":["Electrical Wholesale Recruitment","Technical Distribution Headhunting","Branch Manager Recruitment","Commercial Sales Coaching","Gross Margin Defence Clinics","UK Companies House Market Intelligence","Single-Client Territory Exclusivity"]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What makes Power-Up Talent different from traditional recruitment agencies?","acceptedAnswer":{"@type":"Answer","text":"Power-Up Talent operates a strict single-client territory exclusivity policy. We never represent your direct local competitors. We combine executive headhunting with 12-month commercial performance coaching and live UK Companies House market intelligence."}},{"@type":"Question","name":"Which sectors does Power-Up Talent specialise in across the UK?","acceptedAnswer":{"@type":"Answer","text":"We specialise exclusively in technical distribution, electrical wholesale, engineering, manufacturing, construction, M&E contracting, and facilities management."}},{"@type":"Question","name":"What is single-client territory exclusivity?","acceptedAnswer":{"@type":"Answer","text":"When we partner with your business in an agreed sector and geographic territory, our executive search and market intelligence assets are dedicated solely to your market leadership. We guarantee never to place talent with or recruit for your direct local competitors."}}]}]}</script><script src="app.js" defer></script></head><body><a class="skip" href="#main">Skip to content</a><header class="header"><div class="nav-wrap"><a class="brand" href="index.html" aria-label="Power-Up Talent home"><img class="brand-logo-img" src="assets/logo-brand.png" alt="Power-Up Talent"></a><button class="menu-toggle" aria-expanded="false" aria-controls="navigation">Menu <span>â˜°</span></button><nav id="navigation" aria-label="Main navigation">${nav.map(([link, label]) => `<a ${id === link ? 'aria-current="page"' : ''} href="${link}.html">${label}</a>`).join('')}<a class="nav-contact" ${id === 'check' ? 'aria-current="page"' : ''} href="check.html">Claim territory ${arrow}</a></nav></div></header><main id="main">${body}</main><footer><div class="wrap footer-grid"><div><a class="brand" href="index.html"><img class="brand-logo-img" src="assets/logo-brand.png" alt="Power-Up Talent"><span>POWER-UP<span class="brand-sub">T A L E N T</span></span></a><p>People. Performance. Partnership.</p><p class="footer-note">Specialist talent, performance coaching and AI intelligence<br>for UK technical distribution, engineering, construction & industry.</p></div><div><h3>Explore</h3>${nav.map(([l, t]) => `<a href="${l}.html">${t}</a>`).join('')}</div><div><h3>Start a conversation</h3><a href="mailto:info@power-uptalent.co.uk">info@power-uptalent.co.uk ${arrow}</a><a href="contact.html?interest=Career%20conversation">For candidates ${arrow}</a><p>Strict single-client territory exclusivity across the UK.</p></div></div><div class="wrap footer-bottom"><span>Â© ${new Date().getFullYear()} Power-Up Talent.</span><a href="https://power-uptalent.co.uk/privacy">Privacy</a><a href="https://power-uptalent.co.uk/terms">Terms</a><a href="https://power-uptalent.co.uk/cookies">Cookies</a><span class="footer-end">Human judgement. Better intelligence.</span></div></footer></body></html>`;

function pageHero(label, title, desc, video = 'about-hero.mp4') {
  return `<section class="page-hero"><video autoplay loop muted playsinline preload="auto" class="hero-video-bg"><source src="assets/videos/${video}" type="video/mp4"></video><div class="video-overlay"></div><div class="wrap">${tag(label)}<h1>${title}</h1><p>${desc}</p></div></section>`;
}

function faq(q, a) {
  return `<details><summary>${q}<span aria-hidden="true">+</span></summary><p>${a}</p></details>`;
}

function cards(items) {
  return `<div class="cards">${items.map(([n, t, d, list]) => `<article><span class="card-num">${n}</span><h3>${t}</h3><p>${d}</p>${list ? `<ul>${list.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}</article>`).join('')}</div>`;
}

const orbit = `<div class="orbit-art" role="img" aria-label="Headhunting, coaching and intelligence connected around your business"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="orbit-cross"></div><div class="orbit-core"><span>YOUR</span><strong>BUSINESS</strong><span>AT THE CENTRE</span></div><div class="orbit-node node-one"><i>01</i>People</div><div class="orbit-node node-two"><i>02</i>Performance</div><div class="orbit-node node-three"><i>03</i>Intelligence</div><div class="art-caption"><span class="live-dot"></span> ONE CONNECTED PARTNERSHIP</div></div>`;

const services = `<div class="service-list"><a href="talent.html" class="service-row"><span class="service-no">01 / PEOPLE</span><div><h3>Secure the right talent.</h3><p>Discreet headhunting for the leaders, commercial performers and technical specialists your business needs across wholesale, engineering and industry.</p></div><span class="round-arrow">â†—</span></a><a href="coaching.html" class="service-row"><span class="service-no">02 / PERFORMANCE</span><div><h3>Develop a stronger team.</h3><p>Practical coaching for technical sales, branch management and commercial leadership. Built around the work your people do every day.</p></div><span class="round-arrow">â†—</span></a><a href="intelligence.html" class="service-row"><span class="service-no">03 / INTELLIGENCE</span><div><h3>See your next opportunity.</h3><p>Live AI-enabled intelligence: verified UK directors, Companies House CRN matching, and territory whitespace mapping.</p></div><span class="round-arrow">â†—</span></a></div>`;

// Upgraded Components
const fiduciaryBanner = `
<section class="fiduciary-charter-wrap">
  <div class="wrap">
    <div class="fiduciary-charter-card">
      <div class="fiduciary-badge">
        <span class="pulse-dot"></span>
        FIDUCIARY &amp; UK GDPR GOVERNANCE STANDARD
      </div>
      <p class="fiduciary-quote-lead">
        <strong>Human-led, technology-supported:</strong>
        Technology supports the research. Human judgement drives the action. Power-Up Intelligence provides market clarity across candidate availability, competitor movements and account whitespace â€” governed under strict UK GDPR compliance.
      </p>
      <div class="fiduciary-pillars">
        <div class="fiduciary-pillar-item">
          <div>
            <strong>UK GDPR Sovereignty</strong>
            <span>100% compliant data residency &amp; consent protocols.</span>
          </div>
        </div>
        <div class="fiduciary-pillar-item">
          <div>
            <strong>Human-in-the-Loop</strong>
            <span>Zero automated database mutations without human review.</span>
          </div>
        </div>
        <div class="fiduciary-pillar-item">
          <div>
            <strong>Zero-Fabrication Data Standard</strong>
            <span>Live Companies House CRN, SIC &amp; active director validation.</span>
          </div>
        </div>
        <div class="fiduciary-pillar-item">
          <div>
            <strong>Tenant Row-Level Security</strong>
            <span>Total memory and data isolation between client accounts.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
const marketVisibilitySection = `
<section class="wrap section">
  <div class="section-head">
    <div>
      ${tag('MARKET VISIBILITY &amp; SECTOR TELEMETRY')}
      <h2>Clearer market visibility<br>across hiring and growth.</h2>
    </div>
    <p>We combine specialised sector intelligence with human research to give leaders early visibility of talent movements, competitor reorganisations and commercial opportunities before the rest of the market reacts.</p>
  </div>

  <div class="telemetry-ribbon">
    <div class="telemetry-metric">
      <div class="telemetry-val">5.2M+</div>
      <div class="telemetry-lbl">UK Entities Mapped</div>
      <div class="telemetry-sub">Live Companies House CRN matching</div>
    </div>
    <div class="telemetry-metric">
      <div class="telemetry-val">100%</div>
      <div class="telemetry-lbl">Human-Governed</div>
      <div class="telemetry-sub">Mandatory human approval gate</div>
    </div>
    <div class="telemetry-metric">
      <div class="telemetry-val">35%</div>
      <div class="telemetry-lbl">Fiduciary Margin Floor</div>
      <div class="telemetry-sub">Enforces CFO profitability floor</div>
    </div>
    <div class="telemetry-metric">
      <div class="telemetry-val">&lt; 1s</div>
      <div class="telemetry-lbl">Voice &amp; Search Velocity</div>
      <div class="telemetry-sub">Sub-second neural UK voice routing</div>
    </div>
  </div>

  <div class="cards" style="margin-bottom: 30px;">
    <article>
      <span class="card-num">01 / TALENT MAPPING</span>
      <h3>Market mapping &amp; talent availability</h3>
      <p>Real-time identification of active and passive candidate pools across UK technical, commercial and leadership tiers.</p>
      <ul>
        <li>Comprehensive candidate pool mapping</li>
        <li>Regional availability indicators</li>
        <li>Passive candidate tracking</li>
        <li>Specialist skill availability insights</li>
      </ul>
      <div class="capability-transform-badge">
        <span>â†—</span> <strong>Transformative Outcome:</strong> Accelerates hiring velocity by up to 45% with pre-mapped target talent.
      </div>
    </article>

    <article>
      <span class="card-num">02 / COMPETITOR RADAR</span>
      <h3>Competitor movement &amp; structure insights</h3>
      <p>Monitoring organisational changes, executive transitions and team expansion across rival firms in your sector.</p>
      <ul>
        <li>Leadership movement tracking</li>
        <li>Team restructuring alerts</li>
        <li>Competitor headcount expansion</li>
        <li>Whitespace talent opportunities</li>
      </ul>
      <div class="capability-transform-badge">
        <span>â†—</span> <strong>Transformative Outcome:</strong> Instant alert when competing branches restructure or senior fee-earners become vulnerable.
      </div>
    </article>

    <article>
      <span class="card-num">03 / WHITESPACE DISCOVERY</span>
      <h3>Account whitespace &amp; target identification</h3>
      <p>Highlighting underserved regional accounts and sector opportunities for commercial business development.</p>
      <ul>
        <li>Regional target account discovery</li>
        <li>Underserved customer segment identification</li>
        <li>Commercial opportunity scoring</li>
        <li>Key decision-maker mapping</li>
      </ul>
      <div class="capability-transform-badge">
        <span>â†—</span> <strong>Transformative Outcome:</strong> Identifies uncaptured regional wholesale and contracting accounts in your territory.
      </div>
    </article>

    <article>
      <span class="card-num">04 / ENGAGEMENT SIGNALS</span>
      <h3>Candidate interest signals &amp; timing</h3>
      <p>Detecting optimal engagement windows when high-performing leaders are open to confidential career discussions.</p>
      <ul>
        <li>Career transition indicator tracking</li>
        <li>Optimal engagement window timing</li>
        <li>Discreet contact protocols</li>
        <li>High-intent candidate matching</li>
      </ul>
      <div class="capability-transform-badge">
        <span>â†—</span> <strong>Transformative Outcome:</strong> Engages proven performers months before they appear on the open market.
      </div>
    </article>

    <article>
      <span class="card-num">05 / BENCHMARKING</span>
      <h3>Benchmarking &amp; compensation context</h3>
      <p>Authoritative UK salary, bonus structure and benefits benchmarks across wholesale, engineering and manufacturing.</p>
      <ul>
        <li>Realistic base salary benchmarks</li>
        <li>Commission &amp; bonus package norms</li>
        <li>Regional remuneration variances</li>
        <li>Retention incentive benchmarking</li>
      </ul>
      <div class="capability-transform-badge">
        <span>â†—</span> <strong>Transformative Outcome:</strong> Eliminates offer rejections and avoids overpaying while defending internal pay equity.
      </div>
    </article>

    <article style="border-top-color: var(--gold); background: #fdfbf7;">
      <span class="card-num">06 / GROWTH DESK</span>
      <h3>Power-Up Growth Desk</h3>
      <p>Outsourced lead generation, target account research and campaign execution for commercial teams.</p>
      <ul>
        <li>Target decision-maker research</li>
        <li>Account data enrichment &amp; validation</li>
        <li>Structured outbound campaign support</li>
        <li>Lead qualification before handoff</li>
      </ul>
      <div class="capability-transform-badge">
        <span>â†—</span> <strong>Transformative Outcome:</strong> Supplies branch sales reps with pre-verified director meetings and actionable pipeline.
      </div>
    </article>
  </div>
</section>
`;
const interactiveOutcomeEngine = `
<section class="wrap section">
  <div class="section-head">
    <div>
      ${tag('INTERACTIVE TRANSFORMATION ENGINE')}
      <h2>How we turn intelligence<br>into commercial outcomes.</h2>
    </div>
    <p>Step through our interactive four-stage commercial methodology to see how raw market data transforms into protected margin, higher conversion, and predictable EBITDA growth.</p>
  </div>

  <div class="outcome-engine-wrap">
    <div class="outcome-stepper-nav" role="tablist" aria-label="Commercial outcome stages">
      <button class="outcome-step-btn active" data-step-btn="1">
        <span class="outcome-step-num">STAGE 01</span>
        <span class="outcome-step-name">Define Objective</span>
      </button>
      <button class="outcome-step-btn" data-step-btn="2">
        <span class="outcome-step-num">STAGE 02</span>
        <span class="outcome-step-name">Configure Market View</span>
      </button>
      <button class="outcome-step-btn" data-step-btn="3">
        <span class="outcome-step-num">STAGE 03</span>
        <span class="outcome-step-name">Turn Intelligence Into Action</span>
      </button>
      <button class="outcome-step-btn" data-step-btn="4">
        <span class="outcome-step-num">STAGE 04</span>
        <span class="outcome-step-name">Maintain Governance</span>
      </button>
    </div>

    <!-- Step 1 Content -->
    <div id="outcome-step-1" class="outcome-stage-body">
      <div class="outcome-stage-left">
        <div class="fiduciary-badge" style="margin-bottom: 12px;">STAGE 01: COMMERCIAL SCOPING</div>
        <h3>Define Objective</h3>
        <p>We clarify the specific commercial, geographic or talent challenge requiring market visibility â€” whether expanding a regional branch, filling a critical leadership gap, or conquering competitor whitespace.</p>
        <ul class="outcome-stage-points">
          <li>Identify exact target territory postcodes &amp; commercial SIC codes</li>
          <li>Audit competitive threats and margin pressure points</li>
          <li>Set quantifiable EBITDA targets and hiring timelines</li>
        </ul>
        <button class="button secondary" data-goto-step="2" style="background:#facc15!important; color:#000000!important; font-weight:800!important; border:none!important;">Next: Configure Market View ${arrow}</button>
      </div>
      <div class="outcome-stage-right">
        <div class="outcome-metric-card">
          <div class="outcome-metric-lead">Â£450k+</div>
          <div class="outcome-metric-title">Territory Whitespace Identified</div>
          <p class="outcome-metric-desc">Average uncaptured commercial account potential unlocked per defined regional branch territory.</p>
        </div>
      </div>
    </div>

    <!-- Step 2 Content -->
    <div id="outcome-step-2" class="outcome-stage-body" hidden>
      <div class="outcome-stage-left">
        <div class="fiduciary-badge" style="margin-bottom: 12px;">STAGE 02: REGISTRY &amp; TARGET MAPPING</div>
        <h3>Configure Market View</h3>
        <p>Intelligence workflows filter competitor data, candidate signals and whitespace targets strictly to your agreed parameters, sector and territory under the Zero-Fake Data policy.</p>
        <ul class="outcome-stage-points">
          <li>Live cross-referencing against 5.2M+ UK Companies House entities</li>
          <li>Verified direct dials and active director appointment matching</li>
          <li>Exclusion of out-of-territory records to keep reps laser-focused</li>
        </ul>
        <button class="button secondary" data-goto-step="3" style="background:#facc15!important; color:#000000!important; font-weight:800!important; border:none!important;">Next: Turn Into Action ${arrow}</button>
      </div>
      <div class="outcome-stage-right">
        <div class="outcome-metric-card">
          <div class="outcome-metric-lead">5.2M+</div>
          <div class="outcome-metric-title">Live Companies House Records</div>
          <p class="outcome-metric-desc">Continuous CRN, SIC classification, and active director filing verification across Britain.</p>
        </div>
      </div>
    </div>

    <!-- Step 3 Content -->
    <div id="outcome-step-3" class="outcome-stage-body" hidden>
      <div class="outcome-stage-left">
        <div class="fiduciary-badge" style="margin-bottom: 12px;">STAGE 03: COMMERCIAL EXECUTION</div>
        <h3>Turn Intelligence Into Action</h3>
        <p>Insights are translated into executive headhunting campaigns, account outreach plans or strategic headcount decisions with human expert direction and automated margin defence.</p>
        <ul class="outcome-stage-points">
          <li>Enforce CFO 35% margin floor across all customer proposals</li>
          <li>Equip branch teams with pre-call director dossiers and WhatsApp routes</li>
          <li>Launch discreet headhunting outreach targeting proven performers</li>
        </ul>
        <button class="button secondary" data-goto-step="4" style="background:#facc15!important; color:#000000!important; font-weight:800!important; border:none!important;">Next: Maintain Governance ${arrow}</button>
      </div>
      <div class="outcome-stage-right">
        <div class="outcome-metric-card">
          <div class="outcome-metric-lead">68%</div>
          <div class="outcome-metric-title">Faster Deal Velocity</div>
          <p class="outcome-metric-desc">Dramatic reduction in lead discovery and pre-qualification time per high-margin opportunity.</p>
        </div>
      </div>
    </div>

    <!-- Step 4 Content -->
    <div id="outcome-step-4" class="outcome-stage-body" hidden>
      <div class="outcome-stage-left">
        <div class="fiduciary-badge" style="margin-bottom: 12px;">STAGE 04: GOVERNANCE &amp; SOVEREIGNTY</div>
        <h3>Maintain Governance</h3>
        <p>Human validation, strict client data isolation and UK GDPR compliance govern every step of data processing and candidate engagement. No automated mutation touches client CRM data without human authorisation.</p>
        <ul class="outcome-stage-points">
          <li>Tenant row-level security isolates all bot memories and client records</li>
          <li>Human supervisor gate with one-click 'Take Control' override</li>
          <li>Strict single-client non-compete guarantees in your territory</li>
        </ul>
        <button class="button" data-goto-step="1" style="background:#facc15!important; color:#000000!important; font-weight:800!important; border:none!important;">â†º Restart Transformation Journey</button>
      </div>
      <div class="outcome-stage-right">
        <div class="outcome-metric-card">
          <div class="outcome-metric-lead">100%</div>
          <div class="outcome-metric-title">Fiduciary Compliance</div>
          <p class="outcome-metric-desc">Complete UK GDPR sovereignty with human sign-off on every outbound action and hire.</p>
        </div>
      </div>
    </div>
  </div>
</section>
`;
const intelShowcase = `
<section class="wrap section">
  <div class="section-head">
    <div>
      ${tag('PRODUCTION INTELLIGENCE SUITE')}
      <h2>Governed software.<br>Actionable territory data.</h2>
    </div>
    <p>Inspect the five core modules of the Power-Up Intelligence platform. Below are the exact operational explainers, commercial ROI metrics, and fiduciary guardrails derived directly from our live system.</p>
  </div>

  <div class="intel-showcase">
    <div class="intel-tabs" role="tablist" aria-label="Intelligence modules">
      <button data-intel-tab="tab-exec" aria-pressed="true">01 Executive Dashboard</button>
      <button data-intel-tab="tab-crm" aria-pressed="false">02 Contacts (CRM)</button>
      <button data-intel-tab="tab-lead" aria-pressed="false">03 Lead Discovery Guide</button>
      <button data-intel-tab="tab-bot" aria-pressed="false">04 CoreBot Studio</button>
      <button data-intel-tab="tab-voice" aria-pressed="false">05 Voice &amp; AI Receptionist</button>
    </div>

    <!-- Tab 01: Executive Dashboard (NEW EXECUTIVE DASHBOARD IMAGE) -->
    <div id="tab-exec" class="intel-panel">
      <div class="intel-panel-copy">
        <div class="module-header-tag">
          <span class="eyebrow" style="color:var(--gold);"><span></span>EXECUTIVE WORKSPACE</span>
          <span class="module-permission-pill">Access: Executive / Managing Director / Board Level</span>
        </div>
        <h3>Executive Dashboard Outcomes &amp; Commercial ROI</h3>
        
        <div class="modal-section-card">
          <h5>Operational Purpose / What It Does</h5>
          <p>Live visibility of open commercial pipeline (Â£6.8M+ tracked in real-time), weighted win probabilities, deal velocity, and priority agendas. Eliminates stale offline spreadsheets.</p>
        </div>

        <div class="modal-section-card highlight">
          <h5>Commercial outcomes you will get</h5>
          <p>Real-time revenue forecasting, pipeline velocity, weighted deal conversion &amp; priority agendas. Eliminates stale offline spreadsheets.</p>
        </div>

        <div class="modal-section-card">
          <h5>Key business benefits</h5>
          <ul>
            <li>Interactive quarterly revenue forecasts</li>
            <li>Live deal stage tracking &amp; margin analysis</li>
            <li>Immediate executive action agendas</li>
            <li>Account whitespace identification</li>
          </ul>
        </div>

        <div class="modal-section-card">
          <h5>Operational Value</h5>
          <p>Provides managing directors and commercial leaders with instant board-level revenue predictability, live deal tracking, and whitespace account expansion.</p>
        </div>

        ${button('Request executive walkthrough', 'contact.html?interest=Intelligence%20walkthrough')}
      </div>
      <div>
        <img src="assets/intel-executive-dashboard.png" alt="Executive Dashboard preview" loading="lazy">
        <div style="text-align:center; margin-top:12px;">
          <span class="fiduciary-badge" style="font-size:10px; margin:0;">â— LIVE COMMERCIAL WORKSPACE</span>
        </div>
      </div>
    </div>

    <!-- Tab 02: Contacts (CRM) (EXACT COPY FROM MODAL SCREENSHOT) -->
    <div id="tab-crm" class="intel-panel" hidden>
      <div class="intel-panel-copy">
        <div class="module-header-tag">
          <span class="eyebrow" style="color:var(--gold);"><span></span>DECISION-MAKER CRM</span>
          <span class="module-permission-pill">Access: Standard User / Tenant Admin</span>
        </div>
        <h3>Contacts Outcomes &amp; Commercial ROI</h3>
        
        <div class="modal-section-card">
          <h5>Operational Purpose / What Contacts Does</h5>
          <p>People, key decision makers, and communication logs.</p>
        </div>

        <div class="modal-section-card highlight">
          <h5>Commercial outcomes you will get</h5>
          <p>Track time to find and update a customer record. Compare overdue follow-ups, duplicate records and opportunity conversion.</p>
        </div>

        <div class="modal-section-card">
          <h5>Key business benefits</h5>
          <p>Clear steps for completing work in this section. Review results before moving to the next action.</p>
        </div>

        <div class="modal-section-card">
          <h5>Operational Value</h5>
          <p>Maintains accurate stakeholder profiles, communication channels, and interaction histories, ensuring sales and account teams always reach the right person.</p>
        </div>

        ${button('Request contacts walkthrough', 'contact.html?interest=Intelligence%20walkthrough')}
      </div>
      <div>
        <img src="assets/intel-crm-contacts.png" alt="CRM Decision-Maker Contacts preview" loading="lazy">
        <div style="text-align:center; margin-top:12px;">
          <span class="fiduciary-badge" style="font-size:10px; margin:0;">â— DECISION-MAKER CRM LEDGER</span>
        </div>
      </div>
    </div>

    <!-- Tab 03: Lead Discovery Guide (EXACT COPY FROM MODAL SCREENSHOT) -->
    <div id="tab-lead" class="intel-panel" hidden>
      <div class="intel-panel-copy">
        <div class="module-header-tag">
          <span class="eyebrow" style="color:var(--gold);"><span></span>UK COMPANY REGISTRY</span>
          <span class="module-permission-pill">Access: Consultant / Sales Rep Access â€¢ Human Review Authority</span>
        </div>
        <h3>Lead Discovery Guide Outcomes &amp; Commercial ROI</h3>
        
        <div class="modal-section-card">
          <h5>Operational Purpose / What Lead Discovery Guide Does</h5>
          <p>Unified multi-source lead discovery, UK registry explorer, competitor dossiers &amp; outcome reporting.</p>
        </div>

        <div class="modal-section-card highlight">
          <h5>Commercial outcomes you will get</h5>
          <p>Track research time per qualified opportunity. Measure verified contact coverage and qualified leads becoming deals.</p>
        </div>

        <div class="modal-section-card">
          <h5>Key business benefits</h5>
          <p>Clear steps for completing work in this section. Review results before moving to the next action.</p>
        </div>

        <div class="modal-section-card">
          <h5>Operational Value</h5>
          <p>Accelerates outbound pipeline generation by automating lead discovery while strictly enforcing the Zero-Fake Data policy, consent checks, and human-in-the-loop validation.</p>
        </div>

        ${button('Request lead engine walkthrough', 'contact.html?interest=Intelligence%20walkthrough')}
      </div>
      <div>
        <img src="assets/intel-lead-engine.png" alt="UK Lead Discovery Engine preview" loading="lazy">
        <div style="text-align:center; margin-top:12px;">
          <span class="fiduciary-badge" style="font-size:10px; margin:0;">â— UK REGISTRY EXPLORER</span>
        </div>
      </div>
    </div>

    <!-- Tab 04: CoreBot Studio (EXACT COPY FROM MODAL SCREENSHOT) -->
    <div id="tab-bot" class="intel-panel" hidden>
      <div class="intel-panel-copy">
        <div class="module-header-tag">
          <span class="eyebrow" style="color:var(--gold);"><span></span>GOVERNED AUTOMATION</span>
          <span class="module-permission-pill">Access: Standard User / Tenant Admin</span>
        </div>
        <h3>CoreBot Studio â€” Autonomous Teammates Guide Outcomes &amp; Commercial ROI</h3>
        
        <div class="modal-section-card">
          <h5>Operational Purpose / What CoreBot Studio Does</h5>
          <p>AI teammates with business tools, live research and governed routines.</p>
        </div>

        <div class="modal-section-card highlight">
          <h5>Commercial outcomes you will get</h5>
          <p>Measure time per successfully completed task, including review. Track failed runs, corrections, response time and provider cost.</p>
        </div>

        <div class="modal-section-card">
          <h5>Key business benefits</h5>
          <p>Clear steps for completing work in this section. Review results before moving to the next action.</p>
        </div>

        <div class="modal-section-card">
          <h5>Fiduciary &amp; Compliance Rules</h5>
          <ul>
            <li><strong>Zero-Fabrication Data Standard:</strong> Bot must verify via live search before citing Company House SIC codes or director appointments.</li>
            <li><strong>Fiduciary Margin Floor:</strong> Quote Drafter and Margin Auditor enforce CFO 35% margin floor. Blocks quotes with lower margin unless executive override provided.</li>
            <li><strong>Tenant Row-Level Security:</strong> CoreBot execution contexts are strictly isolated by tenant ID. Bots cannot read memory across tenants.</li>
          </ul>
        </div>

        <div class="modal-section-card">
          <h5>Operational Value</h5>
          <p>Accelerates team execution velocity, operational transparency, and revenue predictability.</p>
        </div>

        ${button('Request CoreBot walkthrough', 'contact.html?interest=Intelligence%20walkthrough')}
      </div>
      <div>
        <img src="assets/intel-corebot-studio.png" alt="CoreBot Studio preview" loading="lazy">
        <div style="text-align:center; margin-top:12px;">
          <span class="fiduciary-badge" style="font-size:10px; margin:0;">â— GOVERNED AUTONOMOUS TEAMMATES</span>
        </div>
      </div>
    </div>

    <!-- Tab 05: Voice & AI Receptionist Guide (EXACT COPY FROM MODAL SCREENSHOT) -->
    <div id="tab-voice" class="intel-panel" hidden>
      <div class="intel-panel-copy">
        <div class="module-header-tag">
          <span class="eyebrow" style="color:var(--gold);"><span></span>VOICE INTELLIGENCE</span>
          <span class="module-permission-pill">Access: Voice Administrator / Admin Role Required to Authorise Proposals</span>
        </div>
        <h3>Voice &amp; AI Receptionist Guide Outcomes &amp; Commercial ROI</h3>
        
        <div class="modal-section-card">
          <h5>Operational Purpose / What Voice &amp; AI Receptionist Does</h5>
          <p>Configure inbound AI receptionist, voice numbers, and call logs.</p>
        </div>

        <div class="modal-section-card highlight">
          <h5>Commercial outcomes you will get</h5>
          <p>Measure time per successfully completed task, including review. Track failed runs, corrections, response time and provider cost.</p>
        </div>

        <div class="modal-section-card">
          <h5>Key business benefits</h5>
          <p>Clear steps for completing work in this section. Review results before moving to the next action.</p>
        </div>

        <div class="modal-section-card">
          <h5>Operational Value</h5>
          <p>Ensures 100% UK GDPR data sovereignty, strict human authorisation before canonical CRM updates, and multi-tenant isolation.</p>
        </div>

        ${button('Request voice walkthrough', 'contact.html?interest=Intelligence%20walkthrough')}
      </div>
      <div>
        <img src="assets/intel-voice-receptionist.png" alt="Voice Receptionist preview" loading="lazy">
        <div style="text-align:center; margin-top:12px;">
          <span class="fiduciary-badge" style="font-size:10px; margin:0;">â— 24/7 NEURAL UK VOICE AGENT</span>
        </div>
      </div>
    </div>
  </div>
</section>
`;

const home = `<section class="hero"><video autoplay loop muted playsinline preload="auto" class="hero-video-bg"><source src="assets/videos/home-hero.mp4" type="video/mp4"></video><div class="video-overlay"></div><div class="wrap hero-grid"><div>${tag('SPECIALIST TALENT & GROWTH PARTNER')}<h1 style="color:#ffffff!important;">The right people.<br><em style="color:#ffffff!important;">A stronger position in your market.</em></h1><p class="hero-copy">Headhunting, performance coaching and AI commercial intelligence.<br>Connected around your business across technical distribution, engineering, construction & industry.</p><p class="hero-foot">Technical Distribution <span>/</span> Engineering & Manufacturing <span>/</span> Construction & M&E <span>/</span> Facilities Management</p></div>${orbit}</div></section><div class="sector-strip"><div class="wrap"><span>BUILT FOR UK TECHNICAL INDUSTRY</span><strong>Technical Distribution</strong><strong>Engineering & Manufacturing</strong><strong>Construction & M&E</strong><strong>Facilities & Building Services</strong><strong>Commercial Contracting</strong></div></div><section class="wrap section">${sectionHead('YOUR AMBITION. OUR STARTING POINT.', 'Growth starts with people.<br>Progress takes partnership.', 'A critical branch vacancy. A sales team ready for higher conversion. A new territory to conquer. We bring the right support together around the challenge in front of you.')}${services}</section><section class="partnership-section"><div class="wrap partnership-grid"><div>${tag('A RELATIONSHIP THAT BUILDS')}<h2>Your next hire.<br>Your next chapter.</h2><p>Specialist recruitment is where many relationships begin. An ongoing partnership brings hiring, team development and market intelligence into one practical plan.</p>${button('How partnerships work', 'partnerships.html')}</div><div class="pathway"><div><span>01</span><h3>Understand the ambition</h3><p>Your priorities, your market and the cost of standing still.</p></div><div><span>02</span><h3>Build the right plan</h3><p>Agree the people, development and intelligence support you need.</p></div><div><span>03</span><h3>Stay close to progress</h3><p>Review what is working and adapt as your business moves forward.</p></div></div></div></section><section class="wrap section">${sectionHead('FIND YOUR STARTING POINT', 'Whatâ€™s on your agenda?', 'Choose the challenge closest to yours. Weâ€™ll show you a useful place to begin.')}<div class="finder"><div class="finder-options" role="group" aria-label="Business challenge"><button data-challenge="hire" aria-pressed="true">I need a critical hire <span>â†—</span></button><button data-challenge="team" aria-pressed="false">I want a stronger team <span>â†—</span></button><button data-challenge="market" aria-pressed="false">I need a clearer market view <span>â†—</span></button><button data-challenge="growth" aria-pressed="false">Iâ€™m planning sustained growth <span>â†—</span></button></div><div class="finder-result" aria-live="polite"><span class="eyebrow" id="finder-label">YOUR STARTING POINT</span><h3 id="finder-title">A focused search.<br>A clearer hiring brief.</h3><p id="finder-text">Start with the commercial need behind the vacancy. Weâ€™ll define the role, map relevant talent and agree a discreet search approach.</p><a id="finder-link" class="text-link" href="talent.html">Explore headhunting â†—</a></div></div></section>${intelShowcase}<section class="wrap section faq-section">${sectionHead('A FEW THINGS WORTH KNOWING', 'Clarity from the start.')}<div class="faqs">${faq('Can we start with a single hire?', 'Yes. A focused search or specialist recruitment assignment can be the right starting point. Longer-term support is shaped around your needs, with the scope agreed before work begins.')}${faq('How do coaching and intelligence fit together?', 'Coaching helps your people act more effectively. Intelligence helps them focus on relevant talent, accounts and market opportunities. A partnership connects these activities to agreed business priorities.')}${faq('Is exclusivity available?', 'Selected strategic partnerships can include exclusivity. Sector, territory, competitor boundaries, duration and service scope are agreed in writing for the engagement.')}${faq('Do we need to buy the portal separately?', 'Portal access is included within selected partnerships and configured around the agreed work. We will explain the relevant capabilities and access as part of your proposal.')}</div></section>${cta()}`;

const partnership = pageHero('POWER-UP PARTNERSHIPS', 'One partner.<br><em>A shared ambition.</em>', 'Bring hiring, team development and commercial intelligence into a plan that moves with your business.', 'platform-video.mp4') + `<section class="wrap section">${sectionHead('THE RIGHT LEVEL OF SUPPORT', 'Start where you are.<br>Build what comes next.', 'Every engagement starts with a conversation about your priorities. Scope, deliverables and review points are agreed around your business.')}${cards([['01', 'Search partnership', 'For a business-critical appointment requiring a focused, discreet search.', ['Role blueprint and search plan', 'Relevant talent and competitor mapping', 'Structured assessment and shortlist', 'Offer and onboarding coordination']], ['02', 'Growth partnership', 'For businesses connecting recurring hiring with stronger team capability.', ['An agreed hiring and development plan', 'Coaching around priority needs', 'Relevant commercial intelligence', 'Regular progress and priority reviews']], ['03', 'Embedded partnership', 'For expansion, multiple appointments or ongoing specialist capacity.', ['An extension of your internal team', 'Coordinated hiring pipelines', 'Clear responsibilities and reporting', 'Development and intelligence where agreed']]])}</section><section class="partnership-section"><div class="wrap partnership-grid"><div>${tag('ILLUSTRATIVE PARTNERSHIP')}<h2>A new branch.<br>A joined-up plan.</h2><p>For a business opening a branch or regional division, the work could begin with appointing the right leader, then developing the teamâ€™s sales routines and researching relevant local trade accounts.</p><p class="muted">An example of how services can connect across UK technical distribution and contracting. Your scope and measures are agreed individually.</p></div><div class="pathway"><div><span>01</span><h3>People</h3><p>Define the leadership brief and map relevant candidates.</p></div><div><span>02</span><h3>Performance</h3><p>Support the manager with coaching and a practical team plan.</p></div><div><span>03</span><h3>Opportunity</h3><p>Build a clearer picture of local customers, competitors and territory coverage.</p></div></div></div></section><section class="wrap section split"><div>${tag('ALIGNED FROM DAY ONE')}<h2>Clear scope.<br>Shared priorities.</h2></div><div><p class="large-copy">We agree what success looks like, who owns each action and when we review progress.</p><p>Selected strategic engagements include defined single-client territorial exclusivity. We confirm the sector, territory, competitor boundaries and duration in writing, alongside the services included.</p><a class="text-link" href="check.html">Audit your territory exclusivity â†—</a></div></section>${cta()}`;

const talent = pageHero('SPECIALIST HEADHUNTING', 'The right person.<br><em>For what comes next.</em>', 'Discreet search for leadership, commercial and technical appointments across wholesale, technical distribution, engineering, construction and facilities management.', 'talent-video.mp4') + `<section class="wrap section">${sectionHead('SEARCH WITH COMMERCIAL CONTEXT', 'Understand the role.<br>Then find the person.', 'We start with the problem behind the vacancy: what this person needs to deliver, the team they will join and the market they will work in.')}${cards([['01', 'Retained & exclusive search', 'For confidential, senior or scarce appointments.', ['Managing directors and general managers', 'Regional and operational directors', 'Succession and confidential replacements']], ['02', 'Specialist recruitment', 'Focused support for commercial and technical hiring.', ['Branch and profit centre managers', 'Technical sales and specification engineers', 'Commercial, estimating and project leaders']], ['03', 'Embedded hiring', 'A coordinated approach to recurring requirements.', ['Branch network and regional expansion', 'New technical divisions and territory launches', 'Ongoing specialist hiring capacity']]])}</section><section class="wrap process-section">${sectionHead('THE SEARCH PROCESS', 'Care at every step.')}<ol class="process-list">${[['Define', 'Agree the role blueprint, responsibilities and evidence of success.'], ['Map', 'Research relevant employers, talent pools and market context.'], ['Approach', 'Engage potential candidates discreetly and professionally.'], ['Assess', 'Evaluate experience and capability against agreed job criteria.'], ['Support', 'Coordinate interviews, offers and the transition into the role.']].map(([t, d], i) => `<li><span>0${i + 1}</span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol></section><section class="wrap note-band"><h2>Thinking about your own next move?</h2><p>Start a confidential career conversation with the Power-Up Talent team.</p><a class="text-link" href="contact.html?interest=Career%20conversation">Talk about your career â†—</a></section>${cta()}`;

// Curriculum Accordion Component for Coaching
const curriculumAccordion = `<section class="wrap section">${sectionHead('THE SALES & LEADERSHIP CURRICULUM', 'Field-proven modules.<br>Measurable margin uplift.', 'Explore the core training sprints built specifically for branch managers, external technical reps, and commercial directors in UK industry.')}<div class="accordion"><div class="acc-item"><button type="button" class="acc-btn" aria-expanded="false"><span>+</span> 01 / High-Velocity Technical Prospecting & Opportunity Qualification</button><div class="acc-panel"><p>Eliminate unproductive chasing and build disciplined discovery habits across commercial and branch sales teams.</p><ul><li>Decision-maker identification: Accessing real budget holders and directors rather than gatekeepers.</li><li>Opportunity qualification frameworks: Focusing external reps exclusively on high-probability, high-margin jobs.</li><li>Outbound cadence design: Combining email, telephone, and verified LinkedIn outreach for consistent pipeline.</li></ul></div></div><div class="acc-item"><button type="button" class="acc-btn" aria-expanded="false"><span>+</span> 02 / Value Specification & Gross Margin Defence Clinics</button><div class="acc-panel"><p>Stop trading away margin under competitive contractor price pressure.</p><ul><li>Rebate, terms, and cost-of-delay negotiation tactics that protect gross profit percentages.</li><li>Specification selling: Locking in technical product advantages early in the contractor estimating cycle.</li><li>Live objection handling clinics using recordings of actual customer negotiations.</li></ul></div></div><div class="acc-item"><button type="button" class="acc-btn" aria-expanded="false"><span>+</span> 03 / Branch Operating Rhythm & Profit centre Leadership</button><div class="acc-panel"><p>Empower branch managers to run their unit as a high-performing commercial business.</p><ul><li>Weekly trade counter and sales cadence: Target account reviews, quote tracking, and pipeline velocity.</li><li>Underperformer turnarounds: Clear coaching expectations, delegation, and accountability metrics.</li><li>Key customer retention rituals: Defending top 20 accounts from aggressive competitor poaching.</li></ul></div></div><div class="acc-item"><button type="button" class="acc-btn" aria-expanded="false"><span>+</span> 04 / Practical AI Daily Adoption & Trade Desk Intelligence Routines</button><div class="acc-panel"><p>Equip commercial teams to use modern AI intelligence safely to multiply sales output.</p><ul><li>Pre-call intelligence briefs: Instant account history and Companies House financial summaries.</li><li>Quote follow-up automation with human approval: Never let a profitable quote slip through the cracks.</li><li>Responsible UK GDPR and commercial data isolation habits.</li></ul></div></div></div></section>`;

const coaching = pageHero('COACHING & DEVELOPMENT', 'Better habits.<br><em>Stronger performance.</em>', 'Practical development for the sales performers, branch managers and leaders who make UK technical businesses thrive.', 'coaching-video.mp4') + `<section class="wrap section">${sectionHead('BUILT AROUND THE DAY JOB', 'Skills your people<br>can put to work.', 'We connect development to real situations: a customer negotiation, a branch margin challenge or a commercial team that needs sharper execution.')}${cards([['01', 'Sales Performance Sprint', 'Build more consistent prospecting, qualification and margin defence.', ['Opportunity and call reviews', 'Objection handling and value selling', 'Account development routines']], ['02', 'Branch Performance Accelerator', 'Give branch managers a clearer operating rhythm and commercial focus.', ['Customer and territory priorities', 'Pricing, rebates and margin conversations', 'Team accountability and action plans']], ['03', 'Leadership Accelerator', 'Help technical managers lead people with clarity and confidence.', ['Delegation and expectations', 'Feedback and difficult conversations', 'Developing and supporting high performers']], ['04', 'Practical AI Adoption', 'Identify useful applications and build confident daily working habits.', ['Priority workflow selection', 'Research and administration support', 'Human review and responsible use']], ['05', 'Intelligence-Led Growth', 'Turn market research into a practical target account plan.', ['Target-account selection', 'Decision-maker research', 'Opportunity prioritisation']], ['06', 'Hiring Manager Development', 'Bring structure and consistency to your hiring decisions.', ['Role and interview preparation', 'Evidence-based assessment', 'Offer and onboarding planning']]])}</section>${curriculumAccordion}<section class="partnership-section"><div class="wrap split"><div>${tag('FROM SESSION TO ACTION')}<h2>Make development<br>part of the work.</h2></div><div><p class="large-copy">Agree the challenge. Practise the skills. Put a plan into action. Review progress.</p><p>Delivery can combine workshops, one-to-one coaching and ongoing team support across UK branches and regional teams. The format, duration and measures are agreed around your people and priorities.</p>${button('Discuss team development', 'contact.html?interest=Coaching')}</div></div></section>${cta()}`;

const intelligence = pageHero('AI-ENABLED COMMERCIAL INTELLIGENCE', 'Know your market.<br><em>Focus your next move.</em>', 'Practical visibility of talent, verified UK decision-makers, and commercial opportunitiesâ€”powering specialist search and growth partnerships.', 'ai-hero.mp4') + `<section class="wrap section">${sectionHead('START WITH THE DECISION', 'Better questions.<br>More useful intelligence.', 'We define what you need to understand, then combine verified registry data, platform capabilities and human judgement.')}${cards([['01', 'Where is the right talent?', 'Map relevant employers, roles and talent pools to inform a focused search.', ['Talent and employer mapping', 'Regional search context', 'Candidate pipeline visibility']], ['02', 'Where should we focus?', 'Research accounts and decision-makers around your target territory.', ['Verified UK company registry lookup', 'Territory and competitor context', 'Direct contact & decision-maker data']], ['03', 'What needs our attention?', 'Bring clearer structure to the activity around your commercial priorities.', ['Live pipeline and forecasting visibility', 'Governed AI workflows', 'Agreed reporting and review']]])}</section>${intelShowcase}<section class="wrap section faq-section">${sectionHead('PRACTICAL BY DESIGN', 'A walkthrough with a purpose.')}<div class="faqs">${faq('For business owners and managing directors', 'Focus the conversation on hiring priorities, leadership coverage, margin leakage, and the whitespace opportunities relevant to your growth plan.')}${faq('For commercial and branch leaders', 'Explore target-account research, verified director contacts, local market visibility and practical follow-up workflows.')}${faq('For talent and HR teams', 'Explore employer mapping, candidate pipelines and visibility across the search process.')}</div></section>${cta()}`;

// Territory Exclusivity Checker Page
const check = pageHero('TERRITORY EXCLUSIVITY AUDIT', 'One client per sector.<br><em>One partner per territory.</em>', 'Check if your UK industry and geographic territory are open under Power-Up Talentâ€™s strict single-client exclusivity policy.', 'platform-video.mp4') + `<section class="wrap section">${sectionHead('CHECK AVAILABILITY IN CONFIDENCE', 'Tell us your industry and area.<br>We will verify if itâ€™s open.', 'We confirm availability in confidence within one working day. If we already hold the mandate for your sector and territory, we will say so immediately.')}<div class="check-grid"><div class="check-form"><form id="territory-check-form"><div class="form-grid"><label>Your Name<input name="name" required placeholder="e.g. David Miller"></label><label>Job Title<input name="title" required placeholder="e.g. Managing Director"></label></div><div class="form-grid"><label>Company Name<input name="company" required placeholder="e.g. Apex Technical Group"></label><label>Work Email<input name="email" type="email" required placeholder="d.miller@company.co.uk"></label></div><div class="form-grid"><label>Industry Sector<input name="industry" required placeholder="e.g. Technical Distribution, HVAC, M&E"></label><label>Geographic Region / Postcode<input name="region" required placeholder="e.g. Midlands, South East, North West"></label></div><label>Primary Priority<select name="priority"><option>Elite Executive Search & Leadership</option><option>Branch & Sales Performance Coaching</option><option>CorePlatform Intelligence & CRM</option><option>Comprehensive Growth Partnership (RPO)</option></select></label><label>Growth Objectives in Brief<textarea name="plan" rows="4" placeholder="Roles you need, margin you want to defend, or territory expansion plan..."></textarea></label><button class="button" type="submit">Audit My Territory ${arrow}</button><div id="territory-result" hidden style="margin-top:20px; padding:18px; background:#e2f3e8; border:1px solid #7bc698; border-radius:4px;"><h3 style="font-size:16px; color:#18532c; margin-bottom:6px;">Exclusivity Check Dispatched</h3><p id="territory-status-text" style="font-size:13px; color:#236137; margin:0;"></p></div><p class="form-small">Strictly confidential. Verified within one business day. We routinely sign bilateral NDAs before discussing commercial details. <a href="https://power-uptalent.co.uk/privacy">Privacy policy</a>.</p></form></div><div class="check-sidebar"><div class="check-card"><span class="eyebrow" style="color:var(--gold);"><span></span>WHAT HAPPENS NEXT</span><h3 style="font-size:20px; color:#fff; margin-bottom:12px;">The Verification Journey</h3><ul class="check-steps"><li><strong>Within 1 working day</strong> â€” we confirm whether your region and industry sector are open.</li><li><strong>45-Minute Discovery</strong> â€” confidential session on your commercial roadmap, margin targets, and talent gaps.</li><li><strong>Diagnostic Review</strong> â€” talent scarcity mapping and territory whitespace review before any proposal.</li><li><strong>Written Mandate</strong> â€” defined sector boundary, territory exclusivity, agreed deliverables, and metrics in writing.</li></ul></div><div class="check-card subtle"><span class="eyebrow"><span></span>THE EXCLUSIVITY RULE</span><h3 style="font-size:18px; margin-bottom:10px;">Why Single-Client Exclusivity?</h3><p style="font-size:13px; color:var(--muted); line-height:1.6;">We never represent your direct local competitors. When we partner with your business in a territory, our headhunting and intelligence assets are dedicated exclusively to your market leadership.</p></div></div></div></section>${cta()}`;

const about = pageHero('ABOUT POWER-UP TALENT', 'People at the heart.<br><em>Progress in mind.</em>', 'A specialist talent, development and commercial intelligence partner for businesses across technical distribution, engineering, manufacturing, construction and facilities management.', 'about-hero.mp4') + `
<section class="wrap section split">
  <div>
    ${tag('WHY WE DO WHAT WE DO')}
    <h2>Built for the businesses<br>that keep Britain moving.</h2>
  </div>
  <div>
    <p class="large-copy">Technical distribution, wholesale, engineering and contracting form the vital backbone of the UK economy. Yet for years, these sectors have been treated by generic recruitment agencies as transactional volume feeds.</p>
    <p>We created Power-Up Talent to fundamentally challenge and change that model. We do what we do because we believe high-consequence technical businesses deserve a commercial growth partner who truly understands trade counter dynamics, regional rebate pressures, and the critical importance of branch-level leadership.</p>
    <p>We do not treat talent as commodities or trade away your margins. Our mission is to build lasting team capability, protect gross margins, and empower the people who drive British industrial commerce.</p>
  </div>
</section>

<section class="wrap section">
  ${sectionHead('WHY WE MAKE A DIFFERENCE', 'A fundamentally different<br>commercial standard.', 'Three structural commitments that set Power-Up Talent apart from conventional transactional recruitment agencies.')}
  ${cards([
    ['01', 'Radical Single-Client Loyalty', 'We never play both sides of the street. Traditional recruiters place someone with you today, then recruit for your direct competitor down the road tomorrow. Under our strict single-client territory policy, our search and intelligence assets are dedicated exclusively to your market leadership.', ['Guaranteed non-compete in your sector & region', 'Zero conflict of interest across client accounts', 'Strict protection of your existing workforce']],
    ['02', 'Commercial Context Over Keywords', 'A successful appointment requires far more than matching keywords on a CV. We evaluate candidates against commercial track record, gross margin awareness, trade rebate pressure, and cultural grit within your territory.', ['In-depth candidate DNA profiling', 'Track record of margin defence and price discipline', 'Cultural and leadership fit assessment']],
    ['03', 'One Connected Growth Engine', 'Recruitment in isolation leaves long-term value on the table. We fuse executive headhunting with 12-month performance coaching and live Companies House market intelligence, ensuring talent stays, integrates, and delivers measurable ROI.', ['12-month commercial coaching sprints', 'Trade desk routine reinforcement', 'Live Companies House market whitespace mapping']]
  ])}
</section>

<section class="partnership-section">
  <div class="wrap">
    <div class="section-head">
      <div>
        ${tag('OUR CULTURE & CORE VALUES')}
        <h2>What we stand for.<br>How we operate.</h2>
      </div>
      <p>The operating creed that guides every executive conversation, client partnership, and candidate engagement.</p>
    </div>
    <div class="cards">
      <article>
        <span class="card-num">01 / INTEGRITY</span>
        <h3>Uncompromising Honesty</h3>
        <p>We provide direct, unvarnished commercial advice. If a candidate is not the right fit, or if your territory plan has blind spots, we tell you the truth rather than chasing a quick fee.</p>
        <ul>
          <li>Zero placement-driven bias</li>
          <li>Transparent communication at every stage</li>
          <li>Strict bilateral NDA confidentiality</li>
        </ul>
      </article>
      <article>
        <span class="card-num">02 / GRIT</span>
        <h3>Trade Counter Respect</h3>
        <p>We respect the hard-working reality of trade counters, manufacturing plants, and engineering sites. We speak your language and operate without corporate jargon or empty buzzwords.</p>
        <ul>
          <li>Decades of genuine sector immersion</li>
          <li>Real appreciation of branch margin pressures</li>
          <li>Practical solutions built for the day job</li>
        </ul>
      </article>
      <article>
        <span class="card-num">03 / PARTNERSHIP</span>
        <h3>Long-Term Capability</h3>
        <p>We measure our success not by placement volume, but by your EBITDA expansion, team retention, and market share growth over years of collaboration.</p>
        <ul>
          <li>Single-client territory dedication</li>
          <li>Post-placement coaching support</li>
          <li>Aligned commercial outcomes</li>
        </ul>
      </article>
    </div>
  </div>
</section>

<section class="wrap section">
  ${sectionHead('HUMAN JUDGEMENT FIRST', 'Technology informs.<br>People decide.', 'In an era of automated recruitment algorithms, we believe the highest-consequence decisions demand seasoned human insight.')}
  ${cards([
    ['01', 'Deep Sector Understanding', 'Informed research, relevant commercial questioning, and deep respect for the daily pressures on technical commercial teams.', ['Specialist industry immersion', 'Regional territory awareness', 'Commercial context mapping']],
    ['02', 'Discretion & Dignity', 'Professional, respectful conversations that protect client strategy and candidate career confidentiality at every step.', ['Confidential candidate representation', 'Brand protection for hiring clients', 'Discreet search execution']],
    ['03', 'Human-Governed Intelligence', 'Live Companies House data and AI platforms provide visibility across 5.2M+ UK entities, but experienced human directors lead every interview, evaluation, and recommendation.', ['AI-assisted market mapping', 'Human-led candidate assessment', 'Bespoke executive onboarding plans']]
  ])}
</section>
${cta()}`;

// Dual-Path Contact Page
const contact = `<section class="wrap contact-layout"><div>${tag('LETâ€™S START WITH YOU')}<h1>Whatâ€™s your<br><em>next chapter?</em></h1><p class="large-copy">A critical vacancy. A stronger team.<br>A long-term commercial partnership.</p><p>Tell us what you have in mind and we will start a confidential conversation about the right support.</p><a class="email-link" href="mailto:info@power-uptalent.co.uk">info@power-uptalent.co.uk â†—</a><div class="contact-note"><h3>Single-Client Exclusivity</h3><p>We confirm availability within one working day and routinely sign non-disclosure agreements before reviewing details.</p></div></div><div><div class="path-tabs" role="tablist"><button type="button" class="path-tab-btn active" data-path-tab="client-path">PATH 1: I am hiring or planning growth</button><button type="button" class="path-tab-btn" data-path-tab="candidate-path">PATH 2: I am exploring my next move</button></div><div id="client-path" class="path-panel active"><form id="enquiry-form"><h2>Client Commercial Brief</h2><p>Prepares an email in your mail app for you to review and send.</p><div class="form-grid"><label>Your name<input name="name" autocomplete="name" required placeholder="Full name"></label><label>Company<input name="company" autocomplete="organisation" placeholder="Business name"></label></div><label>Email address<input name="email" type="email" autocomplete="email" required placeholder="you@company.co.uk"></label><label>Requirement Type<select name="interest"><option>Growth partnership</option><option>Critical hire</option><option>Embedded hiring</option><option>Coaching</option><option>Intelligence walkthrough</option><option>Territory exclusivity audit</option></select></label><label>Growth or Hiring Brief<textarea name="message" rows="5" required placeholder="Target roles, regional territory, key challenges or growth targets..."></textarea></label><button class="button" type="submit">Prepare my email ${arrow}</button><p class="form-small">Prepared in your browser. Nothing stored without consent. <a href="https://power-uptalent.co.uk/privacy">Privacy policy</a>.</p><div id="email-result" hidden aria-live="polite"><h3>Your brief is ready</h3><p>Review and send it in your email app. If it hasnâ€™t opened, copy below and email to info@power-uptalent.co.uk.</p><textarea id="email-copy" readonly aria-label="Prepared brief"></textarea><button id="copy-brief" type="button" class="button secondary">Copy brief</button><p id="copy-status" role="status"></p></div></form></div><div id="candidate-path" class="path-panel"><form id="candidate-form"><h2>Confidential Candidate Enquiry</h2><p>Strictly private career conversation with our executive headhunting team.</p><div class="form-grid"><label>Your name<input name="cand_name" required placeholder="Full name"></label><label>Current / Target Role<input name="cand_role" placeholder="e.g. Regional Director, Branch Manager"></label></div><label>Confidential Email<input name="cand_email" type="email" required placeholder="personal@email.com"></label><label>Phone Number (Mobile preferred)<input name="cand_phone" placeholder="07..."></label><label>Current Sector & Target Locations<textarea name="cand_notes" rows="4" placeholder="Wholesale, engineering, construction, target salary, preferred region..."></textarea></label><a class="button" href="mailto:info@power-uptalent.co.uk?subject=Confidential%20Candidate%20Career%20Conversation">Start Private Discussion ${arrow}</a><p class="form-small">100% confidential. No employer contact without your express written authorisation.</p></form></div></div></section>`;

const pages = [
  ['index', 'People. Performance. Partnership.', 'Specialist headhunting, performance coaching and AI-enabled commercial intelligence for UK industry.', home],
  ['partnerships', 'Talent & Growth Partnerships', 'Connect hiring, team development and commercial intelligence around your business.', partnership],
  ['talent', 'Specialist Headhunting', 'Discreet search for leadership, commercial and technical appointments across UK industry.', talent],
  ['coaching', 'Coaching & Development', 'Practical sales, branch management, leadership and AI adoption coaching.', coaching],
  ['intelligence', 'Commercial Intelligence', 'AI-enabled talent mapping, verified UK decision-makers, and practical market visibility.', intelligence],
  ['check', 'Territory Exclusivity Audit', 'Verify single-client exclusivity availability for your UK industry and geographic region.', check],
  ['about', 'About Us', 'Meet the purpose and approach behind Power-Up Talent.', about],
  ['contact', 'Letâ€™s Talk', 'Start a conversation about hiring, coaching or a growth partnership.', contact]
];

fs.mkdirSync('dist', { recursive: true });
for (const [id, t, d, b] of pages) {
  const content = id === 'index' ? partnershipHome : id === 'intelligence' ? aiServicesPage : refreshPage(id, b);
  const title = id === 'intelligence' ? 'AI Business Services' : t;
  const description = id === 'index' ? 'Elite recruitment and headhunting, coaching and AI business services. A partnership configured around your UK business.' : id === 'intelligence' ? 'CRM, communications, sales intelligence, business delivery, automation, AI team and marketing within a tailored Power-Up partnership.' : d;
  fs.writeFileSync(`dist/${id}.html`, refreshShared(shell(id, title, description, content)));
}
fs.writeFileSync('dist/404.html', refreshShared(shell('404', 'Page not found', 'Find your next step with Power-Up Talent.', pageHero('PAGE NOT FOUND', 'Letâ€™s find your<br><em>next step.</em>', 'The page youâ€™re looking for isnâ€™t here. Use the navigation to explore our services.', 'about-hero.mp4'))));
console.log(`Built ${pages.length} pages and 404 page.`);
