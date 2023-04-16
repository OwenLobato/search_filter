import { useEffect } from "react";
import useUsers from "../hooks/useUsers";

export default function Search() {

  const { getUsers } = useUsers();

  const obtainUsers = () => {
    getUsers()
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  
  useEffect(() => {
    obtainUsers();
  }, []);

  return (
    <h1>Search</h1>
  )
}
