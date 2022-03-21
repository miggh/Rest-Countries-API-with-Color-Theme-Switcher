import React from "react";
import { connect } from "react-redux";
import { toggleDarkMode } from "../actions";
import moonIcon from "../image/moon-outline.svg";
import sunIcon from "../image/sunny-outline.svg";

const Header = (props) => {
  return (
    <header className="header">
      <h1>Where in the world?</h1>
      <button className="mode-toggler" onClick={props.toggleDarkMode}>
        <img
          className="mode-toggler__icon"
          src={props.darkMode ? `${sunIcon}` : `${moonIcon}`}
          alt="mode"
        />
        <p className="mode-toggler__text">
          {props.darkMode ? "Light Mode" : "Dark Mode"}
        </p>
      </button>
    </header>
  );
};

const mapStateToProps = (state) => {
  return { darkMode: state.toggleDarkMode };
};
export default connect(mapStateToProps, { toggleDarkMode })(Header);
