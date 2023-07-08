import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>Team Members</h2>
        <HeaderButton onClick={props.onAdd} />
      </header>
    </Fragment>
  );
};

export default Header;
