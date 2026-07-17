"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReferralModal from "./ReferralModal";
import OfstedModal from "./OfstedModal";
import HomeGallery from "./HomeGallery";
import HomeMap from "./HomeMap";
import styles from "./HomeDetailPage.module.css";

interface HomeData {
  slug: string;
  name: string;
  urn?: string;
  location: string;
  beds: number;
  type: string;
  status: string;
  ofstedRating: string | null;
  ofstedDate: string | null;
  summary: string;
  description: string;
  image: string;
  ofstedReportUrl: string | null;
  gallery?: string[];
  vimeoUrl?: string;
}

export default function HomeDetailPage({ home }: { home: HomeData }) {
  const [referralOpen, setReferralOpen] = useState(false);
  const [ofstedOpen, setOfstedOpen] = useState(false);

  return (
    <>
      <main className={styles.page}>

        {/* Hero */}
        <div className={styles.hero}>
          <div className={styles.heroImg}>
            <Image src={home.image} alt={home.name} fill style={{ objectFit: "cover" }} priority sizes="100vw" />
          </div>
          <div className={styles.heroContent}>
            <Link href="/homes" className={styles.backLink}>← Our homes</Link>
            <div className={styles.heroMeta}>
              <span className={styles.statusBadge}>{home.status}</span>
              {home.ofstedRating && (
                <span className={styles.ofstedBadge}>Ofsted: {home.ofstedRating}</span>
              )}
            </div>
            <h1 className={styles.heading}>{home.name}</h1>
            <p className={styles.sub}>{home.summary}</p>
          </div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.main}>

            {/* Key details */}
            <div className={styles.detailsGrid}>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Location</span>
                <span className={styles.detailValue}>{home.location}</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Beds</span>
                <span className={styles.detailValue}>{home.beds} bed{home.beds > 1 ? "s" : ""}</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Type</span>
                <span className={styles.detailValue}>{home.type}</span>
              </div>
              {home.urn && (
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>Ofsted URN</span>
                  <span className={styles.detailValue}>{home.urn}</span>
                </div>
              )}
              {home.ofstedRating && (
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>Ofsted rating</span>
                  <span className={styles.detailValue}>{home.ofstedRating}{home.ofstedDate ? ` — ${home.ofstedDate}` : ""}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div className={styles.description}>
              <h2 className={styles.sectionTitle}>About {home.name}</h2>
              <p>{home.description}</p>
            </div>

            {/* Video */}
            {home.vimeoUrl && (
              <div className={styles.videoWrap}>
                <h2 className={styles.sectionTitle}>See inside {home.name}</h2>
                <div className={styles.videoEmbed}>
                  <iframe
                    src={home.vimeoUrl}
                    className={styles.video}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={`${home.name} video`}
                  />
                </div>
              </div>
            )}

          </div>

          {/* Sidebar */}
          <div className={styles.sidebar}>

            <div className={styles.sideCard}>
              <h3 className={styles.sideCardTitle}>Make a referral</h3>
              <p className={styles.sideCardText}>To refer a child to {home.name}, complete our referral form and we will respond within one working day.</p>
              <button onClick={() => setReferralOpen(true)} className={styles.primaryBtn}>
                Make a referral →
              </button>
            </div>

            <div className={styles.sideCard}>
              <h3 className={styles.sideCardTitle}>Statement of Purpose</h3>
              <p className={styles.sideCardText}>Request a copy of the Statement of Purpose for {home.name} by contacting us directly.</p>
              <Link href="/contact" className={styles.secondaryBtn}>
                Contact us →
              </Link>
            </div>

            {home.ofstedReportUrl && (
              <div className={styles.sideCard}>
                <h3 className={styles.sideCardTitle}>Ofsted report</h3>
                <p className={styles.sideCardText}>View the full Ofsted inspection report for {home.name}.</p>
                <button onClick={() => setOfstedOpen(true)} className={styles.secondaryBtn}>
                  View report →
                </button>
              </div>
            )}

            <div className={styles.ofstedBadgeCard}>
              <Image src="/ofsted.png" alt="Ofsted Good Provider" width={120} height={120} style={{ objectFit: "contain" }} />
            </div>

          </div>
        </div>
      <HomeMap area={home.location} />

      {home.gallery && home.gallery.length > 0 && (
        <div className={styles.gallerySection}>
          <div className={styles.gallerySectionHeader}>
            <h2 className={styles.sectionTitle}>Photo gallery</h2>
          </div>
          <HomeGallery images={home.gallery} homeName={home.name} />
        </div>
      )}
      </main>

      <ReferralModal open={referralOpen} onClose={() => setReferralOpen(false)} />
      {home.ofstedReportUrl && (
        <OfstedModal open={ofstedOpen} onClose={() => setOfstedOpen(false)} />
      )}
    </>
  );
}
