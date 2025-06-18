// * Fetch (promise)
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(res => {
    if (res.status !== 200) throw new Error('404 Not found');
    return (res.json());
  })
  .then(data => {
    console.log({
      id: data.id,
      name: data.name,
    })
});


// * Fetch (async)
async function fetchPoke() {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/charizard');

    if (res.status !== 200) {
      throw new Error('404 Not Found');
    }

    const data = await res.json();
    console.log({
      id: data.id,
      name: data.name
    });
  } catch(e) {;
    console.log(e);
  }
}

fetchPoke();
