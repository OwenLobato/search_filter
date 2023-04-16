import { useState, useEffect } from "react";

export default function Search({ getObjects }) {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const catchInput = (event) => {
    console.log("[CATCH INPUT]", event.target.value);
    setSearch(event.target.value);
  };

  useEffect(() => {
    getObjects().then(response => setUsers(response));
  }, [getObjects]);

  let results = (
    !search
      ? users
      : users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
  );

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
            results.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
