import React from "react";
//STYLED AND ANIMATION i.e by styled-components and framer-motion respectively
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

const Game = ({ name, released, image, id }) => {
  console.log(id);
  //making dispatch and all redux work
  const dispatch = useDispatch(); //this gives us ability to dispatch
  //creating a function which gets activates when we clcik on any game (styled game div below)
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt="back-img" />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  border-radius: 0.8rem;
  text-align: center;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
