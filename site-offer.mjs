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
    displayTitle: 'Business / Personal CRM & Power CRM Service Desk',
    bucket: 'manage-retain',
    bestFor: 'Business owners, directors and account teams',
    hubProblem: 'Overdue cases, missing stage evidence and candidate updates sit in separate lists, while team records risk mixing with private contacts.',
    hubWorkflow: 'Live in Power CRM: owner Service Desk briefing (overdue cases, missing evidence, drafts awaiting review) and mobile jobs pipeline (Vetting, Submitted, Interview). Standalone Business & private Personal CRM plus sourced pre-meeting briefs.',
    hubGain: 'Owners jump straight from a flagged item to its source case and reviewable next step while keeping private networks strictly separate.',
    beforeWorkflowResult: {
      before: 'Overdue cases, missing evidence and candidate stage changes sit across scattered spreadsheets and inboxes.',
      workflow: 'Owner opens the Power CRM Service Desk briefing to inspect flagged cases with owner and due date, or adds candidates directly into mobile stages (Vetting, Submitted, Interview) with visible stage-move feedback.',
      result: 'Every flagged case links directly to its source record and reviewable next action, while private Personal CRM contacts stay isolated.'
    },
    outcomeLine: 'Combine the live owner Power CRM Service Desk briefing and mobile recruitment pipeline with separate Business and Personal CRM workspaces.',
    short: 'Know who needs your attention.',
    plainBenefit: 'Live in Power CRM: owner Service Desk briefing for overdue cases, missing stage evidence and drafts awaiting review, plus a mobile jobs pipeline. Standalone Business CRM and private Personal CRM stay strictly separate.',
    cardCopy: 'Owner Power CRM Service Desk briefing, mobile recruitment pipeline, and separate Business & Personal CRM workspaces.',
    actionSummary: 'Open the live Power CRM Service Desk briefing to inspect flagged cases, or review due/overdue commitments across Business and Personal CRM.',
    description: 'Brings together the owner-only Power CRM Service Desk briefing and mobile jobs pipeline alongside standalone Business CRM, private Personal CRM and locally tested pre-meeting account briefs.',
    benefit: 'Move from a flagged overdue item straight to its source case, owner, due date and suggested next action without mixing team and private records.',
    statusBadge: 'Live in Power CRM · Tested locally / walkthrough available',
    liveBriefing: {
      badge: 'Live in Power CRM',
      heading: 'Owner Service Desk briefing & mobile recruitment pipeline.',
      copy: 'In Power CRM (power-up-crm-portal.web.app), signed-in owners open the Service Desk briefing to see overdue cases, missing stage evidence and drafts awaiting review — each showing the source case, named owner, due date and suggested action. On mobile, recruiters add candidates directly into stages such as Vetting, Submitted and Interview with visible stage-move feedback.',
      accessPath: 'Power CRM → Service Desk briefing & Mobile Jobs Pipeline',
      verificationNote: 'Owner-only briefing and mobile pipeline live in Power CRM. Standalone Business CRM, private Personal CRM and sourced pre-meeting account briefs are Tested locally / walkthrough available.'
    },
    whatYouCanTry: 'Live in Power CRM: owner-only Service Desk briefing (overdue cases, missing stage evidence, drafts awaiting review) and mobile jobs pipeline (Vetting, Submitted, Interview). Tested locally / walkthrough available: sourced pre-meeting account brief plus separate Business CRM and private Personal CRM workspaces.',
    ctaLabel: 'Request a CRM walkthrough',
    problemsSolved: [
      'Overdue cases, missing stage evidence and unreviewed drafts slip when owners have to check multiple views.',
      'Recruiters on mobile cannot add candidates directly into live pipeline stages with clear stage-move confirmation.',
      'Team commercial accounts and private personal relationships end up mixed in the same workspace.'
    ],
    whatWeOffer: [
      'Live in Power CRM: owner-only Service Desk briefing showing overdue cases, missing stage evidence and drafts awaiting review with source case, owner, due date and suggested action.',
      'Live in Power CRM: mobile jobs pipeline supporting direct candidate addition to stages such as Vetting, Submitted and Interview with visible stage-move feedback.',
      'Tested locally / walkthrough available: sourced pre-meeting account brief plus standalone Business CRM and strictly separate private Personal CRM.'
    ],
    exampleToShow: 'An owner opens the Power CRM Service Desk briefing, spots an overdue case with missing evidence, clicks straight to the source case and reviews the suggested next action.',
    roles: 'Business owners, managing directors, recruitment leads, account teams and professionals wanting clear case ownership without mixing commercial and private contacts.',
    practicalExample: 'Power CRM: an owner reviews the Service Desk briefing, opens a flagged case with its owner and due date, and queues a draft for review. Standalone Business CRM: an account lead opens a locally tested pre-meeting account brief ahead of a renewal review, while Personal CRM keeps private reconnect reminders in an isolated workspace.',
    relatedIds: ['sales', 'communications'],
    outcomes: [
      ['Owner Service Desk briefing (Live in Power CRM)', 'Brings overdue cases, missing stage evidence and drafts awaiting review into one owner view with source case, owner, due date and suggested action.'],
      ['Mobile jobs pipeline (Live in Power CRM)', 'Add candidates directly into Vetting, Submitted or Interview stages on mobile with clear stage-move feedback.'],
      ['Separate Business & Personal CRM + Pre-meeting briefs', 'Keep team accounts and private personal circles on independent sign-ins, and prepare locally tested sourced pre-meeting account briefs.']
    ],
    workspaces: [
      {
        name: 'Option 1 · Power CRM Service Desk & Business CRM',
        badge: 'Live in Power CRM · Tested locally / walkthrough available',
        summary: 'Owner Service Desk briefing, mobile recruitment pipeline, shared commercial accounts, follow-ups, 30-day renewal checks and sourced pre-meeting account briefs.',
        items: [
          'Live in Power CRM: owner-only Service Desk briefing surfacing overdue cases, missing stage evidence and drafts awaiting review.',
          'Live in Power CRM: direct jump from each flagged item to its source case, named owner, due date and suggested action.',
          'Live in Power CRM: mobile jobs pipeline with direct candidate addition to Vetting, Submitted and Interview plus visible stage-move feedback.',
          'Tested locally / walkthrough available: sourced pre-meeting account brief assembling saved notes and account history before a call.',
          'Business CRM: company/contact dossiers, follow-up tasks due today and overdue, 30-day renewal flags and CSV/JSON import preview.'
        ]
      },
      {
        name: 'Option 2 · Private Personal CRM',
        badge: 'Tested locally / walkthrough available · Private workspace',
        summary: 'A strictly separate private workspace for individuals to maintain personal and professional relationships over time.',
        items: [
          'Independent sign-in and row-level data isolation from Business CRM and Power CRM.',
          'Personal and professional contacts, relationship circles, notes and remembered details.',
          'Reconnect reminders with configurable cadence, snooze, dismiss and off controls.',
          'Drafts and portable contact exports kept strictly separate from company accounts.'
        ]
      }
    ],
    boundaryNote: 'Ownership & access boundary: Power CRM (power-up-crm-portal.web.app) owns the live owner Service Desk briefing and mobile jobs pipeline. Standalone Business CRM and Private Personal CRM run as independent workspaces with separate authentication and row-level isolation — personal records are never shared with team accounts.',
    included: [
      'Live in Power CRM: owner Service Desk briefing and mobile jobs pipeline (Vetting, Submitted, Interview)',
      'Tested locally / walkthrough available: sourced pre-meeting account briefs, Business CRM follow-up briefings and private Personal CRM',
      'CSV/JSON import preview, duplicate review, audited merges and role-scoped access'
    ],
    inDevelopment: [
      'Requires provider setup: automated bi-directional sync across external CRM, mail and ERP providers.',
      'Planned: managed self-service email verification, password recovery and multi-factor authentication on standalone workspaces.'
    ],
    extra: 'Combines the live owner Service Desk briefing and mobile jobs pipeline in Power CRM with separate Business CRM, private Personal CRM and locally tested pre-meeting briefs.',
    use: 'Open the Service Desk briefing to jump to a flagged source case, or add a candidate directly to Vetting on mobile.'
  },
  {
    id: 'communications',
    title: 'Communications',
    displayTitle: 'Shared Communications',
    bucket: 'manage-retain',
    bestFor: 'Client service leads and operations teams',
    hubProblem: 'Waiting or reopened threads hide behind saved drafts, and staff lack source references when checking drafted replies.',
    hubWorkflow: 'Enquiries enter the shared inbox with reply drafts grounded in approved knowledge and source citations; escalates when evidence is weak and filters waiting, reopened or unowned threads under Needs human reply.',
    hubGain: 'Staff spot every thread still awaiting a real reply — knowing a saved draft is never treated as sent — and take over immediately.',
    beforeWorkflowResult: {
      before: 'Waiting or reopened enquiries sit buried in shared inboxes and saved drafts are mistaken for completed replies.',
      workflow: 'Staff filter by Needs human reply, inspect the source-referenced draft grounded in approved knowledge, escalate when evidence is weak or take over the thread directly.',
      result: 'Every unassigned, waiting or reopened conversation stays visibly queued until a person actually replies or resolves it.'
    },
    outcomeLine: 'Capture enquiries in one shared inbox with source-referenced drafts, weak-evidence escalation and a Needs human reply filter.',
    short: 'Give every customer enquiry a next step.',
    plainBenefit: 'Review reply drafts grounded in approved knowledge with source references, escalate when evidence is weak, and filter waiting, reopened or unowned threads under Needs human reply.',
    cardCopy: 'Source-referenced reply drafts, weak-evidence escalation and a locally tested Needs human reply filter.',
    actionSummary: 'Filter waiting, reopened or unowned threads under Needs human reply, inspect source-cited drafts and take over directly.',
    description: 'Shared inbox where staff review reply drafts grounded in approved knowledge with source references, escalate weak-evidence queries and filter waiting or reopened threads under Needs human reply.',
    benefit: 'Keep unassigned, waiting and reopened conversations visible — making clear that a saved draft is still awaiting a human reply.',
    statusBadge: 'Tested locally / walkthrough available · Requires provider setup',
    whatYouCanTry: 'Tested locally / walkthrough available: shared inbox, reply drafts grounded in approved knowledge with source references, weak-evidence escalation, immediate human takeover and the Needs human reply filter (waiting/reopened threads, missing owners and saved drafts still awaiting a reply). Requires provider setup: direct CRM handoff activation, external voice/telephony, WhatsApp Cloud API, Gmail/Outlook sync and calendar booking.',
    ctaLabel: 'Request a Communications walkthrough',
    problemsSolved: [
      'Waiting or reopened customer threads get missed when a saved draft looks like a completed reply.',
      'Staff have to guess whether a drafted answer matches approved company policies and opening hours.',
      'Urgent client callbacks and unassigned enquiries slip when teams get busy.'
    ],
    whatWeOffer: [
      'Shared inbox with reply drafts grounded in approved knowledge and explicit source references, plus automatic escalation when evidence is weak.',
      'Tested locally / walkthrough available: Needs human reply filter surfacing waiting or reopened threads, missing owners and saved drafts still awaiting a reply.',
      'Immediate human takeover and dated callbacks; direct CRM handoff activation and external voice, WhatsApp, email and booking connections require provider setup.'
    ],
    exampleToShow: 'An enquiry arrives in the shared inbox; a staff member filters by Needs human reply, sees a reopened thread with a saved draft (still awaiting a reply), checks the approved knowledge source citation and takes over directly.',
    roles: 'Client service teams, front-desk staff, customer service leads and operations managers handling inbound calls and enquiries.',
    practicalExample: 'Fictional sandbox example: urgent enquiry ENQ-402 ("Need urgent confirmation on project delivery schedule for Monday") lands in Needs human reply without an owner. A draft cites approved SLA notes, flags weak evidence on Monday slot availability for escalation, and Sarah Jenkins claims the thread and books a 14:00 callback.',
    relatedIds: ['crm', 'sales'],
    outcomes: [
      ['Source-referenced drafts & weak-evidence escalation', 'Reply drafts draw strictly from approved company knowledge with visible source references, escalating to staff whenever supporting evidence is weak.'],
      ['Needs human reply filter (Tested locally)', 'Surfaces waiting or reopened threads and missing owners in one view — making explicit that a saved draft is still awaiting a reply until sent.'],
      ['Honest channel & CRM handoff boundaries', 'Immediate human takeover works in the shared inbox today; direct CRM handoff activation and live voice, WhatsApp, email and calendar booking require provider setup.']
    ],
    featureGroups: [
      ['Shared inbox & approved-knowledge drafts', 'Drafts replies from approved company FAQs and policies with source citations, escalating automatically when evidence is weak.'],
      ['Needs human reply filter (Tested locally)', 'Highlights waiting threads, reopened conversations, missing owners and saved drafts that are still awaiting a human reply.'],
      ['Human takeover & dated callbacks', 'Staff take over any thread in one click, add internal notes, assign ownership and schedule dated callbacks (sandbox tests excluded from live counts).'],
      ['Direct CRM handoff & external channels (Requires provider setup)', 'Direct CRM handoff activation, Twilio/SIP voice telephony, Meta WhatsApp Cloud API, Gmail/Outlook sync and calendar booking require configured tenant connections.']
    ],
    included: [
      'Tested locally / walkthrough available: shared inbox, source-referenced reply drafts, weak-evidence escalation and Needs human reply filter',
      'Human takeover, named ownership, dated callbacks and sandbox exclusion from live counts',
      'Approved company knowledge library with source citations'
    ],
    inDevelopment: [
      'Requires provider setup: direct CRM handoff activation, live telephony/SIP/Twilio voice, Meta WhatsApp Cloud API, Gmail/Outlook sync and calendar booking.',
      'Planned: attachment object storage and automated closed-window WhatsApp template management.'
    ],
    extra: 'Shared inbox, source-referenced drafts, weak-evidence escalation and the Needs human reply filter are Tested locally / walkthrough available; direct CRM handoff and external messaging channels Require provider setup.',
    use: 'A fictional client enquiry lands in Needs Attention and receives a named owner and 14:00 callback.'
  },
  {
    id: 'sales',
    title: 'Sales & Intelligence',
    displayTitle: 'Sales & Intelligence',
    bucket: 'find-win',
    bestFor: 'Commercial directors and sales teams',
    hubProblem: 'Open opportunities go quiet for weeks, meeting outcomes are not logged consistently and won deals lack structured handover briefs.',
    hubWorkflow: 'Review dated hiring evidence in Opportunity Radar, then turn an accepted signal into a follow-up on an existing prospect. The Action Queue also surfaces overdue quotes and stale opportunities.',
    hubGain: 'Focused daily pipeline follow-up and clean, owner-assigned proposals ready for handover.',
    outcomeLine: 'Spot UK projects early, track competitor moves, and turn quote pipelines into owned daily actions.',
    short: 'See which opportunities deserve your next move.',
    plainBenefit: 'Surface stale opportunities, record meeting outcomes and prepare a delivery proposal for a recorded win alongside Action Queue tasks.',
    cardCopy: 'Review dated opportunity evidence and turn accepted hiring signals into prospect follow-ups.',
    actionSummary: 'Flag an open opportunity untouched for 14 days in the Action Queue and create a Delivery proposal for a recorded win.',
    description: 'Workspace for market research, prospect qualification, 14-day stale-opportunity alerts, meeting outcomes and Delivery proposal creation.',
    benefit: 'Spot stale 14-day opportunities early, log meeting outcomes and prepare structured Delivery proposals for recorded wins.',
    statusBadge: 'Tested locally / walkthrough available · Requires provider setup',
    whatYouCanTry: 'Tested locally / walkthrough available: review dated hiring evidence in Opportunity Radar and create a dated follow-up on a matching prospect, search UK Planning Data and Find a Tender, review Prospect Intelligence, spot 14-day stale opportunities and prepare Delivery proposals. First live Opportunity Radar feed and live email sending Require provider setup.',
    ctaLabel: 'Request a Sales & Intelligence walkthrough',
    beforeWorkflowResult: {
      before: 'Hiring signals, public tenders and stale quotes sit in separate tabs, so commercial teams spend hours researching prospects without turning evidence into dated follow-ups.',
      workflow: 'Search UK Planning Data and Find a Tender, review dated company evidence in Prospect Intelligence, or accept a hiring signal in Opportunity Radar to add a dated follow-up directly on a matching prospect (reusing existing tasks on repeat submissions) and build a Delivery proposal for recorded wins.',
      result: 'Commercial leads see why an opportunity was surfaced, who owns the next step, and which recorded wins have a structured Delivery proposal ready for Approval Studio.'
    },
    problemsSolved: [
      'Open opportunities go quiet for weeks without anyone noticing the record has gone stale.',
      'Hiring signals and market evidence are not linked to matching prospects with a dated next action.',
      'Won deals stall when scope, delivery owner and start date are not captured in a structured Delivery proposal.'
    ],
    whatWeOffer: [
      'Opportunity Radar (Tested locally / walkthrough available): review dated hiring evidence from an approved source with ranking reason and source record, accept the signal and create a dated follow-up on a matching existing prospect.',
      'Market Intelligence (UK Planning Data & Find a Tender) and Prospect Intelligence with explainable fit scoring and human review gates.',
      'Automatic 14-day stale-opportunity flags in the Action Queue plus a Delivery proposal builder for recorded wins.'
    ],
    exampleToShow: 'A commercial lead reviews a dated hiring signal in Opportunity Radar, inspects the ranking reason and source record, accepts it, and creates a dated follow-up on the matching existing prospect — without duplicating the task if submitted again.',
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
      ['Opportunity Radar: hiring signal to prospect follow-up', 'In the locally tested Sales Growth workflow, an owner reviews dated hiring evidence, accepts the signal, and sets a due date on a matching existing prospect. Repeat submissions reuse the task. The first live feed requires setup.'],
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
    opportunityRadar: {
      badge: 'Tested locally / walkthrough available · First feed requires provider setup',
      heading: 'Opportunity Radar: hiring evidence to dated prospect follow-up',
      exampleTitle: 'Example · Accepted hiring signal linked to an existing prospect',
      exampleBody: 'An approved hiring signal arrives with a dated source record and ranking reason. The owner reviews the evidence, accepts the signal and sets a due date — creating a dated follow-up task directly on the matching existing prospect. Repeat submissions reuse the existing task rather than creating duplicates.',
      bullets: [
        'Surfaces dated hiring evidence from an approved source alongside its ranking reason and original source record.',
        'Owner reviews and accepts the signal before any follow-up is added to the matching existing prospect.',
        'Repeat submissions reuse the existing follow-up task cleanly without creating duplicate actions.',
        'Workflow is Tested locally / walkthrough available; connecting the first live hiring feed Requires provider setup.'
      ]
    },
    included: [
      'Market Intelligence: UK Planning Data & Find a Tender lookup with direct official source links',
      'Prospect Intelligence: dated Source fact -> Interpretation -> Next step with accept/research/reject/revoke',
      'Opportunity Radar (Tested locally / walkthrough available): accepted hiring evidence turned into a dated follow-up on a matching prospect',
      'Sales Action Queue, 14-day stale-opportunity alerts, quote tracking and Delivery proposals'
    ],
    inDevelopment: [
      'Requires provider setup: connecting the first live Opportunity Radar hiring feed and connected-mailbox outreach sending.',
      'Planned: automated contact enrichment, scheduled background web monitoring and company registry webhooks.'
    ],
    extra: 'UK public-data search, Prospect Intelligence, Opportunity Radar follow-ups and Delivery proposals are Tested locally / walkthrough available; the first live Opportunity Radar feed and live email sending Require provider setup.',
    use: 'Search Leeds projects in Market Intelligence, review an expansion signal in Prospect Intelligence and assign its Action Queue follow-up.'
  },
  {
    id: 'delivery',
    title: 'Business Delivery',
    displayTitle: 'Business Delivery',
    bucket: 'deliver-scale',
    bestFor: 'Operations directors, delivery leads and finance owners',
    hubProblem: 'Post-sale deliverables lose evidence trails after handover, and overdue invoice checks sit scattered across portals and emails.',
    hubWorkflow: 'Tested locally: stable onboarding plus a project plan with deliverables, owners, due dates, evidence progress, gaps and client feedback. Live in Power CRM: overdue invoice workflow where owners record portal observations and send a follow-up draft for review.',
    hubGain: 'Clear deliverable accountability from onboarding through delivery, plus an auditable evidence trail on every overdue invoice case.',
    beforeWorkflowResult: {
      before: 'Delivery plans live in static documents with missing evidence, and overdue invoice checks are chased without a shared log.',
      workflow: 'Delivery tracks deliverables, evidence gaps and client feedback in the project plan; in Power CRM, owners filter overdue invoices, record the observed portal status and source link, and send a follow-up draft to Personal AI Team.',
      result: 'Every milestone and overdue invoice shows its check history, evidence status and a human-reviewed next step.'
    },
    outcomeLine: 'Combine stable onboarding and evidence-linked project plans with the live Power CRM overdue-invoice observation workflow.',
    short: 'Deliver agreed scope with clear evidence.',
    plainBenefit: 'Track won-deal onboarding, project-plan deliverables, evidence gaps and structured client feedback (tested locally), alongside the Live in Power CRM overdue-invoice portal observation and draft-review workflow.',
    cardCopy: 'Project plan with evidence-linked deliverables and client feedback, plus the Live in Power CRM overdue-invoice workflow.',
    actionSummary: 'Track project-plan deliverables, evidence gaps and client feedback, or record portal evidence on an overdue invoice case in Power CRM.',
    description: 'Extends beyond won-deal onboarding to a locally tested project plan (deliverables, owners, due dates, evidence progress, gaps and client feedback) plus the Live in Power CRM invoice case workflow.',
    benefit: 'Keep deliverables, client feedback and overdue invoice observations tied to named owners and verifiable evidence.',
    statusBadge: 'Live in Power CRM · Tested locally / walkthrough available',
    liveBriefing: {
      badge: 'Live in Power CRM',
      heading: 'Overdue invoice case workflow with manual portal evidence.',
      copy: 'In Power CRM (power-up-crm-portal.web.app), owners filter overdue invoice cases, open the source billing portal, manually record the observed status and source link, inspect previous check history and send a follow-up draft to Personal AI Team for human review.',
      accessPath: 'Power CRM → Service Desk → Overdue Invoice Cases',
      verificationNote: 'Live in Power CRM with staff-entered portal observations and separate human draft approval. Automated accounting/provider portal checks remain Planned (deferred).'
    },
    whatYouCanTry: 'Live in Power CRM: filter overdue invoices, open the source portal, manually record observed status and source link, view previous checks and send a follow-up draft to Personal AI Team for review. Tested locally / walkthrough available: won-deal onboarding (stable reference) plus the project plan with agreed deliverables, owners, due dates, evidence progress, gaps and structured client feedback.',
    ctaLabel: 'Request a Business Delivery walkthrough',
    problemsSolved: [
      'Won work loses momentum after onboarding when deliverables, owners and evidence gaps are not tracked in one project plan.',
      'Client feedback arrives by email and never connects back to the deliverable or milestone record.',
      'Overdue invoice checks rely on memory instead of recording what was actually seen in the source portal.'
    ],
    whatWeOffer: [
      'Tested locally / walkthrough available: stable onboarding record plus a full project plan tracking agreed deliverables, named owners, due dates, evidence progress, evidence gaps and structured client feedback.',
      'Live in Power CRM: overdue invoice case workflow — filter overdue invoices, open the source portal, manually record the observed status and source link, see previous checks and send a follow-up draft to Personal AI Team for review.',
      'Repeat-import duplicate protection on reviewed Sales-to-Delivery handovers.'
    ],
    exampleToShow: 'An owner filters overdue invoices in Power CRM, records the observed status from the source portal, checks prior history and sends a follow-up draft to Personal AI Team — while Delivery tracks project-plan deliverables, evidence gaps and client feedback.',
    roles: 'Operations directors, delivery managers, team leads, finance owners and onboarding coordinators.',
    practicalExample: 'Project plan (tested locally): after handover Ref HO-2026-041 opens onboarding ONB-2026-041, Tom Vance tracks agreed deliverables, flags a missing sign-off evidence gap and logs structured client feedback. Overdue invoice (Live in Power CRM): the owner records "Approved for Friday payment run" with the portal link and queues a follow-up draft for review.',
    relatedIds: ['sales', 'automation'],
    outcomes: [
      ['Project plan, evidence gaps & client feedback (Tested locally)', 'Track agreed deliverables, named owners, due dates, evidence progress, missing evidence gaps and structured client feedback beyond initial onboarding.'],
      ['Overdue invoice workflow (Live in Power CRM)', 'Filter overdue invoices, open the source portal, manually record observed status and source link, view check history and send a draft to Personal AI Team for review.'],
      ['Duplicate-safe stable onboarding reference', 'Preserve one stable onboarding reference across retried handovers so delivery teams never duplicate work.']
    ],
    featureGroups: [
      ['Project plan & evidence-linked deliverables (Tested locally)', 'Tracks agreed deliverables, named owners, due dates, evidence progress and explicit evidence gaps after onboarding starts.'],
      ['Structured client feedback (Tested locally)', 'Records client sign-off notes and structured feedback directly against the delivery record instead of burying them in email threads.'],
      ['Live Power CRM overdue-invoice workflow (Live in Power CRM)', 'Owners filter overdue invoices, open the source portal, manually enter observed status and source link, inspect previous checks and send a follow-up draft to Personal AI Team for human approval.'],
      ['Stable onboarding & duplicate protection', 'Confirms won deal status and agreed scope before opening onboarding, matching on handover reference so retries never create duplicate records.']
    ],
    included: [
      'Live in Power CRM: overdue invoice filtering, manual portal observation log, check history and draft handoff to Personal AI Team',
      'Tested locally / walkthrough available: stable onboarding, project plan deliverables, evidence progress/gaps and structured client feedback',
      'Duplicate prevention on repeat handovers by handover reference'
    ],
    inDevelopment: [
      'Planned: automated accounting/billing portal checks (portal observations are intentionally staff-entered today).',
      'Planned: customer-facing self-service portals, automated welcome sequences and external billing connectors.'
    ],
    extra: 'Combines the locally tested onboarding and project-plan workflow (deliverables, evidence gaps, client feedback) with the Live in Power CRM overdue-invoice observation workflow.',
    use: 'Confirm a reviewed Sales export as won and create one owned onboarding record with scope, owner and start date.'
  },
  {
    id: 'automation',
    title: 'Automation',
    displayTitle: 'Automation Studio & Power CRM Briefing',
    bucket: 'deliver-scale',
    bestFor: 'Operations leads and commercial coordinators',
    hubProblem: 'Unapproved scope edits, silent failures and manual scripts cause handover errors, missed follow-ups or duplicate records.',
    hubWorkflow: 'Automation Studio (tested locally) provides an approval queue for exact-action human sign-off, scheduled attention briefings, attempt history, failure visibility and retry timing — alongside the Live in Power CRM Automation briefing.',
    hubGain: 'Catch overdue Automation cases live in Power CRM and keep handovers auditable with clear failure visibility and receipt checks.',
    beforeWorkflowResult: {
      before: 'Handovers rely on ad-hoc scripts with no visibility into individual attempt history, failure reasons or when a retry is safe.',
      workflow: 'Staff approve exact proposal contents in the Automation Studio queue, review scheduled attention briefings and attempt history, check uncertain receipts and retry only when eligible.',
      result: 'Every handover has an exact-action approval record, transparent retry timing and zero silent duplicate creations.'
    },
    outcomeLine: 'Pair Automation Studio’s approval queue, attempt history and retry timing with the Live in Power CRM Automation briefing.',
    short: 'See what needs attention before it slips.',
    plainBenefit: 'Live in Power CRM: generate an on-demand Automation briefing flagging overdue cases, missing stage evidence and drafts awaiting review. Tested locally: Automation Studio approval queue, scheduled attention briefings, attempt history, failure visibility and retry eligibility.',
    cardCopy: 'Automation Studio approval queue, scheduled attention briefings, attempt history and retry timing — plus the Live in Power CRM briefing.',
    actionSummary: 'Review exact-action approvals, attempt history and retry eligibility in Automation Studio, or run the Live in Power CRM Automation briefing.',
    description: 'Brings Automation Studio (exact-action approval queue, scheduled attention briefings, attempt history, failure visibility and retry timing) forward alongside the CLI handover and the Live in Power CRM Automation briefing.',
    benefit: 'Keep every handover under exact-action human approval with transparent attempt history, receipt checks and live Power CRM case alerts.',
    statusBadge: 'Live in Power CRM · Tested locally / walkthrough available',
    liveBriefing: {
      badge: 'Live in Power CRM',
      heading: 'See what needs attention before it slips.',
      copy: 'Generate a briefing that flags overdue Automation cases, missing stage evidence and drafts awaiting review. Open the source case, see who owns the next step and send a draft to Personal AI Team for approval.',
      accessPath: 'Outreach Centre → Service Desk → Generate briefing',
      verificationNote: 'Runs on demand for the Automation category for signed-in owners in Power CRM. Separately, Automation Studio (approval queue, scheduled attention briefings, attempt history, retry eligibility) is Tested locally / walkthrough available; production publisher activation Requires provider setup.'
    },
    whatYouCanTry: 'Live in Power CRM: signed-in owners generate an on-demand Automation briefing under Outreach Centre → Service Desk → Generate briefing. Tested locally / walkthrough available: Automation Studio approval queue (exact-action human approval), outcome receipts, scheduled attention briefings, individual attempt history, failure visibility, retry eligibility and CLI handover fallback. Requires provider setup: production publisher activation.',
    ctaLabel: 'Request an Automation walkthrough',
    problemsSolved: [
      'Scope edits slip into delivery when proposals are not approved against their exact action contents.',
      'Interrupted handovers leave teams guessing whether Delivery created a record or when a retry is safe.',
      'Overdue Automation cases and missing stage evidence go unnoticed without scheduled attention briefings.'
    ],
    whatWeOffer: [
      'Automation Studio (Tested locally / walkthrough available): exact-action approval queue (any edit requires fresh approval), outcome receipts, scheduled attention briefings, individual attempt history, failure visibility and clear retry-eligibility timing (alongside the existing CLI handover).',
      'Live in Power CRM: on-demand Automation briefing under Outreach Centre → Service Desk → Generate briefing.',
      'Uncertain outcomes are explicitly flagged as needing a receipt check rather than silently treated as successful.'
    ],
    exampleToShow: 'An operator reviews a proposal in the Automation Studio approval queue, checks individual attempt history after a timeout, verifies the uncertain outcome via a receipt check and retries only once eligible.',
    roles: 'Operations leads, commercial coordinators and multi-team operators managing handovers and service-desk queues.',
    practicalExample: 'Automation Studio (tested locally): an operator approves exact proposal contents, inspects attempt history and retry timing if a run fails, and checks uncertain receipts so Delivery records one stable onboarding item without duplicates. Live in Power CRM: the owner runs Generate briefing to surface overdue Automation cases.',
    relatedIds: ['ai-team', 'delivery'],
    outcomes: [
      ['Automation Studio approval queue (Tested locally)', 'Exact-action human approval before handover, plus scheduled attention briefings, individual attempt history, failure visibility and retry timing.'],
      ['Honest outcome receipts & receipt checks', 'Explicitly separates created, already_exists, rejected and unconfirmed outcomes — marking uncertain outcomes as needing a receipt check.'],
      ['Live in Power CRM Automation briefing', 'Owners generate on-demand Automation briefings in Power CRM flagging overdue cases, missing stage evidence and drafts awaiting review.']
    ],
    featureGroups: [
      ['Automation Studio approval queue (Tested locally)', 'Reviews exact handover contents before execution; any edit invalidates prior approval and requires fresh human sign-off.'],
      ['Attempt history, failure visibility & retry timing (Tested locally)', 'Displays each individual attempt, why a run failed, when a retry becomes eligible and when an uncertain outcome needs a receipt check.'],
      ['Scheduled attention briefings & Live Power CRM briefing', 'Surfaces overdue cases and stuck handovers via locally tested scheduled Studio briefings and the Live in Power CRM on-demand Automation briefing.'],
      ['Command-line handover & production publisher status', 'Existing CLI handover remains available as a secondary operator tool; activating the production publisher Requires provider setup.']
    ],
    included: [
      'Live in Power CRM: on-demand Automation briefing under Outreach Centre → Service Desk → Generate briefing',
      'Tested locally / walkthrough available: Automation Studio approval queue, scheduled attention briefings, attempt history, failure visibility, retry timing and CLI handover',
      'Explicit receipt classification (created, already_exists, rejected, unconfirmed needing a receipt check)'
    ],
    inDevelopment: [
      'Requires provider setup: production publisher activation and verified external ERP, accounting or webhook connectors.',
      'Planned: custom multi-step visual workflow rules scoped per client.'
    ],
    extra: 'Brings Automation Studio (approval queue, scheduled briefings, attempt history and retry eligibility) forward alongside the Live in Power CRM briefing and CLI handover; production publisher activation Requires provider setup.',
    use: 'Confirm a handover once to see a "created" receipt, then retry safely to confirm "already_exists".'
  },
  {
    id: 'ai-team',
    title: 'AI Team & Power Command Centre',
    displayTitle: 'Human-Approved AI Team',
    bucket: 'deliver-scale',
    bestFor: 'Leadership and commercial research teams',
    hubProblem: 'AI-generated drafts lack verifiable source proof and disconnect from the live case decision before follow-up.',
    hubWorkflow: 'Moves from an approved source excerpt → cited brief → human revision → case-linked next-action draft so staff check the source and decision before approving follow-up.',
    hubGain: 'Faster research and follow-up drafting with every claim traceable to approved material and final approval always in human hands.',
    beforeWorkflowResult: {
      before: 'Staff spend hours assembling account briefs and worry that AI-assisted drafts might guess facts or act without case context.',
      workflow: 'Reviewer inspects the approved source excerpt and cited brief, requests a targeted revision, and checks the case-linked next-action draft before approving.',
      result: 'Source findings and human decisions carry cleanly into reviewable follow-ups without autonomous sending.'
    },
    outcomeLine: 'Move from approved source excerpts and cited briefs to human revisions and case-linked next-action drafts.',
    short: 'Give your team more capacity for research and preparation.',
    plainBenefit: 'Turn approved source excerpts into cited briefs, apply human revisions and carry decisions into case-linked next-action drafts — keeping local briefs, live CRM draft review and cross-service citation retrieval distinct.',
    cardCopy: 'Approved source excerpts, cited briefs, human revisions and case-linked next-action drafts for human approval.',
    actionSummary: 'Inspect an approved source excerpt and cited brief, request revisions and review case-linked next-action drafts.',
    description: 'Connects approved source excerpts, cited briefs, human revisions and case-linked next-action drafts while keeping local extractive briefs, live Power CRM draft review and cross-service citation retrieval clearly separated.',
    benefit: 'Open the source and verify the decision before approving any case-linked follow-up draft.',
    statusBadge: 'Live in Power CRM · Tested locally / walkthrough available',
    whatYouCanTry: 'Live in Power CRM: Personal AI Team draft review queue for case-linked follow-ups sent from Service Desk cases. Tested locally / walkthrough available: extractive source-cited briefs from approved company documents, human revision rounds and Research Workbench hiring-signal review. Requires provider setup: live cross-service citation retrieval across applications.',
    ctaLabel: 'Request an AI Team walkthrough',
    problemsSolved: [
      'Unconstrained AI tools draft messages without showing the approved source excerpt or case decision.',
      'Research findings and revisions lose context when moving into a case-linked follow-up.',
      'Teams need clear boundaries between local extractive briefs, live CRM draft reviews and unactivated cross-service links.'
    ],
    whatWeOffer: [
      'Tested locally / walkthrough available: approved source excerpt → cited extractive brief → human revision rounds → case-linked next-action draft.',
      'Live in Power CRM: Personal AI Team review queue where owners inspect case-linked follow-up drafts before separate human approval.',
      'Honest availability boundary: live cross-service citation retrieval across services requires provider setup / activation.'
    ],
    exampleToShow: 'A manager opens an approved source excerpt, reviews the cited brief, requests one revision tightening margin context, and checks the resulting case-linked follow-up draft before approving.',
    roles: 'Commercial managers, operations directors, account leads and team heads preparing account reviews and case follow-ups.',
    practicalExample: 'Source-to-draft chain: a manager supplies approved account notes (source excerpt), reviews the cited extractive brief, requests one revision, and checks the case-linked next-action draft in the review queue before approving follow-up.',
    relatedIds: ['automation', 'sales'],
    outcomes: [
      ['Approved source excerpt → cited brief (Tested locally)', 'Every point links back to an approved passage you supplied so managers verify facts before acting.'],
      ['Human revision → case-linked draft (Live in Power CRM)', 'Source findings and review decisions carry into case-linked next-action drafts queued in Personal AI Team for separate human approval.'],
      ['Clear cross-service & permission boundaries', 'Local extractive briefs and live CRM draft review are kept distinct from cross-service citation retrieval (Requires provider setup); no unverified autonomous agents are claimed.']
    ],
    featureGroups: [
      ['Approved source excerpt & cited brief (Tested locally)', 'Anchors extractive briefs strictly to approved internal notes or account files with traceable passage citations.'],
      ['Human revision rounds & Research Workbench (Tested locally)', 'Request targeted revisions, compare versions and pick up unresolved hiring-signal findings across sessions.'],
      ['Case-linked next-action drafts (Live in Power CRM)', 'Owners open the source case and check the recorded decision before approving a follow-up draft in Personal AI Team.'],
      ['Cross-service citation retrieval (Requires provider setup)', 'Live automatic citation retrieval across separate Power-Up services requires activation and is not claimed as live today.']
    ],
    included: [
      'Live in Power CRM: Personal AI Team draft review flow for case-linked follow-ups',
      'Tested locally / walkthrough available: approved-source extractive briefs, revision rounds and Research Workbench',
      'Explicit human sign-off before any draft is approved or sent'
    ],
    inDevelopment: [
      'Requires provider setup: live cross-service citation retrieval across separate applications.',
      'Planned: additional specialist role templates and external ERP connectors only where explicitly verified.'
    ],
    extra: 'Keeps local extractive briefs (Tested locally), live Power CRM draft review (Live in Power CRM) and cross-service citation retrieval (Requires provider setup) clearly distinct.',
    use: 'Upload approved account notes, review the cited extractive brief, ask for a revision and record human acceptance.'
  },
  {
    id: 'marketing',
    title: 'Marketing & Social Media',
    displayTitle: 'Marketing & Social Media',
    bucket: 'find-win',
    bestFor: 'Managing directors and marketing leads',
    hubProblem: 'Campaign research, copy drafts and outcome spreadsheets sit in separate tools, while missing cost figures get guessed.',
    hubWorkflow: 'Tested locally (browser-local): cite a competitor or trend observation, propose and approve a test, draft and repurpose social posts, emails or article outlines under one campaign ID, and compare imported outcomes honestly.',
    hubGain: 'One traceable campaign loop from research observation and drafted copy to recorded cost per meeting, wins and contribution.',
    beforeWorkflowResult: {
      before: 'Trend notes, social/email drafts and outcome reports live in disconnected files with no shared campaign ID.',
      workflow: 'Marketer cites a competitor or trend observation, approves a campaign test, saves and repurposes a social post, email or article outline, and compares target vs imported outcomes on the same campaign ID.',
      result: 'Every draft ties back to a reviewed hypothesis and honest outcome attribution where missing figures stay marked unknown.'
    },
    outcomeLine: 'Run research-led campaign tests, draft and repurpose copy, and compare imported outcomes on the same campaign ID.',
    short: 'Connect campaign research, copy and outcomes.',
    plainBenefit: 'Cite a competitor or trend observation, propose and approve a test, draft and repurpose social posts, emails or article outlines, and compare imported outcomes against the same campaign ID (missing figures stay unknown).',
    cardCopy: 'Research-led campaign tests, social/email/article drafting & repurposing, and honest outcome comparison on one campaign ID.',
    actionSummary: 'Cite a trend, approve a test, draft/repurpose copy and compare imported outcomes on the same campaign ID.',
    description: 'Full browser-local campaign loop: cite competitor or trend observations, propose and approve tests, save and repurpose social posts, emails or article outlines, and compare imported outcomes on the same campaign ID.',
    benefit: 'Keep research hypotheses, drafted copy and imported campaign outcomes tied to one campaign ID with zero invented numbers.',
    statusBadge: 'Tested locally / walkthrough available · Sample-data demo',
    whatYouCanTry: 'Tested locally / walkthrough available (browser-local): cite a competitor or trend observation, propose a test, review and approve it, save a social post, email or article outline, repurpose the starting copy, and compare targets against imported outcomes for the same campaign ID while missing figures remain unknown. Requires provider setup / Planned: ad-spend connectors, external analytics sync and live social publishing.',
    ctaLabel: 'Request a Marketing walkthrough',
    problemsSolved: [
      'Campaign ideas, social/email drafts and outcome reports live in separate tools with no shared campaign ID.',
      'Missing finance inputs get silently zeroed out or guessed instead of staying clearly marked unknown.',
      'Unattributed enquiries and duplicate prospect IDs distort campaign conversion reporting.'
    ],
    whatWeOffer: [
      'Tested locally / walkthrough available (browser-local): cite competitor/trend observations, propose and approve a campaign test, save a social post, email or article outline, and repurpose starting copy against one campaign ID.',
      'Outcome comparison: load manual Sales and finance imports to compare cost per attended meeting, cost per win and contribution while keeping Unattributed rows visible and missing figures marked unknown.',
      'Automatic duplicate prospect ID rejection; ad-spend connectors, analytics sync and live publishing remain Requires provider setup / Planned.'
    ],
    exampleToShow: 'A marketer cites a competitor observation, approves a campaign test under ID CMP-Q4-01, drafts and repurposes an email and social post, then compares imported outcomes for CMP-Q4-01 with missing finance figures marked unknown.',
    roles: 'Marketing leads, commercial directors and managing directors wanting research-led campaigns tied to honest outcome tracking.',
    practicalExample: 'Full browser-local loop: marketing logs a cited trend observation, approves a campaign test (ID CMP-Q4-01), saves a social post and repurposes it into an email and article outline, then imports the Sales outcomes JSON to compare qualified leads, attended meetings and wins against CMP-Q4-01 with duplicate IDs rejected.',
    relatedIds: ['sales', 'communications'],
    outcomes: [
      ['Research-led campaign tests (Tested locally · browser-local)', 'Cite a competitor or trend observation, propose a structured test and record human review and approval before drafting copy.'],
      ['Draft & repurpose copy on one campaign ID (Tested locally)', 'Save social posts, emails or article outlines and repurpose starting copy against the exact same campaign ID used to measure outcomes.'],
      ['Honest outcome comparison & unknown-figure guard', 'Compare imported sales and finance outcomes side by side, keeping Unattributed rows visible, rejecting duplicate IDs and leaving missing figures marked unknown.']
    ],
    featureGroups: [
      ['Research observation & test approval (Tested locally · browser-local)', 'Cite a competitor or market trend observation, define a testable hypothesis and approve the campaign test before producing copy.'],
      ['Copy drafting & repurposing (Tested locally · browser-local)', 'Save a social post, email or article outline and repurpose starting copy cleanly while keeping every asset tied to the same campaign ID.'],
      ['Campaign outcome comparison (Sample-data demo)', 'Upload manual Sales JSON and finance imports in the browser to compare cost per attended meeting, cost per win, contribution and Unattributed rows without duplicate prospect IDs.'],
      ['Ad-spend, analytics & live publishing (Requires provider setup / Planned)', 'Automated ad-spend connectors, external web analytics sync and live social media scheduling/publishing are not active today.']
    ],
    included: [
      'Tested locally / walkthrough available (browser-local): cited trend observations, test approval, social/email/article drafting and copy repurposing',
      'Sample-data demo: manual Sales JSON & finance import comparison on the same campaign ID',
      'Automatic duplicate prospect ID rejection and explicit Unknown handling for missing figures'
    ],
    inDevelopment: [
      'Requires provider setup: live ad-spend API connectors and external analytics sync.',
      'Planned: live social media publishing, scheduling and social inbox engagement.'
    ],
    extra: 'The research-led test, drafting and repurposing workflow is Tested locally / walkthrough available (browser-local); ad-spend connectors, analytics sync and live publishing Require provider setup or are Planned.',
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

const evidenceToActionWalkthrough = () => `<section class="wrap section editorial-centrepiece" id="evidence-to-action" aria-labelledby="evidence-to-action-heading"><div class="centrepiece-header"><div>${eyebrow('EVIDENCE → ACTION WALKTHROUGH · LIVE IN POWER CRM')}<h2 id="evidence-to-action-heading">How evidence becomes a human-approved action.</h2><p>One worked example showing the difference between <strong>rules-based alerts</strong>, <strong>staff-entered evidence</strong> and <strong>AI-assisted drafting</strong> — so buyers can see exactly where people stay in control.</p></div></div><ol class="intel-pipeline-grid handover-steps-3col"><li><span class="intel-step-num">01 · RULES-BASED ALERT · POWER CRM</span><h3>Spot the overdue invoice case.</h3><p>The owner Service Desk briefing flags overdue invoice case <code>INV-2026-108</code> with missing portal evidence, showing its owner, due date and source case link.</p><div class="intel-chip"><a href="/crm" style="text-decoration:underline">Power CRM Service Desk ↗</a></div></li><li><span class="intel-step-num">02 · STAFF-ENTERED EVIDENCE · DELIVERY</span><h3>Record what was seen in the portal.</h3><p>The owner opens the billing portal, manually records the observed status and source link alongside previous checks — never relying on unverified automated scraping.</p><div class="intel-chip"><a href="/business-delivery" style="text-decoration:underline">Business Delivery invoice flow ↗</a></div></li><li><span class="intel-step-num">03 · AI-ASSISTED DRAFTING · HUMAN APPROVAL</span><h3>Queue a draft for separate review.</h3><p>The owner sends a follow-up draft to Personal AI Team; a person inspects the saved evidence card and approves separately before anything is sent.</p><div class="intel-chip ok"><a href="/dashboard?service=delivery&scenario=invoice#guided-demo" style="text-decoration:underline">Try in Sample-data demo ↗</a></div></li></ol></section>`;

const wonDealHandoverSection = () => `<section class="wrap section editorial-centrepiece" id="won-deal-handover" aria-labelledby="won-deal-handover-heading"><div class="centrepiece-header"><div>${eyebrow('WORKED EXAMPLE · STAFF-LED HANDOVER (TESTED LOCALLY)')}<h2 id="won-deal-handover-heading">Won deal → Reviewed proposal → Approved handover → Confirmed onboarding</h2><p>A staff-led workflow where team members transfer the proposal between three separate applications. Tested locally with synthetic data; production publisher activation requires provider setup.</p></div></div><ol class="intel-pipeline-grid handover-steps-3col"><li><span class="intel-step-num">01 · WON DEAL → REVIEWED PROPOSAL</span><h3>Sales Intelligence / Sales Growth</h3><p>Record the win and prepare a structured Delivery proposal with the agreed scope, delivery owner and target start date.</p><div class="intel-chip"><a href="/sales-intelligence" style="text-decoration:underline">Explore Sales &amp; Intelligence ↗</a></div></li><li><span class="intel-step-num">02 · APPROVED HANDOVER</span><h3>Automation Studio</h3><p>Staff review exact proposal contents in the Studio approval queue, inspect attempt history and check uncertain receipts.</p><div class="intel-chip"><a href="/automation" style="text-decoration:underline">Explore Automation ↗</a></div></li><li><span class="intel-step-num">03 · CONFIRMED ONBOARDING</span><h3>Business Delivery</h3><p>Confirm onboarding with a stable reference, then manage deliverables, evidence gaps and client feedback in the project plan.</p><div class="intel-chip ok"><a href="/business-delivery" style="text-decoration:underline">Explore Business Delivery ↗</a></div></li></ol></section>`;

const homeBriefServices = () => `<section class="service-overview-soft" id="what-you-can-do" aria-labelledby="what-you-can-do-heading"><div class="wrap"><div class="overview-split overview-split-light"><div>${eyebrow('OUR SERVICES · 03 · AI &amp; BUSINESS SERVICES')}<h2 id="what-you-can-do-heading">Seven practical platforms.<br><em>Human-controlled execution.</em></h2><p class="overview-light-copy">Alongside headhunting and coaching, seven focused platforms connect live Power CRM briefings, shared enquiries, hiring signals, delivery plans and campaign tests — with clear availability labels and people always in control.</p><div class="actions">${button('Explore AI Business Services', '/platforms')}${button('Sample-data demo', '/dashboard', true)}</div></div><figure class="overview-media-light" style="margin:0"><img src="assets/human-team-systems.jpg" alt="Three UK commercial and operations leaders collaborating around a laptop in a modern office" width="1264" height="848" loading="lazy"><figcaption>Practical business software designed around real commercial teams — keeping human judgement at the centre of every action.</figcaption></figure></div><div class="capability-matrix-grid" id="seven-services" style="margin-top:36px">${[
  ['crm', '/crm', 'CRM &amp; Power CRM Service Desk', 'Live in Power CRM · Tested locally', 'Flag overdue cases, missing evidence and reviewable drafts in the owner briefing, add candidates on mobile and separate Business from Personal CRM.'],
  ['communications', '/communications', 'Power-Up Communications', 'Tested locally · Requires provider setup', 'Review reply drafts cited from approved knowledge, escalate weak evidence and catch waiting or reopened threads under Needs human reply.'],
  ['sales', '/sales-intelligence', 'Sales &amp; Intelligence', 'Tested locally · Requires provider setup', 'Search UK Planning Data &amp; Find a Tender, turn Opportunity Radar hiring signals into dated prospect follow-ups and prepare Delivery proposals.'],
  ['delivery', '/business-delivery', 'Business Delivery', 'Live in Power CRM · Tested locally', 'Manage project-plan deliverables, evidence gaps and client feedback, plus log portal observations on overdue invoice cases in Power CRM.'],
  ['automation', '/automation', 'Automation Studio &amp; Briefing', 'Live in Power CRM · Tested locally', 'Approve exact handover scope in Automation Studio with attempt history and retry timing, plus run the Live in Power CRM Automation briefing.'],
  ['ai-team', '/ai-team', 'Power-Up AI Team', 'Live in Power CRM · Tested locally', 'Move from approved source excerpts and cited briefs through human revisions into case-linked follow-up drafts awaiting approval.'],
  ['marketing', '/marketing-social-media', 'Marketing &amp; Social Media', 'Tested locally · Sample-data demo', 'Cite competitor/trend observations, approve tests, draft and repurpose social/email/article copy and compare imported outcomes on one campaign ID.']
].map(([id, href, name, status, outcome]) => `<a class="capability-matrix-item" id="home-service-${id}" href="${href}"><span class="service-brand-icon small"><img src="assets/services-v2/${id}.svg" width="22" height="22" alt="" loading="lazy"></span><div><h3>${name} <span>↗</span></h3><span class="mini-status-tag">${status}</span><p>${outcome}</p></div></a>`).join('')}</div></div></section>`;

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

export const aiServicesPage = `<section class="page-hero"><video autoplay loop muted playsinline preload="metadata" class="hero-video-bg" aria-hidden="true"><source src="assets/videos/ai-hero.mp4" type="video/mp4"></video><div class="video-overlay"></div><div class="wrap">${eyebrow('POWER-UP TALENT | AI BUSINESS SERVICES HUB')}<h1>Seven practical services for finding work,<br><em>following up and delivering it.</em></h1><p>Compare live Power CRM workflows, locally tested platform walkthroughs and sample-data demos across CRM, Communications, Sales &amp; Intelligence, Business Delivery, Automation Studio, AI Team and Marketing &amp; Social Media.</p><div class="actions">${button('Request a walkthrough', enquiry('AI services walkthrough'))}${button('Try Sample-data demo', '/dashboard', true)}</div></div></section>${evidenceToActionWalkthrough()}<section class="ai-overview" aria-labelledby="ai-overview-heading"><div class="wrap"><div class="ai-centred"><h2 id="ai-overview-heading">Explore the seven services</h2></div></div></section>${wonDealHandoverSection()}<section class="wrap section split"><div>${eyebrow('WALKTHROUGH &amp; AVAILABILITY LABELS')}<h2>Plain-language status<br>across every service.</h2></div><div><p class="large-copy">Every page distinguishes clearly between <strong>Live in Power CRM</strong>, <strong>Tested locally / walkthrough available</strong>, <strong>Sample-data demo</strong>, <strong>Requires provider setup</strong> and <strong>Planned</strong>.</p><p>Try the four interactive sample-data scenarios (including the new Power CRM Service Desk overdue-invoice walkthrough) or open the seven-service sample workspace before requesting a tailored walkthrough.</p><div class="actions">${button('Request a walkthrough', enquiry('AI services walkthrough'))}${button('Open sample-data demo', '/dashboard', true)}</div></div></section>`;

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
    .replace('</head>', '<link rel="stylesheet" href="signature.css?v=6"></head>')
    .replace('</body>', '<script src="assets/js/concierge-chat.js?v=1" defer></script></body>')
    .replace('Specialist talent, performance coaching and AI intelligence', 'Core headhunting (one company per sector), coaching &amp; 7 AI systems')
    .replace('Strict single-client territory exclusivity across the UK.', 'Working with one organisation per sector at a time across the UK.')
    .replace('for UK technical distribution, engineering, construction &amp; industry.', 'for ambitious organisations across all UK industry sectors.')
    .replace('Human judgement. Better intelligence.', 'Elite Headhunters. One Organisation Per Sector.');
}
