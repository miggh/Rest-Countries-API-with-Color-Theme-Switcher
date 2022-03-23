import React from "react";
import { connect } from "react-redux";
import { fetchAllCountries } from "../actions";

import CountryBlock from "./CountryBlock";

class CountryBlocks extends React.Component {
  componentDidMount() {
    this.props.fetchAllCountries();
  }

  renderCountryBlocks() {
    return this.props.countries.map(
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
    return <main className="country__blocks">{this.renderCountryBlocks()}</main>;
  }
}

const mapStateToProps = (state) => {
  return { countries: state.countries };
};

export default connect(mapStateToProps, { fetchAllCountries })(CountryBlocks);
