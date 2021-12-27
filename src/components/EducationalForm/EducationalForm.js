import React, { Component } from "react";
import EducationalFormCSS from "./EducationalForm.module.css";

class EducationalForm extends Component {
  render() {
    const { institution, degree, from, to } = this.props.education;
    return (
      <div className={EducationalFormCSS.container}>
        <form className={EducationalFormCSS.form}>
          <input
            type="text"
            className={EducationalFormCSS.input}
            placeholder="Name Of Institution"
            value={institution}
          />
          <input
            type="text"
            className={EducationalFormCSS.input}
            placeholder="Name Of Degree"
            value={degree}
          />
          <input
            type="text"
            className={EducationalFormCSS.input}
            placeholder="From"
            value={from}
          />
          <input
            type="text"
            className={EducationalFormCSS.input}
            placeholder="To"
            value={to}
          />
        </form>
        <button className="delete-button">DELETE</button>
      </div>
    );
  }
}

export default EducationalForm;
