import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = props.filter(name =>
      name.toLowerCase().includes(searchTerm)
    )
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <section className="search-form">
     <input type="text" placeholder="Search by Name" value={searchTerm} onChange={handleChange} />

     <ul>
       {searchResults.map(item => (<li>{item}</li>))}
     </ul>
    </section>
  );
}
