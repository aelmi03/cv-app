import React, { Component } from "react";
import HeaderCSS from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <header className={HeaderCSS.header}>
        <h1 className={HeaderCSS.title}>CV MAKER</h1>
      </header>
    );
  }
}

export default Header;
