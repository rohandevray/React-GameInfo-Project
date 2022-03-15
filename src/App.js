import React from "react";
//Components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
import GlobalStyles from "./components/GloalStyle";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Home />
    </div>
  );
}

export default App;

//we added array for the path which means display the Home when anyone of the array element is there
