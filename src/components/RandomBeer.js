import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';

const RandomBeer = (props) => {
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    console.log('is use effect working?');
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((res) => {
        setBeer(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div>
      <Header />
      <img
        src={beer.image_url}
        style={{ width: '100px' }}
        alt="here is your random beer"
      />
      <h1>{beer.name}</h1>
      {beer.description}
    </div>
  );
};

export default RandomBeer;
