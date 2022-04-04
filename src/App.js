import './App.css';
import { BeersList } from './components/BeersList';
import { Route, Routes, useParams } from 'react-router-dom';
import HomePage from './components/HomePage';
import { Container } from '@mui/material';
import { AddBeer } from './components/AddBeer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { SingleBeer } from './components/SingleBeer';

function App() {

  const [beers, setBeers] = useState([]);

  async function getBeers(query, searchTerm) {
    const queryType = {
    "all" : "/",
    "random" : "/random",
    "byId" : "/" + searchTerm,
    "search" : "/search?q=" + searchTerm
    };
    const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers" + queryType[query]);
    // console.log('response.data', response.data);
   setBeers(response.data);
  };

  useEffect(() => {
    getBeers("all")
  }, []);

  return (
    <div className="App">
      <Container maxWidth="xs" spacing={2}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/beers" element={<BeersList query={"all"} allBeers={beers}/>} />
          <Route path="/new-beer" element={<AddBeer />} />
          <Route path="/random-beer" element={<BeersList query={"random"} handleGetBeers={getBeers}/>} />
          <Route path="/beers/:beerId" element={<SingleBeer allBeers={beers}/>} />
        </Routes>     
      </Container>
    </div>
  )
};

export default App;