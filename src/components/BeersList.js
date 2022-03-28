import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Stack, Divider } from '@mui/material';
// import { BeerCard } from './BeerCard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BeerCard } from './BeerCard';

export const BeersList = (props) => {

    const {query} = props
    
    const [beers, setBeers] = useState({});

    async function getBeers(query, searchTerm) {
        const queryType = {
        "all" : "/",
        "random" : "/random",
        "byId" : "/" + searchTerm,
        "search" : "/search?q=" + searchTerm
        };
        const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers" + queryType[query]);
    
    setBeers(response.data);
  }

  useEffect(() => {
    getBeers(query)
    console.log('query', query)
  }, []);

  const dave = beers.map((item) => { 
      return ( <BeerCard beerData={item}/>)
  };

  return (
      dave
  );
}