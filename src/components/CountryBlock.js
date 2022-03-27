import React from "react";
import { connect } from "react-redux";
import { fetchCountryDetail, toggleShowCountryDetail } from "../actions";

class CountryBlock extends React.Component {
  fetchCountryHandler = async () => {
    await this.props.fetchCountryDetail(this.props.name);
    this.props.toggleShowCountryDetail();
  };
  render() {
    return (
      <div className="country__block" onClick={this.fetchCountryHandler}>
        <img
          className="country__block__flag"
          src={this.props.flagUrl}
          alt="Country Flag"
        />
        <div className="country__block__text">
          <h2 className="country__block__name">{this.props.name}</h2>
          <p>
            <span className="country__block__basic">Population: </span>
            <span className="country__block__data">
              {this.props.population.toLocaleString("en-US")}
            </span>
          </p>
          <p>
            <span className="country__block__basic">Region: </span>
            <span className="country__block__data">{this.props.region}</span>
          </p>
          <p>
            <span className="country__block__basic">Capital: </span>
            <span className="country__block__data">
              {this.props.capital ? this.props.capital : "None"}
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default connect(null, {
  fetchCountryDetail,
  toggleShowCountryDetail,
})(CountryBlock);
