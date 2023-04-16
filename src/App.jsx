import useUsers from "./hooks/useUsers";
import Search from "./components/Search";
import "./styles/App.css";

function App() {

  const { getUsers } = useUsers();

  const obtainUsers = () => {
    return getUsers()
      .then((response) => {
        console.log("[RESPONSE]", response);
        return response;
      })
      .catch((error) => {
        console.log("[ERROR]", error);
      })
  }

  return (
    <div className="container-fluid">
      <h2 className="mt-4 text-center">React filter search</h2>
      <Search
        getObjects={obtainUsers}
        filterRule={
          (user, search) => user.name.toLowerCase().includes(search.toLowerCase())
        }
        tableColumns={["name","username","email"]}
      />
    </div>
  );
}

export default App;
