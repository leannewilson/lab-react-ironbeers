import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import AllBeer from './components/AllBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import SingleBeer from './components/SingleBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/beers" render={(props) => <AllBeer {...props} />} />
        <Route
          exact
          path="/random-beer"
          render={(props) => <RandomBeer {...props} />}
        />
        <Route
          exact
          path="/new-beer"
          render={(props) => <NewBeer {...props} />}
        />
        <Route
          exact
          path="/beer/:_id"
          render={(props) => <SingleBeer {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
