# Power-Up Talent — Seven AI & Business Platforms Readiness & Enquiry Inventory

This document records the verified capability status across the seven Power-Up Talent business platforms and the website enquiry architecture so that public website copy, product pages, and interactive product demos remain strictly aligned with verified repository evidence.

## Status Classifications

- **`verified in staging` / `ready to demonstrate`**: Built, tested, and verified in staging or local walkthroughs.
- **`local pilot`**: A focused, end-to-end operator-controlled or browser-based workflow is built and ready for pilot evaluation; broader multi-user or suite modules remain in development.
- **`provider-dependent`**: Adapter and UI workflows exist, but live operation requires per-customer third-party provider credentials and connection verification (“Available with a configured connection”).
- **`in development` / `separate integration proposal`**: Planned roadmap capability or separate integration proposal (such as Dittofeed onboarding emails, Lago billing, or automatic website-to-Sales attribution) that is isolated from current sales claims.

---

## Website Enquiry & Territory Review Architecture

- **Current hosting environment**: Static Firebase Hosting (`dist/` served on target `power-up-talent` in project `power-up-crm-portal`). No server-side form receiver or Cloud Function submission binding is currently deployed.
- **Honest fallback implementation (`dist/app.js`, `contact.html`, `check.html`)**:
  1. **Client Commercial Brief (`#enquiry-form`)**:
     - Accepts `?interest=`, `?service=`, or `?platform=` parameters from product and service CTAs, normalises known aliases (e.g., `crm` → `AI services: CRM`), displays the selection in an editable `<select name="interest">`, and falls back to `Growth partnership` with a visible notice if an unrecognised value is supplied.
     - Validates `name`, `email`, `interest`, and `message` (minimum 10 characters) with field-level error messages (`role="alert"`, `aria-invalid="true"`) while preserving entered values.
     - Prepares a formatted email draft in `#email-copy`, reveals `#email-result` with a copy-to-clipboard button (`#copy-brief`), and triggers `mailto:info@power-uptalent.co.uk`. Never claims server-side delivery.
  2. **Confidential Candidate Enquiry (`#candidate-form`)**:
     - Activated directly via `?path=candidate`, `?interest=Career conversation`, or `#candidate-path`.
     - Uses proportionate fields (`cand_name`, `cand_role`, `cand_email`, `cand_notes`) to compose the `mailto:info@power-uptalent.co.uk` draft and populates `#candidate-email-copy` + `#copy-candidate-brief` so candidate input is never discarded.
     - Button is explicitly labelled **`Email us confidentially ↗`**.
  3. **Territory Exclusivity Review (`#territory-check-form` on `check.html`)**:
     - Clearly distinguishes a **request for manual review** from **confirmed territory availability**.
     - Explains that exclusivity applies only to selected strategic partnerships where the exact **industry sector, geographic territory, named competitor boundaries, service scope, and duration** are confirmed and signed in writing.
     - Composes a structured review email in `#territory-email-copy` with a copy button (`#copy-territory-brief`) and opens `mailto:info@power-uptalent.co.uk`.
- **Server delivery status**: Marked **unverified / not bound** on static hosting. To enable direct server submission in future, bind an authorised HTTPS endpoint (e.g., Firebase Cloud Function or verified form receiver) with server-side validation, rate limiting, and an authorised destination mailbox before displaying a server-acknowledged “Sent” state.

---

## 1. CRM (`/crm`)

- **Business CRM (`verified in staging`)**:
  - Company and contact records, named owners, decision-makers, and stakeholder roles.
  - Account dossiers with relationship history, notes, calls, and meeting records.
  - Opportunity pipeline with board and list views, required fields by stage, and weighted forecasts.
  - Follow-up tasks with owner and due date, plus overdue views.
  - Renewal and booked review dates: flags accounts renewing within 30 days without a timely review.
  - Saved views, custom fields, CSV import preview, duplicate review, audited merges, and scoped files.
- **Personal CRM (`verified in staging`)**:
  - Personal and professional contacts, relationship circles, notes, and remembered details.
  - Contact methods, interaction history, important dates, and birthdays.
  - Reconnect reminders with configurable cadence, snooze, dismiss, and off controls.
  - Drafts and portable contact exports.
- **Workspace & Data Boundary**:
  - Business CRM and Personal CRM have separate access and data boundaries and do not share records automatically.
- **In Development**:
  - Managed email verification, password recovery, MFA, automated backup rotation, and live external integration adapters.

---

## 2. Communications (`/communications`)

- **Team Workspace (`ready to demonstrate`)**:
  - Shared inbox with conversation history, ownership, priority, status, internal notes, and human takeover.
  - Company knowledge base (approved FAQs, opening hours, services, policies, and escalation guidance).
  - Cases and callbacks with assigned owners, due dates, and resolution records.
  - Needs Attention view and operational reporting (sandbox tests excluded from live work counts).
- **Provider-Dependent (`available with a configured connection`)**:
  - AI Voice Receptionist (inbound call handling, UK English voice settings, transfer/callback routing).
  - Website chat gateway, Gmail OAuth email support sync, and Meta WhatsApp Cloud API messaging.
  - Google Calendar appointment confirmation.
- **In Development**:
  - Public per-customer gateway provisioning, attachment storage, closed-window WhatsApp template management, and autonomous background mail sync.

---

## 3. Sales & Intelligence (`/sales-intelligence`)

- **Core Workspace (`ready to demonstrate`)**:
  - Ideal Customer Profile (ICP) definition and explainable qualification (assessing fit separately from data confidence and contactability).
  - Prospect records with source evidence, ownership, notes, and CSV import with duplicate checks.
  - Sales Action Queue prioritising overdue tasks, unassigned accounts, engaged prospects, and new prospects.
  - Quote follow-up tracking (current limit: **one tracked quote per prospect**; clears when accepted, declined, or withdrawn).
  - Pipeline activity, staff task sequences, and reviewed outreach drafts (distinct from live sending).
  - Structured Sales handover JSON export (for Business Delivery) and Marketing outcomes JSON export.
- **In Development / Expansion Areas**:
  - Live prospect discovery, automated contact enrichment, tenders, planning applications, competitor monitoring, buying signals, live connected-mailbox outreach sending, and automatic website-to-Sales attribution.

---

## 4. Business Delivery (`/business-delivery`)

- **Pilot Onboarding Workflow (`local pilot`)**:
  - Import the reviewed, structured Sales handover.
  - Confirm that the deal is won and the scope is agreed.
  - Record the delivery owner, agreed scope, and start date.
  - View onboarding work in a single clear list.
  - Detect repeat imports of the same handover reference and preserve the existing onboarding record.
- **In Development / Separate Proposals**:
  - Multi-user authentication and role-based access.
  - Customer onboarding forms, document collection checklists, client portals, full project/task tracking, scheduling, proposals, contracts, invoicing, workforce administration, Lago billing, and Dittofeed onboarding email journeys.

---

## 5. Automation (`/automation`)

- **Operator-Controlled Pilot Workflow (`local pilot`)**:
  - Route a reviewed Sales handover and its agreed delivery instructions to Business Delivery under operator control.
  - Record explicit run outcomes (`created`, `already existed`, `rejected`, or `unconfirmed`), distinguishing confirmed outcomes from unresolved runs.
  - Reuse the handover reference on retry so repeat submissions find the existing onboarding record in Business Delivery.
  - Keep a minimal operational run history without copying the full customer payload into the automation log.
- **In Development**:
  - Visual workflow builder, unattended event/schedule triggers, multi-step branching, spend controls, and third-party integration credentials.

---

## 6. AI Team (`/ai-team`)

- **Core Workspace (`ready to demonstrate`)**:
  - Chief of Staff assignment briefing with defined objectives, acceptance criteria, and approved sources.
  - Role-based AI teammates with scoped instructions.
  - Cited source passages, human review, revision requests, and approval/execution history.
  - Browser Delivery Brief tool: preview a Sales handover in the browser, enter agreed delivery details, and download reviewed instructions for operator use in Automation.
  - Browser UK English voice input and speech playback where supported.
- **In Development / Provider-Dependent**:
  - Unattended scheduled activity, autonomous actions without human review, and external cloud LLM/voice provider integrations.

---

## 7. Marketing & Social Media (`/marketing-social-media`)

- **Browser Campaign Outcomes Workflow (`local pilot`)**:
  - Import the Sales & Intelligence outcomes JSON file in the browser into the Campaign Outcomes dashboard.
  - Compare leads, qualified leads, attended meetings, and won deals by campaign.
  - Calculate lead-to-win conversion using all imported leads in each campaign as the denominator.
  - Keep prospects without a known campaign visible in an explicit `Unattributed` row.
  - Reject files with duplicate prospect IDs.
- **In Development / Separate Proposals**:
  - Campaign planning, brand knowledge libraries, content calendars, social listening, creative repurposing, avatars, email newsletters, multi-step approvals, live social publishing, and automatic website-to-Sales attribution.
