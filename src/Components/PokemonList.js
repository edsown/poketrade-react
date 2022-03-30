import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();
    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="masterContainer">
      <div className="listContainer">
        {allPokemons.map((pokemonData, index) => (
          <PokemonCard
            xp={pokemonData.base_experience}
            image={pokemonData.sprites.other.dream_world.front_default}
            name={pokemonData.name}
            key={index}
            type={pokemonData.types[0].type.name}
          />
        ))}
      </div>{" "}
      <button onClick={getPokemons}>Load More</button>
    </div>
  );
};

export default PokemonList;
