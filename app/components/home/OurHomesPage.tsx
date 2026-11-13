"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import StatementRequestModal from "./StatementRequestModal";
import OfstedModal from "./OfstedModal";
import styles from "./OurHomesPage.module.css";

interface Home {
  slug: string;
  name: string;
  urn: string;
  location: string;
  beds: number;
  ageRange: string;
  type: string;
  status: string;
  ofstedRating: string;
  summary: string;
  roundal: string;
  icon: string;
}

const HOMES: Home[] = [
  {
    slug: "ivy-cottage",
    name: "Ivy Cottage",
    urn: "2827996",
    location: "East Kent",
    beds: 2,
    ageRange: "Ages 8–12",
    type: "Children's Home",
    status: "Open",
    ofstedRating: "Good",
    summary:
      "A warm, structured two-bed home supporting children with emotional, behavioural and relational needs in East Kent. Staffed 24/7 by a consistent team trained in therapeutic relational practice.",
    roundal: "/homes/ivy-roundal.jpg",
    icon: "/homes/ivy-icon.png",
  },
  {
    slug: "holly-tree-cottage",
    name: "Holly Tree Cottage",
    urn: "2827926",
    location: "East Kent",
    beds: 1,
    ageRange: "Ages 8–12",
    type: "Solo Home",
    status: "Open",
    ofstedRating: "Good",
    summary:
      "Operating as a solo placement for higher-complexity children who benefit from a dedicated, low-arousal environment. Holly Tree Cottage provides intensive, consistent support with a single-child focus.",
    roundal: "/homes/holly-roundal.jpg",
    icon: "/homes/holly-icon.png",
  },
];

const PILLARS = [
  {
    label: "RELATIONAL",
    text: "Small homes. Known children. Present adults.",
  },
  {
    label: "DEVELOPMENTAL",
    text: "The right environment at the right time.",
  },
  {
    label: "CONNECTED",
    text: "Individual homes held within a wider community.",
  },
];

export default function OurHomesPage() {
  const [statementOpen, setStatementOpen] = useState(false);
  const [ofstedOpen, setOfstedOpen] = useState(false);
  const [activeHome, setActiveHome] = useState<string | null>(null);

  return (
    <main className={styles.page}>

      {/* ── HERO ── */}
      <div className={styles.hero}>
        <Image
          src="/homes/homes-hero-img.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className={styles.heroGradient} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Our Homes</p>
          <h1 className={styles.heading}>Specialist residential care in Kent</h1>
          <p className={styles.sub}>
            Small, structured homes providing therapeutic residential care for children
            with emotional, behavioural and relational needs. All homes are Ofsted
            registered and inspected. To make a referral or request a Statement of
            Purpose, contact us directly.
          </p>
        </div>
      </div>

      {/* ── BLUE FLASH ── */}
      <div className={styles.flash}>
        {PILLARS.map((p) => (
          <div key={p.label} className={styles.flashCol}>
            <p className={styles.flashLabel}>{p.label}</p>
            <p className={styles.flashText}>{p.text}</p>
          </div>
        ))}
      </div>

      {/* ── HOME CARDS ── */}
      <div className={styles.list}>
        {HOMES.map((home, i) => (
          <article
            key={home.slug}
            className={`${styles.card} ${i % 2 === 1 ? styles.cardReverse : ""}`}
          >
            {/* Roundal */}
            <div className={styles.roundalWrap}>
              <Link href={`/homes/${home.slug}`}>
                <div className={styles.roundal}>
                  <Image
                    src={home.roundal}
                    alt={home.name}
                    fill
                    sizes="420px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Link>
            </div>

            {/* Body */}
            <div className={styles.body}>
              {/* Icon + Ofsted badge row */}
              <div className={styles.badgeRow}>
                <div className={styles.homeIcon}>
                  <Image src={home.icon} alt={`${home.name} icon`} fill sizes="52px" style={{ objectFit: "contain" }} />
                </div>
                <div className={styles.ofstedBadge}>
                  <Image src="/ofsted.png" alt="Ofsted Good Provider" fill sizes="52px" style={{ objectFit: "contain" }} />
                </div>
              </div>

              <h2 className={styles.title}>{home.name}</h2>
              <p className={styles.desc}>{home.summary}</p>

              {/* Pills */}
              <div className={styles.pills}>
                <span className={styles.pill}>{home.location}</span>
                <span className={styles.pill}>{home.beds} bed{home.beds > 1 ? "s" : ""}</span>
                <span className={styles.pill}>{home.ageRange}</span>
              </div>

              {/* Buttons */}
              <div className={styles.actions}>
                <Link href={`/homes/${home.slug}`} className={styles.btnOutline}>
                  View home →
                </Link>
                <button
                  className={styles.btnPrimary}
                  onClick={() => { setActiveHome(home.slug); setStatementOpen(true); }}
                >
                  Request Statement of Purpose
                </button>
                <button
                  className={styles.btnGhost}
                  onClick={() => setOfstedOpen(true)}
                >
                  View Ofsted report →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <StatementRequestModal
        open={statementOpen}
        onClose={() => { setStatementOpen(false); setActiveHome(null); }}
      />
      <OfstedModal open={ofstedOpen} onClose={() => setOfstedOpen(false)} />
    </main>
  );
}
