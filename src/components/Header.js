import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Link to="/"><h2>Home</h2></Link>
      <Link to="/characters"><h2>Characters</h2></Link>
      <Link to="/search"><h2>Search Form</h2></Link>
    </header>

  );
}
