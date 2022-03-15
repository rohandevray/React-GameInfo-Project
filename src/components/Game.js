// import React from "react";
// //STYLED AND ANIMATION i.e by styled-components and framer-motion respectively
// import styled from "styled-components";
// import { motion } from "framer-motion";
// //Redux
// import { useDispatch } from "react-redux";
// import { loadDetail } from "../actions/detailAction";
// import { Link } from "react-router-dom";
// import { smallImage } from "../util";

// const Game = ({ name, released, image, id }) => {
//   const stringPathId = id.toString();
//   //making dispatch and all redux work
//   const dispatch = useDispatch(); //this gives us ability to dispatch
//   //creating a function which gets activates when we clcik on any game (styled game div below)
//   const loadDetailHandler = () => {
//     document.body.style.overflow = "hidden"; //removes the scroll effect when this function shooots
//     dispatch(loadDetail(id));
//   };
//   return (
//     <StyledGame layoutId={stringPathId} onClick={loadDetailHandler}>
//       <Link to={`/game/${id}`}>
//         <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
//         <p>{released}</p>
//         <motion.img
//           layoutId={`image ${stringPathId}`}
//           src={smallImage(image, 640)}
//           alt={name}
//         />
//       </Link>
//     </StyledGame>
//   );
// };

// const StyledGame = styled(motion.div)`
//   min-height: 30vh;
//   box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
//   border-radius: 0.8rem;
//   text-align: center;
//   overflow: hidden;
//   cursor: pointer;
//   img {
//     width: 100%;
//     height: 40vh;
//     object-fit: cover;
//   }
// `;

// export default Game;

import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
import { popUp } from "../animation";
const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString();
  //Load Detail Handler
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame
      variants={popUp}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 0.8rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
