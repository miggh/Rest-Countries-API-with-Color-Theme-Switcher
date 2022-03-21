import React from "react";
import { connect } from "react-redux";
import { fetchRegionCountries } from "../actions";

const RegionDropdown = ({ fetchRegionCountries }) => {
  const handleChange = (event) => {
    fetchRegionCountries(event.target.value);
  };
  return (
    <React.Fragment>
      <select
        className="dropdown"
        onChange={handleChange}
        defaultValue="default"
      >
        <option className="dropdown__option" value="default" disabled hidden>
          Filter by Region
        </option>
        <option className="dropdown__option" value="africa">
          Africa
        </option>
        <option className="dropdown__option" value="america">
          America
        </option>
        <option className="dropdown__option" value="asia">
          Asia
        </option>
        <option className="dropdown__option" value="europe">
          Europe
        </option>
        <option className="dropdown__option" value="oceania">
          Oceania
        </option>
      </select>
    </React.Fragment>
  );
};

export default connect(null, { fetchRegionCountries })(RegionDropdown);
