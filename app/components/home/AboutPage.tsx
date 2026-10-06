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
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
            sizes="100vw"
          />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>About us</p>
          <h1 className={styles.heading}>Childhood should still feel like childhood.</h1>
          <p className={styles.sub}>Nurturing Nests provides residential care for children at Ivy Cottage and Holly Tree Cottage in Kent. We want children living with us to feel understood, build relationships they can trust and have opportunities to enjoy being children.</p>
        </div>
      </div>

      {/* ── QUOTE INTRO + 3 QUOTES ── */}
      <section className={styles.section}>
        <p className={styles.quoteIntro}>Our homes are designed for small numbers of children. This gives us the space and opportunity to get to know them as individuals, including what they enjoy, what worries them and what helps when things become difficult.</p>
        <div className={styles.quoteGrid}>
          <div className={styles.quoteCard}>
            <p className={styles.quoteText}>&ldquo;There are clear efforts to ensure that her voice is heard and that she is supported to express her views and feelings.&rdquo;</p>
            <p className={styles.quoteAttribution}>Social Worker</p>
          </div>
          <div className={styles.quoteCard}>
            <p className={styles.quoteText}>&ldquo;The staff create a nurturing environment in which children can progress. They keep children at the forefront of their practice and continue to build strong, supportive relationships with them.&rdquo;</p>
            <p className={styles.quoteAttribution}>Ofsted Inspector</p>
          </div>
          <div className={styles.quoteCard}>
            <p className={styles.quoteText}>&ldquo;She is loved and thriving. The staff are approachable, kind and considerate and I feel valued and listened to as a parent.&rdquo;</p>
            <p className={styles.quoteAttribution}>Parent</p>
          </div>
        </div>
      </section>

      {/* ── THE TEAM ── */}
      <section className={styles.sectionDark}>
        <div className={styles.teamHeader}>
          <span className={styles.sectionEyebrowLight}>The team</span>
          <h2 className={styles.sectionHeadingLight}>Led by people with something to prove</h2>
          <p className={styles.sectionIntroLight}>Our senior team brings together extensive experience in children's residential care governance, therapeutic practice and operational leadership. They are not absent directors — they are in the homes, with the staff, working through the hard days alongside everyone else.</p>
        </div>
        <div className={styles.teamGrid}>
          <div className={styles.teamCard}>
            <div className={styles.teamPhoto}>
              <Image src="/team/george-ball.jpg" alt="George Ball" fill sizes="120px" style={{ objectFit: "cover" }} />
            </div>
            <h3 className={styles.teamName}>George Ball</h3>
            <p className={styles.teamRole}>Co-founder &amp; Director</p>
            <p className={styles.teamBio}>Co-founder of Nurturing Nests with extensive experience in children's residential care governance and strategic development across Kent. George leads on operational oversight and growth strategy.</p>
            <a href="mailto:george.ball@nurturingnests.co.uk" className={styles.teamEmail}>george.ball@nurturingnests.co.uk</a>
          </div>
          <div className={styles.teamCard}>
            <div className={styles.teamPhoto}>
              <Image src="/team/hannah-neeworth.jpg" alt="Hannah Neeworth" fill sizes="120px" style={{ objectFit: "cover" }} />
            </div>
            <h3 className={styles.teamName}>Hannah Neeworth</h3>
            <p className={styles.teamRole}>Co-founder &amp; Director</p>
            <p className={styles.teamBio}>Co-founder and Director, leading on quality assurance, regulatory compliance and the development of the Nurturing Nests model of care. Hannah ensures every home meets the highest standards of therapeutic practice.</p>
            <a href="mailto:hannah.neeworth@nurturingnests.co.uk" className={styles.teamEmail}>hannah.neeworth@nurturingnests.co.uk</a>
          </div>
        </div>
      </section>

      {/* ── GETTING TO KNOW EACH CHILD ── */}
      <section className={styles.section}>
        <span className={styles.sectionEyebrow}>Our approach</span>
        <h2 className={styles.sectionHeading}>Getting to know each child</h2>
        <div className={styles.approachLayout}>
          <div className={styles.approachText}>
            <p>Our homes are designed for small numbers of children. This gives us the space and opportunity to get to know them as individuals, including what they enjoy, what worries them and what helps when things become difficult.</p>
            <p>We work to understand the experiences behind a child's behaviour and adapt our care to their needs. Building trust takes time. It depends on adults listening, following through and responding consistently, whichever member of staff is on shift.</p>
            <p>We want children to feel that their views count and that the adults around them believe in what they can achieve.</p>
          </div>
          <div className={styles.approachGrid}>
            <div className={styles.approachCard}>
              <h3>Relational consistency</h3>
              <p>Children who have experienced trauma do not heal through programmes — they heal through people. We invest heavily in keeping the same adults in the same homes.</p>
            </div>
            <div className={styles.approachCard}>
              <h3>Structure as care</h3>
              <p>Knowing what happens next is not a restriction. It is the foundation every child needs to begin to grow.</p>
            </div>
            <div className={styles.approachCard}>
              <h3>Therapeutic environment</h3>
              <p>Staff are trained to understand behaviour as communication, to respond rather than react, and to build environments where children feel safe.</p>
            </div>
            <div className={styles.approachCard}>
              <h3>Child-led progress</h3>
              <p>Every child grows at their own pace, on their own terms — but with complete, unwavering support from our team at every step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── AN ORGANISATION THAT STAYS INVOLVED ── */}
      <section className={styles.sectionBlue}>
        <span className={styles.sectionEyebrowLight}>Our community</span>
        <h2 className={styles.sectionHeadingLight}>An organisation that stays involved</h2>
        <div className={styles.communityLayout}>
          <div className={styles.communityText}>
            <p>We are a small organisation, and our directors remain closely involved in the homes. They know the children and staff, spend time on site and meet weekly with the senior leadership team.</p>
            <p>We expect everyone working here to understand the importance of their role in a child's life. That means setting clear expectations, supporting staff through supervision and team discussions, and making sure concerns can be raised and acted on.</p>
            <p>Our responsibility includes listening to the professionals and families involved in each child's care. Their observations help us understand what is working and where we need to improve.</p>
            <p>We are ambitious for the children who live with us and committed to learning how we can support them better.</p>
          </div>
          <div className={styles.communityPhoto}>
            <Image
              src="/team/team-photo.jpg"
              alt="The Nurturing Nests team"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="(min-width: 900px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* ── DAY IN THE LIFE ── */}
      <section className={styles.section}>
        <div className={styles.dayHeader}>
          <span className={styles.sectionEyebrow}>Life at Nurturing Nests</span>
          <h2 className={styles.sectionHeading}>A day in the life of a Residential Support Worker</h2>
          <p className={styles.dayIntro}>Wondering what it is actually like to work in one of our homes? [Name], one of our Residential Support Workers, shares what a typical day looks like — and why no two days are ever quite the same.</p>
        </div>
        <div className={styles.dayInLife}>
          <div className={styles.dayEntry}>
            <span className={styles.dayTime}>07:30</span>
            <div className={styles.dayContent}>
              <h3>The handover</h3>
              <p>My shift starts with a handover from the night team. I find out how the night went — whether anyone had a difficult night, if there were any incidents, what mood the children woke up in. This is not just paperwork. It shapes how I approach the first hour of the day.</p>
            </div>
          </div>
          <div className={styles.dayEntry}>
            <span className={styles.dayTime}>08:00</span>
            <div className={styles.dayContent}>
              <h3>Morning routines</h3>
              <p>Getting children ready for school sounds simple. In practice, it takes skill, patience and a good sense of humour. I know these children well enough to know what works for each of them — and that knowledge only comes from being here consistently, day after day.</p>
            </div>
          </div>
          <div className={styles.dayEntry}>
            <span className={styles.dayTime}>09:30</span>
            <div className={styles.dayContent}>
              <h3>While the children are at school</h3>
              <p>Once the school run is done, there is still plenty to do. Housework, admin, care planning, liaising with social workers, preparing for the afternoon. This is the part of the job that keeps the home running smoothly.</p>
            </div>
          </div>
          <div className={styles.dayEntry}>
            <span className={styles.dayTime}>15:30</span>
            <div className={styles.dayContent}>
              <h3>School pick-up and the afternoon</h3>
              <p>Afternoons vary enormously. Sometimes a child comes home settled and happy. Other times they come home carrying the weight of a difficult day and need space, support and someone who is not going to react to whatever comes out first. Over time, you learn to read each child.</p>
            </div>
          </div>
          <div className={styles.dayEntry}>
            <span className={styles.dayTime}>19:00</span>
            <div className={styles.dayContent}>
              <h3>Evening and wind-down</h3>
              <p>Evenings are about bringing the day to a close in a way that feels safe. Dinner together, time to talk about the day, a predictable bedtime routine. By the end of the evening, even a child who woke up refusing to go to school might come to say goodnight and mean it.</p>
            </div>
          </div>
          <blockquote className={styles.dayQuote}>
            &ldquo;You go home tired some days. But you also go home knowing that what you did today mattered to a real child who needed you to show up — and you did. That is not something many jobs can offer you.&rdquo;
            <cite>— [Name], Residential Support Worker, Nurturing Nests</cite>
          </blockquote>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaHeading}>Join the team</h2>
          <p className={styles.ctaSub}>We are always looking for people who want to make a genuine difference. If that sounds like you, we would love to hear from you.</p>
          <div className={styles.ctaButtons}>
            <Link href="/vacancies" className={styles.ctaBtnPrimary}>View current vacancies →</Link>
            <Link href="/contact" className={styles.ctaBtnSecondary}>Get in touch</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
