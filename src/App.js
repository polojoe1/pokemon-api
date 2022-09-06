import './App.css';
import {useState} from "react";

function App() {

  const [pokemon, setPokemon]= useState([]);
  const fetchPoke = () =>{
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => {
      return response.json();
  }).then(response => {
      console.log(response.results);
      setPokemon(response.results)
  }).catch(err=>{
      console.log(err);
  });
  }
  return (
    <div className="App">
      <h1>Pokemon API</h1>
      <button onClick={fetchPoke}>Fetch Pokemon</button>
      <ul>
        {pokemon.map((el,i)=>{
          return <li key={i}>{el.name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
