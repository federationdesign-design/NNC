import Image from "next/image";
import Link from "next/link";
import styles from "./TeamBand.module.css";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  slug: string;
}

const TEAM: TeamMember[] = [
  {
    name: "George Ball",
    role: "Director",
    image: "/team/george-ball.jpg",
    slug: "george-ball",
  },
  {
    name: "Hannah Neeworth",
    role: "Director",
    image: "/team/hannah-neeworth.jpg",
    slug: "hannah-neeworth",
  },
  {
    name: "Jahvanne Wilson",
    role: "Responsible Individual",
    image: "/team/jahvanne-wilson.jpg",
    slug: "jahvanne-wilson",
  },
  {
    name: "Christopher Campbell",
    role: "Registered Manager",
    image: "/team/christopher-campbell.jpg",
    slug: "christopher-campbell",
  },
  {
    name: "James Brennard",
    role: "Deputy Manager",
    image: "/team/james-brennard.jpg",
    slug: "james-brennard",
  },
];

export default function TeamBand() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.header}>
          <div className={styles.headerText}>
            <p className={styles.eyebrow}>The people behind the homes</p>
            <h2 className={styles.heading}>
              Our senior team are widely experienced in children's residential care.
            </h2>
          </div>
          <Link href="/team" className={styles.headerCta}>
            Meet the team
          </Link>
        </div>

        <div className={styles.track}>
          {TEAM.map((member) => (
            <Link key={member.slug} href={`/team/${member.slug}`}
                  className={styles.card}>
              <div className={styles.avatar}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="160px"
                  className={styles.avatarImg}
                />
              </div>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
