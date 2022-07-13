import React from "react";

export default function ContentRow({ cols }) {
  // this component is basically a flexbox wrapper 
  // children should be an array of components
  return(
    <div className="row">
      {cols.map((col, i) => ( 
        <div className="col" key={i}>
          {col}
        </div>
      ))}
    </div>
  );
}