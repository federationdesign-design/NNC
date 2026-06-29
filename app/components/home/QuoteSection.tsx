import Image from "next/image";
import Link from "next/link";
import styles from "./QuoteSection.module.css";

export default function QuoteSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left: pull quote + body copy */}
        <div className={styles.left}>
          <blockquote className={styles.pullQuote}>
            &ldquo;We deliver what Kent needs now - and we are growing
            responsibly for what Kent will need next.&rdquo;
          </blockquote>
          <div className={styles.divider} />
          <div className={styles.body}>
            <p>
              Nurturing Nests is committed to building a small, specialist residential hub
              in East Kent. Since opening in May 2025 we have received over 480 referrals
              from Kent County Council, reflecting the urgent need for high-quality,
              locally-based placements for children with complex needs.
            </p>
            <p>
              Our growth is measured, needs-led and intentionally limited. We are not
              chasing volume - we are building quality. Five homes in East Kent, each
              operating at high staffing ratios, with consistent adults and structured
              routines designed around the children we support.
            </p>
          </div>
        </div>

        {/* Right: three stacked cards */}
        <div className={styles.right}>

          {/* Card 1: George Ball testimonial quote */}
          <div className={styles.testimonialCard}>
            <blockquote className={styles.testimonialQuote}>
              &ldquo;We deliver what Kent needs now - and we are growing
              responsibly for what Kent will need next.&rdquo;
            </blockquote>
            <div className={styles.testimonialAuthor}>
              <div className={styles.testimonialAvatar}>
                <Image src="/team/george-ball.jpg" alt="George Ball"
                       fill sizes="52px" className={styles.testimonialAvatarImg} />
              </div>
              <div>
                <p className={styles.testimonialName}>George Ball</p>
                <p className={styles.testimonialRole}>Co-Director</p>
              </div>
            </div>
          </div>

          {/* Card 2: Dark navy - Ofsted wordmark left, text + View Report right */}
          <div className={styles.ofstedCard}>
            <div className={styles.ofstedCardLeft}>
              <Image src="/ofsted-raw-no-frame.png" alt="Ofsted"
                     width={160} height={72}
                     style={{ objectFit: "contain", objectPosition: "left center" }} />
            </div>
            <div className={styles.ofstedCardRight}>
              <p className={styles.ofstedCardText}>
                Our model has been intentionally designed around the real referral
                patterns we receive, providing stability, structure and relational
                consistency for children with complex needs.
              </p>
              <Link href="/ofsted" className={styles.cardBtn}>
                View Report
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                     xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor"
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 3: Brand blue with girl background image */}
          <div className={styles.nncCard}>
            <Image src="/girlpointblue.jpg" alt="" fill
                   sizes="400px" className={styles.nncCardBg} />
            <div className={styles.nncCardOverlay} />
            <div className={styles.nncCardContent}>
              <Image src="/header-logo.svg" alt="Nurturing Nests"
                     width={100} height={56} className={styles.nncCardLogo} />
              <p className={styles.nncCardText}>
                Our model has been intentionally designed around the real referral
                patterns we receive providing stability, structure and relational
                consistency for children with complex emotional and neurodiverse needs.
              </p>
              <Link href="/contact" className={styles.cardBtnOutline}>
                Make a referral
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                     xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor"
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
