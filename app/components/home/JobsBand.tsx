"use client";

import { useRef } from "react";
import styles from "./JobsBand.module.css";

const jobs = [
  {
    title: "Bank Children's Residential Support Worker",
    type: "Bank / Zero-hours",
    location: "Sellindge, Kent",
    pay: "£13.00 – £15.00 per hour",
    sleepIn: "£60 per sleep-in",
    tag: "Flexible",
    summary:
      "Support our homes on a flexible, as-required basis covering sickness, annual leave, and periods of increased need. Work to the same professional standards as permanent staff.",
    url: "https://www.indeed.co.uk",
  },
  {
    title: "Residential Support Worker",
    type: "Full-time",
    location: "Sellindge, Kent",
    pay: "£30,500 – £36,500 per year",
    sleepIn: "£60 per sleep-in · avg 5–9/month",
    tag: "Full-time",
    summary:
      "Play a vital role in supporting children's daily wellbeing in a safe, nurturing environment. Build independence skills, act as a key worker, and develop professional relationships.",
    url: "https://www.indeed.co.uk",
  },
  {
    title: "Senior Residential Support Worker",
    type: "Full-time",
    location: "Sellindge, Kent",
    pay: "£36,640 per year",
    sleepIn: "£60 per sleep-in · avg 9/month",
    tag: "Senior",
    summary:
      "Lead day-to-day care operations, oversee safeguarding compliance, and mentor a team of support workers. A leadership role making a real difference to children's lives.",
    url: "https://www.indeed.co.uk",
  },
];

export default function JobsBand() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Work with us</p>
            <h2 className={styles.heading}>Current vacancies</h2>
          </div>
          <p className={styles.sub}>
            Join a values-led team making a genuine difference to children in
            residential care. All roles are subject to an enhanced DBS check,
            covered by Nurturing Nests.
          </p>
        </div>

        <div className={styles.trackWrapper}>
          <div className={styles.track} ref={trackRef}>
            {jobs.map((job, i) => (
              <article key={i} className={styles.card}>
                <span className={styles.tag}>{job.tag}</span>
                <h3 className={styles.cardTitle}>{job.title}</h3>
                <ul className={styles.meta}>
                  <li>
                    <span className={styles.metaLabel}>Location</span>
                    {job.location}
                  </li>
                  <li>
                    <span className={styles.metaLabel}>Contract</span>
                    {job.type}
                  </li>
                  <li>
                    <span className={styles.metaLabel}>Pay</span>
                    {job.pay}
                  </li>
                  <li>
                    <span className={styles.metaLabel}>Sleep-ins</span>
                    {job.sleepIn}
                  </li>
                </ul>
                <p className={styles.summary}>{job.summary}</p>
                
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.applyBtn}
                >
                  Apply now
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
