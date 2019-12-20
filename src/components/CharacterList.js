import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';


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

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value)
    console.log(event.target.value)
  };

  
  useEffect(() => {
    const characterNames = characters.map(c => c.name);
    const results = characterNames.filter(name =>
      name.toLowerCase().includes(searchTerm), 
    )
    setSearchResults(results);
  }, [searchTerm]);


  return (
    <section className="character-list">
      <div className="search-form">
        <input type="text" placeholder="Search by Name" value={searchTerm} onChange={handleChange} />
          {searchResults.map(item => (<li>{item}</li>))}
      </div>
      
      {characters.map(data => {
        return <CharacterCard name={data.name} image={data.image} status={data.status} species={data.species} gender={data.gender} episode={data.episode.length} />
      })}
    </section>
  );
}
