import React from "react";
import WorkExpFormCSS from "./WorkExpForm.module.css";

const WorkExpForm = (props) => {
  const updateWorkForm = (e) => {
    props.updateWorkExperience(
      props.id,
      e.target.getAttribute("property"),
      e.target.value
    );
  };
  const deleteWorkForm = () => {
    props.deleteWorkExperience(props.id);
  };
  const { position, company, city, from, to } = props.workExperience;
  return (
    <div className={WorkExpFormCSS.container}>
      <form className={WorkExpFormCSS.form}>
        <input
          type="text"
          className={WorkExpFormCSS.input}
          placeholder="Position"
          value={position}
          property="position"
          onChange={updateWorkForm}
        />
        <input
          type="text"
          className={WorkExpFormCSS.input}
          placeholder="Company"
          value={company}
          property="company"
          onChange={updateWorkForm}
        />
        <input
          type="text"
          className={WorkExpFormCSS.input}
          placeholder="City"
          value={city}
          property="city"
          onChange={updateWorkForm}
        />
        <input
          type="text"
          placeholder="From"
          className={WorkExpFormCSS.input}
          value={from}
          property="from"
          onChange={updateWorkForm}
        />
        <input
          type="text"
          placeholder="To"
          className={WorkExpFormCSS.input}
          value={to}
          property="to"
          onChange={updateWorkForm}
        />
      </form>
      <button className="delete-button" onClick={deleteWorkForm}>
        DELETE
      </button>
    </div>
  );
};

export default WorkExpForm;
