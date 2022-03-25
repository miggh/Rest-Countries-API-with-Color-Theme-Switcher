import React from "react";
import { connect } from "react-redux";
import { fetchRegionCountries, fetchAllCountries } from "../actions";
import "../sass/components/_dropdown.scss";

const RegionDropdown = ({ fetchRegionCountries, fetchAllCountries }) => {
  const handleChange = (event) => {
    if (event.target.value === "all") {
      fetchAllCountries();
    } else {
      fetchRegionCountries(event.target.value);
    }
  };
  return (
    <React.Fragment>
      <select
        className="dropdown"
        onChange={handleChange}
        defaultValue="default"
        title="region"
      >
        <option className="dropdown__option" value="default" disabled hidden>
          Filter by Region
        </option>
        <option className="dropdown__option" value="africa">
          Africa
        </option>
        <option className="dropdown__option" value="americas">
          Americas
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
        <option className="dropdown__option" value="all">
          All Regions
        </option>
      </select>
    </React.Fragment>
  );
};

export default connect(null, { fetchRegionCountries, fetchAllCountries })(
  RegionDropdown
);
