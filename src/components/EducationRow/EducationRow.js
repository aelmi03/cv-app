import React from "react";
import EducationRowCSS from "./EducationRow.module.css";

const EducationRow = (props) => {
  const { institution, degree, from, to } = props.education;
  return (
    <div className={EducationRowCSS.container}>
      <p className={EducationRowCSS.years}>{`${from} - ${to}`}</p>
      <div className={EducationRowCSS.info}>
        <p className={EducationRowCSS.school}>{institution}</p>
        <p className={EducationRowCSS.degree}>{degree}</p>
      </div>
    </div>
  );
};

export default EducationRow;
