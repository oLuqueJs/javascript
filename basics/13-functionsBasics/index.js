// Basic function
function cheers() {
    console.log("Hallo!");
}
cheers(); // call cheers function


// Basic function with params
function cheersWithName(name) {
    console.log(`Hallo ${name}!`);
}
cheersWithName('Klauss');  // Klauss is the param for name "Hallo Klauss!"
cheersWithName('Levi');


// Basic function with params
function sum(x, y) {
    const result = x + y;
    return  result;
}
const resultdouble = sum(2,2)
console.log(resultdouble);  // 4
console.log(sum(10,3));     // 13

 
// Function return in a variable
function cheersVariable(name) {
    return `Hallo ${name}!`;
}
const resCheers = cheersVariable('Marco');
console.log(resCheers);     // function return


// Function in a variable
const Quadratwurzel = function (n) {
    return n ** 0.5;
};

console.log(Quadratwurzel(9))
console.log(Quadratwurzel(16))
console.log(Quadratwurzel(25))


// Arrow function
const ArrowQuadratwurzel = (n) => {            
    return n ** 0.5
}

const SimpleArrowQuadratwurzel = n => n ** 0.5;



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
