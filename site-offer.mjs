const arrow = '<span aria-hidden="true">↗</span>';
const eyebrow = text => `<p class="eyebrow"><span></span>${text}</p>`;
const button = (text, href = 'contact.html', secondary = false) => `<a class="button ${secondary ? 'secondary' : ''}" href="${href}">${text}${arrow}</a>`;
const enquiry = interest => `contact.html?interest=${encodeURIComponent(interest)}`;
const icon = (id, title) => `<img src="assets/services-v2/${id}.svg" alt="${title} icon" width="36" height="36" loading="lazy">`;

export const aiGroups = [
  {
    id: 'crm',
    title: 'CRM',
    short: 'Know your contacts. Keep the next step clear.',
    description: 'Keep company records, conversations, opportunities and follow-ups together, so your team knows who owns each relationship and what needs to happen next.',
    benefit: 'Clearer account ownership, more consistent follow-up and better pipeline visibility.',
    included: [
      'Business and Personal CRM',
      'Account ownership and relationship history',
      'Sales pipelines, tasks and renewals',
      'Imports, duplicate review and reporting'
    ],
    extra: 'Business and Personal CRM options, pipeline stages, data imports and commercial reporting are configured around your team.',
    use: 'Follow up with the right person, with the full history in view.'
  },
  {
    id: 'communications',
    title: 'Communications',
    short: 'Give every enquiry a clear next step.',
    description: 'Answer calls and customer messages with approved business information, capture the details and connect people to the right member of your team.',
    benefit: 'Capture enquiries, organise callbacks and give staff the context they need.',
    included: [
      'AI Voice Receptionist and website chat',
      'Shared inbox and supported email/WhatsApp',
      'Booking, transfers and callbacks',
      'Case tracking, summaries and human handover'
    ],
    extra: 'Channels, opening hours, booking rules and human handover are configured around your business.',
    use: 'Turn an inbound enquiry into an assigned callback, a booking or a resolved question.'
  },
  {
    id: 'sales',
    title: 'Sales & Intelligence',
    short: 'Find your next opportunity. Understand why it matters.',
    description: 'Focus sales activity on relevant companies and evidenced opportunities, with research, market signals and reviewed outreach in one workspace.',
    benefit: 'Better-informed account targeting and clearer commercial priorities.',
    included: [
      'Prospect discovery and enrichment',
      'Account research and buying/hiring signals',
      'Tenders, planning and competitor monitoring',
      'Qualification, outreach and CRM handover'
    ],
    extra: 'Target sectors, market signal feeds, qualification criteria and reviewed outreach steps are agreed with your commercial team.',
    use: 'Give your team a focused account list and a relevant reason to start a conversation.'
  },
  {
    id: 'delivery',
    title: 'Business Delivery',
    short: 'From agreed work to completed delivery.',
    description: 'Bring client onboarding, documents, projects and payment tracking together, with clear owners and a shared view of outstanding work.',
    benefit: 'Clear responsibilities, smoother handovers and visibility of outstanding work.',
    included: [
      'Onboarding, forms and document requests',
      'Projects, service requests and client portal',
      'Quotes, invoices and payment tracking',
      'People, time, leave and delivery reporting'
    ],
    extra: 'Onboarding workflows, client portal access, workforce tools and billing status tracking are configured around your delivery model.',
    use: 'Start each engagement with an organised plan, then track it through to completion.'
  },
  {
    id: 'automation',
    title: 'Automation',
    short: 'Keep routine work moving. Stay in control.',
    description: 'Connect your systems and agreed processes, with triggers, schedules and approval steps that make work easier to coordinate and exceptions easier to resolve.',
    benefit: 'Less manual coordination and clearer oversight of routine activity.',
    included: [
      'Visual workflows and connected tools',
      'Triggers, schedules and task routing',
      'Human approvals and spending limits',
      'Execution history, monitoring and recovery'
    ],
    extra: 'Permissions, spending limits and human review points are agreed before workflows are introduced.',
    use: 'Create a follow-up task from an enquiry and flag it for review if it remains unanswered.'
  },
  {
    id: 'ai-team',
    title: 'AI Team',
    short: 'Give your team extra capacity.',
    description: 'Configure AI assistants around your business knowledge, tools and objectives. Delegate defined assignments, review their work and keep responsibility clear.',
    benefit: 'Extra capacity for research, preparation and coordination, with human review built in.',
    included: [
      'AI Chief of Staff and specialist assistants',
      'Approved company knowledge and scoped memory',
      'Assignments, collaboration and review',
      'Proactive briefings, permissions and cost controls'
    ],
    extra: 'Assistant roles, approved company knowledge, permissions and cost controls are agreed per customer.',
    use: 'Ask for an account briefing, check the supporting sources and return it for revision before accepting it.'
  },
  {
    id: 'marketing',
    title: 'Marketing & Social Media',
    short: 'One place to plan, create and measure your marketing.',
    description: 'Build campaigns around your brand, create content and avatars, schedule approved posts and track the results that inform your next decision.',
    benefit: 'Consistent brand execution, clearer campaign planning and visibility of marketing performance.',
    included: [
      'Brand knowledge and campaign planning',
      'Content Studio, avatars and asset library',
      'Social publishing, monitoring and email',
      'SEO, experiments and campaign reporting'
    ],
    extra: 'Brand guidelines, approval steps, connected channels and campaign reporting metrics are agreed per customer.',
    use: 'Take one campaign brief through content creation and approval to publication and performance review.'
  }
];

// Benefit-first detail used by the dedicated service pages. Outcomes describe
// what a configured service is designed to support, not measured results.
const serviceDetail = {
  crm: {
    roles: 'Managing directors, sales leaders, branch managers and account teams.',
    outcomes: [
      ['Clear account ownership', 'Everyone can see who owns each customer relationship and what was last agreed.'],
      ['Consistent follow-up', 'Tasks, renewals and next actions stay visible, so opportunities are less likely to go quiet.'],
      ['Better pipeline visibility', 'Leaders gain a clearer view of open opportunities and where support is needed.']
    ]
  },
  communications: {
    roles: 'Branch teams, customer service, reception and operations managers.',
    outcomes: [
      ['Enquiries captured properly', 'Calls, chat and messages are recorded with the details your team needs to respond.'],
      ['An owner for every conversation', 'Callbacks, bookings and handovers are assigned rather than left in shared inboxes.'],
      ['Approved, consistent answers', 'Customers receive information your business has reviewed, with people stepping in when needed.']
    ]
  },
  sales: {
    roles: 'Commercial directors, business development managers and external sales teams.',
    outcomes: [
      ['A focused target list', 'Concentrate effort on relevant companies with an evidenced reason to start a conversation.'],
      ['Research before outreach', 'Account context, market signals and qualification notes are gathered in one place.'],
      ['Reviewed follow-up', 'Outreach and follow-up are prepared for your team to check before anything is sent.']
    ]
  },
  delivery: {
    roles: 'Operations leaders, project managers and client-facing delivery teams.',
    outcomes: [
      ['Smoother onboarding', 'Forms, documents and first steps are organised from the moment work is agreed.'],
      ['Visible responsibilities', 'Owners, milestones and outstanding actions are clear to the whole team.'],
      ['Fewer loose ends', 'Quotes, invoices and payment status sit alongside the delivery plan.']
    ]
  },
  automation: {
    roles: 'Operations, finance and administration leads, and the owners of repeatable processes.',
    outcomes: [
      ['Less manual coordination', 'Routine hand-offs, reminders and updates follow defined, agreed steps.'],
      ['Control built in', 'Permissions, approvals and spending limits are agreed before any workflow is introduced.'],
      ['Visible outcomes', 'Execution history shows what happened, and exceptions are flagged for a person to review.']
    ]
  },
  'ai-team': {
    roles: 'Business owners, managers and teams with recurring research or preparation work.',
    outcomes: [
      ['Extra capacity for preparation', 'Hand over defined research, briefing and preparation assignments.'],
      ['Grounded in your knowledge', 'Assistants work from approved company information and scoped sources.'],
      ['Human review before acceptance', 'Your team checks the work, requests revisions and keeps responsibility for decisions.']
    ]
  },
  marketing: {
    roles: 'Marketing leads, business owners and teams managing campaigns and social media.',
    outcomes: [
      ['Campaigns with a clear plan', 'Briefs, audiences and timings are agreed before content is produced.'],
      ['Consistent branded content', 'Content is prepared around your brand guidance and approved asset library.'],
      ['Approvals and reporting in view', 'Review decisions and campaign reporting stay visible to the people responsible.']
    ]
  }
};
aiGroups.forEach(g => Object.assign(g, serviceDetail[g.id]));

const aiCards = () => `<div class="ai-service-grid">${aiGroups.map(g => `<a class="ai-service-card" href="intelligence.html#${g.id}"><span class="ai-icon">${icon(g.id, g.title)}</span><h3>${g.title}</h3><p class="ai-card-headline">${g.short}</p><p>${g.description}</p><span class="ai-card-link">Discuss ${g.title} ${arrow}</span></a>`).join('')}</div>`;

const aiOverview = () => `<section class="ai-overview" aria-labelledby="ai-overview-heading"><div class="wrap"><div class="ai-centred">${eyebrow('AI BUSINESS SERVICES')}<h2 id="ai-overview-heading">Practical AI.<br class="mobile-break"> <em>Built around your business.</em></h2><p>Keep relationships organised, respond to enquiries, find opportunities and deliver the work. Choose from seven connected service areas, configured around your team, your priorities and the tools you use.</p></div>${aiCards()}<p class="ai-scope">We agree the features, channels, connections and review points included in your partnership before implementation.</p></div></section>`;

const close = () => `<section class="wrap cta"><div>${eyebrow('START WITH YOUR PRIORITIES')}<h2>What would make<br>the biggest difference?</h2><p>A critical hire. A stronger team. A more connected business.<br>Let’s agree the right place to start.</p></div>${button('Book a partnership conversation', enquiry('Growth partnership'))}</section>`;

const pillars = () => `<section class="wrap section" aria-labelledby="pillars-heading"><div class="section-head"><div>${eyebrow('THREE PILLARS. ONE PARTNERSHIP.')}<h2 id="pillars-heading">People, performance<br>and practical AI.</h2></div><p>Start with the challenge in front of you. Bring the right support together as your business develops.</p></div><div class="offer-pillars">${[
  ['01 / PEOPLE', 'Elite Recruitment<br>&amp; Headhunting', 'Find the leaders, commercial performers and technical specialists your business needs.', 'talent.html', 'Explore recruitment'],
  ['02 / PERFORMANCE', 'Coaching<br>&amp; Development', 'Strengthen sales skills, branch performance and leadership through practical development.', 'coaching.html', 'Explore coaching'],
  ['03 / CONNECTED BUSINESS', 'AI Business<br>Services', 'Keep relationships organised, respond to enquiries, find opportunities and deliver the work across seven connected service areas.', 'intelligence.html', 'Explore AI services']
].map(([n, t, d, url, link]) => `<article><span class="eyebrow">${n}</span><h3>${t}</h3><p>${d}</p><a class="text-link" href="${url}">${link} ↗</a></article>`).join('')}</div></section>`;

const example = () => `<section class="partnership-section"><div class="wrap partnership-grid"><div>${eyebrow('HOW THE SERVICES CONNECT')}<h2>A new branch.<br>A joined-up plan.</h2><p>Appoint the right manager, develop the team’s sales routines and use AI-supported research and follow-up to focus activity on relevant local accounts.</p><p class="muted">Illustrative partnership. Services and measures are agreed around your requirements.</p>${button('Explore partnerships', 'partnerships.html')}</div><div class="pathway"><div><span>01</span><h3>Recruit the leader</h3><p>Define the brief and discreetly approach relevant candidates.</p></div><div><span>02</span><h3>Develop the team</h3><p>Coach practical sales habits and confident branch leadership.</p></div><div><span>03</span><h3>Connect the work</h3><p>Research target accounts, organise relationships and keep follow-up moving.</p></div></div></div></section>`;

const process = () => `<section class="wrap section"><div class="section-head"><div>${eyebrow('A PRACTICAL START')}<h2>Your priorities.<br>Our starting point.</h2></div><p>A clear brief, an agreed scope and people accountable for delivery.</p></div><ol class="ai-process">${[
  ['Understand', 'Discuss your hiring, team and business priorities.'],
  ['Agree', 'Select the services, responsibilities and measures that fit.'],
  ['Configure & deliver', 'Run the search, develop the team or configure your AI support.'],
  ['Review', 'Review progress and adapt as your priorities change.']
].map(([t, d], i) => `<li><span>0${i + 1}</span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol></section>`;

const faq = (q, a) => `<details><summary>${q}<span aria-hidden="true">+</span></summary><p>${a}</p></details>`;

export const partnershipHome = `<section class="hero offer-hero"><video autoplay loop muted playsinline preload="metadata" class="hero-video-bg" aria-hidden="true"><source src="assets/videos/home-hero.mp4" type="video/mp4"></video><div class="video-overlay"></div><div class="wrap hero-grid"><div>${eyebrow('SPECIALIST TALENT & GROWTH PARTNER')}<h1>Great people.<br>Stronger teams.<br><em>A more connected business.</em></h1><p class="hero-copy">Elite recruitment and headhunting, practical coaching and AI business services—brought together in a partnership configured around your goals.</p><div class="actions">${button('Book a partnership conversation', enquiry('Growth partnership'))}${button('Explore our services', '#pillars-heading', true)}</div><p class="hero-foot">People. Performance. Partnership.</p></div><aside class="offer-compass" aria-label="Three connected services"><span class="eyebrow">BUILT AROUND YOUR BUSINESS</span><div><span>01</span><strong>Recruit the talent.</strong></div><div><span>02</span><strong>Develop your people.</strong></div><div><span>03</span><strong>Connect your business.</strong></div><p>One partner. The support you need.</p></aside></div></section><div class="sector-strip"><div class="wrap"><span>SECTOR SPECIALISTS</span><strong>Electrical wholesale</strong><strong>Technical distribution</strong><strong>Construction</strong><strong>Engineering</strong></div></div>${pillars()}${aiOverview()}${example()}${process()}<section class="wrap section faq-section"><div>${eyebrow('CLARITY FROM THE START')}<h2>A partnership<br>that fits.</h2></div><div class="faqs">${faq('Can we start with one service?', 'Yes. Start with a hiring requirement, a coaching programme or a specific AI business need. We agree the right scope before work begins.')}${faq('What is included in a partnership?', 'Your proposal sets out the services, deliverables, relevant portal access, responsibilities and review points. The seven AI service areas help us select the support that fits.')}${faq('How do people oversee AI-supported work?', 'We agree approved knowledge, access permissions, review points and escalation routes for the workflows included in your engagement. Human judgement remains central to search, shortlists and advice.')}${faq('Can selected partnerships include exclusivity?', 'Yes. Sector, territory, competitor boundaries, duration and service scope are agreed in writing for selected strategic partnerships.')}</div></section>${close()}`;

export const aiServicesPage = `<section class="page-hero"><video autoplay loop muted playsinline preload="metadata" class="hero-video-bg" aria-hidden="true"><source src="assets/videos/ai-hero.mp4" type="video/mp4"></video><div class="video-overlay"></div><div class="wrap">${eyebrow('POWER-UP AI BUSINESS SERVICES')}<h1>Practical AI.<br><em>Built around your business.</em></h1><p>Keep relationships organised, respond to enquiries, find opportunities and deliver the work. Choose from seven connected service areas, configured around your team, your priorities and the tools you use.</p>${button('Book a tailored AI walkthrough', enquiry('AI services walkthrough'))}</div></section>${aiOverview()}<nav class="wrap ai-jump-nav" aria-label="AI service areas">${aiGroups.map(g => `<a href="#${g.id}">${g.title}</a>`).join('')}</nav><div class="wrap ai-details">${aiGroups.map((g, i) => `<section id="${g.id}" class="ai-detail" aria-labelledby="${g.id}-heading"><div class="ai-detail-intro"><span class="ai-icon">${icon(g.id, g.title)}</span><p class="eyebrow">0${i + 1} / ${g.title.toUpperCase().replaceAll('&', '&amp;')}</p><h2 id="${g.id}-heading">${g.short}</h2><p>${g.description}</p><div class="ai-benefit"><span>THE BUSINESS BENEFIT</span><p>${g.benefit}</p></div>${button(`Discuss ${g.title}`, enquiry('AI services: ' + g.title))}</div><div class="ai-detail-included"><h3>How we can support you</h3><ul>${g.included.map(x => `<li>${x}</li>`).join('')}</ul><p class="ai-example"><strong>In practice</strong>${g.use}</p><details><summary>Additional options &amp; configuration <span aria-hidden="true">+</span></summary><p>${g.extra}</p></details></div></section>`).join('')}</div><section class="ai-connect-band"><div class="wrap"><div>${eyebrow('CONNECTED WITH PURPOSE')}<h2>From first enquiry<br>to completed delivery.</h2><p>An example of how the seven service areas can work together within an agreed workflow.</p></div><ol><li><span>Communications</span>Give every enquiry a clear next step</li><li><span>CRM</span>Know your contacts and ownership</li><li><span>Sales &amp; Intelligence</span>Find and qualify the next opportunity</li><li><span>Business Delivery</span>Move agreed work through to completion</li><li><span>Automation</span>Keep routine work moving with approvals</li><li><span>AI Team</span>Delegate briefings and defined assignments</li><li><span>Marketing &amp; Social Media</span>Plan, publish and measure campaigns</li></ol></div></section><section class="wrap section split"><div>${eyebrow('YOUR PARTNERSHIP. YOUR CONFIGURATION.')}<h2>Start with the work<br>you need to improve.</h2></div><div><p class="large-copy">We agree the features, channels, connections and review points included in your partnership before implementation.</p><p>AI services can complement elite recruitment and coaching within selected engagements. Human judgement remains central to every search, shortlist and recommendation.</p><div class="actions">${button('Explore partnerships', 'partnerships.html')}${button('Explore coaching', 'coaching.html', true)}</div></div></section>${close()}`;

const connectedLink = id => `<section class="wrap note-band offer-link-band"><div>${eyebrow('ONE CONNECTED PARTNERSHIP')}<h2>${id === 'coaching' ? 'Give new skills a practical place to work.' : 'Build capability beyond the appointment.'}</h2><p>${id === 'coaching' ? 'Combine coaching with CRM, communications and AI workflows that support the habits your team is developing.' : 'Connect recruitment with coaching and AI business services to support your team’s next chapter.'}</p></div><a class="text-link" href="intelligence.html">Explore AI Business Services ↗</a></section>`;

export function refreshPage(id, html) {
  if (id === 'contact') return html
    .replace('A critical vacancy. A stronger team.<br>A long-term commercial partnership.', 'A critical hire. A stronger team.<br>A more connected business.')
    .replace('<option>Intelligence walkthrough</option>', '<option>AI services walkthrough</option>' + aiGroups.map(g => `<option>AI services: ${g.title}</option>`).join('') + '<option>Intelligence walkthrough</option>')
    .replace('autocomplete="organisation"', 'autocomplete="organization"')
    .replace('Prepared in your browser. Nothing stored without consent.', 'Review and send from your email app. This website does not submit or store your brief.');
  if (id === 'partnerships') html = html
    .replace('Bring hiring, team development and commercial intelligence into a plan that moves with your business.', 'Bring elite recruitment, coaching and practical AI business services into a plan that moves with your business.')
    .replace('Relevant commercial intelligence', 'Selected AI business services and portal access')
    .replace('Development and intelligence where agreed', 'Coaching and AI business services where agreed');
  if (id === 'talent') html = html.replace('SPECIALIST HEADHUNTING', 'ELITE RECRUITMENT & HEADHUNTING');
  if (id === 'about') html = html.replaceAll('coaching and commercial intelligence', 'coaching and AI business services');
  if (['talent', 'coaching', 'partnerships'].includes(id)) {
    const marker = '<section class="cta wrap">';
    const index = html.lastIndexOf(marker);
    if (index >= 0) html = html.slice(0, index) + (id === 'partnerships' ? aiOverview() : connectedLink(id)) + html.slice(index);
  }
  return html;
}

export function refreshShared(html) {
  const schema = { '@context': 'https://schema.org', '@type': 'ProfessionalService', name: 'Power-Up Talent', description: 'Elite recruitment and headhunting, coaching and AI business services for UK electrical wholesale, distribution, construction and engineering businesses.', email: 'info@power-uptalent.co.uk', areaServed: { '@type': 'Country', name: 'United Kingdom' } };
  return html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(schema)}</script>`)
    .replace('styles.css?v=7.0', 'styles.css?v=8.0')
    .replace('<script src="app.js"', '<link rel="stylesheet" href="ai-services.css?v=8.0"><script src="app.js"')
    .replace('href="check.html">Claim territory', 'href="contact.html?interest=Growth%20partnership">Let’s talk')
    .replace('Specialist talent, performance coaching and AI intelligence', 'Elite recruitment, coaching and AI business services')
    .replace('Strict single-client territory exclusivity across the UK.', 'Partnerships configured around your business across the UK.')
    .replace('Human judgement. Better intelligence.', 'People. Performance. Connected business.');
}
