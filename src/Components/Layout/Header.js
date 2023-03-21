import React, { Fragment } from "react";
import Meals from "../../Assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Hot Meals</h1>
        <HeaderCartButton/>
      </header>
      <div className={styles["main-image"]}>
        <img src={Meals} alt="All Meals on the Table." />
      </div>
    </Fragment>
  );
};

export default Header;
