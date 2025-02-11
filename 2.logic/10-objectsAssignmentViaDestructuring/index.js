// Basic object
const Person = {
    name: 'Louis',
    surname: 'Armstrong',
    age: 30,
    address: {
        street: 'Main Street',
        number: 101
    }
}

console.log(Person) // Get Person Object
console.log(Person.name) // Get Person Name


// Using assignment via destructuring
const { name, age = '' } = Person; // when setting age = '',  if age does not exist, '' will be a default value
console.log(name, age)

const {surname: mySurname } = Person // using another name
console.log(mySurname)


// getting address information
const { address, address: {street}} = Person;
console.log(address)
console.log(street)


// Rest operator
const { address: {number: streetNumber}, ...rest } = Person
console.log(streetNumber)
console.log(rest)