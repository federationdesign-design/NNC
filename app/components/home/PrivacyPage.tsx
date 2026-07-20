import styles from "./LegalPage.module.css";

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <p className={styles.eyebrow}>Legal</p>
        <h1 className={styles.heading}>Privacy Policy</h1>
        <p className={styles.sub}>Last updated: July 2026</p>
      </div>
      <div className={styles.content}>

        <section className={styles.section}>
          <h2>Who we are</h2>
          <p>Nurturing Nests Care Limited ("we", "our", "us") is a registered children's home provider operating in Kent. Our registered address is Office 5 Belgravia House, Grosvenor Street, Mold, Flintshire CH7 1EJ. Company number: 11223861.</p>
          <p>We are the data controller for the personal information we collect through this website.</p>
        </section>

        <section className={styles.section}>
          <h2>What information we collect</h2>
          <p>We collect personal information when you:</p>
          <ul>
            <li>Submit a referral form (name, job title, email, phone, local authority, notes)</li>
            <li>Apply for a job (name, email, phone, address, employment history, qualifications)</li>
            <li>Request a Statement of Purpose (name, email, organisation, role)</li>
            <li>Send us a message via the contact form (name, email, phone, message)</li>
          </ul>
          <p>We do not collect information about children through this website.</p>
        </section>

        <section className={styles.section}>
          <h2>How we use your information</h2>
          <ul>
            <li>To respond to referral enquiries and assess placement suitability</li>
            <li>To process job applications and contact candidates</li>
            <li>To send requested documents such as Statements of Purpose</li>
            <li>To respond to general enquiries</li>
          </ul>
          <p>We process your data on the basis of legitimate interests (referrals, enquiries) or consent (job applications).</p>
        </section>

        <section className={styles.section}>
          <h2>How long we keep your information</h2>
          <ul>
            <li>Referral enquiries: 12 months</li>
            <li>Job applications: 6 months if unsuccessful</li>
            <li>General enquiries: 12 months</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Sharing your information</h2>
          <p>We do not sell or share your personal information with third parties for marketing purposes. We use Resend to process and deliver emails. Your data may be stored on servers within the European Economic Area.</p>
        </section>

        <section className={styles.section}>
          <h2>Your rights</h2>
          <p>You have the right to access, correct or delete your personal information. To exercise any of these rights, contact us at <a href="mailto:admin@nurturingnests.co.uk">admin@nurturingnests.co.uk</a>.</p>
        </section>

        <section className={styles.section}>
          <h2>Contact</h2>
          <p>For any privacy-related questions, contact us at <a href="mailto:admin@nurturingnests.co.uk">admin@nurturingnests.co.uk</a>.</p>
        </section>

      </div>
    </main>
  );
}
