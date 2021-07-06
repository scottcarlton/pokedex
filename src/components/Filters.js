import React, { useState, useContext } from 'react';
import { PokedexContext } from '../context/PokedexProvider';

import Checkbox from './Checkbox';

import styled from 'styled-components';

const StyledFilters = styled.aside`
  width: 300px;
  height: 100%;
  padding: 24px;
`
const StyledFiltersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Filters = () => {

  const [types, setTypes] = useState([]);

  const [weaknesses, setWeaknesses] = useState([]);

  const {
    pokemonData,
    filterByType,
    filterByWeaknesses,
    clearFilters
  } = useContext(PokedexContext);

  const buildTypes = () => {
    pokemonData.forEach(pokemon => {
      pokemon.type.forEach(type => {
        if (!types.includes(type)) {
          setTypes([type, ...types])
        }
      });
    })
    types.sort();
  }

  const buildWeaknesses = () => {
    pokemonData.forEach(pokemon => {
      pokemon.weaknesses.forEach(weakness => {
        if (!weaknesses.includes(weakness)) {
          setWeaknesses([weakness, ...weaknesses])
        }
      });
    })
    weaknesses.sort();
  }

  buildTypes();
  buildWeaknesses();

  return (
    <StyledFilters>
      <StyledFiltersHeader>
        <h2>Filters</h2>
        <button type="button" onClick={clearFilters}>Clear</button>
      </StyledFiltersHeader>
      <h3>Types</h3>
      { types && types.map(type => (
        <Checkbox input={type} key={type} onChange={filterByType} />
      ))}
      <h3>Weakness</h3>
      { weaknesses && weaknesses.map(weakness => (
        <Checkbox input={weakness} key={weakness} onChange={filterByWeaknesses} />
      ))}
    </StyledFilters>
  );
}

export default Filters;
