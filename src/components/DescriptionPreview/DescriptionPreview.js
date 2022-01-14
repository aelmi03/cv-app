import React from "react";
import PreviewHeading from "../PreviewHeading/PreviewHeading";
import DescriptionPreviewCSS from "./DescriptionPreview.module.css";

const DescriptionPreview = (props) => {
  return (
    <div className={DescriptionPreviewCSS.container}>
      <PreviewHeading title="Description" />
      <p className={DescriptionPreviewCSS.p}>{props.description}</p>
    </div>
  );
};

export default DescriptionPreview;
