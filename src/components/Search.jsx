import { useState, useEffect } from "react";

export default function Search({ getObjects, filterRule, tableColumns }) {

  const [objects, setObjects] = useState([]);
  const [search, setSearch] = useState("");


  const filterObjects = (objects, search) => {
    return !search ? objects : objects.filter(object => filterRule(object, search));
  };

  const filteredObjects = filterObjects(objects, search);

  useEffect(() => {
    getObjects().then(objects => setObjects(objects));
  }, [getObjects]);

  return (
    <div>

      <input
        className="form-control"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => {setSearch(e.target.value)}}
      />

      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr className="bg-app text-white">
            {tableColumns.map((columnName, index) => (
              <th key={index}>{columnName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            filteredObjects.map((object) => (
              <tr key={object.id}>
                {tableColumns.map((columnName, index) => (
                  <td key={index}>{object[columnName]}</td>
                ))}
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
