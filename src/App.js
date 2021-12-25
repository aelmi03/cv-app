import React, { Component } from "react";
import Header from "./components/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <h1 className="h1">Hello</h1>
      </div>
    );
  }
}

export default App;
