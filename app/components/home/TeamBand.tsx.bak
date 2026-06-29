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
  email?: string;
  linkedin?: string;
}

const TEAM: TeamMember[] = [
  {
    name: "George Ball",
    role: "Director",
    image: "/team/george-ball.jpg",
    slug: "george-ball",
    bio: "Co-founder of Nurturing Nests with extensive experience in children's residential care governance and strategic development.",
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
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
       xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
       xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M4 6.5V12M4 4.5v.01M7.5 12V9a1.5 1.5 0 013 0v3M7.5 9v3"
          stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

export default function TeamBand() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Pinned left header */}
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

        {/* Full-bleed scrolling cards */}
        <div className={styles.track}>
          {TEAM.map((member) => (
            <div key={member.slug} className={styles.card}>
              {/* Contact icons top */}
              <div className={styles.contactIcons}>
                {member.email && (
                  <a href={`mailto:${member.email}`}
                     className={styles.iconBtn}
                     title={`Email ${member.name}`}>
                    <EmailIcon />
                    <span>Email {member.name.split(" ")[0]}</span>
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={styles.iconBtn}
                     title="View LinkedIn profile">
                    <LinkedInIcon />
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>

              {/* Avatar */}
              <div className={styles.avatar}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="80px"
                  className={styles.avatarImg}
                />
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
