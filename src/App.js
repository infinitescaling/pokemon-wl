import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WishList from "../src/Components/Wishlist"
import pokemonJSON from "./static/released_pokemon.json";

function App() {
  const availablePokemon = [];
  const [userWishlist, setUserWishlist] = useState([]);
  const [pokemonPicker, setPokemonPicker] = useState("Select a Pokemon");
  let handlePokemonchange = (e) => {
    setPokemonPicker(e.target.value);
  }
  useEffect(() => {
    setUserWishlist([]);
  }, []);
 useEffect(() => {
  // console.log("UserWishlist: " + userWishlist);
}, [userWishlist]);
  // const addToWishList = (userWishlist, userWishlist, setUserWishlist) => {
  //   // alert("Add clicked");
  //   setUserWishlist([...userWishlist, pokemonPicker]);
  // };
  // Push pokemon to Available Pokemon Array
  Object.keys(pokemonJSON).forEach((key) =>
  {
    availablePokemon.push(pokemonJSON[key]);
  });
  return (
    <div className="App">
      <WishList userWishList={userWishlist} />
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
        <Button 
          variant="outline-primary"
          type="button"
          onClick={
            () => setUserWishlist((oldArray) => [...oldArray,pokemonPicker])
          }>
            Add
        </Button>
      </header>

    </div>
  );
}

export default App;
