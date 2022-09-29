import React from "react";
import "./FilterInput.css";
import PropTypes from "prop-types";

function FilterInput({ getFilterData, getFilterByTag }) {
  const debounce = (fn, delay) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => fn(...args), delay);
    };
  };
  const debouncedHandler = debounce(
    (evt) => getFilterData(evt.target.value.toLowerCase()),
    1000
  );
  return (
    <label className="filter-label">
      <input className="filter-input" type="text" onKeyUp={debouncedHandler} placeholder="Search by champion name"/>
    </label>
  );
}
FilterInput.propTypes = {
  getFilterData: PropTypes.func.isRequired,
};

export default FilterInput;
