import React, { Component } from "react";
import Header from "./components/Header/Header";
import GeneralInfo from "./components/GeneralInfo/GeneralInfo";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <Header />
        <div className="cv-forms-section">
          <GeneralInfo />
        </div>
      </div>
    );
  }
}

export default App;
