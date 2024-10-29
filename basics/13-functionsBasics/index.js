// basic function
function cheers() {
    console.log("Hallo!");
}
cheers(); // call cheers function


// basic function with params
function cheersWithName(name) {
    console.log(`Hallo ${name}!`);
}
cheersWithName('Klauss');  // Klauss is the param for name "Hallo Klauss!"
cheersWithName('Levi');


// another basic function with params
function sum(x, y) {
    const result = x + y;
    return  result;
}
console.log(sum(2,2));  // 4
console.log(sum(10,3)); // 13

 
// store function return in a variable
function cheersVariable(name) {
    return `Hallo ${name}!`;
}
const resCheers = cheersVariable('Marco');
console.log(resCheers); // function return









/* 
ignore this!

function with param

function checkTall(isTall) {
    if (isTall) {
        console.log("Ist Groß!")
    }   else {
        console.log("Ist nitch Groß!")
    }
}
checkTall();
let isTall = true;
checkTall(isTall);
*/
