import { Switch, Route } from 'react-router-dom';
import Pokedex from './pages/Pokedex';
import Pokemon from './pages/Pokemon';
import PokedexProvider from './context/PokedexProvider';

function App() {

  return (
    <div>
      <PokedexProvider>
          <Switch>
            <Route path="/" exact>
              <Pokedex />
            </Route>
            <Route path="/:id">
              <Pokemon />
            </Route>
          </Switch>
      </PokedexProvider>
    </div>
  );
}

export default App;
