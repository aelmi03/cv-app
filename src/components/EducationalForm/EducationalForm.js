import React, { Component } from "react";
import EducationalFormCSS from "./EducationalForm.module.css";

class EducationalForm extends Component {
  render() {
    return (
      <div className={EducationalFormCSS.container}>
        <form className={EducationalFormCSS.form}>
          <input
            type="text"
            className={EducationalFormCSS.input}
            placeholder="Name Of Institution"
          />
          <input
            type="text"
            className={EducationalFormCSS.input}
            placeholder="Name Of Degree"
          />
          <input
            type="text"
            className={EducationalFormCSS.input}
            placeholder="From"
          />
          <input
            type="text"
            className={EducationalFormCSS.input}
            placeholder="To"
          />
        </form>
        <button className="delete-button">DELETE</button>
      </div>
    );
  }
}

export default EducationalForm;
