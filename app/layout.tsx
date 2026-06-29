import type { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import { ConsentProvider } from './components/cookies/consent-context'
import CookieBanner from './components/cookies/CookieBanner'
import { GTM_ID } from '../lib/gtm'
import { BUSINESS } from '../lib/business'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: 'Adapt Ability - Self-Balancing Mobility Vehicles',
    template: '%s | Adapt Ability',
  },
  description:
    'Adapt Ability are UK specialists in innovative self-balancing mobility vehicles, including the Omeo and Hoss. Enhancing independence and accessibility for wheelchair and ambulatory users.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: BUSINESS.url,
    siteName: BUSINESS.name,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: BUSINESS.url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body>
        <GoogleTagManager gtmId={GTM_ID} />
        <ConsentProvider>
          {/* Skip to main content - accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand focus:text-white focus:rounded"
          >
            Skip to main content
          </a>

          <header role="banner">
            {/* SiteHeader component goes here */}
          </header>

          <main id="main-content" role="main">
            {children}
          </main>

          <footer role="contentinfo">
            {/* SiteFooter component goes here */}
          </footer>

          <CookieBanner />
        </ConsentProvider>
      </body>
    </html>
  )
}
