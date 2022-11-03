import "./App.css";
import Home from "./components/Home";
import ResultsIngre from "./components/ResultsIngre";
import ResultsName from "./components/ResultsName";
import SearchIngre from "./components/SearchIngre";
import SearchName from "./components/ResultsName";
import Cart from "./components/cart";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <h1>- - - - -Cocktail Master- - - - -</h1>
      <h5>a site for the connoisseur</h5>

      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/SearchbyIngre">
        <SearchIngre />
        <ResultsIngre />
        <Cart />
      </Route>
      <Route path="/SearchbyName">
        <SearchName />
        <ResultsName />
        <Cart />
      </Route>
    </div>
  );
}

export default App;
