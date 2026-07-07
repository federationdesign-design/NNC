import Image from "next/image";
import Link from "next/link";
import styles from "./OurHomesPage.module.css";

const HOMES = [
  {
    slug: "ivy-cottage",
    name: "Ivy Cottage",
    location: "East Kent",
    beds: 2,
    type: "Children's Home",
    status: "Open",
    ofstedRating: "Good",
    summary: "A warm, structured two-bed home supporting children with emotional, behavioural and relational needs in East Kent. Staffed 24/7 by a consistent team trained in therapeutic relational practice.",
    image: "/homes/ivy-cottage.jpg",
  },
  {
    slug: "holly-tree-cottage",
    name: "Holly Tree Cottage",
    location: "East Kent",
    beds: 1,
    type: "Solo Home",
    status: "Open",
    ofstedRating: "Good",
    summary: "Operating as a solo placement for higher-complexity children who benefit from a dedicated, low-arousal environment. Holly Tree Cottage provides intensive, consistent support with a single-child focus.",
    image: "/homes/holly-tree-cottage.jpg",
  },
  {
    slug: "deal",
    name: "Deal Home",
    location: "Deal, Kent",
    beds: 3,
    type: "Purpose-Built",
    status: "Proposed",
    ofstedRating: null,
    summary: "A proposed 3-bed purpose-built home at Wallers Field, Deal, designed for stabilisation and step-down support for young people. Subject to planning approval.",
    image: "/homes/deal.jpg",
  },
];

export default function OurHomesPage() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <p className={styles.eyebrow}>Our homes</p>
        <h1 className={styles.heading}>Specialist residential care in Kent</h1>
        <p className={styles.sub}>Small, structured homes providing therapeutic residential care for children with emotional, behavioural and relational needs. All homes are Ofsted registered and inspected.</p>
      </div>

      <div className={styles.list}>
        {HOMES.map((home) => (
          <article key={home.slug} className={styles.card}>
            <div className={styles.thumbCol}>
              <div className={styles.thumb}>
                <Image src={home.image} alt={home.name} fill sizes="220px" style={{ objectFit: "cover" }} />
              </div>
              <span className={`${styles.status} ${home.status === "Open" ? styles.statusOpen : styles.statusProposed}`}>
                {home.status}
              </span>
            </div>

            <div className={styles.body}>
              <h2 className={styles.title}>{home.name}</h2>
              <p className={styles.desc}>{home.summary}</p>
              <div className={styles.meta}>
                <span className={styles.metaItem}>📍 {home.location}</span>
                <span className={styles.metaItem}>🛏 {home.beds} bed{home.beds > 1 ? "s" : ""}</span>
                <span className={styles.metaItem}>🏠 {home.type}</span>
                {home.ofstedRating && (
                  <span className={styles.metaItem}>⭐ Ofsted: {home.ofstedRating}</span>
                )}
              </div>
            </div>

            <div className={styles.side}>
              {home.status === "Open" ? (
                <Link href={`/homes/${home.slug}`} className={styles.viewBtn}>
                  View home →
                </Link>
              ) : (
                <span className={styles.comingSoon}>Coming soon</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
