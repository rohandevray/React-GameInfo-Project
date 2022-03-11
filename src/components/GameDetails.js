import React from "react";
//STYLED AND ANIMATION i.e by styled-components and framer-motion respectively
import styled from "styled-components";
import { motion } from "framer-motion";
//to get the data from the store we have to use UseSelector
import { useSelector } from "react-redux";

const GameDetail = () => {
  //Data
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && ( //it just literally now wait until that detail gets loaded
        <CardShadow>
          <Detail>
            <Stats>
              <div className="rating">
                <h3>{game.name} </h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3> //as he say we map over the array of platforms we need a key idk
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img src={game.background_image} alt="image" />
            </Media>
            <Description>{game.description_raw}</Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img src={screen.image} key={screen.id} alt="image" />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
  position: fixed;
  left: 0;
  top: 0;
  &::-webkit-scrollbar {
    width: 0.5rem; //we can remove the scrollbar we made as a overflow by width:0rem
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;
const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  color: black;
  position: absolute;
  left: 10%;
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
  margin-top: 2rem;
  img {
    width: 100%;
  }
`;
const Description = styled(motion.div)`
  margin: 5rem 0;
`;
export default GameDetail;
