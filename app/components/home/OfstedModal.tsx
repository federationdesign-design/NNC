"use client";

import { useEffect } from "react";
import styles from "./OfstedModal.module.css";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function OfstedModal({ open, onClose }: Props) {
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

  return (
    <div className={styles.overlay} onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={styles.panel} role="dialog" aria-modal="true" aria-label="Ofsted Report">
        <button className={styles.close} onClick={onClose} aria-label="Close">&times;</button>
        <iframe
          src="/Ivy%20Cottage%20CH%20Full%2010442530%20FINAL.pdf"
          className={styles.iframe}
          title="Ofsted Inspection Report - Ivy Cottage"
        />
      </div>
    </div>
  );
}
