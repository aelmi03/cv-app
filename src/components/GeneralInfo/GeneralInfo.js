import React, { Component } from "react";
import FormHeader from "../FormHeader/FormHeader";
import GeneralInfoCSS from "./GeneralInfo.module.css";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.generalInfoListener = this.generalInfoListener.bind(this);
  }
  generalInfoListener(e) {
    this.props.updateGeneralInfo(
      e.target.getAttribute("property"),
      e.target.value
    );
  }
  render() {
    const { firstName, lastName, email, phoneNumber, address, description } =
      this.props.generalInfo;
    return (
      <div className={GeneralInfoCSS.container}>
        <FormHeader title="General" />
        <form className={GeneralInfoCSS.form}>
          <input
            type="text"
            value={firstName}
            onChange={this.generalInfoListener}
            className={GeneralInfoCSS.input}
            property="firstName"
            placeholder="First Name"
          />
          <input
            type="text"
            value={lastName}
            onChange={this.generalInfoListener}
            className={GeneralInfoCSS.input}
            property="lastName"
            placeholder="Last Name"
          />
          <input
            type="email"
            value={email}
            property="email"
            onChange={this.generalInfoListener}
            className={GeneralInfoCSS.input}
            placeholder="Email"
          />
          <input
            type="tel"
            value={phoneNumber}
            property="phoneNumber"
            onChange={this.generalInfoListener}
            className={GeneralInfoCSS.input}
            placeholder="Phone Number"
          />
          <input
            type="text"
            property="address"
            value={address}
            onChange={this.generalInfoListener}
            className={GeneralInfoCSS.input}
            placeholder="Address"
          />
          <textarea
            value={description}
            property="description"
            onChange={this.generalInfoListener}
            className={GeneralInfoCSS.textarea}
            placeholder="Description"
          ></textarea>
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
