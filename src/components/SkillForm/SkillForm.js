import React, { Component } from "react";
import SkillFormCSS from "./SkillForm.module.css";

class SkillForm extends Component {
  render() {
    return (
      <div className={SkillFormCSS.container}>
        <form className={SkillFormCSS.form}>
          <input
            type="text"
            className={SkillFormCSS.input}
            placeholder="Skill"
            property="skill"
            value={this.props.skill}
          />
        </form>
        <button className="delete-button">DELETE</button>
      </div>
    );
  }
}

export default SkillForm;
