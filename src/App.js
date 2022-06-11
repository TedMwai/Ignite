import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { popularGamesUrl } from "./api";
import { loadGames } from "./reducers/gamesSlice";

function App() {
  const getGames = async () => {
    try {
      const response = await fetch(popularGamesUrl());
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  getGames();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  })

  return (
    <div className="App">
      <h1>Hello Ignite</h1>
    </div>
  );
}

export default App;
