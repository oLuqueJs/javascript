// Try catch 
try {
  console.log(iAmError) // iAmError is not defined!
} catch (error) {
  console.log('iAmError does not exist')
  console.log(error) // in production we never log the error.
}


// Throwing Custom Errors
const sum = (x,y) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new TypeError('x or y must be a number') // TypeError
  }
  return x+y
}

try {
  console.log(sum(1,'1'))
} catch (err) {
  console.log('Error!')
}


// Finally (Always executed)
try {
  throw new Error();
  console.log('Hell Yeah')
} catch (e) {
  console.log('Error... :(')
} finally {
  console.log('Hell yeahhh!')
}


// Nested Trys
try{
  console.log(sum(1,2))

  try {
    console.log(sum(1+'2'))
  } catch (e) {
    throw new TypeError('X and Y must be numbers!')
  }

} catch (e) {
  console.log('error!')
} finally {
  console.log('Nested try catch!')
}