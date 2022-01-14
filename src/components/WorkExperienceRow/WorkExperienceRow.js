import React from "react";
import WorkExperienceRowCSS from "./WorkExperienceRow.module.css";

const WorkExperienceRow = (props) => {
  const { company, position, city, from, to } = props.workExperience;
  return (
    <div className={WorkExperienceRowCSS.container}>
      <div className={WorkExperienceRowCSS.minorInfo}>
        <p className={WorkExperienceRowCSS.years}>{`${from} - ${to}`}</p>
        <p className={WorkExperienceRowCSS.city}>{city}</p>
      </div>
      <div className={WorkExperienceRowCSS.mainInfo}>
        <p className={WorkExperienceRowCSS.company}>{company}</p>
        <p className={WorkExperienceRowCSS.position}>{position}</p>
      </div>
    </div>
  );
};

export default WorkExperienceRow;
