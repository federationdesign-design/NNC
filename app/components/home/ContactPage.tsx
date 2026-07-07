"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ContactPage.module.css";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <p className={styles.eyebrow}>Get in touch</p>
        <h1 className={styles.heading}>Contact Nurturing Nests</h1>
        <p className={styles.sub}>Whether you are a local authority looking to make a referral, a landlord interested in a commercial lease, or a professional wanting to know more about our homes, we would love to hear from you.</p>
      </div>

      <div className={styles.container}>
        {/* Left — contact details */}
        <div className={styles.details}>
          <div className={styles.detailBlock}>
            <h2 className={styles.detailTitle}>Call us</h2>
            <a href="tel:07714310464" className={styles.detailLink}>07714 310 464</a>
            <p className={styles.detailNote}>Monday to Friday, 9am – 5pm</p>
          </div>

          <div className={styles.detailBlock}>
            <h2 className={styles.detailTitle}>Email us</h2>
            <a href="mailto:info@nurturingnests.co.uk" className={styles.detailLink}>info@nurturingnests.co.uk</a>
          </div>

          <div className={styles.detailBlock}>
            <h2 className={styles.detailTitle}>Our homes</h2>
            <p className={styles.detailText}>Sellindge, Kent</p>
            <p className={styles.detailNote}>Registered provider address available on request</p>
          </div>

          <div className={styles.detailBlock}>
            <h2 className={styles.detailTitle}>Ofsted registration</h2>
            <p className={styles.detailText}>URN: 2827996</p>
            <p className={styles.detailNote}>Registered provider: Nurturing Nests Care Limited</p>
          </div>

          <div className={styles.logoBlock}>
            <Image src="/header-logo.svg" alt="Nurturing Nests" width={140} height={80} style={{ objectFit: "contain", objectPosition: "left" }} />
          </div>
        </div>

        {/* Right — contact form */}
        <div className={styles.formWrap}>
          {state === "success" ? (
            <div className={styles.success}>
              <h2 className={styles.successTitle}>Message sent</h2>
              <p>Thank you for getting in touch. We will respond within one working day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <h2 className={styles.formTitle}>Send us a message</h2>

              <div className={styles.row}>
                <label className={styles.label}>
                  Full name
                  <input name="name" type="text" required placeholder="Your name" className={styles.input} />
                </label>
                <label className={styles.label}>
                  Email address
                  <input name="email" type="email" required placeholder="your@email.com" className={styles.input} />
                </label>
              </div>

              <label className={styles.label}>
                Phone number
                <input name="phone" type="tel" placeholder="Optional" className={styles.input} />
              </label>

              <label className={styles.label}>
                Organisation
                <input name="organisation" type="text" placeholder="Your organisation (if applicable)" className={styles.input} />
              </label>

              <label className={styles.label}>
                Message
                <textarea name="message" rows={5} required placeholder="How can we help?" className={styles.textarea} />
              </label>

              <label className={styles.consent}>
                <input name="consent" type="checkbox" required className={styles.checkbox} />
                <span>I consent to Nurturing Nests storing my details to respond to my enquiry.</span>
              </label>

              {state === "error" && (
                <p className={styles.error}>Something went wrong. Please try again or call us directly.</p>
              )}

              <button type="submit" disabled={state === "submitting"} className={styles.submitBtn}>
                {state === "submitting" ? "Sending…" : "Send message →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
