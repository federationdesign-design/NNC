"use client";

import { useState } from "react";
import OfstedModal from "./OfstedModal";
import styles from "./CompliancePage.module.css";

const HOMES = [
  {
    name: "Ivy Cottage",
    urn: "2827996",
    registeredSince: "May 2025",
    type: "Children's Home",
    capacity: "2 children",
    status: "Open",
    latestInspection: "Good",
    latestInspectionDate: "27–28 May 2026",
    inspectionType: "Full inspection",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/2/2827996",
    inspectionReportUrl: "/ofsted/ivy-inspection-report.pdf",
    registrationCertUrl: null, // awaiting from George
    monitoringReportUrl: null,
  },
  {
    name: "Holly Tree Cottage",
    urn: "2827926",
    registeredSince: "May 2025",
    type: "Children's Home",
    capacity: "2 children",
    status: "Open",
    latestInspection: "Monitoring visit",
    latestInspectionDate: "8 April 2026",
    inspectionType: "Monitoring visit",
    ofstedUrl: "https://reports.ofsted.gov.uk/provider/2/2827926",
    inspectionReportUrl: "/ofsted/holly-monitoring-report.pdf",
    registrationCertUrl: "/ofsted/holly-registration-certificate.pdf",
    monitoringReportUrl: "/ofsted/holly-monitoring-report.pdf",
  },
];

export default function CompliancePage() {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  return (
    <>
      <main className={styles.page}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Transparency</p>
          <h1 className={styles.heading}>Quality &amp; Compliance</h1>
          <p className={styles.sub}>Nurturing Nests Care is committed to full transparency with commissioners, social workers and local authorities. Below you will find Ofsted registration details, inspection reports and registration certificates for each of our homes.</p>
        </div>

        <div className={styles.content}>
          {HOMES.map((home) => (
            <div key={home.urn} className={styles.homeCard}>
              <div className={styles.homeHeader}>
                <div>
                  <h2 className={styles.homeName}>{home.name}</h2>
                  <p className={styles.homeUrn}>URN: {home.urn}</p>
                </div>
                <span className={`${styles.statusBadge} ${home.status === "Open" ? styles.statusOpen : styles.statusProposed}`}>
                  {home.status}
                </span>
              </div>

              <div className={styles.detailsGrid}>
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>Type</span>
                  <span className={styles.detailValue}>{home.type}</span>
                </div>
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>Capacity</span>
                  <span className={styles.detailValue}>{home.capacity}</span>
                </div>
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>Registered since</span>
                  <span className={styles.detailValue}>{home.registeredSince}</span>
                </div>
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>Latest inspection</span>
                  <span className={styles.detailValue}>{home.latestInspection} — {home.latestInspectionDate}</span>
                </div>
              </div>

              <div className={styles.actions}>
                {home.inspectionReportUrl && (
                  <button onClick={() => setPdfUrl(home.inspectionReportUrl)} className={styles.docBtn}>
                    📄 {home.inspectionType === "Monitoring visit" ? "View monitoring report" : "View inspection report"}
                  </button>
                )}
                {home.registrationCertUrl && (
                  <button onClick={() => setPdfUrl(home.registrationCertUrl)} className={styles.docBtn}>
                    📋 View registration certificate
                  </button>
                )}
                <a href={home.ofstedUrl} target="_blank" rel="noopener noreferrer" className={styles.ofstedLink}>
                  🔗 View on Ofsted website
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.disclaimer}>
          <p>All homes are registered with Ofsted and inspected under the Social Care Common Inspection Framework. Registered provider: Nurturing Nests Care Limited. Company No. 11223861.</p>
        </div>
      </main>

      {pdfUrl && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(15,28,46,0.7)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}
          onMouseDown={(e) => { if (e.target === e.currentTarget) setPdfUrl(null); }}
        >
          <div style={{ position: "relative", width: "100%", maxWidth: "860px", height: "90vh", background: "#fff", borderRadius: "16px", overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.35)", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderBottom: "1px solid #e2e8f0", background: "#f7f8fa", flexShrink: 0 }}>
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.8rem", fontWeight: 600, color: "#2B9ED4", textDecoration: "none" }}>Open in new tab ↗</a>
              <button onClick={() => setPdfUrl(null)} style={{ width: "32px", height: "32px", border: 0, background: "#e2e8f0", borderRadius: "50%", cursor: "pointer", fontSize: "1.4rem" }}>&times;</button>
            </div>
            <embed src={pdfUrl} type="application/pdf" style={{ width: "100%", flex: 1, border: "none" }} />
          </div>
        </div>
      )}
    </>
  );
}
