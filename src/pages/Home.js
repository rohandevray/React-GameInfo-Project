import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gameActions";
//Components
import Game from "../components/Game";
//Style and animations
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  //Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]); //this useeffect works when APP() gets rendered/load
  //we add [] after useeffect to make sure this gonna fetch the games when app get mounted i.e
  //fetch ONLY ONE TIME and useEffect goona run when dispatch happens ,[dispatch]
  //we now get the data from state (BIG STATE CALLED REDUX STORE/STATE)
  //   const games = useSelector((state) => state.games);
  const { popular, newGames, upcoming } = useSelector((state) => state.games);
  console.log(popular);
  return (
    <GameList>
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id} //when we get error of key or child related things
          />
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id} //when we get error of key or child related things
          />
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id} //when we get error of key or child related things
          />
        ))}
      </Games>
    </GameList>
  );
};
const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 70vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 2.1rem;
  grid-row-gap: 4rem;
`;

export default Home;

//Notes
//We use useDispatch to dispatch the acion (load Games )
//And if want to get the data we have to use useSelector
//EVErytime we use {} to get the specific thing from somthing e.g.
//import {useEffect} from " ".

//here (game) after map represents each game in upcoming games
//we can grab data of anyhting by using game.name or game. blah!
