import * as React from 'react';
import Header from './Header';
import { BeerCard } from './BeerCard';
// import { useState, useEffect } from 'react';

export const BeersList = (props) => {

    const {query, allBeers} = props
   
    console.log('allBeers', allBeers)

    const list = allBeers.map((singleBeer) => {
        return <BeerCard beer={singleBeer} />
    });

    return (
        <>
        <Header />
        {list}
        </>
    )
}