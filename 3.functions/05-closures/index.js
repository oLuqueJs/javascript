function cheers(name) {
  return function () {
    console.log(`Hello ${name}!`)
  };
}

// * Closures
const cheerHinata = cheers('Hinata');
const cheerPaul = cheers('Paul');
cheerHinata() // ! Hello Hinata!
cheerPaul()   // ! Hello Paul!