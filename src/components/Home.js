import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div>
      <Link to="/beers">
        <img
          src={require('../assets/beers.png')}
          alt="click here for all beer"
        />
        <h2>All Beers</h2>
        <p style={{ maxWidth: '700px', margin: 'auto', paddingBottom: '20px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Link>

      <Link to="/random-beer">
        <img
          src={require('../assets/random-beer.png')}
          alt="click here for a random beer"
        />
        <h2>Random Beer</h2>
        <p style={{ maxWidth: '700px', margin: 'auto', paddingBottom: '20px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Link>

      <Link to="/new-beer">
        <img
          src={require('../assets/new-beer.png')}
          alt="click here for new beer"
        />
        <h2>New Beer</h2>
        <p style={{ maxWidth: '700px', margin: 'auto', paddingBottom: '20px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Link>
    </div>
  );
}

export default Home;
