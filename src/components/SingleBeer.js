import React, { useEffect, useState } from 'react';
import Header from './Header';
import axios from 'axios';

function SingleBeer(props) {
  const [oneBeer, setOneBeer] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${props.match.params._id}`
      )
      .then((res) => {
        setOneBeer(res.data);
      });
  }, []);

  return (
    <div>
      <Header />
      <img src={oneBeer.image_url} alt="Beer details" />
      {oneBeer.name}
      {oneBeer.description}
    </div>
  );
}

export default SingleBeer;
