import Image from 'next/image'
import Link from 'next/link'

const options = [
  {
    icon: '/Calendar-Icon.png',
    badge: 'FREE',
    title: 'Try Me Days',
    description: 'Join us at a FREE Try Me Day at Various Locations across the UK. Book a one hour trial at a time of your choice.',
    cta: 'Try it for FREE',
    href: '/try',
    highlight: true,
  },
  {
    icon: '/Car-Mving.png',
    badge: 'FREE',
    title: 'Come To Us',
    description: 'Come to us at one of our base locations and discover self-balancing tech in a new landscape.',
    cta: 'Book Now',
    href: '/try#come-to-us',
    highlight: false,
  },
  {
    icon: '/House-Orange-1.png',
    badge: '£150 + Mileage',
    title: 'Home Trial',
    description: 'We will come to you at a location of your choice. *The Trial fee is refundable on purchase of an Omeo or Hoss.',
    cta: 'Book Now',
    href: '/try#home-trial',
    highlight: false,
  },
]

export default function TryMeDays() {
  return (
    <section className="section" aria-labelledby="try-heading">
      <div className="section-inner">
        <h2
          id="try-heading"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '48px', lineHeight: 1.1, textAlign: 'center' }}
        >
          Try Me Days
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {options.map((opt) => (
            <article
              key={opt.title}
              style={{
                background: '#111',
                borderRadius: '20px',
                padding: '36px 28px',
                border: '1px solid rgba(255,255,255,0.07)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <div style={{ width: '56px', height: '56px', position: 'relative' }}>
                <Image src={opt.icon} alt="" fill style={{ objectFit: 'contain' }} aria-hidden="true" />
              </div>

              <span style={{ display: 'inline-block', background: 'var(--accent)', color: '#fff', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: '4px' }}>
                {opt.badge}
              </span>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>{opt.title}</h3>

              <p style={{ fontSize: '0.875rem', lineHeight: 1.65, opacity: 0.6, margin: 0, flex: 1 }}>
                {opt.description}
              </p>

              <Link href={opt.href} className="btn-accent" style={{ width: '100%', textAlign: 'center' }}>
                {opt.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
