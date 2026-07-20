import styles from "./LegalPage.module.css";

export default function CookiesPage() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <p className={styles.eyebrow}>Legal</p>
        <h1 className={styles.heading}>Cookie Policy</h1>
        <p className={styles.sub}>Last updated: July 2026</p>
      </div>
      <div className={styles.content}>

        <section className={styles.section}>
          <h2>What are cookies</h2>
          <p>Cookies are small text files stored on your device when you visit a website. They are widely used to make websites work efficiently and to provide information to website owners.</p>
        </section>

        <section className={styles.section}>
          <h2>How we use cookies</h2>
          <p>This website uses only essential cookies necessary for the site to function. We do not use tracking, advertising or analytics cookies.</p>
          <table className={styles.table}>
            <thead>
              <tr><th>Cookie</th><th>Purpose</th><th>Duration</th></tr>
            </thead>
            <tbody>
              <tr><td>Session</td><td>Maintains your session as you navigate the site</td><td>Session</td></tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Third-party services</h2>
          <p>We use Mapbox to display maps on our home pages. Mapbox may set its own cookies. Please refer to <a href="https://www.mapbox.com/legal/privacy" target="_blank" rel="noopener noreferrer">Mapbox's privacy policy</a> for details.</p>
          <p>We use Vimeo to host videos. When you play a video, Vimeo may set cookies. Please refer to <a href="https://vimeo.com/privacy" target="_blank" rel="noopener noreferrer">Vimeo's privacy policy</a> for details.</p>
        </section>

        <section className={styles.section}>
          <h2>Managing cookies</h2>
          <p>You can control and delete cookies through your browser settings. Deleting cookies may affect the functionality of this website. For more information visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">aboutcookies.org</a>.</p>
        </section>

        <section className={styles.section}>
          <h2>Contact</h2>
          <p>If you have any questions about our use of cookies, contact us at <a href="mailto:admin@nurturingnests.co.uk">admin@nurturingnests.co.uk</a>.</p>
        </section>

      </div>
    </main>
  );
}
