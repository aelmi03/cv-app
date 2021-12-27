import React, { Component } from "react";
import EducationalInfoCSS from "./EducationalInfo.module.css";
import EducationalForm from "../EducationalForm/EducationalForm";

class EducationalInfo extends Component {
  loadEducationForms() {
    return this.props.educations.map((educationObject) => {
      console.log(this.props.updateEducationalInfo);
      return (
        <EducationalForm
          education={educationObject}
          key={educationObject.id}
          id={educationObject.id}
          updateEducationalInfo={this.props.updateEducationalInfo}
        />
      );
    });
  }
  render() {
    return (
      <div className={EducationalInfoCSS.container}>
        <h1 className={EducationalInfoCSS.heading}>Education</h1>
        {this.loadEducationForms()}
        <button className="add-button">ADD</button>
      </div>
    );
  }
}

export default EducationalInfo;
