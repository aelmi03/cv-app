import React, { Component } from "react";
import WorkExpFormCSS from "./WorkExpForm.module.css";

class WorkExpForm extends Component {
  render() {
    return (
      <div className={WorkExpFormCSS.container}>
        <form className={WorkExpFormCSS.form}>
          <input
            type="text"
            className={WorkExpFormCSS.input}
            placeholder="Position"
          />
          <input
            type="text"
            className={WorkExpFormCSS.input}
            placeholder="Company"
          />
          <input
            type="text"
            className={WorkExpFormCSS.input}
            placeholder="City"
          />
          <input
            type="text"
            placeholder="From"
            className={WorkExpFormCSS.input}
          />
          <input
            type="text"
            placeholder="To"
            className={WorkExpFormCSS.input}
          />
        </form>
        <button className="delete-button">DELETE</button>
      </div>
    );
  }
}

export default WorkExpForm;
