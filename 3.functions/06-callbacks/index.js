// Random time execution functions
function randomTimeout(min = 1000, max = 3000) {
  const value = Math.random() * (max - min) + min;
  return Math.floor(value)
}

function f1(callback) {
  setTimeout(function() {
    console.log('f1');
    if (callback) callback(); // Callback
  }, randomTimeout());
}

function f2(callback) {
  setTimeout(function() {
    console.log('f2');
    if (callback) callback(); // Callback
  }, randomTimeout());
}

function f3(callback) {
  setTimeout(function() {
    console.log('f3');
    if (callback) callback(); // Callback
  }, randomTimeout());
}

f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log('Hello World!')
}



/*
 ! Callback Hell
 * f1(function(){
 *   f2(function(){
 *     f3(function(){
 *       console.log('Hello World!')
 *     })
 *   })
 * });
*/