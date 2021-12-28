import React, { Component } from "react";
import SkillInfoCSS from "./SkillInfo.module.css";
import SkillForm from "../SkillForm/SkillForm";

class SkillInfo extends Component {
  loadSkills() {
    return this.props.skills.map((skillObject) => {
      return (
        <SkillForm
          skill={skillObject.skill}
          key={skillObject.id}
          id={skillObject.id}
          updateSkill={this.props.updateSkill}
        />
      );
    });
  }
  render() {
    return (
      <div className={SkillInfoCSS.container}>
        <h1 className={SkillInfoCSS.heading}>Skills</h1>
        {this.loadSkills()}
        <button className="add-button" onClick={this.props.addSkill}>
          ADD
        </button>
      </div>
    );
  }
}

export default SkillInfo;
