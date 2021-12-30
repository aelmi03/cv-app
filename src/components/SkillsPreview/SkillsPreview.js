import React, { Component } from "react";
import PreviewHeading from "../PreviewHeading/PreviewHeading";
import SkillsPreviewCSS from "./SkillsPreview.module.css";

class SkillsPreview extends Component {
  loadSkills() {
    return this.props.skills.map((skillObject) => {
      return (
        <li className={SkillsPreviewCSS.li} key={skillObject.id}>
          {skillObject.skill}
        </li>
      );
    });
  }
  render() {
    return (
      <div className={SkillsPreviewCSS.container}>
        <PreviewHeading title="Skills" />
        <ul className={SkillsPreviewCSS.skillsList}>{this.loadSkills()}</ul>
      </div>
    );
  }
}

export default SkillsPreview;
