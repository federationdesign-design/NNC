"use client";

import { useEffect, useRef } from "react";
import styles from "./HomeMap.module.css";

// Sellindge, Kent - coordinates
const SELLINDGE = { lat: 51.0833, lng: 0.9833 };

interface Props {
  area: string;
}

export default function HomeMap({ area }: Props) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (mapRef.current || !mapContainer.current) return;
    const token = mapContainer.current.closest("[data-token]")?.getAttribute("data-token") || "";
    if (!token) { console.warn("Mapbox token missing"); return; }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.js";
    script.async = true;
    script.onload = () => {
      const mapboxgl = (window as any).mapboxgl;
      mapboxgl.accessToken = token;

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/light-v11",
        center: [SELLINDGE.lng, SELLINDGE.lat],
        zoom: 10,
        interactive: true,
      });

      mapRef.current = map;

      map.on("load", () => {
        // Add a soft marker for the general area
        const el = document.createElement("div");
        el.style.cssText = `
          width: 48px; height: 48px;
          background: #2B9ED4;
          border: 3px solid #fff;
          border-radius: 50%;
          box-shadow: 0 2px 12px rgba(43,158,212,0.4);
          display: flex; align-items: center; justify-content: center;
          cursor: default;
        `;
        el.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 016 6c0 4.5-6 10-6 10S4 12.5 4 8a6 6 0 016-6z" fill="white"/><circle cx="10" cy="8" r="2.5" fill="#2B9ED4"/></svg>`;

        new mapboxgl.Marker({ element: el, anchor: "center" })
          .setLngLat([SELLINDGE.lng, SELLINDGE.lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 30, closeButton: false })
              .setHTML(`<div style="font-family:sans-serif;font-size:13px;font-weight:600;padding:4px 2px;color:#1a1a2e">Sellindge, East Kent</div>`)
          )
          .addTo(map);

        map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right");
      });
    };
    document.head.appendChild(script);

    return () => {
      if (mapRef.current) { mapRef.current.remove(); mapRef.current = null; }
    };
  }, []);

  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

  return (
    <div className={styles.wrap} data-token={token}>
      <div className={styles.header}>
        <h2 className={styles.title}>Location</h2>
        <p className={styles.sub}>
          Our homes are located in {area}. We do not publish specific addresses online — please <a href="/contact" className={styles.contactLink}>contact us</a> for further details.
        </p>
      </div>
      <div className={styles.mapWrap}>
        <div ref={mapContainer} className={styles.map} />
      </div>
    </div>
  );
}
