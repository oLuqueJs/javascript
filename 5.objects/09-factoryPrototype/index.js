// * Factory Person
function createPerson(name, surname) {
  const personPrototype = {
    speak() {
      console.log(`${this.name} is speaking`)
    },

    eat() {
      console.log(`${this.name} is eating`)
    }

  }

  return Object.create(personPrototype, {
    name: { enumerable: true, value: name },
    surname: { enumerable: true, value: surname },
  })
}

const p1 = createPerson('Louis', 'Grahan')
