import Image from 'next/image'
import Link from 'next/link'

export default function WorkplaceSection() {
  return (
    <section
      className="section"
      aria-labelledby="workplace-heading"
    >
      <div className="section-inner">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}
          className="workplace-grid"
        >
          {/* Image */}
          <div
            style={{
              position: 'relative',
              aspectRatio: '3/4',
              borderRadius: 'var(--radius-media)',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/Steve-and-Prince-Edward-edited-2048x1536.png"
              alt="Omeo in the workplace"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          {/* Content */}
          <div>
            <span className="eyebrow">Workplace accessibility</span>
            <h2
              id="workplace-heading"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                marginBottom: '24px',
              }}
            >
              Not just in life<br />
              but in the{' '}
              <span style={{ color: 'var(--accent)' }}>workplace</span> too
            </h2>
            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                opacity: 0.65,
                marginBottom: '16px',
              }}
            >
              Self-balancing mobility is a game changer for accessibility, productivity and engagement in the workplace. The Omeo allows users to navigate environments that traditional wheelchairs cannot.
            </p>
            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                opacity: 0.65,
                marginBottom: '36px',
              }}
            >
              Whether you are a permanent wheelchair user or an ambulatory wheelchair user, discover how the Omeo transforms the working day.
            </p>
            <Link href="/omeo/workplace" className="btn-outline">
              Omeo in the workplace
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .workplace-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
