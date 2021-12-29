import React, { Component } from "react";
import GeneralPreview from "../GeneralPreview/GeneralPreview";
import LivePreviewCSS from "./LivePreview.module.css";

class LivePreview extends Component {
  render() {
    const { firstName, lastName } = this.props.generalInfo;
    return (
      <div className={LivePreviewCSS.container}>
        <h1 className={LivePreviewCSS.title}>{`${firstName} ${lastName}`}</h1>
        <div className={LivePreviewCSS.information}>
          <GeneralPreview />
        </div>
      </div>
    );
  }
}

export default LivePreview;
