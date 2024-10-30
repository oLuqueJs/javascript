// Basic object
const person = {
    name: 'Kruger',
    surname: 'Jagger',
    age: 45
};

// Get object attributes
console.log(person.name);
console.log(person.surname);
console.log(person.age);


// Function to Create Objects
function createPerson (name, surname, age) {
    return {
        name: name, 
        surname: surname,
        age: age
    };
};


// Creating Objects with createPerson
const person1 = createPerson('Angela', 'Konnig', '19');
const person2 = createPerson('Michael', 'Diostrut', '22');
const person3 = createPerson('Bale', 'Mancher', '18');
const person4 = createPerson('Rafael', 'Lisandro', '39');
console.log(person1.name, person1.surname, person1.age)
console.log(person2)


// Methods in Object and this.
const gingerPerson = {
    personName: 'Mary',
    hairColor: 'rothaarig',

    cheers() {
        // We use .this to access attributes declared within the object
        console.log(`Hallo ${this.personName}!`);   
    },

    getHairColor() {
        console.log(`${this.personName}, Deine Haare sind ${this.hairColor}!`);
    }

}

gingerPerson.cheers();
gingerPerson.getHairColor();