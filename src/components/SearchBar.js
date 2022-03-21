import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchSearchCountries } from "../actions";
import searchSvg from "../image/search-outline.svg";

const SearchBar = ({ fetchSearchCountries }) => {
  const [term, setTerm] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    fetchSearchCountries(term);
  };
  return (
    <div className="searchbar-block">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search for a country..."
          className="searchbar"
        />
        <img src={searchSvg} className="searchbar__icon" alt="search" />
      </form>
    </div>
  );
};

export default connect(null, { fetchSearchCountries })(SearchBar);
