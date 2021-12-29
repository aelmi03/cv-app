import React, { Component } from "react";
import GeneralPreview from "../GeneralPreview/GeneralPreview";
import LivePreviewCSS from "./LivePreview.module.css";

class LivePreview extends Component {
  render() {
    const { generalInfo } = this.props;
    const { firstName, lastName } = generalInfo;
    return (
      <div className={LivePreviewCSS.container}>
        <h1 className={LivePreviewCSS.title}>{`${firstName} ${lastName}`}</h1>
        <div className={LivePreviewCSS.information}>
          <div className={LivePreviewCSS.minorInfo}>
            <GeneralPreview generalInfo={generalInfo} />
          </div>
        </div>
      </div>
    );
  }
}

export default LivePreview;
