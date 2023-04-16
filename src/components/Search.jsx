import { useState, useEffect } from "react";
import useUsers from "../hooks/useUsers";

export default function Search() {

  const { getUsers } = useUsers();

  const [users, setUsers] = useState([]);

  const obtainUsers = () => {
    getUsers()
      .then((response) => {
        console.log(response);
        setUsers(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    obtainUsers();
  }, []);

  return (
    <div>
      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr className="bg-app text-white">
            <th>NAME</th>
            <th>USER NAME</th>
          </tr>
        </thead>
        <tbody>
          {
            users.length > 0 &&
            users.map((user) => (
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
