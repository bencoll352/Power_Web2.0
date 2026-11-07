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
    plainBenefit: 'Keep commercial account history, follow-ups and 30-day renewal reviews visible for your team, while giving individuals a separate private workspace for personal relationships.',
    cardCopy: 'Keep account history, follow-ups and renewals visible. Manage personal relationships in a separate workspace.',
    description: 'Business CRM gives teams one place for accounts, contacts, opportunities and next steps. Personal CRM gives individuals a private space to keep in touch with the people who matter.',
    benefit: 'Keep account history, follow-ups and renewals visible across your team, with a separate private workspace for personal relationships.',
    statusBadge: 'Business & Personal CRM workspaces · Separate data access',
    whatYouCanTry: 'We can demonstrate both the Business CRM workspace (accounts, stage-gated pipeline, overdue tasks and 30-day renewal flags) and the separate Personal CRM workspace (relationship circles, reconnect reminders and portable exports).',
    ctaLabel: 'Request a walkthrough',
    roles: 'Managing directors, sales leaders, branch managers, account teams and individual professionals who want clear account ownership without mixing team data and private contacts.',
    practicalExample: 'An account owner reviews the Business CRM dashboard, spots an account renewing within 30 days with no review booked, and schedules the renewal review before the deadline.',
    relatedIds: ['sales', 'communications'],
    outcomes: [
      ['Clear account ownership', 'See who owns each account, who the decision-makers are and what was last agreed.'],
      ['30-day renewal & follow-up flags', 'Accounts renewing within 30 days are flagged when there is no timely review booked, alongside overdue tasks.'],
      ['Separate Business & Personal access', 'Team commercial records and private personal relationships live in separate workspaces with independent access boundaries.']
    ],
    workspaces: [
      {
        name: 'Option 1 · Business CRM',
        badge: 'Team workspace · Role-scoped access',
        summary: 'One shared commercial workspace for accounts, contacts, decision-makers, pipeline stages, follow-ups and renewal reviews.',
        items: [
          'Company and contact records, named owners, decision-makers and stakeholder roles.',
          'Account dossiers with relationship history, notes, calls and meeting records.',
          'Opportunity pipeline with board and list views, required fields by stage and weighted forecasts.',
          'Follow-up tasks with an owner and due date, plus overdue views.',
          'Renewal and booked review dates — accounts renewing within 30 days are flagged when there is no timely review.',
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
      'Business CRM: accounts, contacts, decision-makers, owners, pipeline, tasks, overdue follow-ups and 30-day renewal review flags',
      'Personal CRM: private relationships, reminders, important dates, notes and portable exports',
      'CSV import preview, duplicate review, audited merges and role-scoped access'
    ],
    inDevelopment: [
      'Managed email verification, password recovery and multi-factor authentication for public self-service hosting.',
      'Operational monitoring, automated backup rotation and verified live external integration adapters.'
    ],
    extra: 'Business CRM and Personal CRM can be deployed together or independently, with separate HTTPS origins and database scopes.',
    use: 'An account owner spots an upcoming renewal flagged within 30 days without a booked review and books the review task.'
  },
  {
    id: 'communications',
    title: 'Communications',
    short: 'Give every customer enquiry a next step.',
    plainBenefit: 'Bring inbound calls, messages, cases and callbacks into one team workspace so staff can see what is overdue, who owns it and what happens next.',
    cardCopy: 'Give calls, messages, enquiries and callbacks a clear owner and next step.',
    description: 'Bring customer conversations into one team workspace so staff can see what needs attention, who owns it and what happens next.',
    benefit: 'Give calls, messages, enquiries and callbacks a clear owner and next step in one shared team workspace.',
    statusBadge: 'Team workspace ready to demonstrate · Live channels require a configured connection',
    whatYouCanTry: 'We can demonstrate the shared inbox, human takeover, cases, callbacks, approved company knowledge and Needs Attention view. Live telephony, website chat, email inbox sync, WhatsApp and calendar booking require a configured provider connection.',
    ctaLabel: 'Request a walkthrough',
    roles: 'Branch teams, reception staff, customer service leads and operations managers handling inbound calls and enquiries.',
    practicalExample: 'A missed or unresolved customer enquiry surfaces on the Needs Attention view and is assigned to a named staff member for a scheduled callback.',
    relatedIds: ['crm', 'sales'],
    outcomes: [
      ['Every enquiry has an owner', 'Calls, messages, cases and callbacks are assigned with priority, status and due dates.'],
      ['Needs attention in one view', 'Overdue cases, pending callbacks and conversations waiting for an owner are surfaced for staff, excluding sandbox tests.'],
      ['Human takeover & approved answers', 'Staff can take over any conversation and respond using reviewed FAQs, opening hours, policies and escalation guidance.']
    ],
    featureGroups: [
      ['Shared inbox & human takeover', 'Conversation history, ownership, priority, status, internal notes and immediate human takeover.'],
      ['Cases, callbacks & Needs attention', 'Assign work, set due dates, record resolution and surface overdue cases, callbacks and unassigned conversations (excluding sandbox tests from live counts).'],
      ['Company knowledge & reporting', 'Approved FAQs, opening hours, services, policies and escalation guidance, plus reporting on response times and overdue work.'],
      ['AI Voice Receptionist (connection required)', 'Inbound call handling, UK English voice settings, approved answers, enquiry capture and transfer or callback routes — available with a configured telephony connection.'],
      ['Chat, email, WhatsApp & appointments (connection required)', 'Website chat, email support, WhatsApp messaging and appointment confirmation — available when the corresponding provider and calendar connections are configured and verified.']
    ],
    included: [
      'Shared inbox with ownership, priority, status, internal notes and human takeover',
      'Cases, callbacks and Needs attention view surfacing overdue work and unassigned conversations',
      'Approved company knowledge and operational reporting (sandbox tests excluded from live counts)',
      'AI Voice Receptionist, website chat, email, WhatsApp and calendar booking (available with a configured connection)'
    ],
    inDevelopment: [
      'Per-customer live provider activation (telephony/SIP, Meta WhatsApp Cloud API, Google/Microsoft mailbox sync and calendar connectors).',
      'Attachment storage, closed-window WhatsApp template management and autonomous background mail sync.'
    ],
    extra: 'Website chat, email, WhatsApp, voice telephony and calendar availability depend on a configured provider connection.',
    use: 'A missed or unresolved enquiry is surfaced on Needs Attention and assigned to a team member for a callback.'
  },
  {
    id: 'sales',
    title: 'Sales & Intelligence',
    short: 'See which opportunities deserve your next move.',
    plainBenefit: 'Qualify prospects against your ideal customer profile, prioritise owned follow-ups in the Sales Action Queue, track one active quote per prospect and export structured handovers.',
    cardCopy: 'Qualify prospects, prioritise follow-ups and see which opportunities are moving.',
    description: 'Give sales teams a clearer view of who fits, what evidence supports the opportunity and which action to take next.',
    benefit: 'Qualify prospects against your ideal customer profile, prioritise quote follow-ups and prepare structured handovers.',
    statusBadge: 'Qualification, Action Queue & quote tracking built · Live enrichment in expansion',
    whatYouCanTry: 'We can demonstrate ICP qualification (separating fit from data confidence), the Sales Action Queue, single-quote-per-prospect tracking, reviewed outreach drafts, structured Sales handover export and Marketing outcomes JSON export.',
    ctaLabel: 'Request a walkthrough',
    roles: 'Commercial directors, business development managers, branch managers and external sales teams.',
    practicalExample: 'An overdue quote rises in the Sales Action Queue for follow-up and clears automatically once the prospect’s decision (accepted, declined or withdrawn) is recorded.',
    relatedIds: ['crm', 'delivery'],
    outcomes: [
      ['Fit separated from data confidence', 'Assess how well a prospect fits your ideal customer profile separately from contactability and missing fields.'],
      ['Sales Action Queue & quote tracking', 'Surface overdue tasks, unassigned accounts and overdue quotes (current limit: one tracked quote per prospect).'],
      ['Reviewed outreach & structured exports', 'Keep outreach drafts in human review before sending, and export JSON handovers for Business Delivery and Marketing.']
    ],
    featureGroups: [
      ['Ideal customer profile & qualification', 'Define target sectors, locations and exclusions. Assess fit separately from data confidence and contactability, highlighting missing information.'],
      ['Sales Action Queue & owned follow-ups', 'Prioritise overdue tasks, accounts needing an owner, engaged prospects and new prospects to review, plus staff task sequences.'],
      ['Quote tracking (one quote per prospect)', 'Record a quote reference, owner and date. Surface overdue quotes in the queue and clear the reminder when a decision is recorded.'],
      ['Reviewed outreach drafts', 'Draft campaign outreach and record owner approvals in a review queue — distinct from live mailbox sending.'],
      ['Structured handover & Marketing exports', 'Export a reviewed Sales handover JSON for Business Delivery and a campaign outcomes JSON file for Marketing reporting.']
    ],
    included: [
      'Qualification separating ICP fit from data confidence and contactability',
      'Sales Action Queue and owned follow-up task sequences',
      'Quote follow-up tracking (current limit: one tracked quote per prospect)',
      'Reviewed outreach drafts, structured handover export and Marketing outcomes JSON export'
    ],
    inDevelopment: [
      'Expansion areas: live prospect discovery, automated contact enrichment, tenders, planning signals, competitor monitoring and buying signals.',
      'Expansion areas: live connected-mailbox outreach sending and automatic website attribution through to Sales.'
    ],
    extra: 'Current scope tracks one quote per prospect and keeps outreach drafts in human review rather than live sending.',
    use: 'An overdue quote rises in the Sales Action Queue and clears when the customer decision is recorded.'
  },
  {
    id: 'delivery',
    title: 'Business Delivery',
    short: 'Start delivery with a clear brief.',
    plainBenefit: 'Turn a reviewed won-deal handover from Sales into one owned onboarding record with an agreed scope, delivery owner and start date — protected against repeat imports.',
    cardCopy: 'Turn a won deal into an onboarding record with an owner, agreed scope and start date.',
    description: 'Give the delivery team the information they need when a customer agrees to proceed, including who owns the work, what was agreed and when it starts.',
    benefit: 'Turn a won deal into a clear onboarding record with a named delivery owner, agreed scope and start date.',
    statusBadge: 'Pilot onboarding workflow ready to try · Broader suite in development',
    whatYouCanTry: 'You can try the pilot onboarding workflow: importing a reviewed Sales handover, confirming the deal is won and scope is agreed, recording the delivery owner and start date, and testing repeat-import protection.',
    ctaLabel: 'Request a walkthrough',
    roles: 'Operations leaders, delivery managers, branch managers and onboarding coordinators taking over won commercial work.',
    practicalExample: 'An operator imports a reviewed won-deal handover from Sales, assigns the delivery owner and start date, and turns it into one owned onboarding record.',
    relatedIds: ['sales', 'automation'],
    outcomes: [
      ['Reviewed won-deal import (pilot)', 'Import the structured Sales handover and confirm that the deal is won and the scope is agreed before onboarding begins.'],
      ['One owned onboarding record', 'Record the delivery owner, agreed scope and start date in a single clear onboarding list.'],
      ['Protection against repeat imports', 'Detect repeat imports of the same handover reference and preserve the existing onboarding record without creating duplicates.']
    ],
    featureGroups: [
      ['Reviewed won-deal handover import', 'Load the structured handover exported from Sales & Intelligence or routed via Automation in the current pilot workflow.'],
      ['Scope & won-deal confirmation', 'Verify that the opportunity is marked won and that the customer scope is agreed before creating the onboarding record.'],
      ['Delivery owner, agreed scope & start date', 'Record who owns delivery, what scope was agreed and when work starts in a single onboarding view.'],
      ['Repeat-import protection', 'Recognise an existing handover reference on repeat submission and keep the original onboarding record intact.']
    ],
    included: [
      'Pilot workflow: reviewed won-deal handover import',
      'Delivery owner, agreed scope and start-date recording in a single onboarding list',
      'Idempotent protection against repeat imports of the same handover reference'
    ],
    inDevelopment: [
      'Broader project and task delivery management, customer onboarding forms, document checklists and client portal access.',
      'Proposals, contracts, invoicing, billing integrations (such as Lago billing) and automated onboarding email journeys (such as Dittofeed).',
      'Optional workforce administration (staff onboarding, time, leave and reviews).'
    ],
    extra: 'The current workflow is a focused onboarding handover pilot; broader project delivery, client portals, invoicing and workforce tools are in development.',
    use: 'An operator turns a reviewed Sales handover into one owned onboarding record with an agreed scope and start date.'
  },
  {
    id: 'automation',
    title: 'Automation',
    short: 'Make repeatable work easier to run and review.',
    plainBenefit: 'Route a reviewed Sales handover and delivery instructions to Business Delivery under operator control, with clear outcomes and duplicate protection on repeat runs.',
    cardCopy: 'Route repeatable work between platforms and see what happened on each run.',
    description: 'Connect the steps between teams and systems so an approved action has a clear destination and a traceable outcome.',
    benefit: 'Route reviewed handovers between platforms under operator control and see a clear outcome on every run.',
    statusBadge: 'Operator-controlled pilot workflow · Traceable run outcomes',
    whatYouCanTry: 'We can demonstrate operator-controlled Sales-to-Delivery routing, inspect recorded outcomes (created, already existed, rejected or unconfirmed) and show how rerunning the same handover reference finds the existing onboarding record.',
    ctaLabel: 'Request a walkthrough',
    roles: 'Operations leads, commercial coordinators and administrators overseeing handovers between sales and delivery.',
    practicalExample: 'An operator reruns a reviewed Sales handover; Automation reuses the handover reference, finds the existing onboarding record in Business Delivery and prevents a duplicate.',
    relatedIds: ['ai-team', 'delivery'],
    outcomes: [
      ['Operator-controlled routing', 'Route a reviewed Sales handover and its agreed delivery instructions to Business Delivery when triggered by an operator.'],
      ['Confirmed vs unresolved outcomes', 'Distinguish confirmed outcomes (created or already existed) from rejected or unconfirmed runs in the run log.'],
      ['Safe repeat submissions', 'Reuse the handover reference on retry so rerunning a handover finds the existing record without copying full customer payloads into logs.']
    ],
    featureGroups: [
      ['Operator-controlled Sales-to-Delivery routing', 'Take a reviewed Sales handover and agreed delivery instructions and route them to Business Delivery under human operator control.'],
      ['Confirmed vs unresolved run outcomes', 'Record whether the onboarding record was created, already existed, was rejected by validation or remained unconfirmed.'],
      ['Repeat-submission safety', 'Reuse the handover reference on a repeat run so Business Delivery returns the existing onboarding record rather than creating a duplicate.'],
      ['Minimal operational run history', 'Log timestamps, handover references and outcome statuses without storing full customer payloads in the automation log.']
    ],
    included: [
      'Operator-controlled Sales-to-Delivery handover routing (pilot)',
      'Recorded run outcomes distinguishing confirmed runs (created / already existed) from rejected or unconfirmed runs',
      'Repeat-submission deduplication via handover reference reuse and payload-safe run history'
    ],
    inDevelopment: [
      'Visual workflow building, multi-step branching and unattended background or scheduled triggers.',
      'Expanded third-party connectors, multi-approver gates, spend controls and external notification pipelines (such as Dittofeed or Lago billing).'
    ],
    extra: 'Current pilot scope runs under direct operator control for Sales-to-Delivery handovers; visual builders and unattended triggers are in development.',
    use: 'Rerunning a reviewed handover with the same reference finds the existing onboarding record and logs "already existed".'
  },
  {
    id: 'ai-team',
    title: 'AI Team',
    short: 'Give your team more capacity for research and preparation.',
    plainBenefit: 'Give AI teammates scoped assignments backed by approved company sources, review and revise the cited evidence, and prepare delivery brief instructions in the browser.',
    cardCopy: 'Give AI teammates scoped assignments and review the evidence before using their work.',
    description: 'The AI Team workspace helps you brief specialist assistants, review what they produced and decide what moves forward.',
    benefit: 'Brief specialist AI teammates on scoped assignments, inspect cited sources and prepare reviewed delivery briefs.',
    statusBadge: 'Scoped research & browser delivery brief ready to demonstrate · External tools require configuration',
    whatYouCanTry: 'We can demonstrate briefing an assignment through the Chief of Staff, inspecting cited source passages, requesting a revision, and using the browser Delivery Brief tool to preview a Sales handover and download reviewed instructions for Automation.',
    ctaLabel: 'Request a walkthrough',
    roles: 'Commercial leaders, account directors, operations leads and branch managers preparing briefs, research and handover instructions.',
    practicalExample: 'A team member previews a Sales handover in the browser, reviews and edits the delivery brief against agreed scope, and downloads the reviewed instructions file before passing it to Automation.',
    relatedIds: ['automation', 'sales'],
    outcomes: [
      ['Scoped assignments & cited evidence', 'Brief tasks with clear objectives and approved sources, and inspect exact cited passages before accepting output.'],
      ['Human review & revision history', 'Request revisions, record explicit human approval and keep a full history of versions and reviews.'],
      ['Browser delivery brief to Automation', 'Preview a Sales handover in the browser and download reviewed delivery instructions for an operator to run in Automation.']
    ],
    featureGroups: [
      ['Chief of Staff & role-based teammates', 'Define scoped assignments, acceptance criteria and role-specific AI teammate responsibilities around approved company sources.'],
      ['Evidence, review & revision', 'Inspect output against cited source passages, request revisions and explicitly approve the version that moves forward.'],
      ['Browser Delivery Brief export', 'Preview a structured Sales handover in the browser, enter the agreed delivery owner, scope and start date, and download reviewed instructions for Automation.'],
      ['Voice, external tools & schedules (availability noted)', 'Browser UK English speech options are available where supported; external LLM/tool connectors, scheduled routines and autonomous actions require separate configuration or remain in development.']
    ],
    included: [
      'Scoped assignments, approved source citations, human review, revision and approval history',
      'Browser Delivery Brief tool: preview a Sales handover and download reviewed instructions for Automation',
      'Local extractive research workflow keeping every decision under human review'
    ],
    inDevelopment: [
      'Unattended scheduled activity, autonomous multi-step actions and external tool execution without human sign-off.',
      'Hosted cloud voice/LLM provider integrations beyond local extractive and browser speech capabilities.'
    ],
    extra: 'Operators preview the Sales handover in the browser and download reviewed instructions for Automation; autonomous actions and unattended schedules are not enabled by default.',
    use: 'A team member reviews a delivery brief in the browser and downloads the approved instructions before passing them to Automation.'
  },
  {
    id: 'marketing',
    title: 'Marketing & Social Media',
    short: 'See what your marketing turns into.',
    plainBenefit: 'Import your Sales outcomes JSON in the browser to compare campaigns by leads, qualified leads, attended meetings, won deals and lead-to-win conversion — keeping unattributed records visible.',
    cardCopy: 'See which campaigns generate qualified leads, attended meetings and wins.',
    description: 'Bring campaign outcomes into one view, so you can compare lead volume with the results that matter to sales.',
    benefit: 'Compare campaign lead volume against qualified leads, attended meetings and won deals using verified Sales outcomes.',
    statusBadge: 'Browser campaign outcomes reporting built · Content & social hub in development',
    whatYouCanTry: 'You can try the browser Campaign Outcomes dashboard: importing a Sales & Intelligence outcomes JSON file, comparing campaigns by recorded wins as well as lead volume, checking all-leads conversion rates and inspecting unattributed records.',
    ctaLabel: 'Request a walkthrough',
    roles: 'Marketing leads, commercial directors and business owners who want to judge campaigns by qualified opportunities and won work.',
    practicalExample: 'A commercial director imports the Sales outcomes JSON file and compares two campaigns by recorded wins and lead-to-win conversion rather than raw lead volume alone.',
    relatedIds: ['sales', 'communications'],
    outcomes: [
      ['Compare wins alongside lead volume', 'See leads, qualified leads, attended meetings, won deals and lead-to-win conversion for every campaign.'],
      ['Explicit Sales JSON export/import', 'Load the outcomes JSON exported from Sales & Intelligence directly in your browser with automatic duplicate prospect ID rejection.'],
      ['Unattributed records stay visible', 'Keep prospects without a recorded campaign visible in an Unattributed row so totals always reconcile.']
    ],
    featureGroups: [
      ['Campaign outcomes reporting', 'Compare campaigns across leads, qualified leads, attended meetings, wins and lead-to-win conversion (using all imported leads per campaign as the denominator).'],
      ['Sales JSON export/import workflow', 'Read the outcomes JSON exported from Sales & Intelligence locally in the browser and reject duplicate prospect IDs automatically.'],
      ['Unattributed record visibility', 'Display prospects with no source campaign in an explicit Unattributed bucket so no sales outcome is hidden.']
    ],
    included: [
      'Campaign reporting for leads, qualified leads, attended meetings, wins and lead-to-win conversion',
      'Browser import of the Sales & Intelligence outcomes JSON file with duplicate prospect ID checks',
      'Explicit Unattributed bucket keeping unattributed records visible'
    ],
    inDevelopment: [
      'Content planning, brand knowledge libraries, editorial calendars and multi-step content approvals.',
      'Live social publishing, social listening, video/avatar studios, newsletter sending and automatic website-to-Sales attribution.'
    ],
    extra: 'Current scope focuses on browser-based campaign outcome reporting via Sales JSON import; content planning, social publishing, avatars and automatic website attribution are in development.',
    use: 'Compare campaigns by recorded wins and lead-to-win conversion as well as lead volume, with Unattributed prospects clearly listed.'
  }
];

export const connectedJourneyBand = () => `<section class="ai-connect-band" id="connected-journey" aria-labelledby="connected-journey-heading"><div class="wrap"><div>${eyebrow('HOW THE PLATFORMS WORK TOGETHER')}<h2 id="connected-journey-heading">From first enquiry<br>to delivery.</h2><p>How an enquiry moves across the seven platforms. Operator reviews, structured JSON exports and browser imports keep your team in control at every handover.</p><p class="connect-honesty"><strong>Current workflow boundary:</strong> Platforms exchange handovers and campaign outcomes through operator review and explicit file exports/imports rather than unattended background synchronisation.</p></div><ol class="connected-steps-list"><li><span>01 · <a href="communications.html">Communications</a> <em>Team workspace / configured channel</em></span><strong>Captures an enquiry and assigns an owner.</strong><p>Inbound calls, chat or messages are recorded and linked to a case or callback with a named owner and due date.</p></li><li><span>02 · <a href="sales-intelligence.html">Sales &amp; Intelligence</a> <em>Operator qualification &amp; JSON export</em></span><strong>Qualifies the opportunity and tracks quote follow-up.</strong><p>Sales scores ICP fit separately from data confidence, tracks one active quote per prospect in the Action Queue and exports a structured handover JSON.</p></li><li><span>03 · <a href="crm.html">CRM</a> <em>Scoped Business CRM workspace</em></span><strong>Keeps account history, tasks and 30-day renewal flags visible.</strong><p>Business CRM tracks the account dossier, decision-makers and renewal review dates (separate from private Personal CRM records).</p></li><li><span>04 · <a href="ai-team.html">AI Team</a> <em>Browser preview &amp; downloaded instructions</em></span><strong>Previews the Sales handover and prepares the delivery brief.</strong><p>An operator previews the Sales handover in the browser, reviews the cited brief and downloads reviewed instructions for Automation.</p></li><li><span>05 · <a href="automation.html">Automation</a> <em>Operator-controlled pilot run</em></span><strong>Routes the reviewed handover to Business Delivery.</strong><p>The operator runs the handover route, reusing the handover reference on retry so repeat runs find the existing record without duplicating data.</p></li><li><span>06 · <a href="business-delivery.html">Business Delivery</a> <em>Pilot handover import &amp; confirmation</em></span><strong>Turns the won deal into one owned onboarding record.</strong><p>Delivery confirms the deal is won and scope is agreed, records the delivery owner and start date, and blocks duplicate imports.</p></li><li><span>07 · <a href="marketing-social-media.html">Marketing &amp; Social Media</a> <em>Browser JSON import</em></span><strong>Compares campaigns by recorded wins as well as lead volume.</strong><p>Marketing imports the Sales outcomes JSON in the browser to report leads, qualified leads, attended meetings, wins and unattributed records.</p></li></ol></div></section>`;

// Homepage components following the exact 5-step sequence in Section 2 of the brief
const homeTwoRoutes = () => `<section class="wrap section" id="two-routes" aria-labelledby="two-routes-heading"><div class="section-head"><div>${eyebrow('TWO WAYS TO WORK WITH US')}<h2 id="two-routes-heading">Choose where you want<br>to start.</h2></div><p>Whether you need to appoint and develop key people or bring clearer structure to customer enquiries, sales follow-up and delivery, you can start with one area and connect the others when ready.</p></div><div class="crm-split-grid"><article class="crm-workspace-card"><span class="platform-status-pill">Route 01 · Employers &amp; Candidates</span><h3>Recruitment &amp; Coaching</h3><p>For employers across electrical wholesale, technical distribution, construction and engineering who need to hire proven leaders or develop stronger commercial and branch habits.</p><ul class="workspace-feature-list"><li><strong>Specialist Headhunting:</strong> Discreet search for managing directors, branch managers, commercial leads and technical specialists.</li><li><strong>Coaching &amp; Development:</strong> Practical programmes built around quote follow-up, margin discipline and branch leadership.</li><li><strong>Talent &amp; Growth Partnerships:</strong> Combine hiring, coaching and agreed territory exclusivity where confirmed in writing.</li></ul><div class="actions" style="margin-top:20px">${button('Explore recruitment & coaching', 'talent.html')}${button('Coaching programmes', 'coaching.html', true)}</div><p style="margin-top:16px;font-size:13px"><a class="text-link" href="contact.html?path=candidate#candidate-path">Considering your next role? Email us confidentially ↗</a></p></article><article class="crm-workspace-card"><span class="platform-status-pill">Route 02 · Seven Connected Platforms</span><h3>AI &amp; Business Platforms</h3><p>For businesses looking to organise customer enquiries, qualify sales opportunities, coordinate won-deal onboarding and see which marketing campaigns turn into wins.</p><ul class="workspace-feature-list"><li><strong>Relationships &amp; Enquiries:</strong> CRM (Business &amp; Personal) and Communications shared inbox.</li><li><strong>Winning Work:</strong> Sales &amp; Intelligence action queue, quote follow-up and Marketing outcomes reporting.</li><li><strong>Preparation &amp; Delivery:</strong> AI Team delivery briefs, operator-controlled Automation and Business Delivery onboarding.</li></ul><div class="actions" style="margin-top:20px">${button('Explore the platforms', 'platforms.html')}${button('Interactive product demo', 'dashboard.html', true)}</div><p style="margin-top:16px;font-size:13px"><a class="text-link" href="${enquiry('AI services walkthrough')}">Request a platform walkthrough ↗</a></p></article></div></section>`;

const homeCustomerSituations = () => `<section class="wrap section" aria-labelledby="situations-heading"><div class="section-head"><div>${eyebrow('PROBLEMS WE HELP SOLVE')}<h2 id="situations-heading">Start from the situation<br>in front of you.</h2></div><p>Five direct routes to the right team or workflow, depending on what you need to solve first.</p></div><div class="feature-group-grid">${[
  ['“I need to hire”', 'Appoint a branch manager, commercial director or technical specialist through a focused, discreet search.', 'talent.html', 'Explore headhunting'],
  ['“I want to develop my team”', 'Strengthen prospecting, quote follow-up, margin discipline and branch leadership around the day job.', 'coaching.html', 'Explore coaching'],
  ['“I want help across several areas”', 'Bring recruitment, coaching and practical business platforms together under one agreed partnership scope.', 'partnerships.html', 'Explore partnerships'],
  ['“I want to improve a workflow”', 'See how our seven platforms handle customer enquiries, sales follow-up, onboarding handovers and campaign reporting.', 'platforms.html', 'Explore the platforms'],
  ['“I’m considering my next role”', 'Start a private conversation with our search team. We never approach an employer without your written permission.', 'contact.html?path=candidate#candidate-path', 'Email us confidentially']
].map(([quote, desc, href, ctaText], idx) => `<article class="feature-group-card"><span>ROUTE 0${idx + 1}</span><h3>${quote}</h3><p>${desc}</p><p style="margin-top:14px"><a class="text-link" href="${href}">${ctaText} ↗</a></p></article>`).join('')}</div></section>`;

const homeJoinedUpScenario = () => `<section class="partnership-section" aria-labelledby="scenario-heading"><div class="wrap partnership-grid"><div>${eyebrow('ILLUSTRATIVE SCENARIO · JOINED-UP WORK')}<h2 id="scenario-heading">Opening or strengthening<br>a regional branch.</h2><p>How an employer in technical distribution or contracting can combine recruitment, coaching and selected platforms around a single commercial goal.</p><p class="muted"><strong>Illustrative scenario:</strong> Shows how our services can connect in practice. Every engagement scope, platform selection and measure is agreed individually in writing.</p><div class="actions" style="margin-top:20px">${button('Explore partnerships', 'partnerships.html')}${button('Discuss your priorities', enquiry('Growth partnership'), true)}</div></div><div class="pathway"><div><span>01</span><h3>Appoint the branch leader</h3><p>Define the role brief, map relevant regional talent and discreetly appoint the branch or commercial manager.</p></div><div><span>02</span><h3>Build the commercial rhythm</h3><p>Coach the team on structured account discovery, quote follow-up timeliness and defending gross margin.</p></div><div><span>03</span><h3>Connect the workflow</h3><p>Use CRM, Communications, Sales &amp; Intelligence and Business Delivery so enquiries, quotes and won-deal handovers have a clear owner.</p></div></div></div></section>`;

const homeConcisePlatformPreview = () => `<section class="wrap section" aria-labelledby="platform-preview-heading"><div class="section-head"><div>${eyebrow('SEVEN AI &amp; BUSINESS PLATFORMS')}<h2 id="platform-preview-heading">Practical platforms.<br>Clear boundaries.</h2></div><div><p>Start with the platform you need most, then connect the others as your business grows. Inspect the full suite and connected seven-step workflow on the Platforms hub.</p><div class="actions" style="margin-top:16px">${button('Explore the platforms', 'platforms.html')}${button('Interactive product demo', 'dashboard.html', true)}</div></div></div><div class="related-grid">${aiGroups.map(g => `<a href="${g.id === 'sales' ? 'sales-intelligence' : g.id === 'delivery' ? 'business-delivery' : g.id === 'marketing' ? 'marketing-social-media' : g.id}.html"><span class="service-brand-icon small">${icon(g.id, g.title)}</span><div><strong>${g.title}</strong><small style="display:block;color:var(--muted);font-weight:400;margin-top:2px">${g.short}</small></div></a>`).join('')}</div></section>`;

const homeFinalAction = () => `<section class="wrap cta" aria-labelledby="home-cta-heading"><div>${eyebrow('NEXT STEP')}<h2 id="home-cta-heading">Ready to discuss<br>your priorities?</h2><p>Tell us whether you are hiring, developing a team or exploring one of our seven platforms — we will route your enquiry to the right person.</p><p style="margin-top:12px;font-size:14px"><a class="text-link" href="contact.html?path=candidate#candidate-path" style="color:#ffe000">Candidate looking for your next role? Email us confidentially ↗</a></p></div><div class="actions">${button('Discuss your priorities', enquiry('Growth partnership'))}${button('Explore recruitment & coaching', 'talent.html', true)}</div></section>`;

export const partnershipHome = `<section class="hero offer-hero"><video autoplay loop muted playsinline preload="metadata" class="hero-video-bg" aria-hidden="true"><source src="assets/videos/home-hero.mp4" type="video/mp4"></video><div class="video-overlay"></div><div class="wrap hero-grid"><div>${eyebrow('POWER-UP TALENT | RECRUITMENT, COACHING &amp; PLATFORMS')}<h1>Your business.<br><em>Connected.</em></h1><p class="hero-copy">Specialist recruitment and coaching to build stronger teams, alongside seven practical AI and business platforms for managing relationships, winning work and delivering it.</p><div class="actions">${button('Explore recruitment & coaching', '#two-routes')}${button('Explore the platforms', 'platforms.html', true)}</div><p class="hero-foot"><a href="contact.html" style="color:#ffe000;text-decoration:underline">Discuss your priorities ↗</a> · <a href="contact.html?path=candidate#candidate-path" style="color:#ffffff;text-decoration:underline">Confidential candidate route ↗</a></p></div><aside class="offer-compass" aria-label="How Power-Up Talent fits together"><span class="eyebrow">HOW OUR OFFERS FIT TOGETHER</span><div><span>01</span><strong>Recruitment &amp; Coaching</strong></div><p style="margin:0 0 10px;font-size:13px;opacity:.88">Hire leaders and specialists, then develop practical sales and branch habits.</p><div><span>02</span><strong>AI &amp; Business Platforms</strong></div><p style="margin:0;font-size:13px;opacity:.88">Seven platforms for enquiries, CRM, sales follow-up, delivery and campaign reporting.</p></aside></div></section><div class="sector-strip"><div class="wrap"><span>UK SECTOR FOCUS</span><strong>Electrical wholesale</strong><strong>Technical distribution</strong><strong>Construction</strong><strong>Engineering &amp; manufacturing</strong></div></div>${homeTwoRoutes()}${homeCustomerSituations()}${homeJoinedUpScenario()}${homeConcisePlatformPreview()}${homeFinalAction()}`;

export const aiServicesPage = `<section class="page-hero"><video autoplay loop muted playsinline preload="metadata" class="hero-video-bg" aria-hidden="true"><source src="assets/videos/ai-hero.mp4" type="video/mp4"></video><div class="video-overlay"></div><div class="wrap">${eyebrow('POWER-UP TALENT | AI &amp; BUSINESS PLATFORMS')}<h1>Seven platforms for managing relationships,<br><em>winning work and delivering it.</em></h1><p>Start with the area you need most, then connect the others as your business grows. Built capabilities, pilot workflows and required connections are stated clearly for each platform.</p><div class="actions">${button('Request a walkthrough', enquiry('AI services walkthrough'))}${button('Interactive product demo', 'dashboard.html', true)}</div></div></section><section class="ai-overview" aria-labelledby="ai-overview-heading"><div class="wrap"><div class="ai-centred"><h2 id="ai-overview-heading">Explore the seven platforms</h2></div></div></section>${connectedJourneyBand()}<section class="wrap section split"><div>${eyebrow('WALKTHROUGH &amp; PILOT SCOPE')}<h2>See how a platform fits<br>your workflow.</h2></div><div><p class="large-copy">We walk through what is ready to try today, which channels require a configured connection and how handovers work between teams.</p><p>You can also inspect our illustrative sample-data workspace in the interactive product demo before requesting a tailored walkthrough.</p><div class="actions">${button('Request a walkthrough', enquiry('AI services walkthrough'))}${button('Interactive product demo', 'dashboard.html', true)}</div></div></section>`;

const connectedLink = id => `<section class="wrap note-band offer-link-band"><div>${eyebrow('POWER-UP TALENT | AI &amp; BUSINESS PLATFORMS')}<h2>${id === 'coaching' ? 'Give new commercial habits a clear workspace.' : 'Support the new appointment with coaching and practical platforms.'}</h2><p>${id === 'coaching' ? 'Connect sales and branch coaching with CRM, Communications and Sales & Intelligence so teams can track follow-ups and quotes every day.' : 'Combine specialist headhunting with post-appointment coaching and our seven business platforms.'}</p></div><div class="actions">${button(id === 'talent' ? 'Explore coaching' : 'Explore the platforms', id === 'talent' ? 'coaching.html' : 'platforms.html', true)}</div></section>`;

export function refreshPage(id, html) {
  if (id === 'contact') return html
    .replace('A critical vacancy. A stronger team.<br>A long-term commercial partnership.', 'A critical hire. A stronger team.<br>Practical business platforms.')
    .replace('<option>Intelligence walkthrough</option>', '<option>AI services walkthrough</option><option>Platform pilot discussion</option>' + aiGroups.map(g => `<option>AI services: ${g.title}</option>`).join('') + '<option>Intelligence walkthrough</option>')
    .replace('autocomplete="organisation"', 'autocomplete="organization"');
  if (id === 'partnerships') html = html
    .replace('Bring hiring, team development and commercial intelligence into a plan that moves with your business.', 'Bring specialist recruitment, performance coaching and practical business platforms into a plan agreed around your business.')
    .replace('Relevant commercial intelligence', 'Selected AI & business platforms and pilot onboarding')
    .replace('Development and intelligence where agreed', 'Coaching and connected business platforms where agreed');
  if (id === 'talent') html = html.replace('SPECIALIST HEADHUNTING', 'ELITE RECRUITMENT & HEADHUNTING');
  if (id === 'about') html = html.replaceAll('coaching and commercial intelligence', 'coaching and AI & business platforms');
  if (['talent', 'coaching', 'partnerships'].includes(id)) {
    const marker = '<section class="cta wrap">';
    const index = html.lastIndexOf(marker);
    if (index >= 0) html = html.slice(0, index) + connectedLink(id) + html.slice(index);
  }
  return html;
}

export function refreshShared(html) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Power-Up Talent',
    url: 'https://power-up-talent.web.app',
    logo: 'https://power-up-talent.web.app/assets/logo-brand.png',
    description: 'Specialist recruitment and headhunting, commercial performance coaching, and seven AI & business platforms (CRM, Communications, Sales & Intelligence, Business Delivery, Automation, AI Team and Marketing & Social Media) for UK electrical wholesale, technical distribution, construction and engineering.',
    email: 'info@power-uptalent.co.uk',
    areaServed: { '@type': 'Country', name: 'United Kingdom' }
  };
  return html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(schema)}</script>`)
    .replace('styles.css?v=7.0', 'styles.css?v=8.0')
    .replace('<script src="app.js"', '<link rel="stylesheet" href="ai-services.css?v=8.0"><script src="app.js"')
    .replace('href="check.html">Claim territory', 'href="contact.html">Discuss your priorities')
    .replace('Specialist talent, performance coaching and AI intelligence', 'Specialist recruitment, coaching and seven AI & business platforms')
    .replace('Strict single-client territory exclusivity across the UK.', 'Recruitment, coaching and connected platforms configured around your UK business.')
    .replace('Human judgement. Better intelligence.', 'Great people. Stronger teams. Your business, connected.');
}
