import React from "react";
import PreviewHeading from "../PreviewHeading/PreviewHeading";
import EducationRow from "../EducationRow/EducationRow";
import EducationPreviewCSS from "./EducationPreview.module.css";

const EducationPreview = (props) => {
  const loadEducationRows = () => {
    return props.educations.map((education) => {
      return <EducationRow education={education} key={education.id} />;
    });
  };
  return (
    <div className={EducationPreviewCSS.container}>
      <PreviewHeading title="Education" />
      <div className={EducationPreviewCSS.educationList}>
        {loadEducationRows()}
      </div>
    </div>
  );
};

export default EducationPreview;
