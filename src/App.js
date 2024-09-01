import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero"

function App() {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    // Fetch data from an API endpoint
    axios.get('https://api.example.com/searchData')
      .then(response => {
        setSearchData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the search data!", error);
      });
  }, []);
  return (
    <div className="App">
      <Navbar searchData={searchData} />
      <Hero />
    </div>
  );
}

export default App;
