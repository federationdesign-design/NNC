import Image from "next/image";
import styles from "./QuoteSection.module.css";

export default function QuoteSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left: large quote + body copy */}
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

        {/* Right: three stacked boxes */}
        <div className={styles.right}>

          {/* Box 1: George Ball quote */}
          <div className={styles.testimonialCard}>
            <blockquote className={styles.testimonialQuote}>
              &ldquo;We deliver what Kent needs now - and we are growing
              responsibly for what Kent will need next.&rdquo;
            </blockquote>
            <div className={styles.testimonialAuthor}>
              <div className={styles.testimonialAvatar}>
                <Image src="/team/george-ball.jpg" alt="George Ball"
                       fill sizes="56px" className={styles.testimonialAvatarImg} />
              </div>
              <div>
                <p className={styles.testimonialName}>George Ball</p>
                <p className={styles.testimonialRole}>Co-Director</p>
              </div>
            </div>
          </div>

          {/* Box 2: referral stats */}
          <div className={styles.infoCard}>
            <p className={styles.infoCardStat}>481</p>
            <p className={styles.infoCardLabel}>
              Referrals received from Kent County Council since opening in May 2025.
            </p>
          </div>

          {/* Box 3: Ofsted */}
          <div className={styles.ofstedInfoCard}>
            <Image src="/ofsted.png" alt="Ofsted Good Provider"
                   width={120} height={80}
                   style={{ objectFit: "contain", objectPosition: "left" }} />
            <p className={styles.ofstedInfoText}>
              Registered with Ofsted. Committed to outstanding outcomes for every child in our care.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
