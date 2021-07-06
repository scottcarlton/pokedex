import React, { useContext } from 'react';
import { PokedexContext } from '../context/PokedexProvider';

import Header from '../components/Header';
import Container from '../components/Container';
import Filters from '../components/Filters';
import Cards from '../components/Cards';
import Card from '../components/Card';


function Pokedex() {

  const { loading, filteredPokemonData } = useContext(PokedexContext);

  return (
    <React.Fragment>
      <Header />
      <Container>
        <Filters />

        { loading && <div>Loading...</div> }
        { !loading && filteredPokemonData.length > 0 && (<Cards>
          { filteredPokemonData.map(pokemon => <Card data={pokemon} key={pokemon.id} />)}
        </Cards> )}
        { (!loading && !filteredPokemonData.length) && <div>Empty State</div> }
      </Container>
    </React.Fragment>
  );
}

export default Pokedex;
