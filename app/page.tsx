import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      {/* Hero placeholder - Phase 3 will replace this */}
      <section className={styles.heroPlaceholder}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroHeading}>
            A safe place to grow.
          </h1>
          <p className={styles.heroSub}>
            Specialist residential care for children and young people
            with complex needs, based in Kent.
          </p>
          <a href="/homes" className={styles.heroCta}>
            Our homes
          </a>
        </div>
      </section>
    </>
  );
}
