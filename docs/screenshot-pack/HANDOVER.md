# Power-Up Talent suite handover

Seven real product interfaces branded; Sales completed first as the reference. All changes are pushed on `design/power-up-suite-captures` with draft PRs. No merge, production deployment, provider activation or external customer contact was performed.

| Service | Source commit | Draft PR | Verified workflow | Screenshot stem |
|---|---|---|---|---|
| Sales & Intelligence | `0f238356edd83d2be81f422b73ed77affffe9b2e` | [Sales #1](https://github.com/bencoll352/Sales-Intelligence---Sales-Growth/pull/1) | Action Queue → overdue quote → accepted outcome clears queue and persists | `sales-intelligence` |
| Business / Personal CRM | `9408c8bcde642648d2b0ac2282caa3e9e8283460` | [CRM #1](https://github.com/bencoll352/CRM-Power-Up-Business-Person-/pull/1) | Owned account follow-ups, renewal/review dates; separate private Personal people/reminders | `crm`, `crm-personal` |
| Communications | `05150c8c99d672caada95ae19eb0192b00e2d1cc` | [Communications #1](https://github.com/bencoll352/Power-Up-communication-/pull/1) | Unassigned sandbox enquiry → human ownership → dated callback | `communications` |
| Business Delivery | `106c422c0055754913d990f6b9cc7b6c5b6cb9f2` | [Delivery #2](https://github.com/bencoll352/Business-Delivery-Power-Up-Talent/pull/2) | Reviewed won-deal Sales export → stored scope/owner/start → reload | `business-delivery` |
| Automation | `298576d23a1a600808266d6fa5ffea16439678af` | [Automation #3](https://github.com/bencoll352/Automation---Power-Up-Talent/pull/3) | Actual local pilot receipts → read-only review of confirmed and unconfirmed outcomes | `automation` |
| AI Team | `866a06c2a1712b9753095d48d84b6ec83d890e03` | [AI Team #5](https://github.com/bencoll352/AI-Employee/pull/5) | Approved sample source → cited brief → revision → human acceptance | `ai-team` |
| Marketing & Social Media | `c7f92de1c0d6a9393bb1203fedbe1b22904e6bbe` | [Marketing #2](https://github.com/bencoll352/Marketing-Social-Media/pull/2) | Sample Sales export → qualified/attended/won comparison with unattributed group | `marketing-social-media` |

Website release: [Powerweb3.0 #1](https://github.com/bencoll352/Powerweb3.0/pull/1). It integrates all seven product images, a separate Personal CRM image, selected Platforms examples and preserves walkthrough CTAs. The homepage does not repeat the screenshot set.

Each stem has **`-overview.png`, `-detail.png`, `-mobile.png`** masters in `masters/`, and the matching **`.webp`** filenames in `dist/assets/product-screens/`. There are 24 of each. Total website copies are 773,792 bytes. Exact source pins, dimensions, captions, alt text, SHA256 and readiness labels are in [asset-index.json](asset-index.json).

[Seven-product preview](seven-products-preview.png) · [Clickable comparison](preview.html) · [Design reference](DESIGN-STANDARD.md) · [Starting audit](AUDIT.md) · [Verification](VERIFICATION.md) · [Reproduce](REPRODUCE.md) · [Release/rollback](RELEASE.md).

131 product tests passed; applicable builds, browser workflows and scoped accessibility checks passed. Website: 68 responsive page checks plus all seven desktop/mobile image and walkthrough-link checks. Error retention/loading states are recorded separately. These tests use synthetic data and do not establish live provider or hosted production readiness.

## Remaining boundaries

- Supplied `image(8).png` was absent. Existing full website wordmark was used intact; compare the original before brand sign-off.
- Communications captures are sandbox. Delivery/Automation are local operator pilots. Automation logs intentionally omit customer payloads, reviewer identity and scope, so its review cannot prove details absent from the log. AI Team is local extractive research with explicit human acceptance. Marketing is a manual export report.
- Separate recruitment repository: default branch contains a brief; working reference branch `feat/source-audit-acquisition` at `38c2756315656d7bbf1ee48ab0560bd22d74f61b` was inspected, but its workflow was not run. No recruitment screenshots included.
- Live homepage returns 200; Platforms and seven services return 404, including checked `.html` variants. Local build contains them. Deployment is prepared, not published. No Firebase identity is configured here; confirm project `power-up-crm-portal` → site `power-up-talent` ownership and obtain owner release authorisation before deployment.
