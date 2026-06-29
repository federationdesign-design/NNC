'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SiteNav() {
  const [solid, setSolid] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setSolid(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        background: solid ? '#000' : 'transparent',
        borderBottom: solid ? '1px solid rgba(255,255,255,0.08)' : 'none',
        transition: 'background 0.3s, border-color 0.3s',
      }}
    >
      <Link href="/" aria-label="Adapt Ability home">
        <Image
          src="/Adapt-Ability-Dark-Background-600x217.png"
          alt="Adapt Ability"
          width={140}
          height={51}
          priority
        />
      </Link>

      {/* Desktop nav links */}
      <ul
        role="list"
        style={{
          display: 'none',
          gap: '36px',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
        className="desktop-nav"
      >
        {[
          { label: 'Omeo', href: '/omeo' },
          { label: 'Hoss', href: '/hoss' },
          { label: 'Try a vehicle', href: '/try' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ].map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 500,
                opacity: 0.85,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = '1')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = '0.85')}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Link href="/try" className="btn-accent" style={{ fontSize: '0.75rem', padding: '10px 20px' }}>
          Try for free
        </Link>
        {/* Mobile hamburger */}
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
          className="mobile-menu-btn"
        >
          <span style={{ display: 'block', width: '22px', height: '2px', background: '#fff', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: '#fff', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: '#fff', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            bottom: 0,
            background: '#000',
            zIndex: 99,
            padding: '40px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {[
            { label: 'Omeo', href: '/omeo' },
            { label: 'Hoss', href: '/hoss' },
            { label: 'Try a vehicle', href: '/try' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
            { label: 'Shop', href: '/products' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '1.5rem',
                fontWeight: 600,
                padding: '12px 0',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
