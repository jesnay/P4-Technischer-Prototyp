import React from "react";
import styles from "./Header.module.css";
import title from "../../assets/Header.png";

function Header() {
  return (
    <div className={styles.Header}>
      <img className="titleImage" src={title} alt="title Image" />
    </div>
  );
}

export default Header;
