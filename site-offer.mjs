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
    plainBenefit: 'Show commitments due today and overdue in a follow-up briefing, open the original task with its saved notes, and keep Business and Personal CRM workspaces separate.',
    cardCopy: 'Show commitments due today and overdue in a follow-up briefing, and open the original task with saved notes across Business and Personal workspaces.',
    actionSummary: 'Review commitments due today and overdue in the follow-up briefing and open the original task with its saved notes.',
    description: 'Business CRM gives teams one place for accounts, contacts, commitments due today and overdue, and saved task notes. Personal CRM gives individuals a separate private workspace for personal relationships.',
    benefit: 'Keep commitments due today, overdue follow-ups and saved task notes visible across your team, with a separate private Personal workspace.',
    statusBadge: 'Available in a demo · Business & Personal CRM',
    whatYouCanTry: 'Available in a demo: review commitments due today and overdue in a follow-up briefing, open the original task with its saved notes, and switch to Personal CRM for private relationship circles and reconnect reminders.',
    ctaLabel: 'Discuss your CRM needs',
    problemsSolved: [
      'Customer history and saved task notes are scattered across personal inboxes and spreadsheets.',
      'Commitments due today or overdue slip when staff cannot jump straight to the original task.',
      'Team commercial records and private personal contacts end up mixed together.'
    ],
    whatWeOffer: [
      'Business CRM: follow-up briefing showing commitments due today and overdue, with one-click access to the original task and its saved notes, plus 30-day renewal checks.',
      'Personal CRM: a separate private workspace with independent sign-in and row-level isolation for personal relationships and reconnect reminders.',
      'Structured Sales handover import, CSV preview, duplicate review and audited merges.'
    ],
    exampleToShow: 'A team lead opens the follow-up briefing, spots commitments due today and overdue, and clicks straight into the original task with its saved notes.',
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
    plainBenefit: 'See reply drafts awaiting review, overdue callbacks and unassigned conversations in the staff overview, and open the relevant conversation directly for follow-up.',
    cardCopy: 'See reply drafts awaiting review, overdue callbacks and unassigned conversations in the staff overview and open any thread directly.',
    actionSummary: 'Review reply drafts awaiting approval, spot overdue callbacks and unassigned threads in the staff overview, and open the conversation directly.',
    description: 'Bring customer conversations into one team workspace so staff see reply drafts awaiting review, overdue callbacks and unassigned threads and open any conversation directly.',
    benefit: 'Give staff an overview of reply drafts awaiting review, overdue callbacks and unassigned conversations with direct follow-up.',
    statusBadge: 'Available in a demo · Staff overview & direct follow-up',
    whatYouCanTry: 'Available in a demo: inspect reply drafts awaiting review, overdue callbacks and unassigned conversations in the staff overview, then open the relevant conversation directly for follow-up. Gmail, WhatsApp, Twilio telephony and Calendar booking require configured tenant connections.',
    ctaLabel: 'Discuss your enquiry handling',
    problemsSolved: [
      'Reply drafts, overdue callbacks and unassigned enquiries sit in separate places with no single overview.',
      'Trade-counter callbacks and customer queries are missed when branches get busy.',
      'Staff waste time hunting for the original thread before following up.'
    ],
    whatWeOffer: [
      'Staff overview surfacing reply drafts awaiting review, overdue callbacks and unassigned conversations.',
      'Direct one-click opening into the relevant conversation for human takeover and follow-up.',
      'AI reception, web chat, email, WhatsApp and calendar booking (available once the required external provider connection is configured for your tenant).'
    ],
    exampleToShow: 'A branch supervisor opens the staff overview, sees an unassigned enquiry and an overdue callback alongside a reply draft awaiting review, and opens the conversation directly.',
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
    plainBenefit: 'Create a Delivery proposal for a recorded win and flag open opportunities whose record has gone 14 days without an update alongside Action Queue tasks.',
    cardCopy: 'Create Delivery proposals for recorded wins and flag open opportunities untouched for 14 days in the Action Queue.',
    actionSummary: 'Flag an open opportunity untouched for 14 days in the Action Queue and create a Delivery proposal for a recorded win.',
    description: 'Workspace for market research, prospect qualification, 14-day stale-opportunity alerts, Action Queue follow-up and Delivery proposal creation.',
    benefit: 'Spot stale 14-day opportunities early in the Action Queue and prepare structured Delivery proposals with agreed scope, owner and start date for recorded wins.',
    statusBadge: 'Working pilot · Tested locally with synthetic data',
    whatYouCanTry: 'Working pilot: create a Delivery proposal (agreed scope, delivery owner, start date) for a recorded win, flag open opportunities untouched for 14 days alongside Action Queue tasks, search UK Planning Data and Find a Tender notices, and review dated prospect evidence.',
    ctaLabel: 'Discuss your sales workflow',
    problemsSolved: [
      'Open opportunities go quiet for weeks without anyone noticing the record has gone stale.',
      'Won deals stall when scope, delivery owner and start date are not captured in a structured Delivery proposal.',
      'Sales teams waste time researching prospects without knowing which opportunities genuinely fit.'
    ],
    whatWeOffer: [
      'Delivery proposal builder for recorded wins capturing agreed scope, delivery owner and start date for Approval Studio import.',
      'Automatic 14-day stale-opportunity flags surfaced alongside existing follow-up tasks in the Action Queue.',
      'Market Intelligence (UK Planning Data & Find a Tender) and Prospect Intelligence with explainable fit scoring and human review gates.'
    ],
    exampleToShow: 'A salesperson sees an open opportunity flagged at 14 days without an update in the Action Queue, and creates a Delivery proposal with agreed scope, owner and start date for a recorded win.',
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
    plainBenefit: 'See the stable onboarding reference and which milestones are overdue, give the delivery owner a suggested next action, and show what evidence to gather before advancing.',
    cardCopy: 'See the stable onboarding reference, overdue milestones, suggested next actions and required evidence before advancing work.',
    actionSummary: 'Inspect the stable onboarding reference, spot overdue milestones, and review suggested next actions and required evidence.',
    description: 'Confirm onboarding with a stable reference, track overdue milestones, give the delivery owner a suggested next action and show what evidence is needed before advancing.',
    benefit: 'Keep every onboarding record traceable by its stable reference while guiding delivery owners on overdue milestones and required evidence.',
    statusBadge: 'Working pilot · Stable onboarding & milestone tracking',
    whatYouCanTry: 'Working pilot: start Delivery from an approved proposal, see the stable onboarding reference (with duplicate-safe retry), identify overdue milestones, review the suggested next action and check what evidence to gather before advancing.',
    ctaLabel: 'Discuss your onboarding process',
    problemsSolved: [
      'Delivery teams lack a stable onboarding reference when handovers are retried after an interruption.',
      'Overdue milestones go unnoticed until a customer chases for an update.',
      'Owners are unsure what evidence must be gathered before moving work to the next stage.'
    ],
    whatWeOffer: [
      'Stable onboarding reference preserved safely if staff retry the same approved proposal.',
      'Overdue milestone indicators paired with a suggested next action for the delivery owner.',
      'Clear evidence checklist showing what to gather before advancing the work.'
    ],
    exampleToShow: 'A delivery owner checks an onboarding reference, spots an overdue milestone, follows the suggested next action and logs the required evidence before advancing.',
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
    plainBenefit: 'Import Sales Growth proposals into Approval Studio, review and approve the exact scope, and see confirmed, failed or uncertain handovers with safe retry.',
    cardCopy: 'Import Sales Growth proposals into Approval Studio, approve exact scope and check or retry confirmed, failed or uncertain handovers.',
    actionSummary: 'Import a Sales Growth proposal into Approval Studio, approve its exact contents and inspect or retry uncertain receipts.',
    description: 'Import Sales Growth proposals into Approval Studio, approve the exact scope before starting Delivery, and reconcile confirmed, failed or uncertain handover receipts.',
    benefit: 'Require explicit approval on exact proposal scope and let staff check uncertain receipts or safely retry without creating duplicates.',
    statusBadge: 'Working pilot · Approval Studio & Handover Receipts',
    whatYouCanTry: 'Working pilot: import a Sales Growth proposal into Approval Studio, review and approve its exact contents (any change requires fresh approval), see confirmed, failed or uncertain handovers, and check uncertain receipts or retry the same approved handover.',
    ctaLabel: 'Discuss a process to automate',
    problemsSolved: [
      'Scope changes slip into delivery when proposals are not approved against their exact contents.',
      'Interrupted handovers leave staff unsure whether Delivery actually created the record.',
      'Retrying a failed or uncertain handover risks creating a second duplicate onboarding record.'
    ],
    whatWeOffer: [
      'Approval Studio import for Sales Growth proposals where any content change requires fresh approval.',
      'Clear handover status showing confirmed, failed or uncertain outcomes.',
      'Receipt inspection and idempotent retry of the same approved handover without creating duplicates.'
    ],
    exampleToShow: 'An operator imports a Sales Growth proposal into Approval Studio, approves its exact contents, and safely retries an interrupted handover without creating a second record.',
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
    plainBenefit: 'See hiring signals awaiting human review in the Research Workbench, open the saved evidence, and pick up an unresolved finding in a later session.',
    cardCopy: 'Review hiring signals in the Research Workbench, open saved evidence and resume unresolved findings across sessions.',
    actionSummary: 'Inspect hiring signals awaiting human review in the Research Workbench and resume an unresolved finding later.',
    description: 'AI Team & Power Command Centre lets staff inspect hiring signals awaiting human review in the Research Workbench, open saved evidence and resume unresolved findings later.',
    benefit: 'Keep hiring-signal reviews, saved source evidence and multi-session research findings under human judgement.',
    statusBadge: 'Working pilot · Research Workbench & Human Review',
    whatYouCanTry: 'Working pilot: view hiring signals awaiting human review in the Research Workbench, open the saved source evidence, and pick up an unresolved finding in a later session alongside approved-source commercial briefs.',
    ctaLabel: 'Discuss an AI Team pilot',
    problemsSolved: [
      'Hiring signals and account research lose context when a reviewer has to pause mid-session.',
      'Teams need direct access to saved source evidence before approving any outreach or brief.',
      'Unconstrained AI tools act without human sign-off on sensitive commercial findings.'
    ],
    whatWeOffer: [
      'Research Workbench displaying hiring signals awaiting human review with saved source evidence.',
      'Persistent session state so staff can pick up an unresolved finding in a later session.',
      'Approved-source brief preparation with explicit revision control and human sign-off.'
    ],
    exampleToShow: 'A manager opens the Research Workbench, inspects saved evidence on a hiring signal awaiting review, and picks up an unresolved finding in the next session.',
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
    plainBenefit: 'Compare two weeks of campaign and finance imports to see changes in cost per attended meeting, cost per win and contribution while missing figures remain unknown.',
    cardCopy: 'Compare two weeks of campaign and finance imports across cost per attended meeting, cost per win and contribution.',
    actionSummary: 'Compare two weeks of campaign and finance imports for cost per attended meeting, cost per win and contribution.',
    description: 'Compare two weeks of campaign and finance imports to track cost per attended meeting, cost per win and contribution without inventing missing figures.',
    benefit: 'Track changes in cost per attended meeting, cost per win and contribution across weeks while missing figures stay clearly marked unknown.',
    statusBadge: 'Available in a demo · Week-on-week campaign & finance comparison',
    whatYouCanTry: 'Available in a demo: compare two weeks of campaign and finance imports to see changes in cost per attended meeting, cost per win and contribution, while keeping unattributed outcomes visible and missing figures explicitly marked unknown.',
    ctaLabel: 'Discuss your marketing workflow',
    problemsSolved: [
      'Teams cannot see week-on-week shifts in cost per attended meeting, cost per win or contribution.',
      'Missing finance inputs get silently zeroed out or guessed instead of staying clearly marked unknown.',
      'Unattributed enquiries and duplicate prospect IDs distort campaign reporting.'
    ],
    whatWeOffer: [
      'Two-week comparison of campaign and finance imports showing cost per attended meeting, cost per win and contribution.',
      'Honest accounting where missing finance figures remain explicitly unknown and duplicate prospect IDs are rejected.',
      'Unattributed row visibility alongside Planned content calendars and social publishing.'
    ],
    exampleToShow: 'A marketer compares two weeks of campaign and finance imports, checks the change in cost per attended meeting, cost per win and contribution, and sees missing figures marked unknown.',
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

const whatYouCanDoSection = () => `<section class="wrap section" id="what-you-can-do" aria-labelledby="what-you-can-do-heading"><div class="section-head"><div>${eyebrow('ACROSS ALL SEVEN SERVICES')}<h2 id="what-you-can-do-heading">What you can do with Power-Up</h2></div><p>Each of the seven separate applications gives staff clear visibility and control over their daily commercial work. Validated locally with synthetic data.</p></div><div class="service-directory-grid">${[
  ['sales', 'sales-intelligence', 'Sales Intelligence / Sales Growth', 'Create a Delivery proposal for a recorded win and flag open opportunities untouched for 14 days in the Action Queue.'],
  ['crm', 'crm', 'Core Business CRM / Kindred', 'Review commitments due today and overdue in a follow-up briefing and open the original task with its saved notes across Business and Personal workspaces.'],
  ['communications', 'communications', 'Power-Up Communications', 'See reply drafts awaiting review, overdue callbacks and unassigned conversations in the staff overview and open any thread directly.'],
  ['delivery', 'business-delivery', 'Business Delivery', 'See the stable onboarding reference, spot overdue milestones, follow suggested next actions and gather required evidence before advancing.'],
  ['automation', 'automation', 'Power-Up Automation', 'Import Sales Growth proposals into Approval Studio, approve exact scope and check or safely retry confirmed, failed or uncertain handovers.'],
  ['ai-team', 'ai-team', 'Power-Up AI Team', 'Review hiring signals awaiting human review in the Research Workbench, open saved evidence and resume unresolved findings later.'],
  ['marketing', 'marketing-social-media', 'Marketing &amp; Social Media', 'Compare two weeks of campaign and finance imports for cost per attended meeting, cost per win and contribution while missing figures remain unknown.']
].map(([id, slug, name, outcome]) => `<article class="service-directory-card"><a class="service-card-main" href="${slug}.html"><span class="service-brand-icon"><img src="assets/services-v2/${id}.svg" width="34" height="34" alt="" loading="lazy"></span><h3>${name}</h3><p>${outcome}</p><span class="service-explore">View ${name} ${arrow}</span></a></article>`).join('')}</div></section>`;

const wonDealHandoverSection = () => `<section class="wrap section editorial-centrepiece" id="won-deal-handover" aria-labelledby="won-deal-handover-heading"><div class="centrepiece-header"><div>${eyebrow('STAFF-LED HANDOVER · PROPOSAL EXPORT &amp; IMPORT')}<h2 id="won-deal-handover-heading">From won deal to confirmed onboarding</h2><p>A staff-led workflow using a proposal export and import across three separate applications. Verified locally with synthetic data; live deployment, unattended scheduling and provider activation remain outside this update.</p></div></div><ol class="intel-pipeline-grid handover-steps-3col"><li><span class="intel-step-num">STEP 01 · SALES GROWTH</span><h3>Prepare the handover.</h3><p>Record the win and create a proposal with the agreed scope, delivery owner and start date.</p><div class="intel-chip"><a href="sales-intelligence.html" style="text-decoration:underline">Sales Intelligence / Sales Growth ↗</a></div></li><li><span class="intel-step-num">STEP 02 · AUTOMATION</span><h3>Review and approve.</h3><p>Import the proposal into Approval Studio and approve its exact contents. A change requires fresh approval.</p><div class="intel-chip"><a href="automation.html" style="text-decoration:underline">Power-Up Automation ↗</a></div></li><li><span class="intel-step-num">STEP 03 · BUSINESS DELIVERY</span><h3>Confirm onboarding.</h3><p>Start Delivery and see the onboarding reference. If the response is interrupted, staff can retry the same approved proposal without creating a second record.</p><div class="intel-chip ok"><a href="business-delivery.html" style="text-decoration:underline">Business Delivery ↗</a></div></li></ol></section>`;

export const partnershipHome = `<section class="hero offer-hero hero-handshake"><img src="assets/handshake-hero.jpg" alt="Power-Up Talent commercial team greeting" class="hero-photo-bg" width="900" height="885" fetchpriority="high"><div class="video-overlay handshake-overlay"></div><div class="hero-grid-lines" aria-hidden="true"></div><div class="wrap hero-grid hero-grid-b2b"><div>${eyebrow('POWER-UP TALENT · SEVEN CONNECTED B2B SERVICES')}<h1 style="color:#ffffff!important">Find the right opportunities.<br><em style="color:var(--gold);font-style:normal">Give every next step</em> an owner.</h1><p class="hero-copy">Power-Up Talent brings market research, prospect qualification, customer follow-up and business delivery into one suite. See what changed, check the source, and give your team a clear next action.</p><div class="actions">${button('Request a demo', enquiry('AI services walkthrough'))}${button('Explore the seven services', '#seven-services', true)}</div>${homeTrustRow()}<p class="hero-foot"><a href="#won-deal-handover" style="color:#ffe000;text-decoration:underline;font-weight:700">From won deal to confirmed onboarding ↓</a> · <a href="platforms.html" style="color:#ffffff;text-decoration:underline">All 7 services</a> · <a href="dashboard.html" style="color:#ffffff;text-decoration:underline">Interactive sample demo</a> · <a href="contact.html" style="color:#ffffff;text-decoration:underline">Contact us ↗</a></p></div><div class="hero-screenshot-panel" aria-label="Sales Action Queue product screenshot"><span class="hero-panel-glow" aria-hidden="true"></span>${productScreenshot('actionQueue', { eager: true })}</div></div></section>${whatYouCanDoSection()}${wonDealHandoverSection()}${homeDistributorExample()}${homeSevenServices()}${decorateIntel(homeHowIntelligenceWorks())}${connectedJourneyBand()}${homeFaq()}${homeFinalAction()}`;

export const aiServicesPage = `<section class="page-hero"><video autoplay loop muted playsinline preload="metadata" class="hero-video-bg" aria-hidden="true"><source src="assets/videos/ai-hero.mp4" type="video/mp4"></video><div class="video-overlay"></div><div class="wrap">${eyebrow('POWER-UP TALENT | SEVEN SERVICES')}<h1>Seven services for finding work,<br><em>following up and delivering it.</em></h1><p>Explore Sales &amp; Intelligence, Business &amp; Personal CRM, Communications, Business Delivery, Automation, AI Team &amp; Power Command Centre, and Marketing &amp; Social Media.</p><div class="actions">${button('Request a demo', enquiry('AI services walkthrough'))}${button('Try the guided demo', '#guided-demo', true)}</div></div></section>${whatYouCanDoSection()}${wonDealHandoverSection()}<section class="ai-overview" aria-labelledby="ai-overview-heading"><div class="wrap"><div class="ai-centred"><h2 id="ai-overview-heading">Explore the seven services</h2></div></div></section>${connectedJourneyBand()}<section class="wrap section split"><div>${eyebrow('WALKTHROUGH &amp; DEMO SCOPE')}<h2>See how each service<br>supports your team.</h2></div><div><p class="large-copy">Every service page explains who it is for, what it does, what work it improves, a concrete example, and what was validated locally with synthetic data versus planned capabilities.</p><p>Step through the guided three-scenario demo on this page or inspect the synthetic sample-data views before requesting a walkthrough.</p><div class="actions">${button('Request a demo', enquiry('AI services walkthrough'))}${button('Interactive sample-data demo', 'dashboard.html', true)}</div></div></section>`;

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
