
import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { PokedexContext } from '../context/PokedexProvider';

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import Details from '../components/Details';

const StyledLink = styled(Link)`
  display: inline-block;
  color: var(--color);
  margin: 24px;
`

function Pokedom() {

  const { pokemonData, setFilteredPokemonData, clearFilters } = useContext(PokedexContext);
  const [pokemon, setPokemon] = useState();
  const { id } = useParams();

  useEffect(() => {
    setPokemon(pokemonData.filter(data => data.num === id)[0]);
    clearFilters();
  }, [setPokemon, pokemonData, setFilteredPokemonData, id]);

  return (
    <div>
      <StyledLink to={'/'} arial-label="Back">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
      </StyledLink>
      { pokemon && <Details data={pokemon} /> }
    </div>
  );
}

export default Pokedom;
