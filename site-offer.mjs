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
    statusBadge: 'Manage & Retain · Business & Personal Workspaces',
    whatYouCanTry: 'Walk through Business CRM (accounts, stage-gated pipeline, overdue tasks and 30-day renewal flags) and Personal CRM (private relationship circles, reconnect cadence and portable exports).',
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
    statusBadge: 'Manage & Retain · Live channels configured per tenant',
    whatYouCanTry: 'Test the shared inbox, human takeover, cases, dated callbacks, approved company knowledge and Needs Attention view. Live Gmail/Microsoft inbox sync, WhatsApp, telephony and calendar booking are configured per tenant.',
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
    statusBadge: 'Find & Win · Market & Prospect Intelligence',
    whatYouCanTry: 'Search UK Planning Data and Find a Tender notices, review dated prospect evidence, assign follow-up tasks to the Sales Action Queue, and track one active quote per prospect.',
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
    statusBadge: 'Deliver & Scale · Customer Onboarding',
    whatYouCanTry: 'Load a reviewed Sales handover, confirm the deal is marked won and scope is agreed, record the delivery owner and start date, and verify repeat-import duplicate prevention.',
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
    statusBadge: 'Deliver & Scale · Auditable Handover Receipts',
    whatYouCanTry: 'Inspect how reviewed Sales handovers and AI Team instructions route into Business Delivery with explicit receipts distinguishing created, already_exists, rejected and unconfirmed outcomes.',
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
    statusBadge: 'Deliver & Scale · Human-Approved Briefs',
    whatYouCanTry: 'Brief the AI Team with approved source material, review a source-cited commercial brief, request revisions and record final human sign-off before passing instructions forward.',
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
    statusBadge: 'Find & Win · Campaign & Margin Attribution',
    whatYouCanTry: 'Compare campaigns by qualified leads, attended meetings, won deals, all-leads conversion rate and Unattributed records (with automatic duplicate prospect protection).',
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

export const connectedJourneyBand = () => `<section class="ai-connect-band" id="connected-journey" aria-labelledby="connected-journey-heading"><div class="wrap"><div>${eyebrow('FROM OPPORTUNITY TO DELIVERY · END-TO-END ROUTE')}<h2 id="connected-journey-heading">From opportunity<br>to delivery.</h2><p>Walk through how a regional UK distributor moves an opportunity from first local market signal to customer onboarding and campaign outcome attribution.</p><p class="connect-honesty"><strong>Clear human checkpoints:</strong> Public data lookup, human qualification, named account ownership, and auditable handovers keep commercial teams in control at every stage.</p></div><ol class="connected-steps-list"><li><div class="step-icon-wrap">${iconBadge('globe', 'glass')}</div><span>01 · <a href="sales-intelligence.html#market-intelligence">Market Intelligence</a> <em>Public UK data lookup</em></span><strong>Spots local planning projects &amp; public tenders around Leeds.</strong><p>A branch manager searches Leeds (25-mile radius, 90 days, keyword “construction”) across England Planning Data and Find a Tender notices, opening original government records.</p></li><li><div class="step-icon-wrap">${iconBadge('radar', 'glass')}</div><span>02 · <a href="sales-intelligence.html#prospect-intelligence">Prospect Intelligence &amp; Action Queue</a> <em>Human review &amp; scoring</em></span><strong>Scores branch-expansion evidence and creates an owned follow-up.</strong><p>The team reviews dated expansion evidence (Source fact → Interpretation → Next step), assigns an owner to the Sales Action Queue, and tracks one active quote.</p></li><li><div class="step-icon-wrap">${iconBadge('database', 'glass')}</div><span>03 · <a href="crm.html">CRM (Business &amp; Personal)</a> <em>Separated workspaces</em></span><strong>Keeps account history, decision-makers and 30-day renewal dates visible.</strong><p>Account ownership, notes and 30-day renewal review flags live in Business CRM, kept strictly separate from private Personal CRM records.</p></li><li><div class="step-icon-wrap">${iconBadge('chat', 'glass')}</div><span>04 · <a href="communications.html">Shared Communications</a> <em>Team inbox &amp; callbacks</em></span><strong>Assigns inbound trade enquiries and dated callbacks.</strong><p>An urgent branch stock enquiry enters Needs Attention, is claimed by a named team member and gets a dated 14:00 callback.</p></li><li><div class="step-icon-wrap">${iconBadge('sparkle', 'glass')}</div><span>05 · <a href="ai-team.html">Human-Approved AI Team</a> <em>Cited briefs &amp; sign-off</em></span><strong>Prepares verifiable commercial briefs from approved documents.</strong><p>Using only approved source material, the AI Team drafts a cited brief; a manager requests a revision and records final human sign-off.</p></li><li><div class="step-icon-wrap">${iconBadge('cog', 'glass')}</div><span>06 · <a href="automation.html">Verified Handovers (Automation)</a> <em>Auditable receipts</em></span><strong>Routes the reviewed handover and instructions to Delivery.</strong><p>Automated handover checks return an explicit receipt distinguishing <code>created</code>, <code>already_exists</code> or <code>unconfirmed</code> so nothing slips through the cracks.</p></li><li><div class="step-icon-wrap">${iconBadge('chart', 'glass')}</div><span>07 · <a href="business-delivery.html">Business Delivery</a> &amp; <a href="marketing-social-media.html">Marketing Attribution</a> <em>Onboarding &amp; campaign ROI</em></span><strong>Confirms onboarding and reconciles campaign outcomes.</strong><p>Business Delivery confirms won status, scope, owner and start date with zero duplicate admin; Marketing Attribution compares qualified leads, attended meetings and won margin.</p></li></ol></div></section>`;

const homeDistributorExample = () => `<section class="wrap section editorial-centrepiece" aria-labelledby="centrepiece-heading"><div class="centrepiece-header"><div>${eyebrow('WORKED COMMERCIAL BLUEPRINT · UK DISTRIBUTOR')}<h2 id="centrepiece-heading">How a regional business<br><em>uses the suite in one week.</em></h2><p>Follow a regional UK business from spotting a local branch opportunity to chasing the quote, onboarding the customer and checking which source produced the win.</p></div></div><div class="moment-grid"><article class="moment-card">${iconBadge('radar', 'gold')}<div class="moment-top"><span class="moment-step">01 · FIND &amp; QUALIFY OPPORTUNITIES</span><span class="moment-pill status-review">Market &amp; Prospect Intelligence</span></div><h3>Spot a regional expansion and review dated evidence.</h3><p>The branch manager searches Planning Data &amp; Find a Tender within 25 miles of Leeds, then reviews dated branch-opening evidence for a target contractor before accepting it into the Action Queue.</p><div class="ui-mini-preview" aria-label="Illustrative Market and Prospect Intelligence preview"><div class="ui-mini-row"><span>Market lookup: Leeds · 25 miles · “construction”</span><strong>Public links verified</strong></div><div class="ui-mini-row highlight"><span>Signal reviewed: Branch opening · Accept &amp; assign</span><strong>Owner: J. Morton</strong></div></div><div class="moment-links"><a class="text-link" href="sales-intelligence.html">Explore Sales &amp; Intelligence ↗</a><a class="moment-demo-link" href="dashboard.html?service=sales">Open Sales demo ↗</a></div></article><article class="moment-card">${iconBadge('list', 'gold')}<div class="moment-top"><span class="moment-step">02 · ORGANISE FOLLOW-UP &amp; ENQUIRIES</span><span class="moment-pill status-active">Action Queue · Comms · CRM</span></div><h3>Give every quote, callback and renewal a named owner.</h3><p>Overdue Quote #Q-104 stays at the top of the Sales Action Queue, an inbound trade-counter enquiry receives a dated 14:00 callback in Shared Communications, and Business CRM flags a contract renewing inside 30 days.</p><div class="ui-mini-preview" aria-label="Illustrative follow-up and enquiry preview"><div class="ui-mini-row"><span>Quote #Q-104 · Midlands Switchgear (£28.4k)</span><strong>Outcome: Won</strong></div><div class="ui-mini-row highlight"><span>Enquiry ENQ-402 · Trade desk callback</span><strong>Owner: Sarah Jenkins</strong></div></div><div class="moment-links"><a class="text-link" href="communications.html">Explore Communications ↗</a><a class="moment-demo-link" href="crm.html">Explore CRM ↗</a></div></article><article class="moment-card">${iconBadge('sparkle', 'gold')}<div class="moment-top"><span class="moment-step">03 · BRIEF, HAND OVER &amp; MEASURE</span><span class="moment-pill status-complete">AI Team · Automation · Delivery · Marketing</span></div><h3>Hand over won work with zero duplicate admin.</h3><p>A manager approves a cited brief from company notes in AI Team, Verified Handovers open one clean onboarding record in Business Delivery, and Marketing Attribution compares qualified meetings and won margin.</p><div class="ui-mini-preview" aria-label="Illustrative handover and outcomes preview"><div class="ui-mini-row"><span>Verified handover · Ref HO-2026-041</span><strong>Receipt: created</strong></div><div class="ui-mini-row highlight"><span>Marketing Attribution · Campaign wins</span><strong>0 duplicate records</strong></div></div><div class="moment-links"><a class="text-link" href="business-delivery.html">Explore Business Delivery ↗</a><a class="moment-demo-link" href="marketing-social-media.html">Explore Marketing ↗</a></div></article></div><p style="margin:22px 0 0;font-size:12.5px;color:var(--muted)"><em>Illustrative commercial workflow using anonymised sample data.</em></p></section>`;

const homeHowIntelligenceWorks = () => `<section class="wrap section" id="how-intelligence-works" aria-labelledby="how-intel-heading"><div class="section-head"><div>${eyebrow('EVIDENCE-LED WORKFLOW · HUMAN IN CONTROL')}<h2 id="how-intel-heading">How the intelligence works</h2></div><p>No black-box automation: public facts, sourced company evidence and approved documents stay traceable from source to human sign-off.</p></div><ol class="intel-pipeline-grid"><li><span class="intel-step-num">STEP 01 · SOURCE FACT</span><h3>Dated public or imported record</h3><p>Shows what was observed and where it came from — e.g. a Planning Data link, Find a Tender notice, or branch expansion record observed on 2026-11-10.</p><div class="intel-chip">Inspectable original source</div></li><li><span class="intel-step-num">STEP 02 · SALES INTERPRETATION</span><h3>Plain commercial meaning</h3><p>Explains why the fact matters to your branch or team — e.g. “New trade counter and warehouse fit-out signals demand for switchgear and cable stock.”</p><div class="intel-chip">Fit, evidence &amp; contactability kept separate</div></li><li><span class="intel-step-num">STEP 03 · SUGGESTED NEXT STEP</span><h3>Practical action prepared</h3><p>Recommends the next commercial move — e.g. “Identify the branch purchasing lead and schedule an introductory trade-account call.”</p><div class="intel-chip">Stale evidence blocked from acceptance</div></li><li><span class="intel-step-num">STEP 04 · PERSON’S DECISION</span><h3>Review, assign, reject or revoke</h3><p>A person selects <strong>Accept and assign</strong> (naming owner &amp; due date into the Action Queue), <strong>Further research</strong>, <strong>Reject</strong> or <strong>Revoke</strong> with a reason.</p><div class="intel-chip ok">Owned follow-up created only after review</div></li></ol><div class="intel-capabilities-grid"><article class="crm-workspace-card"><span class="platform-status-pill">Public UK Sources</span><h3>Market Intelligence</h3><p>Uses public UK planning and tender data to show live commercial activity in your target territory.</p><p style="font-size:13.5px;color:#334155;background:#f8f7f3;padding:12px;border-radius:6px;margin-bottom:0"><strong>Example:</strong> A Leeds branch manager checks England Planning Data (5–100 mile radius, 30/90 days) and Find a Tender regional notices filtered by “construction”, opening source records directly.</p></article><article class="crm-workspace-card"><span class="platform-status-pill">Human-Reviewed Evidence</span><h3>Prospect Intelligence</h3><p>Turns sourced company evidence (vacancies, branch expansions, announcements) into a recommendation that a person reviews.</p><p style="font-size:13.5px;color:#334155;background:#f8f7f3;padding:12px;border-radius:6px;margin-bottom:0"><strong>Example:</strong> Score customer fit separately from contactability, and either accept into the Action Queue or hold for further research.</p></article><article class="crm-workspace-card"><span class="platform-status-pill">Human-Approved Briefs</span><h3>Human-Approved AI Team</h3><p>Turns approved company documents into fast, verifiable commercial briefs with final sign-off always in human hands.</p><p style="font-size:13.5px;color:#334155;background:#f8f7f3;padding:12px;border-radius:6px;margin-bottom:0"><strong>Example:</strong> A manager requests an account-review brief from approved order and call notes, checks the quoted citations, requests a revision and clicks Accept.</p></article></div></section>`;

const homeThreeOffers = () => `<section class="wrap section" id="three-offers" aria-labelledby="three-offers-heading"><div class="section-head"><div>${eyebrow('THREE MAIN OFFERS')}<h2 id="three-offers-heading">Three ways we help<br><em>your business move forward.</em></h2></div><p>Start with a single critical hire, strengthen leadership habits across your branches, or introduce practical AI business services where work slows down.</p></div><div class="service-directory-grid">${[
  ['01 · CORE SERVICE', 'Specialist Recruitment &amp; Headhunting', 'Permanent recruitment and discreet headhunting across all UK industry sectors—retaining electrical wholesale, technical distribution, construction and engineering as flagship proven verticals.', 'Choose this when critical roles stay open, job-board applicants miss the mark, or competitors hold the proven talent.', 'talent.html', 'Explore Recruitment', 'contact.html?interest=Critical+hire', 'Discuss a vacancy', 'target'],
  ['02 · PEOPLE &amp; PERFORMANCE', 'Coaching &amp; Development', '1-to-1 and team coaching for branch managers, sales teams and leaders — covering feedback, performance management, customer conversations and goal follow-through.', 'Choose this when capable teams need sharper commercial habits, clearer accountability and consistent execution.', 'coaching.html', 'Explore Coaching', 'contact.html?interest=Coaching', 'Discuss your coaching needs', 'users'],
  ['03 · SEVEN CONNECTED SYSTEMS', 'AI Business Services', 'Seven practical commercial systems across Find &amp; Win, Manage &amp; Retain, and Deliver &amp; Scale—built to keep quotes, enquiries and handovers moving.', 'Choose this when enquiries, quotes, account follow-up or won-deal handovers fall between spreadsheets and inboxes.', 'platforms.html', 'Explore AI Business Services', enquiry('AI services walkthrough'), 'Discuss your business needs', 'cpu']
].map(([tagTxt, title, summary, reason, pageHref, pageCta, contactHref, contactCta, icn]) => `<article class="pillar-white-card">${iconBadge(icn, 'gold')}<span class="card-num">${tagTxt}</span><h3>${title}</h3><p>${summary}</p><p style="font-size:13.5px;color:#334155;background:#f8f7f3;padding:12px;border-radius:6px"><strong>Why choose it:</strong> ${reason}</p><div class="actions" style="margin-top:auto;padding-top:16px">${button(contactCta, contactHref)}<a class="text-link pillar-link" href="${pageHref}">${pageCta} ${arrow}</a></div></article>`).join('')}</div><div class="note-band" style="margin-top:24px;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:16px"><div><strong>Approached by us or considering a confidential move?</strong><p style="margin:4px 0 0;color:var(--muted)">Speak with our headhunters discreetly under strict NDA — we never spray CVs or alert your current employer.</p></div><a class="button secondary" href="contact.html?interest=Confidential+Candidate">Confidential Candidate Register ${arrow}</a></div></section>`;

const outcomeBuckets = [
  ['find-win', '1. Find &amp; Win', 'Spot UK projects early, qualify targets and link every campaign to won margin.'],
  ['manage-retain', '2. Manage &amp; Retain', 'Keep accounts, 30-day renewals and customer enquiries owned by a named person.'],
  ['deliver-scale', '3. Deliver &amp; Scale', 'Hand over won deals cleanly, verify every step and produce human-approved briefs.']
];

const renderServiceOutcomeCard = g => {
  const slug = g.id === 'sales' ? 'sales-intelligence' : g.id === 'delivery' ? 'business-delivery' : g.id === 'marketing' ? 'marketing-social-media' : g.id;
  return `<article class="service-directory-card" id="home-service-${g.id}" data-outcome-panel="${g.bucket}"><a class="service-card-main" href="${slug}.html"><span class="service-brand-icon"><img src="assets/services-v2/${g.id}.svg" width="34" height="34" alt="" loading="lazy"></span><span class="platform-status-pill">Best for: ${g.bestFor}</span><h3>${g.displayTitle || g.title}</h3><p>${g.outcomeLine}</p><span class="service-explore">Explore ${g.displayTitle || g.title} ${arrow}</span></a></article>`;
};

const homeSevenServices = () => `<section class="wrap section" id="seven-services" aria-labelledby="seven-services-heading" data-outcome-tabs><div class="section-head"><div>${eyebrow('AI BUSINESS SERVICES HUB')}<h2 id="seven-services-heading">Seven commercial systems.<br><em>Grouped by outcome.</em></h2></div><div><p>Start with the outcome you need most—Find &amp; Win, Manage &amp; Retain, or Deliver &amp; Scale—then explore the full platform hub or interactive demo.</p><div class="actions" style="margin-top:16px">${button('Explore AI Business Services hub', 'platforms.html')}${button('Discuss your business needs', enquiry('AI services walkthrough'), true)}</div></div></div><div class="outcome-tab-bar" role="tablist" aria-label="Filter services by commercial outcome"><button type="button" role="tab" aria-selected="true" class="outcome-tab-btn active" data-outcome-tab="all">All 7 Services</button>${outcomeBuckets.map(([id, label]) => `<button type="button" role="tab" aria-selected="false" class="outcome-tab-btn" data-outcome-tab="${id}">${label}</button>`).join('')}</div><div class="service-directory-grid">${aiGroups.map(renderServiceOutcomeCard).join('')}<article class="service-directory-cta"><div>${eyebrow('COMPARE ALL SEVEN SYSTEMS')}<h3>Not sure where to start?</h3><p>Visit the AI Business Services hub to compare all seven systems side by side or step through the interactive sample-data demo.</p></div><div class="actions">${button('Open AI Business Services hub', 'platforms.html')}${button('Try interactive sample demo', 'dashboard.html', true)}</div></article></div></section>`;

const homeSectorChecker = () => `<section class="wrap section" id="sector-checker" aria-labelledby="sector-checker-heading"><div class="sector-checker-card"><div class="sector-checker-head"><div>${eyebrow('EXCLUSIVE TERRITORY &amp; TALENT CHECKER')}<h2 id="sector-checker-heading">Check your UK sector availability<br><em>&amp; estimated shortlist window.</em></h2><p>Power-Up Talent partners with strictly one organisation per sector and territory at a time. Select your parameters to check provisional slot readiness and lock your exclusivity review.</p></div></div><div class="sector-checker-grid"><div class="sector-checker-inputs"><label for="sc-sector">Industry Sector<select id="sc-sector" name="sc_sector"><option>Electrical Wholesale</option><option>Technical Distribution</option><option>Construction &amp; M&amp;E</option><option>Engineering &amp; Manufacturing</option><option>B2B Sales &amp; Distribution</option><option>Tech &amp; SaaS</option><option>Finance &amp; Professional Services</option><option>Energy &amp; Facilities</option><option>Other UK Sector</option></select></label><div id="sc-other-wrap" hidden><label for="sc-other-sector">Specify Your UK Sector<input id="sc-other-sector" name="sc_other_sector" type="text" placeholder="e.g. Precision Medical Devices, Food &amp; Beverage Wholesale"></label></div><label for="sc-role">Role Level<select id="sc-role" name="sc_role"><option>Managing Director / C-Suite</option><option selected>Commercial / Sales Director</option><option>Branch / Operations Manager</option><option>Senior Technical / Project Specialist</option><option>Multi-Role / RPO Rollout</option></select></label><label for="sc-territory">UK Territory<select id="sc-territory" name="sc_territory"><option>London &amp; South East</option><option>Midlands</option><option>North West &amp; Yorkshire</option><option>South West &amp; Wales</option><option>Scotland &amp; Northern Ireland</option><option selected>Nationwide UK</option></select></label><button type="button" id="sc-check-btn" class="button">Check Exclusivity &amp; Timeline ${arrow}</button></div><div id="sc-output" class="sector-checker-output" tabindex="-1" aria-live="polite"><span class="platform-status-pill" id="sc-summary">Electrical Wholesale · Commercial / Sales Director · Nationwide UK</span><dl class="sc-metrics"><div class="sc-metric-row"><dt>Exclusivity Status</dt><dd id="sc-status" class="sc-status-ok">Territory Check Ready — Provisional Slot Open (Subject to NDA Verification)</dd></div><div class="sc-metric-row"><dt>Estimated Shortlist Window</dt><dd id="sc-window">14–21 Days</dd></div><div class="sc-metric-row"><dt>Indicative Talent Scarcity</dt><dd id="sc-scarcity">High — 82%+ Passive Market (Job Boards Ineffective)</dd></div></dl><div class="actions" style="margin-top:20px"><a id="sc-lock-cta" class="button" href="contact.html?interest=Territory+exclusivity+audit">Lock Exclusivity &amp; Request Brief ${arrow}</a></div></div></div></div></section>`;

const homeCaseStudies = () => `<section class="wrap section" id="case-studies" aria-labelledby="case-studies-heading"><div class="section-head"><div>${eyebrow('PROVEN COMMERCIAL OUTCOMES · ANONYMISED UK CLIENTS')}<h2 id="case-studies-heading">Selected UK<br><em>client outcomes.</em></h2></div><p>Illustrative summaries of confidential UK mandates combining exclusive headhunting, commercial coaching and connected operational systems.</p></div><div class="cards cards-3col">${[
  ['CASE 01 · ELECTRICAL WHOLESALE', 'Regional Electrical Wholesaler (Midlands)', 'Branch turnaround and Area Sales leadership placed in 24 days; quote follow-up discipline restored across branch and external sales desks.', ['24-day placement from brief to signed offer', 'Passive competitor talent mapped under strict NDA', 'Weekly quote follow-up cadence embedded post-hire']],
  ['CASE 02 · ENGINEERING & MANUFACTURING', 'UK Engineering &amp; Manufacturing OEM', 'Commercial Director secured directly from a named competitor under NDA; 100% 12-month retention across the senior commercial appointment.', ['Written single-client sector exclusivity agreed', '100% retention at 12 months post-appointment', 'Structured margin-protection &amp; specification vetting']],
  ['CASE 03 · MULTI-SITE DISTRIBUTION', 'Multi-Site B2B Distribution Group', 'Integrated RPO alongside CRM and Shared Communications rollout across 6 UK branches to eliminate missed trade enquiries and strengthen pipeline visibility.', ['6 UK branches onboarded onto shared enquiry ownership', 'Coordinated multi-branch hiring without agency fees per role', 'Clear 30-day renewal and overdue quote tracking']]
].map(([tagTxt, title, summary, bullets], idx) => `<article>${iconBadge(['bolt', 'award', 'building'][idx], 'gold')}<span class="card-num">${tagTxt}</span><h3>${title}</h3><p>${summary}</p><ul>${bullets.map(b => `<li>${b}</li>`).join('')}</ul></article>`).join('')}</div></section>`;

const homeStrategicPillars = () => `<section class="pillars-dark-section" id="strategic-pillars" aria-labelledby="pillars-heading"><div class="wrap"><div class="pillars-head"><p class="eyebrow" style="justify-content:center;color:var(--gold)"><span></span>OUR CORE SYSTEM<span></span></p><h2 id="pillars-heading">STRATEGIC <em>PILLARS.</em></h2><p>Our core service is headhunting — partnering with <strong>one organisation per sector at a time</strong>. We surround that search mandate with structured commercial coaching and seven focused AI &amp; business systems so the leaders you appoint have the habits and tools to win.</p></div><div class="pillars-grid">${[
  ['01 / CORE SERVICE', 'HEADHUNTERS', 'Our core headhunting service. We identify and approach top passive talent currently delivering for your competitors under strict single-client sector exclusivity.', ['One organisation per sector at a time', 'Discreet passive talent mapping', 'Peer-level commercial &amp; technical vetting', 'NDA-protected confidential execution'], 'talent.html', 'Explore Headhunting', 'target'],
  ['02 / PEOPLE &amp; HABITS', 'STRATEGIC RECRUITMENT &amp; COACHING', 'Co-designed local competitor mapping across leadership, branch and sales roles, backed by six workplace coaching programmes on quote follow-up and margin discipline.', ['Local competitor market mapping', 'Six structured coaching programmes', 'Quote follow-up &amp; margin protection', '90-day new leader onboarding habits'], 'coaching.html', 'Explore Coaching', 'users'],
  ['03 / SUITE OF 7 SYSTEMS', 'AI &amp; BUSINESS SERVICES', 'Seven practical commercial systems covering Market &amp; Prospect Intelligence, Business/Personal CRM, Shared Communications, Delivery, Verified Handovers, AI Team and Marketing Attribution.', ['Public UK Market &amp; Prospect Intelligence', 'Human-reviewed signals &amp; Action Queues', 'Human-Approved AI Team &amp; Verified Handovers', 'Campaign wins &amp; margin attribution'], '#seven-services', 'Explore the 7 services', 'cpu'],
  ['04 / INTEGRATED', 'GROWTH PARTNERSHIPS', 'We work as an extension of your leadership team — combining executive headhunting, branch coaching and selected business systems under written single-client exclusivity.', ['Combined hiring, coaching &amp; systems', 'Multi-branch regional rollout support', 'Agreed milestones &amp; weekly cadences', 'Strict single-client sector exclusivity'], 'partnerships.html', 'Explore Partnerships', 'handshake']
].map(([tagTxt, title, desc, bullets, href, ctaTxt, icn], i) => `<article class="pillar-white-card${i === 0 ? ' is-core' : ''}"><span class="pillar-numeral" aria-hidden="true">0${i + 1}</span>${i === 0 ? '<span class="core-ribbon">CORE SERVICE</span>' : ''}${iconBadge(icn, 'gold')}<span class="card-num">${tagTxt}</span><h3>${title}</h3><p>${desc}</p><ul class="workspace-feature-list">${bullets.map(b => `<li>${b}</li>`).join('')}</ul><div class="actions" style="margin-top:auto;padding-top:20px"><a class="text-link pillar-link" href="${href}">${ctaTxt} ${arrow}</a></div></article>`).join('')}</div></div></section>`;

const homeValueCreationFramework = () => `<section class="value-dark-section" id="value-creation" aria-labelledby="value-heading"><div class="wrap"><div class="pillars-head"><p class="eyebrow" style="justify-content:center;color:var(--gold)"><span></span>VALUE CREATION FRAMEWORK<span></span></p><h2 id="value-heading">How We Transform Your Business</h2><p>Commercial advantages connecting discreet competitor headhunting, repeatable branch sales habits and human-controlled software across all seven services.</p></div><div class="value-glass-grid">${[
  ['01 / COMPETITOR MAPPING', 'Faster Critical Hiring', 'Proactive Market Mapping', 'Reach proven branch managers, commercial directors and technical specialists before they ever hit a job board.', 'radar'],
  ['02 / TECHNICAL SCREENING', 'Higher-Calibre Hires', 'Peer-Level Sector Vetting', 'Screen candidates for P&amp;L ownership, specification selling, branch margin control and long-term cultural fit.', 'award'],
  ['03 / PUBLIC UK DATA', 'Market &amp; Prospect Intelligence', 'Early Project Visibility', 'Spot England Planning Data and Find a Tender notices around your UK branches, then review dated company signals with human sign-off.', 'globe'],
  ['04 / BRANCH DISCIPLINE', 'Owned Quotes &amp; Enquiries', 'Sales Action Queue &amp; Comms', 'Surface overdue quotes and turn missed trade-counter calls into named callbacks with due dates.', 'list'],
  ['05 / CONTROLLED HANDOVER', 'Briefs &amp; Clean Delivery', 'AI Team + Verified Handovers', 'Turn approved company documents into fast, verifiable commercial briefs and confirm won deals cleanly in Business Delivery.', 'file'],
  ['06 / DATA BOUNDARIES', 'Separated CRM &amp; True Wins', 'Business CRM vs Personal CRM', 'Keep team accounts and 30-day renewal checks visible while isolating private Personal CRM records and measuring campaign wins.', 'lock']
].map(([num, title, highlight, desc, icn]) => `<article class="value-glass-card"><div class="value-card-top">${iconBadge(icn, 'glass')}<span class="value-num">${num}</span></div><h3>${title}</h3><p class="value-highlight">${highlight}</p><p>${desc}</p></article>`).join('')}</div></div></section>`;

const homeStrategicDifference = () => `<section class="difference-white-section" id="strategic-difference" aria-labelledby="diff-heading"><div class="wrap"><div class="pillars-head light"><p class="eyebrow" style="justify-content:center;color:#7a6015"><span></span>WHY POWER-UP TALENT<span></span></p><h2 id="diff-heading">THE STRATEGIC <em>DIFFERENCE.</em></h2><p>Power-Up Talent is not a traditional recruitment agency. We are a specialist consultancy working with <strong>one organisation per sector at a time</strong> — uniting elite headhunting with workplace coaching and seven human-controlled business platforms.</p></div><div class="crm-split-grid">${[
  ['HEADHUNTING & PASSIVE CANDIDATES', 'We combine direct headhunting with proactive passive talent mapping under absolute discretion. We work with one organisation per sector at a time — choosing Power-Up Talent means your competitors cannot access our active search focus in your market.'],
  ['ALL-SECTOR & FLAGSHIP LITERACY', 'We operate across all UK industry sectors while retaining deep proven heritage in electrical wholesale, technical distribution, construction/M&amp;E and engineering — ensuring peer-level vetting and grounded commercial advice.'],
  ['SECTOR EXCLUSIVITY GUARANTEE', 'We operate a strict single-client policy per agreed sector mandate. When you partner with Power-Up Talent, we block out your named direct competitors in writing so there is zero conflict of interest.'],
  ['PEOPLE + COACHING + 7 SYSTEMS', 'Hiring great leaders is step one. Where agreed, we reinforce new appointments with our six coaching programmes and seven commercial platforms across Find &amp; Win, Manage &amp; Retain, and Deliver &amp; Scale.']
].map(([title, desc], idx) => `<article class="diff-card">${iconBadge(['target', 'book', 'shield', 'layers'][idx], 'ink')}<div><span class="card-num">0${idx + 1} / DIFFERENCE</span><h3>${title}</h3><p>${desc}</p></div></article>`).join('')}</div><div class="actions" style="justify-content:center;margin-top:34px">${button('Check Your Sector Availability', '#sector-checker')}${button('Hire Top Talent', 'contact.html?interest=Critical+hire', true)}</div></div></section>`;

const homeFaq = () => `<section class="wrap faq-section" id="home-faq" aria-labelledby="home-faq-heading"><div>${eyebrow('FREQUENTLY ASKED QUESTIONS')}<h2 id="home-faq-heading">Relevant answers.<br><em>Clear boundaries.</em></h2><p style="color:var(--muted);max-width:420px">Straightforward answers covering our single-client headhunting model, coaching programmes and the seven AI &amp; business services.</p></div><div class="faqs"><details open><summary>Do you offer sector exclusivity — and what does "one company per sector" mean?</summary><p>Yes. Headhunting is our core service, and we operate a strict single-client exclusivity policy for agreed strategic sector mandates. When you retain Power-Up Talent, we agree the sector, UK region and named direct competitors in writing so we do not headhunt for your competitors during the mandate. Use our <a href="#sector-checker" style="text-decoration:underline;font-weight:600">Sector Exclusivity Checker</a> or <a href="check.html" style="text-decoration:underline;font-weight:600">Territory Review</a>.</p></details><details><summary>Which UK industry sectors do you cover?</summary><p>We partner across all UK industry sectors—including B2B Sales &amp; Distribution, Industrial &amp; Supply Chain, Technology &amp; SaaS, Finance &amp; Professional Services, and Energy &amp; Facilities—retaining Electrical Wholesale, Technical Distribution, Construction/M&amp;E, and Engineering as Flagship Proven Verticals.</p></details><details><summary>What is the difference between Market Intelligence, Prospect Intelligence and AI Team?</summary><p><strong>Market Intelligence</strong> queries public UK planning and tender data by town/city or full NI postcode. <strong>Prospect Intelligence</strong> turns dated company evidence (vacancies, branch expansions, announcements) into recommendations scored separately for fit, evidence strength and contactability that a person reviews. <strong>Human-Approved AI Team</strong> prepares cited commercial briefs directly from approved company documents under human revision and final sign-off.</p></details><details><summary>How quickly do you deliver shortlists and placements?</summary><p>Shortlists are typically delivered in 14–21 days (21–28 days for C-Suite mandates) under strict NDA, with an average time to placement of 28 days and a 98% placement retention rate.</p></details><details><summary>How are Business CRM and Personal CRM kept separate?</summary><p>They run as separate workspaces with independent login and row-level isolation. Personal contacts, notes and reconnect reminders are never exposed to the commercial Business CRM workspace, even where contact email addresses match.</p></details><details><summary>Can we start with Headhunting alone or combine Coaching and the 7 platforms?</summary><p>Yes. Many clients start with a single critical hire or retained search (<a href="talent.html" style="text-decoration:underline;font-weight:600">Headhunting</a>) and later add branch manager coaching (<a href="coaching.html" style="text-decoration:underline;font-weight:600">Coaching</a>) or selected software workflows through a tailored <a href="partnerships.html" style="text-decoration:underline;font-weight:600">Growth Partnership</a>.</p></details></div></section>`;

const homeAdvisoryStrip = () => `<section class="wrap note-band offer-link-band" aria-label="Headhunting, coaching, information and sector exclusivity"><div>${eyebrow('HEADHUNTING · EXCLUSIVITY · INFORMATION HUB')}<h2 style="font-size:26px;margin-bottom:8px">Working with one organisation per sector — explore our guides or check availability.</h2><p style="margin:0">Read sector leadership briefings in our <a href="information.html" style="text-decoration:underline;font-weight:600">Information Hub</a>, review <a href="about.html" style="text-decoration:underline;font-weight:600">About Power-Up Talent</a>, or submit a <a href="contact.html?interest=Confidential+Candidate" style="text-decoration:underline;font-weight:600">Confidential Candidate Register ↗</a>.</p></div><div class="actions">${button('Check Your Sector Availability', '#sector-checker', true)}${button('Hire Top Talent', 'contact.html?interest=Critical+hire')}</div></section>`;

const homeFinalAction = () => `<section class="wrap cta cta-signature" aria-labelledby="home-cta-heading"><span class="cta-power" aria-hidden="true">${ico('power')}</span><div>${eyebrow('READY TO GROW?')}<h2 id="home-cta-heading">Ready to hire the best<br>&amp; connect your business?</h2><p>Tell us whether you need discreet headhunting with single-client sector exclusivity, team coaching, or a live demo of our seven AI &amp; business services.</p></div><div class="actions">${button('Check Your Sector Availability', '#sector-checker')}${button('Request a demo', enquiry('AI services walkthrough'), true)}</div></section>`;

const intelIcons = ['database', 'bulb', 'arrow', 'usercheck'];
const capIcons = ['globe', 'search', 'sparkle'];
const decorateIntel = html => {
  let i = 0, c = 0;
  return html
    .replace(/<li><span class="intel-step-num">/g, () => `<li>${iconBadge(intelIcons[i++] || 'check', 'gold')}<span class="intel-step-num">`)
    .replace(/<article class="crm-workspace-card"><span class="platform-status-pill">/g, () => `<article class="crm-workspace-card cap-card">${iconBadge(capIcons[c++] || 'check', 'ink')}<span class="platform-status-pill">`);
};

const homeTrustRow = () => `<ul class="hero-trust" aria-label="Why employers choose Power-Up Talent">${[
  ['shield', 'One client per sector &amp; territory'],
  ['lock', 'NDA-protected searches'],
  ['usercheck', 'Human-reviewed AI']
].map(([i, t]) => `<li>${ico(i)}<span>${t}</span></li>`).join('')}</ul>`;

const homeStatsBand = () => `<section class="stats-band" aria-label="Proven commercial metrics"><div class="wrap stats-grid">${[
  ['users', '25,000+', 'Market-Mapped UK Professionals', 'Active &amp; passive commercial, technical, and executive leaders.'],
  ['award', '98%', 'Placement Retention Rate', 'Vetted for commercial grit, margin discipline, and cultural fit.'],
  ['clock', '28 Days', 'Average Time to Placement', 'Shortlists delivered in 14–21 days under strict NDA.'],
  ['target', '1 Client', 'Per Sector &amp; Territory', 'Written exclusivity blocking your direct market competitors.']
].map(([i, n, l, d]) => `<div class="stat-item">${iconBadge(i, 'gold')}<div><strong class="stat-num">${n}</strong><span class="stat-label">${l}</span><p>${d}</p></div></div>`).join('')}</div></section>`;

const homeSectorTiles = () => `<section class="sector-tiles" aria-labelledby="sector-tiles-heading"><div class="wrap"><p class="sector-tiles-kicker" id="sector-tiles-heading">${ico('power')}<span>PROVEN ACROSS UK INDUSTRY · STRICTLY ONE CLIENT PER SECTOR</span></p><div class="sector-tile-grid">${[
  ['bolt', 'Electrical Wholesale', 'Flagship vertical · Branch &amp; commercial leaders'],
  ['truck', 'Technical Distribution', 'Flagship vertical · Account &amp; specification sales'],
  ['hardhat', 'Construction &amp; M&amp;E', 'Flagship vertical · Project &amp; operations leaders'],
  ['cog', 'Engineering &amp; Manufacturing', 'Flagship vertical · Technical &amp; general management']
].map(([i, t, d]) => `<div class="sector-tile">${iconBadge(i, 'ink')}<div><strong>${t}</strong><span>${d}</span></div></div>`).join('')}</div><div class="all-sector-strip"><span class="all-sector-label">ALL-SECTOR EXECUTIVE &amp; COMMERCIAL PRACTICE:</span><div class="all-sector-pills">${[
  'B2B Sales &amp; Distribution',
  'Industrial &amp; Supply Chain',
  'Technology &amp; SaaS',
  'Finance &amp; Professional Services',
  'Energy, Renewables &amp; Facilities',
  'Bespoke Sector Mapping (Any UK Vertical)'
].map(s => `<span class="sector-pill">${s}</span>`).join('')}</div></div></div></section>`;

export const partnershipHome = `<section class="hero offer-hero hero-handshake"><img src="assets/handshake-hero.jpg" alt="Power-Up Talent sector specialists shaking hands across executive and industrial leaders" class="hero-photo-bg" width="900" height="885" fetchpriority="high"><div class="video-overlay handshake-overlay"></div><div class="hero-grid-lines" aria-hidden="true"></div><div class="wrap hero-grid hero-grid-b2b"><div>${eyebrow('EXCLUSIVE UK HEADHUNTING, COACHING &amp; COMMERCIAL AI · ONE CLIENT PER SECTOR')}<h1 style="color:#ffffff!important">Elite Headhunters.<br><em style="color:var(--gold);font-style:normal">Exclusive</em> to Your Sector.</h1><p class="hero-copy">We map and secure the top 1% of passive commercial, operational, and executive talent across UK industry—then back every appointment with structured coaching and practical AI systems. Once you partner with us, your direct competitors cannot.</p><div class="strategic-hero-box" role="note"><div class="strategic-hero-icon" aria-hidden="true">${ico('shield')}</div><div><span class="strategic-hero-label">STRATEGIC SECTOR DIFFERENCE</span><p><strong>Core service: Headhunting.</strong> We work with <strong>one organisation per sector at a time</strong>. Choosing Power-Up Talent means your competitors cannot.</p></div></div><div class="actions">${button('Check Your Sector Availability', '#sector-checker')}${button('Explore Our 4-Pillar Model', '#strategic-pillars', true)}</div>${homeTrustRow()}<p class="hero-foot"><a href="#strategic-pillars" style="color:#ffe000;text-decoration:underline;font-weight:700">Our Core System (Strategic Pillars) ↓</a> · <a href="platforms.html" style="color:#ffffff;text-decoration:underline">AI Business Services hub</a> · <a href="about.html" style="color:#ffffff;text-decoration:underline">About Us</a> · <a href="contact.html?interest=Confidential+Candidate" style="color:#ffffff;text-decoration:underline">Confidential Candidate Register ↗</a></p></div><div class="hero-screenshot-panel" aria-label="Sales Action Queue product screenshot"><span class="hero-panel-glow" aria-hidden="true"></span>${productScreenshot('actionQueue', { eager: true })}</div></div></section>${homeStatsBand()}${homeSectorTiles()}${homeSectorChecker()}${homeThreeOffers()}${homeStrategicPillars()}${homeSevenServices()}${homeDistributorExample()}${homeValueCreationFramework()}${decorateIntel(homeHowIntelligenceWorks())}${homeStrategicDifference()}${connectedJourneyBand()}${homeCaseStudies()}${homeFaq()}${homeAdvisoryStrip()}${homeFinalAction()}`;

export const aiServicesPage = `<section class="page-hero"><video autoplay loop muted playsinline preload="metadata" class="hero-video-bg" aria-hidden="true"><source src="assets/videos/ai-hero.mp4" type="video/mp4"></video><div class="video-overlay"></div><div class="wrap">${eyebrow('POWER-UP TALENT | AI BUSINESS SERVICES HUB')}<h1>Seven commercial systems.<br><em>Choose the outcome you need first.</em></h1><p>Grouped across Find &amp; Win, Manage &amp; Retain, and Deliver &amp; Scale. Each service has its own dedicated page explaining the problems it solves, what you receive and a real workflow example.</p><div class="actions">${button('Discuss your business needs', enquiry('AI services walkthrough'))}${button('Try the guided demo', '#guided-demo', true)}</div></div></section><section class="ai-overview" aria-labelledby="ai-overview-heading"><div class="wrap"><div class="ai-centred"><h2 id="ai-overview-heading">Choose from the seven AI business services</h2></div></div></section>${connectedJourneyBand()}<section class="wrap section split"><div>${eyebrow('WALKTHROUGH &amp; DEPLOYMENT SCOPE')}<h2>See how a service fits<br>your business.</h2></div><div><p class="large-copy">We walk through how each system fits your branch or commercial team, which live provider connections are configured per tenant, and how human sign-off stays in control.</p><p>Step through the guided three-scenario demo on this page, explore the synthetic sample-data views, or combine AI services with <a href="talent.html" style="text-decoration:underline;font-weight:600">Recruitment &amp; Headhunting</a> and <a href="coaching.html" style="text-decoration:underline;font-weight:600">Coaching &amp; Development</a>.</p><div class="actions">${button('Discuss your business needs', enquiry('AI services walkthrough'))}${button('Interactive sample-data demo', 'dashboard.html', true)}</div></div></section>`;

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
