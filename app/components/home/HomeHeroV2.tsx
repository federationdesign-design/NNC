"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PropertyRailCard, { PropertyData } from "./PropertyRailCard";
import ReferralModal from "./ReferralModal";
import OfstedModal from "./OfstedModal";
import styles from "./HomeHeroV2.module.css";

const PROPERTIES: PropertyData[] = [
  {
    slug: "ivy-cottage",
    name: "Ivy Cottage",
    urn: "2827996",
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
    urn: "2827997",
    location: "East Kent",
    beds: 1,
    type: "Solo Home",
    status: "Open",
    summary: "Operating as a solo placement for higher-complexity children who benefit from a dedicated, low-arousal environment.",
    image: "/homes/holly-tree-cottage.jpg",
  },

];

const HERO_IMAGES = [
  "/hero/image2.jpg",
  "/hero/portrait-of-smiling-african-boy copy.jpg",
];

const NAV_LINKS = [
  { label: "Our Homes", href: "/homes" },
  { label: "Vacancies", href: "/vacancies" },
  { label: "Ofsted",    href: "/Ivy Cottage CH Full 10442530 FINAL.pdf" },
  { label: "Contact",   href: "/contact" },
];

export default function HomeHeroV2() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [referralOpen, setReferralOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [ofstedOpen, setOfstedOpen] = useState(false);

  useEffect(() => {
    if (HERO_IMAGES.length <= 1) return;
    const interval = setInterval(() => {
      setSlideIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 10000);
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
              <PropertyRailCard key={p.slug} property={p} />
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
            {/* Desktop nav links */}
            <div className={styles.heroNavLinks}>
              {NAV_LINKS.map((l) => (
                l.href === "#ofsted" ? (
                  <button key={l.href} onClick={() => setOfstedOpen(true)} className={styles.heroNavLink}>
                    {l.label}
                  </button>
                ) : (
                  <Link key={l.href} href={l.href} className={styles.heroNavLink}>
                    {l.label}
                  </Link>
                )
              ))}
            </div>

            <div className={styles.heroNavActions}>
              <button type="button" onClick={() => setReferralOpen(true)} className={styles.referralBtn}>
                Make a referral
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                     xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor"
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <a href="tel:01233427012" className={styles.callBtn}>
                <Image src="/phone-iocn.svg" alt="" width={18} height={18} />
                Call us
              </a>
              {/* Mobile burger - rightmost */}
              <button
                className={styles.burger}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Open menu"
              >
                <span /><span /><span />
              </button>
            </div>
          </nav>

          {/* Mobile menu overlay */}
          {menuOpen && (
            <div className={styles.mobileMenu}>
              <button className={styles.mobileMenuClose} onClick={() => setMenuOpen(false)} aria-label="Close menu">&times;</button>
              {NAV_LINKS.map((l) => (
                l.href === "#ofsted" ? (
                  <button key={l.href} onClick={() => { setOfstedOpen(true); setMenuOpen(false); }} className={styles.mobileMenuLink}>
                    {l.label}
                  </button>
                ) : (
                  <Link key={l.href} href={l.href} className={styles.mobileMenuLink} onClick={() => setMenuOpen(false)}>
                    {l.label}
                  </Link>
                )
              ))}
              <button type="button" onClick={() => { setReferralOpen(true); setMenuOpen(false); }} className={styles.mobileMenuCta}>
                Make a referral
              </button>
            </div>
          )}

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

              {/* Cards row */}
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

                {/* Ofsted Good Provider card - links to report */}
                <button onClick={() => setOfstedOpen(true)} className={styles.ofstedCard} aria-label="View Ofsted report">
                  <Image src="/ofsted.png" alt="Ofsted Good Provider"
                         fill style={{ objectFit: "cover" }}
                         sizes="160px" />
                </button>

              </div>

              {/* CTAs */}
              <div className={styles.ctaRow}>
                <Link href="/homes" className={styles.ctaBtn}>
                  View homes
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                       xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor"
                          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <button onClick={() => setOfstedOpen(true)} className={styles.ctaBtn}>
                  View Ofsted report
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                       xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor"
                          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
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

      <ReferralModal open={referralOpen} onClose={() => setReferralOpen(false)} />
      <OfstedModal open={ofstedOpen} onClose={() => setOfstedOpen(false)} />
    </>
  );
}
