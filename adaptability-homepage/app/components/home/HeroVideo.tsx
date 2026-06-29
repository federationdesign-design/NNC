'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'

export default function HeroVideo() {
  const heroRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const [navSolid, setNavSolid] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const hero = heroRef.current
      const overlay = overlayRef.current
      if (!hero || !overlay) return

      const h = hero.offsetHeight
      const s = window.scrollY
      const start = h * 0.10
      const range = h * 0.55

      overlay.style.opacity = s <= start
        ? '0'
        : String(Math.min((s - start) / range, 1))

      setNavSolid(s > h - 56)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={heroRef}
      style={{
        position: 'relative',
        height: '100dvh',
        marginTop: 'calc(-1 * var(--nav-height))',
        overflow: 'hidden',
        background: '#0a0a0a',
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      >
        <source src="/Omeo-Sands.mp4" type="video/mp4" />
      </video>

      {/* Base dark overlay - always present for text legibility */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.45)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Top gradient for nav legibility */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)',
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />

      {/* Scroll-fade overlay - StyleBlock-010 */}
      <div
        ref={overlayRef}
        style={{
          position: 'absolute',
          inset: 0,
          background: '#000',
          opacity: 0,
          zIndex: 4,
          pointerEvents: 'none',
          transition: 'none',
        }}
      />

      {/* Hero content */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          padding: '0 24px 56px',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '16px',
            }}
          >
            Life is about balance and independence
          </span>
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 5rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: '#fff',
              margin: '0 0 20px',
              maxWidth: '720px',
            }}
          >
            Mobility solutions<br />
            for work <span style={{ color: 'var(--accent)' }}>&</span> play
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              lineHeight: 1.5,
              color: '#fff',
              opacity: 0.8,
              margin: '0 0 36px',
              maxWidth: '480px',
            }}
          >
            Self-balancing mobility vehicles that transform independence for wheelchair and ambulatory users.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/try" className="btn-accent">
              Try for free
            </Link>
            <Link href="/omeo" className="btn-outline">
              Explore vehicles
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
