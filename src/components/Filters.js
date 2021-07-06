import { useContext } from 'react';
import { PokedexContext } from '../context/PokedexProvider';


import FiltersTypes from './FiltersTypes';
import FiltersWeaknesses from './FiltersWeaknesses';

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

  const {
    clearFilters
  } = useContext(PokedexContext);



  return (
    <StyledFilters>
      <StyledFiltersHeader>
        <h2>Filters</h2>
        <button type="button" onClick={clearFilters}>Clear</button>
      </StyledFiltersHeader>
      <FiltersTypes />
      <FiltersWeaknesses />
    </StyledFilters>
  );
}

export default Filters;
