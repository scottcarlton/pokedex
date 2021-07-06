import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const PokedexContext = createContext();

let search = '';
let filteredTypes = [];
let filteredWeaknesses = [];

const PokedexProvider = ({ children }) => {

  const [loading, setLoading] = useState();

  const [pokemonData, setPokemonData] = useState([]);
  const [filteredPokemonData, setFilteredPokemonData] = useState([]);

  //const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json',
      )
      .then(response => {
        setPokemonData(response.data.pokemon);
        setFilteredPokemonData(response.data.pokemon);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error', error)
      });
  }, []);

  const _filterProperty = (/** Array */ values, /** String */ property, /** Array */ filters) => {
    let collection = [];

    values.forEach(value => {

      let matches = [];

      value[property].forEach(type => {
        if (filters.includes(type)) {
          matches.push(type)
        }
      })

      if (matches.length === filters.length) {
        collection.push(value)
      }
    });

    return collection;
  }

  const _filterByName = (/** Array */ collection) => {
    return collection.filter(pokemon => pokemon.name.toLowerCase().startsWith(search.toLowerCase()));
  }

  const _filterPokedex = (/** Array */ collection) => {
    // filter by name
    if (search.length) {
      collection = _filterByName(collection);
    }
    // filter by types
    if (filteredTypes.length) {
      collection = _filterProperty(collection, 'type', filteredTypes);
    }
    // filter by weaknesses
    if (filteredWeaknesses.length) {
      collection = _filterProperty(collection, 'weaknesses', filteredWeaknesses);
    }

    return collection;
  }

  const filterByType = (/** Object */ e) => {

    if (e) {
      const value = e.target.value;
      if (e.target.checked && !filteredTypes.includes(value)) {
        filteredTypes.push(value);
      } else {
        filteredTypes = filteredTypes.filter(type => type !== value)
      }
    }

    setFilteredPokemonData(_filterPokedex(pokemonData));
  }

  const filterByWeaknesses = (/** Object */ e) => {

    if (e) {
      const value = e.target.value;
      if (e.target.checked && !filteredWeaknesses.includes(value)) {
        filteredWeaknesses.push(value);
      } else {
        filteredWeaknesses = filteredWeaknesses.filter(type => type !== value)
      }
    }

    setFilteredPokemonData(_filterPokedex(pokemonData));
  }

  const filterByName = (/** Object */ e) => {
    search = e.target.value;
    setFilteredPokemonData(_filterPokedex(pokemonData));
  }

  const clearFilters = () => {
    filteredTypes.length = 0;
    filteredWeaknesses.length = 0;
    document.querySelectorAll('.js-input').forEach(input => {
      input.checked = false;
    })
    setFilteredPokemonData(_filterByName(pokemonData));
  }

  const providerValues = {
    loading,
    pokemonData,
    filteredPokemonData,
    setFilteredPokemonData,
    filterByName,
    clearFilters,
    filterByType,
    filterByWeaknesses,
  }

  return (
    <PokedexContext.Provider value={providerValues}>{ children }</PokedexContext.Provider>
  );
}

export default PokedexProvider;
