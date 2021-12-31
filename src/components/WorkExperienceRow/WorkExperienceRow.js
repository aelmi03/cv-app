import React, { Component } from "react";
import WorkExperienceRowCSS from "./WorkExperienceRow.module.css";

class WorkExperienceRow extends Component {
  render() {
    const { company, position, city, from, to } = this.props.workExperience;
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
  }
}

export default WorkExperienceRow;
