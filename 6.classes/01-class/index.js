// * Class
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  } // ? Class Constructor 
}

const p1 = new Person("Phill", "Hands") // ? Using Constructor
console.log(p1)


// * Class & Methods
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  drive() {
    console.log(`${this.model} is running!`)
  }; // ? Class Method

  stop() {
    console.log(`${this.model} stopped!`)
  };
}

const c1 = new Car("Honda Civic", 1993);
const c2 = new Car("Trueno AE86", 1987)
c1.drive(); // ? Calling Car Methods
c1.stop();