// * Aux Functions
function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min) // ? Random number in MS
}


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

// * Promise
//connectDB('#1 call', rand(0,3))
//  .then(res => {
//    console.log(res);
//    return connectDB('#2 call', rand(0,3))
//  })
//  .then(res => {
//    console.log(res);
//  })
//  .catch(e => {
//    console.log(e)
//  });


// * Async Await
async function execute() {
  try {
    const p1 = await connectDB('Phase 1', rand(1,2)); // ? Await
    console.log(p1);

    const p2 = await connectDB('Phase 2', rand(1,3));
    console.log(p2)

    const p3 = await connectDB('Phase 3', rand(1,3));
    console.log(p3);
  } catch (e) {
    console.log(e);
  }
} // ? Async Function 

execute();
