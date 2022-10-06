import React from "react";
import "./Filter.css";
import FilterButton from "../filter-button/FilterButton";
import FilterInput from "../filter-input/FilterInput";
import { useSelector } from "react-redux";
import { setDifficulty, setSearchTag, setCurrentChampionList } from "../../actions/actions";
import roleTags from "../../constants/constants";
import PropTypes from "prop-types";
import FilterDifficulty from "../filter-difficulty/FilterDifficulty";

function Filter({ setIsFaded }) {
  const champions = useSelector((state) => state.champions);
  const difficulty = useSelector((state) => state.currentDifficulty);
  const searchTag = useSelector((state) => state.searchTag);

  React.useEffect(() => {
    handleFilter(searchTag);
  }, [searchTag, difficulty]);

  function getFilterData(text) {
    setIsFaded(true);
    if (text.trim().length > 0) {
      const filteredArray = champions.filter((el) =>
        el.name.toLowerCase().includes(text)
      );
      setTimeout(fadedFilterResults, 500, filteredArray);
      setSearchTag("");
      setDifficulty(0);
    } else {
      setTimeout(fadedFilterResults, 500, champions);
      setSearchTag("All");
      setDifficulty(0);
    }
  }
  function fadedFilterResults(arr) {
    setCurrentChampionList(arr);
    setIsFaded(false);
  }
  function countChampionDifficulty() {
    switch (difficulty) {
      case 1:
        return [1, 2, 3];
      case 2:
        return [4, 5, 6, 7];
      case 3:
        return [8, 9, 10];
      default:
        return 0;
    }
  }
  const handleFilter = React.useCallback(() => {
    setIsFaded(true);
    let filteredArray = champions.filter((el) => el.tags.includes(searchTag));
    if (searchTag === "All") {
      filteredArray = champions;
    }
    if (difficulty === 0) {
      filteredArray.length
        ? setTimeout(fadedFilterResults, 500, filteredArray)
        : setTimeout(fadedFilterResults, 500, champions);
      return;
    }
    const newFilteredArray = filteredArray.filter((el) =>
      countChampionDifficulty().includes(el.info.difficulty)
    );
    newFilteredArray.length
      ? setTimeout(fadedFilterResults, 500, newFilteredArray)
      : setTimeout(fadedFilterResults, 500, champions);
  }, [searchTag, difficulty]);

  return (
    <div className="filter-bar">
      <div className="triangle triangle-top"></div>
      <div className="triangle triangle-bottom"></div>
      <FilterInput getFilterData={getFilterData} />
      <div className="champion-filter-button-container">
        {roleTags.map((el, i) => {
          return <FilterButton key={i} tag={el} />;
        })}
      </div>
      <FilterDifficulty />
    </div>
  );
}
Filter.propTypes = {
  setIsFaded: PropTypes.func.isRequired,
};
export default Filter;
