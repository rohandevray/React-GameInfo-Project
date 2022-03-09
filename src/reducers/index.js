import { combineReducers } from "redux";
//this take multiple reducers and combined into one .
import gamesReducer from "./gamesReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
});
//in the rootreducers we list down the reducers we want to combine
//by giving any name like games is for gamereducer
export default rootReducer;
