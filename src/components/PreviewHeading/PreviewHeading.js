import React, { Component } from "react";
import PreviewHeadingCSS from "./PreviewHeading.module.css";

class PreviewHeading extends Component {
  render() {
    return (
      <div className={PreviewHeadingCSS.container}>
        <h2 className={PreviewHeadingCSS.title}>{this.props.title}</h2>
        <hr className={PreviewHeadingCSS.hr}></hr>
      </div>
    );
  }
}

export default PreviewHeading;
