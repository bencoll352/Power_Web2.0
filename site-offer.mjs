const arrow = '<span aria-hidden="true">↗</span>';
const eyebrow = text => `<p class="eyebrow"><span></span>${text}</p>`;
const button = (text, href = 'contact.html', secondary = false) => `<a class="button ${secondary ? 'secondary' : ''}" href="${href}">${text}${arrow}</a>`;
const enquiry = interest => `contact.html?interest=${encodeURIComponent(interest)}`;
const icon = (id, title) => `<img src="assets/services-v2/${id}.svg" alt="${title} icon" width="36" height="36" loading="lazy">`;

export const aiGroups = [
  {
    id: 'crm',
    title: 'CRM',
    short: 'Know who needs your attention.',
    cardCopy: 'Keep account history, follow-ups and renewals visible. Manage personal relationships in a separate workspace.',
    description: 'Business CRM gives teams one place for accounts, contacts, opportunities and next steps. Personal CRM gives individuals a private space to keep in touch with the people who matter.',
    benefit: 'Keep account history, follow-ups and renewals visible across your team, with a separate private workspace for personal relationships.',
    statusBadge: 'Business & Personal CRM workspaces · Scoped data boundaries',
    ctaLabel: 'Request a CRM walkthrough',
    roles: 'Managing directors, sales leaders, branch managers, account teams and individual professionals.',
    outcomes: [
      ['Clear account ownership', 'See who owns each account, who the decision-makers are and what was last agreed.'],
      ['Timely renewals & follow-ups', 'Flag accounts renewing within 30 days without a booked review, alongside owned overdue tasks.'],
      ['Separate Business & Personal boundaries', 'Keep team commercial records and private individual relationships in separate workspaces with independent access.']
    ],
    workspaces: [
      {
        name: 'Option 1 · Business CRM',
        badge: 'Team workspace · Role-scoped access',
        summary: 'One shared commercial workspace for accounts, contacts, opportunities, renewals and team follow-up.',
        items: [
          'Company and contact records, named owners, decision-makers and stakeholder roles.',
          'Account dossiers with relationship history, notes, calls and meeting records.',
          'Opportunity pipeline with board and list views, required fields by stage and weighted forecasts.',
          'Follow-up tasks with an owner and due date, plus overdue views.',
          'Renewal and booked review dates. The dashboard flags accounts renewing within 30 days without a timely review.',
          'Saved views, custom fields, CSV import preview, duplicate review, audited merges and scoped files.',
          'Roles and workspace permissions, plus a versioned integration interface where verified.'
        ]
      },
      {
        name: 'Option 2 · Personal CRM',
        badge: 'Individual workspace · Private data boundary',
        summary: 'A separate private workspace for individuals to maintain professional and personal relationships over time.',
        items: [
          'Personal and professional contacts, relationship circles, notes and remembered details.',
          'Contact methods, interaction history, important dates and birthdays.',
          'Reconnect reminders with configurable cadence, snooze, dismiss and off controls.',
          'Drafts and portable contact exports.'
        ]
      }
    ],
    boundaryNote: 'Separate access and data boundaries: Business CRM and Personal CRM run as independent workspaces with separate authentication and row-level data isolation. Personal records and notes are never shared with the Business CRM workspace, even when email addresses match, and no automatic cross-product data transfer occurs.',
    included: [
      'Company and contact records, named owners, decision-makers and stakeholder roles',
      'Account dossiers with relationship history, notes, calls and meeting records',
      'Opportunity pipeline with board/list views, stage gates and weighted forecasts',
      'Follow-up tasks, 30-day renewal flags, CSV import preview and audited merges',
      'Separate Personal CRM with relationship circles, reconnect cadences and portable exports'
    ],
    inDevelopment: [
      'Managed email verification, password recovery and multi-factor authentication for public self-service hosting.',
      'Operational monitoring and managed automated backup rotation.',
      'Verified live external integration adapters beyond the versioned event interface.'
    ],
    extra: 'Business CRM and Personal CRM can be deployed together or independently, with separate HTTPS origins and database scopes.',
    use: 'Review an account dossier before a quarterly check-in, see that a renewal falls within 30 days without a booked review, and assign the follow-up task to the account owner.'
  },
  {
    id: 'communications',
    title: 'Communications',
    short: 'Give every customer enquiry a next step.',
    cardCopy: 'Give calls, messages, enquiries and callbacks a clear owner and next step.',
    description: 'Bring customer conversations into one team workspace so staff can see what needs attention, who owns it and what happens next.',
    benefit: 'Give calls, messages, enquiries and callbacks a clear owner and next step in one shared team workspace.',
    statusBadge: 'Team workspace built · External channels available with a configured connection',
    ctaLabel: 'Request a Communications walkthrough',
    roles: 'Branch teams, customer service, reception and operations managers.',
    outcomes: [
      ['Every enquiry has an owner', 'Calls, messages, cases and callbacks are assigned with priority, status and due dates.'],
      ['Needs attention in one view', 'Surface overdue cases, pending callbacks and unassigned conversations while excluding sandbox tests from live counts.'],
      ['Approved company answers', 'Staff and voice/chat flows use reviewed FAQs, opening hours, policies and escalation routes.']
    ],
    featureGroups: [
      ['AI Voice Receptionist', 'Inbound call handling, UK English voice and pronunciation settings, approved company answers, enquiry capture and staff transfer or callback routes. Available with a configured telephony connection.'],
      ['Shared inbox', 'Conversation history, ownership, priority, status, internal notes and explicit human takeover.'],
      ['Website chat, email support and WhatsApp', 'Review conversations and respond through configured, verified channels (website chat gateway, Gmail OAuth inbox sync and WhatsApp Cloud API). Available with a configured connection.'],
      ['Company knowledge', 'Approved FAQs, opening hours, services, policies and escalation guidance with version history.'],
      ['Cases and callbacks', 'Assign work, set due dates, record resolution and keep the related conversation visible.'],
      ['Needs attention dashboard', 'Show overdue cases and callbacks, and surface conversations waiting for an owner. Exclude sandbox activity from live work counts.'],
      ['Appointments', 'Capture requests and manage confirmed appointments where the Google Calendar connection is configured and verified.'],
      ['Reporting', 'Review conversation volumes, response times and overdue work, separating sandbox tests from live operations.']
    ],
    included: [
      'AI Voice Receptionist (available with a configured telephony connection)',
      'Shared inbox with ownership, priority, status, notes and human takeover',
      'Website chat, email and WhatsApp adapters (available with a configured connection)',
      'Approved company knowledge, cases, callbacks and Needs Attention dashboard',
      'Appointment capture and reporting with sandbox activity excluded from live counts'
    ],
    inDevelopment: [
      'Public customer gateway deployment and live per-customer provider activation (Twilio, Meta WhatsApp Cloud API, Google OAuth).',
      'Attachment payload storage, closed-window WhatsApp template management and Microsoft 365 mailbox integration.',
      'Autonomous background mail ingestion without manual sync triggers.'
    ],
    extra: 'Provider-dependent channels (telephony, WhatsApp, email and calendar) are available with a configured connection and controlled acceptance testing.',
    use: 'Capture an inbound call or chat enquiry, link it to a callback with a named owner and due time, and track it on the Needs Attention dashboard until resolved.'
  },
  {
    id: 'sales',
    title: 'Sales & Intelligence',
    short: 'See which opportunities deserve your next move.',
    cardCopy: 'Qualify prospects, prioritise follow-ups and see which opportunities are moving.',
    description: 'Give sales teams a clearer view of who fits, what evidence supports the opportunity and which action to take next.',
    benefit: 'Qualify prospects against your ideal customer profile, prioritise quote follow-ups and prepare structured handovers.',
    statusBadge: 'Qualification, action queue & quote tracking built · Live enrichment in expansion',
    ctaLabel: 'Request a Sales & Intelligence walkthrough',
    roles: 'Commercial directors, business development managers, branch managers and sales teams.',
    outcomes: [
      ['Separate fit from data confidence', 'Assess how well a prospect fits your ideal customer profile separately from contactability and missing fields.'],
      ['Disciplined quote follow-up', 'Track a quote reference, owner and date for each prospect, surface overdue quotes and clear reminders when decided.'],
      ['Structured handover & attribution', 'Export reviewed sales handovers for Business Delivery and campaign outcome JSON for Marketing reporting.']
    ],
    featureGroups: [
      ['Ideal customer profile', 'Define target sectors, locations and exclusions to score prospect fit transparently.'],
      ['Prospect records', 'Company and contact details, source evidence, ownership, notes and transactional CSV import with preview and duplicate checks.'],
      ['Qualification', 'Assess fit separately from data confidence and contactability, and highlight missing information clearly.'],
      ['Sales Action Queue', 'Prioritise overdue tasks, accounts needing an owner, engaged prospects and new prospects to review.'],
      ['Quote follow-up', 'Record a quote reference, owner and date. Surface overdue quotes and clear the reminder when the quote is accepted, declined or withdrawn (current scope: one tracked quote per prospect).'],
      ['Pipeline and follow-up', 'Record sales activity, replies and meetings, assign actions and run approved sequences for staff tasks.'],
      ['Campaign preparation', 'Draft outreach, review exact rendered previews and record owner approvals in a controlled review queue.'],
      ['Handover', 'Prepare a structured Sales export for operator review before Business Delivery onboarding.'],
      ['Marketing outcomes', 'Record a source campaign and confirmed qualification, attendance or win milestones, then export the results JSON for Marketing reporting.']
    ],
    included: [
      'Ideal customer profile rules and explainable qualification (fit vs data confidence)',
      'Prospect records, source attribution and CSV import with duplicate checks',
      'Sales Action Queue and tracked single-quote follow-up per prospect',
      'Pipeline activity, staff follow-up sequences and approved campaign previews',
      'Structured Sales handover export and Marketing outcomes JSON export'
    ],
    inDevelopment: [
      'Expansion areas: live prospect discovery and automated contact enrichment.',
      'Expansion areas: tenders, planning applications, competitor monitoring, and live buying/hiring signal feeds.',
      'Expansion areas: connected-mailbox live outreach sending, automated thread sync and direct CRM webhook sync.'
    ],
    extra: 'Outreach drafts are held for human review; live mailbox sending and external signal feeds are positioned as expansion areas.',
    use: 'Review the Sales Action Queue, follow up an overdue quote, mark the deal won and export the structured Sales handover for Business Delivery.'
  },
  {
    id: 'delivery',
    title: 'Business Delivery',
    short: 'Start delivery with a clear brief.',
    cardCopy: 'Turn a won deal into an onboarding record with an owner, agreed scope and start date.',
    description: 'Give the delivery team the information they need when a customer agrees to proceed, including who owns the work, what was agreed and when it starts.',
    benefit: 'Turn a won deal into a clear onboarding record with a named delivery owner, agreed scope and start date.',
    statusBadge: 'Local pilot workflow · Duplicate-safe handover import',
    ctaLabel: 'Discuss a Business Delivery pilot',
    roles: 'Operations leaders, delivery managers, branch leaders and onboarding teams.',
    outcomes: [
      ['Controlled deal-to-delivery handover', 'Import the structured Sales handover and verify that the deal is won and the scope is agreed before onboarding starts.'],
      ['Named owner & start date', 'Record the delivery owner, agreed scope and start date on a single clear onboarding record.'],
      ['Duplicate-safe imports', 'Detect repeat imports using the handover reference and preserve the existing onboarding record without duplication.']
    ],
    featureGroups: [
      ['Import the structured Sales handover', 'Load the reviewed handover package exported from Sales & Intelligence or routed via Automation (current pilot scope).'],
      ['Confirm won deal & agreed scope', 'Validate that the opportunity is marked won and that the customer scope is agreed before creating an onboarding record.'],
      ['Record owner, scope and start date', 'Assign the responsible delivery owner, capture the agreed scope summary and set the target start date.'],
      ['Single onboarding work list', 'View all active onboarding records in a single clear list with owner, scope and start-date visibility.'],
      ['Repeat-import protection', 'Detect repeat imports of the same handover reference and preserve the existing onboarding record safely.']
    ],
    included: [
      'Structured Sales handover import (pilot scope)',
      'Won-deal and agreed-scope confirmation gate',
      'Delivery owner, agreed scope and start-date recording',
      'Single-list onboarding workspace view',
      'Idempotent repeat-import detection preserving existing onboarding records'
    ],
    inDevelopment: [
      'Authenticated multi-user team workspaces and role-based access control.',
      'Customer onboarding forms, document collection checklists and client portal access.',
      'Full project and task tracking, scheduling, proposals, contracts, quotes, invoicing and delivery reporting.',
      'Optional workforce administration (staff onboarding, time, leave and review processes) where relevant.'
    ],
    extra: 'The current release focuses on the pilot Sales-to-Delivery onboarding handover workflow; broader project, portal and billing modules are in development.',
    use: 'Import a reviewed Sales handover, confirm the agreed scope, assign the delivery owner and start date, and see the onboarding record in the delivery list.'
  },
  {
    id: 'automation',
    title: 'Automation',
    short: 'Make repeatable work easier to run and review.',
    cardCopy: 'Route repeatable work between platforms and see what happened on each run.',
    description: 'Connect the steps between teams and systems so an approved action has a clear destination and a traceable outcome.',
    benefit: 'Route reviewed handovers between platforms under operator control and see a clear outcome on every run.',
    statusBadge: 'Operator-controlled pilot · Traceable run history',
    ctaLabel: 'Discuss an Automation pilot',
    roles: 'Operations leads, commercial coordinators and administrators overseeing cross-team handovers.',
    outcomes: [
      ['Operator-controlled routing', 'Route a reviewed Sales handover and its agreed delivery instructions to Business Delivery when you choose to run it.'],
      ['Explicit run outcomes', 'See immediately whether the onboarding record was created, already existed, was rejected or could not be confirmed.'],
      ['Minimal, privacy-aware logs', 'Preserve the handover reference for safe retries without copying the full customer payload into operational logs.']
    ],
    featureGroups: [
      ['Reviewed Sales-to-Delivery routing', 'Route a reviewed Sales handover and its agreed delivery instructions to Business Delivery (current pilot workflow).'],
      ['Explicit outcome recording', 'Record whether the onboarding record was created, already existed, was rejected or could not be confirmed.'],
      ['Idempotent retry reference', 'Reuse the same handover reference on a retry so repeat runs never create duplicate onboarding records in Business Delivery.'],
      ['Payload-safe run history', 'Keep an auditable run history with timestamps, references and outcomes without copying full customer payloads into the operational log.'],
      ['Operator control', 'Keep workflow execution under direct operator control in the current pilot rather than unattended background execution.']
    ],
    included: [
      'Reviewed Sales handover and instruction routing to Business Delivery (pilot)',
      'Explicit run status: created, already existed, rejected or unconfirmed',
      'Handover reference reuse on retry to prevent duplicate onboarding records',
      'Operational run history without full customer payload duplication',
      'Direct operator-controlled execution'
    ],
    inDevelopment: [
      'Visual drag-and-drop workflow builder and multi-step conditional branching.',
      'Automated event triggers, cron schedules and durable background job runners.',
      'Role-based multi-approver gates, automated backoff retries and dead-letter reconciliation.',
      'Live operational alerting, spend controls and third-party integration credential management.'
    ],
    extra: 'Current pilot scope keeps execution under operator control for reviewed Sales-to-Delivery handovers; visual builders and unattended triggers are in development.',
    use: 'Take the reviewed Sales handover and AI Team delivery instructions, run the route to Business Delivery, and verify the "created" or "already existed" receipt in the run log.'
  },
  {
    id: 'ai-team',
    title: 'AI Team',
    short: 'Give your team more capacity for research and preparation.',
    cardCopy: 'Give AI teammates scoped assignments and review the evidence before using their work.',
    description: 'The AI Team workspace helps you brief specialist assistants, review what they produced and decide what moves forward.',
    benefit: 'Brief specialist AI teammates on scoped assignments, inspect cited sources and prepare reviewed delivery briefs.',
    statusBadge: 'Local extractive workspace · Human review & approval gates',
    ctaLabel: 'Request an AI Team walkthrough',
    roles: 'Business owners, commercial leaders, account managers and operations teams.',
    outcomes: [
      ['Scoped, source-backed briefs', 'Brief assignments through the Chief of Staff with clear objectives, acceptance criteria and approved source material.'],
      ['Inspect and revise before use', 'Review cited passages, request corrections and explicitly accept the version that meets your standard.'],
      ['Browser delivery brief preparation', 'Preview a Sales handover in the browser, enter agreed delivery details and download operator instructions for Automation.']
    ],
    featureGroups: [
      ['Chief of Staff', 'Brief assignments with a defined objective, acceptance criteria and approved company sources.'],
      ['Role-based AI teammates', 'Configure specialist teammate responsibilities, instructions and availability around your workflow.'],
      ['Evidence and knowledge', 'Work from approved source material with inline citations and versioned deliverables.'],
      ['Review and revision', 'Inspect output against source passages, request corrections and accept the verified version.'],
      ['Approvals and execution history', 'Review controlled actions and inspect the full history of what happened on each assignment.'],
      ['Delivery brief', 'Preview a Sales handover in the browser, enter the agreed delivery details, and download instructions for operator use in Automation.'],
      ['UK voice input and speech options', 'Use browser UK English voice input and speech playback options where supported by the verified deployment.']
    ],
    included: [
      'Chief of Staff assignment briefing with objectives and acceptance criteria',
      'Role-based AI teammates with scoped instructions and availability',
      'Approved source knowledge, citations and versioned deliverables',
      'Human review, revision requests, approvals and execution history',
      'Browser Delivery brief builder exporting operator instructions for Automation'
    ],
    inDevelopment: [
      'Hosted unattended scheduled routines and autonomous multi-channel execution (current GTM routine kits ship held by default on local machines).',
      'Live external LLM/provider tool execution beyond the local extractive adapter without separate customer API configuration.',
      'Direct automated push to Automation without operator file download and confirmation.'
    ],
    extra: 'Research assignments use a local extractive adapter with mandatory human review; delivery brief instructions are downloaded in the browser for operator use in Automation.',
    use: 'Load a Sales handover in the browser Delivery brief tool, enter the agreed owner and start date, review the generated brief and download the instructions file for Automation.'
  },
  {
    id: 'marketing',
    title: 'Marketing & Social Media',
    short: 'See what your marketing turns into.',
    cardCopy: 'See which campaigns generate qualified leads, attended meetings and wins.',
    description: 'Bring campaign outcomes into one view, so you can compare lead volume with the results that matter to sales.',
    benefit: 'Compare campaign lead volume against qualified leads, attended meetings and won deals using verified Sales outcomes.',
    statusBadge: 'Browser campaign outcomes dashboard built · Broader hub in development',
    ctaLabel: 'Discuss a Marketing & Social Media pilot',
    roles: 'Marketing leads, commercial directors and business owners tracking campaign ROI.',
    outcomes: [
      ['Outcome-based campaign view', 'See which source campaigns actually produce qualified leads, attended meetings and won deals rather than clicks alone.'],
      ['Honest conversion denominator', 'Calculate lead-to-win conversion using all imported leads in each campaign as the denominator, keeping unattributed prospects visible.'],
      ['Duplicate-safe browser import', 'Read the Sales & Intelligence outcomes JSON directly in the browser and reject duplicate prospect IDs automatically.']
    ],
    featureGroups: [
      ['Sales outcomes JSON import', 'Import the Sales & Intelligence outcomes JSON file directly in the browser into the Campaign outcomes dashboard (current built workflow).'],
      ['Funnel comparison by campaign', 'Compare total leads, qualified leads, attended meetings and won deals side by side for each source campaign.'],
      ['All-leads conversion calculation', 'Calculate lead-to-win conversion using all imported leads in each campaign as the denominator.'],
      ['Unattributed visibility', 'Keep prospects without a known source campaign clearly visible in an Unattributed bucket so totals always reconcile.'],
      ['Duplicate prospect ID rejection', 'Reject files containing duplicate prospect IDs to prevent double counting across campaign reports.'],
      ['Operator-recorded attribution', 'Read the selected file locally in the browser; source attribution and milestone outcomes are recorded by operators in Sales & Intelligence.']
    ],
    included: [
      'Browser import of Sales & Intelligence outcomes JSON',
      'Campaign comparison across leads, qualified leads, attended meetings and wins',
      'True lead-to-win conversion using all imported campaign leads as denominator',
      'Explicit Unattributed prospect bucket for complete reconciliation',
      'Automatic duplicate prospect ID rejection to prevent double counting'
    ],
    inDevelopment: [
      'Campaign planning workspace, brand knowledge library and editorial content calendars.',
      'Social listening and monitoring, content repurposing and creative variant generation.',
      'Approved avatar and video creation studio.',
      'Email newsletter studio, multi-step content approvals, scheduling and live social channel publishing.'
    ],
    extra: 'The current pilot provides the browser Campaign Outcomes dashboard fed by Sales & Intelligence exports; content creation, avatars and live social publishing are in development.',
    use: 'Select the outcomes JSON exported from Sales & Intelligence, inspect qualified leads, attended meetings and won deals by campaign, and see true lead-to-win conversion alongside Unattributed prospects.'
  }
];

const aiCards = () => `<div class="ai-service-grid">${aiGroups.map(g => `<a class="ai-service-card" href="intelligence.html#${g.id}"><span class="ai-icon">${icon(g.id, g.title)}</span><h3>${g.title}</h3><p class="ai-card-headline">${g.short}</p><p>${g.cardCopy}</p><span class="ai-card-link">Explore ${g.title} ${arrow}</span></a>`).join('')}</div>`;

const aiOverview = () => `<section class="ai-overview" aria-labelledby="ai-overview-heading"><div class="wrap"><div class="ai-centred">${eyebrow('POWER-UP TALENT | AI &amp; BUSINESS PLATFORMS')}<h2 id="ai-overview-heading">Your business.<br class="mobile-break"> <em>Connected.</em></h2><p>Seven platforms for managing relationships, winning work and delivering it. Start with the area you need most, then connect the others as your business grows.</p><div class="actions" style="justify-content:center;margin-top:22px">${button('Explore the platforms', 'intelligence.html')}${button('Talk to us', enquiry('AI services walkthrough'), true)}</div></div>${aiCards()}<p class="ai-scope">Each platform can be introduced on its own or connected as part of a wider Power-Up partnership. Where a capability is in development or requires a configured provider connection, we label it clearly.</p></div></section>`;

export const connectedJourneyBand = () => `<section class="ai-connect-band" id="connected-journey" aria-labelledby="connected-journey-heading"><div class="wrap"><div>${eyebrow('HOW THE PLATFORMS WORK TOGETHER')}<h2 id="connected-journey-heading">From first enquiry<br>to delivery.</h2><p>A practical example of how an enquiry moves across the seven platforms. Manual exports, browser imports and operator confirmations keep people in control at each boundary.</p><p class="connect-honesty">Not automatically synchronised end to end: handovers use structured exports, browser review and operator confirmation.</p></div><ol class="connected-steps-list"><li><span>01 · <a href="communications.html">Communications</a> <em>Team workspace / configured channel</em></span><strong>Captures an enquiry and gives it an owner.</strong><p>Inbound calls, chat or messages are recorded and assigned to a team member with a clear next step.</p></li><li><span>02 · <a href="sales-intelligence.html">Sales &amp; Intelligence</a> <em>Operator qualification &amp; JSON export</em></span><strong>Qualifies the opportunity and tracks the next step.</strong><p>Sales assesses fit and data confidence, tracks quote follow-up, records campaign outcomes and exports a structured handover.</p></li><li><span>03 · <a href="crm.html">CRM</a> <em>Scoped Business CRM workspace</em></span><strong>Retains the account history and relationship actions.</strong><p>Account dossiers, contacts, decision-makers, tasks and 30-day renewal review flags stay visible to the team.</p></li><li><span>04 · <a href="ai-team.html">AI Team</a> <em>Browser preview &amp; downloaded instructions</em></span><strong>Helps prepare the delivery brief for human review.</strong><p>An operator previews the Sales handover in the browser, enters agreed delivery details and downloads instructions for Automation.</p></li><li><span>05 · <a href="automation.html">Automation</a> <em>Operator-controlled pilot run</em></span><strong>Routes the reviewed handover.</strong><p>The operator runs the route to Business Delivery using the handover reference to prevent duplicate records and logs the outcome.</p></li><li><span>06 · <a href="business-delivery.html">Business Delivery</a> <em>Pilot handover import &amp; confirmation</em></span><strong>Creates an owned onboarding record.</strong><p>Delivery imports the handover, confirms the deal is won and scope is agreed, and records the delivery owner and start date.</p></li><li><span>07 · <a href="marketing-social-media.html">Marketing &amp; Social Media</a> <em>Browser JSON import</em></span><strong>Reports which source campaigns produced sales outcomes.</strong><p>Marketing imports the Sales outcomes JSON in the browser to compare leads, qualified leads, attended meetings and wins.</p></li></ol></div></section>`;

const close = () => `<section class="wrap cta"><div>${eyebrow('START WITH YOUR PRIORITIES')}<h2>What would make<br>the biggest difference?</h2><p>A critical hire. A stronger team. A more connected business.<br>Let’s agree the right place to start.</p></div><div class="actions">${button('Explore the platforms', 'intelligence.html')}${button('Talk to us', enquiry('Growth partnership'), true)}</div></section>`;

const pillars = () => `<section class="wrap section" aria-labelledby="pillars-heading"><div class="section-head"><div>${eyebrow('THREE PILLARS. ONE PARTNERSHIP.')}<h2 id="pillars-heading">People, performance<br>and connected platforms.</h2></div><p>Start with the challenge in front of you. Bring recruitment, coaching and practical business platforms together as your business grows.</p></div><div class="offer-pillars">${[
  ['01 / PEOPLE', 'Elite Recruitment<br>&amp; Headhunting', 'Find the leaders, commercial performers and technical specialists your business needs.', 'talent.html', 'Explore recruitment'],
  ['02 / PERFORMANCE', 'Coaching<br>&amp; Development', 'Strengthen sales skills, branch performance and leadership through practical development.', 'coaching.html', 'Explore coaching'],
  ['03 / AI & BUSINESS PLATFORMS', 'Seven Connected<br>Platforms', 'Seven platforms for managing relationships, winning work and delivering it—configured around your team.', 'intelligence.html', 'Explore the platforms']
].map(([n, t, d, url, link]) => `<article><span class="eyebrow">${n}</span><h3>${t}</h3><p>${d}</p><a class="text-link" href="${url}">${link} ↗</a></article>`).join('')}</div></section>`;

const example = () => `<section class="partnership-section"><div class="wrap partnership-grid"><div>${eyebrow('RECRUITMENT, COACHING &amp; PLATFORMS')}<h2>A new branch.<br>A joined-up plan.</h2><p>Appoint the right manager, develop the team’s sales routines and introduce the platforms that keep enquiries, account follow-up and delivery organised.</p><p class="muted">Illustrative partnership. Services, platforms and measures are agreed around your requirements.</p>${button('Explore partnerships', 'partnerships.html')}</div><div class="pathway"><div><span>01</span><h3>Recruit the leader</h3><p>Define the brief and discreetly approach relevant candidates.</p></div><div><span>02</span><h3>Develop the team</h3><p>Coach practical sales habits and confident branch leadership.</p></div><div><span>03</span><h3>Connect the platforms</h3><p>Introduce CRM, Communications, Sales &amp; Intelligence and Delivery around your team.</p></div></div></div></section>`;

const process = () => `<section class="wrap section"><div class="section-head"><div>${eyebrow('A PRACTICAL START')}<h2>Your priorities.<br>Our starting point.</h2></div><p>A clear brief, an agreed scope and people accountable for delivery.</p></div><ol class="ai-process">${[
  ['Understand', 'Discuss your hiring, team development and platform priorities.'],
  ['Agree', 'Select the recruitment, coaching or platform scope that fits your business.'],
  ['Configure & deliver', 'Run the search, coach the team or set up your chosen platforms and pilots.'],
  ['Review', 'Review progress and connect additional platforms as your business grows.']
].map(([t, d], i) => `<li><span>0${i + 1}</span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol></section>`;

const faq = (q, a) => `<details><summary>${q}<span aria-hidden="true">+</span></summary><p>${a}</p></details>`;

export const partnershipHome = `<section class="hero offer-hero"><video autoplay loop muted playsinline preload="auto" class="hero-video-bg" aria-hidden="true"><source src="assets/videos/home-hero.mp4" type="video/mp4"></video><div class="video-overlay"></div><div class="wrap hero-grid"><div>${eyebrow('POWER-UP TALENT | AI &amp; BUSINESS PLATFORMS')}<h1>Your business.<br><em>Connected.</em></h1><p class="hero-copy">Seven platforms for managing relationships, winning work and delivering it. Start with the area you need most, then connect the others as your business grows—backed by Power-Up Talent’s specialist recruitment and coaching.</p><div class="actions">${button('Explore the platforms', 'intelligence.html')}${button('Talk to us', 'contact.html', true)}</div><p class="hero-foot">Elite Recruitment &amp; Headhunting · Coaching &amp; Development · Seven AI &amp; Business Platforms</p></div><aside class="offer-compass" aria-label="Three connected pillars"><span class="eyebrow">GREAT PEOPLE. STRONGER TEAMS.</span><div><span>01</span><strong>Recruit the talent.</strong></div><div><span>02</span><strong>Develop your people.</strong></div><div><span>03</span><strong>Connect your platforms.</strong></div><p>One partner across hiring, performance and practical business platforms.</p></aside></div></section><div class="sector-strip"><div class="wrap"><span>SECTOR SPECIALISTS</span><strong>Electrical wholesale</strong><strong>Technical distribution</strong><strong>Construction</strong><strong>Engineering</strong></div></div>${pillars()}${aiOverview()}${connectedJourneyBand()}${example()}${process()}<section class="wrap section faq-section"><div>${eyebrow('CLARITY FROM THE START')}<h2>A partnership<br>that fits.</h2></div><div class="faqs">${faq('Can we start with one platform or one hiring brief?', 'Yes. Start with the platform you need most—such as CRM, Communications or Sales & Intelligence—or with a recruitment or coaching brief. We agree the right scope before work begins.')}${faq('Are all seven platforms automatically synchronised?', 'No. Where platforms exchange data in the current release—such as Sales exporting a handover or outcomes JSON for AI Team, Automation, Business Delivery and Marketing—transfers use structured exports, browser review and operator confirmation.')}${faq('How do you distinguish built features from capabilities in development?', 'Each platform page separates built workspace or pilot workflows from provider-dependent connections and capabilities in development, so you always know what is ready to use today.')}${faq('Can selected partnerships include territory exclusivity?', 'Yes. Sector, territory, competitor boundaries, duration and service scope are agreed in writing for selected strategic recruitment and growth partnerships.')}</div></section>${close()}`;

export const aiServicesPage = `<section class="page-hero"><video autoplay loop muted playsinline preload="auto" class="hero-video-bg" aria-hidden="true"><source src="assets/videos/ai-hero.mp4" type="video/mp4"></video><div class="video-overlay"></div><div class="wrap">${eyebrow('POWER-UP TALENT | AI &amp; BUSINESS PLATFORMS')}<h1>Your business.<br><em>Connected.</em></h1><p>Seven platforms for managing relationships, winning work and delivering it. Start with the area you need most, then connect the others as your business grows.</p><div class="actions">${button('Explore the platforms', '#service-directory-heading')}${button('Talk to us', enquiry('AI services walkthrough'), true)}</div></div></section>${aiOverview()}<nav class="wrap ai-jump-nav" aria-label="AI service areas">${aiGroups.map(g => `<a href="#${g.id}">${g.title}</a>`).join('')}</nav><div class="wrap ai-details">${aiGroups.map((g, i) => `<section id="${g.id}" class="ai-detail" aria-labelledby="${g.id}-heading"><div class="ai-detail-intro"><span class="ai-icon">${icon(g.id, g.title)}</span><p class="eyebrow">0${i + 1} / ${g.title.toUpperCase().replaceAll('&', '&amp;')}</p><h2 id="${g.id}-heading">${g.short}</h2><p>${g.description}</p><div class="ai-benefit"><span>THE CUSTOMER BENEFIT</span><p>${g.cardCopy}</p></div>${button(g.ctaLabel || `Discuss ${g.title}`, enquiry('AI services: ' + g.title))}</div><div class="ai-detail-included"><h3>Built workflow &amp; feature groups</h3><ul>${g.included.map(x => `<li>${x}</li>`).join('')}</ul><p class="ai-example"><strong>In practice</strong>${g.use}</p><details><summary>In development &amp; expansion scope <span aria-hidden="true">+</span></summary><p>${g.inDevelopment.join(' ')}</p></details></div></section>`).join('')}</div>${connectedJourneyBand()}<section class="wrap section split"><div>${eyebrow('YOUR PARTNERSHIP. YOUR CONFIGURATION.')}<h2>Start with the area<br>you need most.</h2></div><div><p class="large-copy">We agree the platforms, connections, pilot scope and review points with you before implementation.</p><p>Our seven business platforms sit alongside Power-Up Talent’s specialist recruitment and performance coaching. Human judgement remains central to every search, shortlist and operational decision.</p><div class="actions">${button('Request a walkthrough', enquiry('AI services walkthrough'))}${button('Explore partnerships', 'partnerships.html', true)}</div></div></section>${close()}`;

const connectedLink = id => `<section class="wrap note-band offer-link-band"><div>${eyebrow('POWER-UP TALENT | AI &amp; BUSINESS PLATFORMS')}<h2>${id === 'coaching' ? 'Give new habits a practical workspace.' : 'Support the person after the appointment.'}</h2><p>${id === 'coaching' ? 'Connect coaching with CRM, Communications and Sales & Intelligence so your team can apply what they learn every day.' : 'Combine specialist headhunting with coaching and our seven business platforms to support your team’s next chapter.'}</p></div><a class="text-link" href="intelligence.html">Explore the platforms ↗</a></section>`;

export function refreshPage(id, html) {
  if (id === 'contact') return html
    .replace('A critical vacancy. A stronger team.<br>A long-term commercial partnership.', 'A critical hire. A stronger team.<br>Your business, connected.')
    .replace('<option>Intelligence walkthrough</option>', '<option>AI services walkthrough</option><option>Platform pilot discussion</option>' + aiGroups.map(g => `<option>AI services: ${g.title}</option>`).join('') + '<option>Intelligence walkthrough</option>')
    .replace('autocomplete="organisation"', 'autocomplete="organization"')
    .replace('Prepared in your browser. Nothing stored without consent.', 'Review and send from your email app. This website does not submit or store your brief.');
  if (id === 'partnerships') html = html
    .replace('Bring hiring, team development and commercial intelligence into a plan that moves with your business.', 'Bring elite recruitment, coaching and seven connected AI & business platforms into a plan that moves with your business.')
    .replace('Relevant commercial intelligence', 'Selected AI & business platforms and pilot onboarding')
    .replace('Development and intelligence where agreed', 'Coaching and connected business platforms where agreed');
  if (id === 'talent') html = html.replace('SPECIALIST HEADHUNTING', 'ELITE RECRUITMENT & HEADHUNTING');
  if (id === 'about') html = html.replaceAll('coaching and commercial intelligence', 'coaching and AI & business platforms');
  if (['talent', 'coaching', 'partnerships'].includes(id)) {
    const marker = '<section class="cta wrap">';
    const index = html.lastIndexOf(marker);
    if (index >= 0) html = html.slice(0, index) + (id === 'partnerships' ? aiOverview() : connectedLink(id)) + html.slice(index);
  }
  return html;
}

export function refreshShared(html) {
  const schema = { '@context': 'https://schema.org', '@type': 'ProfessionalService', name: 'Power-Up Talent', description: 'Elite recruitment and headhunting, coaching and seven AI & business platforms (CRM, Communications, Sales & Intelligence, Business Delivery, Automation, AI Team and Marketing & Social Media) for UK electrical wholesale, distribution, construction and engineering businesses.', email: 'info@power-uptalent.co.uk', areaServed: { '@type': 'Country', name: 'United Kingdom' } };
  return html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(schema)}</script>`)
    .replace('styles.css?v=7.0', 'styles.css?v=8.0')
    .replace('<script src="app.js"', '<link rel="stylesheet" href="ai-services.css?v=8.0"><script src="app.js"')
    .replace('href="check.html">Claim territory', 'href="contact.html?interest=AI%20services%20walkthrough">Talk to us')
    .replace('Specialist talent, performance coaching and AI intelligence', 'Elite recruitment, coaching and seven AI & business platforms')
    .replace('Strict single-client territory exclusivity across the UK.', 'Partnerships and platforms configured around your business across the UK.')
    .replace('Human judgement. Better intelligence.', 'People. Performance. Your business, connected.');
}
