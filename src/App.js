import React, { Component } from "react";
import Header from "./components/Header/Header";
import GeneralInfo from "./components/GeneralInfo/GeneralInfo";
import EducationalInfo from "./components/EducationalInfo/EducationalInfo.js";
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
    };
    this.updateGeneralInfo = this.updateGeneralInfo.bind(this);
    this.updateEducationalInfo = this.updateEducationalInfo.bind(this);
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
    console.log(newEducations);
    this.setState({
      educations: newEducations,
    });
  }
  render() {
    return (
      <div className="app">
        <Header />
        <div className="cv-forms-section">
          <GeneralInfo
            generalInfo={this.state.generalInfo}
            updateGeneralInfo={this.updateGeneralInfo}
          />
          <EducationalInfo
            educations={this.state.educations}
            updateEducationalInfo={this.updateEducationalInfo}
          />
        </div>
      </div>
    );
  }
}

export default App;
