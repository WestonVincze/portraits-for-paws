import React from "react";
import styles from "./ContentRow.module.css";

export default function ContentRow({ cols, colCount = 3 }) {
  // this component is basically a flexbox wrapper 
  // children should be an array of components
  return(
    <div className={`${styles.row} ${styles[`col-${colCount}`]}`}>
      {cols.map((col, i) => ( 
        <div className={styles.col} key={i}>
          {col}
        </div>
      ))}
    </div>
  );
}