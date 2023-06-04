export const Collection = ({ itemList }) => {
  return (
    <>
      {itemList?.map((itemData) => {
        return (
          <tr key={itemData.itemID}>
            {itemData.map((item) => {
              let isValidId = [1, 2, 3, 7].includes(item.InputID);
              return (
                <td>
                  {isValidId ? (
                    <Input
                      id={item.InputID}
                      value={item.InputID === 3 ? item.itemDataList : item.Name}
                    />
                  ) : (
                    item.Name
                  )}
                </td>
              );
            })}
          </tr>
        );
      })}
    </>
  );
};

const Input = ({ id, value }) => {
  let inputElm = null;
  if ([1, 2].includes(id)) {
    let inputValue = value;
    let type = "text";
    if (id === 2) {
      type = "number";
      let arr = value.split("-");
      inputValue = parseInt(arr[arr.length - 1]);
    }
    inputElm = <input type={type} defaultValue={inputValue} />;
  } else if (id === 7) {
    inputElm = inputElm = <label>{value}</label>;
  }
  return (
    <>
      {inputElm
        ? inputElm
        : Array.isArray(value) && (
            <select>
              {value?.map((item) => (
                <option>{item.ListItemName}</option>
              ))}
            </select>
          )}
    </>
  );
};
