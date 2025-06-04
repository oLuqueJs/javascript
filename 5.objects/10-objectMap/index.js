// * Arrays
const persons = [
  { id: 3, name: 'Louis'},
  { id: 2, name: 'Oda'},
  { id: 1, name: 'Mario'}
];

//  const newPersons = {}
//  for (const (id, name) of persons) {
//    const { id } = person;
//    newPersons[id] = { id, name };
//  }


// * Map
const newPersons = new Map();
for (const person of persons) {
  const { id } = person;
  newPersons.set(id, { ...person });
}

console.log(newPersons.get(2));