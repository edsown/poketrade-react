import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import TradeArea from "./TradeArea";
const PokemonList = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [blueTeam, setBlueTeam] = useState([]);
  const [redTeam, setRedTeam] = useState([]);

  const getPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();
    setLoadMore(data.next);

    function getPokemonData(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    getPokemonData(data.results);
  };

  useEffect(() => {
    getPokemons();
  }, []);
  function handleA(pokemon) {
    if (blueTeam.length === 6) {
      alert("Só é possível adicionar até 6 pokemons");
    } else {
      setBlueTeam([...blueTeam, pokemon]);
      console.log(blueTeam, "team blue");
    }
  }
  function handleB(pokemon) {
    if (redTeam.length === 6) {
      alert("Só é possível adicionar até 6 pokemons");
    } else {
      setRedTeam([...redTeam, pokemon]);
      console.log(redTeam, "team red");
    }
  }

  function handleClearPokemon() {
    setBlueTeam([]);
    setRedTeam([]);
  }

  return (
    <div className="masterContainer">
      <TradeArea
        teamA={blueTeam}
        teamB={redTeam}
        handleClearPokemon={handleClearPokemon}
      />
      <div className="listContainer">
        {allPokemons.map((pokemonData, index) => (
          <PokemonCard
            xp={pokemonData.base_experience}
            image={pokemonData.sprites.other.dream_world.front_default}
            name={pokemonData.name}
            key={index}
            type={pokemonData.types[0].type.name}
            url={`https://pokeapi.co/api/v2/pokemon/${pokemonData.name}`}
            onClickA={handleA}
            onClickB={handleB}
          />
        ))}
      </div>
      <button onClick={getPokemons}>Load More</button>
    </div>
  );
};

export default PokemonList;
