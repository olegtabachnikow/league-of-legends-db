import React from "react";
import PropTypes from "prop-types";
import "./FilterButton.css";

function FilterButton({ tag, currentTag, setCurrentTag, getFilterByTag }) {
  function handleClick() {
    getFilterByTag(tag);
    setCurrentTag(tag);
  }
  return (
    <button className={`filter-button ${currentTag === tag && "filter-button_active"}`} onClick={handleClick} type="button">
      {tag}
    </button>
  );
}

FilterButton.propTypes = {
  tag: PropTypes.string.isRequired,
  currentTag: PropTypes.string.isRequired,
  getFilterByTag: PropTypes.func.isRequired,
  setCurrentTag: PropTypes.func.isRequired
};

export default FilterButton;
