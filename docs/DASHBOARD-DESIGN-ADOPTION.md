# Professional service pages and dashboard design

Scope: Powerweb3.0 marketing website, dedicated service pages and interactive dashboard demonstrations. No service application source or runtime was changed. No production customer data is loaded by the previews.

## Supplied dashboard reference

Reviewed akveo/ngx-admin `master`: README, MIT LICENSE and `src/app/@theme/styles/themes.scss`. The layout file lookup returned no content and is not treated as inspected source. The corporate theme's 2.25rem layout spacing and 1.875rem card spacing inform the CSS tokens in `dist/professional.css`. Sidebar navigation, header, work cards, status breakdown and muted corporate surfaces are independently implemented in static HTML/CSS/JS and adapted to the Power-Up gold/charcoal identity. Angular and Nebular are not runtime dependencies of this static marketing website. MIT notice is distributed at `dist/assets/licenses/ngx-admin.txt`.

## Service sources reviewed

- CRM-Power-Up-Business-Person- / `main` (`9acfb8978`) and `feat/crm-core-journeys` (`58267a202`): Business and Personal CRM applications with scoped persistence and tested core journeys; not a completed production release.
- Power-Up-communication- / `main` (`46202e289`): private staff workspace; provider adapters (Gmail, WhatsApp, Google Calendar, Twilio) require separate live activation and controlled acceptance.
- Sales-Intelligence---Sales-Growth / `main` (`db8b654a8`): qualification, research, reviewed drafts, durable human-task follow-up sequences and manual handover; live provider sending is not implied.
- AI-Employee / `main` (`30ecfb373`), `codex/ai-command-centre-foundation` (`3bebcb12f`) and `codex/initial-agent-profiles` (`8fb7b1192`): scoped local extractive research assignments and scheduled GTM routines with human approval and acceptance; broader live agent actions are not implied.
- Marketing-Social-Media / `codex/marketing-hub` (`9c33afb987d696019bc58831e6350dad5c0ebc13`): development foundation, local destination receipts and provider fixtures. Master brief on `main` is requested scope, not completion evidence.
- Business-Delivery-Power-Up-Talent / `codex/business-delivery-foundation` (`e68cbbd7301a72b5180d4ad95618bc670219d74e`): initial local implementation. `main` contains the build brief.
- Automation---Power-Up-Talent / `codex/automation-studio` (`367016c5399b31075a6fe65bb2348b66561ffbe4`): local approval-to-task journey; production scheduling and provider execution remain unavailable. `main` contains the build brief.

All dashboard figures, accounts, queue entries and activity are illustrative. Tabs, keyboard navigation, search, status filtering and filter resets operate locally. Nothing sends messages, starts workflows or modifies app records. Website offer copy describes configuration scope; each customer proposal must agree included services and connections.

## Source guide

`professional-site.mjs` supplies the directory, dedicated service pages (leading with customer benefits, then capabilities and partnership fit) and shared dashboard HTML. `dist/professional.css` provides the consistent visual system. `dist/dashboard-preview.js` implements local preview interactions. `build.mjs` integrates these with retained recruitment, coaching, partnership and other page content. Existing service anchors remain available on the service directory.
