# Power-Up Talent — partnership website

## November 2026 service update

The homepage now presents Elite Recruitment & Headhunting, Coaching & Development, and AI Business Services. Five connected service cards link to CRM, Communications, Sales & Intelligence, Business Delivery and Automation on `intelligence.html`. Service enquiry links preselect the relevant option on the contact page.

The revised offer and shared copy are in `site-offer.mjs`; its branding and responsive layouts are in `dist/ai-services.css`. `build.mjs` integrates them with the existing page templates. Run `npm run build` after editing the templates or offer module, then `npm run check`.

Seven-page, responsive static website. Source content and templates are in `build.mjs`; styles and browser interactions are in `dist/styles.css` and `dist/app.js`.

Run `npm run build`, `npm run check`, then `npm start` for http://127.0.0.1:4173.

The enquiry builder prepares a mailto message and provides a copy fallback. It does not submit or store enquiries. Review and send from an email app. Existing public policy pages are linked. No fabricated customer evidence or performance statistics are included.

The private Sites version is separate from the existing Firebase site and custom domain.
