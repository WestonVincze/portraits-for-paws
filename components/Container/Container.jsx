import React from "react";
import styles from "./Container.module.css"

function Container({ children, centered=true }) {
  return(
    <div className={`${styles.container} ${centered && 'text-center'}`}>
      {children}
    </div>
  )
}

export default Container;