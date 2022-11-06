import "./App.css";
import Home from "./components/Home";
import Results from "./components/Results";
import Search from "./components/Search";
import Cart from "./components/cart";
import "bootstrap/dist/css/bootstrap.min.css";
import Popular from "./components/Popular";
import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";

function App() {
  const [drinkName, setDrink] = useState("jkafjakfads");
  const [drinkData, setDrinkData] = useState([]);
  useEffect(() => {
    setDrinkData([]);
  }, []);

  useEffect(() => {
    const drinkUrl = `https://www.thecocktaildb.com/api/json/v2/9973533/Search.php?s=${drinkName}`;
    const makeApiCall = async () => {
      let res = await fetch(drinkUrl);
      let data = await res.json();
      if (data.drinks === "None Found") {
        setDrinkData([]);
      } else {
        setDrinkData(data.drinks);
      }
      console.log("API1 is successful", data.drinks);
    };
    makeApiCall();
  }, [drinkName]);

  const handleSubmit = (drinkName) => {
    setDrink(drinkName);
    console.log("App1 - handleSubmit is successful", drinkName);
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
    <Switch>
      <Route exact path="/">
        <div className="App">
          <h1>- - - - -Cocktail Master- - - - -</h1>
          <h5>a site for cocktail connoisseur</h5>
          <Home />
        </div>
      </Route>
      <Route path="/Popular">
        <Popular />
      </Route>
      <Route path="/Search">
        <div className="IngrePage">
          <h2>Select by Ingredients</h2>
          <nav>
            <Link to="/">
              <button>Home Page</button>
            </Link>
            <Link to="/Popular">
              <button>Top 20 drinks</button>
            </Link>
          </nav>
          <Search
            handleSubmit={handleSubmit}
            drinkData={drinkData}
            placeholder={"Enter names,e.g.,Magarita or Vodka"}
          />
          <div className="arrange">
            <Cart className="cart" cart={cart} handleClick={handleRemove} />
            <Results handleClick={handleAdd} drinkData={drinkData} />
          </div>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
