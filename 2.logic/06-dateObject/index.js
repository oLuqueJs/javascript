// Date Object

// Date Constructor
const date = new Date();        
const zeroDate = new Date(0);   // timestamp Unix 01/01/1970

// Convertions
console.log(date.toString());   // Date as String
console.log(date.getTime());    // Date in milliseconds

const oneDay = 60 * 60 * 24 * 1000;                  // one day in milliseconds
const nextDay = new Date(date.getTime() + oneDay);   // next day
console.log(nextDay.toString())

