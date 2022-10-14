import React from "react";
import "./ItemCategory.css";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Item from "../item/Item";
import { filterItemsCategory } from "../../utils/filters/item-filters";

function ItemCategory({ title, filterCase, handleItemList, setCurrentItem }) {
  const [itemArray, setItemArray] = React.useState([]);
  const itemList = useSelector((state) => state.itemList);
  React.useEffect(() => {
    setItemArray(filterItemsCategory(itemList, filterCase));
  }, [itemList, filterCase]);
  return (
    <>
    <h2 className="item-category__title">{title}</h2>
    <div className="item-category__list"style={{ display: "flex" }}>
      {itemArray.length
        ? itemArray.map((el, i) => (
            <Item
              key={i}
              item={el}
              handleItemList={handleItemList}
              setCurrentItem={setCurrentItem}
            />
          ))
        : null}
    </div>
    </>
  );
}

export default ItemCategory;
