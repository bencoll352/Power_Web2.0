import { productScreenshot } from './suite-screenshots.mjs';

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
    plainBenefit: 'Separate Business CRM and Personal CRM workspaces keep commercial account history, follow-ups and 30-day renewal checks visible for teams without exposing private contacts.',
    cardCopy: 'Keep company account history, follow-ups and 30-day renewal reviews visible for teams, while Personal CRM stays private.',
    actionSummary: 'Accept a reviewed Sales export into Business CRM, assign an account owner and flag a renewal within 30 days.',
    description: 'Business CRM gives teams one place for accounts, contacts, opportunities and next steps. Personal CRM gives individuals a separate private workspace for personal relationships.',
    benefit: 'Keep account history, follow-ups and 30-day renewals visible across your team, with a separate private workspace for personal relationships.',
    statusBadge: 'Available in a demo · Separate Business & Personal workspaces',
    whatYouCanTry: 'Available in a demo: walk through Business CRM (accounts, stage-gated pipeline, overdue tasks and 30-day renewal flags) and Personal CRM (private relationship circles, reconnect cadence and portable exports). Handover from Sales uses a structured JSON/CSV export rather than an automatic background sync.',
    ctaLabel: 'Request a demo',
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
    short: 'Give every customer enquiry a next step.',
    plainBenefit: 'Capture inbound branch enquiries, assign a human owner and set a dated callback so overdue messages never disappear on a trade counter notepad.',
    cardCopy: 'Capture customer enquiries, assign a human owner and schedule dated callbacks in one shared inbox.',
    actionSummary: 'Open an unassigned enquiry, take human ownership and assign a dated callback.',
    description: 'Bring customer conversations into one team workspace so staff can see what needs attention, who owns it and what happens next.',
    benefit: 'Give calls, messages, enquiries and callbacks a clear human owner and due date in one shared team workspace.',
    statusBadge: 'Available in a demo · Live channels require configured connections',
    whatYouCanTry: 'Available in a demo: test the shared inbox, human takeover, cases, dated callbacks, approved company knowledge and Needs Attention view (with sandbox tests excluded from live counts). Live Gmail/Microsoft inbox sync, WhatsApp, telephony (Twilio/SIP) and calendar booking require a verified provider connection per tenant.',
    ctaLabel: 'Request a demo',
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
    short: 'See which opportunities deserve your next move.',
    plainBenefit: 'Combine local public-data Market Intelligence, human-reviewed Prospect Intelligence, strict fit-vs-evidence scoring and one-quote-per-prospect Action Queue follow-up.',
    cardCopy: 'Find local projects, review dated prospect evidence and prioritise owned follow-ups and quotes.',
    actionSummary: 'Review dated branch-expansion evidence, accept and assign an owner, and follow up an overdue quote.',
    description: 'Workspace for market research, prospect qualification, pipeline management and disciplined sales follow-up.',
    benefit: 'Turn public local data and sourced company evidence into human-reviewed recommendations, owned Action Queue tasks and clean Delivery handovers.',
    statusBadge: 'Working pilot · Market & Prospect Intelligence + Sales Action Queue',
    whatYouCanTry: 'Working pilot on the Market & Prospect Intelligence branch: search live UK Planning Data and Find a Tender notices, import a mapped CSV (company,sector,location,source), review dated evidence and assign follow-up tasks to the Sales Action Queue, manage one active quote per prospect, and export structured Sales handover and Marketing outcomes JSON.',
    ctaLabel: 'Request a demo',
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
      heading: 'Market Intelligence: public UK data, zero AI credits',
      exampleTitle: 'Example · Leeds wholesale branch search',
      exampleBody: 'A Leeds branch manager enters "Leeds", selects a 25-mile radius, 90-day lookback and optional keyword "construction" to spot nearby commercial developments on Planning Data and regional infrastructure tenders on Find a Tender, clicking straight through to the original government records before deciding which contractors to target.',
      bullets: [
        'Search any UK town/city or full Northern Ireland postcode with 5, 10, 25, 50 or 100-mile radius and 30/90-day lookback.',
        'Planning Data (planning.data.gov.uk): covers participating local authorities in England (coverage varies by area; capped at first 100 matching records, displaying top 10).',
        'Find a Tender (find-tender.service.gov.uk): scans up to 300 recent UK procurement notices matched by declared delivery region (wider area than radius; clearly flags partial results).',
        'Displays direct links to source records and clear temporary outage messages; uses no paid API keys or AI credits.'
      ]
    },
    prospectIntelligence: {
      heading: 'Prospect Intelligence: sourced evidence reviewed by a person',
      exampleTitle: 'Example · Electrical distributor branch opening',
      exampleBody: 'An imported target ("Fixture Electrical Distribution · Leeds · Branch opening") arrives with dated Source fact, Sales interpretation ("likely demand for trade-counter fit-out and initial switchgear stock") and Suggested next step. The commercial lead sees High Fit even if phone details are still missing, selects Accept and assign, sets owner + due date, and creates an Action Queue task ready for CRM handover. Tested on the Market & Prospect Intelligence feature branch with sample fixtures.',
      bullets: [
        'Import mapped CSV columns: company, sector, location, source.',
        'Filter pipeline by sector, account owner, signal type (Vacancy, Expansion, Company announcement), freshness (current/stale) and review status.',
        'Independent assessment: Customer fit, Evidence strength and Contactability are scored separately — missing phone/email lowers contactability without hiding genuine fit.',
        'Human review gate: Accept and assign (to Sales Action Queue), Further research, Reject, or Revoke later with a reason. Stale evidence cannot be accepted.'
      ]
    },
    included: [
      'Working pilot (feature branch): Market Intelligence (UK Planning Data & Find a Tender lookup, Leeds/NI postcode support, direct source links)',
      'Working pilot (feature branch): Prospect Intelligence (CSV import, dated Source fact -> Interpretation -> Next step, accept/research/reject/revoke, stale guard)',
      'Sales Action Queue, owned task sequences and one-quote-per-prospect follow-up tracking',
      'Structured JSON exports for Business Delivery onboarding and Marketing campaign outcomes'
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
    short: 'Start delivery with a clear brief.',
    plainBenefit: 'Local single-operator onboarding pilot: turn a reviewed Sales export into one owned onboarding record with agreed scope, delivery owner and start date.',
    cardCopy: 'Convert a reviewed Sales export into an onboarding record with an owner, agreed scope and start date.',
    actionSummary: 'Confirm a won deal from a reviewed Sales export and lock in the delivery owner, scope and start date.',
    description: 'Give operations the brief they need once a customer agrees to proceed, confirming ownership, scope and start date without duplicate records.',
    benefit: 'Turn a won deal from a reviewed Sales export into one clean onboarding record with duplicate protection.',
    statusBadge: 'Working pilot · Local single-operator onboarding',
    whatYouCanTry: 'Working pilot: load a reviewed Sales handover export (directly or via Automation), confirm the deal is marked won and scope is agreed, record the delivery owner and start date in the single onboarding list, and verify repeat-import duplicate prevention.',
    ctaLabel: 'Request a demo',
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
      'Working pilot: local single-operator onboarding workspace accepting reviewed Sales exports',
      'Mandatory won confirmation, agreed scope, named delivery owner and start date',
      'Duplicate prevention on repeat imports by handover reference'
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
    short: 'Make repeatable work easier to run and review.',
    plainBenefit: 'Operator CLI tool (handover.js) that routes reviewed Sales handovers and AI Team instructions into Business Delivery, returning clear receipts without payload leaks.',
    cardCopy: 'Route reviewed Sales-to-Delivery handovers via the operator CLI tool and verify exact run receipts.',
    actionSummary: 'Run handover.js as an operator and inspect whether the outcome is created, already_exists, or unconfirmed.',
    description: 'Operator-controlled handover routing between Sales, AI Team and Delivery so approved steps leave an auditable receipt.',
    benefit: 'Give operators a repeatable command-line bridge (handover.js) from reviewed Sales handovers into Delivery with honest status receipts.',
    statusBadge: 'Working pilot · Operator CLI tool (handover.js)',
    whatYouCanTry: 'Working pilot: inspect how an operator runs handover.js with a reviewed Sales handover and AI Team instructions to update Business Delivery, and examine the receipt distinguishing created, already_exists, rejected and unconfirmed outcomes.',
    ctaLabel: 'Request a demo',
    roles: 'Operations leads, technical administrators and commercial coordinators managing handovers between Sales and Delivery.',
    practicalExample: 'An operator executes handover.js for a Leeds branch deal. Delivery records the onboarding item and returns a "created" receipt; running the command a second time returns "already_exists" without creating a duplicate or logging raw customer payloads.',
    relatedIds: ['ai-team', 'delivery'],
    outcomes: [
      ['Operator-run handover.js bridge', 'Routes reviewed Sales handovers and approved AI Team instructions directly to Business Delivery when triggered by an operator.'],
      ['Clear receipts: created, already_exists, unconfirmed', 'Run history explicitly separates confirmed outcomes (created or already_exists) from rejected or unconfirmed states requiring reconciliation.'],
      ['Payload-safe audit logging', 'Logs timestamps, handover references and receipt codes without writing full customer payloads into automation logs.']
    ],
    featureGroups: [
      ['Operator CLI routing (handover.js)', 'Takes a reviewed Sales export and optional AI Team brief instructions and submits them to Business Delivery under direct operator execution.'],
      ['Honest receipt classification', 'Clearly distinguishes created, already_exists, rejected and unconfirmed outcomes so ambiguous runs are never silently treated as successful.'],
      ['Idempotent retry behaviour', 'Reuses the handover reference on re-runs so operators can safely recover from interruptions without duplicate onboarding records.'],
      ['Visual builder & integrations (Planned)', 'Drag-and-drop workflow builders, unattended cron schedules and broad third-party connectors require separate implementation and verification.']
    ],
    included: [
      'Working pilot: handover.js operator CLI tool for Sales-to-Delivery handover',
      'Explicit receipt statuses distinguishing created, already_exists, rejected and unconfirmed',
      'Idempotent handover reference handling and payload-free run logs'
    ],
    inDevelopment: [
      'Planned: visual multi-step workflow builder, unattended background queues and timed triggers.',
      'Planned: verified connectors for external ERP, accounting, Slack/Teams or marketing webhooks.'
    ],
    extra: 'Current verified capability is the operator CLI tool (handover.js) for Sales-to-Delivery handovers; visual builders and broad app integrations require separate evidence.',
    use: 'Run handover.js once to see a "created" receipt, then rerun safely to confirm "already_exists".'
  },
  {
    id: 'ai-team',
    title: 'AI Team',
    short: 'Give your team more capacity for research and preparation.',
    plainBenefit: 'Assign scoped tasks using approved source material, get an extractive brief with quoted citations, revise it under human control and approve what moves forward.',
    cardCopy: 'Prepare extractive briefs from approved company material, keeping human control over revisions and acceptance.',
    actionSummary: 'Review an extractive account-review brief against its quoted sources, request a revision and accept it.',
    description: 'The AI Team workspace lets your people brief a Chief of Staff and specialist assistants against approved documents, review every revision and decide what gets accepted.',
    benefit: 'Draft verifiable extractive briefs strictly from approved source files, keeping revisions and final sign-off in human hands.',
    statusBadge: 'Working pilot · Local extractive briefs & human acceptance',
    whatYouCanTry: 'Working pilot (local development milestone): brief the Chief of Staff with approved source material, review an extractive brief (which quotes and summarises only the supplied approved documents rather than inventing external facts), request revisions and record human acceptance or export Delivery brief instructions.',
    ctaLabel: 'Request a demo',
    roles: 'Commercial managers, branch directors, account leads and operations managers preparing account reviews and handover briefs.',
    practicalExample: 'Manager account-review briefing: ahead of a quarterly trade review, a branch manager uploads approved account notes, recent quote history and order summaries. The Chief of Staff prepares an extractive brief citing the exact supplied passages; the manager requests one revision tightening margin context, reviews the update, and marks the brief accepted.',
    relatedIds: ['automation', 'sales'],
    outcomes: [
      ['Extractive briefs from approved sources', '"Extractive" means the brief pulls directly from the approved material you supply with traceable citations — it does not guess unverified facts from the wider web.'],
      ['Revision rounds before human acceptance', 'Managers inspect cited passages, request targeted revisions and keep full version history before clicking accept.'],
      ['Browser Delivery brief preparation', 'Turn reviewed handover context into structured instructions that an operator can pass to Automation (handover.js).']
    ],
    featureGroups: [
      ['Chief of Staff assignment & approved sources', 'Assign a clear brief objective paired strictly with approved internal notes, account history or policy files.'],
      ['What "extractive" means in practice', 'Every point in the draft points back to an approved source passage you supplied — avoiding ungrounded speculation and making factual checks fast.'],
      ['Revisions & explicit human acceptance', 'Request changes round by round, compare versions and confirm human sign-off before any brief leaves the workspace.'],
      ['Browser Delivery brief export', 'Prepare reviewed delivery-brief instructions ready for an operator to route into Business Delivery via Automation.']
    ],
    included: [
      'Working pilot: Chief of Staff assignment flow anchored to approved source documents',
      'Extractive briefs with source citations, revision requests and human acceptance history',
      'Browser Delivery brief preparation compatible with handover.js'
    ],
    inDevelopment: [
      'Planned: live hosted multi-provider LLM routing, autonomous background schedules and direct inbox/ERP actions without human review.',
      'Local development milestone status: tested locally on approved text sources rather than live customer databases.'
    ],
    extra: 'Local development milestone focusing on extractive briefs from approved materials under explicit human revision and acceptance control.',
    use: 'Upload approved account notes, review the cited extractive brief, ask for a revision and record human acceptance.'
  },
  {
    id: 'marketing',
    title: 'Marketing & Social Media',
    short: 'See what your marketing turns into.',
    plainBenefit: 'Import a manual Sales outcomes JSON export in the browser to compare qualified leads, attended meetings, wins and Unattributed work — while rejecting duplicate prospect IDs.',
    cardCopy: 'Compare campaign leads against qualified opportunities, attended meetings and wins from a manual Sales export.',
    actionSummary: 'Upload a Sales outcomes JSON export to check campaign conversion rates and keep Unattributed wins visible.',
    description: 'Connect campaign effort to commercial outcomes so teams judge marketing by qualified meetings and won orders rather than clicks alone.',
    benefit: 'Match each source campaign to real Sales progression (qualified, attended, won) in a clean browser report that surfaces unattributed accounts.',
    statusBadge: 'Available in a demo · Manual Sales export to browser upload',
    whatYouCanTry: 'Available in a demo: take a manual JSON export from Sales & Intelligence and upload/import it locally in the Marketing browser dashboard to compare campaigns by leads, qualified leads, attended meetings, won deals, all-leads conversion rate and Unattributed records (duplicate prospect IDs rejected automatically).',
    ctaLabel: 'Request a demo',
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

export const connectedJourneyBand = () => `<section class="ai-connect-band" id="connected-journey" aria-labelledby="connected-journey-heading"><div class="wrap"><div>${eyebrow('FROM OPPORTUNITY TO DELIVERY · END-TO-END ROUTE')}<h2 id="connected-journey-heading">From opportunity<br>to delivery.</h2><p>Walk through how one fictional UK electrical distributor (<strong>Midlands &amp; Leeds Electrical Wholesale</strong>) moves an opportunity from first local signal to onboarding and campaign outcome review.</p><p class="connect-honesty"><strong>Transfer accuracy &amp; honest boundaries:</strong> Every handoff below is labelled with its actual mechanism — public lookup, human review, manual export/upload or operator CLI step — rather than claiming silent automatic syncing.</p></div><ol class="connected-steps-list"><li><span>01 · <a href="sales-intelligence.html#market-intelligence">Market Intelligence</a> <em>Public data lookup (zero AI credits)</em></span><strong>Spots local planning projects &amp; public tenders around Leeds.</strong><p>A branch manager searches Leeds (25-mile radius, 90 days, keyword “construction”) across England Planning Data and Find a Tender notices, opening original government records.</p></li><li><span>02 · <a href="sales-intelligence.html#prospect-intelligence">Prospect Intelligence &amp; Action Queue</a> <em>Mapped CSV upload + Operator review</em></span><strong>Scores branch-expansion evidence and creates an owned follow-up.</strong><p>The distributor imports <code>company,sector,location,source</code>, reviews dated expansion evidence (Source fact → Interpretation → Next step), accepts and assigns an owner to the Sales Action Queue, and tracks one active quote.</p></li><li><span>03 · <a href="crm.html">Business CRM</a> <em>Structured Sales export → CSV/JSON import</em></span><strong>Keeps account history, decision-makers and 30-day renewal dates visible.</strong><p>Account ownership, notes and 30-day renewal review flags live in Business CRM, kept strictly separate from private Personal CRM records.</p></li><li><span>04 · <a href="communications.html">Communications</a> <em>Team inbox (live channels require verified integration)</em></span><strong>Assigns inbound trade enquiries and dated callbacks.</strong><p>An urgent branch stock enquiry from an electrical contractor enters Needs Attention, is claimed by a named team member and gets a dated 14:00 callback.</p></li><li><span>05 · <a href="ai-team.html">AI Team</a> <em>Human acceptance + Browser download</em></span><strong>Prepares an extractive delivery or account brief from approved notes.</strong><p>Using only approved source material, the Chief of Staff drafts an extractive cited brief; a manager requests a revision, records human acceptance and downloads instructions.</p></li><li><span>06 · <a href="automation.html">Automation</a> <em>Operator CLI step (<code>handover.js</code>)</em></span><strong>Routes the reviewed handover and instructions to Delivery.</strong><p>An operator runs <code>handover.js</code>, receiving an explicit receipt distinguishing <code>created</code>, <code>already_exists</code> or <code>unconfirmed</code> without writing customer payloads into run logs.</p></li><li><span>07 · <a href="business-delivery.html">Business Delivery</a> &amp; <a href="marketing-social-media.html">Marketing</a> <em>Operator confirmation + Manual JSON export / Browser upload</em></span><strong>Confirms onboarding and reconciles campaign outcomes.</strong><p>Business Delivery (local onboarding pilot) confirms won status, scope, owner and start date without duplicate imports; Marketing uploads the Sales JSON export to compare qualified leads, attended meetings, wins and <code>Unattributed</code> rows.</p></li></ol></div></section>`;

const homeDistributorExample = () => `<section class="wrap section editorial-centrepiece" aria-labelledby="centrepiece-heading"><div class="centrepiece-header"><div>${eyebrow('WORKED SECTOR EXAMPLE · FICTIONAL UK ELECTRICAL WHOLESALER')}<h2 id="centrepiece-heading">How an electrical distributor<br><em>uses the suite in one week.</em></h2><p>Follow <strong>Midlands &amp; Leeds Electrical Wholesale</strong> (illustrative example) from spotting a regional branch opportunity to chasing the quote, onboarding the customer and checking which source produced the win.</p></div><span class="editorial-specimen-badge">ILLUSTRATIVE WORKED EXAMPLE · SAMPLE DATA</span></div><div class="moment-grid"><article class="moment-card"><div class="moment-top"><span class="moment-step">01 · FIND &amp; QUALIFY OPPORTUNITIES</span><span class="moment-pill status-review">Market &amp; Prospect Intelligence</span></div><h3>Spot a Leeds expansion and review dated evidence.</h3><p>The branch manager searches Planning Data &amp; Find a Tender within 25 miles of Leeds (no AI credits required), then reviews dated branch-opening evidence for a target contractor before accepting it into the Action Queue.</p><div class="ui-mini-preview" aria-label="Illustrative Market and Prospect Intelligence preview"><div class="ui-mini-row"><span>Market lookup: Leeds · 25 miles · “construction”</span><strong>Public links verified</strong></div><div class="ui-mini-row highlight"><span>Signal reviewed: Branch opening · Accept &amp; assign</span><strong>Owner: J. Morton</strong></div></div><div class="moment-links"><a class="text-link" href="sales-intelligence.html">Explore Sales &amp; Intelligence ↗</a><a class="moment-demo-link" href="dashboard.html?service=sales">Open Sales demo ↗</a></div></article><article class="moment-card"><div class="moment-top"><span class="moment-step">02 · ORGANISE FOLLOW-UP &amp; ENQUIRIES</span><span class="moment-pill status-active">Action Queue · Comms · CRM</span></div><h3>Give every quote, callback and renewal a named owner.</h3><p>Overdue Quote #Q-104 stays at the top of the Sales Action Queue (one tracked quote per prospect), an inbound trade-counter enquiry receives a dated 14:00 callback in Communications, and Business CRM flags a contract renewing inside 30 days.</p><div class="ui-mini-preview" aria-label="Illustrative follow-up and enquiry preview"><div class="ui-mini-row"><span>Quote #Q-104 · Midlands Switchgear (£28.4k)</span><strong>Outcome: Won</strong></div><div class="ui-mini-row highlight"><span>Enquiry ENQ-402 · Trade desk callback</span><strong>Owner: Sarah Jenkins</strong></div></div><div class="moment-links"><a class="text-link" href="communications.html">Explore Communications ↗</a><a class="moment-demo-link" href="crm.html">Explore CRM ↗</a></div></article><article class="moment-card"><div class="moment-top"><span class="moment-step">03 · BRIEF, HAND OVER &amp; MEASURE</span><span class="moment-pill status-complete">AI Team · handover.js · Delivery · Marketing</span></div><h3>Hand over won work without duplicate admin or ungrounded claims.</h3><p>A manager approves an extractive brief from approved notes in AI Team, an operator runs <code>handover.js</code> to open one onboarding record in Business Delivery, and Marketing uploads the Sales JSON export to compare campaign wins.</p><div class="ui-mini-preview" aria-label="Illustrative handover and outcomes preview"><div class="ui-mini-row"><span>Operator CLI: handover.js · Ref HO-2026-041</span><strong>Receipt: created</strong></div><div class="ui-mini-row highlight"><span>Marketing upload: Campaign wins + Unattributed</span><strong>0 duplicate IDs</strong></div></div><div class="moment-links"><a class="text-link" href="business-delivery.html">Explore Business Delivery ↗</a><a class="moment-demo-link" href="marketing-social-media.html">Explore Marketing ↗</a></div></article></div></section>`;

const homeHowIntelligenceWorks = () => `<section class="wrap section" id="how-intelligence-works" aria-labelledby="how-intel-heading"><div class="section-head"><div>${eyebrow('EVIDENCE-LED WORKFLOW · HUMAN IN CONTROL')}<h2 id="how-intel-heading">How the intelligence works</h2></div><p>No black-box automation: public facts, sourced company evidence and approved documents stay traceable from source to human sign-off.</p></div><ol class="intel-pipeline-grid"><li><span class="intel-step-num">STEP 01 · SOURCE FACT</span><h3>Dated public or imported record</h3><p>Shows what was observed and where it came from — e.g. a Planning Data link, Find a Tender notice, or branch expansion record observed on 2026-11-10.</p><div class="intel-chip">Inspectable original source</div></li><li><span class="intel-step-num">STEP 02 · SALES INTERPRETATION</span><h3>Plain commercial meaning</h3><p>Explains why the fact matters to your branch or team — e.g. “New trade counter and warehouse fit-out signals demand for switchgear and cable stock.”</p><div class="intel-chip">Fit, evidence &amp; contactability kept separate</div></li><li><span class="intel-step-num">STEP 03 · SUGGESTED NEXT STEP</span><h3>Practical action prepared</h3><p>Recommends the next commercial move — e.g. “Identify the branch purchasing lead and schedule an introductory trade-account call.”</p><div class="intel-chip">Stale evidence blocked from acceptance</div></li><li><span class="intel-step-num">STEP 04 · PERSON’S DECISION</span><h3>Review, assign, reject or revoke</h3><p>A person selects <strong>Accept and assign</strong> (naming owner &amp; due date into the Action Queue), <strong>Further research</strong>, <strong>Reject</strong> or <strong>Revoke</strong> with a reason.</p><div class="intel-chip ok">Owned follow-up created only after review</div></li></ol><div class="intel-capabilities-grid"><article class="crm-workspace-card"><span class="platform-status-pill">Working pilot · Public UK sources</span><h3>Market intelligence</h3><p>Uses public UK data to show what is happening in a location — without paid APIs or AI credits.</p><p style="font-size:13.5px;color:#334155;background:#f8f7f3;padding:12px;border-radius:6px;margin-bottom:0"><strong>Example:</strong> A Leeds branch manager checks England Planning Data (5–100 mile radius, 30/90 days) and Find a Tender regional notices filtered by “construction”, opening source records directly.</p></article><article class="crm-workspace-card"><span class="platform-status-pill">Working pilot · Feature branch</span><h3>Prospect intelligence</h3><p>Turns sourced company evidence (vacancies, branch expansions, announcements) into a recommendation that a person reviews.</p><p style="font-size:13.5px;color:#334155;background:#f8f7f3;padding:12px;border-radius:6px;margin-bottom:0"><strong>Example:</strong> Import <code>company,sector,location,source</code>, score fit separately from missing phone data, and either accept into the Action Queue or hold for further research.</p></article><article class="crm-workspace-card"><span class="platform-status-pill">Working pilot · Local development milestone</span><h3>AI Team</h3><p>Prepares extractive briefs from approved source material — quoting supplied documents rather than guessing — and gives a person control over revisions and acceptance.</p><p style="font-size:13.5px;color:#334155;background:#f8f7f3;padding:12px;border-radius:6px;margin-bottom:0"><strong>Example:</strong> A manager requests an account-review brief from approved order and call notes, checks the quoted citations, requests a revision and clicks Accept.</p></article></div></section>`;

const homeSevenServices = () => `<section class="wrap section" id="seven-services" aria-labelledby="seven-services-heading"><div class="section-head"><div>${eyebrow('SEVEN CONNECTED SERVICES')}<h2 id="seven-services-heading">Seven services.<br><em>One clear job each.</em></h2></div><div><p>Start with the workflow that hurts most today. Every service page states who it is for, what you can test in a demo or working pilot, and what remains planned.</p><div class="actions" style="margin-top:16px">${button('Request a demo', enquiry('AI services walkthrough'))}${button('Try interactive demo', 'dashboard.html', true)}</div></div></div><div class="service-directory-grid">${aiGroups.map(g => {
  const slug = g.id === 'sales' ? 'sales-intelligence' : g.id === 'delivery' ? 'business-delivery' : g.id === 'marketing' ? 'marketing-social-media' : g.id;
  return `<article class="service-directory-card" id="home-service-${g.id}"><a class="service-card-main" href="${slug}.html"><span class="service-brand-icon"><img src="assets/services-v2/${g.id}.svg" width="34" height="34" alt="" loading="lazy"></span><span class="platform-status-pill">${g.statusBadge}</span><h3>${g.title}</h3><p class="service-promise"><strong>Work it supports:</strong> ${g.cardCopy}</p><p><strong>Practical benefit:</strong> ${g.benefit}</p><span class="service-explore">Explore ${g.title} ${arrow}</span></a><a class="service-preview-link" href="dashboard.html?service=${g.id}">Inspect sample-data view ${arrow}</a></article>`;
}).join('')}<article class="service-directory-cta"><div>${eyebrow('START WITH ONE WORKFLOW')}<h3>Not sure which service to start with?</h3><p>Tell us whether you need local market research, structured quote follow-up, shared branch enquiry ownership or clean delivery handovers — we will walk through the exact workflow in a demo.</p></div><div class="actions">${button('Request a demo', enquiry('AI services walkthrough'))}${button('Explore Partnerships & Recruiting', 'partnerships.html', true)}</div></article></div></section>`;

const homeStrategicPillars = () => `<section class="pillars-dark-section" id="strategic-pillars" aria-labelledby="pillars-heading"><div class="wrap"><div class="pillars-head"><p class="eyebrow" style="justify-content:center;color:var(--gold)"><span></span>OUR CORE SYSTEM<span></span></p><h2 id="pillars-heading">STRATEGIC <em>PILLARS.</em></h2><p>Our core service is headhunting — partnering with <strong>one organisation per sector at a time</strong>. We surround that search mandate with structured commercial coaching and seven focused AI &amp; business platforms so the leaders you appoint have the habits and systems to win.</p></div><div class="pillars-grid">${[
  ['01 / CORE SERVICE', 'HEADHUNTERS', 'Our core headhunting service. We identify and approach top passive talent currently delivering for your competitors under strict single-client sector exclusivity.', ['One organisation per sector at a time', 'Discreet passive talent mapping', 'Peer-level commercial & technical vetting', 'NDA-protected confidential execution'], 'talent.html', 'Explore Headhunting'],
  ['02 / PEOPLE &amp; HABITS', 'STRATEGIC RECRUITMENT &amp; COACHING', 'Co-designed local competitor mapping across leadership, branch and sales roles, backed by six workplace coaching programmes on quote follow-up and margin discipline.', ['Local competitor market mapping', 'Six structured coaching programmes', 'Quote follow-up & margin protection', '90-day new leader onboarding habits'], 'coaching.html', 'Explore Coaching'],
  ['03 / SUITE OF 7 TOOLS', 'AI &amp; BUSINESS SERVICES', 'Seven practical software platforms covering public Market Intelligence, human-reviewed Prospect Intelligence, Business/Personal CRM, Communications, Delivery, Automation and Marketing.', ['Public UK Market Intel (no AI credits)', 'Human-reviewed Prospect Intelligence', 'Extractive AI Team briefs & Delivery handover', 'Owned Action Queues & Campaign wins'], '#seven-services', 'Explore the 7 services'],
  ['04 / INTEGRATED', 'GROWTH PARTNERSHIPS', 'We work as an extension of your leadership team — combining executive headhunting, branch coaching and selected business platforms under written single-client exclusivity.', ['Combined hiring, coaching & platforms', 'Multi-branch regional rollout support', 'Agreed milestones & weekly cadences', 'Strict single-client sector exclusivity'], 'partnerships.html', 'Explore Partnerships']
].map(([tagTxt, title, desc, bullets, href, ctaTxt]) => `<article class="pillar-white-card"><span class="card-num">${tagTxt}</span><h3>${title}</h3><p>${desc}</p><ul class="workspace-feature-list">${bullets.map(b => `<li>${b}</li>`).join('')}</ul><div class="actions" style="margin-top:auto;padding-top:20px"><a class="text-link pillar-link" href="${href}">${ctaTxt} ${arrow}</a></div></article>`).join('')}</div></div></section>`;

const homeValueCreationFramework = () => `<section class="value-dark-section" id="value-creation" aria-labelledby="value-heading"><div class="wrap"><div class="pillars-head"><p class="eyebrow" style="justify-content:center;color:var(--gold)"><span></span>VALUE CREATION FRAMEWORK<span></span></p><h2 id="value-heading">How We Transform Your Business</h2><p>Commercial advantages connecting discreet competitor headhunting, repeatable branch sales habits and human-controlled software across all seven services.</p></div><div class="value-glass-grid">${[
  ['01 / COMPETITOR MAPPING', 'Faster Critical Hiring', 'Proactive Market Mapping', 'Reach proven branch managers, commercial directors and technical specialists before they ever hit a job board.'],
  ['02 / TECHNICAL SCREENING', 'Higher-Calibre Hires', 'Peer-Level Sector Vetting', 'Screen candidates for P&amp;L ownership, specification selling, branch margin control and long-term cultural fit.'],
  ['03 / PUBLIC UK DATA', 'Market &amp; Prospect Intelligence', 'Zero Paid APIs or AI Credits', 'Search England Planning Data and Find a Tender around your UK branches, then review dated company signals with human sign-off.'],
  ['04 / BRANCH DISCIPLINE', 'Owned Quotes &amp; Enquiries', 'Sales Action Queue &amp; Comms', 'Surface overdue quotes (one tracked quote per prospect) and turn missed trade-counter calls into named callbacks.'],
  ['05 / CONTROLLED HANDOVER', 'Briefs &amp; Clean Delivery', 'AI Team + handover.js + Delivery', 'Prepare extractive briefs from approved company documents and confirm won deals cleanly in Business Delivery without duplicates.'],
  ['06 / DATA BOUNDARIES', 'Separated CRM &amp; True Wins', 'Business CRM vs Personal CRM', 'Keep team accounts and 30-day renewal checks visible while isolating private Personal CRM records and measuring campaign wins.']
].map(([num, title, highlight, desc]) => `<article class="value-glass-card"><span class="value-num">${num}</span><h3>${title}</h3><p class="value-highlight">${highlight}</p><p>${desc}</p></article>`).join('')}</div></div></section>`;

const homeStrategicDifference = () => `<section class="difference-white-section" id="strategic-difference" aria-labelledby="diff-heading"><div class="wrap"><div class="pillars-head light"><p class="eyebrow" style="justify-content:center;color:#7a6015"><span></span>WHY POWER-UP TALENT<span></span></p><h2 id="diff-heading">THE STRATEGIC <em>DIFFERENCE.</em></h2><p>Power-Up Talent is not a traditional recruitment agency. We are a specialist consultancy working with <strong>one organisation per sector at a time</strong> — uniting elite headhunting with workplace coaching and seven human-controlled business platforms.</p></div><div class="crm-split-grid">${[
  ['HEADHUNTING & PASSIVE CANDIDATES', 'We combine direct headhunting with proactive passive talent mapping under absolute discretion. We work with one organisation per sector at a time — choosing Power-Up Talent means your competitors cannot access our active search focus in your market.'],
  ['SECTOR LITERACY', 'Our consultants speak the language of UK electrical wholesale, manufacturing supply chains, technical distribution, construction and engineering delivery — ensuring peer-level technical vetting and grounded commercial advice.'],
  ['SECTOR EXCLUSIVITY GUARANTEE', 'We operate a strict single-client policy per agreed sector mandate. When you partner with Power-Up Talent, we block out your named direct competitors in writing so there is zero conflict of interest.'],
  ['PEOPLE + COACHING + 7 SERVICES', 'Hiring great leaders is step one. Where agreed, we reinforce new appointments with our six coaching programmes and seven software platforms (CRM, Comms, Sales &amp; Intelligence, Delivery, Automation, AI Team and Marketing).']
].map(([title, desc], idx) => `<article class="diff-card"><span class="card-num">0${idx + 1} / DIFFERENCE</span><h3>${title}</h3><p>${desc}</p></article>`).join('')}</div><div class="actions" style="justify-content:center;margin-top:34px">${button('Check Sector Exclusivity', 'check.html')}${button('Hire Top Talent', 'contact.html?interest=Critical+hire', true)}</div></div></section>`;

const homeFaq = () => `<section class="wrap faq-section" id="home-faq" aria-labelledby="home-faq-heading"><div>${eyebrow('FREQUENTLY ASKED QUESTIONS')}<h2 id="home-faq-heading">Relevant answers.<br><em>Clear boundaries.</em></h2><p style="color:var(--muted);max-width:420px">Straightforward answers covering our single-client headhunting model, coaching programmes and the seven AI &amp; business services.</p></div><div class="faqs"><details open><summary>Do you offer sector exclusivity — and what does "one company per sector" mean?</summary><p>Yes. Headhunting is our core service, and we operate a strict single-client exclusivity policy for agreed strategic sector mandates. When you retain Power-Up Talent, we agree the sector, UK region and named direct competitors in writing so we do not headhunt for your competitors during the mandate. Check availability via our <a href="check.html" style="text-decoration:underline;font-weight:600">Territory &amp; Sector Exclusivity Review</a>.</p></details><details><summary>How do you headhunt passive talent across electrical wholesale, construction and engineering?</summary><p>We map regional and national competitors discreetly, identify top-performing directors, branch managers and technical specialists who are not on job boards, and approach them confidentially under NDA protections to evaluate commercial fit and motivation.</p></details><details><summary>What is the difference between Market Intelligence, Prospect Intelligence and AI Team?</summary><p><strong>Market Intelligence</strong> queries public UK data (England Planning Data and Find a Tender) by town/city or full NI postcode with zero paid API keys. <strong>Prospect Intelligence</strong> turns dated company evidence (vacancies, branch expansions, announcements) into recommendations scored separately for fit, evidence strength and contactability that a person accepts, rejects or revokes. <strong>AI Team</strong> prepares extractive briefs quoted directly from approved company documents under human revision and acceptance.</p></details><details><summary>What is ready to demonstrate now versus working pilots or planned integrations?</summary><p>Business &amp; Personal CRM, Communications (team inbox sandbox) and Marketing Campaign Outcomes run in interactive demos today. Market &amp; Prospect Intelligence run as a tested feature-branch pilot, while Business Delivery, Automation (<code>handover.js</code> CLI) and AI Team extractive briefs run as local working pilots. Live external telephony/WhatsApp/email syncing, auto-enrichment and live ad/social pulls are clearly marked as requiring configured integration or Planned.</p></details><details><summary>How are Business CRM and Personal CRM kept separate?</summary><p>They run as separate workspaces with separate authentication and row-level isolation. Personal contacts, notes and reconnect reminders are never exposed to the commercial Business CRM workspace, even where contact email addresses match.</p></details><details><summary>Can we start with Headhunting alone or combine Coaching and the 7 platforms?</summary><p>Yes. Many clients start with a single critical hire or retained search (<a href="talent.html" style="text-decoration:underline;font-weight:600">Headhunting</a>) and later add branch manager coaching (<a href="coaching.html" style="text-decoration:underline;font-weight:600">Coaching</a>) or selected software workflows through a tailored <a href="partnerships.html" style="text-decoration:underline;font-weight:600">Growth Partnership</a>.</p></details></div></section>`;

const homeAdvisoryStrip = () => `<section class="wrap note-band offer-link-band" aria-label="Headhunting, coaching, information and sector exclusivity"><div>${eyebrow('HEADHUNTING · EXCLUSIVITY · INFORMATION HUB')}<h2 style="font-size:26px;margin-bottom:8px">Working with one organisation per sector — explore our guides or check availability.</h2><p style="margin:0">Read sector leadership briefings in our <a href="information.html" style="text-decoration:underline;font-weight:600">Information Hub</a>, review <a href="about.html" style="text-decoration:underline;font-weight:600">About Power-Up Talent</a>, or submit a <a href="contact.html?path=candidate#candidate-path" style="text-decoration:underline;font-weight:600">Confidential Candidate Enquiry ↗</a>.</p></div><div class="actions">${button('Check Sector Exclusivity', 'check.html', true)}${button('Hire Top Talent', 'contact.html?interest=Critical+hire')}</div></section>`;

const homeFinalAction = () => `<section class="wrap cta" aria-labelledby="home-cta-heading"><div>${eyebrow('READY TO GROW?')}<h2 id="home-cta-heading">Ready to hire the best<br>&amp; connect your business?</h2><p>Tell us whether you need discreet headhunting with single-client sector exclusivity, team coaching, or a live demo of our seven AI &amp; business services.</p></div><div class="actions">${button('Hire Top Talent', 'contact.html?interest=Critical+hire')}${button('Request a demo', enquiry('AI services walkthrough'), true)}</div></section>`;

export const partnershipHome = `<section class="hero offer-hero hero-handshake"><img src="assets/handshake-hero.jpg" alt="Power-Up Talent sector specialists shaking hands across executive and industrial leaders" class="hero-photo-bg" width="900" height="885"><div class="video-overlay handshake-overlay"></div><div class="wrap hero-grid hero-grid-b2b"><div>${eyebrow('THE UK’S SPECIALIST PARTNER FOR CONSTRUCTION, ENGINEERING &amp; ELECTRICAL')}<h1 style="color:#ffffff!important">Elite Headhunters.<br><em style="color:var(--gold);font-style:normal">Sector</em> Specialists.</h1><p class="hero-copy">We headhunt high-performing talent for ambitious employers across Construction, Engineering and Electrical — now backed by commercial coaching and seven AI &amp; business services for market research, prospect intelligence, follow-up and delivery.</p><div class="strategic-hero-box" role="note"><div class="strategic-hero-icon" aria-hidden="true">✓</div><div><span class="strategic-hero-label">STRATEGIC SECTOR DIFFERENCE</span><p><strong>Core service: Headhunting.</strong> We work with <strong>one organisation per sector at a time</strong>. Choosing Power-Up Talent means your competitors cannot.</p></div></div><div class="actions">${button('Hire Top Talent', 'contact.html?interest=Critical+hire')}${button('Request a demo', enquiry('AI services walkthrough'), true)}${button('Explore the seven services', '#seven-services', true)}</div><p class="hero-foot"><a href="#strategic-pillars" style="color:#ffe000;text-decoration:underline;font-weight:700">Our Core System (Strategic Pillars) ↓</a> · <a href="about.html" style="color:#ffffff;text-decoration:underline">About Us</a> · <a href="information.html" style="color:#ffffff;text-decoration:underline">Information</a> · <a href="contact.html?path=candidate#candidate-path" style="color:#ffffff;text-decoration:underline">Confidential candidate enquiry ↗</a></p></div><div class="hero-screenshot-panel" aria-label="Sales Action Queue product screenshot">${productScreenshot('actionQueue', { eager: true })}</div></div></section><div class="sector-strip"><div class="wrap"><span>HEADHUNTING · ONE COMPANY PER SECTOR</span><strong>Electrical wholesale</strong><strong>Technical distribution</strong><strong>Construction &amp; M&amp;E</strong><strong>Engineering &amp; manufacturing</strong></div></div>${homeStrategicPillars()}${homeSevenServices()}${homeDistributorExample()}${homeValueCreationFramework()}${homeHowIntelligenceWorks()}${homeStrategicDifference()}${connectedJourneyBand()}${homeFaq()}${homeAdvisoryStrip()}${homeFinalAction()}`;

export const aiServicesPage = `<section class="page-hero"><video autoplay loop muted playsinline preload="metadata" class="hero-video-bg" aria-hidden="true"><source src="assets/videos/ai-hero.mp4" type="video/mp4"></video><div class="video-overlay"></div><div class="wrap">${eyebrow('POWER-UP TALENT | AI &amp; BUSINESS PLATFORMS')}<h1>Seven platforms for managing relationships,<br><em>winning work and delivering it.</em></h1><p>Start with the area you need most, then connect the others as your business grows. Every platform page shows who it is for, what runs in a demo or working pilot today, and how handovers work in practice.</p><div class="actions">${button('Request a demo', enquiry('AI services walkthrough'))}${button('Try the guided demo', '#guided-demo', true)}</div></div></section><section class="ai-overview" aria-labelledby="ai-overview-heading"><div class="wrap"><div class="ai-centred"><h2 id="ai-overview-heading">Explore the seven platforms</h2></div></div></section>${connectedJourneyBand()}<section class="wrap section split"><div>${eyebrow('WALKTHROUGH &amp; PILOT SCOPE')}<h2>See how a platform fits<br>your workflow.</h2></div><div><p class="large-copy">We walk through what can be demonstrated now, which live channels require a configured provider connection and what remains planned.</p><p>You can step through the guided three-scenario demo on this page or explore the interactive seven-platform product demo before requesting a tailored walkthrough.</p><div class="actions">${button('Request a demo', enquiry('AI services walkthrough'))}${button('Interactive product demo', 'dashboard.html', true)}</div></div></section>`;

const connectedLink = id => `<section class="wrap note-band offer-link-band"><div>${eyebrow('POWER-UP TALENT | AI &amp; BUSINESS PLATFORMS')}<h2>${id === 'coaching' ? 'Give new commercial habits a clear workspace.' : 'Support the new appointment with coaching and practical platforms.'}</h2><p>${id === 'coaching' ? 'Connect sales and branch coaching with CRM, Communications and Sales & Intelligence so teams can track follow-ups and quotes every day.' : 'Combine specialist headhunting with post-appointment coaching and our seven business platforms.'}</p></div><div class="actions">${button(id === 'talent' ? 'Explore coaching' : 'Explore AI & Business Platforms', id === 'talent' ? 'coaching.html' : 'platforms.html', true)}</div></section>`;

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
    .replace('styles.css?v=7.0', 'styles.css?v=9.0')
    .replace('<script src="app.js"', '<link rel="stylesheet" href="ai-services.css?v=9.0"><script src="app.js"')
    .replace('href="check.html">Claim territory', 'href="contact.html">Contact')
    .replace('Specialist talent, performance coaching and AI intelligence', 'Core headhunting (one company per sector), coaching &amp; 7 AI platforms')
    .replace('Strict single-client territory exclusivity across the UK.', 'Working with one organisation per sector at a time across the UK.')
    .replace('Human judgement. Better intelligence.', 'Elite Headhunters. Sector Specialists. Your business, connected.');
}
