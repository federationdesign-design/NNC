// app/components/cookies/types.ts
// Shared types for the cookie consent system.

export type ConsentCategory = 'necessary' | 'analytics' | 'marketing' | 'preferences'

export interface ConsentPreferences {
  necessary: true       // always true, cannot be toggled off
  analytics: boolean
  marketing: boolean
  preferences: boolean
  timestamp: number
  version: string
}

export const CONSENT_VERSION = '1.0'
export const CONSENT_COOKIE_NAME = 'aa_cookie_consent'
export const CONSENT_COOKIE_MAX_AGE = 365 * 24 * 60 * 60 // 1 year in seconds
