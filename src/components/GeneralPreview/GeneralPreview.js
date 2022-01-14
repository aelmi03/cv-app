import React from "react";
import PreviewHeading from "../PreviewHeading/PreviewHeading";
import GeneralPreviewCSS from "./GeneralPreview.module.css";

const GeneralPreview = (props) => {
  const { phoneNumber, email, address } = props.generalInfo;
  return (
    <div className={GeneralPreviewCSS.container}>
      <PreviewHeading title="Personal Details" />
      <div className={GeneralPreviewCSS.general}>
        <p className={GeneralPreviewCSS.info}>
          <span className={GeneralPreviewCSS.span}>Phone-Number : </span>
          {`${phoneNumber}`}{" "}
        </p>
        <p className={GeneralPreviewCSS.info}>
          <span className={GeneralPreviewCSS.span}>Email : </span>
          {`${email}`}
        </p>
        <p className={GeneralPreviewCSS.info}>
          <span className={GeneralPreviewCSS.span}>Address : </span>
          {`${address}`}
        </p>{" "}
      </div>
    </div>
  );
};

export default GeneralPreview;
