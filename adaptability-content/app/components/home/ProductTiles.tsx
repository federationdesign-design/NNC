'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function ProductTiles() {
  return (
    <section className="section" aria-labelledby="products-heading">
      <div className="section-inner">

        {/* Intro copy */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          {/* Product logos */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <Image src="/omeo logo.png" alt="Omeo" width={100} height={36} style={{ objectFit: 'contain' }} />
            <Image src="/hoss logo.png" alt="Hoss" width={100} height={36} style={{ objectFit: 'contain' }} />
          </div>
          <h2
            id="products-heading"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '24px' }}
          >
            Championing The{' '}
            <span style={{ color: 'var(--accent)' }}>FUTURE</span>
            {' '}of Mobility
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.75, opacity: 0.65, maxWidth: '680px', margin: '0 auto' }}>
            We believe that the future of mobility is being driven by new technology and recognise that disability is not only concerned with improving mobility, but also with the positive mental effects of increased accessibility and improved self-image. Whether you are a permanent wheelchair user or an ambulatory wheelchair user, the Hoss wheelchair and Omeo personal mobility device are game changers.
          </p>
        </div>

        {/* Product tiles */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {[
            {
              name: 'Omeo',
              slug: 'omeo',
              image: '/Orange-Omeo-with-Logo-1.png',
              logo: '/omeo logo.png',
              cta: 'Learn more',
            },
            {
              name: 'Hoss',
              slug: 'hoss',
              image: '/New-Hoss-with-Logo-v3-1-edited-scaled.png',
              logo: '/hoss logo.png',
              cta: 'Learn more',
            },
          ].map((product) => (
            <Link key={product.slug} href={`/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <article
                style={{
                  background: '#111',
                  borderRadius: 'var(--radius-media)',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'border-color 0.2s, transform 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(240,129,38,0.4)'; el.style.transform = 'translateY(-4px)' }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.06)'; el.style.transform = 'translateY(0)' }}
              >
                <div style={{ position: 'relative', aspectRatio: '4/3', background: '#0d0d0d' }}>
                  <Image src={product.image} alt={product.name} fill style={{ objectFit: 'contain', padding: '24px' }} sizes="(min-width: 1024px) 50vw, 100vw" />
                </div>
                <div style={{ padding: '24px 28px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Image src={product.logo} alt={`${product.name} logo`} width={80} height={28} style={{ objectFit: 'contain', objectPosition: 'left' }} />
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', borderBottom: '1px solid var(--accent)', paddingBottom: '2px' }}>
                    {product.cta} &rarr;
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Image strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {[
            { src: '/hoss-on-ice-2-edited-scaled.jpg', alt: 'Hoss in action on ice' },
            { src: '/IMG_6884_edited-1.jpg', alt: 'Omeo user outdoors' },
            { src: '/WhatsApp-Image-2025-01-20-at-13.41.57_f2c5ccf1-edited.jpg', alt: 'Adapt Ability customer' },
          ].map((img) => (
            <div key={img.src} style={{ position: 'relative', aspectRatio: '1/1', borderRadius: 'var(--radius-media)', overflow: 'hidden' }}>
              <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} sizes="33vw" />
            </div>
          ))}
        </div>

        {/* Self-balancing copy */}
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7, opacity: 0.7, marginTop: '40px', textAlign: 'center', maxWidth: '680px', margin: '40px auto 0' }}>
          Self-Balancing mobility is at the cutting edge of mobility solutions and has enhanced the wheelchair and ambulatory user experience
        </p>

      </div>
    </section>
  )
}
