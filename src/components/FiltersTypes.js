import React, { useState, useContext } from 'react';
import { PokedexContext } from '../context/PokedexProvider';

import Checkbox from './Checkbox';

//import styled from 'styled-components';

const FiltersTypes = () => {

  const [types, setTypes] = useState([]);

  const {
    pokemonData,
    filterByType,
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

  buildTypes();

  return (
    <div>
      <h3>Types</h3>
      { types && types.map(type => (
        <Checkbox input={type} key={type} onChange={filterByType} />
      ))}
    </div>
  );
}

export default FiltersTypes;
