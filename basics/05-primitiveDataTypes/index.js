// String
const name = 'Maria';
const name1 = "Maria";
const name2 = `Maria`;

// Number
const num = 10;
const num2 = 20;
const num3 = 10.55;

// Undefined
let username;
let password;
let dataCreation;

// Null (NULL != 0) & (NULL != undefined)
let country = null
let state = null
let city = null

// Boolean
let buttonStateOn = true // 1
let buttonStateOff = false // 0
let isPasswordCorrect = false;

// Get data types
let userType = typeof (username)
let countryType = typeof (country)
let nameType = typeof (name)


console.log(`username data type is: ${userType}`)
console.log(`country data type is: ${countryType}`)
console.log(`name data type is: ${nameType}`)

console.log('buttonState data type is: ' + typeof(buttonStateOn))