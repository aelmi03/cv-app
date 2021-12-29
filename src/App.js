import React, { Component } from "react";
import Header from "./components/Header/Header";
import GeneralInfo from "./components/GeneralInfo/GeneralInfo";
import EducationalInfo from "./components/EducationalInfo/EducationalInfo.js";
import WorkExpInfo from "./components/WorkExpInfo/WorkExpInfo";
import SkillInfo from "./components/SkillInfo/SkillInfo";
import LivePreview from "./components/LivePreview/LivePreview";
import uniqid from "uniqid";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    console.log("hello");
    super(props);
    this.state = {
      generalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        description: "",
      },
      educations: [
        {
          institution: "",
          degree: "",
          from: "",
          to: "",
          id: uniqid(),
        },
      ],
      workExperiences: [
        {
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
          id: uniqid(),
        },
      ],
      skills: [
        {
          skill: "",
          id: uniqid(),
        },
      ],
    };
    this.updateGeneralInfo = this.updateGeneralInfo.bind(this);
    this.updateEducationalInfo = this.updateEducationalInfo.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.updateWorkExperience = this.updateWorkExperience.bind(this);
    this.deleteWorkExperience = this.deleteWorkExperience.bind(this);
    this.addWorkExperience = this.addWorkExperience.bind(this);
    this.updateSkill = this.updateSkill.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
    this.addSkill = this.addSkill.bind(this);
  }
  updateGeneralInfo(propertyName, propertyValue) {
    const newGeneralInfoObject = JSON.parse(
      JSON.stringify(this.state.generalInfo)
    );
    newGeneralInfoObject[propertyName] = propertyValue;
    this.setState({
      generalInfo: newGeneralInfoObject,
    });
  }
  updateEducationalInfo(id, property, value) {
    const newEducations = this.state.educations.map((education) => {
      if (education.id === id) {
        education[property] = value;
      }
      return education;
    });
    this.setState({
      educations: newEducations,
    });
  }
  updateWorkExperience(id, property, value) {
    const newWorkExperiences = this.state.workExperiences.map(
      (workExperience) => {
        if (workExperience.id === id) {
          workExperience[property] = value;
        }
        return workExperience;
      }
    );
    this.setState({
      workExperiences: newWorkExperiences,
    });
  }
  updateSkill(id, value) {
    const newSkills = this.state.skills.map((skillObject) => {
      if (skillObject.id === id) {
        skillObject.skill = value;
      }
      return skillObject;
    });
    this.setState({
      skills: newSkills,
    });
  }
  addEducation() {
    const newEducations = [
      ...this.state.educations,
      {
        institution: "",
        degree: "",
        from: "",
        to: "",
        id: uniqid(),
      },
    ];
    this.setState({
      educations: newEducations,
    });
  }
  addWorkExperience() {
    const newWorkExperiences = [
      ...this.state.workExperiences,
      {
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
        id: uniqid(),
      },
    ];
    this.setState({
      workExperiences: newWorkExperiences,
    });
  }
  addSkill() {
    const newSkills = [
      ...this.state.skills,
      {
        skill: "",
        id: uniqid(),
      },
    ];
    this.setState({
      skills: newSkills,
    });
  }
  deleteEducation(id) {
    const newEducations = this.state.educations.filter(
      (education) => education.id !== id
    );
    this.setState({
      educations: newEducations,
    });
  }
  deleteWorkExperience(id) {
    const newWorkExperiences = this.state.workExperiences.filter(
      (workExperience) => workExperience.id !== id
    );
    this.setState({
      workExperiences: newWorkExperiences,
    });
  }
  deleteSkill(id) {
    const newSkills = this.state.skills.filter((skill) => skill.id !== id);
    this.setState({
      skills: newSkills,
    });
  }
  render() {
    return (
      <div className="app">
        <Header />
        <div className="main-section">
          <div className="cv-forms-section">
            <GeneralInfo
              generalInfo={this.state.generalInfo}
              updateGeneralInfo={this.updateGeneralInfo}
            />
            <EducationalInfo
              educations={this.state.educations}
              updateEducationalInfo={this.updateEducationalInfo}
              addEducation={this.addEducation}
              deleteEducation={this.deleteEducation}
            />
            <WorkExpInfo
              workExperiences={this.state.workExperiences}
              updateWorkExperience={this.updateWorkExperience}
              addWorkExperience={this.addWorkExperience}
              deleteWorkExperience={this.deleteWorkExperience}
            />
            <SkillInfo
              skills={this.state.skills}
              updateSkill={this.updateSkill}
              addSkill={this.addSkill}
              deleteSkill={this.deleteSkill}
            />
          </div>
          <LivePreview generalInfo={this.state.generalInfo} />
        </div>
      </div>
    );
  }
}

export default App;
