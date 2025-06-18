// * Random Time Function (aux)
function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min) // ? Random number in MS
}


// * Function with Promise
function connectDB(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string'){
      reject(false);
      return;
    } 

    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}


// * Promise.all
const promises = [
  connectDB('Promise 1', rand(1,5)),
  connectDB('Promise 2', rand(1,5)),
  connectDB('Promise 3', rand(1,5)),
  'Finish!'
];

Promise.all(promises).then(
  (val) => {
    console.log(val);
  }
).catch(
  (e) => {
    console.log(e);
  }
); // ? Run all the promises and return an array with all responses.


// * Promise.race
Promise.race(promises).then(
    (val) => {
    console.log(val);
  }
).catch(
  (e) => {
    console.log(e);
  }
); // ? Run all the promises and return only the fastest response
