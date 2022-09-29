import React from "react";
import "./ChampionsList.css";
import CharacterGridItem from "../character-grid-item/CharacterGridItem";
import FilterInput from "../filter-input/FilterInput";
import FilterButton from "../filter-button/FilterButton";
import { useSelector } from "react-redux";
import roleTags from "../../constants/constants";

function ChampionsList() {
  const [currentChampionList, setCurrentChampionList] = React.useState([]);
  const [faded, setIsFaded] = React.useState(false);
  const champions = useSelector((state) => state.champions);
  function getFilterData(text) {
    setIsFaded(true);
    if (text.trim().length > 0) {
      const filteredArray = champions.filter((el) =>
        el.name.toLowerCase().includes(text)
      );
      setTimeout(fadedFilterResults, 500, filteredArray);
    } else {
      setTimeout(fadedFilterResults, 500, champions);
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
    <>
      <div className="filter-bar">
        <FilterInput getFilterData={getFilterData} />
        <div className="champion-filter-button-container">
          {roleTags.map((el, i) => {
            return (
              <FilterButton key={i} tag={el} getFilterByTag={filterByTags} />
            );
          })}
        </div>
      </div>
      <section className={`champion-list ${faded && "champion-list_faded"}`}>
        {currentChampionList.length
          ? currentChampionList.map((el) => (
              <CharacterGridItem key={el.key} item={el} />
            ))
          : champions.map((el) => <CharacterGridItem key={el.key} item={el} />)}
      </section>
    </>
  );
}

export default ChampionsList;
