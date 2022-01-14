import React from "react";
import WorkExpInfoCSS from "./WorkExpInfo.module.css";
import FormHeader from "../FormHeader/FormHeader";
import WorkExpForm from "../WorkExpForm/WorkExpForm";

const WorkExpInfo = (props) => {
  const loadWorkForms = () => {
    return props.workExperiences.map((workExperience) => {
      return (
        <WorkExpForm
          workExperience={workExperience}
          updateWorkExperience={props.updateWorkExperience}
          deleteWorkExperience={props.deleteWorkExperience}
          key={workExperience.id}
          id={workExperience.id}
        />
      );
    });
  };
  return (
    <div className={WorkExpInfoCSS.container}>
      <FormHeader title="Work Experience" />
      {loadWorkForms()}
      <button className="add-button" onClick={props.addWorkExperience}>
        ADD
      </button>
    </div>
  );
};

export default WorkExpInfo;
