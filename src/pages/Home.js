// redux
import { useSelector } from "react-redux/es/exports";
// Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
// Styling and Framer Motion
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Home() {
  const { popular, newGames, upcomingGames, searched, loading, isFound } = useSelector(
    (state) => state.games
  );
  const { id } = useParams();
  // console.log(id);
  // console.log(searched.length);
  console.log(isFound);
  if (loading) return <p>Loading...</p>;
  return (
    <GameList>
      <LayoutGroup type="crossfade">
        <AnimatePresence>{id && <GameDetail pathId={id} />}</AnimatePresence>
        {isFound ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <Games>
              {searched.results.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}
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
      </LayoutGroup>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
