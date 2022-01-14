import React from "react";
import SkillFormCSS from "./SkillForm.module.css";

const SkillForm = (props) => {
  const updateSkillListener = (e) => {
    props.updateSkill(props.id, e.target.value);
  };
  return (
    <div className={SkillFormCSS.container}>
      <form className={SkillFormCSS.form}>
        <input
          type="text"
          className={SkillFormCSS.input}
          placeholder="Skill"
          value={props.skill}
          onChange={updateSkillListener}
        />
      </form>
      <button
        className="delete-button"
        onClick={props.deleteSkill.bind(this, props.id)}
      >
        DELETE
      </button>
    </div>
  );
};

export default SkillForm;
