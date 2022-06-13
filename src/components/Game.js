// styling and framer motion
import { motion } from "framer-motion";
import styled from "styled-components";
// redux
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { loadDetail } from "../reducers/detailSlice";
import { Link } from "react-router-dom";

function Game({ name, released, image, id }) {
  // load details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt={name} />
      </Link>
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
