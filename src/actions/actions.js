import { bindActionCreators } from "redux";
import { dispatch } from "../store/store";

const setCharactersAction = (payload) => {
  return {
    type: "CHARACTERS_LIST/SET",
    payload,
  };
};

const setCharacterAction = (payload) => {
  return {
    type: "CHARACTER/SET",
    payload,
  };
};

export const { setCharacters, setCharacter } = bindActionCreators(
  {
    setCharacters: setCharactersAction,
    setCharacter: setCharacterAction,
  },
  dispatch
);
