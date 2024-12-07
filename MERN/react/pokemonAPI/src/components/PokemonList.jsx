import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        setPokemon(response.data.results);
      })
      .catch((err) => {
        setError("Failed to fetch Pokémon data");
      });
  }, []);
  return (
    <ul>
      {pokemon.map((poke, index) => (
        <li key={index}>{poke.name}</li>
      ))}
    </ul>
  );
};

export default PokemonList;
