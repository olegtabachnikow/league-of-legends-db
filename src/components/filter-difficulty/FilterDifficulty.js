import React from "react";
import "./FilterDifficulty.css";

function FilterDifficulty() {
  const [value, setValue] = React.useState("All Difficulties");
  const [isActive, setIsActive] = React.useState(false);
  return (
    <div className="filter-difficulty">
      <button
        onClick={() => setIsActive((state) => !state)}
        className="filter-difficulty__button"
      >
        {value}
      </button>
      <ul className="filter-difficulty__list">
        <li>
          {" "}
          <span
            className={`filter-difficulty__select ${
              isActive && "filter-difficulty__select_active"
            }`}
          >
            All Difficulties
          </span>
        </li>
        <li>
          <span
            className={`filter-difficulty__select ${
              isActive && "filter-difficulty__select_active"
            }`}
          >
            Low
          </span>
        </li>
        <li>
          <span
            className={`filter-difficulty__select ${
              isActive && "filter-difficulty__select_active"
            }`}
          >
            Moderate
          </span>
        </li>
        <li>
          <span
            className={`filter-difficulty__select ${
              isActive && "filter-difficulty__select_active"
            }`}
          >
            High
          </span>
        </li>
      </ul>
    </div>
  );
}

export default FilterDifficulty;
