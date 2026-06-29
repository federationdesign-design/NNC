// lib/gtm.ts
// Tracking IDs. GTM is the single entry point for all tags.
// GA fires through GTM - do not load the GA script separately.

export const GTM_ID = 'GTM-KWFKMZLW'

// GA4 Measurement ID - replace with the real value from the WP site.
// Find it in GA4 > Admin > Data Streams > your stream > Measurement ID (G-XXXXXXXXXX).
// Also update .env.local: NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'REPLACE_WITH_GA_ID'

// Consent Mode v2 defaults.
// All denied until the user explicitly grants via the consent banner.
// This matches the LHM pattern and satisfies UK GDPR / PECR.
export const CONSENT_DEFAULTS = {
  ad_storage:             'denied',
  analytics_storage:      'denied',
  ad_user_data:           'denied',
  ad_personalization:     'denied',
  functionality_storage:  'denied',
  personalization_storage:'denied',
  security_storage:       'granted', // always on - required for basic site function
} as const

export type ConsentState = typeof CONSENT_DEFAULTS
