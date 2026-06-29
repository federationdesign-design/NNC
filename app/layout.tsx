import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'
import { ConsentProvider } from './components/cookies/consent-context'
import CookieBanner from './components/cookies/CookieBanner'
import SiteNav from './components/layout/SiteNav'
import SiteFooter from './components/layout/SiteFooter'
import { GTM_ID } from '../lib/gtm'
import { BUSINESS } from '../lib/business'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

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
  robots: { index: true, follow: true },
  alternates: { canonical: BUSINESS.url },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={jakarta.variable}>
      <body>
        <GoogleTagManager gtmId={GTM_ID} />
        <ConsentProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            Skip to main content
          </a>
          <header role="banner">
            <SiteNav />
          </header>
          <main id="main-content" role="main">
            {children}
          </main>
          <footer role="contentinfo">
            <SiteFooter />
          </footer>
          <CookieBanner />
        </ConsentProvider>
      </body>
    </html>
  )
}
