import React, { Component } from "react";
import WorkExpInfoCSS from "./WorkExpInfo.module.css";
import FormHeader from "../FormHeader/FormHeader";
import WorkExpForm from "../WorkExpForm/WorkExpForm";

class WorkExpInfo extends Component {
  loadWorkForms() {
    return this.props.workExperiences.map((workExperience) => {
      return (
        <WorkExpForm
          workExperience={workExperience}
          updateWorkExperience={this.props.updateWorkExperience}
          deleteWorkExperience={this.props.deleteWorkExperience}
          key={workExperience.id}
          id={workExperience.id}
        />
      );
    });
  }
  render() {
    return (
      <div className={WorkExpInfoCSS.container}>
        <FormHeader title="Work Experience" />
        {this.loadWorkForms()}
        <button className="add-button" onClick={this.props.addWorkExperience}>
          ADD
        </button>
      </div>
    );
  }
}

export default WorkExpInfo;
