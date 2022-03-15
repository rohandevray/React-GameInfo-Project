import axios from "axios";
import { popularGamesUrl } from "../api";
import { upcomingGamesUrl } from "../api";
import { newGamesUrl } from "../api";
import { searchedGameUrl } from "../api";

//ACTION CREATOR
export const loadGames = () => async (dispatch) => {
  //fetch axios
  const popularData = await axios.get(popularGamesUrl());
  const upcomingData = await axios.get(upcomingGamesUrl());
  const newData = await axios.get(newGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchedGameUrl(game_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
