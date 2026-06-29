import Image from 'next/image'
import Link from 'next/link'

const options = [
  {
    icon: '/Calendar-Icon.png',
    label: 'Free events',
    title: 'Try Me Days',
    description: 'Join us at a FREE Try Me Day at various locations across the UK. Book a one hour trial at a time of your choice.',
    cta: 'Book a free trial',
    href: '/try',
    highlight: true,
  },
  {
    icon: '/Location-1489x2048.png',
    label: 'Come to us',
    title: 'Visit our base',
    description: 'Come to us at one of our base locations and discover self-balancing tech in a new landscape.',
    cta: 'Find a location',
    href: '/try#locations',
    highlight: false,
  },
  {
    icon: '/House-Orange-1.png',
    label: 'Home trial',
    title: 'We come to you',
    description: 'We will come to you at a location of your choice. Trial fee is refundable on purchase of an Omeo or Hoss.',
    cta: 'Book a home visit',
    href: '/try#home',
    highlight: false,
    note: 'From £150 + mileage',
  },
]

export default function TryMeDays() {
  return (
    <section
      className="section"
      aria-labelledby="try-heading"
      style={{ background: '#0a0a0a' }}
    >
      <div className="section-inner">
        <span className="eyebrow">Experience it yourself</span>
        <h2
          id="try-heading"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '16px',
            lineHeight: 1.1,
          }}
        >
          Try it for free
        </h2>
        <p
          style={{
            fontSize: '1rem',
            opacity: 0.6,
            marginBottom: '48px',
            maxWidth: '480px',
            lineHeight: 1.6,
          }}
        >
          We believe you should experience self-balancing mobility before you commit. Three ways to try.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          {options.map((opt) => (
            <article
              key={opt.label}
              style={{
                background: opt.highlight ? 'var(--accent)' : '#161616',
                borderRadius: '20px',
                padding: '32px',
                border: opt.highlight ? 'none' : '1px solid rgba(255,255,255,0.07)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  position: 'relative',
                }}
              >
                <Image
                  src={opt.icon}
                  alt=""
                  fill
                  style={{ objectFit: 'contain' }}
                  aria-hidden="true"
                />
              </div>

              <div>
                <p
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    opacity: opt.highlight ? 0.8 : 0.5,
                    margin: '0 0 6px',
                  }}
                >
                  {opt.label}
                </p>
                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    margin: 0,
                    color: '#fff',
                  }}
                >
                  {opt.title}
                </h3>
              </div>

              <p
                style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.6,
                  opacity: opt.highlight ? 0.85 : 0.6,
                  margin: 0,
                  flex: 1,
                }}
              >
                {opt.description}
              </p>

              {opt.note && (
                <p
                  style={{
                    fontSize: '0.75rem',
                    opacity: 0.5,
                    margin: 0,
                    fontStyle: 'italic',
                  }}
                >
                  {opt.note}
                </p>
              )}

              <Link
                href={opt.href}
                style={{
                  display: 'inline-block',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  textDecoration: 'none',
                  borderBottom: `1px solid ${opt.highlight ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.3)'}`,
                  paddingBottom: '2px',
                  alignSelf: 'flex-start',
                  transition: 'border-color 0.2s',
                }}
              >
                {opt.cta} &rarr;
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
