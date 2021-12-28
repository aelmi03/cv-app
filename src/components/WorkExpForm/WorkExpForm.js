import React, { Component } from "react";
import WorkExpFormCSS from "./WorkExpForm.module.css";

class WorkExpForm extends Component {
  constructor(props) {
    super(props);
    this.updateWorkForm = this.updateWorkForm.bind(this);
  }
  updateWorkForm(e) {
    this.props.updateWorkExperience(
      this.props.id,
      e.target.getAttribute("property"),
      e.target.value
    );
  }
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
            property="position"
            onChange={this.updateWorkForm}
          />
          <input
            type="text"
            className={WorkExpFormCSS.input}
            placeholder="Company"
            value={company}
            property="company"
            onChange={this.updateWorkForm}
          />
          <input
            type="text"
            className={WorkExpFormCSS.input}
            placeholder="City"
            value={city}
            property="city"
            onChange={this.updateWorkForm}
          />
          <input
            type="text"
            placeholder="From"
            className={WorkExpFormCSS.input}
            value={from}
            property="from"
            onChange={this.updateWorkForm}
          />
          <input
            type="text"
            placeholder="To"
            className={WorkExpFormCSS.input}
            value={to}
            property="to"
            onChange={this.updateWorkForm}
          />
        </form>
        <button className="delete-button">DELETE</button>
      </div>
    );
  }
}

export default WorkExpForm;
