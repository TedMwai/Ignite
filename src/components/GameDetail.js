// styling and framer motion
import { motion } from "framer-motion";
import styled from "styled-components";
// redux
import { useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
//IMAGES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";

function GameDetail({ pathId }) {
  const navigate = useNavigate();
  // exit detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/", { replace: true });
    }
  };

  //GET PLATFORM IMAGES
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  const { game, screen, loading } = useSelector((state) => state.detail);
  if (loading) return <div></div>;
  return (
    <CardShadow className="shadow" onClick={exitDetailHandler}>
      <Detail layoutId={pathId}>
        <Stats>
          <div className="rating">
            <motion.h3 layoutId={`title ${pathId}`}> {game.name} </motion.h3>
            <p>Rating: {game.rating} </p>
          </div>
          <Info>
            <h3>Platforms</h3>
            <Platforms>
              {game.platforms.map((data) => (
                <img
                  key={data.platform.id}
                  src={getPlatform(data.platform.name)}
                  alt={data.platform.name}
                />
              ))}
            </Platforms>
          </Info>
        </Stats>
        <Media>
          <motion.img
            layoutId={`image ${pathId}`}
            src={game.background_image}
            alt="background"
          />
        </Media>
        <Description>
          <p>{game.description_raw}</p>
        </Description>
        <div className="gallery">
          {screen.results.map((data) => (
            <img src={data.image} key={data.id} alt="screenshots" />
          ))}
        </div>
      </Detail>
    </CardShadow>
  );
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff7676;
    border-radius: 0.5rem;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 3rem 0rem;
`;

export default GameDetail;
