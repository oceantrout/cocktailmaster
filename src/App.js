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
import { useState, useEffect, useReducer } from "react";

function App() {
  const [ingreName, setIngre] = useState("");
  const [ingreData, setIngreData] = useState([]);
  useEffect(() => {
    const drinkUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingreName}`;
    const makeApiCall = async () => {
      let res = await fetch(drinkUrl);
      let data = await res.json();
      setIngreData(data);
      console.log(data);
    };
    makeApiCall();
  }, [ingreName]);
  const handleSubmit = (ingreName) => {
    setIngre(ingreName);
    console.log("App - handleSubmit - drink", ingreName);
  };

  const cartReducer = (state, action) => {
    switch (action.type) {
      case "Add":
        return [...state, action.item];
      case "Remove":
        console.log(action, state);
        return [...state.filter((p) => p.name !== action.item.name)];
    }
  };
  const [cart, dispatch] = useReducer(cartReducer, []);

  const handleAdd = (product) => {
    dispatch({ type: "Add", item: product });
  };

  const handleRemove = (product) => {
    dispatch({ type: "Remove", item: product });
  };

  return (
    <div className="App">
      <h1>- - - - -Cocktail Master- - - - -</h1>
      <h5>a site for the connoisseur</h5>

      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/SearchbyIngre">
        <SearchIngre handleSubmit={handleSubmit} ingreData={ingreData} />
        <ResultsIngre handleClick={handleAdd} drinkData={ingreData} />
        <Cart cart={cart} handleClick={handleRemove} />
      </Route>
      <Route path="/SearchbyName">
        {/* <SearchName />
        <ResultsName />
        <Cart /> */}
      </Route>
    </div>
  );
}

export default App;
