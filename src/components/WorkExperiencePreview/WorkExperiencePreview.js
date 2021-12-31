import React, { Component } from "react";
import PreviewHeading from "../PreviewHeading/PreviewHeading";
import WorkExperienceRow from "../WorkExperienceRow/WorkExperienceRow";
import WorkExperiencePreviewCSS from "./WorkExperiencePreview.module.css";

class WorkExperiencePreview extends Component {
  render() {
    return (
      <div className={WorkExperiencePreviewCSS.container}>
        <PreviewHeading title="Work Experience" />
        <div className={WorkExperiencePreviewCSS.workExperienceList}>
          <WorkExperienceRow workExperience={this.props.workExperiences[0]} />
          <WorkExperienceRow workExperience={this.props.workExperiences[1]} />
          <WorkExperienceRow workExperience={this.props.workExperiences[2]} />
        </div>
      </div>
    );
  }
}
export default WorkExperiencePreview;
