import React from "react";
import propTypes from "prop-types";

const Header = props => {
  return (
    <header>
      <p>{props.textLabel}</p>
      <h3>{props.textTitle}</h3>
    </header>
  );
};

Header.propTypes = {
  textLabel: propTypes.string.isRequired,
  textTitle: propTypes.string.isRequired,
};

export default Header;
