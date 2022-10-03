import React from "react";
import "./ChampionsList.css";
import CharacterGridItem from "../character-grid-item/CharacterGridItem";
import { useSelector } from "react-redux";
import Filter from "../filter/Filter";

function ChampionsList() {
  const [currentChampionList, setCurrentChampionList] = React.useState([]);
  const [faded, setIsFaded] = React.useState(false);
  const champions = useSelector((state) => state.champions);

  return (
    <>
      <Filter
        setIsFaded={setIsFaded}
        setCurrentChampionList={setCurrentChampionList}
      />
      <section
        className={`champion-list ${faded && "champion-list_faded"}`}
      >
          {currentChampionList.length
            ? currentChampionList.map((el) => (
                <CharacterGridItem key={el.key} item={el} />
              ))
            : champions.map((el) => (
                <CharacterGridItem key={el.key} item={el} />
              ))}
      </section>
    </>
  );
}

export default ChampionsList;
