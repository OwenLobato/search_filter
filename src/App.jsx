import useUsers from "./hooks/useUsers";
import useCharacters from "./hooks/useCharacters";
import Search from "./components/Search";
import "./styles/App.css";

function App() {

  const { getUsers } = useUsers();
  const { getCharacters } = useCharacters();

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

  const obtainCharacters = () => {
    return getCharacters()
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

      <h3>API 1 (jsonplaceholder)</h3>
      <Search
        getObjects={obtainUsers}
        filterRule={
          (user, search) => user.phone.toLowerCase().includes(search.toLowerCase())
        }
        tableColumns={["name","phone","email", "website"]}
        />

      <h3 className="mt-4">API 2 (rickandmortyapi)</h3>
      <Search
        getObjects={obtainCharacters}
        filterRule={
          (character, search) => character.name.toLowerCase().includes(search.toLowerCase())
        }
        tableColumns={["name","status","species","gender"]}
      />
    </div>
  );
}

export default App;
