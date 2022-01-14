import React from "react";
import PreviewHeading from "../PreviewHeading/PreviewHeading";
import WorkExperienceRow from "../WorkExperienceRow/WorkExperienceRow";
import WorkExperiencePreviewCSS from "./WorkExperiencePreview.module.css";

const WorkExperiencePreview = (props) => {
  const loadWorkExperienceRows = () => {
    return props.workExperiences.map((workExperience) => {
      return (
        <WorkExperienceRow
          workExperience={workExperience}
          key={workExperience.id}
        />
      );
    });
  };
  return (
    <div className={WorkExperiencePreviewCSS.container}>
      <PreviewHeading title="Work Experience" />
      <div className={WorkExperiencePreviewCSS.workExperienceList}>
        {loadWorkExperienceRows()}
      </div>
    </div>
  );
};
export default WorkExperiencePreview;
