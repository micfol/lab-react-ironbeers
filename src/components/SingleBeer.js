import { useParams } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { maxHeight } from '@mui/system';


export const SingleBeer = (props) => {
    
    const [singleBeer, setSingleBeer] = useState({});
    const { beerId } = useParams();

    async function getSingleBeer() {
        const queryType = {
            "random" : "/random",
            "byId" : "/" + beerId,
            };
        const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/" + beerId);
       
        setSingleBeer(response.data);
      };

      useEffect(() => {
        getSingleBeer();
      }, []);

    return (
        <>
        <Header />
        <div>
            <img src={singleBeer.image_url} style={{maxHeight: "100px"}} alt={singleBeer.name}/>
            <h3>Name: {singleBeer.name}</h3>
            <p>Tagline: {singleBeer.tagline}</p>
            <p>First Brewed: {singleBeer.first_brewed}</p>
            <p>Attenuation Level: {singleBeer.attenuation_level}</p>
            <p>Description: {singleBeer.description}</p>
            <p>Contributed By: {singleBeer.contributed_by}</p>
        </div>
        </>
    )
}