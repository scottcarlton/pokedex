import { useContext } from 'react';
import { PokedexContext } from '../context/PokedexProvider';

const Search = () => {

  const { filterByName } = useContext(PokedexContext);

  return (
    <form>
      {/* <label>Search By Name</label> */}
      <input type="search" placeholder="Search by name" onChange={filterByName} />
    </form>
  );
}

export default Search;
