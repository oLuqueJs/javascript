// * Constructor
function Person(name, age) {
  this.name = name;
  this.age = age

  // this.infoPerson = () => this.name + ' ' + this.age
}


// * Prototype
Person.prototype.sayHello = "Hello!" // ? Method in __proto__

Person.prototype.info = function() {
  return this.name + ' ' + this.age
}


// * __proto__
p1 = new Person("July", 21)
console.log(p1.info())
console.log(Person.prototype === p1.__proto__)