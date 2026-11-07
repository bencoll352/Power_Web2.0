# Power-Up Talent — Seven AI & Business Platforms Readiness Inventory

This internal inventory tracks the verified status of each platform capability across the seven product repositories as of November 2026.

Status definitions:
- **verified live**: Publicly reachable production deployment with verified customer access path. *(None of the seven application workspaces is linked directly as a public self-service production app on this marketing website; all product CTAs route through the website walkthrough / pilot enquiry flow.)*
- **verified in staging**: Hosted private staff workspace verified, but public gateway or latest build publication remains pending.
- **local pilot**: Implemented and tested in the repository for local / operator-run pilot workflows.
- **provider-dependent**: Adapter code is implemented, but live operation requires per-customer external provider credentials (e.g. Twilio, Meta WhatsApp Cloud API, Google OAuth/Calendar) and controlled acceptance testing.
- **in development**: Planned or partially scaffolded scope; placed in the "In development & expansion areas" section on product pages and omitted from built workflow claims.

---

## 1. CRM (`bencoll352/CRM-Power-Up-Business-Person-`)
- **Inspected branches/commits**: `main` (`9acfb8978`) and `feat/crm-core-journeys` (`58267a202`).
- **Business CRM — Company & contact records, owners, decision-makers, stakeholder roles**: `local pilot`
- **Business CRM — Account dossiers (history, notes, calls, meetings)**: `local pilot`
- **Business CRM — Opportunity pipeline (board/list views, required stage fields, weighted forecasts)**: `local pilot`
- **Business CRM — Follow-up tasks with owner, due date & overdue views**: `local pilot`
- **Business CRM — Renewal & booked review dates (flags renewals within 30 days without timely review)**: `local pilot`
- **Business CRM — Saved views, custom fields, CSV import preview, duplicate review, audited merges, scoped files**: `local pilot`
- **Business CRM — Roles, workspace permissions & versioned integration interface**: `local pilot`
- **Personal CRM — Contacts, relationship circles, private notes, remembered details, birthdays, reconnect reminders (cadence/snooze/dismiss/off), drafts & exports**: `local pilot`
- **Separate access & data boundaries between Business CRM and Personal CRM**: `local pilot` (enforced via separate sessions and PostgreSQL RLS).
- **Email verification, password recovery, MFA, operational monitoring & managed backups**: `in development`

---

## 2. Communications (`bencoll352/Power-Up-communication-`)
- **Inspected branch/commit**: `main` (`46202e289`). Private staff app v1.0.0 hosted on staging; v1.0.1 publication pending.
- **Shared inbox (history, ownership, priority, status, internal notes, human takeover)**: `verified in staging` / `local pilot`
- **Company knowledge (approved FAQs, opening hours, services, policies, escalation guidance)**: `verified in staging` / `local pilot`
- **Cases & callbacks (assign work, due dates, resolution, linked conversation)**: `verified in staging` / `local pilot`
- **Needs attention dashboard (overdue cases/callbacks, unassigned conversations, sandbox excluded from live counts)**: `local pilot` (v1.0.1 source)
- **Reporting (volumes, response times, overdue work, sandbox vs live separation)**: `local pilot`
- **AI Voice Receptionist (Twilio inbound call handling, UK English voice/pronunciation, approved answers, transfer/callback)**: `provider-dependent`
- **Website chat, Gmail OAuth email support & WhatsApp Cloud API**: `provider-dependent`
- **Appointments (Google Calendar OAuth availability & confirmed bookings)**: `provider-dependent`
- **Public customer gateway deployment, attachments, closed-window WhatsApp templates & Microsoft 365**: `in development`

---

## 3. Sales & Intelligence (`bencoll352/Sales-Intelligence---Sales-Growth`)
- **Inspected branch/commit**: `main` (`db8b654a8`).
- **Ideal customer profile (target sectors, locations, exclusions)**: `local pilot`
- **Prospect records (company/contact details, source evidence, ownership, notes, transactional CSV import with preview & duplicate checks)**: `local pilot`
- **Qualification (fit assessed separately from data confidence & contactability; missing info surfaced)**: `local pilot`
- **Sales Action Queue (overdue tasks, accounts needing owner, engaged prospects, new prospects to review)**: `local pilot`
- **Quote follow-up (one tracked quote per prospect: reference, owner, date; overdue reminder cleared on accepted/declined/withdrawn)**: `local pilot`
- **Pipeline, activity logging & approved staff follow-up task sequences**: `local pilot`
- **Campaign preparation (outreach drafts, exact rendered previews, owner approval digest & blocked review queue)**: `local pilot`
- **Structured Sales handover export (for Business Delivery) & Marketing outcomes JSON export**: `local pilot`
- **Live prospect discovery, contact enrichment, tenders, planning applications, competitor monitoring, buying/hiring signals & live mailbox sending**: `in development` (positioned as expansion areas)

---

## 4. Business Delivery (`bencoll352/Business-Delivery-Power-Up-Talent`)
- **Inspected branches/commits**: `codex/business-delivery-foundation` (`e68cbbd73`) and `main` (`09314955c`).
- **Import structured Sales handover**: `local pilot`
- **Confirm deal is won and scope is agreed**: `local pilot`
- **Record delivery owner, agreed scope and start date**: `local pilot`
- **View onboarding work in a single list**: `local pilot`
- **Detect repeat imports and preserve existing onboarding record**: `local pilot`
- **Authenticated multi-user workspaces, onboarding forms, document collection, project/task tracking, client portal, scheduling, proposals/contracts, quotes, invoicing, delivery reporting & workforce modules**: `in development`

---

## 5. Automation (`bencoll352/Automation---Power-Up-Talent`)
- **Inspected branches/commits**: `codex/automation-studio` (`367016c53`) and `main` (`9c4d0d419`).
- **Route reviewed Sales handover and agreed instructions to Business Delivery**: `local pilot`
- **Record explicit run outcome (created, already existed, rejected, unconfirmed)**: `local pilot`
- **Reuse handover reference on retry to avoid duplicate onboarding records**: `local pilot`
- **Keep run history without copying full customer payload into operational log**: `local pilot`
- **Operator-controlled execution**: `local pilot`
- **Visual workflow builder, automated triggers/schedules, durable background jobs, role-based approvals, automated retries/reconciliation, monitoring, spend controls & integration management**: `in development`

---

## 6. AI Team (`bencoll352/AI-Employee`)
- **Inspected branches/commits**: `main` (`30ecfb373`), `codex/ai-command-centre-foundation` (`3bebcb12f`) and `codex/initial-agent-profiles` (`8fb7b1192`).
- **Chief of Staff assignment briefing (objective, acceptance criteria, approved sources)**: `local pilot`
- **Role-based AI teammates (responsibilities, instructions, availability)**: `local pilot`
- **Evidence & knowledge (approved source material, extractive citations, versioned deliverables)**: `local pilot`
- **Review, revision requests, approvals & execution history**: `local pilot`
- **Delivery brief (browser preview of Sales handover, agreed delivery details entry, downloaded instructions for Automation)**: `local pilot`
- **Browser UK voice input / speech options**: `provider-dependent` (browser capability)
- **Unattended cloud schedules, autonomous external actions & live third-party tool execution**: `in development`

---

## 7. Marketing & Social Media (`bencoll352/Marketing-Social-Media`)
- **Inspected branches/commits**: `codex/marketing-hub` (`9c33afb98`) and `main` (`c7c755e22`).
- **Import Sales & Intelligence outcomes JSON into Campaign outcomes dashboard in browser**: `local pilot`
- **Compare leads, qualified leads, attended meetings and won deals by source campaign**: `local pilot`
- **Calculate lead-to-win conversion using all imported leads in each campaign as denominator**: `local pilot`
- **Keep prospects without a known campaign visible as Unattributed**: `local pilot`
- **Reject duplicate prospect IDs to prevent double counting**: `local pilot`
- **Campaign planning, brand knowledge, content calendars, social monitoring, content repurposing, avatar/video creation, creative variants, newsletters, approvals, scheduling & live social publishing**: `in development`
