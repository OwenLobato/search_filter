import { useState, useEffect } from "react";
import useUsers from "../hooks/useUsers";

export default function Search() {

  const { getUsers } = useUsers();

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const obtainUsers = () => {
    getUsers()
      .then((response) => {
        console.log("[RESPONSE]", response);
        setUsers(response);
      })
      .catch((error) => {
        console.log("[ERROR]", error);
      })
  }

  const catchInput = (event) => {
    console.log("[CATCH INPUT]", event.target.value);
    setSearch(event.target.value);
  };

  let results = ( 
    !search
      ? users
      : users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
  );

  useEffect(() => {
    obtainUsers();
  }, []);

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
  )
}
