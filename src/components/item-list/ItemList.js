import React from "react";
import "./ItemList.css";
import { getItems } from "../../utils/riot-api";
import Item from "../item/Item";
import { setItemList } from "../../actions/actions";
import { useSelector } from "react-redux";
import ItemCategory from "../item-category/ItemCategory";
import ItemCost from "../item-cost/ItemCost";

function ItemList() {
  const [currentItem, setCurrentItem] = React.useState({});
  const [prevItem, setPrevItem] = React.useState([]);
  const [nextItem, setNextItem] = React.useState([]);
  const itemList = useSelector((state) => state.itemList);

  function handleItemList(boolean, data) {
    if (!data.length) {
      boolean ? setNextItem([]) : setPrevItem([]);
      return;
    }
    let arr = [];
    data.forEach((currentId) => {
      let filteredList = itemList.filter((el) => el.id === currentId);
      arr.push(...filteredList);
    });
    boolean ? setNextItem(arr) : setPrevItem(arr);
  }
  React.useEffect(() => {
    getItemList();
  }, []);

  function getItemList() {
    getItems()
      .then((res) => {
        const arr = Object.entries(res.data).map((el) => {
          return { id: el[0], ...el[1] };
        });
        setItemList(arr);
        console.log(arr);
      })
      .catch((err) => console.log(err));
  }
  return (
    <section className="item-list">
      <div className="item-list__current-item-container">
        <div className="item-list__current">
          <h1 className="item-list__current-title">{currentItem.name}</h1>
          <p className="item-list__current__plaintext">
            {currentItem.plaintext}
          </p>
          <div className="item-list__image-and-cost-wrapper">
            <figure className="item-list__current-image-wrapper">
              <img
                className="item-list__current-image"
                src={`http://ddragon.leagueoflegends.com/cdn/12.19.1/img/item/${currentItem.id}.png`}
                alt=""
              />
            </figure>
            <div className="item-list__current-cost">
              <ItemCost currentItem={currentItem}/>
            </div>
          </div>
          <div
            className="item-list__current-text"
            dangerouslySetInnerHTML={{ __html: currentItem.description }}
          ></div>
        </div>
        <div className="item-list__build">
          <h3 className="item-list__build-title">Builds from</h3>
          <div className="item-list__prev">
            {prevItem.length
              ? prevItem.map((el, i) => (
                  <Item
                    key={i}
                    item={el}
                    handleItemList={handleItemList}
                    setCurrentItem={setCurrentItem}
                  />
                ))
              : null}
          </div>
          <h3 className="item-list__build-title">Builds into</h3>
          <div className="item-list__next">
            {nextItem.length
              ? nextItem.map((el, i) => (
                  <Item
                    key={i}
                    item={el}
                    handleItemList={handleItemList}
                    setCurrentItem={setCurrentItem}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
      <div className="item-list__starter">
        <ItemCategory
          filterCase="START"
          title="starter items"
          handleItemList={handleItemList}
          setCurrentItem={setCurrentItem}
        />
      </div>
    </section>
  );
}

export default ItemList;
