'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const testimonials = [
  {
    name: 'Helena',
    quote: "Adapt Ability are such an amazing company! Always so quick to respond to messages and they go out of their way to help. I had such a great time with Matt on my trial days before I got my Omeo, who knew a wheelchair could be so much fun! I raised money through 10 different charities to buy my chair and Lisa was so patient and so helpful pulling all the money together to get my chair as quickly as possible. I am so grateful for their continued support. Couldn't recommend them highly enough.",
    image: '/Helena-e1741800294219.jpg',
  },
  {
    name: 'Steve',
    quote: "I love it. It's definitely going to be a game changer, especially with my work in construction where for the most part we're on building sites.",
    image: '/IMG_6884_edited-1.jpg',
  },
]

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const startX = useRef(0)

  function handleTouchStart(e: React.TouchEvent) {
    startX.current = e.touches[0].clientX
  }
  function handleTouchEnd(e: React.TouchEvent) {
    const diff = startX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) < 50) return
    if (diff > 0 && index < testimonials.length - 1) setIndex(index + 1)
    if (diff < 0 && index > 0) setIndex(index - 1)
  }

  return (
    <section className="section" aria-labelledby="testimonials-heading">
      <div className="section-inner">
        <h2
          id="testimonials-heading"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '48px', lineHeight: 1.1 }}
        >
          Hear from our{' '}
          <span style={{ color: 'var(--accent)' }}>HAPPY</span>
          {' '}customers&hellip;
        </h2>

        {/* Desktop: side by side */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}
          className="testimonials-grid"
        >
          {testimonials.map((t) => (
            <article
              key={t.name}
              style={{ background: '#111', borderRadius: 'var(--radius-media)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div style={{ position: 'relative', aspectRatio: '4/3' }}>
                <Image src={t.image} alt={t.name} fill style={{ objectFit: 'cover', objectPosition: 'center top' }} sizes="(min-width: 1024px) 50vw, 100vw" />
              </div>
              <div style={{ padding: '28px' }}>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.7, opacity: 0.8, margin: '0 0 20px', fontStyle: 'italic' }}>
                  &lsquo;{t.quote}&rsquo;
                </p>
                <p style={{ fontWeight: 700, margin: '0 0 16px', fontSize: '1rem' }}>{t.name}</p>
                <Link
                  href="/testimonials"
                  style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', borderBottom: '1px solid var(--accent)', paddingBottom: '2px' }}
                >
                  Learn more &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/testimonials" className="btn-outline">
            More testimonials
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
