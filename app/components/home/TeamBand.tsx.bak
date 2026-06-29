"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./TeamBand.module.css";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  slug: string;
  bio: string;
}

const TEAM: TeamMember[] = [
  {
    name: "George Ball",
    role: "Director",
    image: "/team/george-ball.jpg",
    slug: "george-ball",
    bio: "Co-founder of Nurturing Nests with extensive experience in children's residential care governance and strategic development.",
  },
  {
    name: "Hannah Neeworth",
    role: "Director",
    image: "/team/hannah-neeworth.jpg",
    slug: "hannah-neeworth",
    bio: "Co-founder and Director, leading on quality assurance, regulatory compliance and the development of the Nurturing Nests model of care.",
  },
  {
    name: "Jahvanne Wilson",
    role: "Responsible Individual",
    image: "/team/jahvanne-wilson.jpg",
    slug: "jahvanne-wilson",
    bio: "Responsible Individual with a deep background in therapeutic and relational practice, overseeing the quality and welfare of all homes.",
  },
  {
    name: "Christopher Campbell",
    role: "Registered Manager",
    image: "/team/christopher-campbell.jpg",
    slug: "christopher-campbell",
    bio: "Registered Manager bringing hands-on leadership to daily operations, safeguarding and the delivery of consistent, high-quality care.",
  },
  {
    name: "James Brennard",
    role: "Deputy Manager",
    image: "/team/james-brennard.jpg",
    slug: "james-brennard",
    bio: "Deputy Manager supporting the registered manager across both homes, ensuring strong routines, staff consistency and child wellbeing.",
  },
];

export default function TeamBand() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Pinned left header - matches ANT layout */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>The people behind the homes</p>
          <h2 className={styles.heading}>
            Our senior team are widely experienced in children's residential care.
          </h2>
          <Link href="/team" className={styles.arrowCta} aria-label="Meet the team">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                 xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M14 20h12M20 14l6 6-6 6" stroke="currentColor"
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Horizontally scrolling cards */}
        <div className={styles.track}>
          {TEAM.map((member, i) => (
            <div key={member.slug} className={styles.card}
                 style={i > 0 ? { borderLeft: "1px solid var(--color-line)" } : {}}>
              <div className={styles.cardTop}>
                <div className={styles.avatar}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="72px"
                    className={styles.avatarImg}
                  />
                </div>
              </div>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
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
