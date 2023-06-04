const sortCategory = (data = []) => {
  return data.toSorted((a, b) => a.DisplayOrder - b.DisplayOrder);
};

export const constructData = (data) => {
  const { Category, Item, ItemData } = data;
  const itemList = Item.map((item) => {
    let itemDataList = ItemData.filter(
      (itemData) => item.DropDownID === itemData.DropDownID
    );
    if (itemDataList?.length) {
      item.itemDataList = itemDataList;
    }
    return item;
  });

  let list = Category.map((category) => {
    let list = itemList.filter(
      (element) => category.CategoryID === element.CategoryID
    );
    category.itemList = normaliseItem(list);

    return category;
  });
  list = sortCategory(list);
  return list;
};

const normaliseItem = (list) => {
  let map = {};
  for (let i = 0; i < list.length; i++) {
    let key1 = list[i].CategoryID;
    let key2 = list[i].ColumnWiseDisplayOrder;
    if (!map[key1]) {
      map[key1] = {};
    }
    if (!map[key1]?.[key2]) {
      map[key1][key2] = [];
    }
    map[key1][key2].push(list[i]);
  }

  let arr = [];
  for (let key in map) {
    arr = Object.values(map[key]);
  }

  let items = arr[0].map((_, index) => {
    let res = arr.map((item) => {
      return item[index];
    });
    return res;
  });
  return items;
};
