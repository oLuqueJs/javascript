// * Factory Function
function createPerson(name, surname) {
  return {
    name,
    surname
  }
}
const p1 = createPerson('Luis', 'Pereira')
console.log(p1) // ! return object = { name: 'Louis', surname: 'Pereira' }


// * Factory Function with Methods
function createPerson2(name, surname) {
  return {
    name,
    surname,
    mood: 'Happy', // ! must use THIS.

    // ! Method
    speak: function(subject) {
      return `${name} is speaking about ${subject}. \n${name} is ${this.mood}`
    },

  }
}
const p2 = createPerson2('Marcelo', 'Bandeira')
console.log(p2.speak('JavaScript'))


// * Factory Function with Getter
function createPerson3(name, surname, book) {
  return {
    name,
    surname,
    bookname: book,

    speak: function(subject) {
      return `${name} is speaking about ${subject}. \n${name} is ${this.mood}`
    },

    // ! Getter
    get bookDetails() {
      return this.bookname;
    }
  }
}
const p3 = createPerson3('Rodrigo', 'Formiga', '100 Noites')
console.log(p3.bookDetails)


// * Factory Function with Setter
function createPerson4(name, surname, book) {
  return {
    name,
    surname,
    bookname: book,

    speak: function(subject) {
      return `${name} is speaking about ${subject}. \n${name} is ${this.mood}`
    },

    get bookDetails() {
      return this.bookname;
    },

    // ! Setter
    set bookDetails(name) {
      this.bookname = name;
    }

  }
}
const p4 = createPerson4('Paulo', 'Chagas', 'O rei')
p4.bookDetails = "O louco"
console.log(p4.bookDetails)