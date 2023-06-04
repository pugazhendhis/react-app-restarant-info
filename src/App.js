import data from "./allData.json";
import { useEffect, useState } from "react";
import { constructData } from "./utility";
import { Collection } from "./collection";

export default function App() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    let sortedCategory = constructData(data);
    setTableData(sortedCategory);
  }, []);

  return (
    <div className="App">
      {tableData.map((item) => {
        return (
          <table border="1" style={{ marginBottom: "25px" }}>
            <tr>
              <th>{item.CategoryName}</th>
            </tr>
            {<Collection itemList={item.itemList} />}
          </table>
        );
      })}
    </div>
  );
}
