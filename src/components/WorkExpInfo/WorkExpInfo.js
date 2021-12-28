import React, { Component } from "react";
import WorkExpInfoCSS from "./WorkExpInfo.module.css";
import WorkExpForm from "../WorkExpForm/WorkExpForm";

class WorkExpInfo extends Component {
  render() {
    return (
      <div className={WorkExpInfoCSS.container}>
        <h1 className={WorkExpInfoCSS.heading}>Work Experience</h1>
        <WorkExpForm />
        <button className="add-button">ADD</button>
      </div>
    );
  }
}

export default WorkExpInfo;
