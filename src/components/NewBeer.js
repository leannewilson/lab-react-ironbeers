import React, { useState } from 'react';
import Header from './Header';

function NewBeer(props) {
  const [newBeer, setNewBeer] = useState({});

  const handleChange = (e) => {
    setNewBeer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //ALWAYS INCLUDE THIS
    console.log('submitted');
  };

  return (
    <div>
      <Header />
      <h1> new beer </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="text" />
        <textarea type="text" />
        <input type="text" />
        <input type="text" />
        <input type="number" />
        <input type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewBeer;
