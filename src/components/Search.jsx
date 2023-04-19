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
      {/* Filter options */}
      <div className="container search-container rounded shadow">
        <div className="row justify-content-center align-items-center py-2">
          <div className="col-3 d-flex align-items-center">
            <h5>Columna para filtrar:</h5>
          </div>
          <div className="col-2">
            <select
              className="form-select"
              value={selectedColumn}
              onChange={(e) => { setSelectedColumn(e.target.value) }}
            >
              {tableColumns.map((columnName, index) => (
                <option key={index} value={columnName}>{columnName}</option>
              ))}
            </select>
          </div>
          <div className="col-7">
            <input
              className="form-control"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => { setSearch(e.target.value) }}
            />
          </div>
        </div>
      </div>
      {/* Table with data and filter values */}
      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead className="bg-table-head">
          <tr>
            {tableColumns.map((columnName, index) => (
              <th key={index} className="text-uppercase text-center">{columnName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            filteredObjects.map((object) => (
              <tr key={object.id}>
                {tableColumns.map((columnName, index) => (
                  <td key={index} className="text-center">{object[columnName]}</td>
                ))}
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
