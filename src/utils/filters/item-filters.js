export function filterItemsCategory(items, filterCase) {
  switch (filterCase) {
    case "START":
      return filterStarterItems(items);
    default:
      return items;
  }
}

function filterStarterItems(items) {
  const arr = items
    .filter((el) => el.tags.includes("Lane") || el.tags.includes("Jungle"))
    .filter(
      (el) =>
        !el.tags.includes("Trinket") &&
        !el.tags.includes("Consumable") &&
        !el.specialRecipe
    );
  return arr;
}
export function filterSpecialRecipe(boolean, array, item) {
  let arr = [];
  if (boolean) {
    arr = array.filter((el) => el.specialRecipe === +item.id);
  } else {
    arr = array.filter((el) => item.specialRecipe === +el.id);
  }
  const newArr = [];
  arr.forEach((element) => {
    newArr.push(element.id);
  });
  return newArr;
}
