import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <Link to="/">
        <img
          style={{ height: '80px', paddingTop: '1em' }}
          src={require('../assets/homeIcon.png')}
          alt="Go to home page"
        />
      </Link>
    </div>
  );
}

export default Header;
