import React from "react";
import EducationalInfoCSS from "./EducationalInfo.module.css";
import FormHeader from "../FormHeader/FormHeader";
import EducationalForm from "../EducationalForm/EducationalForm";

const EducationalInfo = (props) => {
  const loadEducationForms = () => {
    return props.educations.map((educationObject) => {
      return (
        <EducationalForm
          education={educationObject}
          key={educationObject.id}
          id={educationObject.id}
          updateEducationalInfo={props.updateEducationalInfo}
          deleteEducation={props.deleteEducation}
        />
      );
    });
  };
  return (
    <div className={EducationalInfoCSS.container}>
      <FormHeader title="Education" />
      {loadEducationForms()}
      <button className="add-button" onClick={props.addEducation}>
        ADD
      </button>
    </div>
  );
};

export default EducationalInfo;
