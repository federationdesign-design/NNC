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
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>About us</p>
          <h1 className={styles.heading}>People who care.<br />Homes that work.</h1>
          <p className={styles.sub}>Nurturing Nests Care is a small, specialist provider of children's residential homes in East Kent. We exist to give children with complex needs the one thing that changes everything — a stable, safe, consistent home with people who turn up for them every single day.</p>
        </div>
      </div>

      {/* ── OUR STORY ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionText}>
            <p className={styles.sectionEyebrow}>Our story</p>
            <h2 className={styles.sectionHeading}>Built around what Kent's children actually need</h2>
            <p>Nurturing Nests was founded in May 2025 by George Ball and Hannah Neeworth, two professionals with deep roots in children's residential care governance and therapeutic practice. They had both spent years working within the system and had seen the same problem play out repeatedly — children with complex emotional, behavioural and relational needs being placed far from their communities, in homes that weren't built for them.</p>
            <p>The solution they built is deliberately small and deliberately local. Two homes, side by side in Sellindge, East Kent. Staffed by a consistent team. Designed around the real referral patterns Kent's local authorities generate. Since opening we have received over 480 referrals from Kent County Council alone — which tells you everything about the scale of the need we're here to meet.</p>
            <p>We are not trying to grow fast. We are trying to get it right. Five homes in East Kent, each with high staffing ratios, consistent adults and routines designed around the children we support — that is the plan, and we are building it carefully.</p>
          </div>
          <div className={styles.sectionStat}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>480+</span>
              <span className={styles.statLabel}>Referrals received from Kent County Council since May 2025</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>2</span>
              <span className={styles.statLabel}>Ofsted registered homes, both rated Good</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Consistent, trained staff in every home</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH ── */}
      <section className={styles.sectionDark}>
        <div className={styles.sectionInner}>
          <p className={styles.sectionEyebrowLight}>Our approach</p>
          <h2 className={styles.sectionHeadingLight}>Structure is not a restriction.<br />It is a foundation.</h2>
          <div className={styles.approachGrid}>
            <div className={styles.approachCard}>
              <h3>Relational consistency</h3>
              <p>Children who have experienced trauma do not heal through programmes — they heal through people. We invest heavily in keeping the same adults in the same homes, building the kind of trust that takes time and showing up every single day.</p>
            </div>
            <div className={styles.approachCard}>
              <h3>Structure as care</h3>
              <p>Many of the children we support have never experienced a reliable routine. Knowing what happens next — when meals are, who is picking them up, what the rules are and that those rules will not change — is not a restriction. It is the foundation every child needs to begin to grow.</p>
            </div>
            <div className={styles.approachCard}>
              <h3>Therapeutic environment</h3>
              <p>Our model is informed by therapeutic relational practice. Staff are trained to understand behaviour as communication, to respond rather than react, and to build the kind of environment where children feel safe enough to let their guard down.</p>
            </div>
            <div className={styles.approachCard}>
              <h3>Child-led progress</h3>
              <p>We do not impose timelines. Every child grows at their own pace, on their own terms — but with complete, unwavering support from our team at every step. Our job is to hold the space and stay consistent while they find their way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE TEAM ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.sectionEyebrow}>The team</p>
          <h2 className={styles.sectionHeading}>Led by people with something to prove</h2>
          <p className={styles.sectionIntro}>Our senior team brings together extensive experience in children's residential care governance, therapeutic practice and operational leadership. They are not absent directors — they are in the homes, with the staff, working through the hard days alongside everyone else.</p>
          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamPhoto}>
                <Image src="/team/george-ball.jpg" alt="George Ball" fill sizes="200px" style={{ objectFit: "cover" }} />
              </div>
              <h3 className={styles.teamName}>George Ball</h3>
              <p className={styles.teamRole}>Co-founder &amp; Director</p>
              <p className={styles.teamBio}>Co-founder of Nurturing Nests with extensive experience in children's residential care governance and strategic development across Kent. George leads on operational oversight and growth strategy.</p>
              <a href="mailto:george.ball@nurturingnests.co.uk" className={styles.teamEmail}>george.ball@nurturingnests.co.uk</a>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamPhoto}>
                <Image src="/team/hannah-neeworth.jpg" alt="Hannah Neeworth" fill sizes="200px" style={{ objectFit: "cover" }} />
              </div>
              <h3 className={styles.teamName}>Hannah Neeworth</h3>
              <p className={styles.teamRole}>Co-founder &amp; Director</p>
              <p className={styles.teamBio}>Co-founder and Director, leading on quality assurance, regulatory compliance and the development of the Nurturing Nests model of care. Hannah ensures every home meets the highest standards of therapeutic practice.</p>
              <a href="mailto:hannah.neeworth@nurturingnests.co.uk" className={styles.teamEmail}>hannah.neeworth@nurturingnests.co.uk</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY ── */}
      <section className={styles.sectionBlue}>
        <div className={styles.sectionInner}>
          <p className={styles.sectionEyebrowLight}>Our community</p>
          <h2 className={styles.sectionHeadingLight}>A team that genuinely looks out for each other</h2>
          <div className={styles.communityGrid}>
            <div className={styles.communityText}>
              <p>We talk a lot about structure and consistency for the children in our homes. What we talk about less — but believe just as strongly — is that the same principles apply to the people who deliver that care every day.</p>
              <p>Residential support work is one of the most demanding jobs there is. You cannot expect a team to show up consistently for children unless that team itself feels valued, supported and genuinely part of something.</p>
              <p>We invest in our staff. We celebrate milestones. We get together outside of work. We disagree and work through it. We make decisions together. That is not a nice-to-have — it is how you build a team that lasts, and lasting teams are what children in residential care need most.</p>
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
        </div>
      </section>

      {/* ── DAY IN THE LIFE ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.sectionEyebrow}>Life at Nurturing Nests</p>
          <h2 className={styles.sectionHeading}>A day in the life of a Residential Support Worker</h2>
          <p className={styles.sectionIntro}>Wondering what it is actually like to work in one of our homes? [Name], one of our Residential Support Workers, shares what a typical day looks like — and why no two days are ever quite the same.</p>

          <div className={styles.dayInLife}>
            <div className={styles.dayEntry}>
              <span className={styles.dayTime}>07:30</span>
              <div className={styles.dayContent}>
                <h3>The handover</h3>
                <p>My shift starts with a handover from the night team. I find out how the night went — whether anyone had a difficult night, if there were any incidents, what mood the children woke up in. This is not just paperwork. It shapes how I approach the first hour of the day. If I know a child had a hard night, I know they might need more patience this morning and fewer demands before breakfast.</p>
              </div>
            </div>
            <div className={styles.dayEntry}>
              <span className={styles.dayTime}>08:00</span>
              <div className={styles.dayContent}>
                <h3>Morning routines</h3>
                <p>Getting children ready for school sounds simple. In practice, it takes skill, patience and a good sense of humour. Some mornings go smoothly. Others involve negotiating around a child who has decided they are not going in, managing anxiety that shows up as anger, and somehow keeping the atmosphere calm enough that everyone gets out of the door on time. I know these children well enough to know what works for each of them — and that knowledge only comes from being here consistently, day after day.</p>
              </div>
            </div>
            <div className={styles.dayEntry}>
              <span className={styles.dayTime}>09:30</span>
              <div className={styles.dayContent}>
                <h3>While the children are at school</h3>
                <p>Once the school run is done, there is still plenty to do. Housework, admin, care planning, liaising with social workers, preparing for the afternoon. I might also be involved in a review meeting for one of the children, or catching up with the senior team about how things are going. This is the part of the job that keeps the home running smoothly — and that means it matters just as much as the moments with the children themselves.</p>
              </div>
            </div>
            <div className={styles.dayEntry}>
              <span className={styles.dayTime}>15:30</span>
              <div className={styles.dayContent}>
                <h3>School pick-up and the afternoon</h3>
                <p>Afternoons vary enormously. Sometimes a child comes home settled and happy and we spend the evening doing something fun together — cooking, going to a club, watching a film. Other times they come home carrying the weight of a difficult day and need space, support and someone who is not going to react to whatever comes out first. That is the part of this job that you can never fully prepare for. But over time, you learn to read each child, to know what they need and to trust your own instincts.</p>
              </div>
            </div>
            <div className={styles.dayEntry}>
              <span className={styles.dayTime}>19:00</span>
              <div className={styles.dayContent}>
                <h3>Evening and wind-down</h3>
                <p>Evenings are about bringing the day to a close in a way that feels safe. Dinner together, time to talk about the day, a predictable bedtime routine. Children who have not experienced consistency find comfort in knowing what comes next. By the end of the evening, even a child who woke up refusing to go to school might come to say goodnight and mean it. Those moments make this job what it is.</p>
              </div>
            </div>

            <blockquote className={styles.dayQuote}>
              &ldquo;You go home tired some days. But you also go home knowing that what you did today mattered to a real child who needed you to show up — and you did. That is not something many jobs can offer you.&rdquo;
              <cite>— [Name], Residential Support Worker, Nurturing Nests</cite>
            </blockquote>
          </div>
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
