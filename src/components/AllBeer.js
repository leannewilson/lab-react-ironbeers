import React, { useEffect, useState } from 'react';
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AllBeer(props) {
  const [allBeer, setAllBeer] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((res) => {
      // console.log(res.data);
      setAllBeer(res.data);
    });
  }, []);

  const ShowAllBeer = () => {
    return allBeer.map((eachBeer) => {
      return (
        <Link to={`/beer/${eachBeer._id}`}>
          <div key={eachBeer._id} className="showImg">
            <img
              src={eachBeer.image_url}
              style={{ width: '50px' }}
              alt="Drink more beer"
            />
            <div className="showInfo">
              <h2>{eachBeer.name}</h2>
              <h3>{eachBeer.tagline}</h3>
              <h5>Created by:{eachBeer.contributed_by}</h5>
            </div>
          </div>
        </Link>
      );
    });
  };

  return (
    <div>
      <Header />
      <ShowAllBeer />
    </div>
  );
}

export default AllBeer;
