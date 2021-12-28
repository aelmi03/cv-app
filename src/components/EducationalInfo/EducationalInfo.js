import React, { Component } from "react";
import EducationalInfoCSS from "./EducationalInfo.module.css";
import EducationalForm from "../EducationalForm/EducationalForm";

class EducationalInfo extends Component {
  constructor(props) {
    super(props);
    this.addEducationHandler = this.addEducationHandler.bind(this);
  }
  loadEducationForms() {
    return this.props.educations.map((educationObject) => {
      return (
        <EducationalForm
          education={educationObject}
          key={educationObject.id}
          id={educationObject.id}
          updateEducationalInfo={this.props.updateEducationalInfo}
          deleteEducation={this.props.deleteEducation}
        />
      );
    });
  }
  addEducationHandler() {
    this.props.addEducation();
  }
  render() {
    return (
      <div className={EducationalInfoCSS.container}>
        <h1 className={EducationalInfoCSS.heading}>Education</h1>
        {this.loadEducationForms()}
        <button className="add-button" onClick={this.addEducationHandler}>
          ADD
        </button>
      </div>
    );
  }
}

export default EducationalInfo;
