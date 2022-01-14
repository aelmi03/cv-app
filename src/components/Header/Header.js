import React from "react";
import HeaderCSS from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={HeaderCSS.header}>
      <h1 className={HeaderCSS.title}>CV MAKER</h1>
    </header>
  );
};

export default Header;
