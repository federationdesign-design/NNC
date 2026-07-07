"use client";

import { useState } from "react";
import JobApplicationModal from "./JobApplicationModal";
import styles from "./VacanciesPage.module.css";

const JOBS = [
  {
    slug: "bank-rsw",
    title: "Bank Children's Residential Support Worker",
    type: "Bank / Zero-hours",
    location: "Sellindge, Kent",
    pay: "£13.00 – £15.00 per hour",
    sleepIn: "£60 per sleep-in",
    summary: "Support our homes on a flexible, as-required basis covering sickness, annual leave, and periods of increased need. Work to the same professional standards as permanent staff, with full induction and ongoing training provided.",
  },
  {
    slug: "rsw",
    title: "Residential Support Worker",
    type: "Full-time",
    location: "Sellindge, Kent",
    pay: "£30,500 – £36,500 per year",
    sleepIn: "£60 per sleep-in · avg 5–9/month",
    summary: "Play a vital role in supporting children's daily wellbeing in a safe, nurturing environment. Build independence skills, act as a key worker, and develop professional relationships with children and their families.",
  },
  {
    slug: "senior-rsw",
    title: "Senior Residential Support Worker",
    type: "Full-time",
    location: "Sellindge, Kent",
    pay: "£36,640 per year",
    sleepIn: "£60 per sleep-in · avg 9/month",
    summary: "Lead day-to-day care operations, oversee safeguarding compliance, and mentor a team of support workers. A senior leadership role making a real difference to children's lives in a well-supported environment.",
  },
];

export default function VacanciesPage() {
  const [applyJob, setApplyJob] = useState<string | null>(null);

  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <p className={styles.eyebrow}>Work with us</p>
        <h1 className={styles.heading}>Current vacancies</h1>
        <p className={styles.sub}>Join a values-led team making a genuine difference to children in residential care. All roles include an enhanced DBS check covered by Nurturing Nests.</p>
      </div>

      <div className={styles.list}>
        {JOBS.map((job) => (
          <article key={job.slug} className={styles.card}>
            <div className={styles.body}>
              <h2 className={styles.title}>{job.title}</h2>
              <p className={styles.desc}>{job.summary}</p>
              <div className={styles.meta}>
                <span className={styles.metaItem}>📍 {job.location}</span>
                <span className={styles.metaItem}>💼 {job.type}</span>
                <span className={styles.metaItem}>💷 {job.pay}</span>
                <span className={styles.metaItem}>🌙 Sleep-ins: {job.sleepIn}</span>
              </div>
            </div>
            <div className={styles.side}>
              <button
                className={styles.applyBtn}
                onClick={() => setApplyJob(job.title)}
              >
                Apply now →
              </button>
            </div>
          </article>
        ))}
      </div>

      <JobApplicationModal
        open={applyJob !== null}
        onClose={() => setApplyJob(null)}
        jobTitle={applyJob ?? undefined}
      />
    </main>
  );
}
