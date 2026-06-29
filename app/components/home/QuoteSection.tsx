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

        {/* Right: testimonial card */}
        <div className={styles.right}>
          <div className={styles.testimonialCard}>
            <blockquote className={styles.testimonialQuote}>
              &ldquo;We deliver what Kent needs now - and we are growing
              responsibly for what Kent will need next.&rdquo;
            </blockquote>
            <div className={styles.testimonialAuthor}>
              <div className={styles.testimonialAvatar}>
                <Image
                  src="/team/george-ball.jpg"
                  alt="George Ball"
                  fill
                  sizes="64px"
                  className={styles.testimonialAvatarImg}
                />
              </div>
              <div>
                <p className={styles.testimonialName}>George Ball</p>
                <p className={styles.testimonialRole}>Co-Director</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
