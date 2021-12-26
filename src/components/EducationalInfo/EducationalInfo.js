import React, { Component } from "react";
import EducationalInfoCSS from "./EducationalInfo.module.css";
import EducationalForm from "../EducationalForm/EducationalForm";

class EducationalInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={EducationalInfoCSS.container}>
        <h1 className={EducationalInfoCSS.heading}>Education</h1>
        <EducationalForm />
        <button class="add-button">ADD</button>
      </div>
    );
  }
}

export default EducationalInfo;
