import React, { Component } from "react";
import GeneralPreview from "../GeneralPreview/GeneralPreview";
import SkillsPreview from "../SkillsPreview/SkillsPreview";
import DescriptionPreview from "../DescriptionPreview/DescriptionPreview";
import LivePreviewCSS from "./LivePreview.module.css";

class LivePreview extends Component {
  render() {
    const { generalInfo, skills } = this.props;
    const { firstName, lastName, description } = generalInfo;
    return (
      <div className={LivePreviewCSS.container}>
        <h1 className={LivePreviewCSS.title}>{`${firstName} ${lastName}`}</h1>
        <div className={LivePreviewCSS.information}>
          <div className={LivePreviewCSS.mainInfo}>
            <DescriptionPreview description={description} />
          </div>
          <div className={LivePreviewCSS.minorInfo}>
            <GeneralPreview generalInfo={generalInfo} />
            <SkillsPreview skills={skills} />
          </div>
        </div>
      </div>
    );
  }
}

export default LivePreview;
