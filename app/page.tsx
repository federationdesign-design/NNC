import type { Metadata } from 'next'
import { BUSINESS } from '../lib/business'

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
      {/* Homepage sections built from spec blocks in Phase 3 */}
      {/* Hero */}
      {/* Product tiles (Omeo / Hoss) */}
      {/* Try Me Days section */}
      {/* Mission / ethos section */}
      {/* Testimonials */}
      {/* Team */}
      {/* Media logos */}
      {/* CTA / contact strip */}
    </>
  )
}
