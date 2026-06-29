'use client'

// app/components/cookies/storage.ts
// Read and write consent preferences to a first-party cookie.
// No external dependencies - plain document.cookie API.

import {
  type ConsentPreferences,
  CONSENT_COOKIE_NAME,
  CONSENT_COOKIE_MAX_AGE,
  CONSENT_VERSION,
} from './types'

export function getStoredConsent(): ConsentPreferences | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${CONSENT_COOKIE_NAME}=`))
  if (!match) return null
  try {
    const value = decodeURIComponent(match.split('=').slice(1).join('='))
    const parsed = JSON.parse(value) as ConsentPreferences
    // Invalidate if version has changed
    if (parsed.version !== CONSENT_VERSION) return null
    return parsed
  } catch {
    return null
  }
}

export function setStoredConsent(prefs: Omit<ConsentPreferences, 'timestamp' | 'version'>): ConsentPreferences {
  const full: ConsentPreferences = {
    ...prefs,
    necessary: true,
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  }
  const encoded = encodeURIComponent(JSON.stringify(full))
  document.cookie = [
    `${CONSENT_COOKIE_NAME}=${encoded}`,
    `max-age=${CONSENT_COOKIE_MAX_AGE}`,
    'path=/',
    'SameSite=Lax',
    // Secure flag is added automatically by the browser on HTTPS
  ].join('; ')
  return full
}

export function clearStoredConsent(): void {
  document.cookie = `${CONSENT_COOKIE_NAME}=; max-age=0; path=/`
}
