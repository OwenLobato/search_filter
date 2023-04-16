import { useState, useEffect } from "react";

export default function Search({ getObjects, filterRule }) {

  const [objects, setObjects] = useState([]);
  const [search, setSearch] = useState("");

  const catchInput = (event) => {
    console.log("[CATCH INPUT]", event.target.value);
    setSearch(event.target.value);
  };

  const filterObjects = (objects, search) => {
    return !search ? objects : objects.filter(object => filterRule(object, search));
  };

  useEffect(() => {
    getObjects().then(objects => setObjects(objects));
  }, [getObjects]);

  const filteredObjects = filterObjects(objects, search);

  return (
    <div>

      <input
        className="form-control"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={catchInput}
      />

      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr className="bg-app text-white">
            <th>NAME</th>
            <th>USER NAME</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredObjects.map((object) => (
              <tr key={object.id}>
                <td>{object.name}</td>
                <td>{object.username}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
