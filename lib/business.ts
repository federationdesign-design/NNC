// lib/business.ts
// Single source of truth for all Nurturing Nests business identity data.
// Footer, contact page, LocalBusiness JSON-LD and schema all import from here.
// Change a value once and it updates everywhere.

export const BUSINESS = {
  name: 'Nurturing Nests',
  legalName: 'Nurturing Nests',
  companyNumber: '11223861',
  url: 'https://www.nurturingnests.co.uk',
  email: 'info@nurturingnests.co.uk',
  telephone: '+44 20 8345 678',
  telephoneDisplay: '0208 345 678',
  address: {
    street: 'Office 5 Belgravia House, Grosvenor Street',
    locality: 'Mold',
    region: 'Flintshire',
    postcode: 'CH7 1EJ',
    country: 'GB',
    countryName: 'United Kingdom',
  },
  hours: 'Mo-Fr 09:00-17:00',
  hoursDisplay: 'Monday to Friday, 9am to 5pm',
  geo: null,
  areaServed: 'Kent' as string | null,
  social: {
    facebook:  null as string | null,
    twitter:   null as string | null,
    linkedin:  null as string | null,
    instagram: null as string | null,
  },
  ofsted: 'Registered with Ofsted',
} as const
