import React, { useState, useEffect } from "react";
import { Button, Header, PokemonCards } from "./components";
import Container from "./components/Container/Container";
import "./index.css";

function App() {
  console.log("app rendered");
  const homeURL =
    "https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1";
  const [url, setUrl] = useState(homeURL);
  const [nextUrl, setNextUrl] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  console.log(pokemons);

  useEffect(() => {
    // console.log("inside useEffect");
    // Initially IsLoading So
    setIsLoading(true);
    // fetch hook - data from API
    async function fetchDataFromAPI() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw Error("Something Went Wrong");
        }
        const resData = await res.json();
        setNextUrl(resData[0].next);
        setPokemons((prev) => {
          return [...prev, ...resData[0].results];
        });
        setIsError(null);
        console.log("data send");
      } catch (error) {
        console.dir(error.message);
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDataFromAPI();
  }, [url]);

  return (
    <Container>
      <Header />
      <div className="app-container">
        <div className="pokemon-container">
          <PokemonCards pokemons={pokemons} isLoading={isLoading} />
          <Button
            className="load-more"
            onClick={(e) => {
              console.log("Load More clicked");
              setUrl(nextUrl);
            }}
          >
            Load More
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default App;
