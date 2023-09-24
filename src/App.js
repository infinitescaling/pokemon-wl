import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import logo from './logo.svg';
import './App.css';
import pokemonJSON from "./static/released_pokemon.json";

function App() {
  let availablePokemon = [];
  const [pokemonPicker, setPokemonPicker] = useState("Select a Pokemon");
  let handlePokemonchange = (e) => {
    setPokemonPicker(e.target.value);
    console.log(pokemonPicker);
  }
  const addToWishList = () => {
    alert("Hello!");
  };
  // Push pokemon to Available Pokemon Array
  Object.keys(pokemonJSON).forEach((key) =>
  {
    availablePokemon.push(pokemonJSON[key]);
  });
  return (
    <div className="App">
      <header className="App-header">
        {pokemonPicker}
        <select onChange={handlePokemonchange}> 
          <option value="Select a Pokemon"> -- Select a Pokemon -- </option>
          {
            availablePokemon.map(
              (pokemonPicker) => 
                <option value={pokemonPicker.name}>{pokemonPicker.name}</option>
              )
          }
        </select>
        <Button variant="outline-primary" onClick={addToWishList}>Add</Button>
      </header>

    </div>
  );
}

export default App;
