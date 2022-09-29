import React from "react";
import "./CharacterGridItem.css";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

function CharacterGridItem({ item }) {
  const navigate = useNavigate();
  return (
    <div onClick={()=> navigate(`/champions/${item.id}`)} className="character-grid-item">
      <div className="character-grid-item__corner" />
      <div className="character-grid-item__title-wrapper">
        <span className="character-grid-item__title">
          {item.name.toUpperCase()}
        </span>
      </div>
      <div className="character-grid-item__image-wrapper">
        <img
          className="character-grid-item__image"
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${item.id}_0.jpg`}
          alt={item.name}
        />
        <div />
      </div>
    </div>
  );
}
CharacterGridItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default CharacterGridItem;
