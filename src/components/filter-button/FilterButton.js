import React from "react";
import PropTypes from "prop-types";
import "./FilterButton.css";

function FilterButton({ tag, getFilterByTag }) {
  function handleClick() {
    getFilterByTag(tag);
  }
  return (
    <button className="filter-button" onClick={handleClick} type="button">
      {tag}
    </button>
  );
}

FilterButton.propTypes = {
  tag: PropTypes.string.isRequired,
  getFilterByTag: PropTypes.func.isRequired,
};

export default FilterButton;
