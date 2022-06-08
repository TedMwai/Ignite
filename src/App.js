import { popularGamesUrl } from "./api";

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

  return (
    <div className="App">
      <h1>Hello Ignite</h1>
    </div>
  );
}

export default App;
