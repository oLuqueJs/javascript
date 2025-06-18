const { default: axios } = require("axios"); // ! Node module. (USE NPM I)

// * Fetch
async function fetchPoke() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/gengar');
  const data = await res.json(); // ? Fetch return a promise here, and we need to convert to json

  console.log({
    id: data.id,
    name: data.name,
  })
}

fetchPoke();


// * Axios
async function fetchPokeWithAxios() {
  const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/riolu') // ? axios already use .json() built-in
  const data = resp.data;
  console.log({
    id: data.id,
    name: data.name,
  });
}

fetchPokeWithAxios()