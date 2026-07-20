// lib/business.ts
export const BUSINESS = {
  name: 'Nurturing Nests',
  legalName: 'Nurturing Nests Care Limited',
  companyNumber: '11223861',
  url: 'https://www.nurturingnests.co.uk',
  email: 'admin@nurturingnests.co.uk',
  telephone: '+44 1233 427012',
  telephoneDisplay: '01233 427012',
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
