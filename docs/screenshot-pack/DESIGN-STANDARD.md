# Power-Up Talent interface standard

Reference implementation: Sales & Intelligence web/ActionQueue.jsx + web/style.css; screenshots in captures/. Native React and existing Lucide retained. Tabler reference: dashboard-crm.astro, row cards, compact labelled filters, clear table headings, restrained borders; MIT reviewed. No Tabler code/assets adopted.

## Tokens
- Ink/charcoal #242829; shell #f6f5f0; surface #ffffff; border #dedfda; secondary text #626667.
- Primary yellow #f4ce24 with charcoal text; hover #e9c21a; selected background #fff4bf. Yellow is never body text on white.
- Focus #806200, 3px outline with 3px offset. Visible on white and warm surfaces. Keep native inputs/selects and dialog keyboard semantics.
- Status: overdue #94520f on #fff0df; confirmed dark green on pale green; unconfirmed dark amber with explicit text. Never colour alone.
- System sans-serif or existing locally hosted sans fonts; body 14–16px, secondary 12–13px, h1 28–32px, section headings 18px, numeric summary 32–34px. Eyebrows 10px, never essential action text.
- Spacing 4/8/12/16/24/32; card radius 8px, control radius 6px; 1px borders; minimal shadows except modal.

## Wordmark
Use original full image with tagline, object-fit:contain and automatic height. Desktop sidebar around 216px image width; mobile full logo above navigation, never shrink it to an illegible icon. Existing website full asset is provisional pending supplied image(8).png verification; record provenance. Do not crop, recolour, trace or stretch it.

## Components
- Desktop sidebar ~248px, white; quiet topbar; content padding 32–36px. Product name in page eyebrow; workspace clearly identified. Selected navigation has yellow tint and semantic current-page state.
- Header: one h1, concise task description, one primary yellow action. Secondary actions white/bordered. Minimum 42–44px control/touch height.
- Filters: visible labels, search then bounded native select, count announced via role=status. Lists put customer/account first, then reason, owner/date and review action. Keep essential data visible without charts.
- Forms: labels remain visible; required checks remain native/server authoritative; errors say what to correct. Disable while saving; restore on failure. Do not add success states without persisted confirmation.
- Details/review: put the operative outcome/review panel near the top. Show account context, ownership and next action. Secondary assessments and destructive controls remain accessible; never relax approval gates.
- Empty: explain current scope and next step; loading: role=status; errors: role=alert and retry where supported. No fabricated provider activity.
- Readiness: “Sample data” for synthetic records; “Pilot workflow” for limited local operator flows; “Illustrative preview” only for unverified presentation, never a screenshot of a fake app.

## Responsive and capture examples
- Sales overview 1440×1000; detail normal application dialog, focused crop permitted; mobile 390×844.
- Mobile full wordmark, scrollable labelled navigation, full-width content; cards/filters stack and owners/actions remain visible. Tables may scroll within their labelled container, never force page overflow.
- Capture normal controls against isolated synthetic databases; en-GB browser locale; cursor away from navigation so hover does not resemble selection. No screenshot-only CSS or injected labels.
- Website use responsive picture: focused detail image for wider columns, mobile view for narrow displays. Avoid scaling a 1440px dashboard into an unreadable 350px slot; full master remains available. Caption names the action and scope; alt text describes task/context rather than every cell.

Tabler source pin: 977102f79cc633074d5518fe1a288fa2ae7fbe27
