import React from "react";
import PropTypes from "prop-types";
import "./FilterButton.css";
import { useSelector } from "react-redux";
import { setSearchTag } from "../../actions/actions";

function FilterButton({ tag }) {
  const searchTag = useSelector((state) => state.searchTag);
  function handleClick() {
    setSearchTag(tag);
  }
  return (
    <button
      className={`filter-button ${searchTag === tag && "filter-button_active"}`}
      onClick={handleClick}
      type="button"
    >
      {tag}
    </button>
  );
}

FilterButton.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default FilterButton;
