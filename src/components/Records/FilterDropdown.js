import React, { Fragment } from "react";
import classes from "./FilterDropdown.module.css";

const FilterDropdown = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <section >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </section>
      </header>
    </Fragment>
  );
};

export default FilterDropdown;
