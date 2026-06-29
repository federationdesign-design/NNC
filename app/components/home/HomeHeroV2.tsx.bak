"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PropertyRailCard, { PropertyData } from "./PropertyRailCard";
import PropertyModal from "./PropertyModal";
import styles from "./HomeHeroV2.module.css";

const PROPERTIES: PropertyData[] = [
  {
    slug: "ivy-cottage",
    name: "Ivy Cottage",
    location: "East Kent",
    beds: 2,
    type: "Children's Home",
    status: "Open",
    summary: "A warm, structured two-bed home supporting children with emotional, behavioural and relational needs in East Kent.",
    image: "/homes/ivy-cottage.jpg",
  },
  {
    slug: "holly-tree-cottage",
    name: "Holly Tree Cottage",
    location: "East Kent",
    beds: 1,
    type: "Solo Home",
    status: "Open",
    summary: "Operating as a solo placement for higher-complexity children who benefit from a dedicated, low-arousal environment.",
    image: "/homes/holly-tree-cottage.jpg",
  },
  {
    slug: "deal",
    name: "Deal Home",
    location: "Deal, Kent",
    beds: 3,
    type: "Purpose-Built",
    status: "Proposed",
    summary: "A proposed 3-bed purpose-built home at Wallers Field, Deal, designed for stabilisation and step-down support for young people.",
    image: "/homes/deal.jpg",
  },
];

const HERO_IMAGES = [
  "/hero/hero-desktop.jpg",
  "/hero/image2.jpg",
];

const NAV_LINKS = [
  { label: "Our Homes", href: "/homes" },
  { label: "Vacancies", href: "/vacancies" },
  { label: "Ofsted",    href: "/ofsted" },
  { label: "Contact",   href: "/contact" },
];

export default function HomeHeroV2() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [activeProperty, setActiveProperty] = useState<PropertyData | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (HERO_IMAGES.length <= 1) return;
    const interval = setInterval(() => {
      setSlideIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    const onScroll = () => {
      const s = window.scrollY;
      const h = window.innerHeight;
      const start = h * 0.1;
      const range = h * 0.55;
      overlay.style.opacity =
        s <= start ? "0" : String(Math.min((s - start) / range, 1));
      document.documentElement.dataset.heroSolid = s > h * 0.6 ? "1" : "0";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className={styles.root}>

        {/* LEFT PANEL */}
        <aside className={styles.panel}>
          <div className={styles.logoArea}>
            <Link href="/" aria-label="Nurturing Nests home">
              <Image src="/header-logo.svg" alt="Nurturing Nests"
                     width={200} height={110} className={styles.logo} priority />
            </Link>
          </div>
          <div className={styles.cards}>
            {PROPERTIES.map((p) => (
              <PropertyRailCard key={p.slug} property={p} onClick={setActiveProperty} />
            ))}
          </div>
        </aside>

        {/* RIGHT HERO */}
        <div className={styles.heroArea}>

          {/* Slideshow */}
          <div className={styles.heroBg}>
            {HERO_IMAGES.map((src, i) => (
              <Image key={src} src={src} alt="" fill priority={i === 0}
                sizes="(min-width: 900px) calc(100vw - 420px), 100vw"
                className={`${styles.heroBgImg} ${i === slideIndex ? styles.heroBgImgActive : ""}`}
              />
            ))}
            <div className={styles.brandOverlay} />
            <div ref={overlayRef} className={styles.scrollOverlay} />
          </div>

          {/* Header nav */}
          <nav className={styles.heroNav} aria-label="Main navigation">
            <div className={styles.heroNavLinks}>
              {NAV_LINKS.map((l, i) => (
                <Link key={l.href} href={l.href} className={styles.heroNavLink}
>
                  {l.label}
                </Link>
              ))}
            </div>
            <div className={styles.heroNavActions}>
              <Link href="/contact" className={styles.referralBtn}>
                Make a referral
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                     xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor"
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <a href="tel:02083456789" className={styles.callBtn}>
                <Image src="/phone-iocn.svg" alt="" width={18} height={18} />
                Call us
              </a>
            </div>
          </nav>

          {/* Hero content */}
          <div className={styles.heroContent}>

            {/* Top-left subtitle */}
            <p className={styles.heroSubtitle}>
              Our model has been intentionally designed around the real referral
              patterns we receive providing stability, structure and relational
              consistency for children with complex emotional and neurodiverse needs.
            </p>

            {/* Bottom section */}
            <div className={styles.heroBottom}>
              <h1 className={styles.heroHeading}>
                Specialist residential care in Kent
              </h1>

              {/* Cards row + CTA */}
              <div className={styles.heroBottomRow}>

                {/* White referral card */}
                <div className={styles.whiteCard}>
                  <p className={styles.whiteCardText}>
                    Since opening in May &apos;25, we have received 481 referrals
                    from Kent County Council.
                  </p>
                  <div className={styles.whiteCardLogos}>
                    <Image src="/header-logo.svg" alt="Nurturing Nests"
                           width={56} height={32}
                           style={{ objectFit: "contain", objectPosition: "left" }} />
                    <div className={styles.logoSep} />
                    <Image src="/kent-council.png" alt="Kent County Council"
                           width={80} height={40}
                           style={{ objectFit: "contain" }} />
                  </div>
                </div>

                {/* Ofsted Good Provider card - compact */}
                <div className={styles.ofstedCard}>
                  <Image src="/ofsted.png" alt="Ofsted Good Provider"
                         fill style={{ objectFit: "contain", padding: "12px" }}
                         sizes="160px" />
                </div>

              </div>

              {/* View homes CTA bottom right */}
              <div className={styles.ctaRow}>
                <Link href="/homes" className={styles.ctaBtn}>
                  View homes
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                       xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor"
                          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Slide indicators */}
          {HERO_IMAGES.length > 1 && (
            <div className={styles.slideIndicators}>
              {HERO_IMAGES.map((_, i) => (
                <button key={i}
                  className={`${styles.slideDot} ${i === slideIndex ? styles.slideDotActive : ""}`}
                  onClick={() => setSlideIndex(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <PropertyModal property={activeProperty} onClose={() => setActiveProperty(null)} />
    </>
  );
}
