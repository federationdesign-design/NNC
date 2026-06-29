// lib/business.ts
// Single source of truth for all business identity data.
// Footer, contact page, LocalBusiness JSON-LD, Product schema,
// and any directory-facing copy all import from here.
// Change a value once and it updates everywhere.

export const BUSINESS = {
  name: 'Adapt Ability',
  legalName: 'Adapt Ability',
  url: 'https://myadaptability.co.uk',
  email: 'enquiries@myadaptability.co.uk',
  telephone: '+44 20 7702 2141',
  telephoneDisplay: '020 7702 2141',
  address: {
    street: 'Aspire Leisure Centre, Wood Lane',
    locality: 'Stanmore',
    region: 'London',
    postcode: 'HA7 4AP',
    country: 'GB',
    countryName: 'United Kingdom',
  },
  hours: 'Mo-Fr 09:00-17:00',
  hoursDisplay: 'Monday to Friday, 9am to 5pm',
  // No geo coordinates - business runs from personal homes,
  // Aspire Leisure Centre is the public-facing address only.
  geo: null,
  // areaServed: confirm coverage area with client before adding.
  // Options: 'Greater London' | 'United Kingdom' | specific regions.
  areaServed: null as string | null,
  // Social URLs: leave null until the correct verified URL is confirmed.
  // Adding wrong or generic links actively harms entity disambiguation.
  social: {
    facebook:   null as string | null,
    twitter:    null as string | null,
    linkedin:   null as string | null,
    trustpilot: null as string | null,
    instagram:  null as string | null,
  },
  // BHTA membership - verified member
  memberOf: 'British Healthcare Trade Association (BHTA)',
} as const
