import React from "react";
import styles from "./Icon.module.css";

export default function Icon({ variant, type, ...props }) {
  const iconStyle = styles[variant] || "";
  const classes = props["className"];

  return(
    <div className={`${classes} ${styles.icon} ${iconStyle}`}>
      <i className={`bi bi-${type}`} />
    </div>
  )
}
