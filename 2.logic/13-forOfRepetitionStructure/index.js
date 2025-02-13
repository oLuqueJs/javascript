//  Basic String
//            0123456789
const name = 'Janne Ware';

// Using Basic For
for (let i = 0; i < name.length; i++) {
    console.log(name[i])
}

// Using Basic For In
for (let i in name) {
    console.log(name[i])
}

// Basic For Of
for (let value of name) {
    console.log(value)
}

// For Of with Vector
const names = ['Marcus', 'Sendoya', 'Michael']

for (let value of names) {
    console.log(value)
}

// forEach Function
names.forEach(function(value, index, array){
    console.log(value, index, array)
});

// Basic for -> recommended for iterable values (Array, Strings)
// For In -> recommended to get index or keys (Array, Strings, Object)
// For Of -> recommended to get values or complete array (Arrays or Strings)