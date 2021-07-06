import React, { useState, useContext } from 'react';
import { PokedexContext } from '../context/PokedexProvider';

import Checkbox from './Checkbox';

const FiltersWeaknesses = () => {

  const [weaknesses, setWeaknesses] = useState([]);

  const {
    pokemonData,
    filterByWeaknesses,
  } = useContext(PokedexContext);

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

  buildWeaknesses();

  return (
    <div>
      <h3>Weakness</h3>
      { weaknesses && weaknesses.map(weakness => (
        <Checkbox input={weakness} key={weakness} onChange={filterByWeaknesses} />
      ))}
    </div>
  );
}

export default FiltersWeaknesses;
