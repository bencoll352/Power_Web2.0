# Prepared website release — not published

The source/build workflow is unchanged: `npm run build`, `npm run check`, browser verification, then the existing `npm run deploy:firebase` command only after owner authorisation. No application hosting changes or live channel activations accompany this website release.

- `.firebaserc` currently selects project `power-up-crm-portal`.
- `firebase.json` publishes `dist` to Hosting site `power-up-talent`, with clean URLs and explicit rewrites for Platforms and all seven services.
- Current public observation: homepage 200, Platforms and service URLs 404. Local generated pages/assets pass verification. See public-url-check.json.
- No Firebase account/credential is configured in this execution environment, and project-to-site ownership has not been independently verified. This is a release prerequisite, not a suggestion to change the existing project configuration blindly.

Before an authorised release, verify the authenticated Firebase account and confirm `power-up-talent` belongs to the intended project. Record the current Hosting release/version and keep its existing rollback available. Build/check and verify a Hosting preview channel with the same project/site config before publishing production. Confirm `/platforms`, the seven clean service URLs and the `.webp` image content types on that preview.

Publish only after owner authorisation using the existing workflow. After release, check all seven service URLs, corresponding screenshot paths, captions, phone/desktop image framing and walkthrough contact preselection on the public domain. If the release is incorrect, use Firebase Hosting release history to roll back to the recorded prior version; do not revert product databases or app approvals.

All screenshot masters, source commits, captions, alt text and readiness labels are reviewable in this PR. The supplied image(8).png was unavailable; final brand approval should compare it with the existing full wordmark used here.
