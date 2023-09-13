import React from "react";
import { HomePage, PokemonPage } from "./pages";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { RouteComponentProps } from "react-router";

const App = () => {
  return (
    <Router>
      <Route path="/pokemons" component={HomePage} />
      <Route path="/pokemon/:name" component={PokemonPage} />
      <Route
        exact
        path="/"
        component={({ location }: RouteComponentProps) => (
          <Redirect
            to={{
              ...location,
              pathname: "/pokemons",
            }}
          />
        )}
      />
    </Router>
  );
};

export default App;
