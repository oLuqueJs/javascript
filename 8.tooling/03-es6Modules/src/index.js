// * < Importing >
import { 
  name as name2, // ? rename import
  surname,
  age,
  func,
  Person
} from "./module1"

// import * as MyModule from './module" // ? Import Everything


// * < Index Code >
const p1 = new Person('Louis', 'Maddison')
alert(name2, surname, age);
alert(func(10,5));
alert(p1);