import React, { useState } from "react";
import "./pokemoncards.css";
import Card from "./Card";

function PokemonCards({ pokemons, isLoading }) {
  return (
    <div className="all-container">
      {isLoading ? (
        <div>Imagine Loader 😀 </div>
      ) : (
        <div className="all-container">
          {pokemons.map((pokemon) => (
            <Card key={pokemon.name} {...pokemon} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PokemonCards;
