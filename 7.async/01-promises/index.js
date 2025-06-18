// * Random Time Function (aux)
function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min) // ? Random number in MS
}


// * Basic Example Mock (Without Promise)
function connectDB(msg, time) {
  setTimeout(() => {
    return msg
  }, time)
} 

// console.log(connectDB('DB Connected (1)', 1000));        // ? 1# call
// console.log(connectDB('DB Connected (2)', rand(1,5)));   // ? 2# call
// ! Both connection methods are called at same time, to avoid it we use Promises.


// * Promise Example
function connectDBWithPromise(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject(false); // ? Throw an error

    setTimeout(() => {
      resolve(msg); // ? Resolve and end the promise.
    }, time);
  });
}

connectDBWithPromise('test!', 1000).then(res => { console.log(res); }).catch();


// * Multiple Promises
connectDBWithPromise('1 - Starting new connection...', rand(1,5))
  .then(res => {
    console.log(res) // ! #1 Promise
    return connectDBWithPromise('2 - Successful connection!', rand(1,5))
  })
  .then(res => {
    console.log(res) // ! #2 Promise
    return connectDBWithPromise('3 - Connection process complete', rand(1,4))
  })
  .then(res => {
    console.log(res) // ! #3 Promise
    throw new Error('connection closed!')
  })
  .catch(e => {
    console.log('ERROR:', e)
  }); // ? Catch any error.

console.log("Code compiled!");
