// * Constructor Function (Objects)
function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

// ! Creating a Person with Constructor Function
const p1 = new Person('Martin', 'Lewis')
const p2 = new Person('Lydia', 'Cavalcante')

console.log(p1)
console.log(p2.name)


// * Constructor with Methods
function PersonWithMethods(name, surname) {
  this.name = name;
  this.surname = surname;

  // ! Method
  this.printName = function() {
    console.log(this.name + " is My Name!")
  }
}
const p3 = new PersonWithMethods("Mary", "Janne")
p3.printName()


// * Constructor with Internal Attributtes 
function PersonWithInternalInfo(name, surname) {
  // ! Private Internal (Only accessible inside the function)
  const internalID = 1234;

  const internalMethod = function() {
    // ...
  };

  // ! Public
  this.name = name;
  this.surname = surname;
}