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
        return response;
      })
      .catch((error) => {
      })
  }

  const obtainCharacters = () => {
    return getCharacters()
      .then((response) => {
        return response;
      })
      .catch((error) => {
      })
  }

  return (
    <div className="container-fluid">
      <h2 className="my-5 text-center">REACT SEARCH BY FILTER</h2>

      <h3 className="text-center">API 1 (jsonplaceholder)</h3>
      <Search
        getObjects={obtainUsers}
        tableColumns={["name", "phone", "email", "website"]}
      />

      <h3 className="mt-5 text-center">API 2 (rickandmortyapi)</h3>
      <Search
        getObjects={obtainCharacters}
        tableColumns={["name", "status", "species", "gender"]}
      />

      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col text-center">
              <img
                src="https://trabajoenequipo.neocities.org/Imagenes/gitHub.png"
                alt="Github logo"
                style={{ width: "35px", height: "35px", marginRight: "10px" }}
              />
              @OwenLobato
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
