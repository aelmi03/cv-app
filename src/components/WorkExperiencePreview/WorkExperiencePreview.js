import React, { Component } from "react";
import PreviewHeading from "../PreviewHeading/PreviewHeading";
import WorkExperienceRow from "../WorkExperienceRow/WorkExperienceRow";
import WorkExperiencePreviewCSS from "./WorkExperiencePreview.module.css";

class WorkExperiencePreview extends Component {
  loadWorkExperienceRows() {
    return this.props.workExperiences.map((workExperience) => {
      return <WorkExperienceRow workExperience={workExperience} />;
    });
  }
  render() {
    return (
      <div className={WorkExperiencePreviewCSS.container}>
        <PreviewHeading title="Work Experience" />
        <div className={WorkExperiencePreviewCSS.workExperienceList}>
          {this.loadWorkExperienceRows()}
        </div>
      </div>
    );
  }
}
export default WorkExperiencePreview;
