import React from "react";
import FormHeader from "../FormHeader/FormHeader";
import GeneralInfoCSS from "./GeneralInfo.module.css";

const GeneralInfo = (props) => {
  const generalInfoListener = (e) => {
    props.updateGeneralInfo(e.target.getAttribute("property"), e.target.value);
  };
  const { firstName, lastName, email, phoneNumber, address, description } =
    props.generalInfo;
  return (
    <div className={GeneralInfoCSS.container}>
      <FormHeader title="General" />
      <form className={GeneralInfoCSS.form}>
        <input
          type="text"
          value={firstName}
          onChange={generalInfoListener}
          className={GeneralInfoCSS.input}
          property="firstName"
          placeholder="First Name"
        />
        <input
          type="text"
          value={lastName}
          onChange={generalInfoListener}
          className={GeneralInfoCSS.input}
          property="lastName"
          placeholder="Last Name"
        />
        <input
          type="email"
          value={email}
          property="email"
          onChange={generalInfoListener}
          className={GeneralInfoCSS.input}
          placeholder="Email"
        />
        <input
          type="tel"
          value={phoneNumber}
          property="phoneNumber"
          onChange={generalInfoListener}
          className={GeneralInfoCSS.input}
          placeholder="Phone Number"
        />
        <input
          type="text"
          property="address"
          value={address}
          onChange={generalInfoListener}
          className={GeneralInfoCSS.input}
          placeholder="Address"
        />
        <textarea
          value={description}
          property="description"
          onChange={generalInfoListener}
          className={GeneralInfoCSS.textarea}
          placeholder="Description"
        ></textarea>
      </form>
    </div>
  );
};

export default GeneralInfo;
