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
    <section className="section" aria-labelledby="team-heading" style={{ background: '#0a0a0a' }}>
      <div className="section-inner">
        <h2
          id="team-heading"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px', lineHeight: 1.1, textAlign: 'center' }}
        >
          Our{' '}
          <span style={{ color: 'var(--accent)' }}>AWESOME</span>
          {' '}Team
        </h2>
        <p style={{ fontSize: '1rem', opacity: 0.6, marginBottom: '48px', textAlign: 'center', lineHeight: 1.6 }}>
          We have a fantastic team ready to assist you.
        </p>

        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {team.map((member) => (
            <div key={member.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', flex: '1 1 120px', maxWidth: '160px' }}>
              <div style={{ position: 'relative', width: '110px', height: '110px', borderRadius: 'var(--radius-media)', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.08)' }}>
                <Image src={member.image} alt={member.name} fill style={{ objectFit: 'cover', objectPosition: 'center top' }} sizes="110px" />
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontWeight: 700, margin: '0 0 2px', fontSize: '0.95rem' }}>{member.name}</p>
                <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.45 }}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
