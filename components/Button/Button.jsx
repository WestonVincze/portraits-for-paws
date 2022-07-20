import React from "react";
import styles from "./Button.module.css"
import Link from "next/link";

function Button({ path, variant, children }) {
  const buttonStyle = styles[variant] || styles.primary;

  return(
    <Link href={path}>
      <a className={`${styles.button} ${buttonStyle}`}>
        {children}
      </a>
    </Link>
  )
}

export default Button;
