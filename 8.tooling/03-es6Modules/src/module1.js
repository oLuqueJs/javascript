// * < Example Module >
const name = 'Robert';
const surname = 'Paul';
const age = 30;

function sum (x, y) {
  return x + y;
}


// * < Exporting >
export class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
} // ? explicit export usage


export {
  sum as func, // ? rename export
  name,
  surname, 
  age, 
} // ? export as array