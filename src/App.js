import React, { Component } from "react";
import Header from "./components/Header/Header";
import GeneralInfo from "./components/GeneralInfo/GeneralInfo";
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
  }
  render() {
    return (
      <div className="app">
        <Header />
        <div className="cv-forms-section">
          <GeneralInfo generalInfo={this.state.generalInfo} />
        </div>
      </div>
    );
  }
}

export default App;
