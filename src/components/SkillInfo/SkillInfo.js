import React, { Component } from "react";
import SkillInfoCSS from "./SkillInfo.module.css";
import SkillForm from "../SkillForm/SkillForm";

class SkillInfo extends Component {
  render() {
    return (
      <div className={SkillInfoCSS.container}>
        <h1 className={SkillInfoCSS.heading}>Skills</h1>
        <SkillForm />
        <button className="add-button">ADD</button>
      </div>
    );
  }
}

export default SkillInfo;
