'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Helena',
    quote: "Adapt Ability are such an amazing company! Always so quick to respond to messages and they go out of their way to help. I had such a great time with Matt on my trial days before I got my Omeo, who knew a wheelchair could be so much fun! I raised money through 10 different charities to buy my chair and Lisa was so patient and so helpful pulling all the money together to get my chair as quickly as possible. I am so grateful for their continued support. Couldn't recommend them highly enough.",
    image: '/Helena-e1741800294219.jpg',
    vehicle: 'Omeo owner',
  },
  {
    name: 'Steve',
    quote: "I love it. It's definitely going to be a game changer, especially with my work in construction where for the most part we're on building sites.",
    image: '/IMG_6884_edited-1.jpg',
    vehicle: 'Omeo owner',
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

  const t = testimonials[index]

  return (
    <section
      className="section"
      aria-labelledby="testimonials-heading"
      style={{ background: '#0a0a0a' }}
    >
      <div className="section-inner">
        <span className="eyebrow">Customer stories</span>
        <h2
          id="testimonials-heading"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '48px',
            lineHeight: 1.1,
          }}
        >
          Hear from our happy customers
        </h2>

        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '60px',
            alignItems: 'center',
            touchAction: 'pan-x',
          }}
          className="testimonial-grid"
        >
          {/* Image */}
          <div
            style={{
              position: 'relative',
              aspectRatio: '3/4',
              borderRadius: 'var(--radius-media)',
              overflow: 'hidden',
              maxWidth: '340px',
            }}
          >
            <Image
              src={t.image}
              alt={t.name}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>

          {/* Quote */}
          <div>
            <p
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                lineHeight: 1.55,
                fontWeight: 400,
                marginBottom: '32px',
                opacity: 0.9,
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div>
                <p style={{ fontWeight: 700, margin: 0, fontSize: '1rem' }}>{t.name}</p>
                <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.5, color: 'var(--accent)' }}>{t.vehicle}</p>
              </div>
            </div>

            {/* Dots */}
            {testimonials.length > 1 && (
              <div style={{ display: 'flex', gap: '8px', marginTop: '32px' }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    style={{
                      width: i === index ? '24px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      border: 'none',
                      background: i === index ? 'var(--accent)' : 'rgba(255,255,255,0.2)',
                      cursor: 'pointer',
                      transition: 'width 0.3s, background 0.3s',
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .testimonial-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  )
}
