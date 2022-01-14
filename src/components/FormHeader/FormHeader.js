import React from "react";
import FormHeaderCSS from "./FormHeader.module.css";

const FormHeader = (props) => {
  return <h1 className={FormHeaderCSS.heading}>{props.title}</h1>;
};

export default FormHeader;
