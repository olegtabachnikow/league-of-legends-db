import React from "react";
import "./Filter.css";
import FilterButton from "../filter-button/FilterButton";
import FilterInput from "../filter-input/FilterInput";
import { useSelector } from "react-redux";
import roleTags from "../../constants/constants";
import PropTypes from "prop-types";
import FilterDifficulty from "../filter-difficulty/FilterDifficulty";

function Filter({ setIsFaded, setCurrentChampionList }) {
  const [currentTag, setCurrentTag] = React.useState("All");
  const champions = useSelector((state) => state.champions);
  function getFilterData(text) {
    setIsFaded(true);
    if (text.trim().length > 0) {
      const filteredArray = champions.filter((el) =>
        el.name.toLowerCase().includes(text)
      );
      setTimeout(fadedFilterResults, 500, filteredArray);
      setCurrentTag("");
    } else {
      setTimeout(fadedFilterResults, 500, champions);
      setCurrentTag("All");
    }
  }
  function fadedFilterResults(arr) {
    setCurrentChampionList(arr);
    setIsFaded(false);
  }
  function filterByTags(tag) {
    setIsFaded(true);
    const filteredArray = champions.filter((el) => el.tags.includes(tag));
    filteredArray.length
      ? setTimeout(fadedFilterResults, 500, filteredArray)
      : setTimeout(fadedFilterResults, 500, champions);
  }
  return (
    <div className="filter-bar">
      <div className="triangle triangle-top"></div>
      <div className="triangle triangle-bottom"></div>
      <FilterInput getFilterData={getFilterData} />
      <div className="champion-filter-button-container">
        {roleTags.map((el, i) => {
          return (
            <FilterButton
              key={i}
              tag={el}
              getFilterByTag={filterByTags}
              currentTag={currentTag}
              setCurrentTag={setCurrentTag}
            />
          );
        })}
      </div>
      <FilterDifficulty />
    </div>
  );
}
Filter.propTypes = {
  setIsFaded: PropTypes.func.isRequired,
  setCurrentChampionList: PropTypes.func.isRequired,
};
export default Filter;
