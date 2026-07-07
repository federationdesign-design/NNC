"use client";

import { useEffect, useState } from "react";
import styles from "./ReferralModal.module.css";

type FormState = "idle" | "submitting" | "success" | "error";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ReferralModal({ open, onClose }: Props) {
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
      const res = await fetch("/api/referral", {
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
    <div className={styles.overlay} onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={styles.panel} role="dialog" aria-modal="true" aria-label="Make a referral">
        <button className={styles.close} onClick={onClose} aria-label="Close">&times;</button>

        {state === "success" ? (
          <div className={styles.success}>
            <h2 className={styles.successTitle}>Referral received</h2>
            <p>Thank you. A member of our team will be in touch within one working day.</p>
            <button className={styles.successBtn} onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <h2 className={styles.title}>Make a referral</h2>
              <p className={styles.sub}>Complete this form and we will be in touch within one working day to discuss availability and suitability.</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.cols}>
                {/* Left column — referrer details */}
                <div className={styles.col}>
                  <p className={styles.sectionLabel}>Your details</p>
                  <input name="name" type="text" required placeholder="Full name" className={styles.input} />
                  <input name="jobTitle" type="text" required placeholder="Job title" className={styles.input} />
                  <input name="email" type="email" required placeholder="Email address" className={styles.input} />
                  <input name="tel" type="tel" required placeholder="Phone number" className={styles.input} />
                  <input name="council" type="text" required placeholder="Local authority / council" className={styles.input} />
                  <input name="county" type="text" required placeholder="County" className={styles.input} />
                </div>

                {/* Right column — referral details */}
                <div className={styles.col}>
                  <p className={styles.sectionLabel}>Referral details</p>
                  <input name="numberOfCases" type="number" min={1} required placeholder="Number of cases" className={styles.input} />
                  <input name="dateRequired" type="date" required className={styles.input} />
                  <textarea
                    name="specialNotes"
                    rows={7}
                    placeholder="Special notes — include any relevant needs, risks, diagnoses or placement history"
                    className={styles.textarea}
                  />
                </div>
              </div>

              <label className={styles.consent}>
                <input name="consent" type="checkbox" required className={styles.checkbox} />
                <span>I confirm I have authority to make this referral and the information provided is accurate to the best of my knowledge.</span>
              </label>

              {state === "error" && (
                <p className={styles.error}>Something went wrong. Please try again or call us on 07714 310 464.</p>
              )}

              <div className={styles.actions}>
                <button type="button" className={styles.cancelBtn} onClick={onClose}>Cancel</button>
                <button type="submit" disabled={state === "submitting"} className={styles.submitBtn}>
                  {state === "submitting" ? "Sending…" : "Submit referral →"}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
