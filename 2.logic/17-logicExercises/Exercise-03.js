// FizzBuzz Exercise

const che = (x) => {
  let res = x%3 === 0 && x%5 === 0 ? 'FizzBuzz' : x%3 === 0 ? 'Fizz' : x%5 === 0 ? 'Buzz' : x
  return typeof x !== 'number' ? x : res
}


console.log(che(3))