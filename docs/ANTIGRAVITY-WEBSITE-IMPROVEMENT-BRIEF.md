# Antigravity brief for the Power-Up Talent website

Improve the existing Power-Up Talent public website based on the audit below. Implement and test website changes in bencoll352/Power_Web2.0.

- Public website: https://power-up-talent.web.app/
- Staff CRM reference: https://power-up-crm-portal.web.app/

Read repository instructions and confirm the Firebase Hosting site and publish directory before editing. Inspect the current pages, navigation, forms, demos and Firebase configuration. Preserve the brand and site architecture. Recheck each audit finding against the current source and deployment, especially direct enquiry intake, which may already exist in this checkout. Build on verified work.

## Objective

Help a UK business buyer understand the offer, choose a service, see how it fits their business and request a walkthrough. Keep distinct journeys for hiring clients, coaching buyers, software buyers and candidates.

## 1. Verify and improve enquiry submission

The commercial enquiry, confidential candidate enquiry and sector review opened email drafts in the audited release. Verify the current behaviour and reuse the existing approved intake if present.

- Keep the three enquiry types distinct. Carry the selected service or intent into the form, display it before submission and request only the information needed to respond.
- Validate on both sides, prevent accidental repeat submissions and support keyboard use. Show progress, confirmation after the receiver accepts the enquiry, and an actionable error that preserves entered values.
- Keep contact and candidate information out of URLs, analytics and console logs. Verify that the candidate enquiry destination is private.
- Keep email as a labelled fallback. If the approved destination or credentials are unavailable, complete and test the independent work, identify the exact missing configuration and label the live fallback **Open email draft**. Show confirmation only after a verified submission.
- Test with synthetic data and a test receiver. Do not send test enquiries to a live team inbox.

## 2. Improve the homepage

- Keep headhunting as the main proposition. Add **Explore AI Business Services** alongside the main hiring action.
- Distinguish recruitment, coaching and software journeys. Preserve a clearly labelled confidential candidate route.
- Keep all seven services visible with concise, outcome-led summaries linked to their detail pages.
- Consolidate repeated promotional sections. Replace claims such as “genuinely unstoppable” and “built to dominate your market” with specific benefits supported by the offer.

## 3. Simplify the AI Business Services hub

Use seven consistent cards covering the buyer, problem, workflow and business outcome. Link to each detail page and to the relevant demo where one exists.

| Service | What to explain |
| --- | --- |
| Sales Intelligence / Sales Growth | Surface stale opportunities, record meeting outcomes and prepare a Delivery proposal for a recorded win. |
| Business / Personal CRM | Surface due and overdue commitments and open source tasks. Explain the separation of Business and Personal workspaces. |
| Power-Up Communications | Prioritise unassigned enquiries, overdue callbacks and drafts awaiting review. |
| Business Delivery | Give onboarding a stable reference, assign ownership, flag overdue milestones and show the evidence needed to advance. |
| Automation | Review exact handover scope, check outcomes and safely retry an approved proposal where supported. Explain the separate live CRM briefing. |
| Power-Up AI Team | Review hiring signals, reopen supporting evidence and prepare drafts for staff review. |
| Marketing & Social Media | Compare recorded costs, revenue and contribution across campaigns. Mark missing figures as unknown. |

Use one worked example across the hub. Show a won deal becoming a reviewed proposal, an approved handover and confirmed onboarding. Explain that staff transfer the proposal between separate applications and that the workflow was verified locally with synthetic data. Keep **Request a walkthrough** prominent and carry the service from each detail page to its enquiry.

## 4. Describe the live Automation briefing

Update the Automation page and add a concise mention on the hub. Suggested copy:

> See what needs attention before it slips. Generate a briefing that flags overdue Automation cases, missing stage evidence and drafts awaiting review. Open the source case, see who owns the next step and send a draft to Personal AI Team for approval.

Label it **Live in Power CRM**. Owners open **Outreach Centre → Service Desk → Generate briefing**. It runs on demand for the Automation category. The signed-in approval workflow passed in the Firebase emulator. Verify later changes before expanding these claims.

Describe Approval Studio and Sales-to-Delivery handover separately as a **Working pilot**. Use **Live in Power CRM**, **Working pilot** and **Sample-data demo** consistently. Rename “Try three real workflows” to **Try three workflows with sample data**. Keep the sample-data notice visible on the demo and embedded pages. Verify any live email, calendar, telephony or payment capability before calling it active.

## 5. Improve recruitment, coaching and trust

- Check recruitment, coaching, partnerships, about, information, contact and sector review for repeated copy, unclear actions and inconsistent wording.
- Use a consistent exclusivity explanation grounded in the written agreement. Flag any unverified sector or territory commitment for owner review before changing it.
- Show what buyers receive at shortlist and onboarding. For coaching, show a weekly practice or deliverable tied to a programme.
- Label illustrative deliverables as examples. Use client names, testimonials, metrics and guarantees only with approved evidence.
- If the Information Hub layout supports it, add a quote follow-up checklist and a sales-to-delivery handover guide. Link each to its service.

## 6. Tidy SEO, accessibility and mobile

- Link straight to canonical URLs while preserving query parameters and anchors. Verify existing `.html` redirects.
- Review title and description specificity, duplication, page headings, canonical tags, sitemap, robots rules and structured data.
- Check navigation, forms, cards and demos on desktop and mobile. Verify keyboard access, visible focus, labels, programmatically linked errors, contrast and descriptive links.
- Preserve the product demos and brand assets. Add dependencies or large assets only where they address a demonstrated need.

## Acceptance checks

- Visitors can reach hiring, AI Business Services and the candidate enquiry from the homepage.
- All seven cards reach the correct detail pages. Demo links select the intended service.
- Walkthrough requests carry the chosen service through to the form.
- Each form covers validation, successful receipt or labelled email fallback, and failure recovery with synthetic information.
- Live CRM functionality, the handover pilot and sample-data demos are distinguishable.
- Core routes, redirects, anchors, mobile navigation and keyboard journeys work. Run relevant tests and build checks. Report any browser checks that could not be completed.

## Handover

Implement locally. Report changed pages, the main before-and-after changes, verification evidence, and remaining enquiry configuration. Provide the exact Firebase deployment target and steps for the public site. Keep production deployment separate.

