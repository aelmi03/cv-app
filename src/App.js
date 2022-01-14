import React, { useState } from "react";
import Header from "./components/Header/Header";
import GeneralInfo from "./components/GeneralInfo/GeneralInfo";
import EducationalInfo from "./components/EducationalInfo/EducationalInfo.js";
import WorkExpInfo from "./components/WorkExpInfo/WorkExpInfo";
import SkillInfo from "./components/SkillInfo/SkillInfo";
import LivePreview from "./components/LivePreview/LivePreview";
import uniqid from "uniqid";
import "./styles/App.css";

const App = (props) => {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    description: "",
  });
  const [educations, setEducations] = useState([
    {
      institution: "",
      degree: "",
      from: "",
      to: "",
      id: uniqid(),
    },
  ]);
  const [workExperiences, setWorkExperiences] = useState([
    {
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
      id: uniqid(),
    },
  ]);
  const [skills, setSkills] = useState([
    {
      skill: "",
      id: uniqid(),
    },
  ]);

  const updateGeneralInfo = (propertyName, propertyValue) => {
    const newGeneralInfoObject = JSON.parse(JSON.stringify(generalInfo));
    newGeneralInfoObject[propertyName] = propertyValue;
    setGeneralInfo(newGeneralInfoObject);
  };
  const updateEducationalInfo = (id, property, value) => {
    const newEducations = educations.map((education) => {
      if (education.id === id) {
        education[property] = value;
      }
      return education;
    });
    setEducations(newEducations);
  };
  const updateWorkExperience = (id, property, value) => {
    const newWorkExperiences = workExperiences.map((workExperience) => {
      if (workExperience.id === id) {
        workExperience[property] = value;
      }
      return workExperience;
    });
    setWorkExperiences(newWorkExperiences);
  };
  const updateSkill = (id, value) => {
    const newSkills = skills.map((skillObject) => {
      if (skillObject.id === id) {
        skillObject.skill = value;
      }
      return skillObject;
    });
    setSkills(newSkills);
  };
  const addEducation = () => {
    const newEducations = [
      ...educations,
      {
        institution: "",
        degree: "",
        from: "",
        to: "",
        id: uniqid(),
      },
    ];
    setEducations(newEducations);
  };
  const addWorkExperience = () => {
    const newWorkExperiences = [
      ...workExperiences,
      {
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
        id: uniqid(),
      },
    ];
    setWorkExperiences(newWorkExperiences);
  };
  const addSkill = () => {
    const newSkills = [
      ...skills,
      {
        skill: "",
        id: uniqid(),
      },
    ];
    setSkills(newSkills);
  };
  const deleteEducation = (id) => {
    const newEducations = educations.filter((education) => education.id !== id);
    setEducations(newEducations);
  };
  const deleteWorkExperience = (id) => {
    const newWorkExperiences = workExperiences.filter(
      (workExperience) => workExperience.id !== id
    );
    setWorkExperiences(newWorkExperiences);
  };
  const deleteSkill = (id) => {
    const newSkills = skills.filter((skill) => skill.id !== id);
    setSkills(newSkills);
  };
  return (
    <div className="app">
      <Header />
      <div className="main-section">
        <div className="cv-forms-section">
          <GeneralInfo
            generalInfo={generalInfo}
            updateGeneralInfo={updateGeneralInfo}
          />
          <EducationalInfo
            educations={educations}
            updateEducationalInfo={updateEducationalInfo}
            addEducation={addEducation}
            deleteEducation={deleteEducation}
          />
          <WorkExpInfo
            workExperiences={workExperiences}
            updateWorkExperience={updateWorkExperience}
            addWorkExperience={addWorkExperience}
            deleteWorkExperience={deleteWorkExperience}
          />
          <SkillInfo
            skills={skills}
            updateSkill={updateSkill}
            addSkill={addSkill}
            deleteSkill={deleteSkill}
          />
        </div>
        <LivePreview
          generalInfo={generalInfo}
          skills={skills}
          educations={educations}
          workExperiences={workExperiences}
        />
      </div>
    </div>
  );
};

export default App;
