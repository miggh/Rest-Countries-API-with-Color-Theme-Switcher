import React from "react";
import "../style.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import RegionDropdown from "./RegionDropdown";
import CountryBlocks from "./CountryBlocks";
import Country from "./Country";
import { connect } from "react-redux";

const App = (props) => {
  return (
    <div className={props.darkMode ? "dark" : ""}>
      <Header />
      {!props.showCountryDetail && (
        <div className="search-section">
          <SearchBar />
          <RegionDropdown />
        </div>
      )}
      {props.showCountryDetail && <Country />}
      {!props.showCountryDetail && <CountryBlocks />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showCountryDetail: state.showCountryDetail,
    darkMode: state.toggleDarkMode,
  };
};

export default connect(mapStateToProps)(App);
