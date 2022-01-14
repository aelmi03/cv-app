import React, { Component } from "react";
import GeneralPreview from "../GeneralPreview/GeneralPreview";
import SkillsPreview from "../SkillsPreview/SkillsPreview";
import DescriptionPreview from "../DescriptionPreview/DescriptionPreview";
import LivePreviewCSS from "./LivePreview.module.css";
import WorkExperiencePreview from "../WorkExperiencePreview/WorkExperiencePreview";
import EducationPreview from "../EducationPreview/EducationPreview";

const LivePreview = (props) => {
  const { generalInfo, skills, educations, workExperiences } = props;
  const { firstName, lastName, description } = generalInfo;
  return (
    <div className={LivePreviewCSS.container}>
      <h1 className={LivePreviewCSS.title}>{`${firstName} ${lastName}`}</h1>
      <div className={LivePreviewCSS.information}>
        <div className={LivePreviewCSS.mainInfo}>
          <DescriptionPreview description={description} />
          <EducationPreview educations={educations} />
          <WorkExperiencePreview workExperiences={workExperiences} />
        </div>
        <div className={LivePreviewCSS.minorInfo}>
          <GeneralPreview generalInfo={generalInfo} />
          <SkillsPreview skills={skills} />
        </div>
      </div>
    </div>
  );
};

export default LivePreview;
