import React, { Component } from "react";
import PreviewHeading from "../PreviewHeading/PreviewHeading";
import DescriptionPreviewCSS from "./DescriptionPreview.module.css";

class DescriptionPreview extends Component {
  render() {
    return (
      <div className={DescriptionPreviewCSS.container}>
        <PreviewHeading title="Description" />
        <p className={DescriptionPreviewCSS.p}>{this.props.description}</p>
      </div>
    );
  }
}

export default DescriptionPreview;
