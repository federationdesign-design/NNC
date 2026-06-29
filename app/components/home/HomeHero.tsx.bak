"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PropertyRailCard, { PropertyData } from "./PropertyRailCard";
import styles from "./HomeHero.module.css";

const PROPERTIES: PropertyData[] = [
  {
    slug: "ivy-cottage",
    name: "Ivy Cottage",
    location: "East Kent",
    beds: 2,
    type: "Children's Home",
    status: "Open",
    summary: "A warm, structured two-bed home supporting children with emotional and relational needs.",
    image: "/homes/ivy-cottage.jpg",
    highlight: "Placements available",
  },
  {
    slug: "holly-tree-cottage",
    name: "Holly Tree Cottage",
    location: "East Kent",
    beds: 1,
    type: "Solo Home",
    status: "Open",
    summary: "Operating as a solo placement for higher-complexity children where appropriate.",
    image: "/homes/holly-tree-cottage.jpg",
    highlight: "Solo placement",
  },
  {
    slug: "canterbury",
    name: "Canterbury Home",
    location: "Canterbury, Kent",
    beds: 3,
    type: "Purpose-Built",
    status: "Proposed",
    summary: "Proposed 3-bed purpose-built home at Pebblings, Grove Road, Preston CT3 1EE.",
    image: "/homes/canterbury.jpg",
  },
  {
    slug: "deal",
    name: "Deal Home",
    location: "Deal, Kent",
    beds: 3,
    type: "Purpose-Built",
    status: "Proposed",
    summary: "Proposed 3-bed purpose-built home at Wallers Field development, Deal.",
    image: "/homes/deal.jpg",
  },
];

export default function HomeHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const overlay = overlayRef.current;
    if (!hero || !overlay) return;

    const NAV_H = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--nav-height") || "64"
    );

    const onScroll = () => {
      const h = hero.offsetHeight;
      const s = window.scrollY;
      const start = h * 0.1;
      const range = h * 0.55;
      overlay.style.opacity =
        s <= start ? "0" : String(Math.min((s - start) / range, 1));
      document.documentElement.dataset.heroSolid = s > h - NAV_H ? "1" : "0";
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>

      {/* Hero image - right side only on desktop, full bleed mobile */}
      <div className={styles.heroBg}>
        <Image
          src="/hero/hero-desktop.jpg"
          alt=""
          fill
          priority
          sizes="75vw"
          className={styles.heroBgImg}
        />
        <div className={styles.brandOverlay} />
        <div ref={overlayRef} className={styles.scrollOverlay} />
        <div className={styles.topGradient} />
      </div>

      {/* Page layout: white left panel + hero content right */}
      <div className={styles.layout}>

        {/* WHITE LEFT PANEL */}
        <aside className={styles.panel}>
          <div className={styles.panelInner}>
            <Link href="/" className={styles.logoWrap} aria-label="Nurturing Nests home">
              <Image
                src="/header-logo.svg"
                alt="Nurturing Nests"
                width={140}
                height={80}
                className={styles.logoImg}
                priority
              />
            </Link>

            <p className={styles.panelLabel}>Our Homes</p>
            <div className={styles.railCards}>
              {PROPERTIES.map((p) => (
                <PropertyRailCard key={p.slug} property={p} />
              ))}
            </div>
            <Link href="/homes" className={styles.viewAll}>
              View all homes &rarr;
            </Link>
          </div>
        </aside>

        {/* HERO CONTENT - right */}
        <div className={styles.content}>
          <p className={styles.eyebrow}>Specialist residential care in Kent</p>
          <h1 className={styles.heading}>
            A safe place<br />to grow.
          </h1>
          <p className={styles.sub}>
            Therapeutically informed, relationship-based care for children
            and young people with complex needs. Keeping Kent children in Kent.
          </p>
          <div className={styles.actions}>
            <Link href="/homes" className={styles.ctaPrimary}>
              Our homes
            </Link>
            <Link href="/contact" className={styles.ctaSecondary}>
              Make a referral
            </Link>
          </div>
          <div className={styles.trustBar}>
            <span className={styles.trustItem}>Registered with Ofsted</span>
            <span className={styles.trustDot} />
            <span className={styles.trustItem}>East Kent</span>
            <span className={styles.trustDot} />
            <span className={styles.trustItem}>118 referrals received</span>
          </div>
        </div>

      </div>
    </section>
  );
}
