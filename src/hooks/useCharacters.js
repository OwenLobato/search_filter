export default function useCharacters() {

  const URL = "https://rickandmortyapi.com/api/character/?page=1";

  const getCharacters = async () => {
    const response = await fetch(URL);
    const data = await response.json()
    return data.results;
  };

  return { getCharacters };
};
