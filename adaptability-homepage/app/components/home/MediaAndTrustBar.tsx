import Image from 'next/image'

export default function MediaAndTrustBar() {
  return (
    <>
      {/* As seen on */}
      <section
        className="section"
        aria-label="As seen on"
        style={{ background: '#0a0a0a', paddingTop: '60px', paddingBottom: '60px' }}
      >
        <div className="section-inner">
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              opacity: 0.35,
              marginBottom: '32px',
              textAlign: 'center',
            }}
          >
            As seen on
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              src="/As-Seen-On-AWO-2048x551.png"
              alt="As seen on Channel 4, BBC, Channel 5 and more"
              width={600}
              height={161}
              style={{
                objectFit: 'contain',
                opacity: 0.55,
                maxWidth: '100%',
                filter: 'brightness(0) invert(1)',
              }}
            />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section
        className="section"
        aria-label="Certifications and trust"
        style={{ paddingTop: '60px', paddingBottom: '60px' }}
      >
        <div className="section-inner">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '48px',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <Image
                src="/BHTA-TSI-Logo_Colour-L.png"
                alt="BHTA - British Healthcare Trade Association member"
                width={120}
                height={60}
                style={{ objectFit: 'contain' }}
              />
              <p style={{ fontSize: '0.72rem', opacity: 0.4, marginTop: '8px' }}>BHTA member</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Image
                src="/Trust-Pilot-Reviews-Logo-1.png"
                alt="Trustpilot reviews"
                width={140}
                height={36}
                style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
              />
              <p style={{ fontSize: '0.72rem', opacity: 0.4, marginTop: '8px' }}>Excellent rating</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Image
                src="/SIA-logo-wht-bck.png"
                alt="SIA - Spinal Injuries Association"
                width={100}
                height={60}
                style={{ objectFit: 'contain' }}
              />
              <p style={{ fontSize: '0.72rem', opacity: 0.4, marginTop: '8px' }}>SIA approved</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
