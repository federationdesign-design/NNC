'use client'

// app/components/cookies/CookieBanner.tsx
// The visible consent banner. Shown until the user has responded.
// Styled with Tailwind. Fully keyboard accessible.

import { useConsent } from './consent-context'
import Link from 'next/link'

export default function CookieBanner() {
  const { hasResponded, acceptAll, rejectNonEssential } = useConsent()

  if (hasResponded) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 bg-surface-dark text-text-onbrand border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 py-5 sm:px-6 sm:flex sm:items-center sm:gap-6">
        <p className="text-sm leading-relaxed text-white/80 flex-1">
          We use cookies to understand how people use our site and to improve your experience.
          Read our{' '}
          <Link href="/privacy" className="underline underline-offset-2 text-white hover:text-white/80">
            privacy policy
          </Link>{' '}
          for details.
        </p>
        <div className="mt-4 sm:mt-0 flex gap-3 shrink-0">
          <button
            onClick={rejectNonEssential}
            className="px-4 py-2 text-sm rounded border border-white/30 text-white/80 hover:border-white/60 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            Necessary only
          </button>
          <button
            onClick={acceptAll}
            className="px-4 py-2 text-sm rounded bg-brand text-white hover:bg-brand-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  )
}
