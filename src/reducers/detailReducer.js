//Always make the initial state whenever u are going to make any reducers
const initialState = { game: {}, screen: {} };

//REDUCERS
const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state, //asual and game update
        game: action.payload.game,
        screen: action.payload.screen,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
