import type { Metadata } from 'next'
import { Mali } from 'next/font/google'
import { ConsentProvider } from './components/cookies/consent-context'
// import CookieBanner from './components/cookies/CookieBanner'
import { BUSINESS } from '../lib/business'
import { GTM_ID } from '../lib/gtm'
import './globals.css'

import SiteFooter from "./components/layout/SiteFooter";

const mali = Mali({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mali',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: 'Nurturing Nests - Outstanding Children\'s Homes in Kent',
    template: '%s | Nurturing Nests',
  },
  description:
    'Nurturing Nests provides outstanding children\'s residential homes in Kent. Therapeutically informed, relationship-based care for children with complex needs.',
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
    <html lang="en-GB" className={mali.variable}>
      <body>
        <ConsentProvider>
          <a
            href="#main-content"
            className="sr-only"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            Skip to main content
          </a>
          <header role="banner">
          </header>
          <main id="main-content" role="main">
            
          <main>{children}</main>
          <SiteFooter />
          </main>
          <footer role="contentinfo">
          </footer>
          {/* <CookieBanner /> */}
        </ConsentProvider>
      </body>
    </html>
  )
}