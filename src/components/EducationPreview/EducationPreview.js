import React, { Component } from "react";
import PreviewHeading from "../PreviewHeading/PreviewHeading";
import EducationRow from "../EducationRow/EducationRow";
import EducationPreviewCSS from "./EducationPreview.module.css";

class EducationPreview extends Component {
  render() {
    return (
      <div className={EducationPreviewCSS.container}>
        <PreviewHeading title="Education" />
        <div className={EducationPreviewCSS.educationList}>
          <EducationRow education={this.props.educations[0]} />
        </div>
      </div>
    );
  }
}

export default EducationPreview;
