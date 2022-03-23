import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { toggleShowCountryDetail, fetchCountryDetail } from "../actions";
import arrowBack from "../image/arrow-back-outline.svg";
import arrowBackDark from "../image/arrow-back-dark.svg";
import restCountries from "../apis/restCountries";

const Country = (props) => {
  const [borders, setBorders] = useState([]);

  useEffect(() => {
    setBorders([]);
  }, [props.selectedCountry.borders]);

  useEffect(() => {
    const fetchCountriesName = async (alpha3CodeArray) => {
      alpha3CodeArray.map(async (alpha3Code) => {
        const response = await restCountries.get(`/alpha/${alpha3Code}`);
        setBorders((prevState) => {
          if (prevState.includes(response.data.name)) return;
          return [...prevState, response.data.name];
        });
      });
    };

    props.selectedCountry.borders &&
      fetchCountriesName(props.selectedCountry.borders);
  }, [props.selectedCountry.borders]);

  const topLevelDomain = props.selectedCountry.topLevelDomain.join(", ");

  const currencies = props.selectedCountry.currencies
    .map((cur) => cur.name)
    .join(", ");

  const languages = props.selectedCountry.languages
    .map((lang) => lang.name)
    .join(", ");

  const renderBorderCountry = props.selectedCountry.borders
    ? borders.map((border) => {
        return (
          <button
            className="country-detail__border-btn"
            key={border}
            onClick={() => props.fetchCountryDetail(border)}
          >
            {border}
          </button>
        );
      })
    : "None";

  return (
    <main className="country-detail">
      <button
        className="country-detail__back-btn"
        onClick={props.toggleShowCountryDetail}
      >
        <img
          src={props.darkMode ? `${arrowBack}` : `${arrowBackDark}`}
          alt="back"
          className="country-detail__back-svg"
        />
        Back
      </button>
      <div className="country-detail__main">
        <img
          className="country-detail__flag"
          src={props.selectedCountry.flag}
          alt={`${props.selectedCountry.name} flag`}
        />
        <div className="country-detail__data-block">
          <h1 className="country-detail__name">{props.selectedCountry.name}</h1>
          <div className="country-detail__detail-block">
            <p>
              <span className="country-detail__basic">Native Name: </span>
              <span className="country-detail__data">
                {props.selectedCountry.nativeName}
              </span>
            </p>
            <p>
              <span className="country-detail__basic">Population: </span>
              <span className="country-detail__data">
                {props.selectedCountry.population.toLocaleString("en-US")}
              </span>
            </p>
            <p>
              <span className="country-detail__basic">Region: </span>
              <span className="country-detail__data">
                {props.selectedCountry.region}
              </span>
            </p>
            <p>
              <span className="country-detail__basic">Sub Region: </span>
              <span className="country-detail__data">
                {props.selectedCountry.subregion}
              </span>
            </p>
            <p>
              <span className="country-detail__basic">Capital: </span>
              <span className="country-detail__data">
                {props.selectedCountry.capital}
              </span>
            </p>
            <p>
              <span className="country-detail__basic">Top Level Domain: </span>
              <span className="country-detail__data">{topLevelDomain}</span>
            </p>
            <p>
              <span className="country-detail__basic">Currencies: </span>
              <span className="country-detail__data">{currencies}</span>
            </p>
            <p>
              <span className="country-detail__basic">Language: </span>
              <span className="country-detail__data">{languages}</span>
            </p>
          </div>

          <div className="country-detail__border-block">
            <p className="country-detail__basic">Border Countries: </p>
            {renderBorderCountry}
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedCountry: state.countryDetail,
    darkMode: state.darkMode,
  };
};

export default connect(mapStateToProps, {
  toggleShowCountryDetail,
  fetchCountryDetail,
})(Country);
