import React from "react";
import PreviewHeading from "../PreviewHeading/PreviewHeading";
import SkillsPreviewCSS from "./SkillsPreview.module.css";

const SkillsPreview = (props) => {
  const loadSkills = () => {
    return props.skills.map((skillObject) => {
      return (
        <li className={SkillsPreviewCSS.li} key={skillObject.id}>
          {skillObject.skill}
        </li>
      );
    });
  };
  return (
    <div className={SkillsPreviewCSS.container}>
      <PreviewHeading title="Skills" />
      <ul className={SkillsPreviewCSS.skillsList}>{loadSkills()}</ul>
    </div>
  );
};

export default SkillsPreview;
