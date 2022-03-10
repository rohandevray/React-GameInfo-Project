import axios from "axios";
import { gamesDetailsUrl } from "../api";
import { gamesScreenUrl } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gamesDetailsUrl(id));
  const screenData = await axios.get(gamesScreenUrl(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenData.data,
    },
  });
};
