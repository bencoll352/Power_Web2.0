# Verification — 11 November 2026

| Product | Applicable checks | Captured real workflow |
|---|---|---|
| Sales | 26 tests; Vite build; browser | Queue 3 → 2 after quote acceptance; reload retains outcome; keyboard, dialog, mobile, empty state and failed-save retention |
| CRM | 18 tests; typecheck, lint, both frontend/server builds; 3 browser acceptance journeys (keyboard/accessibility rerun after fixes) | New synthetic Business trade workspace, owned follow-ups, stored renewal/review dates; separate Personal people/reminders; mobile account overflow fixed |
| Communications | 33 tests; Worker build; browser | Unassigned sandbox enquiry → take ownership → saved callback owner/due date; sandbox cannot dispatch; failed-save retention |
| Delivery | 1 API contract test; native syntax; browser | Normal reviewed Sales JSON form import, won/scope confirmation, stored owner/start/scope and reload; malformed JSON visible in dialog |
| Automation | 3 tests; native syntax; browser | Actual local created, already_exists, rejected and unconfirmed receipts; read-only viewer; refresh loading/failure |
| AI Team | 49 tests; build/typecheck; extractive evaluation; browser | Approved synthetic source → cited brief → revision → human acceptance. Keyboard-accessible source/brief panels |
| Marketing | 1 attribution test; native syntax; browser | Actual sample Sales export → qualified/attended/won counts, visible unattributed group, detail/mobile, invalid JSON error |
| Website | build/check; 68 responsive page checks; all 7 captured mobile/detail assets, demo flows, enquiry CTAs, keyboard/mobile menu | Service captures with captions/alt/responsive sources; separate Personal CRM capture; selected hub examples |

131 domain/API tests passed across seven product repositories. Native dependency-free apps do not have a separate build command; none is claimed. Automated WCAG 2 A/AA/2.1 AA scans of 13 selected screens/components passed with zero reported violations after contrast/focus fixes; CRM's own keyboard/accessibility acceptance passed separately. This scoped automation is not a complete accessibility certification. Browser controls, responsive overflow, keyboard focus and error retention were checked; existing permissions/approval safeguards remained covered by product tests.

Evidence: `accessibility.json`, `error-state-verification.json`, `asset-index.json`, `starting-commits.json`; each product's `docs/POWER-UP-SUITE.md` and capture runner. All data synthetic, zero real external sends. Provider acceptance/live activation, hosted product production readiness and recruitment branch workflows were not verified or advertised as completed.

Public website observation: homepage 200; /platforms and all seven service routes 404, also the checked .html counterparts. Local source build contains the routes and passes checks. This is a release mismatch, not evidence that the new screenshot URLs are already live. No production deployment has been performed.
