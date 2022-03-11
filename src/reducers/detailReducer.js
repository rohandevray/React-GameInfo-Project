//Always make the initial state whenever u are going to make any reducers
const initialState = {
  game: { platforms: [] },
  screen: { results: [] },
  isLoading: true,
};
//as error is that it donot recognize platforms and results to map over in beginning so the screen is blank but when we slect the data they have these things to map over so they work that time.
//map over error undefined in beginning

//REDUCERS
const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state, //asual and game update
        game: action.payload.game,
        screen: action.payload.screen,
        isLoading: false,
      };
    //it gets from true to false as the details get loaded up
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
