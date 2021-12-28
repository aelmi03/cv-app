import React, { Component } from "react";
import WorkExpFormCSS from "./WorkExpForm.module.css";

class WorkExpForm extends Component {
  render() {
    const { position, company, city, from, to } = this.props.workExperience;
    return (
      <div className={WorkExpFormCSS.container}>
        <form className={WorkExpFormCSS.form}>
          <input
            type="text"
            className={WorkExpFormCSS.input}
            placeholder="Position"
            value={position}
          />
          <input
            type="text"
            className={WorkExpFormCSS.input}
            placeholder="Company"
            value={company}
          />
          <input
            type="text"
            className={WorkExpFormCSS.input}
            placeholder="City"
            value={city}
          />
          <input
            type="text"
            placeholder="From"
            className={WorkExpFormCSS.input}
            value={from}
          />
          <input
            type="text"
            placeholder="To"
            className={WorkExpFormCSS.input}
            value={to}
          />
        </form>
        <button className="delete-button">DELETE</button>
      </div>
    );
  }
}

export default WorkExpForm;
