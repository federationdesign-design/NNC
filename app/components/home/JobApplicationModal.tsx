"use client";

import { useEffect, useState } from "react";
import styles from "./JobApplicationModal.module.css";

type FormState = "idle" | "submitting" | "success" | "error";

interface Props {
  open: boolean;
  onClose: () => void;
  jobTitle?: string;
}

export default function JobApplicationModal({ open, onClose, jobTitle }: Props) {
  const [state, setState] = useState<FormState>("idle");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, jobTitle }),
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <div className={styles.overlay} onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={styles.panel} role="dialog" aria-modal="true">
        <button className={styles.close} onClick={onClose} aria-label="Close">&times;</button>

        {state === "success" ? (
          <div className={styles.success}>
            <h2 className={styles.successTitle}>Application received</h2>
            <p>Thank you for applying. We will be in touch within five working days.</p>
            <button className={styles.successBtn} onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <h2 className={styles.title}>Apply now</h2>
              {jobTitle && <p className={styles.jobTitle}>{jobTitle}</p>}
              <p className={styles.sub}>Complete this form and we will be in touch to discuss your application.</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.cols}>
                <div className={styles.col}>
                  <p className={styles.sectionLabel}>Personal details</p>
                  <div className={styles.row}>
                    <input name="firstName" type="text" required placeholder="First name" className={styles.input} />
                    <input name="lastName" type="text" required placeholder="Last name" className={styles.input} />
                  </div>
                  <input name="email" type="email" required placeholder="Email address" className={styles.input} />
                  <input name="phone" type="tel" required placeholder="Phone number" className={styles.input} />
                  <input name="address" type="text" required placeholder="Town / city" className={styles.input} />
                  <input name="rightToWork" type="text" required placeholder="Right to work in the UK (e.g. British citizen, visa type)" className={styles.input} />
                </div>

                <div className={styles.col}>
                  <p className={styles.sectionLabel}>Experience &amp; qualifications</p>
                  <input name="currentRole" type="text" placeholder="Current or most recent role" className={styles.input} />
                  <input name="yearsExperience" type="text" placeholder="Years of experience in residential care" className={styles.input} />
                  <input name="qualifications" type="text" placeholder="Relevant qualifications (e.g. NVQ Level 3, QCF)" className={styles.input} />
                  <input name="dbsStatus" type="text" placeholder="DBS status (e.g. Enhanced, on update service)" className={styles.input} />
                  <textarea
                    name="whyNurturingNests"
                    rows={4}
                    required
                    placeholder="Why do you want to work at Nurturing Nests? Tell us about your approach to residential care."
                    className={styles.textarea}
                  />
                </div>
              </div>

              <label className={styles.consent}>
                <input name="consent" type="checkbox" required className={styles.checkbox} />
                <span>I confirm the information provided is accurate and I consent to Nurturing Nests storing my details for recruitment purposes.</span>
              </label>

              {state === "error" && (
                <p className={styles.error}>Something went wrong. Please try again or email us directly.</p>
              )}

              <div className={styles.actions}>
                <button type="button" className={styles.cancelBtn} onClick={onClose}>Cancel</button>
                <button type="submit" disabled={state === "submitting"} className={styles.submitBtn}>
                  {state === "submitting" ? "Sending…" : "Submit application →"}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
