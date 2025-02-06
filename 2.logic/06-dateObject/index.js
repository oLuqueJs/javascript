// Date Object

// Date Constructor
const date = new Date();        // Create a date with current time        
const zeroDate = new Date(0);   // timestamp Unix 01/01/1970
console.log(Date.now)           // Usign Date.now

// Convertions
console.log(date.toString());   // Date as String
console.log(date.getTime());    // Date in milliseconds

const oneHour = 60 * 60 * 1 * 1000;                  // one hour in milliseconds
const oneDay = 60 * 60 * 24 * 1000;                  // one day in milliseconds
const nextDay = new Date(date.getTime() + oneDay);   // next day
console.log(nextDay.toString())

// Date Constructior with Params
//                          y  m   d   h   m   s
const newdate = new Date(2019, 3, 20, 15, 14, 27)    // Date with number params
const newdate2 = new Date('2019-04-20 20:20:59')     // String Format

// Date info separately
// Weekdays -> 0 = sunday & 6 = saturday
// Months   -> 0 = jan & 11 = dec
console.log(newdate.getFullYear())                     // Get Year
console.log(newdate.getMonth())                        // Get month 
console.log(newdate.getDate())                         // Get day
console.log(newdate.getHours())                        // Get hours
console.log(newdate.getMinutes())                      // Get minutes
console.log(newdate.getSeconds())                      // Get seconds
console.log(newdate.getMilliseconds())                 // Get milliseconds
console.log(newdate.getDay())                          // Get weekday

// Function with date

function addLeftZero (num) {
    return num >= 10 ? num : `0${num}`
}

function brazilFormatDate(date) {
    const day = addLeftZero(date.getDate());
    const month = addLeftZero(date.getMonth() + 1);
    const Year = date.getFullYear();
    return (`${day}/${month}/${Year}`)
}
const brazilDate = brazilFormatDate(date)
console.log(brazilDate)