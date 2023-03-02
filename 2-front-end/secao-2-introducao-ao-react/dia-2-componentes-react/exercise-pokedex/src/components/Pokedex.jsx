import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemonList } = this.props;
    return (
      <>
        <h1>Pokédex</h1>
        <ul>
          {pokemonList.map((pkm) => <Pokemon key={ pkm.id } pokemon={ pkm } />)}
        </ul>
      </>
    );
  }
}

Pokedex.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
};

export default Pokedex;
