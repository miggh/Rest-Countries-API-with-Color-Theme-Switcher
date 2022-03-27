import React, { useEffect } from "react";
import "../style.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import RegionDropdown from "./RegionDropdown";
import CountryBlocks from "./CountryBlocks";
import Country from "./Country";
import { connect } from "react-redux";
import { fetchAllCountries } from "../actions";

const App = (props) => {
  useEffect(() => {
    props.fetchAllCountries();
  }, []);

  return (
    <div className={props.darkMode ? "dark" : ""}>
      <Header />
      <main className="main">
        {!props.showCountryDetail && (
          <div className="search-section">
            <SearchBar />
            <RegionDropdown />
          </div>
        )}
        {props.showCountryDetail && <Country />}
        {props.allCountries.length !== 0 && !props.showCountryDetail && (
          <CountryBlocks />
        )}
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showCountryDetail: state.showCountryDetail,
    darkMode: state.darkMode,
    allCountries: state.allCountries,
  };
};

export default connect(mapStateToProps, { fetchAllCountries })(App);
