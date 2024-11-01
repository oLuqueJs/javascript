// Ternary Operation
// (?) -> if / (:) -> else
const pointsUser = 999;

// Basic If
if (pointsUser >= 1000) {
    console.log('VIP User')       // True
}   else {
    console.log('Standart User')  // False
}


// ? :
//                     Condition          True          False
const userLevel = pointsUser >= 1000 ? 'VIP User' : 'Standart User';
console.log(userLevel)


// extra: Basic Fallback
const userColor = null;
const defaultUserColor = userColor || 'Black';  // define userColor as black when userColer is not defined

console.log(userLevel, defaultUserColor)