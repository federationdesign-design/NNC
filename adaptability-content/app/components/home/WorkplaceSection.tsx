import Image from 'next/image'
import Link from 'next/link'

export default function WorkplaceSection() {
  return (
    <section className="section" aria-labelledby="workplace-heading" style={{ background: '#0a0a0a' }}>
      <div className="section-inner">
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}
          className="workplace-grid"
        >
          {/* Content */}
          <div>
            <h2
              id="workplace-heading"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '24px' }}
            >
              Not just in{' '}
              <span style={{ color: 'var(--accent)' }}>LIFE</span>
              {' '}but in the{' '}
              <span style={{ color: 'var(--accent)' }}>WORKPLACE</span>
              {' '}too.
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, opacity: 0.65, marginBottom: '32px' }}>
              To find out more about how self-balancing mobility is a game changer for accessibility, productivity and engagement in the workplace, see our page dedicated to the Omeo in the Workplace.
            </p>
            <Link href="/omeo/workplace" className="btn-outline">
              Learn more
            </Link>
          </div>

          {/* Images */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ position: 'relative', aspectRatio: '3/4', borderRadius: 'var(--radius-media)', overflow: 'hidden', gridColumn: '1 / -1' }}>
              <Image
                src="/Steve-and-Prince-Edward-edited-2048x1536.png"
                alt="Omeo in the workplace"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .workplace-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
