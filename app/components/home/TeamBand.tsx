"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./TeamBand.module.css";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  slug: string;
  bio: string;
  email?: string;
}

const TEAM: TeamMember[] = [
  {
    name: "George Ball",
    role: "Director",
    image: "/team/george-ball.jpg",
    slug: "george-ball",
    bio: "Co-founder of Nurturing Nests with extensive experience in children's residential care governance and strategic development across Kent.",
    email: "info@nurturingnests.co.uk",
  },
  {
    name: "Hannah Neeworth",
    role: "Director",
    image: "/team/hannah-neeworth.jpg",
    slug: "hannah-neeworth",
    bio: "Co-founder and Director, leading on quality assurance, regulatory compliance and the development of the Nurturing Nests model of care.",
    email: "info@nurturingnests.co.uk",
  },
  {
    name: "Jahvanne Wilson",
    role: "Responsible Individual",
    image: "/team/jahvanne-wilson.jpg",
    slug: "jahvanne-wilson",
    bio: "Responsible Individual with a deep background in therapeutic and relational practice, overseeing the quality and welfare of all homes.",
    email: "info@nurturingnests.co.uk",
  },
  {
    name: "Christopher Campbell",
    role: "Registered Manager",
    image: "/team/christopher-campbell.jpg",
    slug: "christopher-campbell",
    bio: "Registered Manager bringing hands-on leadership to daily operations, safeguarding and the delivery of consistent, high-quality care.",
    email: "chris.campbell@nurturingnests.co.uk",
  },
  {
    name: "James Brennard",
    role: "Deputy Manager",
    image: "/team/james-brennard.jpg",
    slug: "james-brennard",
    bio: "Deputy Manager supporting the registered manager across both homes, ensuring strong routines, staff consistency and child wellbeing.",
    email: "info@nurturingnests.co.uk",
  },
];

const EmailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
       xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="1" y="2.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M1 4.5l6 4 6-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

export default function TeamBand() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!section || !pin || !track) return;

    const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let distance = 0;

    const active = () =>
      window.matchMedia("(min-width: 900px)").matches && motionOk;

    function update() {
      if (!section || !track || !active() || distance === 0) return;
      const rect = section.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / distance, 0), 1);
      track.style.transform = `translate3d(${-distance * progress}px, 0, 0)`;
    }

    function measure() {
      if (!section || !pin || !track) return;
      if (!active()) {
        section.style.height = "";
        track.style.transform = "";
        distance = 0;
        return;
      }
      // Exact same formula as ANT HomeStage — distance + pinned div height
      distance = Math.max(0, track.scrollWidth - pin.clientWidth);
      section.style.height = `${distance + pin.offsetHeight}px`;
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
    <section ref={sectionRef} className={styles.pinSection}>
      <div ref={pinRef} className={styles.sticky}>
        <div className={styles.inner}>

          <div className={styles.header}>
            <p className={styles.eyebrow}>The people behind the homes</p>
            <h2 className={styles.heading}>
              Our senior team are widely experienced in children&apos;s residential care.
            </h2>
            <Link href="/team" className={styles.arrowCta} aria-label="Meet the team">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <circle cx="22" cy="22" r="21" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M15 22h14M22 15l7 7-7 7" stroke="currentColor"
                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <div ref={trackRef} className={styles.track}>
            {TEAM.map((member) => (
              <div key={member.slug} className={styles.card}>
                <div className={styles.identity}>
                  <div className={styles.avatar}>
                    <Image src={member.image} alt={member.name} fill
                           sizes="64px" className={styles.avatarImg} />
                  </div>
                  <div className={styles.identityText}>
                    <h3 className={styles.name}>{member.name}</h3>
                    <p className={styles.role}>{member.role}</p>
                    {member.email && (
                      <a href={`mailto:${member.email}`} className={styles.iconBtn}>
                        <EmailIcon />
                        <span>Email {member.name.split(" ")[0]}</span>
                      </a>
                    )}
                  </div>
                </div>
                <p className={styles.bio}>{member.bio}</p>
                <Link href={`/team/${member.slug}`} className={styles.viewBtn}>
                  View profile &rarr;
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
