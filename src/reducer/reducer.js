import { combineReducers } from "redux";

export const reducer = combineReducers({
  champions: championsReducer,
  currentChampion: currentChampionReducer,
});

function championsReducer(state = [], action) {
  switch (action.type) {
    case "CHARACTERS_LIST/SET":
      return action.payload;
    default:
      return state;
  }
}

function currentChampionReducer(state = {}, action) {
  switch (action.type) {
    case "CHARACTER/SET":
      return action.payload;
    default:
      return state;
  }
}
