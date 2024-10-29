// Array is a collection or a list

//basic array
const students = ['James', 'Jobe', 'Rodri'];
console.log(students);

// arrays have also a index for each value 
console.log(students[0]);               // 'James'
console.log(students[2]);               // 'Rodri'

// add new insert
students[3] = 'Marco';                  // now we have a 3rd value into the array
students[0] = 'Yohan';                  // - James -> + Yohan

console.log(students.length);           // get array lenght (number of values into it)
students[students.length] = 'Jinbe';    // We can use the lenght as a index to alway add a new value
students[students.length] = 'Kant';     // + kant

students.push('Yamal');                 // Same as stundents[stundents.length]
students.push('Tyler');                 // + Tyler

students.unshift('Peralta');            // add Peralta at the start of the array
students.unshift('Jonin');              // ['Jonin', 'Peralta', 'Yohan' ...]
console.log(students)

// remove inserts
students.pop();                         // remove the last insert of the array (-Tyler)
const removed = students.pop();         // store removed inserts in a variable  (- Yamal)
console.log(removed)                    // show removed insert (yamal)
students.shift();                       // remove the first insert
delete students[1];                     // remove yohan but remains his index Peralta -> <1 empty item>
console.log(students)   

console.log(students.slice(0, 3));      // show values from index 0 to 2 (3 is ignored)