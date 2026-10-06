import Image from "next/image";
import Link from "next/link";
import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <main className={styles.page}>

      {/* ── HERO ── */}
      <div className={styles.hero}>
        <div className={styles.heroImg}>
          <Image
            src="/team/team-photo.jpg"
            alt="The Nurturing Nests team"
            fill
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
            priority
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>About us</p>
          <h1 className={styles.heading}>The care children deserve starts with the people around them.</h1>
          <p className={styles.sub}>At Nurturing Nests, we care about how our children feel and how our team feels. We set high standards, support each other and make time to listen. We want good people to build their future with us, so children can build trust with adults they know.</p>
        </div>
      </div>

      {/* ── QUOTES ── */}
      <section className={styles.section}>
        <p className={styles.quoteIntro}>What people say about our homes.</p>
        <div className={styles.quoteGrid}>
          <div className={styles.quoteCard}>
            <p className={styles.quoteText}>&ldquo;The staff create a nurturing environment in which children can progress. They keep children at the forefront of their practice and continue to build strong, supportive relationships with them.&rdquo;</p>
            <p className={styles.quoteAttribution}>Ofsted Inspector</p>
          </div>
          <div className={styles.quoteCard}>
            <p className={styles.quoteText}>&ldquo;Staff appear dedicated, child-centred, and responsive to the individual needs of my young person.&rdquo;</p>
            <p className={styles.quoteAttribution}>Social Worker, Kent County Council. June 2026.</p>
          </div>
          <div className={styles.quoteCard}>
            <p className={styles.quoteText}>&ldquo;The home continues to go above and beyond.&rdquo;</p>
            <p className={styles.quoteAttribution}>Independent Regulation 44 Visitor, Ivy Cottage. June 2026.</p>
          </div>
          <div className={styles.quoteCard}>
            <p className={styles.quoteText}>&ldquo;I love it here.&rdquo;</p>
            <p className={styles.quoteAttribution}>A child living at Holly Tree Cottage. June 2026. <em>(Pending approval)</em></p>
          </div>
        </div>
      </section>

      {/* ── THE TEAM ── */}
      <section className={styles.sectionDark}>
        <div className={styles.teamHeader}>
          <span className={styles.sectionEyebrowLight}>The team</span>
          <h2 className={styles.sectionHeadingLight}>The people behind Nurturing Nests</h2>
          <p className={styles.sectionIntroLight}>We&rsquo;re a small organisation, and our directors remain closely involved in the homes. They know the children and staff, spend time on site and work with the management team to support the people providing care every day.</p>
        </div>
        <div className={styles.teamGrid}>
          <div className={styles.teamCard}>
            <div className={styles.teamPhoto}>
              <Image src="/team/george-ball.jpg" alt="George Ball" fill sizes="120px" style={{ objectFit: "cover" }} />
            </div>
            <h3 className={styles.teamName}>George Ball</h3>
            <p className={styles.teamRole}>Co-founder &amp; Director</p>
            <p className={styles.teamBio}>Bio to follow.</p>
            <a href="mailto:george.ball@nurturingnests.co.uk" className={styles.teamEmail}>george.ball@nurturingnests.co.uk</a>
          </div>
          <div className={styles.teamCard}>
            <div className={styles.teamPhoto}>
              <Image src="/team/hannah-neeworth.jpg" alt="Hannah Neeworth" fill sizes="120px" style={{ objectFit: "cover" }} />
            </div>
            <h3 className={styles.teamName}>Hannah Neeworth</h3>
            <p className={styles.teamRole}>Co-founder &amp; Director</p>
            <p className={styles.teamBio}>Bio to follow.</p>
            <a href="mailto:hannah.neeworth@nurturingnests.co.uk" className={styles.teamEmail}>hannah.neeworth@nurturingnests.co.uk</a>
          </div>
        </div>
      </section>

      {/* ── GETTING TO KNOW EACH CHILD ── */}
      <section className={styles.section}>
        <span className={styles.sectionEyebrow}>Our approach</span>
        <h2 className={styles.sectionHeading}>Getting to know each child</h2>
        <div className={styles.approachText}>
          <p>Our homes are designed for small numbers of children. This gives us the space and opportunity to get to know them as individuals, including what they enjoy, what worries them and what helps when things become difficult.</p>
          <p>We work to understand the experiences behind a child&rsquo;s behaviour and adapt our care to their needs. Building trust takes time. It depends on adults listening, following through and responding consistently, whichever member of staff is on shift.</p>
          <p>We want children to feel that their views count and that the adults around them believe in what they can achieve.</p>
        </div>
      </section>

      {/* ── TEAM CULTURE ── */}
      <section className={styles.sectionBlue}>
        <span className={styles.sectionEyebrowLight}>Our community</span>
        <h2 className={styles.sectionHeadingLight}>A team that feels valued. Relationships that have time to grow.</h2>
        <div className={styles.communityLayout}>
          <div className={styles.communityText}>
            <p>We want people to feel supported, appreciated and able to build their future with us. We&rsquo;re a small team, and listening to each other matters. As we grow, we&rsquo;re planning more opportunities to learn together, celebrate achievements and spend time together beyond the shift.</p>
            <p>Our aim is to keep good people with us, so children can build lasting relationships with adults they trust.</p>
          </div>
          <div className={styles.communityPhoto}>
            <Image
              src="/team/team-photo.jpg"
              alt="The Nurturing Nests team"
              fill
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
              sizes="(min-width: 900px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

    </main>
  );
}
