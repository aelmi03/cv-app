import React, { Component } from "react";
import SkillInfoCSS from "./SkillInfo.module.css";
import FormHeader from "../FormHeader/FormHeader";
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
          deleteSkill={this.props.deleteSkill}
        />
      );
    });
  }
  render() {
    return (
      <div className={SkillInfoCSS.container}>
        <FormHeader title="Skills" />
        {this.loadSkills()}
        <button className="add-button" onClick={this.props.addSkill}>
          ADD
        </button>
      </div>
    );
  }
}

export default SkillInfo;
