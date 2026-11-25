// Runtime configuration for Power-Up Talent public enquiry forms.
// Supply verified HTTPS receiver endpoints to enable direct submission.
// When an endpoint is left empty, that form stays in clearly labelled "Open email draft" fallback mode.
window.POWERUP_ENQUIRY_CONFIG = {
  commercialEndpoint: '',
  candidateEndpoint: '',
  // Must be set to true ONLY when candidateEndpoint routes to a private, access-controlled search inbox.
  candidateChannelPrivate: false,
  territoryEndpoint: '',
  timeoutMs: 12000
};
