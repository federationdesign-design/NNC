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
    summary: "A warm, structured two-bed home supporting children with emotional, behavioural and relational needs.",
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
    summary: "Proposed 3-bed purpose-built home at Pebblings, Grove Road, Preston, Kent CT3 1EE.",
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

export default function HomeHeroV2() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [activeProperty, setActiveProperty] = useState<PropertyData | null>(null);

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

        {/* LEFT PANEL - white, fixed width, full height */}
        <aside className={styles.panel}>
          {/* Logo */}
          <div className={styles.logoArea}>
            <Link href="/" aria-label="Nurturing Nests home">
              <Image
                src="/header-logo.svg"
                alt="Nurturing Nests"
                width={120}
                height={68}
                className={styles.logo}
                priority
              />
            </Link>
          </div>

          {/* Homes label */}
          <p className={styles.panelHeading}>Upcoming Homes</p>

          {/* Property cards */}
          <div className={styles.cards}>
            {PROPERTIES.map((p) => (
              <PropertyRailCard
                key={p.slug}
                property={p}
                onClick={setActiveProperty}
              />
            ))}
          </div>
        </aside>

        {/* RIGHT HERO - full bleed image, text bottom-left */}
        <div className={styles.heroArea}>
          {/* Background image */}
          <div className={styles.heroBg}>
            <Image
              src="/hero/hero-desktop.jpg"
              alt=""
              fill
              priority
              sizes="(min-width: 900px) calc(100vw - 340px), 100vw"
              className={styles.heroBgImg}
            />
            <div className={styles.brandOverlay} />
            <div ref={overlayRef} className={styles.scrollOverlay} />
          </div>

          {/* Text - anchored bottom-left like ANT */}
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <p className={styles.heroSubtitle}>
                Therapeutically informed, relationship-based care for children
                and young people with complex needs. Keeping Kent children in Kent.
              </p>
              <h1 className={styles.heroHeading}>
                Specialist residential care in Kent
              </h1>
            </div>

            {/* CTA bottom-right like ANT */}
            <div className={styles.heroCta}>
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

      </div>

      <PropertyModal
        property={activeProperty}
        onClose={() => setActiveProperty(null)}
      />
    </>
  );
}
