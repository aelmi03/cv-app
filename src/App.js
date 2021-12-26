import React, { Component } from "react";
import Header from "./components/Header/Header";
import GeneralInfo from "./components/GeneralInfo/GeneralInfo";
import EducationalInfo from "./components/EducationalInfo/EducationalInfo.js";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
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
    };
    this.updateGeneralInfo = this.updateGeneralInfo.bind(this);
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
  render() {
    return (
      <div className="app">
        <Header />
        <div className="cv-forms-section">
          <GeneralInfo
            generalInfo={this.state.generalInfo}
            updateGeneralInfo={this.updateGeneralInfo}
          />
          <EducationalInfo />
        </div>
      </div>
    );
  }
}

export default App;
