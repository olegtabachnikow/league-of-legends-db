import React from "react";
import "./Item.css";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { filterSpecialRecipe } from "../../utils/filters/item-filters";

function Item({ item, handleItemList, setCurrentItem }) {
  const itemList = useSelector(state => state.itemList);
  function handleClick() {
    console.log(item);
    item.into !== undefined
      ? handleItemList(true, item.into)
      : handleItemList(true, filterSpecialRecipe(true, itemList, item) || []);
    item.from !== undefined
      ? handleItemList(false, item.from)
      : handleItemList(false, filterSpecialRecipe(false, itemList, item) || []);
    setCurrentItem(item);
  }
  return (
    <div onClick={handleClick} className="item">
      <img
        className="item__image"
        src={`http://ddragon.leagueoflegends.com/cdn/12.19.1/img/item/${item.id}.png`}
        alt={item.name}
      />
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  handleItemList: PropTypes.func.isRequired,
  setCurrentItem: PropTypes.func.isRequired,
};

export default Item;
