import React, { Component } from "react";
import PreviewHeading from "../PreviewHeading/PreviewHeading";
import EducationRow from "../EducationRow/EducationRow";
import EducationPreviewCSS from "./EducationPreview.module.css";

class EducationPreview extends Component {
  loadEducationRows() {
    return this.props.educations.map((education) => {
      return <EducationRow education={education} key={education.id} />;
    });
  }
  render() {
    return (
      <div className={EducationPreviewCSS.container}>
        <PreviewHeading title="Education" />
        <div className={EducationPreviewCSS.educationList}>
          {this.loadEducationRows()}
        </div>
      </div>
    );
  }
}

export default EducationPreview;
