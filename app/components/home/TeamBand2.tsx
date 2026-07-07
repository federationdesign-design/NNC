"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./TeamBand2.module.css";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  slug: string;
  bio: string;
  email?: string;
}

const TEAM: TeamMember[] = [
  { name: "George Ball", role: "Director", image: "/team/george-ball.jpg", slug: "george-ball", bio: "Co-founder of Nurturing Nests with extensive experience in children's residential care governance and strategic development across Kent.", email: "info@nurturingnests.co.uk" },
  { name: "Hannah Neeworth", role: "Director", image: "/team/hannah-neeworth.jpg", slug: "hannah-neeworth", bio: "Co-founder and Director, leading on quality assurance, regulatory compliance and the development of the Nurturing Nests model of care.", email: "info@nurturingnests.co.uk" },
  { name: "Jahvanne Wilson", role: "Responsible Individual", image: "/team/jahvanne-wilson.jpg", slug: "jahvanne-wilson", bio: "Responsible Individual with a deep background in therapeutic and relational practice, overseeing the quality and welfare of all homes.", email: "info@nurturingnests.co.uk" },
  { name: "James Brennard", role: "Deputy Manager", image: "/team/james-brennard.jpg", slug: "james-brennard", bio: "Deputy Manager supporting the registered manager across both homes, ensuring strong routines, staff consistency and child wellbeing.", email: "info@nurturingnests.co.uk" },
];

const JOBS = [
  { title: "Bank Children's Residential Support Worker", type: "Bank / Zero-hours", location: "Sellindge, Kent", pay: "£13.00 – £15.00 per hour", sleepIn: "£60 per sleep-in", tag: "Flexible", summary: "Support our homes on a flexible, as-required basis covering sickness, annual leave, and periods of increased need.", url: "https://www.indeed.co.uk" },
  { title: "Residential Support Worker", type: "Full-time", location: "Sellindge, Kent", pay: "£30,500 – £36,500 per year", sleepIn: "£60 per sleep-in · avg 5–9/month", tag: "Full-time", summary: "Play a vital role in supporting children's daily wellbeing in a safe, nurturing environment. Build independence skills and act as a key worker.", url: "https://www.indeed.co.uk" },
  { title: "Senior Residential Support Worker", type: "Full-time", location: "Sellindge, Kent", pay: "£36,640 per year", sleepIn: "£60 per sleep-in · avg 9/month", tag: "Senior", summary: "Lead day-to-day care operations, oversee safeguarding compliance, and mentor a team of support workers.", url: "https://www.indeed.co.uk" },
];

export default function TeamBand2() {
  const stageRef = useRef<HTMLElement>(null);
  const pinRef   = useRef<HTMLDivElement>(null);
  const bandRef  = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const pin   = pinRef.current;
    const band  = bandRef.current;
    const track = trackRef.current;
    if (!stage || !pin || !band || !track) return;

    const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let distance = 0;
    const active = () => window.matchMedia("(min-width: 768px)").matches && motionOk;

    function update() {
      if (!stage || !track || !active() || distance === 0) return;
      const rect = stage.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / distance, 0), 1);
      track.style.transform = `translate3d(${-distance * progress}px, 0, 0)`;
    }

    function measure() {
      if (!stage || !pin || !band || !track) return;
      if (!active()) {
        stage.style.height = "";
        track.style.transform = "";
        distance = 0;
        return;
      }
      distance = Math.max(0, track.scrollWidth - band.clientWidth);
      stage.style.height = `${distance + pin.offsetHeight}px`;
      update();
    }

    measure();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section ref={stageRef} className={styles.stage}>
      <div ref={pinRef} className={styles.pin}>

        {/* Team band - scrolls horizontally */}
        <div ref={bandRef} className={styles.band}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>The people behind the homes</p>
            <h2 className={styles.title}>Our senior team are widely experienced in children&apos;s residential care.</h2>
            <Link href="/team" className={styles.arrowCta} aria-label="Meet the team">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22" cy="22" r="21" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M15 22h14M22 15l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          <div ref={trackRef} className={styles.track}>
            {TEAM.map((member) => (
              <article key={member.slug} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.avatar}>
                    <Image src={member.image} alt={member.name} fill sizes="64px" style={{ objectFit: "cover" }} />
                  </div>
                  {member.email && (
                    <a href={`mailto:${member.email}`} className={styles.emailLink}>
                      Email {member.name.split(" ")[0]}
                    </a>
                  )}
                </div>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.bio}>{member.bio}</p>

              </article>
            ))}
          </div>
        </div>

        {/* Peek panel - jobs, fills bottom of pin */}
        <div className={styles.peek}>
          <div className={styles.peekHeader}>
            <div>
              <p className={styles.peekEyebrow}>Work with us</p>
              <h3 className={styles.peekTitle}>Current vacancies</h3>
            </div>
            <p className={styles.peekSub}>Join a values-led team making a genuine difference to children in residential care.</p>
          </div>
          <div className={styles.peekJobs}>
            {JOBS.map((job, i) => (
              <div key={i} className={styles.peekJob}>
                <span className={styles.peekTag}>{job.tag}</span>
                <h4 className={styles.peekJobTitle}>{job.title}</h4>
                <ul className={styles.peekMeta}>
                  <li><span className={styles.peekMetaLabel}>Location</span>{job.location}</li>
                  <li><span className={styles.peekMetaLabel}>Contract</span>{job.type}</li>
                  <li><span className={styles.peekMetaLabel}>Pay</span>{job.pay}</li>
                  <li><span className={styles.peekMetaLabel}>Sleep-ins</span>{job.sleepIn}</li>
                </ul>
                <p className={styles.peekJobSummary}>{job.summary}</p>
                <a href={job.url} target="_blank" rel="noopener noreferrer" className={styles.peekApply}>Apply now &rarr;</a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
