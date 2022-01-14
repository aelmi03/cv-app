import React from "react";
import PreviewHeadingCSS from "./PreviewHeading.module.css";

const PreviewHeading = (props) => {
  return (
    <div className={PreviewHeadingCSS.container}>
      <h2 className={PreviewHeadingCSS.title}>{props.title}</h2>
      <hr className={PreviewHeadingCSS.hr}></hr>
    </div>
  );
};

export default PreviewHeading;
