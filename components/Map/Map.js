import React from "react";
import dynamic from "next/dynamic";
import styles from "./Map.module.css"
import "./Map.module.css"
export default function Home() {
  const MapWithNoSSR = dynamic(() => import("./Map.jsx"), {
    ssr: false
  });

  return (
    <main>
      <div className={styles.mapDiv} id="map">
        <MapWithNoSSR className={styles.mapDiv} />
      </div>
    </main>
  );
}
