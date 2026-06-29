'use client'

// app/components/cookies/consent-context.tsx
// Provides consent state to the entire app via React context.
// Wrap the root layout children with <ConsentProvider>.

import React, { createContext, useContext, useEffect, useState } from 'react'
import { type ConsentPreferences, CONSENT_VERSION } from './types'
import { getStoredConsent, setStoredConsent } from './storage'
import { pushConsentDefaults, pushConsentUpdate } from './consent-bridge'

interface ConsentContextValue {
  prefs: ConsentPreferences | null
  hasResponded: boolean
  acceptAll: () => void
  rejectNonEssential: () => void
  updatePrefs: (partial: Partial<Omit<ConsentPreferences, 'necessary' | 'timestamp' | 'version'>>) => void
}

const ConsentContext = createContext<ConsentContextValue | null>(null)

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [prefs, setPrefs] = useState<ConsentPreferences | null>(null)
  const [hasResponded, setHasResponded] = useState(false)

  useEffect(() => {
    // Push defaults before anything else loads
    pushConsentDefaults()
    const stored = getStoredConsent()
    if (stored) {
      setPrefs(stored)
      setHasResponded(true)
      pushConsentUpdate(stored)
    }
  }, [])

  function acceptAll() {
    const updated = setStoredConsent({
      necessary:   true,
      analytics:   true,
      marketing:   true,
      preferences: true,
    })
    setPrefs(updated)
    setHasResponded(true)
    pushConsentUpdate(updated)
  }

  function rejectNonEssential() {
    const updated = setStoredConsent({
      necessary:   true,
      analytics:   false,
      marketing:   false,
      preferences: false,
    })
    setPrefs(updated)
    setHasResponded(true)
    pushConsentUpdate(updated)
  }

  function updatePrefs(partial: Partial<Omit<ConsentPreferences, 'necessary' | 'timestamp' | 'version'>>) {
    const current = prefs ?? {
      necessary:   true,
      analytics:   false,
      marketing:   false,
      preferences: false,
      timestamp:   0,
      version:     CONSENT_VERSION,
    }
    const updated = setStoredConsent({ ...current, ...partial, necessary: true })
    setPrefs(updated)
    setHasResponded(true)
    pushConsentUpdate(updated)
  }

  return (
    <ConsentContext.Provider value={{ prefs, hasResponded, acceptAll, rejectNonEssential, updatePrefs }}>
      {children}
    </ConsentContext.Provider>
  )
}

export function useConsent() {
  const ctx = useContext(ConsentContext)
  if (!ctx) throw new Error('useConsent must be used within ConsentProvider')
  return ctx
}
