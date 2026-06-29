'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'

export default function HeroVideo() {
  const heroRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

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

      {/* Base overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 2, pointerEvents: 'none' }} />

      {/* Top gradient for nav */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '200px', background: 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, transparent 100%)', zIndex: 3, pointerEvents: 'none' }} />

      {/* Scroll fade overlay */}
      <div ref={overlayRef} style={{ position: 'absolute', inset: 0, background: '#000', opacity: 0, zIndex: 4, pointerEvents: 'none', transition: 'none' }} />

      {/* Content */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10, padding: '0 24px 64px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', fontWeight: 500, opacity: 0.9, margin: '0 0 8px', letterSpacing: '0.01em' }}>
            Life is about{' '}
            <span style={{ color: 'var(--accent)', fontWeight: 700 }}>BALANCE</span>
            , and{' '}
            <span style={{ color: 'var(--accent)', fontWeight: 700 }}>INDEPENDENCE</span>
          </p>
          <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#fff', margin: '0 0 32px', maxWidth: '700px' }}>
            Mobility Solutions<br />for Work &amp; Play
          </h1>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-accent">
              Enquire now
            </Link>
            <Link href="/products" className="btn-outline">
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
