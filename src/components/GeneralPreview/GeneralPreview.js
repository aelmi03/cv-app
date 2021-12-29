import React, { Component } from "react";
import PreviewHeading from "../PreviewHeading/PreviewHeading";
import GeneralPreviewCSS from "./GeneralPreview.module.css";

class GeneralPreview extends Component {
  render() {
    const { phoneNumber, email, address } = this.props.generalInfo;
    return (
      <div className={GeneralPreviewCSS.container}>
        <PreviewHeading title="Personal Details" />
        <div className={GeneralPreviewCSS.general}>
          <p className={GeneralPreviewCSS.info}>
            {`Phone-Number : ${phoneNumber}`}{" "}
          </p>
          <p className={GeneralPreviewCSS.info}>{`Email : ${email}`} </p>
          <p className={GeneralPreviewCSS.info}>{`Address : ${address}`} </p>
        </div>
      </div>
    );
  }
}

export default GeneralPreview;
