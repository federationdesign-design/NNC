import type { Metadata } from 'next'
import { BUSINESS } from '../lib/business'
import { localBusinessSchema } from '../lib/schema'
import HeroVideo from './components/home/HeroVideo'
import ProductTiles from './components/home/ProductTiles'
import TryMeDays from './components/home/TryMeDays'
import WorkplaceSection from './components/home/WorkplaceSection'
import TestimonialsSection from './components/home/TestimonialsSection'
import TeamSection from './components/home/TeamSection'
import MediaAndTrustBar from './components/home/MediaAndTrustBar'

export const metadata: Metadata = {
  title: 'Adapt Ability - Self-Balancing Mobility Vehicles',
  description:
    'Specialists in innovative self-balancing mobility vehicles. The Omeo and Hoss - transforming independence for wheelchair and ambulatory users across the UK.',
  alternates: {
    canonical: BUSINESS.url,
  },
}

export default function HomePage() {
  return (
    <>
      {/* LocalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />

      <HeroVideo />
      <ProductTiles />
      <TryMeDays />
      <WorkplaceSection />
      <TestimonialsSection />
      <TeamSection />
      <MediaAndTrustBar />
    </>
  )
}
