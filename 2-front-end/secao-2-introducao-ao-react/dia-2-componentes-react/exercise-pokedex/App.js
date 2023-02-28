import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import data from './data';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Exercise - Pokedex</h1>
        <Pokedex pokemonList={ data } />
      </div>
    );
  }
}

export default App;
