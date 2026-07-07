"use client";

import { useEffect, useRef, useState } from "react";
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  // Dynamically calculated section height: 100vh + however far the track needs to travel
  const [sectionHeight, setSectionHeight] = useState("140vh");

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const recalculate = () => {
      const maxTranslate = track.scrollWidth - track.clientWidth;
      // Only extend section height if the track actually needs to scroll
      if (maxTranslate > 10) {
        setSectionHeight(`calc(100vh + ${maxTranslate}px)`);
      } else {
        setSectionHeight("100vh");
      }
    };

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionH = section.offsetHeight;
      const pinnedDistance = sectionH - window.innerHeight;

      if (pinnedDistance <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / pinnedDistance, 0), 1);
      const maxTranslate = track.scrollWidth - track.clientWidth;

      if (maxTranslate > 0) {
        track.style.transform = `translateX(-${progress * maxTranslate}px)`;
      }
    };

    const onResize = () => {
      recalculate();
      onScroll();
    };

    const t1 = setTimeout(recalculate, 200);
    const t2 = setTimeout(recalculate, 800);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.pinSection}
      style={{ height: sectionHeight }}
    >
      <div className={styles.sticky}>
        <div className={styles.inner}>

          {/* Pinned left header */}
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

          {/* Track - moved via JS transform */}
          <div className={styles.trackViewport}>
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
      </div>
    </section>
  );
}
