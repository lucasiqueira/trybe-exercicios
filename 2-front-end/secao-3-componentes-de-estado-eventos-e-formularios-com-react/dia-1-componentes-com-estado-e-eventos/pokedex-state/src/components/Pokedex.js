import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonIndex: 0,
      filterActive: false,
      filteredType: '',
      quantity: 0,
    };
    this.changeIndex = this.changeIndex.bind(this);
    this.changePokemonType = this.changePokemonType.bind(this);
  }

  defineTotal() {
    const { pokemonList } = this.props;
    const { quantity, filterActive } = this.state;
    if (filterActive) {
      return quantity;
    }
    return pokemonList.length;
  }

  changeIndex() {
    this.setState((prevState) => ({
      pokemonIndex: (prevState.pokemonIndex === this.defineTotal() - 1)
        ? 0 : prevState.pokemonIndex + 1,
    }));
  }

  async changePokemonType(event) {
    await this.setState({
      pokemonIndex: 0,
      filterActive: true,
      filteredType: event.target.innerHTML,
    });
    const { pokemonList } = this.props;
    const { filteredType } = this.state;
    await this.setState({
      quantity: pokemonList.filter((poke) => poke.type === filteredType).length,
    });
  }

  render() {
    const { pokemonList } = this.props;
    const { pokemonIndex, filterActive, filteredType } = this.state;
    const filteredPokeList = pokemonList.filter((poke) => poke.type === filteredType);
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          {
            (filterActive) ? (
              <Pokemon pokemon={ filteredPokeList[pokemonIndex] } />
            ) : (
              <Pokemon pokemon={ pokemonList[pokemonIndex] } />
            )
          }
        </div>
        <div>
          <button onClick={ this.changeIndex }>Próximo pokémon</button>
        </div>
        <div>
          <button id="fire" onClick={ this.changePokemonType }>Fire</button>
          <button id="psychic" onClick={ this.changePokemonType }>Psychic</button>
          <button id="electric" onClick={ this.changePokemonType }>Electric</button>
          <button id="bug" onClick={ this.changePokemonType }>Bug</button>
          <button id="poison" onClick={ this.changePokemonType }>Poison</button>
          <button id="normal" onClick={ this.changePokemonType }>Normal</button>
          <button id="dragon" onClick={ this.changePokemonType }>Dragon</button>
        </div>
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
};

export default Pokedex;
