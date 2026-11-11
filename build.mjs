import fs from 'node:fs';
import { partnershipHome, aiServicesPage, refreshPage, refreshShared } from './site-offer.mjs';
import { servicePages, dashboardPage, professionalPage, professionalShell } from './professional-site.mjs';

const nav = [
  ['partnerships', 'Partnerships'],
  ['talent', 'Headhunting'],
  ['coaching', 'Coaching'],
  ['platforms', 'AI &amp; Business Platforms'],
  ['about', 'About']
];

const siteBaseUrl = 'https://power-up-talent.web.app';
const arrow = '<span aria-hidden="true">↗</span>';
const button = (text, href = 'contact.html', secondary = false) =>
  `<a class="button ${secondary ? 'secondary' : ''}" href="${href}">${text}${arrow}</a>`;
const tag = t => `<p class="eyebrow"><span></span>${t}</p>`;
const sectionHead = (small, title, desc = '') =>
  `<div class="section-head"><div>${tag(small)}<h2>${title}</h2></div>${desc ? `<p>${desc}</p>` : ''}</div>`;
const cta = (interest = 'Growth partnership') =>
  `<section class="cta wrap"><div>${tag('NEXT STEP')}<h2>Discuss your priorities<br>with Power-Up Talent.</h2><p>Tell us whether you are hiring, developing a team or exploring our business platforms — we will route your enquiry to the right person.</p></div><div class="actions">${button('Discuss your priorities', `contact.html?interest=${encodeURIComponent(interest)}`)}${button('Explore the platforms', 'platforms.html', true)}</div></section>`;

function canonicalFor(id) {
  if (id === 'index') return `${siteBaseUrl}/`;
  if (id === 'intelligence') return `${siteBaseUrl}/platforms`;
  return `${siteBaseUrl}/${id}`;
}

function robotsFor(id) {
  if (['dashboard', 'intelligence', '404'].includes(id)) return 'noindex,follow';
  return 'index,follow';
}

const shell = (id, title, description, body) => {
  const canonicalUrl = canonicalFor(id);
  const robots = robotsFor(id);
  return `<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} | Power-Up Talent</title><meta name="description" content="${description}"><meta name="robots" content="${robots}"><link rel="canonical" href="${canonicalUrl}"><meta name="theme-color" content="#151815"><meta property="og:title" content="${title} | Power-Up Talent"><meta property="og:description" content="${description}"><meta property="og:url" content="${canonicalUrl}"><meta property="og:image" content="${siteBaseUrl}/assets/logo-brand.png"><meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${title} | Power-Up Talent"><meta name="twitter:description" content="${description}"><link rel="icon" href="assets/favicon.svg"><link rel="stylesheet" href="styles.css?v=7.0"><script type="application/ld+json">{}</script><script src="app.js" defer></script></head><body><a class="skip" href="#main">Skip to content</a><header class="header"><div class="nav-wrap"><a class="brand" href="index.html" aria-label="Power-Up Talent home"><img class="brand-logo-img" src="assets/logo-brand.png" width="360" height="60" alt="Power-Up Talent"></a><button class="menu-toggle" aria-expanded="false" aria-controls="navigation">Menu <span>☰</span></button><nav id="navigation" aria-label="Main navigation">${nav.map(([link, label]) => `<a ${id === link ? 'aria-current="page"' : ''} href="${link}.html">${label}</a>`).join('')}<a class="nav-contact" ${id === 'contact' ? 'aria-current="page"' : ''} href="check.html">Claim territory ${arrow}</a></nav></div></header><main id="main">${body}</main><footer><div class="wrap footer-grid"><div><a class="brand" href="index.html"><img class="brand-logo-img" src="assets/logo-brand.png" width="400" height="67" alt="Power-Up Talent"></a><p>Great people. Stronger teams. A more connected business.</p><p class="footer-note">Specialist talent, performance coaching and AI intelligence<br>for UK technical distribution, engineering, construction &amp; industry.</p></div><div><h3>Explore</h3>${nav.map(([l, t]) => `<a href="${l}.html">${t}</a>`).join('')}</div><div><h3>Start a conversation</h3><a href="contact.html">Discuss your priorities ${arrow}</a><a href="contact.html?path=candidate#candidate-path">Email us confidentially (Candidates) ${arrow}</a><a href="mailto:info@power-uptalent.co.uk">info@power-uptalent.co.uk ${arrow}</a><p>Strict single-client territory exclusivity across the UK.</p></div></div><div class="wrap footer-bottom"><span>&copy; ${new Date().getFullYear()} Power-Up Talent.</span><a href="https://power-uptalent.co.uk/privacy">Privacy</a><a href="https://power-uptalent.co.uk/terms">Terms</a><a href="https://power-uptalent.co.uk/cookies">Cookies</a><span class="footer-end">Human judgement. Better intelligence.</span></div></footer></body></html>`;
};

function pageHero(label, title, desc, video = 'about-hero.mp4', actionsHtml = '') {
  return `<section class="page-hero"><video autoplay loop muted playsinline preload="metadata" class="hero-video-bg"><source src="assets/videos/${video}" type="video/mp4"></video><div class="video-overlay"></div><div class="wrap">${tag(label)}<h1>${title}</h1><p>${desc}</p>${actionsHtml ? `<div class="actions" style="margin-top:22px">${actionsHtml}</div>` : ''}</div></section>`;
}

function cards(items) {
  return `<div class="cards">${items.map(([n, t, d, list]) => `<article><span class="card-num">${n}</span><h3>${t}</h3><p>${d}</p>${list ? `<ul>${list.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}</article>`).join('')}</div>`;
}

// Partnerships Page (Section 6)
const partnership =
  pageHero(
    'POWER-UP PARTNERSHIPS',
    'One partner.<br><em>Agreed around your priorities.</em>',
    'Bring specialist recruitment, performance coaching and practical business platforms into a clear commercial plan.',
    'platform-video.mp4',
    `${button('Discuss a partnership', 'contact.html?interest=Growth%20partnership')}${button('Request territory exclusivity review', 'check.html', true)}`
  ) +
  `<section class="wrap section">${sectionHead(
    'HOW AN ENGAGEMENT STARTS',
    'What we cover, how we start<br>and how scope is agreed.',
    'Every partnership begins with a practical conversation about your business priorities before any commitment is made.'
  )}${cards([
    [
      '01 / INITIAL CONVERSATION',
      'What the first conversation covers',
      'We review the commercial challenge in front of you — whether that is a critical leadership gap, branch sales habits or a workflow bottleneck.',
      [
        'Target roles, branch or regional coverage and hiring urgency',
        'Current sales, quote follow-up and margin pressures',
        'Which workflows (CRM, enquiries, sales or delivery) need clearer ownership'
      ]
    ],
    [
      '02 / FIRST ENGAGEMENT',
      'What the first step can look like',
      'You do not have to buy everything at once. Most clients start with one focused assignment and connect further support when ready.',
      [
        'A single retained search or specialist recruitment brief',
        'A targeted sales or branch management coaching programme',
        'A walkthrough or pilot of one of the seven business platforms'
      ]
    ],
    [
      '03 / AGREED SCOPE',
      'How scope and responsibilities are agreed',
      'Before work starts, we set out the exact deliverables, named owners, review dates and fee structure in writing.',
      [
        'Written role blueprint, coaching plan or platform pilot scope',
        'Clear client and Power-Up responsibilities at each stage',
        'Scheduled review points to assess outcomes and next steps'
      ]
    ]
  ])}</section>` +
  `<section class="partnership-section"><div class="wrap partnership-grid"><div>${tag('ILLUSTRATIVE JOINED-UP EXAMPLE')}<h2>A new branch.<br>A joined-up plan.</h2><p>For a business opening or strengthening a regional branch, the work can begin with appointing the right leader, coaching the team’s commercial routines and introducing the platforms that keep enquiries, quotes and onboarding visible.</p><p class="muted"><strong>Illustrative example:</strong> Shows how recruitment, coaching and platforms can work together across UK technical distribution and contracting. Scope and measures are agreed individually.</p></div><div class="pathway"><div><span>01</span><h3>People</h3><p>Define the leadership brief, map regional talent and appoint the branch manager.</p></div><div><span>02</span><h3>Performance</h3><p>Support the manager and sales team with practical coaching on discovery, quote follow-up and margin discipline.</p></div><div><span>03</span><h3>Platforms</h3><p>Introduce CRM, Communications, Sales &amp; Intelligence and Business Delivery around the team.</p></div></div></div></section>` +
  `<section class="wrap section split"><div>${tag('SECTOR &amp; TERRITORY EXCLUSIVITY POLICY')}<h2>When exclusivity applies —<br>and how it is confirmed.</h2></div><div><p class="large-copy">Selected strategic partnerships can include single-client exclusivity so we do not headhunt for direct local competitors covered by your agreement.</p><p><strong>Scope and limits:</strong> Exclusivity is never assumed automatically on enquiry. It applies only when we have checked existing client commitments and signed a written partnership agreement defining the exact <strong>industry sector, geographic territory, named competitor boundaries, included services and duration</strong>.</p><div class="actions" style="margin-top:20px">${button('Request a territory exclusivity review', 'check.html')}${button('Discuss a partnership', 'contact.html?interest=Growth%20partnership', true)}</div></div></section>${cta('Growth partnership')}`;

// Talent / Headhunting Page (Section 6)
const talent =
  pageHero(
    'ELITE RECRUITMENT &amp; HEADHUNTING',
    'The right person.<br><em>For what comes next.</em>',
    'Discreet search for leadership, commercial and technical appointments across electrical wholesale, technical distribution, engineering, construction and facilities management.',
    'talent-video.mp4',
    `${button('Discuss a hire', 'contact.html?interest=Critical%20hire')}${button('Confidential candidate enquiry', 'contact.html?path=candidate#candidate-path', true)}`
  ) +
  `<section class="wrap section"><div class="crm-split-grid"><article class="crm-workspace-card"><span class="platform-status-pill">For Employers</span><h3>Hiring a leader, commercial performer or specialist</h3><p>We start with the commercial problem behind the vacancy — what the person must achieve, the team they are joining and the regional market they will operate in.</p><p style="margin-top:14px"><a class="text-link" href="#employer-journey">See the 5-step employer search journey ↓</a></p></article><article class="crm-workspace-card"><span class="platform-status-pill">For Candidates</span><h3>Exploring your next career move in confidence</h3><p>Speak privately with our headhunting team before any approach is made to an employer. We never share your details without your express written permission.</p><p style="margin-top:14px"><a class="text-link" href="contact.html?path=candidate#candidate-path">Email us confidentially ↗</a></p></article></div></section>` +
  `<section class="wrap section">${sectionHead(
    'HOW WE RECRUIT FOR EMPLOYERS',
    'Three ways to engage<br>our search team.',
    'Choose a single critical search, targeted commercial recruitment or coordinated hiring across multiple branches.'
  )}${cards([
    [
      '01',
      'Retained & exclusive search',
      'For confidential, senior or scarce appointments.',
      ['Managing directors and general managers', 'Regional, commercial and operations directors', 'Confidential succession and turnaround appointments']
    ],
    [
      '02',
      'Specialist commercial & technical recruitment',
      'Focused search for revenue-generating and technical roles.',
      ['Branch and profit-centre managers', 'External technical sales and specification managers', 'Estimating, project and operations leaders']
    ],
    [
      '03',
      'Embedded multi-hire partnerships',
      'Coordinated hiring for branch openings and regional growth.',
      ['Regional and branch network expansion', 'New technical division launches', 'Post-hire coaching and onboarding support via our Coaching team']
    ]
  ])}</section>` +
  `<section class="wrap process-section" id="employer-journey">${sectionHead(
    'THE EMPLOYER EXPERIENCE',
    'From briefing through<br>shortlist and appointment.'
  )}<ol class="process-list">${[
    ['Briefing', 'Agree the role blueprint, commercial objectives, territory context and what good evidence looks like.'],
    ['Search & mapping', 'Identify relevant target companies and proven performers across your sector and region.'],
    ['Discreet approach', 'Engage potential candidates confidentially and qualify their track record, motivation and expectations.'],
    ['Shortlist & assessment', 'Present a focused shortlist with structured interview notes against the agreed brief.'],
    ['Appointment & handover', 'Manage offer negotiation, notice-period communication and optional post-appointment coaching.']
  ].map(([t, d], i) => `<li><span>0${i + 1}</span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol></section>` +
  `<section class="wrap section" id="post-hire-support">${sectionHead(
    'SUPPORT YOUR NEW HIRE AFTER APPOINTMENT',
    'Protect the appointment<br>with practical onboarding.',
    'Appointing the right person is step one. Where agreed with the client, we connect coaching and business platforms to give new leaders and sales performers immediate traction.'
  )}${cards([
    [
      '01 / BUSINESS CRM',
      'Accounts & Next Actions',
      'Give your new manager or sales rep instant visibility over account buying history, key contacts and scheduled renewal reviews.',
      ['Trade customer dossiers and account notes', 'Flag accounts renewing within 30 days', 'Separate from private Personal CRM records']
    ],
    [
      '02 / SALES & INTELLIGENCE',
      'Target Accounts & Quote Follow-Up',
      'Focus your new hire on ideal customer profile (ICP) accounts with active trade signals and disciplined quote follow-up.',
      ['Prioritised Sales Action Queue', 'Follow up open quotes before they slip', 'Human review for all outreach drafts']
    ],
    [
      '03 / COMMUNICATIONS',
      'Enquiries & Owned Callbacks',
      'Ensure inbound contractor enquiries, calls and WhatsApp messages land in a shared team inbox with named callback ownership.',
      ['AI Voice Receptionist for out-of-hours coverage', 'Unassigned enquiries become owned callbacks', 'Never miss an urgent trade quotation request']
    ]
  ])}<div class="note-band offer-link-band" style="margin-top:35px"><div><span class="eyebrow" style="color:var(--gold)"><span></span>ONBOARDING COACHING LINK</span><h3 style="font-size:24px;margin-bottom:8px">Manager development &amp; onboarding coaching.</h3><p style="margin:0;font-size:14px;color:var(--muted)">Link your placement to our Branch Performance Accelerator or Leadership Accelerator for 90-day habit coaching. Additional coaching and platform tools are scoped individually with each client based on requirements and are not implied as included with every placement.</p></div><div class="actions">${button('Explore coaching programmes', 'coaching.html')}${button('Discuss a hire', 'contact.html?interest=Critical%20hire', true)}</div></div></section>` +
  `<section class="wrap in-dev-section" aria-labelledby="recruitment-example-heading"><div class="in-dev-card"><div class="in-dev-intro">${tag('ILLUSTRATIVE RECRUITMENT EXAMPLE')}<h2 id="recruitment-example-heading">Regional Branch Manager<br><em>(Technical Distribution).</em></h2><p style="color:rgba(255,255,255,.82)">Because live client mandates are conducted under bilateral NDAs, this illustrative example shows how a typical search is structured from brief to onboarding.</p><p style="margin-top:14px"><a href="coaching.html" style="color:#ffe000;text-decoration:underline">See how post-appointment Coaching supports new leaders ↗</a></p></div><div><ul class="in-dev-list"><li><span>Role</span><p>Branch Manager for an electrical wholesale and technical distribution profit centre.</p></li><li><span>Challenge</span><p>Replacing a departing manager while protecting key trade contractor accounts and lifting quote follow-up discipline.</p></li><li><span>Action</span><p>Defined a commercial brief focused on P&amp;L ownership and local trade relationships, mapped regional competitors discreetly, and presented a three-candidate shortlist with structured margin-scenario assessments.</p></li><li><span>Outcome (Illustrative)</span><p>Preferred candidate appointed with a 90-day onboarding and branch coaching plan agreed before start date.</p></li></ul></div></div></section>` +
  `<section class="wrap note-band" id="candidate-route"><div>${tag('CONFIDENTIAL CANDIDATE ROUTE')}<h2>Considering your own next move?</h2><p>Whether you are a branch manager, sales performer or director in wholesale, distribution, construction or engineering, you can contact our search team privately.</p></div><div class="actions">${button('Email us confidentially', 'contact.html?path=candidate#candidate-path')}</div></section>${cta('Critical hire')}`;

// Coaching & Development Page (Section 6)
const coaching =
  pageHero(
    'COACHING &amp; DEVELOPMENT',
    'Better habits.<br><em>Stronger commercial execution.</em>',
    'Practical coaching for sales teams, branch managers and leaders across UK electrical wholesale, technical distribution, construction and engineering.',
    'coaching-video.mp4',
    `${button('Discuss a coaching programme', 'contact.html?interest=Coaching')}${button('Explore partnerships', 'partnerships.html', true)}`
  ) +
  `<section class="wrap section">${sectionHead(
    'HOW COACHING IS ORGANISED',
    'Who it helps, which behaviours it builds<br>and how progress is tracked.',
    'We design programmes around the everyday work of branches and commercial teams, using clear operational indicators rather than vague theory.'
  )}${cards([
    [
      '01 / WHO IT HELPS',
      'Built for commercial & branch roles',
      'Focused support for the people directly responsible for customer relationships, quotes and branch performance.',
      [
        'External sales executives and key account managers',
        'Branch managers and trade counter leaders',
        'Commercial directors and newly promoted technical managers'
      ]
    ],
    [
      '02 / BEHAVIOURS DEVELOPED',
      'Practical habits used every week',
      'We focus on observable habits that staff can practise in live customer conversations and weekly team reviews.',
      [
        'Structured account discovery and qualification before quoting',
        'Consistent quote follow-up rather than passive chasing',
        'Defending value and specification instead of defaulting to price discounts',
        'Running focused weekly branch and pipeline review sessions'
      ]
    ],
    [
      '03 / MEASURING PROGRESS',
      'Trackable commercial indicators',
      'Instead of promising a fixed percentage uplift, we agree specific operational indicators your business can track over the programme.',
      [
        'Quote follow-up timeliness and reduction in overdue open quotes',
        'Share of target accounts with a current decision-maker and next step',
        'Quote-to-order conversion rate and gross margin discipline on proposals',
        'Manager review cadence and coaching action completion'
      ]
    ]
  ])}</section>` +
  `<section class="wrap in-dev-section" aria-labelledby="coaching-example-heading"><div class="in-dev-card"><div class="in-dev-intro">${tag('CONCRETE PROGRAMME EXAMPLE')}<h2 id="coaching-example-heading">Quote Follow-Up &amp; Margin<br><em>Discipline Sprint.</em></h2><p style="color:rgba(255,255,255,.82)">An example of a structured coaching module for branch managers and external sales reps, combining focused sessions with real workplace application.</p><div class="actions" style="margin-top:18px">${button('Discuss this programme', 'contact.html?interest=Coaching&programme=Branch%20Performance%20Accelerator')}</div></div><div><ul class="in-dev-list"><li><span>1. Session focus (90-minute workshop)</span><p>Review live anonymised quotes from the branch, identify where price concessions happened early, and agree a clear qualification and follow-up checklist.</p></li><li><span>2. What participants apply at work</span><p>Each participant logs a clear owner and follow-up date on open quotes above an agreed threshold, asks two agreed specification questions before discounting, and records the customer decision reason.</p></li><li><span>3. Manager review &amp; tracked indicators</span><p>Two weeks later, the branch manager and coach review the reduction in overdue unfollowed quotes, the reasons recorded for won/lost quotes, and the margin band achieved across those quotes.</p></li></ul></div></div></section>` +
  `<section class="wrap section" id="programmes">${sectionHead(
    'PUBLISHED COACHING PROGRAMMES',
    'Six structured programmes<br>built for commercial growth.',
    'Select the programme that matches your team’s priorities. Each programme can run standalone or form part of an integrated partnership.'
  )}<div class="cards" style="grid-template-columns:repeat(3,minmax(0,1fr))">${[
    [
      '01',
      'Sales Performance Sprint',
      'For external sales engineers, account reps and commercial specialists facing margin compression or slow conversion.',
      'Account discovery questioning, multi-stakeholder qualification and disciplined quote follow-up rhythms.',
      'Qualification checklist, live quote negotiation playbook and weekly review cadence.',
      'Tracked quote follow-up timeliness, conversion on qualified quotes and reduced unearned discounts.',
      'Sales%20Performance%20Sprint'
    ],
    [
      '02',
      'Branch Performance Accelerator',
      'For branch managers, assistant managers and trade counter supervisors in electrical wholesale and technical distribution.',
      'Weekly branch operating routines, proactive trade account phone reviews and counter trade upselling.',
      '90-day branch operating rhythm, trade account call schedule and branch margin discipline tracker.',
      'Dormant account reactivation, average order value and consistent branch gross margin maintenance.',
      'Branch%20Performance%20Accelerator'
    ],
    [
      '03',
      'Leadership Accelerator',
      'For newly appointed general managers, regional directors and commercial leaders managing multiple sites or growing teams.',
      'Commercial strategy translation, running structured 1-to-1 coaching reviews and resolving operational bottlenecks.',
      'Executive leadership cadence framework, talent scorecard and commercial 1-to-1 meeting templates.',
      'Staff retention rate, quarterly leadership objective completion and cross-branch operational consistency.',
      'Leadership%20Accelerator'
    ],
    [
      '04',
      'AI Adoption Sprint',
      'For branch, sales and administrative teams adopting CRM, Communications or automated handover workflows.',
      'Operating AI voice receptionists, handling owned callbacks, managing Action Queues and maintaining data hygiene.',
      'AI workflow checklists, human-in-the-loop review standards and callback handover protocols.',
      'Daily active platform usage, callback resolution turnaround and reduction in duplicate entries.',
      'AI%20Adoption%20Sprint'
    ],
    [
      '05',
      'Intelligence-Led Growth Programme',
      'For commercial directors and marketing leads seeking targeted trade account acquisition and market intelligence.',
      'Defining Ideal Customer Profiles (ICP), mapping high-fit contractors and prioritising the Sales Action Queue.',
      'ICP qualification matrix, trade contractor mapping rubric and campaign outcome review templates.',
      'Share of high-fit target accounts engaged, pipeline velocity and conversion from lead to won deal.',
      'Intelligence-Led%20Growth%20Programme'
    ],
    [
      '06',
      'Hiring Manager Academy',
      'Distinct programme for branch managers, department heads and technical directors who recruit and interview staff.',
      'Drafting competency blueprints, running structured behavioural interviews and evaluating genuine candidate fit.',
      'Interview scoring rubric, role blueprint templates and a 90-day new hire onboarding plan.',
      'First-year new hire retention, probation completion rate and time-to-competence for new starters.',
      'Hiring%20Manager%20Academy'
    ]
  ].map(([num, name, who, practise, takeaway, review, progSlug]) => `<article style="display:flex;flex-direction:column"><span class="card-num">${num} / PROGRAMME</span><h3>${name}</h3><p style="font-size:13.5px;color:var(--ink);font-weight:600;margin-bottom:8px">Who it helps: <span style="font-weight:400;color:var(--muted)">${who}</span></p><ul style="padding-left:18px;margin:10px 0;font-size:13px;color:var(--muted);flex:1"><li><strong>Practise:</strong> ${practise}</li><li><strong>Takeaway:</strong> ${takeaway}</li><li><strong>Review:</strong> ${review}</li></ul><div class="actions" style="margin-top:16px">${button('Discuss programme', `contact.html?interest=Coaching&programme=${progSlug}`)}</div></article>`).join('')}</div></section>${cta('Coaching')}`;

// Territory Exclusivity Review Page (Section 3)
const check =
  pageHero(
    'TERRITORY EXCLUSIVITY REVIEW',
    'Request a sector &amp;<br><em>territory review.</em>',
    'Ask us to check whether Power-Up Talent can offer single-client exclusivity for a proposed recruitment or growth partnership in your UK sector and region.',
    'platform-video.mp4'
  ) +
  `<section class="wrap section">${sectionHead(
    'HOW TERRITORY EXCLUSIVITY WORKS',
    'Request a manual review —<br>confirmed in writing.',
    'This page prepares a review request for our directors. It does not check a live database or confirm territory availability automatically online.'
  )}<div class="check-grid"><div class="check-form"><form id="territory-check-form" novalidate><h3 style="margin:0 0 8px;font-size:20px">1. Enter your sector and territory details</h3><p style="margin:0 0 18px;font-size:14px;color:var(--muted)">Submitting this form opens a formatted review request in your email app addressed to <strong>info@power-uptalent.co.uk</strong> (and provides a copyable text box below).</p><div class="form-grid"><label>Your Name<input name="name" autocomplete="name" required placeholder="e.g. David Miller"></label><label>Job Title<input name="title" autocomplete="organization-title" required placeholder="e.g. Managing Director"></label></div><div class="form-grid"><label>Company Name<input name="company" autocomplete="organization" required placeholder="e.g. Apex Technical Group"></label><label>Work Email<input name="email" type="email" autocomplete="email" required placeholder="d.miller@company.co.uk"></label></div><div class="form-grid"><label>Industry Sector<input name="industry" required placeholder="e.g. Electrical Wholesale, HVAC, M&E"></label><label>Geographic Region / Postcode Area<input name="region" required placeholder="e.g. West Midlands, North West"></label></div><label>Proposed Partnership Scope<select name="priority"><option>Retained Executive Search &amp; Headhunting</option><option>Growth Partnership (Recruitment + Coaching)</option><option>Recruitment, Coaching &amp; Business Platforms</option><option>Multi-Branch Embedded Hiring</option></select></label><label>Brief Summary of Your Requirement<textarea name="plan" rows="4" placeholder="Target roles, branch locations or competitor boundaries you want us to review..."></textarea></label><button class="button" type="submit">Prepare territory review email ${arrow}</button><p class="form-small">Opens your email client so you can review and send the request. Nothing is sent or stored until you send the email. <a href="https://power-uptalent.co.uk/privacy">Privacy policy</a>.</p><div id="territory-result" hidden aria-live="polite" style="margin-top:20px; padding:18px; background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px;"><h3 style="font-size:16px; color:#0f172a; margin-bottom:6px;">Territory review email ready to send in your email app</h3><p id="territory-status-text" style="font-size:13.5px; color:#334155; margin:0 0 12px;"></p><label style="display:block;font-size:12px;font-weight:700;margin-bottom:6px">Prepared request (copy and email to info@power-uptalent.co.uk if your mail app did not open):<textarea id="territory-email-copy" rows="6" readonly style="width:100%;margin-top:6px;font-family:monospace;font-size:12px"></textarea></label><button id="copy-territory-brief" type="button" class="button secondary" style="margin-top:8px">Copy review request</button><p id="copy-territory-status" role="status" style="font-size:12.5px;margin-top:6px;color:#0f172a"></p></div></form></div><div class="check-sidebar"><div class="check-card"><span class="eyebrow" style="color:var(--gold);"><span></span>WHAT HAPPENS NEXT</span><h3 style="font-size:20px; color:#fff; margin-bottom:12px;">From Review Request to Written Agreement</h3><ul class="check-steps"><li><strong>Step 1: Send the review email</strong> — Review and send the prepared email from your mail app to <code>info@power-uptalent.co.uk</code>.</li><li><strong>Step 2: Manual mandate check (1 working day)</strong> — A director checks our current active client agreements in your sector and geographic region.</li><li><strong>Step 3: Scope &amp; boundary discussion</strong> — If the sector and region are open, we discuss the proposed roles, services and named competitor list.</li><li><strong>Step 4: Confirmed in writing</strong> — Exclusivity takes effect only when the sector, territory, named competitors, service scope and duration are signed in a written partnership agreement.</li></ul></div><div class="check-card subtle"><span class="eyebrow"><span></span>PARTNERSHIP EXCLUSIVITY POLICY</span><h3 style="font-size:18px; margin-bottom:10px;">What Exclusivity Covers</h3><p style="font-size:13px; color:var(--muted); line-height:1.6;">Where single-client exclusivity is agreed in writing for a partnership, Power-Up Talent commits not to headhunt for or represent the named direct competitors in that agreed sector and territory for the duration of the mandate.</p></div></div></div></section>${cta('Territory exclusivity audit')}`;

// About Page (Section 6)
const about =
  pageHero(
    'ABOUT POWER-UP TALENT',
    'Great people. Stronger teams.<br><em>A more connected business.</em>',
    'Power-Up Talent partners with UK electrical wholesale, technical distribution, construction, engineering and manufacturing businesses across recruitment, coaching and practical business platforms.',
    'about-hero.mp4',
    `${button('Discuss your priorities', 'contact.html')}${button('Explore partnerships', 'partnerships.html', true)}`
  ) +
  `<section class="wrap section split"><div>${tag('WHO WE SERVE &amp; WHAT WE BRING')}<h2>Built for UK technical<br>and commercial leaders.</h2></div><div><p class="large-copy">We work with business owners, managing directors, commercial directors, branch managers and hiring leaders across electrical wholesale, technical distribution, construction, M&amp;E contracting and engineering.</p><p>Generic recruitment agencies treat technical sectors as high-volume CV exercises, and generic software vendors sell complex tools without understanding how a branch or trade desk actually operates.</p><p>Power-Up Talent brings specialist executive and commercial search, practical workplace coaching and seven focused business platforms under one roof — so the people you hire have the habits and tools to succeed.</p></div></section>` +
  `<section class="wrap section">${sectionHead(
    'WHY RECRUITMENT, COACHING &amp; TECHNOLOGY SIT TOGETHER',
    'One joined-up approach<br>to commercial growth.',
    'Each pillar solves a distinct problem, and they reinforce one another when connected around your business.'
  )}${cards([
    [
      '01 / RECRUITMENT & HEADHUNTING',
      'Secure the right people',
      'A strong commercial plan starts with the right leadership, branch managers and sales specialists in post.',
      ['Commercial brief agreed before search begins', 'Discreet approach to proven sector performers', 'Structured assessment against real job requirements']
    ],
    [
      '02 / COACHING & DEVELOPMENT',
      'Build consistent everyday habits',
      'Appointing a leader or sales rep is only step one. Practical coaching builds the discovery, quote follow-up and margin habits that turn talent into results.',
      ['Workshops and coaching tied to live accounts and quotes', 'Clear weekly operating rhythms for branch managers', 'Trackable operational indicators agreed up front']
    ],
    [
      '03 / AI & BUSINESS PLATFORMS',
      'Give teams clear ownership and visibility',
      'Our seven platforms give staff one place for customer enquiries, CRM renewals, sales action queues, delivery onboarding and campaign outcome reporting.',
      ['Human-reviewed workflows and explicit operator handovers', 'Separate Business CRM and Personal CRM boundaries', 'Honest distinction between built features and expansion areas']
    ]
  ])}</section>` +
  `<section class="partnership-section"><div class="wrap"><div class="section-head"><div>${tag('HOW WE OPERATE')}<h2>Clear standards.<br>Human judgement first.</h2></div><p>The principles that govern every search mandate, coaching programme and platform walkthrough.</p></div><div class="cards"><article><span class="card-num">01 / COMMERCIAL CLARITY</span><h3>Direct, honest advice</h3><p>We state clearly what a candidate has delivered, what a coaching sprint will track, and which platform capabilities are ready to try now versus in development.</p></article><article><span class="card-num">02 / HUMAN IN CONTROL</span><h3>Technology supports; people decide</h3><p>Across our platforms, outreach drafts, AI Team briefs and Sales-to-Delivery handovers remain under explicit human review and operator confirmation.</p></article><article><span class="card-num">03 / WRITTEN COMMITMENTS</span><h3>Defined scope &amp; confidentiality</h3><p>We routinely sign non-disclosure agreements, protect candidate confidentiality and set out any agreed sector or territory exclusivity in writing.</p></article></div></div></section>${cta('Growth partnership')}`;

// Dual-Path Contact Page (Section 3)
const contact = `<section class="wrap contact-layout"><div>${tag('CONTACT POWER-UP TALENT')}<h1>Let’s route your<br><em>enquiry properly.</em></h1><p class="large-copy">A critical vacancy. A stronger team.<br>A long-term commercial partnership.</p><p>Choose the business brief or the confidential candidate enquiry. Every form prepares a structured email to <strong>info@power-uptalent.co.uk</strong> in your email app and provides an instant copyable backup on screen.</p><a class="email-link" href="mailto:info@power-uptalent.co.uk">info@power-uptalent.co.uk ↗</a><div class="contact-note"><h3>How enquiries are handled</h3><p>This static website does not store your form input on a server. Submitting prepares an email in your mail app (with a copy-to-clipboard fallback) so you stay in control of what you send. Need to check sector exclusivity? <a href="check.html" style="text-decoration:underline;font-weight:700">Use our territory review page ↗</a>.</p></div></div><div><div class="path-tabs" role="tablist" aria-label="Enquiry type"><button type="button" role="tab" aria-selected="true" class="path-tab-btn active" data-path-tab="client-path">PATH 1: Business, Platform or Hiring Enquiry</button><button type="button" role="tab" aria-selected="false" class="path-tab-btn" data-path-tab="candidate-path">PATH 2: Confidential Candidate Enquiry</button></div><div id="client-path" class="path-panel active" role="tabpanel"><form id="enquiry-form" novalidate><h2>Client Commercial Brief</h2><p>Tell us what you want to explore or solve. Submitting opens your email app with a formatted brief addressed to <code>info@power-uptalent.co.uk</code>.</p><p id="interest-fallback-note" class="form-small" hidden role="status" style="padding:10px 12px;background:#fef9c3;border:1px solid #fde047;border-radius:6px;color:#1e293b;margin-bottom:12px"></p><div class="form-grid"><label>Your name<input name="name" autocomplete="name" required placeholder="Full name"></label><label>Business<input name="company" autocomplete="organization" placeholder="Company or branch name"></label></div><label>Email address<input name="email" type="email" autocomplete="email" required placeholder="you@company.co.uk"></label><label>Area of interest<select name="interest"><option>Growth partnership</option><option>Critical hire</option><option>Embedded hiring</option><option>Coaching</option><option>Intelligence walkthrough</option><option>Territory exclusivity audit</option></select></label><label>Short description of your need<textarea name="message" rows="5" required placeholder="Tell us the role, team challenge or platform workflow you would like to discuss (at least 10 characters)..."></textarea></label><button class="button" type="submit">Prepare email in your mail app ${arrow}</button><p class="form-small">Opens your email app so you can review and send. Nothing is sent or stored automatically by this page. <a href="https://power-uptalent.co.uk/privacy">Privacy policy</a>.</p><div id="email-result" hidden aria-live="polite"><h3>Your commercial brief is ready to send in your email app</h3><p>Please review and press <strong>Send</strong> in your email app. If your mail app did not open, copy the prepared brief below and email it to <strong>info@power-uptalent.co.uk</strong>.</p><textarea id="email-copy" readonly aria-label="Prepared commercial brief"></textarea><button id="copy-brief" type="button" class="button secondary">Copy brief to clipboard</button><p id="copy-status" role="status"></p></div></form></div><div id="candidate-path" class="path-panel" role="tabpanel" hidden><form id="candidate-form" novalidate><h2>Confidential Candidate Enquiry</h2><p>Start a private career conversation with our search team. The details you enter below are used to compose an email draft in your mail app to <code>info@power-uptalent.co.uk</code> — please do not attach sensitive identity documents at this initial stage.</p><div class="form-grid"><label>Your name<input name="cand_name" autocomplete="name" required placeholder="Full name"></label><label>Current or target role<input name="cand_role" placeholder="e.g. Branch Manager, Regional Director"></label></div><label>Preferred confidential email or mobile<input name="cand_email" required placeholder="personal@email.com or 07..."></label><label>Sector, region &amp; what you are looking for<textarea name="cand_notes" rows="4" placeholder="Current sector (e.g. electrical wholesale, engineering), preferred UK region and the type of move you are considering..."></textarea></label><button class="button" type="submit">Email us confidentially ${arrow}</button><p class="form-small">Opens your email app with a draft using the fields above. We never contact an employer without your express written permission.</p><div id="candidate-email-result" hidden aria-live="polite" style="margin-top:18px;padding:16px;background:#f8fafc;border:1px solid #cbd5e1;border-radius:8px"><h3>Your confidential enquiry draft is ready in your email app</h3><p>Please press <strong>Send</strong> in your email app. If your email app did not open, copy the text below and send it to <strong>info@power-uptalent.co.uk</strong>.</p><textarea id="candidate-email-copy" rows="6" readonly aria-label="Prepared confidential candidate enquiry" style="width:100%;margin-top:8px;font-family:monospace;font-size:12px"></textarea><button id="copy-candidate-brief" type="button" class="button secondary" style="margin-top:8px">Copy candidate enquiry</button><p id="copy-candidate-status" role="status" style="font-size:12.5px;margin-top:6px"></p></div></form></div></div></section>`;

const pages = [
  ['index', 'Your business. Connected.', 'Specialist recruitment and coaching alongside seven AI & business platforms for UK electrical wholesale, distribution, construction and engineering.', partnershipHome],
  ['partnerships', 'Talent & Growth Partnerships', 'How initial conversations work, what a first engagement looks like, and how partnership scope and territory exclusivity are agreed in writing.', partnership],
  ['talent', 'Elite Recruitment & Headhunting', 'Discreet employer search from briefing to appointment, plus a confidential career route for candidates across UK technical sectors.', talent],
  ['coaching', 'Coaching & Development', 'Practical commercial, sales and branch management coaching built around observable workplace habits and trackable indicators.', coaching],
  ['platforms', 'AI & Business Platforms Hub', 'Overview of all seven Power-Up platforms — CRM, Communications, Sales & Intelligence, Business Delivery, Automation, AI Team and Marketing & Social Media.', aiServicesPage],
  ['intelligence', 'AI & Business Platforms Hub', 'Overview of all seven Power-Up platforms — CRM, Communications, Sales & Intelligence, Business Delivery, Automation, AI Team and Marketing & Social Media.', aiServicesPage],
  ['check', 'Territory Exclusivity Review', 'Request a manual review of whether single-client partnership exclusivity is available in your UK industry sector and geographic territory.', check],
  ['about', 'About Power-Up Talent', 'Who Power-Up Talent serves across UK technical industry, what we bring to an engagement, and why recruitment, coaching and platforms sit together.', about],
  ['contact', 'Contact & Confidential Enquiries', 'Send a client commercial brief, request a platform walkthrough or start a confidential candidate career enquiry.', contact],
  ['dashboard', 'Interactive Product Demo (Sample Data)', 'Explore interactive sample-data product demos for all seven Power-Up AI & business platforms.', dashboardPage],
  ...servicePages
];

fs.mkdirSync('dist', { recursive: true });
for (const [id, title, description, rawBody] of pages) {
  const content = id === 'index' ? partnershipHome : ['intelligence', 'platforms'].includes(id) ? aiServicesPage : refreshPage(id, rawBody);
  fs.writeFileSync(`dist/${id}.html`, professionalShell(refreshShared(shell(id, title, description, professionalPage(id, content))), id));
}
fs.writeFileSync('dist/404.html', professionalShell(refreshShared(shell('404', 'Page not found', 'Find your next step with Power-Up Talent.', pageHero('PAGE NOT FOUND', 'Let’s find your<br><em>next step.</em>', 'The page you’re looking for isn’t here. Use the navigation to explore our recruitment, coaching and platform services.', 'about-hero.mp4', `${button('Return to homepage', 'index.html')}${button('Explore the platforms', 'platforms.html', true)}`))), '404'));

// Include only canonical, indexable public pages in sitemap.xml
const sitemapRoutes = [
  '/',
  '/partnerships',
  '/talent',
  '/coaching',
  '/platforms',
  '/check',
  '/about',
  '/contact',
  '/crm',
  '/communications',
  '/sales-intelligence',
  '/business-delivery',
  '/automation',
  '/ai-team',
  '/marketing-social-media'
];
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapRoutes.map(r => `  <url><loc>${siteBaseUrl}${r}</loc></url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync('dist/sitemap.xml', sitemapXml);
fs.writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\nDisallow: /dashboard\nDisallow: /intelligence\nSitemap: ${siteBaseUrl}/sitemap.xml\n`);
console.log(`Built ${pages.length} pages, 404 page, sitemap.xml and robots.txt.`);
