import { productScreenshot } from './suite-screenshots.mjs';
import { ico, iconBadge } from './icons.mjs';

const arrow = '<span aria-hidden="true">↗</span>';
const eyebrow = text => `<p class="eyebrow"><span></span>${text}</p>`;
const button = (text, href = 'contact.html', secondary = false) => `<a class="button ${secondary ? 'secondary' : ''}" href="${href}">${text}${arrow}</a>`;
const enquiry = interest => `contact.html?interest=${encodeURIComponent(interest)}`;
const icon = (id, title) => `<img src="assets/services-v2/${id}.svg" alt="${title} icon" width="36" height="36" loading="lazy">`;

export const aiGroups = [
  {
    id: 'crm',
    title: 'CRM',
    displayTitle: 'CRM (Business & Personal)',
    bucket: 'manage-retain',
    bestFor: 'Branch Managers & Account Directors',
    outcomeLine: 'Keep team account history, follow-ups, and 30-day renewals visible while keeping personal networks private.',
    short: 'Know who needs your attention.',
    plainBenefit: 'Separate Business CRM and Personal CRM workspaces keep commercial account history, follow-ups and 30-day renewal checks visible for teams without exposing private contacts.',
    cardCopy: 'Keep company account history, follow-ups and 30-day renewal reviews visible for teams, while Personal CRM stays private.',
    actionSummary: 'Accept a reviewed Sales account into Business CRM, assign an account owner and flag a renewal within 30 days.',
    description: 'Business CRM gives teams one place for accounts, contacts, opportunities and next steps. Personal CRM gives individuals a separate private workspace for personal relationships.',
    benefit: 'Keep account history, follow-ups and 30-day renewals visible across your team, with a separate private workspace for personal relationships.',
    statusBadge: 'Available in a demo · Separate Business & Personal workspaces',
    whatYouCanTry: 'Available in a demo: walk through Business CRM (accounts, stage-gated pipeline, overdue tasks and 30-day renewal flags) and Personal CRM (private relationship circles, reconnect cadence and portable exports). Handover from Sales uses a structured export unless a working authenticated connection is verified.',
    ctaLabel: 'Discuss your CRM needs',
    problemsSolved: [
      'Customer history is scattered across personal inboxes, spreadsheets and notebooks.',
      'Follow-ups slip when no one clearly owns the next step.',
      'Team commercial records and private personal contacts end up mixed together.'
    ],
    whatWeOffer: [
      'Business CRM: shared company and contact records, named owners, decision-makers, pipeline stages, overdue tasks and 30-day renewal review flags.',
      'Personal CRM: a separate private workspace with independent sign-in and row-level isolation for personal relationships and reconnect reminders.',
      'Structured Sales export import, CSV preview, duplicate review and audited merges.'
    ],
    exampleToShow: 'An account owner opens a customer record, checks the latest notes and activity, sees a 30-day renewal flag and sets the next dated follow-up.',
    roles: 'Managing directors, sales leaders, branch managers, account teams and individual professionals who want clear account ownership without mixing commercial data and private contacts.',
    practicalExample: 'Business CRM: an account lead imports a reviewed Sales export via CSV/JSON preview, assigns ownership, and catches an electrical contractor renewing in 21 days with no review booked. Personal CRM: a director sets a quarterly reconnect reminder in their own private workspace with separate sign-in and records.',
    relatedIds: ['sales', 'communications'],
    outcomes: [
      ['Clear account ownership', 'See who owns each account, who the decision-makers are and what was last agreed.'],
      ['30-day renewal & follow-up flags', 'Accounts renewing within 30 days are flagged when there is no timely review booked, alongside overdue tasks.'],
      ['Separate Business & Personal access', 'Team commercial records and private personal relationships live in separate workspaces with independent sign-in and row-level isolation.']
    ],
    workspaces: [
      {
        name: 'Option 1 · Business CRM',
        badge: 'Available in a demo · Team workspace',
        summary: 'One shared commercial workspace for accounts, contacts, decision-makers, pipeline stages, follow-ups and renewal reviews.',
        items: [
          'Company and contact records, named owners, decision-makers and stakeholder roles.',
          'Account dossiers with relationship history, notes, calls and meeting records.',
          'Opportunity pipeline with board and list views, required fields by stage and weighted forecasts.',
          'Follow-up tasks with an owner and due date, plus overdue views.',
          'Renewal and booked review dates — accounts renewing within 30 days are flagged when there is no timely review.',
          'Structured Sales export import, CSV import preview, duplicate review, audited merges and scoped files.'
        ]
      },
      {
        name: 'Option 2 · Personal CRM',
        badge: 'Available in a demo · Private workspace',
        summary: 'A separate private workspace for individuals to maintain personal and professional relationships over time.',
        items: [
          'Personal and professional contacts, relationship circles, notes and remembered details.',
          'Contact methods, interaction history, important dates and birthdays.',
          'Reconnect reminders with configurable cadence, snooze, dismiss and off controls.',
          'Drafts and portable contact exports kept strictly separate from company accounts.'
        ]
      }
    ],
    boundaryNote: 'Separate access & manual transfer boundary: Business CRM and Personal CRM run as independent workspaces with separate authentication and row-level data isolation. Personal records are never shared with Business CRM, even when email addresses match, and data moves from Sales via structured export and CSV preview rather than unattended automatic sync.',
    included: [
      'Business CRM: accounts, contacts, decision-makers, owners, pipeline, tasks, overdue follow-ups and 30-day renewal flags',
      'Personal CRM: private relationships, reconnect reminders, important dates, notes and portable exports',
      'CSV import preview, duplicate review, audited merges and role-scoped access'
    ],
    inDevelopment: [
      'Planned: managed self-service email verification, password recovery and multi-factor authentication.',
      'Planned: verified automatic bi-directional sync across external CRM, mail and ERP providers.'
    ],
    extra: 'Business CRM and Personal CRM operate as separate workspaces with explicit CSV/JSON import boundaries.',
    use: 'An account owner spots an upcoming renewal flagged within 30 days without a booked review and schedules the review task.'
  },
  {
    id: 'communications',
    title: 'Communications',
    displayTitle: 'Shared Communications',
    bucket: 'manage-retain',
    bestFor: 'Trade Counters & Operations Teams',
    outcomeLine: 'Capture every call, enquiry, and callback in one shared workspace with a named human owner and due date.',
    short: 'Give every customer enquiry a next step.',
    plainBenefit: 'Capture inbound branch enquiries, assign a human owner and set a dated callback so overdue messages never disappear on a trade counter notepad.',
    cardCopy: 'Capture customer enquiries, assign a human owner and schedule dated callbacks in one shared inbox.',
    actionSummary: 'Open an unassigned enquiry, take human ownership and assign a dated callback.',
    description: 'Bring customer conversations into one team workspace so staff can see what needs attention, who owns it and what happens next.',
    benefit: 'Give calls, messages, enquiries and callbacks a clear human owner and due date in one shared team workspace.',
    statusBadge: 'Available in a demo · Live channels require configured connections',
    whatYouCanTry: 'Available in a demo: test the shared inbox, human takeover, cases, dated callbacks, approved company knowledge and Needs Attention view (fictional enquiry sandbox). Gmail, WhatsApp, Twilio telephony and Calendar booking are available only as connection options requiring configured tenant credentials.',
    ctaLabel: 'Discuss your enquiry handling',
    problemsSolved: [
      'Inbound calls, emails and messages sit in separate places with no single owner.',
      'Trade-counter callbacks and customer queries are missed when branches get busy.',
      'Teams lack a consistent set of approved answers and escalation steps.'
    ],
    whatWeOffer: [
      'Shared team inbox with named ownership, priority, internal notes, cases, dated callbacks and Needs Attention tracking.',
      'Immediate human handover controls and an approved FAQ and policy library.',
      'AI reception, web chat, email, WhatsApp and calendar booking (available once the required external provider connection is configured for your tenant).'
    ],
    exampleToShow: 'A new inbound enquiry enters Needs Attention, is claimed by a named team member and becomes an owned callback with a due date and time.',
    roles: 'Branch teams, trade counter reception staff, customer service leads and operations managers handling inbound calls and enquiries.',
    practicalExample: 'Fictional sandbox example: urgent enquiry ENQ-402 ("Need 3-phase distribution board stock check for Monday") lands unassigned in Needs Attention, is claimed by Sarah Jenkins, and gets a 14:00 dated callback using approved stock notes.',
    relatedIds: ['crm', 'sales'],
    outcomes: [
      ['Every enquiry has a human owner', 'Calls, web chat and messages are captured and assigned to a named staff member with priority and due dates.'],
      ['Needs Attention & dated callbacks', 'Overdue cases, pending callbacks and unassigned conversations surface in one view, excluding sandbox tests from live counts.'],
      ['Human takeover & approved FAQs', 'Staff can take over any conversation immediately and reply using reviewed opening hours, FAQs and escalation guidance.']
    ],
    featureGroups: [
      ['Shared inbox & human takeover', 'Conversation history, named ownership, priority, status, internal notes and immediate human takeover.'],
      ['Cases, callbacks & Needs Attention', 'Assign work, set dated callbacks, record resolution and surface overdue items (excluding sandbox test conversations).'],
      ['Company knowledge & reporting', 'Approved FAQs, opening hours, policies and escalation rules, plus operational metrics on overdue work.'],
      ['Live channel connections (configured per tenant)', 'Google/Microsoft email sync, WhatsApp Cloud API, telephony/Twilio voice handling and calendar booking require an explicitly configured provider connection.']
    ],
    included: [
      'Shared inbox with human ownership, priority, internal notes and takeover controls',
      'Cases, dated callbacks and Needs Attention queue (sandbox tests excluded)',
      'Approved FAQ library and operational response reporting'
    ],
    inDevelopment: [
      'Configured connection required: live telephony/SIP/Twilio voice, Meta WhatsApp Cloud API, Gmail/Outlook sync and calendar booking.',
      'Planned: attachment object storage and automated closed-window WhatsApp template management.'
    ],
    extra: 'The team workspace and sandbox workflow can be demonstrated now; live external messaging channels require configured tenant credentials.',
    use: 'A fictional branch stock enquiry lands in Needs Attention and receives a named owner and 14:00 callback.'
  },
  {
    id: 'sales',
    title: 'Sales & Intelligence',
    displayTitle: 'Sales & Intelligence',
    bucket: 'find-win',
    bestFor: 'Commercial & Sales Directors',
    outcomeLine: 'Spot UK projects early, track competitor moves, and turn quote pipelines into owned daily actions.',
    short: 'See which opportunities deserve your next move.',
    plainBenefit: 'Combine local public-data Market Intelligence, human-reviewed Prospect Intelligence, explainable fit scoring and disciplined quote follow-up.',
    cardCopy: 'Spot UK projects early, review dated prospect evidence and turn quote pipelines into owned daily actions.',
    actionSummary: 'Review dated branch-expansion evidence, accept and assign an owner, and follow up an overdue quote.',
    description: 'Workspace for market research, prospect qualification, pipeline management and disciplined sales follow-up.',
    benefit: 'Turn public local data and sourced company evidence into human-reviewed recommendations, owned Action Queue tasks and clean Delivery handovers.',
    statusBadge: 'Working pilot · Tested feature-branch functionality',
    whatYouCanTry: 'Working pilot (tested feature-branch functionality): search UK Planning Data (England participating authorities) and Find a Tender (up to 300 UK notices by delivery region) with no paid APIs or AI credits, import a mapped CSV, review dated prospect evidence separately from contactability, assign follow-ups to the Sales Action Queue, and export structured Sales handovers and Marketing outcomes.',
    ctaLabel: 'Discuss your sales workflow',
    problemsSolved: [
      'Sales teams waste time researching prospects without knowing which opportunities genuinely fit.',
      'Good leads and quotes go cold when follow-up actions are not clearly owned.',
      'Source tracking breaks down between initial outreach, quotes and won work.'
    ],
    whatWeOffer: [
      'Market Intelligence: search public UK Planning Data and Find a Tender notices by location.',
      'Prospect Intelligence: score dated company evidence with explainable fit scoring, human review gates and reviewed outreach drafts.',
      'Sales Action Queue: prioritise owned follow-ups, track one active quote per prospect and hand over won deals cleanly.'
    ],
    exampleToShow: 'A salesperson checks explainable fit evidence on a target account, assigns the next action in the Action Queue and records the quote outcome.',
    roles: 'Commercial directors, business development managers, regional branch managers and external technical sales teams.',
    practicalExample: 'Branch manager example (Leeds & electrical distributor): first check Planning Data and Find a Tender within 25 miles of Leeds (30/90 days, keyword "construction"). Then import "Fixture Electrical Distribution,Electrical wholesaler,Leeds,Labelled fixture", review its dated branch-expansion Source fact and Sales interpretation, select "Accept and assign" to add an owned follow-up task in the Sales Action Queue, and track the resulting quote through to handover.',
    relatedIds: ['crm', 'delivery'],
    outcomes: [
      ['Market intelligence from free public UK sources', 'Search UK towns/cities or full NI postcodes across Planning Data (England participating authorities) and Find a Tender (up to 300 UK notices by delivery region) without paid API keys or AI credits.'],
      ['Prospect intelligence with explicit human review', 'Turn dated vacancies, branch expansions and company announcements into a Source fact, Sales interpretation and Next step — keeping fit, evidence strength and contactability separate.'],
      ['Action Queue, quote tracking & structured exports', 'Prioritise overdue quotes (one tracked quote per prospect), keep outreach drafts under human approval, and export structured JSON for Delivery and Marketing.']
    ],
    featureGroups: [
      ['Market Intelligence: local UK activity', 'Enter a UK town/city or full Northern Ireland postcode, pick a 30- or 90-day lookback and radius (5–100 miles), plus an optional title keyword such as "construction" or "refurbishment". Queries Planning Data (England participating authorities; capped at 100 applications, top 10 shown) and Find a Tender (scans up to 300 notices by wider delivery region with partial-coverage notices), linking directly to original public records and surfacing honest outage messages with zero AI credits.'],
      ['Prospect Intelligence: CSV, filters & dated evidence', 'Import mapped CSVs (company,sector,location,source) and filter by sector, account owner, signal type (Vacancy, Expansion, Company announcement), evidence freshness (current/stale) and status (pending, accepted, research, rejected, revoked). Stores dated source links, Source fact, Sales interpretation and Suggested next step while scoring customer fit, evidence strength and contactability independently.'],
      ['Human decision & Action Queue assignment', 'Reviewers choose Accept and assign (owner + due date straight into the Sales Action Queue), Further research, Reject, or Revoke with reason. Stale evidence is blocked from acceptance until refreshed. Accepted prospects move cleanly into owned Action Queue tasks and CRM handover prep.'],
      ['Sales workflow, quotes & structured JSON exports', 'Configurable 60/40 ICP fit scoring with hard exclusions, human-executed approved task sequences, one active tracked quote per prospect surfaced when overdue, and manual JSON exports for Business Delivery and Marketing outcomes. Automated enrichment, continuous scraping and live email sending remain Planned.']
    ],
    marketIntelligence: {
      heading: 'Market Intelligence: public UK data',
      exampleTitle: 'Example · Leeds wholesale branch search',
      exampleBody: 'A Leeds branch manager enters "Leeds", selects a 25-mile radius, 90-day lookback and optional keyword "construction" to spot nearby commercial developments on Planning Data and regional infrastructure tenders on Find a Tender, clicking straight through to the original government records before deciding which contractors to target.',
      bullets: [
        'Search any UK town/city or full Northern Ireland postcode with 5, 10, 25, 50 or 100-mile radius and 30/90-day lookback.',
        'Planning Data (planning.data.gov.uk): covers participating local authorities in England (coverage varies by area; capped at first 100 matching records, displaying top 10).',
        'Find a Tender (find-tender.service.gov.uk): scans up to 300 recent UK procurement notices matched by declared delivery region (wider area than radius; clearly flags partial results).',
        'Displays direct links to source records and clear temporary outage messages.'
      ]
    },
    prospectIntelligence: {
      heading: 'Prospect Intelligence: sourced evidence reviewed by a person',
      exampleTitle: 'Example · Electrical distributor branch opening',
      exampleBody: 'An imported target ("Fixture Electrical Distribution · Leeds · Branch opening") arrives with dated Source fact, Sales interpretation ("likely demand for trade-counter fit-out and initial switchgear stock") and Suggested next step. The commercial lead sees High Fit even if phone details are still missing, selects Accept and assign, sets owner + due date, and creates an Action Queue task ready for CRM handover.',
      bullets: [
        'Import mapped CSV columns: company, sector, location, source.',
        'Filter pipeline by sector, account owner, signal type (Vacancy, Expansion, Company announcement), freshness (current/stale) and review status.',
        'Independent assessment: Customer fit, Evidence strength and Contactability are scored separately — missing phone/email lowers contactability without hiding genuine fit.',
        'Human review gate: Accept and assign (to Sales Action Queue), Further research, Reject, or Revoke later with a reason. Stale evidence cannot be accepted.'
      ]
    },
    included: [
      'Market Intelligence: UK Planning Data & Find a Tender lookup with direct official source links',
      'Prospect Intelligence: dated Source fact -> Interpretation -> Next step with accept/research/reject/revoke',
      'Sales Action Queue, owned task sequences and one-quote-per-prospect follow-up tracking',
      'Structured handovers for Business Delivery onboarding and Marketing attribution'
    ],
    inDevelopment: [
      'Planned: automated contact enrichment, scheduled background web monitoring/scraping and company registry webhooks.',
      'Planned: live connected-mailbox outreach sending (live sending is intentionally disabled in the current release).'
    ],
    extra: 'Market & Prospect Intelligence run as a tested feature-branch pilot alongside core Action Queue and quote-tracking workflows; live email sending and auto-enrichment are not active.',
    use: 'Search Leeds projects in Market Intelligence, review a branch-expansion signal in Prospect Intelligence and assign its Action Queue follow-up.'
  },
  {
    id: 'delivery',
    title: 'Business Delivery',
    displayTitle: 'Business Delivery',
    bucket: 'deliver-scale',
    bestFor: 'Operations & Delivery Leads',
    outcomeLine: 'Turn won deals into clean customer onboarding records with agreed scope, start dates, and zero duplicate admin.',
    short: 'Start delivery with a clear brief.',
    plainBenefit: 'Turn a won deal into one clean customer onboarding record with agreed scope, named delivery owner, start date and zero duplicate admin.',
    cardCopy: 'Turn won deals into clean customer onboarding records with agreed scope, start dates and zero duplicate admin.',
    actionSummary: 'Confirm a won deal from a reviewed Sales handover and lock in the delivery owner, scope and start date.',
    description: 'Give operations the brief they need once a customer agrees to proceed, confirming ownership, scope and start date without duplicate records.',
    benefit: 'Turn a won deal into one clean onboarding record with duplicate protection.',
    statusBadge: 'Working pilot · Local single-operator onboarding',
    whatYouCanTry: 'Working pilot (local, single-operator onboarding pilot): take a reviewed Sales export, confirm the opportunity was won, record the agreed scope, delivery owner and start date, and save an onboarding record with duplicate protection.',
    ctaLabel: 'Discuss your onboarding process',
    problemsSolved: [
      'Won work stalls when sales agreements are handed over informally or with missing details.',
      'Delivery teams chase scope, start dates and account context after the deal is signed.',
      'Repeat imports or manual re-entry create duplicate onboarding records.'
    ],
    whatWeOffer: [
      'Structured won-deal handover pilot capturing won confirmation, agreed scope, named delivery owner and start date.',
      'Duplicate prevention by handover reference on repeat imports.',
      'Broader document checklists, scheduling, service requests and invoicing workflows are available as options to scope (Planned).'
    ],
    exampleToShow: 'An approved Sales handover is confirmed as won and becomes one owned onboarding record with agreed scope, delivery owner and start date.',
    roles: 'Operations directors, delivery managers, branch managers and onboarding coordinators taking over won accounts.',
    practicalExample: 'Operations imports reviewed handover Ref HO-2026-041 from Sales, verifies the signed agreement, assigns Tom Vance as delivery owner starting 18 November, and confirms repeat imports keep the single record intact.',
    relatedIds: ['sales', 'automation'],
    outcomes: [
      ['Reviewed Sales export -> won confirmation', 'Import the reviewed Sales handover and confirm won status before an onboarding record can be created.'],
      ['Agreed scope, delivery owner & start date', 'Store who leads delivery, what was agreed commercially and when onboarding starts in one structured list.'],
      ['Repeat-import duplicate protection', 'Recognise existing handover references automatically on retry so repeat submissions never duplicate work.']
    ],
    featureGroups: [
      ['Reviewed Sales export import (pilot)', 'Reads the reviewed won-deal handover JSON exported by Sales or passed from Automation.'],
      ['Won & agreed-scope gate', 'Confirms won deal status and agreed scope before opening onboarding for the branch or account.'],
      ['Owner, scope & start date record', 'Captures the named delivery owner, concise scope summary and target start date in a local single-operator view.'],
      ['Idempotent repeat-import check', 'Matches on handover reference if the same deal is sent twice, preserving the original onboarding record.']
    ],
    included: [
      'Structured customer onboarding workspace accepting reviewed Sales handovers',
      'Mandatory won confirmation, agreed scope, named delivery owner and start date',
      'Duplicate prevention on repeat handovers by handover reference'
    ],
    inDevelopment: [
      'Planned: multi-user project delivery boards, customer-facing portals and document upload checklists.',
      'Planned: invoicing/billing connectors (e.g. Lago), automated welcome sequences (e.g. Dittofeed) and workforce administration.'
    ],
    extra: 'Explicitly positioned as a local, single-operator onboarding pilot; wider post-sale delivery modules and customer portals are Planned.',
    use: 'Confirm a reviewed Sales export as won and create one owned onboarding record with scope, owner and start date.'
  },
  {
    id: 'automation',
    title: 'Automation',
    displayTitle: 'Verified Handovers (Automation)',
    bucket: 'deliver-scale',
    bestFor: 'Multi-Branch Operators',
    outcomeLine: 'Bridge sales to delivery with automated, auditable handover receipts so nothing slips through the cracks.',
    short: 'Make repeatable work easier to run and review.',
    plainBenefit: 'Bridge sales to delivery with automated, auditable handover receipts so nothing slips through the cracks.',
    cardCopy: 'Bridge sales to delivery with automated, auditable handover receipts so nothing slips through the cracks.',
    actionSummary: 'Verify a sales-to-delivery handover and inspect whether the receipt is created, already_exists, or unconfirmed.',
    description: 'Auditable handover routing between Sales, AI Team and Delivery so approved steps leave a verifiable receipt.',
    benefit: 'Give operators a repeatable, auditable bridge from reviewed Sales handovers into Delivery with clear status receipts.',
    statusBadge: 'Working pilot · Local operator tool (handover.js)',
    whatYouCanTry: 'Working pilot: run the reviewed Sales-to-Delivery handover using the existing local operator tool (handover.js) and inspect a receipt distinguishing created, already_exists and unconfirmed outcomes. A visual workflow builder and broad automation integrations remain Planned.',
    ctaLabel: 'Discuss a process to automate',
    problemsSolved: [
      'Teams repeat manual copy-and-paste handovers between sales records and delivery onboarding.',
      'Silent background failures leave staff unsure whether a handover succeeded or stalled.',
      'Retries risk creating duplicate customer records or leaking sensitive payloads into logs.'
    ],
    whatWeOffer: [
      'Repeatable Sales-to-Delivery handovers with idempotent reference checks so nothing slips through the cracks.',
      'Explicit run receipts distinguishing created, already_exists, rejected and unconfirmed outcomes.',
      'Auditable handover logs; visual workflow builders and external ERP/webhook connectors are configured per client.'
    ],
    exampleToShow: 'A reviewed deal moves from Sales to Delivery with an auditable receipt showing created, already_exists, rejected or unconfirmed.',
    roles: 'Operations leads, commercial coordinators and multi-branch operators managing handovers between Sales and Delivery.',
    practicalExample: 'A regional branch deal moves from Sales to Business Delivery. Delivery records the onboarding item and returns a "created" receipt; retrying the same handover reference returns "already_exists" without creating a duplicate.',
    relatedIds: ['ai-team', 'delivery'],
    outcomes: [
      ['Auditable handover bridge', 'Routes reviewed Sales handovers and approved AI Team instructions directly into Business Delivery.'],
      ['Clear receipts: created, already_exists, unconfirmed', 'Run history explicitly separates confirmed outcomes (created or already_exists) from rejected or unconfirmed states requiring reconciliation.'],
      ['Clean audit logging', 'Logs timestamps, handover references and receipt codes cleanly for operational oversight.']
    ],
    featureGroups: [
      ['Verified handover routing', 'Takes a reviewed Sales handover and optional AI Team brief instructions and submits them to Business Delivery under human control.'],
      ['Honest receipt classification', 'Clearly distinguishes created, already_exists, rejected and unconfirmed outcomes so ambiguous runs are never silently treated as successful.'],
      ['Idempotent retry behaviour', 'Reuses the handover reference on re-runs so teams can safely recover from interruptions without duplicate onboarding records.'],
      ['Visual builder & integrations (Optional)', 'Custom multi-step workflow builders and third-party ERP, accounting or webhook connectors are scoped per client.']
    ],
    included: [
      'Verified Sales-to-Delivery handover routing with auditable receipts',
      'Explicit receipt statuses distinguishing created, already_exists, rejected and unconfirmed',
      'Idempotent handover reference handling and clean run logs'
    ],
    inDevelopment: [
      'Optional: custom multi-step workflow rules and timed operational triggers.',
      'Optional: verified connectors for external ERP, accounting, Slack/Teams or marketing webhooks.'
    ],
    extra: 'Verified Sales-to-Delivery handovers with auditable receipts and duplicate protection; external ERP connectors are scoped per client.',
    use: 'Confirm a handover once to see a "created" receipt, then retry safely to confirm "already_exists".'
  },
  {
    id: 'ai-team',
    title: 'AI Team & Power Command Centre',
    displayTitle: 'Human-Approved AI Team',
    bucket: 'deliver-scale',
    bestFor: 'Leadership Teams',
    outcomeLine: 'Turn approved company documents into fast, verifiable commercial briefs with final sign-off always in human hands.',
    short: 'Give your team more capacity for research and preparation.',
    plainBenefit: 'Turn approved company documents into fast, verifiable commercial briefs with quoted citations and final sign-off always in human hands.',
    cardCopy: 'Turn approved company documents into fast, verifiable commercial briefs with final sign-off always in human hands.',
    actionSummary: 'Review an account-review brief against its quoted sources, request a revision and record human sign-off.',
    description: 'AI Team & Power Command Centre lets your people assign scoped research against approved documents, review every revision and decide what gets accepted.',
    benefit: 'Draft verifiable commercial briefs strictly from approved source files, keeping revisions and final sign-off in human hands.',
    statusBadge: 'Working pilot · Local development milestone',
    whatYouCanTry: 'Working pilot (local development milestone): give the Chief of Staff a defined assignment with approved source material, prepare an extractive brief (pulling relevant information from the approved material), review it, request revisions and record a human acceptance decision. Live generative research, autonomous computer operation and unattended execution remain Planned.',
    ctaLabel: 'Discuss an AI Team pilot',
    problemsSolved: [
      'Managers spend hours pulling together briefs from scattered account notes, call logs and documents.',
      'Unconstrained AI tools guess facts that are not grounded in approved company material.',
      'Teams need clear revision control and human sign-off before any brief or outreach moves forward.'
    ],
    whatWeOffer: [
      'Assign scoped research to the AI Team using approved source material only, returning source-cited commercial findings.',
      'Request targeted revisions and record explicit human sign-off before passing Delivery instructions forward.',
      'Dedicated recruitment hiring-signal and outreach approval workflow under human control.'
    ],
    exampleToShow: 'A manager reviews an account brief, opens the quoted source evidence, requests a revision tightening margin context and records acceptance.',
    roles: 'Commercial managers, branch directors, account leads and operations managers preparing account reviews and handover briefs.',
    practicalExample: 'Manager account-review briefing: ahead of a quarterly trade review, a branch manager uploads approved account notes, recent quote history and order summaries. The AI Team prepares a source-cited brief citing the exact supplied passages; the manager requests one revision tightening margin context, reviews the update, and records final sign-off.',
    relatedIds: ['automation', 'sales'],
    outcomes: [
      ['Source-cited briefs from approved documents', 'Every brief pulls directly from the approved material you supply with traceable citations — it never guesses unverified facts.'],
      ['Revision rounds before human sign-off', 'Managers inspect cited passages, request targeted revisions and keep full version history before clicking accept.'],
      ['Delivery brief preparation', 'Turn reviewed handover context into structured instructions ready for Verified Handovers and Business Delivery.']
    ],
    featureGroups: [
      ['Scoped assignment & approved sources', 'Assign a clear brief objective paired strictly with approved internal notes, account history or policy files.'],
      ['Source-cited verification', 'Every point in the draft points back to an approved source passage you supplied — avoiding speculation and making factual checks fast.'],
      ['Revisions & explicit human sign-off', 'Request changes round by round, compare versions and confirm human sign-off before any brief leaves the workspace.'],
      ['Delivery brief preparation', 'Prepare reviewed delivery-brief instructions ready for Verified Handovers into Business Delivery.']
    ],
    included: [
      'Scoped AI Team assignment flow anchored strictly to approved source documents',
      'Source-cited commercial briefs with revision requests and human sign-off history',
      'Delivery brief preparation compatible with Verified Handovers'
    ],
    inDevelopment: [
      'Optional: multi-provider routing and deeper ERP integrations configured per client.',
      'Final sign-off always remains in human hands before any external action is taken.'
    ],
    extra: 'Turns approved company documents into verifiable commercial briefs under explicit human revision and final sign-off.',
    use: 'Upload approved account notes, review the cited extractive brief, ask for a revision and record human acceptance.'
  },
  {
    id: 'marketing',
    title: 'Marketing & Social Media',
    displayTitle: 'Marketing Attribution',
    bucket: 'find-win',
    bestFor: 'MDs & Marketing Leads',
    outcomeLine: 'Connect every campaign directly to qualified meetings and won margin—eliminating wasted spend.',
    short: 'See what your marketing turns into.',
    plainBenefit: 'Connect every campaign directly to qualified leads, attended meetings and won margin while keeping unattributed enquiries visible.',
    cardCopy: 'Connect every campaign directly to qualified meetings and won margin—eliminating wasted spend.',
    actionSummary: 'Compare campaign conversion rates from leads to won margin and keep unattributed enquiries visible.',
    description: 'Connect campaign effort to commercial outcomes so teams judge marketing by qualified meetings and won margin rather than clicks alone.',
    benefit: 'Match each source campaign to real Sales progression (qualified, attended, won) in a clean report that surfaces unattributed accounts.',
    statusBadge: 'Available in a demo · Manual Sales export & Marketing upload',
    whatYouCanTry: 'Available in a demo: upload a manual Sales outcomes export and compare which sources generated qualified prospects, attended meetings and wins, showing unattributed outcomes and preventing duplicate prospect IDs from inflating the report. Ad spend imports, live provider data and social publishing remain Planned.',
    ctaLabel: 'Discuss your marketing workflow',
    problemsSolved: [
      'Marketing activity is judged on clicks or impressions rather than qualified leads, meetings and wins.',
      'Unattributed enquiries distort campaign ROI when source records are not reconciled.',
      'Teams lack a single view connecting campaign effort to real Sales progression.'
    ],
    whatWeOffer: [
      'Content, campaigns and outcomes hub: documented pilot reports qualified leads, attended meetings and wins from imported Sales campaign data, keeping Unattributed leads visible.',
      'Automatic rejection of duplicate prospect IDs during manual JSON import.',
      'Content repurposing, AI avatars, approval workflows, scheduling and social monitoring are Planned.'
    ],
    exampleToShow: 'A marketer imports the Sales campaign outcomes export, compares qualified leads and wins by campaign and spots leads with no recorded attribution.',
    roles: 'Marketing leads, commercial directors and managing directors wanting to see which campaigns produce real quotes and orders.',
    practicalExample: 'At month-end, marketing exports the Sales outcomes JSON from Sales & Intelligence and loads it in the Marketing browser view. The team compares two regional wholesale campaigns by won orders, spots 4 Unattributed deals needing source tagging, and sees an accidental duplicate prospect ID safely rejected.',
    relatedIds: ['sales', 'communications'],
    outcomes: [
      ['Manual Sales JSON export -> browser upload', 'Load the Sales outcomes JSON locally in your browser without exposing customer data to unverified external ad trackers.'],
      ['Qualified, attended meetings, wins + Unattributed', 'Measure progression across every stage using all imported leads per campaign as the honest conversion denominator, keeping Unattributed rows visible.'],
      ['Duplicate prospect ID rejection', 'Automatically reject imports containing duplicate prospect IDs so campaign conversion rates are never double-counted.']
    ],
    featureGroups: [
      ['Campaign progression funnel', 'Compares total imported leads, qualified leads, attended meetings and won deals side by side for each source campaign.'],
      ['Explicit manual transfer boundary', 'Data enters via manual Sales JSON export and browser upload rather than unverified live ad-platform webhooks.'],
      ['Unattributed row visibility', 'Prospects missing a campaign source remain visible in an explicit Unattributed row so commercial totals always reconcile.'],
      ['Ad spend, analytics & publishing (Planned)', 'Automated ad spend pulls, external web analytics connectors and live social media scheduling/publishing remain unverified and Planned.']
    ],
    included: [
      'Available in a demo: browser import/upload of manual Sales outcomes JSON',
      'Comparison of qualified leads, attended meetings, won deals and Unattributed records',
      'Automatic rejection of duplicate prospect IDs during import'
    ],
    inDevelopment: [
      'Planned (unverified): live ad spend API pulls, Google/Meta analytics syncing and automated website-to-Sales attribution.',
      'Planned: editorial content calendars, live social media publishing and social inbox engagement.'
    ],
    extra: 'Verified capability is browser-based Campaign Outcomes reporting from a manual Sales JSON export; ad spend, provider analytics and social publishing remain unverified.',
    use: 'Import the Sales outcomes JSON in the browser to compare won deals per campaign and inspect Unattributed records.'
  }
];

export const connectedJourneyBand = () => `<section class="ai-connect-band" id="connected-journey" aria-labelledby="connected-journey-heading"><div class="wrap"><div>${eyebrow('FROM OPPORTUNITY TO DELIVERY · END-TO-END ROUTE')}<h2 id="connected-journey-heading">From opportunity<br>to delivery.</h2><p>Walk through how a fictional UK electrical distributor (<strong>Midlands &amp; Leeds Electrical Wholesale</strong>) moves an opportunity from first local signal to onboarding and marketing outcome review.</p><p class="connect-honesty"><strong>Transfer accuracy:</strong> Every handoff below is labelled with its actual mechanism — public lookup, human review, manual export/upload, operator step or verified integration — rather than claiming silent automatic syncing.</p></div><ol class="connected-steps-list"><li><div class="step-icon-wrap">${iconBadge('globe', 'glass')}</div><span>01 · <a href="sales-intelligence.html#market-intelligence">Market Intelligence</a> <em>Public data lookup (no paid API or AI credits)</em></span><strong>Research an area and inspect a public notice.</strong><p>A branch manager searches Leeds (25-mile radius, 90-day lookback, keyword “construction”) across England Planning Data and Find a Tender notices, opening original government records.</p></li><li><div class="step-icon-wrap">${iconBadge('radar', 'glass')}</div><span>02 · <a href="sales-intelligence.html#prospect-intelligence">Prospect Intelligence</a> <em>Mapped CSV upload + Human review</em></span><strong>Import a target company and add a dated source.</strong><p>The distributor imports <code>company,sector,location,source</code>, reviews dated expansion evidence (Source fact → Interpretation → Next step), and evaluates fit, evidence and contactability on their own merits.</p></li><li><div class="step-icon-wrap">${iconBadge('list', 'glass')}</div><span>03 · <a href="sales-intelligence.html">Sales Action Queue</a> <em>In-app review &amp; assignment</em></span><strong>Review the recommendation and assign a follow-up.</strong><p>An accepted recommendation is assigned to a workspace member with a due date in the Sales Action Queue, alongside pipeline notes and overdue quote follow-up.</p></li><li><div class="step-icon-wrap">${iconBadge('database', 'glass')}</div><span>04 · <a href="crm.html">Business &amp; Personal CRM</a> &amp; <a href="communications.html">Communications</a> <em>Structured Sales export → CRM / Team inbox</em></span><strong>Log a callback or meeting and manage account ownership.</strong><p>Inbound trade enquiries receive a named human owner and dated callback in Communications, while Business CRM tracks account ownership and Personal CRM keeps private reminders separate.</p></li><li><div class="step-icon-wrap">${iconBadge('cog', 'glass')}</div><span>05 · <a href="automation.html">Automation</a> &amp; <a href="business-delivery.html">Business Delivery</a> <em>Structured export + Operator step (<code>handover.js</code>)</em></span><strong>Export the qualified opportunity and pass won work to Delivery.</strong><p>After a win is confirmed, an operator runs <code>handover.js</code> (returning <code>created</code>, <code>already_exists</code> or <code>unconfirmed</code>) so Business Delivery saves one onboarding record with agreed scope, owner and start date.</p></li><li><div class="step-icon-wrap">${iconBadge('chart', 'glass')}</div><span>06 · <a href="marketing-social-media.html">Marketing &amp; Social Media</a> <em>Manual Sales export → Browser upload</em></span><strong>Upload Sales outcomes to see which source contributed to the win.</strong><p>Marketing uploads the Sales outcomes export to compare qualified prospects, attended meetings, wins and <code>Unattributed</code> rows without duplicate prospect IDs.</p></li><li><div class="step-icon-wrap">${iconBadge('sparkle', 'glass')}</div><span>07 · <a href="ai-team.html">AI Team</a> <em>Human revision &amp; acceptance</em></span><strong>Prepare an internal briefing from approved material.</strong><p>Using only approved company documents, the Chief of Staff prepares an extractive brief; a manager reviews the cited passages, requests revisions and records human acceptance.</p></li></ol></div></section>`;

const homeDistributorExample = () => `<section class="wrap section editorial-centrepiece" aria-labelledby="centrepiece-heading"><div class="centrepiece-header"><div>${eyebrow('WORKED EXAMPLE · FICTIONAL UK ELECTRICAL DISTRIBUTOR')}<h2 id="centrepiece-heading">How an electrical distributor<br><em>uses the suite in one week.</em></h2><p>Follow <strong>Midlands &amp; Leeds Electrical Wholesale</strong> (illustrative example with synthetic data) from spotting a regional branch opportunity to chasing the quote, onboarding the customer and checking which source produced the win.</p></div></div><div class="moment-grid"><article class="moment-card">${iconBadge('radar', 'gold')}<div class="moment-top"><span class="moment-step">01 · FIND &amp; QUALIFY OPPORTUNITIES</span><span class="moment-pill status-review">Market &amp; Prospect Intelligence</span></div><h3>Spot a Leeds expansion and review dated evidence.</h3><p>The branch manager searches Planning Data &amp; Find a Tender within 25 miles of Leeds (no paid APIs or AI credits), then reviews dated branch-opening evidence for a target contractor before assigning it to the Action Queue.</p><div class="ui-mini-preview" aria-label="Illustrative Market and Prospect Intelligence preview"><div class="ui-mini-row"><span>Market lookup: Leeds · 25 miles · “construction”</span><strong>Public links verified</strong></div><div class="ui-mini-row highlight"><span>Signal reviewed: Branch opening · Accept &amp; assign</span><strong>Owner: J. Morton</strong></div></div><div class="moment-links"><a class="text-link" href="sales-intelligence.html">Explore Sales &amp; Intelligence ↗</a><a class="moment-demo-link" href="dashboard.html?service=sales">Open Sales demo ↗</a></div></article><article class="moment-card">${iconBadge('list', 'gold')}<div class="moment-top"><span class="moment-step">02 · ORGANISE FOLLOW-UP &amp; ENQUIRIES</span><span class="moment-pill status-active">Action Queue · Comms · CRM</span></div><h3>Give every quote, callback and account a named owner.</h3><p>Overdue quotes stay at the top of the Sales Action Queue, an inbound trade-counter enquiry receives a dated callback in Communications, and Business CRM keeps account ownership visible if staff are away.</p><div class="ui-mini-preview" aria-label="Illustrative follow-up and enquiry preview"><div class="ui-mini-row"><span>Quote #Q-104 · Midlands Switchgear</span><strong>Status: Won</strong></div><div class="ui-mini-row highlight"><span>Enquiry ENQ-402 · Trade desk callback</span><strong>Owner: Sarah Jenkins</strong></div></div><div class="moment-links"><a class="text-link" href="communications.html">Explore Communications ↗</a><a class="moment-demo-link" href="crm.html">Explore CRM ↗</a></div></article><article class="moment-card">${iconBadge('sparkle', 'gold')}<div class="moment-top"><span class="moment-step">03 · BRIEF, HAND OVER &amp; MEASURE</span><span class="moment-pill status-complete">AI Team · Automation · Delivery · Marketing</span></div><h3>Hand over won work without duplicate admin.</h3><p>A manager approves an extractive brief from approved notes in AI Team, an operator runs <code>handover.js</code> to save one onboarding record in Business Delivery, and Marketing uploads the Sales outcomes export to compare wins.</p><div class="ui-mini-preview" aria-label="Illustrative handover and outcomes preview"><div class="ui-mini-row"><span>Operator step: handover.js · Ref HO-2026-041</span><strong>Receipt: created</strong></div><div class="ui-mini-row highlight"><span>Marketing upload: Campaign wins + Unattributed</span><strong>0 duplicate IDs</strong></div></div><div class="moment-links"><a class="text-link" href="business-delivery.html">Explore Business Delivery ↗</a><a class="moment-demo-link" href="marketing-social-media.html">Explore Marketing ↗</a></div></article></div></section>`;

const homeHowIntelligenceWorks = () => `<section class="wrap section" id="how-intelligence-works" aria-labelledby="how-intel-heading"><div class="section-head"><div>${eyebrow('EVIDENCE-LED WORKFLOW · HUMAN IN CONTROL')}<h2 id="how-intel-heading">How the intelligence works</h2></div><p>Public facts, sourced company evidence and approved documents stay traceable from source fact to human sign-off.</p></div><ol class="intel-pipeline-grid"><li><span class="intel-step-num">STEP 01 · SOURCE FACT</span><h3>Dated public or imported record</h3><p>Shows what was observed and where it came from — e.g. a Planning Data link, Find a Tender notice, or branch expansion record observed on 2026-11-10.</p><div class="intel-chip">Inspectable original source</div></li><li><span class="intel-step-num">STEP 02 · SALES INTERPRETATION</span><h3>Plain commercial meaning</h3><p>Explains why the fact matters to your branch or team — e.g. “New trade counter and warehouse fit-out signals potential demand for electrical stock.”</p><div class="intel-chip">Fit, evidence &amp; contactability kept separate</div></li><li><span class="intel-step-num">STEP 03 · SUGGESTED NEXT STEP</span><h3>Practical action prepared</h3><p>Recommends the next commercial move — e.g. “Identify the branch purchasing lead and schedule an introductory trade-account call.”</p><div class="intel-chip">Stale evidence blocked from acceptance</div></li><li><span class="intel-step-num">STEP 04 · PERSON’S DECISION</span><h3>Accept, research, reject or revoke</h3><p>A person selects <strong>Accept and assign</strong> (naming owner &amp; due date into the Action Queue), <strong>Further research</strong>, <strong>Reject</strong> or <strong>Revoke</strong> with a reason.</p><div class="intel-chip ok">Owned follow-up created only after review</div></li></ol><div class="intel-capabilities-grid"><article class="crm-workspace-card"><span class="platform-status-pill">Working pilot · Public UK sources</span><h3>Market intelligence</h3><p>Uses public data to show what is happening in a location — with no paid API subscription or AI credits.</p><p style="font-size:13.5px;color:#334155;background:#f8f7f3;padding:12px;border-radius:6px;margin-bottom:0"><strong>Example:</strong> Search Leeds with a 30- or 90-day lookback and keyword “construction” across Planning Data and Find a Tender, open the original notice and assess whether the opportunity is worth researching.</p></article><article class="crm-workspace-card"><span class="platform-status-pill">Working pilot · Feature branch</span><h3>Prospect intelligence</h3><p>Turns sourced company evidence (vacancies, branch expansions, announcements) into a recommendation that a person reviews.</p><p style="font-size:13.5px;color:#334155;background:#f8f7f3;padding:12px;border-radius:6px;margin-bottom:0"><strong>Example:</strong> Review an electrical distributor’s branch opening with customer fit, evidence and contactability scored on their own merits, then assign follow-up to the Sales Action Queue.</p></article><article class="crm-workspace-card"><span class="platform-status-pill">Working pilot · Local development milestone</span><h3>AI Team</h3><p>Prepares extractive briefs from approved source material — pulling relevant information from supplied documents — and gives a person control over revisions and acceptance.</p><p style="font-size:13.5px;color:#334155;background:#f8f7f3;padding:12px;border-radius:6px;margin-bottom:0"><strong>Example:</strong> Before an account review, a manager gives the Chief of Staff approved company notes, checks the cited passages, requests revisions and records human acceptance.</p></article></div></section>`;

const homeSevenServices = () => `<section class="wrap section" id="seven-services" aria-labelledby="seven-services-heading"><div class="section-head"><div>${eyebrow('SEVEN CONNECTED SERVICES')}<h2 id="seven-services-heading">Seven services.<br><em>One clear job each.</em></h2></div><div><p>Every service below states the work it supports, one practical business benefit, and links directly to its full detail page.</p><div class="actions" style="margin-top:16px">${button('Request a demo', enquiry('AI services walkthrough'))}${button('Try interactive sample demo', 'dashboard.html', true)}</div></div></div><div class="service-directory-grid">${aiGroups.map(g => {
  const slug = g.id === 'sales' ? 'sales-intelligence' : g.id === 'delivery' ? 'business-delivery' : g.id === 'marketing' ? 'marketing-social-media' : g.id;
  return `<article class="service-directory-card" id="home-service-${g.id}"><a class="service-card-main" href="${slug}.html"><span class="service-brand-icon"><img src="assets/services-v2/${g.id}.svg" width="34" height="34" alt="" loading="lazy"></span><span class="platform-status-pill">${g.statusBadge}</span><h3>${g.title}</h3><p><strong>Work it supports:</strong> ${g.cardCopy}</p><p style="margin-top:8px"><strong>Business benefit:</strong> ${g.benefit}</p><span class="service-explore">Explore ${g.title} ${arrow}</span></a></article>`;
}).join('')}<article class="service-directory-cta"><div>${eyebrow('COMPARE ALL SEVEN SERVICES')}<h3>See how the seven services connect.</h3><p>Visit the seven-services hub to compare capabilities, step through the guided demo scenarios or inspect the synthetic sample-data views.</p></div><div class="actions">${button('Explore the seven services', 'platforms.html')}${button('Request a demo', enquiry('AI services walkthrough'), true)}</div></article></div></section>`;

const homeFaq = () => `<section class="wrap faq-section" id="home-faq" aria-labelledby="home-faq-heading"><div>${eyebrow('FREQUENTLY ASKED QUESTIONS')}<h2 id="home-faq-heading">Clear answers.<br><em>Honest status.</em></h2><p style="color:var(--muted);max-width:420px">Straightforward answers covering Market intelligence, Prospect intelligence, AI Team, and how the seven services move from opportunity to delivery.</p></div><div class="faqs"><details open><summary>What is the difference between Market intelligence, Prospect intelligence and AI Team?</summary><p><strong>Market intelligence</strong> uses public UK data (England Planning Data and Find a Tender) to show what is happening in a location with no paid APIs or AI credits. <strong>Prospect intelligence</strong> turns dated company evidence (vacancies, branch expansions, announcements) into recommendations scored separately for fit, evidence and contactability that a person reviews. <strong>AI Team</strong> prepares extractive briefs from approved source material under human revision and acceptance.</p></details><details><summary>What is ready to demonstrate now versus working pilots or planned integrations?</summary><p>Business &amp; Personal CRM, Communications (team inbox sandbox) and Marketing Campaign Outcomes run in interactive demos today. Market &amp; Prospect Intelligence run as tested feature-branch functionality, while Business Delivery, Automation (<code>handover.js</code>) and AI Team extractive briefs run as local working pilots. Live telephony/WhatsApp/email syncing, auto-enrichment and live ad/social publishing remain Planned or require configured provider connections.</p></details><details><summary>How are Business CRM and Personal CRM kept separate?</summary><p>They run as separate workspaces with separate authentication and data isolation. Personal contacts and reconnect reminders are never shared with Business CRM, even where email addresses match.</p></details><details><summary>How does work move from Sales to Business Delivery and Marketing?</summary><p>Qualified opportunities move from Sales via structured export. After a win is confirmed, an operator runs <code>handover.js</code> so Business Delivery saves an onboarding record with agreed scope, owner and start date. Marketing outcomes move via manual Sales export and browser upload.</p></details></div></section>`;

const homeFinalAction = () => `<section class="wrap cta cta-signature" aria-labelledby="home-cta-heading"><span class="cta-power" aria-hidden="true">${ico('power')}</span><div>${eyebrow('READY TO SEE THE SUITE?')}<h2 id="home-cta-heading">Find the right opportunities.<br>Give every next step an owner.</h2><p>Request a demo to walk through Market &amp; Prospect Intelligence, CRM, Communications, Business Delivery, Automation, AI Team or Marketing.</p></div><div class="actions">${button('Request a demo', enquiry('AI services walkthrough'))}${button('Explore the seven services', 'platforms.html', true)}</div></section>`;

const intelIcons = ['database', 'bulb', 'arrow', 'usercheck'];
const capIcons = ['globe', 'search', 'sparkle'];
const decorateIntel = html => {
  let i = 0, c = 0;
  return html
    .replace(/<li><span class="intel-step-num">/g, () => `<li>${iconBadge(intelIcons[i++] || 'check', 'gold')}<span class="intel-step-num">`)
    .replace(/<article class="crm-workspace-card"><span class="platform-status-pill">/g, () => `<article class="crm-workspace-card cap-card">${iconBadge(capIcons[c++] || 'check', 'ink')}<span class="platform-status-pill">`);
};

const homeTrustRow = () => `<ul class="hero-trust" aria-label="Core capabilities">${[
  ['globe', 'Public UK market data'],
  ['usercheck', 'Human-reviewed evidence'],
  ['lock', 'Synthetic sample demos']
].map(([i, t]) => `<li>${ico(i)}<span>${t}</span></li>`).join('')}</ul>`;

export const partnershipHome = `<section class="hero offer-hero hero-handshake"><img src="assets/handshake-hero.jpg" alt="Power-Up Talent commercial team greeting" class="hero-photo-bg" width="900" height="885" fetchpriority="high"><div class="video-overlay handshake-overlay"></div><div class="hero-grid-lines" aria-hidden="true"></div><div class="wrap hero-grid hero-grid-b2b"><div>${eyebrow('POWER-UP TALENT · SEVEN CONNECTED B2B SERVICES')}<h1 style="color:#ffffff!important">Find the right opportunities.<br><em style="color:var(--gold);font-style:normal">Give every next step</em> an owner.</h1><p class="hero-copy">Power-Up Talent brings market research, prospect qualification, customer follow-up and business delivery into one suite. See what changed, check the source, and give your team a clear next action.</p><div class="actions">${button('Request a demo', enquiry('AI services walkthrough'))}${button('Explore the seven services', '#seven-services', true)}</div>${homeTrustRow()}<p class="hero-foot"><a href="#how-intelligence-works" style="color:#ffe000;text-decoration:underline;font-weight:700">How the intelligence works ↓</a> · <a href="platforms.html" style="color:#ffffff;text-decoration:underline">All 7 services</a> · <a href="dashboard.html" style="color:#ffffff;text-decoration:underline">Interactive sample demo</a> · <a href="contact.html" style="color:#ffffff;text-decoration:underline">Contact us ↗</a></p></div><div class="hero-screenshot-panel" aria-label="Sales Action Queue product screenshot"><span class="hero-panel-glow" aria-hidden="true"></span>${productScreenshot('actionQueue', { eager: true })}</div></div></section>${homeDistributorExample()}${homeSevenServices()}${decorateIntel(homeHowIntelligenceWorks())}${connectedJourneyBand()}${homeFaq()}${homeFinalAction()}`;

export const aiServicesPage = `<section class="page-hero"><video autoplay loop muted playsinline preload="metadata" class="hero-video-bg" aria-hidden="true"><source src="assets/videos/ai-hero.mp4" type="video/mp4"></video><div class="video-overlay"></div><div class="wrap">${eyebrow('POWER-UP TALENT | SEVEN SERVICES')}<h1>Seven services for finding work,<br><em>following up and delivering it.</em></h1><p>Explore Sales &amp; Intelligence, Business &amp; Personal CRM, Communications, Business Delivery, Automation, AI Team &amp; Power Command Centre, and Marketing &amp; Social Media.</p><div class="actions">${button('Request a demo', enquiry('AI services walkthrough'))}${button('Try the guided demo', '#guided-demo', true)}</div></div></section><section class="ai-overview" aria-labelledby="ai-overview-heading"><div class="wrap"><div class="ai-centred"><h2 id="ai-overview-heading">Explore the seven services</h2></div></div></section>${connectedJourneyBand()}<section class="wrap section split"><div>${eyebrow('WALKTHROUGH &amp; DEMO SCOPE')}<h2>See how each service<br>supports your team.</h2></div><div><p class="large-copy">Every service page explains who it is for, what it does, what work it improves, a concrete example, and what runs in a demo or working pilot versus planned capabilities.</p><p>Step through the guided three-scenario demo on this page or inspect the synthetic sample-data views before requesting a walkthrough.</p><div class="actions">${button('Request a demo', enquiry('AI services walkthrough'))}${button('Interactive sample-data demo', 'dashboard.html', true)}</div></div></section>`;

const connectedLink = id => `<section class="wrap note-band offer-link-band"><div>${eyebrow('POWER-UP TALENT | AI BUSINESS SERVICES')}<h2>${id === 'coaching' ? 'Give new commercial habits a clear workspace.' : 'Support the new appointment with coaching and practical systems.'}</h2><p>${id === 'coaching' ? 'Connect sales and branch coaching with CRM, Shared Communications and Sales & Intelligence so teams can track follow-ups and quotes every day.' : 'Combine specialist headhunting with post-appointment coaching and our seven business systems.'}</p></div><div class="actions">${button(id === 'talent' ? 'Explore coaching' : 'Explore AI Business Services', id === 'talent' ? 'coaching.html' : 'platforms.html', true)}</div></section>`;

export function refreshPage(id, html) {
  if (id === 'contact') return html
    .replace('A critical vacancy. A stronger team.<br>A long-term commercial partnership.', 'A critical hire. A stronger team.<br>Practical commercial systems.')
    .replace('<option>Intelligence walkthrough</option>', '<option>AI services walkthrough</option>' + aiGroups.map(g => `<option>AI services: ${g.title}</option>`).join('') + '<option>Confidential Candidate</option><option>Intelligence walkthrough</option>')
    .replace('autocomplete="organisation"', 'autocomplete="organization"');
  if (id === 'partnerships') html = html
    .replace('Bring hiring, team development and commercial intelligence into a plan that moves with your business.', 'Bring specialist recruitment, performance coaching and practical AI business systems into a plan agreed around your business.')
    .replace('Relevant commercial intelligence', 'Selected AI & business systems and onboarding')
    .replace('Development and intelligence where agreed', 'Coaching and connected business systems where agreed');
  if (id === 'talent') html = html.replace('SPECIALIST HEADHUNTING', 'ELITE RECRUITMENT & HEADHUNTING');
  if (id === 'about') html = html.replaceAll('coaching and commercial intelligence', 'coaching and AI business systems');
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
    '@type': 'Organization',
    name: 'Power-Up Talent UK',
    alternateName: 'Power-Up Talent',
    url: 'https://power-up-talent.web.app',
    logo: 'https://power-up-talent.web.app/assets/logo-brand.png',
    description: 'Exclusive UK executive headhunting, commercial coaching, and seven AI business systems across all UK industry sectors, retaining electrical wholesale, technical distribution, construction/M&E and engineering as flagship proven verticals.',
    email: 'info@power-uptalent.co.uk',
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'client & candidate enquiries',
      email: 'info@power-uptalent.co.uk',
      areaServed: 'GB',
      availableLanguage: ['English']
    },
    knowsAbout: ['Executive Headhunting', 'Commercial Coaching', 'AI Business Systems', 'Sector Exclusivity']
  };
  return html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(schema)}</script>`)
    .replace('styles.css?v=7.0', 'styles.css?v=9.0')
    .replace('<script src="app.js"', '<link rel="stylesheet" href="ai-services.css?v=9.0"><link rel="stylesheet" href="assets/css/concierge-chat.css?v=1"><script src="app.js"')
    .replace('href="check.html">Claim territory', 'href="contact.html">Contact')
    .replace('</head>', '<link rel="stylesheet" href="signature.css?v=1"></head>')
    .replace('</body>', '<script src="assets/js/concierge-chat.js?v=1" defer></script></body>')
    .replace('Specialist talent, performance coaching and AI intelligence', 'Exclusive UK headhunting (one client per sector), coaching &amp; 7 AI systems')
    .replace('Strict single-client territory exclusivity across the UK.', 'Working with one organisation per sector at a time across the UK.')
    .replace('Human judgement. Better intelligence.', 'Elite Headhunters. Exclusive to Your Sector.');
}
