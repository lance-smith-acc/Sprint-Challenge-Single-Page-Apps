import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import {Route, Switch} from "react-router-dom";
import WelcomePage from './components/WelcomePage'
import CharacterCard from "./components/CharacterCard.js";


export default function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/characters">
          <CharacterList />
        </Route>
        <Route path="/characters/" children={<CharacterCard />} />
      </Switch>
      
    </main>
  );
}
