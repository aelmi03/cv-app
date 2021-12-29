import React, { Component } from "react";
import LivePreviewCSS from "./LivePreview.module.css";

class LivePreview extends Component {
  render() {
    const { firstName, lastName } = this.props.generalInfo;
    return (
      <div className={LivePreviewCSS.container}>
        <h1 className={LivePreviewCSS.title}>{`${firstName} ${lastName}`}</h1>
      </div>
    );
  }
}

export default LivePreview;
