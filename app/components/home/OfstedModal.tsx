"use client";
import { useEffect } from "react";
import styles from "./OfstedModal.module.css";
interface Props { open: boolean; onClose: () => void; }
export default function OfstedModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, onClose]);
  if (!open) return null;

  const pdfUrl = "/Ivy%20Cottage%20CH%20Full%2010442530%20FINAL.pdf";

  return (
    <div className={styles.overlay} onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={styles.panel} role="dialog" aria-modal="true">
        <div className={styles.toolbar}>
          <span className={styles.toolbarTitle}>Ofsted Inspection Report — Ivy Cottage</span>
          <div className={styles.toolbarActions}>
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>
              Open in new tab ↗
            </a>
            <button className={styles.close} onClick={onClose} aria-label="Close">&times;</button>
          </div>
        </div>
        <embed
          src={pdfUrl}
          type="application/pdf"
          className={styles.embed}
        />
        <div className={styles.fallback}>
          <p>Your browser cannot display PDFs inline.</p>
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className={styles.fallbackBtn}>
            Open PDF in new tab →
          </a>
        </div>
      </div>
    </div>
  );
}
