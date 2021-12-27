import React, { Component } from "react";
import EducationalFormCSS from "./EducationalForm.module.css";

class EducationalForm extends Component {
  constructor(props) {
    super(props);
    this.educationalFormListener = this.educationalFormListener.bind(this);
  }
  educationalFormListener(e) {
    this.props.updateEducationalInfo(
      this.props.id,
      e.target.getAttribute("property"),
      e.target.value
    );
  }
  render() {
    const { institution, degree, from, to } = this.props.education;
    return (
      <div className={EducationalFormCSS.container}>
        <form className={EducationalFormCSS.form}>
          <input
            type="text"
            className={EducationalFormCSS.input}
            placeholder="Name Of Institution"
            property="institution"
            value={institution}
            onChange={this.educationalFormListener}
          />
          <input
            type="text"
            className={EducationalFormCSS.input}
            placeholder="Name Of Degree"
            property="degree"
            value={degree}
            onChange={this.educationalFormListener}
          />
          <input
            type="text"
            className={EducationalFormCSS.input}
            placeholder="From"
            property="from"
            value={from}
            onChange={this.educationalFormListener}
          />
          <input
            type="text"
            className={EducationalFormCSS.input}
            placeholder="To"
            property="to"
            value={to}
            onChange={this.educationalFormListener}
          />
        </form>
        <button className="delete-button">DELETE</button>
      </div>
    );
  }
}

export default EducationalForm;
