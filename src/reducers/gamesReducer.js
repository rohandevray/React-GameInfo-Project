const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
  //this is we create the inital state as variable
};
//initState is variable oject and in object we have to use ":" for having various data

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upcoming: action.payload.upcoming,
      }; //this means to return all the states as orginial (no changes made thats why ...)
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    default:
      return { ...state };
  }
};
export default gamesReducer;
