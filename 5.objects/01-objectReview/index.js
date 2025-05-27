// * JS Object
const person1 = {
  name: 'Mario',
  age: 15
}


// * Accessing Object Attributes 
console.log(person.name)
console.log(person['age'])


// * Object COnstructor
const person2 = new Object()
person2.name = 'Louis'
person2.age = 10

console.log(person2)


// * Object Methods
person2.speakName = function() {
  console.log(`${this.name}!`)
}

person1.speakName()


// * Factory Function
function createP(name, age) {
  return {
    name,
    age,

    get personInfo() {
      return `${this.name} ${this.age}`
    }, // Getter
  };
}


// * Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person3 = new Person("Jun", 22)


// * Object Freeze
function newPerson(name, age) {
  this.name = name,
  this.age = age

  Object.freeze(this) // ! values can't change now!
}