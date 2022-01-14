import React from "react";
import SkillInfoCSS from "./SkillInfo.module.css";
import FormHeader from "../FormHeader/FormHeader";
import SkillForm from "../SkillForm/SkillForm";

const SkillInfo = (props) => {
  const loadSkills = () => {
    return props.skills.map((skillObject) => {
      return (
        <SkillForm
          skill={skillObject.skill}
          key={skillObject.id}
          id={skillObject.id}
          updateSkill={props.updateSkill}
          deleteSkill={props.deleteSkill}
        />
      );
    });
  };
  return (
    <div className={SkillInfoCSS.container}>
      <FormHeader title="Skills" />
      {loadSkills()}
      <button className="add-button" onClick={props.addSkill}>
        ADD
      </button>
    </div>
  );
};

export default SkillInfo;
