// * < Example Code >
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

// * < Babel Transpilation >
// ? on terminal -> npx babel main.js -o bundle.js --presets=@babel/env
// ? (optionally, you can use -w flag to watch changes)

// ? or just use pnpm build
