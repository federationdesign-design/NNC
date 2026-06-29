'use client'

import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    name: 'Omeo',
    slug: 'omeo',
    tagline: 'The personal mobility revolution',
    description: 'A self-balancing personal mobility device that moves with your body. For indoor and outdoor use - wherever life takes you.',
    image: '/Orange-Omeo-with-Logo-1.png',
    logo: '/omeo logo.png',
    cta: 'Discover the Omeo',
  },
  {
    name: 'Hoss',
    slug: 'hoss',
    tagline: 'Redefine what a wheelchair can do',
    description: 'A self-balancing wheelchair that puts you in control. Elevate your independence at home, at work, and beyond.',
    image: '/New-Hoss-with-Logo-v3-1-edited-scaled.png',
    logo: '/hoss logo.png',
    cta: 'Discover the Hoss',
  },
]

export default function ProductTiles() {
  return (
    <section className="section" aria-labelledby="products-heading">
      <div className="section-inner">
        <span className="eyebrow">Our vehicles</span>
        <h2
          id="products-heading"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '48px',
            maxWidth: '560px',
            lineHeight: 1.1,
          }}
        >
          Championing the future of mobility
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/${product.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
              aria-label={`Learn more about the ${product.name}`}
            >
              <article
                style={{
                  background: '#111',
                  borderRadius: 'var(--radius-media)',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'border-color 0.2s, transform 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(240,129,38,0.4)'
                  el.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(255,255,255,0.06)'
                  el.style.transform = 'translateY(0)'
                }}
              >
                {/* Product image */}
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '4/3',
                    background: '#0d0d0d',
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'contain', padding: '24px' }}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>

                {/* Content */}
                <div style={{ padding: '28px 28px 32px' }}>
                  <Image
                    src={product.logo}
                    alt={`${product.name} logo`}
                    width={80}
                    height={28}
                    style={{ objectFit: 'contain', objectPosition: 'left', marginBottom: '12px' }}
                  />
                  <p
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      margin: '0 0 10px',
                    }}
                  >
                    {product.tagline}
                  </p>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      opacity: 0.65,
                      margin: '0 0 24px',
                    }}
                  >
                    {product.description}
                  </p>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      borderBottom: '1px solid var(--accent)',
                      paddingBottom: '2px',
                    }}
                  >
                    {product.cta} &rarr;
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
