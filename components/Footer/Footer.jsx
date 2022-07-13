import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return(
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.footerLeft} />
        <div className={styles.footerMiddle} />
        <div className={styles.footerRight} />
      </div>
    </div>
  );
}

export default Footer;