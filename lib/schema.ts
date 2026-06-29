// lib/schema.ts
// JSON-LD structured data generators.
// All fed from lib/business.ts - never hardcode values here.

import { BUSINESS } from './business'

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BUSINESS.url}/#business`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    email: BUSINESS.email,
    telephone: BUSINESS.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress:   BUSINESS.address.street,
      addressLocality: BUSINESS.address.locality,
      addressRegion:   BUSINESS.address.region,
      postalCode:      BUSINESS.address.postcode,
      addressCountry:  BUSINESS.address.country,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens:  '09:00',
        closes: '17:00',
      },
    ],
    // geo: omitted - no physical shopfront
    // areaServed: add once coverage confirmed with client
    ...(BUSINESS.areaServed ? { areaServed: BUSINESS.areaServed } : {}),
    // sameAs: only add verified, working social URLs
    sameAs: Object.values(BUSINESS.social).filter(Boolean) as string[],
    memberOf: {
      '@type': 'Organization',
      name: BUSINESS.ofsted,
    },
  }
}

// Usage in a page or layout:
// import { localBusinessSchema } from '../../lib/schema'
// <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
