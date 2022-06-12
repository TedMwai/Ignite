// redux
import { useSelector } from "react-redux/es/exports";
// Components
import Game from "../components/Game";
// Styling and Framer Motion
import { motion } from "framer-motion";
import styled from "styled-components";

function Home() {
  const { popular, newGames, upcomingGames, loading } = useSelector(
    (state) => state.games
  );
  if (loading) return <p>Loading...</p>;
  return (
    <GameList>
      <h2>Upcoming Games</h2>
      <Games>
        {upcomingGames.results.map((game) => (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            released={game.released}
            image={game.background_image}
          />
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.results.map((game) => (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            released={game.released}
            image={game.background_image}
          />
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.results.map((game) => (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            released={game.released}
            image={game.background_image}
          />
        ))}
      </Games>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2{
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
