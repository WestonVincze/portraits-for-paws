import React from "react";
import styles from "./Card.module.css";

export default function Card({ image, title, variant, active, clickable, children }) {
  const cardStyle = styles[variant] || "";

  return(
    <div className={`${styles.card} ${cardStyle} ${active ? styles.active : ""} ${clickable ? styles.clickable : ""}`}>
      {image && 
        [image, <hr />]
      }
      {title && 
        <div className={styles.cardHeader}>
          <h2>{title}</h2>
        </div>
      }
      <div className={styles.body}>
        {children}
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}
