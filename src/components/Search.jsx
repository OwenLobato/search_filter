import { useState, useEffect } from "react";

export default function Search({ getObjects, tableColumns }) {

  const [objects, setObjects] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedColumn, setSelectedColumn] = useState(tableColumns[0]);

  const filterRule = (object, search) => {
    return object[selectedColumn].toLowerCase().includes(search.toLowerCase());
  };

  const filterObjects = (objects, search) => {
    return !search ? objects : objects.filter(object => filterRule(object, search));
  };

  const filteredObjects = filterObjects(objects, search);

  useEffect(() => {
    getObjects().then(objects => setObjects(objects));
  }, [getObjects]);

  return (
    <div>
      <div>
        <h5>Columna para filtrar: </h5>
        <select
          className="form-select mt-2 mb-4"
          value={selectedColumn}
          onChange={(e) => { setSelectedColumn(e.target.value) }}
        >
          {tableColumns.map((columnName, index) => (
            <option key={index} value={columnName}>{columnName}</option>
          ))}
        </select>
      </div>
      <input
        className="form-control"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => { setSearch(e.target.value) }}
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
