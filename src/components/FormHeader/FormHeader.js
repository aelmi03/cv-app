import React, { Component } from "react";
import FormHeaderCSS from "./FormHeader.module.css";

class FormHeader extends Component {
  render() {
    return <h1 className={FormHeaderCSS.heading}>{this.props.title}</h1>;
  }
}

export default FormHeader;
