import type { Metadata } from 'next'
import { Mali } from 'next/font/google'
import { ConsentProvider } from './components/cookies/consent-context'
import CookieBanner from './components/cookies/CookieBanner'
import { BUSINESS } from '../lib/business'
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
    default: 'Nurturing Nests - Specialist Children\'s Homes in Kent',
    template: '%s | Nurturing Nests',
  },
  description:
    'Nurturing Nests provides specialist children\'s residential homes in Kent. Therapeutically informed, relationship-based care for children with complex needs. Ofsted Good Provider.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    images: [
      {
        url: '/NNC-OG-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Nurturing Nests Care — Specialist Residential Care in Kent',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/NNC-OG-logo.jpg'],
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
          <main id="main-content" role="main">
            {children}
          </main>
          <SiteFooter />
          <CookieBanner />
        </ConsentProvider>
      </body>
    </html>
  )
}
