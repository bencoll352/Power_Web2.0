import { productScreenshot } from './suite-screenshots.mjs';
import { ico, iconBadge } from './icons.mjs';

const arrow = '<span aria-hidden="true">↗</span>';
const eyebrow = text => `<p class="eyebrow"><span></span>${text}</p>`;
const button = (text, href = '/contact', secondary = false) => `<a class="button ${secondary ? 'secondary' : ''}" href="${href}">${text}${arrow}</a>`;
const enquiry = interest => `/contact?interest=${encodeURIComponent(interest)}`;
const icon = (id, title) => `<img src="assets/services-v2/${id}.svg" alt="${title} icon" width="36" height="36" loading="lazy">`;

export const aiGroups = [
  {
    id: 'crm',
    title: 'CRM',
    displayTitle: 'Business / Personal CRM',
    bucket: 'manage-retain',
    bestFor: 'Directors, sales leaders and account teams',
    hubProblem: 'Commitments due today and overdue slip while team account records and private contacts get mixed together.',
    hubWorkflow: 'Surfaces due or overdue commitments in a follow-up briefing and opens the source task with saved notes across separate Business and Personal workspaces.',
    hubGain: 'Clear account ownership and timely follow-up without exposing private personal relationships to the team workspace.',
    outcomeLine: 'Keep team account history, follow-ups, and 30-day renewals visible while keeping personal networks private.',
    short: 'Know who needs your attention.',
    plainBenefit: 'Surface due or overdue commitments in a follow-up briefing, open the source task with saved notes, and keep Business and Personal workspaces separate.',
    cardCopy: 'Surface due or overdue commitments and open source tasks across separate Business and Personal workspaces.',
    actionSummary: 'Review commitments due today and overdue in the follow-up briefing and open the original task with its saved notes.',
    description: 'Business CRM gives teams one place for accounts, contacts, commitments due today and overdue, and saved task notes. Personal CRM gives individuals a separate private workspace for personal relationships.',
    benefit: 'Keep commitments due today, overdue follow-ups and saved task notes visible across your team, with a separate private Personal workspace.',
    statusBadge: 'Sample-data demo',
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
    roles: 'Managing directors, sales leaders, operations managers, account teams and individual professionals who want clear account ownership without mixing commercial data and private contacts.',
    practicalExample: 'Business CRM: an account lead imports a reviewed Sales export via CSV/JSON preview, assigns ownership, and catches a key client account renewing in 21 days with no review booked. Personal CRM: a director sets a quarterly reconnect reminder in their own private workspace with separate sign-in and records.',
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
    bestFor: 'Client service leads and operations teams',
    hubProblem: 'Unassigned enquiries, overdue callbacks and unreviewed reply drafts sit in separate places and slow down responses.',
    hubWorkflow: 'Prioritises unassigned enquiries, overdue callbacks and response drafts awaiting review in one staff overview with direct thread access.',
    hubGain: 'Every inbound enquiry gets a named human owner and timely callback without hunting across inboxes.',
    outcomeLine: 'Capture every call, enquiry, and callback in one shared workspace with a named human owner and due date.',
    short: 'Give every customer enquiry a next step.',
    plainBenefit: 'Prioritise unassigned enquiries, overdue callbacks and response drafts awaiting review in the staff overview, then open the thread directly.',
    cardCopy: 'Prioritise unassigned enquiries, overdue callbacks and response drafts awaiting review.',
    actionSummary: 'Review reply drafts awaiting approval, spot overdue callbacks and unassigned threads in the staff overview, and open the conversation directly.',
    description: 'Bring customer conversations into one team workspace so staff see reply drafts awaiting review, overdue callbacks and unassigned threads and open any conversation directly.',
    benefit: 'Give staff an overview of reply drafts awaiting review, overdue callbacks and unassigned conversations with direct follow-up.',
    statusBadge: 'Sample-data demo',
    whatYouCanTry: 'Available in a demo: inspect reply drafts awaiting review, overdue callbacks and unassigned conversations in the staff overview, then open the relevant conversation directly for follow-up. Gmail, WhatsApp, Twilio telephony and Calendar booking require configured tenant connections.',
    ctaLabel: 'Discuss your enquiry handling',
    problemsSolved: [
      'Reply drafts, overdue callbacks and unassigned enquiries sit in separate places with no single overview.',
      'Urgent client callbacks and customer queries are missed when teams get busy.',
      'Staff waste time hunting for the original thread before following up.'
    ],
    whatWeOffer: [
      'Staff overview surfacing reply drafts awaiting review, overdue callbacks and unassigned conversations.',
      'Direct one-click opening into the relevant conversation for human takeover and follow-up.',
      'AI reception, web chat, email, WhatsApp and calendar booking (available once the required external provider connection is configured for your tenant).'
    ],
    exampleToShow: 'An operations supervisor opens the staff overview, sees an unassigned enquiry and an overdue callback alongside a reply draft awaiting review, and opens the conversation directly.',
    roles: 'Client service teams, front-desk staff, customer service leads and operations managers handling inbound calls and enquiries.',
    practicalExample: 'Fictional sandbox example: urgent enquiry ENQ-402 ("Need urgent confirmation on project delivery schedule for Monday") lands unassigned in Needs Attention, is claimed by Sarah Jenkins, and gets a 14:00 dated callback using approved account notes.',
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
    use: 'A fictional client enquiry lands in Needs Attention and receives a named owner and 14:00 callback.'
  },
  {
    id: 'sales',
    title: 'Sales & Intelligence',
    displayTitle: 'Sales & Intelligence',
    bucket: 'find-win',
    bestFor: 'Commercial directors and sales teams',
    hubProblem: 'Open opportunities go quiet for weeks, meeting outcomes are not logged consistently and won deals lack structured handover briefs.',
    hubWorkflow: 'Surfaces stale opportunities (14+ days without an update), records meeting outcomes and prepares a delivery proposal for each recorded win.',
    hubGain: 'Focused daily pipeline follow-up and clean, owner-assigned proposals ready for handover.',
    outcomeLine: 'Spot UK projects early, track competitor moves, and turn quote pipelines into owned daily actions.',
    short: 'See which opportunities deserve your next move.',
    plainBenefit: 'Surface stale opportunities, record meeting outcomes and prepare a delivery proposal for a recorded win alongside Action Queue tasks.',
    cardCopy: 'Surface stale opportunities, record meeting outcomes and prepare a delivery proposal for a recorded win.',
    actionSummary: 'Flag an open opportunity untouched for 14 days in the Action Queue and create a Delivery proposal for a recorded win.',
    description: 'Workspace for market research, prospect qualification, 14-day stale-opportunity alerts, meeting outcomes and Delivery proposal creation.',
    benefit: 'Spot stale 14-day opportunities early, log meeting outcomes and prepare structured Delivery proposals for recorded wins.',
    statusBadge: 'Working pilot',
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
    roles: 'Commercial directors, business development managers, regional sales managers and account teams.',
    practicalExample: 'Commercial manager example (Leeds B2B supplier): first check Planning Data and Find a Tender within 25 miles of Leeds (30/90 days, keyword "expansion"). Then import "Apex Commercial Group,B2B Services,Leeds,Labelled fixture", review its dated office-expansion Source fact and Sales interpretation, select "Accept and assign" to add an owned follow-up task in the Sales Action Queue, and track the resulting quote through to handover.',
    relatedIds: ['crm', 'delivery'],
    outcomes: [
      ['Market intelligence from free public UK sources', 'Search UK towns/cities or full NI postcodes across Planning Data (England participating authorities) and Find a Tender (up to 300 UK notices by delivery region) without paid API keys or AI credits.'],
      ['Prospect intelligence with explicit human review', 'Turn dated vacancies, site expansions and company announcements into a Source fact, Sales interpretation and Next step — keeping fit, evidence strength and contactability separate.'],
      ['Action Queue, quote tracking & structured exports', 'Prioritise overdue quotes (one tracked quote per prospect), keep outreach drafts under human approval, and export structured JSON for Delivery and Marketing.']
    ],
    featureGroups: [
      ['Market Intelligence: local UK activity', 'Enter a UK town/city or full Northern Ireland postcode, pick a 30- or 90-day lookback and radius (5–100 miles), plus an optional title keyword such as "expansion" or "refurbishment". Queries Planning Data (England participating authorities; capped at 100 applications, top 10 shown) and Find a Tender (scans up to 300 notices by wider delivery region with partial-coverage notices), linking directly to original public records and surfacing honest outage messages with zero AI credits.'],
      ['Prospect Intelligence: CSV, filters & dated evidence', 'Import mapped CSVs (company,sector,location,source) and filter by sector, account owner, signal type (Vacancy, Expansion, Company announcement), evidence freshness (current/stale) and status (pending, accepted, research, rejected, revoked). Stores dated source links, Source fact, Sales interpretation and Suggested next step while scoring customer fit, evidence strength and contactability independently.'],
      ['Human decision & Action Queue assignment', 'Reviewers choose Accept and assign (owner + due date straight into the Sales Action Queue), Further research, Reject, or Revoke with reason. Stale evidence is blocked from acceptance until refreshed. Accepted prospects move cleanly into owned Action Queue tasks and CRM handover prep.'],
      ['Sales workflow, quotes & structured JSON exports', 'Configurable 60/40 ICP fit scoring with hard exclusions, human-executed approved task sequences, one active tracked quote per prospect surfaced when overdue, and manual JSON exports for Business Delivery and Marketing outcomes. Automated enrichment, continuous scraping and live email sending remain Planned.']
    ],
    marketIntelligence: {
      heading: 'Market Intelligence: public UK data',
      exampleTitle: 'Example · Leeds regional opportunity search',
      exampleBody: 'A regional sales lead enters "Leeds", selects a 25-mile radius, 90-day lookback and optional keyword "expansion" to spot nearby commercial developments on Planning Data and regional tenders on Find a Tender, clicking straight through to the original government records before deciding which accounts to target.',
      bullets: [
        'Search any UK town/city or full Northern Ireland postcode with 5, 10, 25, 50 or 100-mile radius and 30/90-day lookback.',
        'Planning Data (planning.data.gov.uk): covers participating local authorities in England (coverage varies by area; capped at first 100 matching records, displaying top 10).',
        'Find a Tender (find-tender.service.gov.uk): scans up to 300 recent UK procurement notices matched by declared delivery region (wider area than radius; clearly flags partial results).',
        'Displays direct links to source records and clear temporary outage messages.'
      ]
    },
    prospectIntelligence: {
      heading: 'Prospect Intelligence: sourced evidence reviewed by a person',
      exampleTitle: 'Example · Regional office expansion signal',
      exampleBody: 'An imported target ("Apex Commercial Group · Leeds · Office expansion") arrives with dated Source fact, Sales interpretation ("likely demand for commercial onboarding and regional supply support") and Suggested next step. The commercial lead sees High Fit even if phone details are still missing, selects Accept and assign, sets owner + due date, and creates an Action Queue task ready for CRM handover.',
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
    extra: 'Market & Prospect Intelligence run as a tested working pilot alongside core Action Queue and quote-tracking workflows; live email sending and auto-enrichment are not active.',
    use: 'Search Leeds projects in Market Intelligence, review an expansion signal in Prospect Intelligence and assign its Action Queue follow-up.'
  },
  {
    id: 'delivery',
    title: 'Business Delivery',
    displayTitle: 'Business Delivery',
    bucket: 'deliver-scale',
    bestFor: 'Operations directors and onboarding leads',
    hubProblem: 'Won deals arrive without a consistent reference, overdue milestones slip unnoticed and teams lack clear stage evidence.',
    hubWorkflow: 'Gives onboarding a stable reference, assigns ownership, flags overdue milestones and shows what evidence is needed to advance.',
    hubGain: 'Traceable, duplicate-safe customer onboarding with clear accountability at every milestone.',
    outcomeLine: 'Turn won deals into clean customer onboarding records with agreed scope, start dates, and zero duplicate admin.',
    short: 'Start delivery with a clear brief.',
    plainBenefit: 'Give onboarding a stable reference, assign ownership, flag overdue milestones and show what evidence is needed to advance.',
    cardCopy: 'Give onboarding a stable reference, assign ownership, flag overdue milestones and show required evidence.',
    actionSummary: 'Inspect the stable onboarding reference, spot overdue milestones, and review suggested next actions and required evidence.',
    description: 'Confirm onboarding with a stable reference, assign ownership, flag overdue milestones and show what evidence is needed before advancing.',
    benefit: 'Keep every onboarding record traceable by its stable reference while guiding delivery owners on overdue milestones and required evidence.',
    statusBadge: 'Working pilot',
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
    roles: 'Operations directors, delivery managers, team leads and onboarding coordinators taking over won accounts.',
    practicalExample: 'Operations imports reviewed handover Ref HO-2026-041 from Sales, verifies the signed agreement, assigns Tom Vance as delivery owner starting 18 November, and confirms repeat imports keep the single record intact.',
    relatedIds: ['sales', 'automation'],
    outcomes: [
      ['Reviewed Sales export -> won confirmation', 'Import the reviewed Sales handover and confirm won status before an onboarding record can be created.'],
      ['Agreed scope, delivery owner & start date', 'Store who leads delivery, what was agreed commercially and when onboarding starts in one structured list.'],
      ['Repeat-import duplicate protection', 'Recognise existing handover references automatically on retry so repeat submissions never duplicate work.']
    ],
    featureGroups: [
      ['Reviewed Sales export import (pilot)', 'Reads the reviewed won-deal handover JSON exported by Sales or passed from Automation.'],
      ['Won & agreed-scope gate', 'Confirms won deal status and agreed scope before opening onboarding for the client account.'],
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
    bestFor: 'Operations leads and commercial coordinators',
    hubProblem: 'Overdue Automation cases, missing stage evidence and unapproved scope edits create handover errors or duplicate records.',
    hubWorkflow: 'Includes the Live in Power CRM on-demand Automation briefing (flagging overdue cases, missing evidence and drafts) plus the Approval Studio working pilot to review exact handover scope, check outcomes and safely retry.',
    hubGain: 'Catch slipping Automation cases early in Power CRM and keep Sales-to-Delivery handovers auditable and duplicate-safe.',
    outcomeLine: 'Flag overdue Automation cases live in Power CRM and keep Sales-to-Delivery handovers approved and auditable.',
    short: 'See what needs attention before it slips.',
    plainBenefit: 'Live in Power CRM: generate an on-demand Automation briefing flagging overdue cases, missing stage evidence and drafts awaiting review. Separately, Approval Studio (working pilot) reviews exact handover scope and safely retries approved proposals.',
    cardCopy: 'Review exact handover scope, check outcomes and safely retry approved proposals — alongside the separate Live in Power CRM Automation briefing.',
    actionSummary: 'Generate the Live in Power CRM Automation briefing or review exact proposal scope and handover outcomes in Approval Studio (working pilot).',
    description: 'Combine the Live in Power CRM Automation briefing (for overdue cases, missing stage evidence and drafts awaiting review) with the Approval Studio working pilot for exact-scope handover review and safe retry.',
    benefit: 'Catch overdue Automation cases live in Power CRM and require explicit approval on exact proposal scope before handover.',
    statusBadge: 'Live in Power CRM · Working pilot',
    liveBriefing: {
      badge: 'Live in Power CRM',
      heading: 'See what needs attention before it slips.',
      copy: 'Generate a briefing that flags overdue Automation cases, missing stage evidence and drafts awaiting review. Open the source case, see who owns the next step and send a draft to Personal AI Team for approval.',
      accessPath: 'Outreach Centre → Service Desk → Generate briefing',
      verificationNote: 'Runs on demand for the Automation category for signed-in owners in Power CRM. The signed-in workflow passed in the Firebase emulator. Verify any later change before expanding claims.'
    },
    whatYouCanTry: 'Live in Power CRM: signed-in owners generate an on-demand Automation briefing under Outreach Centre → Service Desk → Generate briefing. Working pilot (separate): import a Sales Growth proposal into Approval Studio, approve its exact contents, check outcomes and safely retry the same approved proposal where supported.',
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
    roles: 'Operations leads, commercial coordinators and multi-team operators managing handovers between Sales and Delivery.',
    practicalExample: 'A regional client deal moves from Sales to Business Delivery. Delivery records the onboarding item and returns a "created" receipt; retrying the same handover reference returns "already_exists" without creating a duplicate.',
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
    bestFor: 'Leadership and commercial research teams',
    hubProblem: 'Research loses context between sessions and unconstrained AI drafts lack traceable supporting evidence or staff sign-off.',
    hubWorkflow: 'Reviews hiring signals, links back to supporting source evidence and prepares drafts from approved material for staff review.',
    hubGain: 'Faster research and briefing preparation with supporting evidence always visible and final approval in human hands.',
    outcomeLine: 'Turn approved company documents into fast, verifiable commercial briefs with final sign-off always in human hands.',
    short: 'Give your team more capacity for research and preparation.',
    plainBenefit: 'Review hiring signals, refer back to supporting evidence and prepare drafts for staff review in the Research Workbench.',
    cardCopy: 'Review hiring signals, refer back to supporting evidence and prepare drafts for staff review.',
    actionSummary: 'Inspect hiring signals awaiting human review in the Research Workbench and resume an unresolved finding later.',
    description: 'AI Team & Power Command Centre lets staff review hiring signals, refer back to supporting evidence and prepare drafts for staff review.',
    benefit: 'Keep hiring-signal reviews, saved source evidence and draft approvals under explicit human judgement.',
    statusBadge: 'Working pilot',
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
    roles: 'Commercial managers, operations directors, account leads and team heads preparing account reviews and handover briefs.',
    practicalExample: 'Manager account-review briefing: ahead of a quarterly client review, a commercial manager uploads approved account notes, recent quote history and order summaries. The AI Team prepares a source-cited brief citing the exact supplied passages; the manager requests one revision tightening margin context, reviews the update, and records final sign-off.',
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
    bestFor: 'Managing directors and marketing leads',
    hubProblem: 'Campaign reporting either hides unattributed leads or silently guesses missing cost figures instead of showing true contribution.',
    hubWorkflow: 'Compares recorded costs, revenue and contribution across campaigns from imported sales and finance data, marking missing figures as unknown.',
    hubGain: 'Honest campaign attribution showing cost per attended meeting, cost per win and contribution with zero invented numbers.',
    outcomeLine: 'Connect every campaign directly to qualified meetings and won margin—eliminating wasted spend.',
    short: 'See what your marketing turns into.',
    plainBenefit: 'Compare recorded costs, revenue and contribution across campaigns while keeping missing figures explicitly marked as unknown.',
    cardCopy: 'Compare recorded costs, revenue and contribution across campaigns and mark missing figures as unknown.',
    actionSummary: 'Compare two weeks of campaign and finance imports for cost per attended meeting, cost per win and contribution.',
    description: 'Compare recorded costs, revenue and contribution across campaigns without inventing missing figures.',
    benefit: 'Track changes in cost per attended meeting, cost per win and contribution across weeks while missing figures stay clearly marked unknown.',
    statusBadge: 'Sample-data demo',
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
    practicalExample: 'At month-end, marketing exports the Sales outcomes JSON from Sales & Intelligence and loads it in the Marketing browser view. The team compares two regional B2B campaigns by won orders, spots 4 Unattributed deals needing source tagging, and sees an accidental duplicate prospect ID safely rejected.',
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

export const connectedJourneyBand = () => `<section class="ai-connect-band" id="connected-journey" aria-labelledby="connected-journey-heading"><div class="wrap"><div>${eyebrow('FROM OPPORTUNITY TO DELIVERY · END-TO-END ROUTE')}<h2 id="connected-journey-heading">From opportunity<br>to delivery.</h2><p>Walk through how a fictional UK B2B organisation (<strong>Midlands &amp; Leeds Commercial Group</strong>) moves an opportunity from first local signal to onboarding and marketing outcome review.</p><p class="connect-honesty"><strong>Transfer accuracy:</strong> Every handoff below is labelled with its actual mechanism — public lookup, human review, manual export/upload, operator step or verified integration — rather than claiming silent automatic syncing.</p></div><ol class="connected-steps-list"><li><div class="step-icon-wrap">${iconBadge('globe', 'glass')}</div><span>01 · <a href="sales-intelligence.html#market-intelligence">Market Intelligence</a> <em>Public data lookup (no paid API or AI credits)</em></span><strong>Research an area and inspect a public notice.</strong><p>A commercial manager searches Leeds (25-mile radius, 90-day lookback, keyword “expansion”) across England Planning Data and Find a Tender notices, opening original government records.</p></li><li><div class="step-icon-wrap">${iconBadge('radar', 'glass')}</div><span>02 · <a href="sales-intelligence.html#prospect-intelligence">Prospect Intelligence</a> <em>Mapped CSV upload + Human review</em></span><strong>Import a target company and add a dated source.</strong><p>The team imports <code>company,sector,location,source</code>, reviews dated expansion evidence (Source fact → Interpretation → Next step), and evaluates fit, evidence and contactability on their own merits.</p></li><li><div class="step-icon-wrap">${iconBadge('list', 'glass')}</div><span>03 · <a href="sales-intelligence.html">Sales Action Queue</a> <em>In-app review &amp; assignment</em></span><strong>Review the recommendation and assign a follow-up.</strong><p>An accepted recommendation is assigned to a workspace member with a due date in the Sales Action Queue, alongside pipeline notes and overdue quote follow-up.</p></li><li><div class="step-icon-wrap">${iconBadge('database', 'glass')}</div><span>04 · <a href="crm.html">Business &amp; Personal CRM</a> &amp; <a href="communications.html">Communications</a> <em>Structured Sales export → CRM / Team inbox</em></span><strong>Log a callback or meeting and manage account ownership.</strong><p>Inbound client enquiries receive a named human owner and dated callback in Communications, while Business CRM tracks account ownership and Personal CRM keeps private reminders separate.</p></li><li><div class="step-icon-wrap">${iconBadge('cog', 'glass')}</div><span>05 · <a href="automation.html">Automation</a> &amp; <a href="business-delivery.html">Business Delivery</a> <em>Structured export + Operator step (<code>handover.js</code>)</em></span><strong>Export the qualified opportunity and pass won work to Delivery.</strong><p>After a win is confirmed, an operator runs <code>handover.js</code> (returning <code>created</code>, <code>already_exists</code> or <code>unconfirmed</code>) so Business Delivery saves one onboarding record with agreed scope, owner and start date.</p></li><li><div class="step-icon-wrap">${iconBadge('chart', 'glass')}</div><span>06 · <a href="marketing-social-media.html">Marketing &amp; Social Media</a> <em>Manual Sales export → Browser upload</em></span><strong>Upload Sales outcomes to see which source contributed to the win.</strong><p>Marketing uploads the Sales outcomes export to compare qualified prospects, attended meetings, wins and <code>Unattributed</code> rows without duplicate prospect IDs.</p></li><li><div class="step-icon-wrap">${iconBadge('sparkle', 'glass')}</div><span>07 · <a href="ai-team.html">AI Team</a> <em>Human revision &amp; acceptance</em></span><strong>Prepare an internal briefing from approved material.</strong><p>Using only approved company documents, the Chief of Staff prepares an extractive brief; a manager reviews the cited passages, requests revisions and records human acceptance.</p></li></ol></div></section>`;

const whatYouCanDoSection = () => `<section class="wrap section" id="what-you-can-do" aria-labelledby="what-you-can-do-heading"><div class="section-head"><div>${eyebrow('ACROSS ALL SEVEN SERVICES')}<h2 id="what-you-can-do-heading">What you can do with Power-Up</h2></div><p>Each of the seven separate applications gives staff clear visibility and control over their daily commercial work. Validated locally with synthetic data.</p></div><div class="capability-matrix-grid">${[
  ['sales', 'sales-intelligence', 'Sales Intelligence / Sales Growth', 'Create a Delivery proposal for a recorded win and flag open opportunities untouched for 14 days in the Action Queue.'],
  ['crm', 'crm', 'Core Business CRM / Kindred', 'Review commitments due today and overdue in a follow-up briefing and open the original task with its saved notes across Business and Personal workspaces.'],
  ['communications', 'communications', 'Power-Up Communications', 'See reply drafts awaiting review, overdue callbacks and unassigned conversations in the staff overview and open any thread directly.'],
  ['delivery', 'business-delivery', 'Business Delivery', 'See the stable onboarding reference, spot overdue milestones, follow suggested next actions and gather required evidence before advancing.'],
  ['automation', 'automation', 'Power-Up Automation', 'Import Sales Growth proposals into Approval Studio, approve exact scope and check or safely retry confirmed, failed or uncertain handovers.'],
  ['ai-team', 'ai-team', 'Power-Up AI Team', 'Review hiring signals awaiting human review in the Research Workbench, open saved evidence and resume unresolved findings later.'],
  ['marketing', 'marketing-social-media', 'Marketing &amp; Social Media', 'Compare two weeks of campaign and finance imports for cost per attended meeting, cost per win and contribution while missing figures remain unknown.']
].map(([id, slug, name, outcome]) => `<a class="capability-matrix-item" href="${slug}.html"><span class="service-brand-icon small"><img src="assets/services-v2/${id}.svg" width="22" height="22" alt="" loading="lazy"></span><div><h3>${name} <span>↗</span></h3><p>${outcome}</p></div></a>`).join('')}</div></section>`;

const wonDealHandoverSection = () => `<section class="wrap section editorial-centrepiece" id="won-deal-handover" aria-labelledby="won-deal-handover-heading"><div class="centrepiece-header"><div>${eyebrow('WORKED EXAMPLE · STAFF-LED HANDOVER (WORKING PILOT)')}<h2 id="won-deal-handover-heading">Won deal → Reviewed proposal → Approved handover → Confirmed onboarding</h2><p>A staff-led workflow where team members transfer the proposal between three separate applications. This workflow was verified locally with synthetic data; it does not run unattended background syncing or activate live third-party providers.</p></div></div><ol class="intel-pipeline-grid handover-steps-3col"><li><span class="intel-step-num">01 · WON DEAL → REVIEWED PROPOSAL</span><h3>Sales Intelligence / Sales Growth</h3><p>Record the win and prepare a structured Delivery proposal with the agreed scope, delivery owner and target start date.</p><div class="intel-chip"><a href="/sales-intelligence" style="text-decoration:underline">Explore Sales &amp; Intelligence ↗</a></div></li><li><span class="intel-step-num">02 · APPROVED HANDOVER</span><h3>Power-Up Automation (Approval Studio)</h3><p>Staff import the proposal into Approval Studio and approve its exact contents. Any change requires fresh approval before transfer.</p><div class="intel-chip"><a href="/automation" style="text-decoration:underline">Explore Automation ↗</a></div></li><li><span class="intel-step-num">03 · CONFIRMED ONBOARDING</span><h3>Business Delivery</h3><p>Confirm onboarding and receive a stable reference. If interrupted, staff can retry the same approved proposal without creating a duplicate record.</p><div class="intel-chip ok"><a href="/business-delivery" style="text-decoration:underline">Explore Business Delivery ↗</a></div></li></ol></section>`;

const homeBriefServices = () => `<section class="service-overview-soft" id="what-you-can-do" aria-labelledby="what-you-can-do-heading"><div class="wrap"><div class="overview-split overview-split-light"><div>${eyebrow('OUR SERVICES · 03 · AI &amp; BUSINESS SERVICES')}<h2 id="what-you-can-do-heading">Seven practical platforms.<br><em>Human-controlled execution.</em></h2><p class="overview-light-copy">Alongside headhunting and coaching, our seven separate software platforms help teams qualify opportunities, own follow-ups and confirm onboarding — with real people always in control of decisions and handovers.</p><div class="actions">${button('Explore AI Business Services', '/platforms')}${button('Sample-data demo', '/dashboard', true)}</div></div><figure class="overview-media-light" style="margin:0"><img src="assets/human-team-systems.jpg" alt="Three UK commercial and operations leaders collaborating around a laptop in a modern office" width="1264" height="848" loading="lazy"><figcaption>Practical business software designed around real commercial teams — keeping human judgement at the centre of every action.</figcaption></figure></div><div class="capability-matrix-grid" id="seven-services" style="margin-top:36px">${[
  ['sales', '/sales-intelligence', 'Sales Intelligence / Sales Growth', 'Surface stale opportunities, record meeting outcomes and prepare a delivery proposal for a recorded win.'],
  ['crm', '/crm', 'Business / Personal CRM', 'Surface due or overdue commitments and open source tasks across separate Business and Personal workspaces.'],
  ['communications', '/communications', 'Power-Up Communications', 'Prioritise unassigned enquiries, overdue callbacks and response drafts awaiting review.'],
  ['delivery', '/business-delivery', 'Business Delivery', 'Give onboarding a stable reference, assign ownership, flag overdue milestones and show required evidence.'],
  ['automation', '/automation', 'Power-Up Automation', 'Review exact handover scope, safely retry approved proposals, plus the Live in Power CRM Automation briefing.'],
  ['ai-team', '/ai-team', 'Power-Up AI Team', 'Review hiring signals, refer back to supporting evidence and prepare drafts for staff review.'],
  ['marketing', '/marketing-social-media', 'Marketing &amp; Social Media', 'Compare recorded costs, revenue and contribution across campaigns with missing figures marked unknown.']
].map(([id, href, name, outcome]) => `<a class="capability-matrix-item" id="home-service-${id}" href="${href}"><span class="service-brand-icon small"><img src="assets/services-v2/${id}.svg" width="22" height="22" alt="" loading="lazy"></span><div><h3>${name} <span>↗</span></h3><p>${outcome}</p></div></a>`).join('')}</div></div></section>`;

const homeHeadhuntingOverview = () => `<section class="service-overview-dark" id="headhunting-overview" aria-labelledby="headhunting-overview-heading"><div class="wrap"><div class="overview-split"><div>${eyebrow('OUR SERVICES · 01 · RECRUITMENT &amp; HEADHUNTING')}<h2 id="headhunting-overview-heading">Headhunting standout talent<br><em>before they ever look.</em></h2><p class="overview-dark-copy">The strongest directors, general managers and commercial performers rarely browse job boards. We map your competitors discreetly, approach proven leaders under NDA, and present structured shortlists — with written single-client exclusivity where agreed.</p><ul class="overview-bullets"><li><strong>Retained &amp; exclusive search:</strong> MDs, commercial directors, operations leaders and confidential succession mandates.</li><li><strong>Commercial &amp; operational appointments:</strong> General managers, commercial sales leads, operations leads and regional specialists.</li><li><strong>Structured 7-stage delivery:</strong> Role blueprint, competitor mapping, direct approach, shortlist pack, offer management and 90-day check-ins.</li></ul><div class="actions">${button('Full Headhunting Details', '/talent')}${button('Discuss a Critical Hire', '/contact?interest=Critical%20hire', true)}</div></div><figure class="overview-media-card"><img src="assets/standout-talent.jpg" alt="A single standout golden leader identified within a wider market of dark silhouettes" width="1024" height="560" loading="lazy"><figcaption>Direct passive market mapping — identifying proven performers across your UK sector under agreed written exclusivity.</figcaption></figure></div><div class="candidate-dark-strip"><div><strong>Approached by us or considering a confidential career move?</strong><p>Speak with our headhunters discreetly under NDA — we never share your details without express written consent.</p></div><a class="button secondary" href="/contact?path=candidate#candidate-path">Confidential Candidate Register ${arrow}</a></div></div></section>`;

const homeCoachingOverview = () => `<section class="service-overview-band" id="coaching-overview" aria-labelledby="coaching-overview-heading"><div class="wrap"><div class="overview-split overview-split-light"><div>${eyebrow('OUR SERVICES · 02 · COACHING &amp; DEVELOPMENT')}<h2 id="coaching-overview-heading">Turn strong hires into<br><em>high-performing teams.</em></h2><p class="overview-light-copy">Appointing great people is only step one. Our 1-to-1 and team coaching embeds disciplined customer conversations, margin protection and weekly follow-through across your leadership and commercial teams.</p><div class="actions">${button('Full Coaching Details', '/coaching')}${button('Discuss Coaching Needs', '/contact?interest=Coaching', true)}</div></div><figure class="overview-media-light" style="margin:0"><img src="assets/human-coaching-session.jpg" alt="A UK executive coach leading a focused one-to-one commercial strategy conversation with a senior director" width="1264" height="848" loading="lazy"><figcaption>Practical 1-to-1 and team coaching grounded in live commercial accounts, leadership accountability and weekly habits.</figcaption></figure></div><div class="outcome-grid" style="margin-top:36px"><article><span>01 · LEADERSHIP &amp; MANAGEMENT</span><h3>Directors &amp; Operational Leaders</h3><p>Build clear weekly operating rhythms, confident performance feedback and commercial accountability across growing and multi-site teams.</p></article><article><span>02 · COMMERCIAL &amp; SALES</span><h3>Discovery, Margin &amp; Follow-Up</h3><p>Move customer conversations away from price discounting toward consultative discovery, disciplined quote follow-up and protected gross margin.</p></article><article><span>03 · SIX STRUCTURED PROGRAMMES</span><h3>90-Day Onboarding &amp; Momentum</h3><p>Tailored programmes for new leaders, sales teams, hiring managers and practical AI adoption — tracked against agreed operational indicators.</p></article></div></div></section>`;

const homeStrategicDifference = () => `<section class="difference-white-section" id="strategic-difference" aria-labelledby="diff-heading"><div class="wrap"><div class="overview-split overview-split-light" style="margin-bottom:40px"><div>${eyebrow('WHY US · POWER-UP TALENT')}<h2 id="diff-heading">THE STRATEGIC <em>DIFFERENCE.</em></h2><p class="overview-light-copy">Power-Up Talent is not a transactional CV agency. Where single-client exclusivity is agreed in writing, we commit not to headhunt for named direct competitors within your agreed scope and territory — uniting executive search with practical coaching and operational systems.</p><div class="actions">${button('Request Sector Exclusivity Review', '/check')}${button('Hire Top Talent', '/contact?interest=Critical%20hire', true)}</div></div><figure class="overview-media-light" style="margin:0"><img src="assets/human-executive-search.jpg" alt="Senior UK managing director and executive headhunting partner in a confidential briefing overlooking London at golden hour" width="1264" height="848" loading="lazy"><figcaption>Confidential director-level advisory — backed by written competitor boundaries and direct partner accountability.</figcaption></figure></div><div class="crm-split-grid">${[
  ['HEADHUNTING & PASSIVE TALENT', 'We combine direct headhunting with proactive passive talent mapping under bilateral NDA. We focus on proven performers who do not apply to job boards.'],
  ['CROSS-SECTOR COMMERCIAL DEPTH', 'We operate across UK commercial, operational and executive sectors — assessing candidates against real P&amp;L and role scorecards rather than generic CV matching.'],
  ['WRITTEN EXCLUSIVITY SCOPE', 'Where single-client exclusivity is agreed in writing, we define the exact sector, territory, named competitors, service scope and duration before search begins.'],
  ['PEOPLE + COACHING + PLATFORMS', 'Finding the right leader is step one. Where agreed, we pair appointments with practical coaching programmes and seven separate, human-controlled business platforms.']
].map(([title, desc], idx) => `<article class="diff-card">${iconBadge(['target', 'book', 'shield', 'layers'][idx], 'ink')}<div><span class="card-num">0${idx + 1} / WHY US</span><h3>${title}</h3><p>${desc}</p></div></article>`).join('')}</div></div></section>`;

export const unstoppableSection = (variant = 'home') => `<section class="unstoppable-section" id="one-company-per-sector" aria-labelledby="unstoppable-heading"><div class="wrap"><div class="unstoppable-shell"><div class="unstoppable-header"><div>${eyebrow('ONE CLIENT PER AGREED SECTOR · WRITTEN EXCLUSIVITY')}<h2 id="unstoppable-heading">One client per agreed sector.<br><em>Focused commercial support.</em></h2></div><div><p class="unstoppable-lead">${variant === 'about' ? 'Where single-client exclusivity is agreed in writing, Power-Up Talent commits not to headhunt for named direct competitors within your agreed scope, sector and territory.' : 'We align our headhunting reach, commercial coaching and seven business platforms around one client per agreed sector and territory — protecting your search focus in writing.'}</p><p class="unstoppable-sub">Instead of splitting attention across competing employers, every search shortlist, coaching sprint and operational workflow is built specifically around your team’s priorities.</p></div></div><div class="unstoppable-formula" role="list" aria-label="Three connected pillars of support"><article class="unstoppable-pillar" role="listitem"><div class="unstoppable-pillar-top">${iconBadge('target', 'gold')}<span class="unstoppable-step">01 · RECRUITMENT &amp; HEADHUNTING</span></div><h3>Structured passive search</h3><p>Map relevant competitors confidentially, assess passive leaders against clear commercial scorecards and manage offers through to start date.</p></article><article class="unstoppable-pillar" role="listitem"><div class="unstoppable-pillar-top">${iconBadge('users', 'gold')}<span class="unstoppable-step">02 · COMMERCIAL COACHING</span></div><h3>Practical team &amp; leader habits</h3><p>Support new hires and managers with 1-to-1 and team coaching covering quote follow-up, margin discipline and weekly review rhythms.</p></article><article class="unstoppable-pillar" role="listitem"><div class="unstoppable-pillar-top">${iconBadge('cpu', 'gold')}<span class="unstoppable-step">03 · AI &amp; BUSINESS SERVICES</span></div><h3>Seven separate platforms</h3><p>Give staff clear ownership over stale opportunities, CRM commitments, inbound enquiries, approved handovers and onboarding milestones.</p></article></div><div class="unstoppable-outcome-bar"><div class="unstoppable-outcome-copy">${iconBadge('shield', 'gold')}<div><span>WRITTEN EXCLUSIVITY · AGREED IN SCOPE</span><strong>Headhunting, commercial coaching and seven operational platforms — aligned around your agreed sector and territory.</strong></div></div><div class="actions">${button('Request Exclusivity Review', '/check')}${button('Request a Walkthrough', '/contact?interest=Growth%20partnership', true)}</div></div></div></div></section>`;

const homeFinalAction = () => `<section class="wrap cta cta-signature" aria-labelledby="home-cta-heading"><span class="cta-power" aria-hidden="true">${ico('power')}</span><div>${eyebrow('NEXT STEP')}<h2 id="home-cta-heading">Ready to discuss your next hire,<br>team coaching or platform walkthrough?</h2><p>Tell us what you are looking to improve — we will direct your enquiry to the right partner.</p></div><div class="actions">${button('Hire Top Talent', '/contact?interest=Critical%20hire')}${button('Explore AI Business Services', '/platforms', true)}</div></section>`;

export const partnershipHome = `<section class="hero offer-hero hero-handshake"><img src="assets/handshake-hero.jpg" alt="Power-Up Talent leadership handshake representing strategic client partnerships" class="hero-photo-bg" width="900" height="885" fetchpriority="high"><div class="video-overlay handshake-overlay"></div><div class="hero-grid-lines" aria-hidden="true"></div><div class="wrap hero-grid hero-grid-single"><div>${eyebrow('THE UK’S STRATEGIC PARTNER FOR HEADHUNTING, COACHING &amp; CONNECTED SYSTEMS')}<h1 style="color:#ffffff!important">Elite Headhunters.<br><em style="color:var(--gold);font-style:normal">Sector</em> Specialists.</h1><p class="hero-copy">We headhunt high-performing leadership, commercial and operational talent for ambitious employers across any UK sector — backed by practical coaching and seven separate AI &amp; business platforms.</p><div class="strategic-hero-box" role="note"><div class="strategic-hero-icon" aria-hidden="true">${ico('shield')}</div><div><span class="strategic-hero-label">WRITTEN SECTOR EXCLUSIVITY</span><p>Where single-client exclusivity is agreed in writing, we commit not to headhunt for your named direct competitors within your agreed scope and territory.</p></div></div><div class="actions">${button('Hire Top Talent', '/contact?interest=Critical%20hire')}${button('Explore AI Business Services', '/platforms', true)}</div><p class="hero-candidate-link"><a href="/contact?path=candidate#candidate-path">Considering a confidential career move? Open the Candidate Register ↗</a></p></div></div></section>${homeHeadhuntingOverview()}${homeCoachingOverview()}${homeBriefServices()}${homeStrategicDifference()}${unstoppableSection('home')}${homeFinalAction()}`;

export const aiServicesPage = `<section class="page-hero"><video autoplay loop muted playsinline preload="metadata" class="hero-video-bg" aria-hidden="true"><source src="assets/videos/ai-hero.mp4" type="video/mp4"></video><div class="video-overlay"></div><div class="wrap">${eyebrow('POWER-UP TALENT | AI BUSINESS SERVICES HUB')}<h1>Seven practical services for finding work,<br><em>following up and delivering it.</em></h1><p>Compare Sales Intelligence / Sales Growth, Business / Personal CRM, Communications, Business Delivery, Automation (including the Live in Power CRM briefing), AI Team and Marketing &amp; Social Media.</p><div class="actions">${button('Request a walkthrough', enquiry('AI services walkthrough'))}${button('Sample-data demo', '/dashboard', true)}</div></div></section><section class="ai-overview" aria-labelledby="ai-overview-heading"><div class="wrap"><div class="ai-centred"><h2 id="ai-overview-heading">Explore the seven services</h2></div></div></section>${wonDealHandoverSection()}<section class="wrap section split"><div>${eyebrow('WALKTHROUGH &amp; DEMO SCOPE')}<h2>See how each service<br>fits your team.</h2></div><div><p class="large-copy">Every service page distinguishes clearly between <strong>Live in Power CRM</strong> capabilities, <strong>Working pilot</strong> workflows verified locally with synthetic data, and <strong>Sample-data demo</strong> previews.</p><p>Try the three guided sample-data workflows above or open the full seven-service sample workspace before requesting a tailored walkthrough.</p><div class="actions">${button('Request a walkthrough', enquiry('AI services walkthrough'))}${button('Open sample-data demo', '/dashboard', true)}</div></div></section>`;

const connectedLink = id => `<section class="wrap note-band offer-link-band"><div>${eyebrow('POWER-UP TALENT | AI BUSINESS SERVICES')}<h2>${id === 'coaching' ? 'Give new commercial habits a clear workspace.' : 'Support the new appointment with coaching and practical systems.'}</h2><p>${id === 'coaching' ? 'Connect sales and leadership coaching with CRM, Communications and Sales &amp; Intelligence so teams track follow-ups and quotes every day.' : 'Combine specialist headhunting with post-appointment coaching and our seven business systems.'}</p></div><div class="actions">${button(id === 'talent' ? 'Explore coaching' : 'Explore AI Business Services', id === 'talent' ? '/coaching' : '/platforms', true)}</div></section>`;

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
    const marker = '<section class="cta wrap';
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
    description: 'UK strategic headhunting (working with one organisation per sector at a time), commercial coaching, and seven connected AI business platforms across any UK industry sector.',
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
    .replace('href="/check">Claim territory', 'href="/contact">Contact')
    .replace('href="check.html">Claim territory', 'href="/contact">Contact')
    .replace('</head>', '<link rel="stylesheet" href="signature.css?v=5"></head>')
    .replace('</body>', '<script src="assets/js/concierge-chat.js?v=1" defer></script></body>')
    .replace('Specialist talent, performance coaching and AI intelligence', 'Core headhunting (one company per sector), coaching &amp; 7 AI systems')
    .replace('Strict single-client territory exclusivity across the UK.', 'Working with one organisation per sector at a time across the UK.')
    .replace('for UK technical distribution, engineering, construction &amp; industry.', 'for ambitious organisations across all UK industry sectors.')
    .replace('Human judgement. Better intelligence.', 'Elite Headhunters. One Organisation Per Sector.');
}
