import Link from 'next/link'
import Image from 'next/image'

export default function CustomerService() {
  return (
    <section className="section" style={{ background: '#0a0a0a' }} aria-labelledby="service-heading">
      <div className="section-inner">
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}
          className="service-grid"
        >
          {/* Image */}
          <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 'var(--radius-media)', overflow: 'hidden' }}>
            <Image
              src="/Customers.png"
              alt="Adapt Ability customer service"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          {/* Content */}
          <div>
            <h2
              id="service-heading"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '24px' }}
            >
              We will{' '}
              <span style={{ color: 'var(--accent)' }}>ALWAYS</span>
              {' '}look after you
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, opacity: 0.65, marginBottom: '16px' }}>
              We have an unwavering commitment to Customer Service and pride ourselves on being responsive, understanding and delivering a high quality service to our customers.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, opacity: 0.65, marginBottom: '36px' }}>
              Whether you have a simple enquiry about our mobility products and their suitability or want to book maintenance and servicing, we are here to help.
            </p>
            <Link href="/contact" className="btn-accent">
              Contact us
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .service-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
