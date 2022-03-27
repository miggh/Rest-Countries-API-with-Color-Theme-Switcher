import React from "react";
import { connect } from "react-redux";
import { fetchAllCountries, searching, regionFilter } from "../actions";
import CountryBlock from "./CountryBlock";
import arrowBack from "../image/arrow-back-outline.svg";
import arrowBackDark from "../image/arrow-back-dark.svg";
import "../sass/layout/_blocks.scss";

class CountryBlocks extends React.Component {
  backBtnHandler = () => {
    this.props.searching(false);
    this.props.regionFilter("All");
  };

  filterRegion = (countries) => {
    if (this.props.selectedRegion === "All") {
      return countries;
    }
    return countries.filter(
      (country) => country.region === this.props.selectedRegion
    );
  };

  showBackButton = () => {
    if (this.props.isSearching && this.props.userInputSearch === "No results.")
      return false;

    const filterCountriesList = this.props.isSearching
      ? this.filterRegion(this.props.userInputSearch)
      : this.filterRegion(this.props.allCountries);
    if (
      filterCountriesList.length === 0 ||
      filterCountriesList.length === 250
    ) {
      return false;
    } else return true;
  };

  renderNoResult = () => {
    return (
      <div>
        <h1 className="error-message">No Results.</h1>
        <button
          className="country__blocks__back-btn"
          onClick={this.backBtnHandler}
        >
          <img
            src={this.props.darkMode ? `${arrowBackDark}` : `${arrowBack}`}
            alt="back"
            className="country-detail__back-svg"
          />
          Back to All Countries
        </button>
      </div>
    );
  };

  renderCountryBlocks() {
    const filterCountriesList = this.props.isSearching
      ? this.filterRegion(this.props.userInputSearch)
      : this.filterRegion(this.props.allCountries);

    if (
      (this.props.userInputSearch === "No results." &&
        this.props.isSearching) ||
      (filterCountriesList.length === 0 &&
        this.props.allCountries.length === 250)
    )
      return this.renderNoResult();

    return filterCountriesList.map(
      ({ flags, name, population, region, capital, cioc }) => {
        return (
          <CountryBlock
            key={name}
            flagUrl={flags.svg}
            name={name}
            population={population}
            region={region}
            capital={capital}
            cioc={cioc}
          />
        );
      }
    );
  }

  render() {
    return (
      <div className="country__blocks">
        {this.showBackButton() && (
          <button
            className="country__blocks__back-btn"
            onClick={this.backBtnHandler}
          >
            <img
              src={this.props.darkMode ? `${arrowBackDark}` : `${arrowBack}`}
              alt="back"
              className="country-detail__back-svg"
            />
            Back to All Countries
          </button>
        )}
        {this.renderCountryBlocks()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allCountries: state.allCountries,
    userInputSearch: state.userInputSearch,
    darkMode: state.darkMode,
    selectedRegion: state.selectedRegion,
    isSearching: state.isSearching,
  };
};

export default connect(mapStateToProps, {
  fetchAllCountries,
  searching,
  regionFilter,
})(CountryBlocks);
