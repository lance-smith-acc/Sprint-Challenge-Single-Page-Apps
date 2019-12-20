import React, { useState, useEffect } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";

export default function SearchForm() {

  const [characters, setCharacter] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacter(response.data.results);
      })
      .catch(error => console.log(error))
  }, []);


  
  const handleChange = event => {
    setSearchTerm(event.target.value);
    console.log(event.target.value)
  };

  useEffect(() => {
    const results = characters.filter(k =>
        k.name.includes(searchTerm))
    setSearchResults(results);
  }, [searchTerm]);
  

  return (
    <section className="search-form">
     <input type="text" placeholder="Search by Name" value={searchTerm} onChange={handleChange} />

       {
        searchResults.map(data => {
        return <CharacterCard name={data.name} image={data.image} status={data.status} species={data.species} gender={data.gender} episode={data.episode.length} />
      })}
       
       
    </section>
  );
}
