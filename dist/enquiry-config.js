// Runtime configuration for Power-Up Talent public enquiry forms.
// Routes same-origin to the isolated Cloud Function (publicEnquiryIntake, europe-west2)
// which stores commercial briefs, territory reviews and private candidate enquiries in separate Firestore collections.
window.POWERUP_ENQUIRY_CONFIG = {
  commercialEndpoint: '/api/enquiries',
  candidateEndpoint: '/api/enquiries',
  candidateChannelPrivate: true,
  territoryEndpoint: '/api/enquiries',
  timeoutMs: 12000
};
