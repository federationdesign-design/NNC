"use client";

import { useEffect, useState } from "react";
import styles from "./ReferralModal.module.css";

type FormState = "idle" | "submitting" | "success" | "error";

interface Props {
  open: boolean;
  onClose: () => void;
  homeName: string;
}

export default function StatementRequestModal({ open, onClose, homeName }: Props) {
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
      const res = await fetch("/api/statement-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, homeName }),
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
            <h2 className={styles.successTitle}>Request received</h2>
            <p>Thank you. We will send the Statement of Purpose for {homeName} to you within one working day.</p>
            <button className={styles.successBtn} onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <h2 className={styles.title}>Request Statement of Purpose</h2>
              <p className={styles.sub}>Complete this form to request a copy of the Statement of Purpose for <strong>{homeName}</strong>. We will send it to you within one working day.</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.cols}>
                <div className={styles.col}>
                  <p className={styles.sectionLabel}>Your details</p>
                  <input name="name" type="text" required placeholder="Full name" className={styles.input} />
                  <input name="email" type="email" required placeholder="Email address" className={styles.input} />
                  <input name="phone" type="tel" placeholder="Phone number (optional)" className={styles.input} />
                  <input name="organisation" type="text" required placeholder="Organisation" className={styles.input} />
                  <select name="role" required className={styles.input}>
                    <option value="">Your role</option>
                    <option>Social Worker</option>
                    <option>Independent Reviewing Officer</option>
                    <option>Local Authority Commissioner</option>
                    <option>Ofsted Inspector</option>
                    <option>Other Professional</option>
                  </select>
                </div>
                <div className={styles.col}>
                  <p className={styles.sectionLabel}>Request details</p>
                  <textarea
                    name="reason"
                    rows={5}
                    placeholder="Please briefly describe why you are requesting this document"
                    className={styles.textarea}
                  />
                </div>
              </div>

              <label className={styles.consent}>
                <input name="consent" type="checkbox" required className={styles.checkbox} />
                <span>I confirm I am a professional requesting this document for legitimate purposes related to the care of children.</span>
              </label>

              {state === "error" && (
                <p className={styles.error}>Something went wrong. Please try again or contact us directly.</p>
              )}

              <div className={styles.actions}>
                <button type="button" className={styles.cancelBtn} onClick={onClose}>Cancel</button>
                <button type="submit" disabled={state === "submitting"} className={styles.submitBtn}>
                  {state === "submitting" ? "Sending…" : "Submit request →"}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
