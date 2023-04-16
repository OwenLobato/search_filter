export default function useUsers() {

  const URL = "https://jsonplaceholder.typicode.com/users";

  const getUsers = async () => {
    const response = await fetch(URL);
    const data = await response.json()
    return data;
  };

  return { getUsers };
};
