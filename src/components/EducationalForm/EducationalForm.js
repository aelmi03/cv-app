import React from "react";
import EducationalFormCSS from "./EducationalForm.module.css";

const EducationalForm = (props) => {
  const educationalFormListener = (e) => {
    props.updateEducationalInfo(
      props.id,
      e.target.getAttribute("property"),
      e.target.value
    );
  };
  const deleteEducationListener = () => {
    props.deleteEducation(props.id);
  };
  const { institution, degree, from, to } = props.education;
  return (
    <div className={EducationalFormCSS.container}>
      <form className={EducationalFormCSS.form}>
        <input
          type="text"
          className={EducationalFormCSS.input}
          placeholder="Name Of Institution"
          property="institution"
          value={institution}
          onChange={educationalFormListener}
        />
        <input
          type="text"
          className={EducationalFormCSS.input}
          placeholder="Name Of Degree"
          property="degree"
          value={degree}
          onChange={educationalFormListener}
        />
        <input
          type="text"
          className={EducationalFormCSS.input}
          placeholder="From"
          property="from"
          value={from}
          onChange={educationalFormListener}
        />
        <input
          type="text"
          className={EducationalFormCSS.input}
          placeholder="To"
          property="to"
          value={to}
          onChange={educationalFormListener}
        />
      </form>
      <button className="delete-button" onClick={deleteEducationListener}>
        DELETE
      </button>
    </div>
  );
};

export default EducationalForm;
