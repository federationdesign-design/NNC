import Image from 'next/image'
import Link from 'next/link'

export default function MediaAndTrustBar() {
  return (
    <>
      {/* As seen on */}
      <section className="section" aria-label="As seen on" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <Image
            src="/As-Seen-On-AWO-2048x551.png"
            alt="As seen on Channel 4, BBC, Channel 5 and more"
            width={580}
            height={156}
            style={{ objectFit: 'contain', opacity: 0.6, maxWidth: '100%', filter: 'brightness(0) invert(1)' }}
          />
        </div>
      </section>

      {/* Change your life / trust section */}
      <section className="section" aria-labelledby="trust-heading" style={{ background: '#0a0a0a', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1rem', opacity: 0.5, marginBottom: '8px', letterSpacing: '0.05em' }}>
            Change your life for the better
          </p>
          <h2
            id="trust-heading"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '40px' }}
          >
            with a Company you can{' '}
            <span style={{ color: 'var(--accent)' }}>TRUST</span>
          </h2>

          {/* Trust logos */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '48px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <div style={{ textAlign: 'center' }}>
              <Image src="/BHTA-TSI-Logo_Colour-L.png" alt="BHTA - British Healthcare Trade Association" width={110} height={55} style={{ objectFit: 'contain' }} />
              <p style={{ fontSize: '0.72rem', opacity: 0.4, marginTop: '8px' }}>Approved Code member</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Image src="/Trust-Pilot-Reviews-Logo-1.png" alt="Trustpilot" width={130} height={32} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
              <p style={{ fontSize: '0.72rem', opacity: 0.4, marginTop: '8px' }}>Excellent rating</p>
            </div>
          </div>

          <p style={{ fontSize: '1rem', opacity: 0.55, marginBottom: '32px' }}>
            Adapt Ability is a member of BHTA
          </p>

          <Link href="/try" className="btn-accent">
            Try it for FREE
          </Link>
        </div>
      </section>
    </>
  )
}
