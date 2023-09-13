import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./PokeList.css";
import PokeCard from "../PokeCard/PokeCard";

export default function PokeList() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const getAllPokemon = async () => {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=649&offset=0"
    );
    const data = await res.json();

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemon((currentList) => [...currentList, data]);
        await allPokemon.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
  };
  
  useEffect(() => {
    console.log(getAllPokemon())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredPokemon = allPokemon.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    navigate(`/${searchTerm}`);
  };

  return (
    <div className="app-container">
      <div className="pokemon-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Pokémon by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="all-container">
          {filteredPokemon.map((pokemonStats) => (
            <PokeCard
              key={pokemonStats.id}
              id={pokemonStats.id.toString().padStart(3, "0")}
              image={
                pokemonStats.sprites.other["official-artwork"].front_default
              }
              name={pokemonStats.name.replace(/^./, (str) => str.toUpperCase())}
              type={pokemonStats.types[0].type.name}
              weight={pokemonStats.weight}
              height={pokemonStats.height}
              stats={pokemonStats.stats
                .map((stat) => stat.base_stat)
                .slice(0, 3)}
              statsName={pokemonStats.stats
                .map((stat) => stat.stat.name)
                .slice(0, 3)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
