import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import {Route, Switch} from "react-router-dom";
import WelcomePage from './components/WelcomePage'
import SearchForm from './components/SearchForm'


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
        <Route path="/search/" component={SearchForm}/>
      </Switch>
      
    </main>
  );
}
