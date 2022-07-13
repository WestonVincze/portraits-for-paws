import React from "react";
import styles from "./Card.module.css";

export default function Card({ imagery, title, children }) {
  return(
    <div className={styles.card}>
      {imagery}
      {title && 
        <div className={styles.cardHeader}>
          <h1>{title}</h1>
        </div>
      }
      <div className={styles.body}>
        {children}
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}