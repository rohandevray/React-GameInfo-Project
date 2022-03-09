import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./actions/gameActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }); //this useeffect works when APP() gets rendered/load
  return (
    <div className="App">
      <h1>Hello Ignite</h1>
    </div>
  );
}

export default App;
