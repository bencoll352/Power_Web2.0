# Power-Up Talent — partnership website

## Professional service pages and dashboard previews

Seven service pages (`crm`, `communications`, `sales-intelligence`, `business-delivery`, `automation`, `ai-team`, `marketing-social-media`) share a Power-Up corporate design. The directory is at `intelligence.html` and the interactive sample workspace is at `dashboard.html`. Dashboard tabs, search and status filters run locally with illustrative data; they do not connect to or mutate the service apps.

Templates are in `professional-site.mjs`, with styles in `dist/professional.css` and preview interactions in `dist/dashboard-preview.js`. See `docs/DASHBOARD-DESIGN-ADOPTION.md` for the supplied ngx-admin design reference, licence and service repository review.

Run `npm run build` and `npm run check`. With the preview server running, `node tests/site-browser.mjs` runs responsive and interaction checks using an installed Playwright and Chromium. Optional `PLAYWRIGHT_MODULE`, `CHROMIUM_PATH`, `TEST_URL` and `SCREENSHOT_DIR` environment variables support an external QA installation without adding browser binaries to this repository.

## November 2026 service update

The homepage now presents Elite Recruitment & Headhunting, Coaching & Development, and AI Business Services. Seven connected service cards link to CRM, Communications, Sales & Intelligence, Business Delivery, Automation, AI Team and Marketing & Social Media on `intelligence.html`, using branded service icons in `dist/assets/services-v2/`. Service enquiry links preselect the relevant option on the contact page.

The revised offer and shared copy are in `site-offer.mjs`; its branding and responsive layouts are in `dist/ai-services.css`. `build.mjs` integrates them with the existing page templates. Run `npm run build` after editing the templates or offer module, then `npm run check`.

Eight-page, responsive static website. Source content and templates are in `build.mjs`; styles and browser interactions are in `dist/styles.css` and `dist/app.js`.

Run `npm run build`, `npm run check`, then `npm start` for http://127.0.0.1:4173.

The enquiry builder prepares a mailto message and provides a copy fallback. It does not submit or store enquiries. Review and send from an email app. Existing public policy pages are linked. No fabricated customer evidence or performance statistics are included.
