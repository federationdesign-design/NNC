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
              <Image
                src="/header-logo.svg"
                alt="Nurturing Nests"
                width={200}
                height={110}
                className={styles.logo}
                priority
              />
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
                      style={i > 0 ? { borderLeft: "1px solid rgba(255,255,255,0.25)" } : {}}>
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
            <div className={styles.heroTopLeft}>
              <p className={styles.heroSubtitle}>
                Our model has been intentionally designed around the real referral patterns we
                receive providing stability, structure and relational consistency for children
                with complex emotional and neurodiverse needs.
              </p>
            </div>

            {/* Bottom section: heading + stacked cards + CTA */}
            <div className={styles.heroBottom}>
              <h1 className={styles.heroHeading}>
                Specialist residential care in Kent
              </h1>

              <div className={styles.heroBottomRow}>

                {/* Two stacked overlay cards */}
                <div className={styles.stackedCards}>

                  {/* Card 1: dark navy - Ofsted */}
                  <div className={styles.ofstedCard}>
                    <div className={styles.ofstedCardLeft}>
                      <Image
                        src="/ofsted-raw-no-frame.png"
                        alt="Ofsted"
                        width={140}
                        height={60}
                        style={{ objectFit: "contain", objectPosition: "left" }}
                      />
                    </div>
                    <div className={styles.ofstedCardRight}>
                      <p className={styles.ofstedCardText}>
                        Our model has been intentionally designed around the real referral
                        patterns we receive providing stability, structure and relational
                        consistency for children with complex emotional and neurodiverse needs.
                      </p>
                      <Link href="/ofsted" className={styles.cardBtn}>
                        View Report
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                             xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Card 2: brand blue - NNC */}
                  <div className={styles.nncCard}>
                    <Image
                      src="/header-logo.svg"
                      alt="Nurturing Nests"
                      width={100}
                      height={56}
                      className={styles.nncCardLogo}
                    />
                    <p className={styles.nncCardText}>
                      Our model has been intentionally designed around the real referral
                      patterns we receive providing stability, structure and relational
                      consistency for children with complex emotional and neurodiverse needs.
                    </p>
                    <Link href="/contact" className={styles.cardBtnOutline}>
                      Make a referral
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                           xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor"
                              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>

                </div>

                {/* Main CTA */}
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
