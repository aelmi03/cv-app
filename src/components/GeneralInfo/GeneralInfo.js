import React, { Component } from "react";
import GeneralInfoCSS from "./GeneralInfo.module.css";

class GeneralInfo extends Component {
  render() {
    const { firstName, lastName, email, phoneNumber, address, description } =
      this.props.generalInfo;
    return (
      <div className={GeneralInfoCSS.container}>
        <h1 className={GeneralInfoCSS.heading}>General Information</h1>
        <form className={GeneralInfoCSS.form}>
          <input
            type="text"
            value={firstName}
            className={GeneralInfoCSS.input}
            placeholder="First Name"
          />
          <input
            type="text"
            value={lastName}
            className={GeneralInfoCSS.input}
            placeholder="Last Name"
          />
          <input
            type="email"
            value={email}
            className={GeneralInfoCSS.input}
            placeholder="Email"
          />
          <input
            type="tel"
            value={phoneNumber}
            className={GeneralInfoCSS.input}
            placeholder="Phone Number"
          />
          <input
            type="text"
            value={address}
            className={GeneralInfoCSS.input}
            placeholder="Address"
          />
          <textarea
            value={description}
            className={GeneralInfoCSS.textarea}
            placeholder="Description"
          ></textarea>
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
