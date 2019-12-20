import React, { useEffect, useState } from "react";
import axios from 'axios';
// import CharacterCard from './CharacterCard';
import CharacterCard from "./CharacterCard";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  // Set character data
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacter(response.data.results);
      })
      .catch(error => console.log(error))
  }, []);

  // Search Functionality


  return (
    <section className="character-list">
      {characters.map(data => {
        return <CharacterCard name={data.name} image={data.image} status={data.status} species={data.species} gender={data.gender} episode={data.episode.length} />
      })}
    </section>
  );
}
