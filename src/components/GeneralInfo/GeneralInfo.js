import React, { Component } from "react";
import GeneralInfoCSS from "./GeneralInfo.module.css";

class GeneralInfo extends Component {
  render() {
    return (
      <div className={GeneralInfoCSS.container}>
        <h1 className={GeneralInfoCSS.heading}>General Information</h1>
        <form className={GeneralInfoCSS.form}>
          <input
            type="text"
            className={GeneralInfoCSS.input}
            placeholder="First Name"
          />
          <input
            type="text"
            className={GeneralInfoCSS.input}
            placeholder="Last Name"
          />
          <input
            type="email"
            className={GeneralInfoCSS.input}
            placeholder="Email"
          />
          <input
            type="tel"
            className={GeneralInfoCSS.input}
            placeholder="Phone Number"
          />
          <input
            type="text"
            className={GeneralInfoCSS.input}
            placeholder="Address"
          />
          <textarea
            className={GeneralInfoCSS.textarea}
            placeholder="Description"
          ></textarea>
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
