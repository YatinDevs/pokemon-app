const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export async function fetchPokemons(offset, limit) {
  try {
    const response = await fetch(`${BASE_URL}?offset=${offset}&limit=${limit}`);
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export default async function fetchDataFromApi(url) {
  try {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (err) {
    console.log(err);
    return err;
  }
}
