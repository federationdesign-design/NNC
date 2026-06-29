import Image from 'next/image'

const team = [
  { name: 'Matt', role: 'Director', image: '/Matt-BW-2-1.jpg' },
  { name: 'Lisa', role: 'Operations', image: '/IMG-20240808-WA0003.jpg' },
  { name: 'Ava', role: 'Sales', image: '/IMG_6884_edited-1-1.jpg' },
  { name: 'Kieran', role: 'Engineer', image: '/1000029272-1432x2048.jpg' },
  { name: 'Eileen', role: 'Ireland Sales', image: '/Eileen.png' },
]

export default function TeamSection() {
  return (
    <section
      className="section"
      aria-labelledby="team-heading"
    >
      <div className="section-inner">
        <span className="eyebrow">The people behind it</span>
        <h2
          id="team-heading"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '16px',
            lineHeight: 1.1,
          }}
        >
          Our awesome team
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
          We have a fantastic team ready to assist you. Every member of the team has a personal connection to mobility and accessibility.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '32px',
            flexWrap: 'wrap',
          }}
        >
          {team.map((member) => (
            <div
              key={member.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                flex: '1 1 140px',
                maxWidth: '180px',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '120px',
                  height: '120px',
                  borderRadius: 'var(--radius-media)',
                  overflow: 'hidden',
                  border: '2px solid rgba(255,255,255,0.08)',
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="120px"
                />
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontWeight: 700, margin: '0 0 2px', fontSize: '0.95rem' }}>{member.name}</p>
                <p style={{ margin: 0, fontSize: '0.78rem', opacity: 0.5, color: 'var(--accent)' }}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: '64px',
            padding: '40px',
            background: '#0d0d0d',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: 1.65,
              opacity: 0.75,
              margin: 0,
              maxWidth: '680px',
            }}
          >
            We have an unwavering commitment to customer service and pride ourselves on being responsive, understanding and delivering a high quality service. Whether you have a simple enquiry or want to book maintenance and servicing, we are here to help. We will{' '}
            <strong style={{ color: '#fff', opacity: 1 }}>always</strong> look after you.
          </p>
        </div>
      </div>
    </section>
  )
}
