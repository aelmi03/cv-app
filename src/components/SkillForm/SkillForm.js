import React, { Component } from "react";
import SkillFormCSS from "./SkillForm.module.css";

class SkillForm extends Component {
  constructor(props) {
    super(props);
    this.updateSkillListener = this.updateSkillListener.bind(this);
  }
  updateSkillListener(e) {
    this.props.updateSkill(this.props.id, e.target.value);
  }
  render() {
    return (
      <div className={SkillFormCSS.container}>
        <form className={SkillFormCSS.form}>
          <input
            type="text"
            className={SkillFormCSS.input}
            placeholder="Skill"
            value={this.props.skill}
            onChange={this.updateSkillListener}
          />
        </form>
        <button className="delete-button">DELETE</button>
      </div>
    );
  }
}

export default SkillForm;
