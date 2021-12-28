import React, { Component } from "react";
import SkillFormCSS from "./SkillForm.module.css";

class SkillForm extends Component {
  constructor(props) {
    super(props);
    this.updateSkillListener = this.updateSkillListener.bind(this);
    this.deleteSkillListener = this.deleteSkillListener.bind(this);
  }
  updateSkillListener(e) {
    this.props.updateSkill(this.props.id, e.target.value);
  }
  deleteSkillListener() {
    this.props.deleteSkill(this.props.id);
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
        <button className="delete-button" onClick={this.deleteSkillListener}>
          DELETE
        </button>
      </div>
    );
  }
}

export default SkillForm;
