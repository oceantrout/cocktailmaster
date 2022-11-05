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
      setIngreData(data.drinks);
      console.log("API is successful", data.drinks);
    };
    makeApiCall();
  }, [ingreName]);
  const handleSubmit = (ingreName) => {
    setIngre(ingreName);
    console.log("App - handleSubmit is successful", ingreName);
  };

  const cartReducer = (state, action) => {
    switch (action.type) {
      case "Add":
        return [...state, action.item];
      case "Remove":
        console.log(action, state);
        return [...state.filter((p) => p.strDrink !== action.item.strDrink)];
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
      <Route exact path="/">
        <h1>- - - - -Cocktail Master- - - - -</h1>
        <h5>a site for cocktail connoisseur</h5>
        <Home />
      </Route>
      <Route path="/SearchbyIngre">
        <div className="IngrePage">
          <h2>Select by Ingredients</h2>
          <SearchIngre handleSubmit={handleSubmit} ingreData={ingreData} />
          <div className="arrange">
            <Cart className="cart" cart={cart} handleClick={handleRemove} />
            <ResultsIngre handleClick={handleAdd} drinkData={ingreData} />
          </div>
        </div>
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
