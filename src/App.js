import logo from './logo.svg';
import './App.css';
import React from 'react'
import Pokemon from '../src/Container/Pokemons'
import Summary from '../src/Components/Summary/Summary'
import { Route } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Route path="/" exact component={Pokemon} />
      <Route path="/pokemon/:id" component={Summary} />
      <Route path='/pokemon/new' render={() => { return 'this is rendering too' }} />
    </React.Fragment>
  );
}

export default App;
