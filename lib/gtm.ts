// lib/gtm.ts
// Tracking IDs. GTM is the single entry point for all tags.
// No GTM or GA set up yet for Nurturing Nests.
// Add IDs here once accounts are created.

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? ''

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ''

export const CONSENT_DEFAULTS = {
  ad_storage:              'denied',
  analytics_storage:       'denied',
  ad_user_data:            'denied',
  ad_personalization:      'denied',
  functionality_storage:   'denied',
  personalization_storage: 'denied',
  security_storage:        'granted',
} as const

export type ConsentState = typeof CONSENT_DEFAULTS
