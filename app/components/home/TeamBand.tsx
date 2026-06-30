"use client";

import { useRef } from "react";
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
  linkedin?: string;
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

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
       xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M3.5 5.5V10.5M3.5 3.5v.5M6.5 10.5V8a1.5 1.5 0 013 0v2.5M6.5 7.5v3"
          stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

export default function TeamBand() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    isDown.current = true;
    trackRef.current.style.cursor = "grabbing";
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDown.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  };

  const onMouseUp = () => {
    isDown.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onWheel = (e: React.WheelEvent) => {
    if (!trackRef.current) return;
    // Forward vertical wheel/trackpad scroll as horizontal movement
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      trackRef.current.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Pinned left header - 50% wider */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>The people behind the homes</p>
          <h2 className={styles.heading}>
            Our senior team are widely experienced in children's residential care.
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

        {/* Scrolling cards */}
        <div
          ref={trackRef}
          className={styles.track}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onWheel={onWheel}
        >
          {TEAM.map((member) => (
            <div key={member.slug} className={styles.card}>
              {/* Avatar + name/role side by side */}
              <div className={styles.identity}>
                <div className={styles.avatar}>
                  <Image src={member.image} alt={member.name} fill
                         sizes="72px" className={styles.avatarImg} />
                </div>
                <div className={styles.identityText}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.role}>{member.role}</p>
                  {/* Contact icons below role */}
                  <div className={styles.contactIcons}>
                    {member.email && (
                      <a href={`mailto:${member.email}`} className={styles.iconBtn}
                         title={`Email ${member.name}`}>
                        <EmailIcon />
                        <span>Email {member.name.split(" ")[0]}</span>
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                         className={styles.iconBtn}>
                        <LinkedInIcon />
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
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
    </section>
  );
}
