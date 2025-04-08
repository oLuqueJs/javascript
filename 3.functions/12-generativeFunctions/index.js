// * Generative Function
function* generator01() {
  // ! Yield -> changes value as it is called
  yield 'Value 01';
  yield 'Value 02';
  yield 'Value 03';
}

const r1 = generator01();
console.log(r1.next().value) // ! Value 01
console.log(r1.next().value) // ! Value 02
console.log(r1.next())       // ! { value: 'Value 03', done: true }


// * Generative Function with Infinite Loop
function* generator02() {
  let i = 0

  while(true) {
    yield i;
    i ++
  }
}
const r2 = generator02();
console.log(r2.next().value) // ! 0
console.log(r2.next().value) // ! 1
console.log(r2.next().value) // ! 2


// * Generative Functions as Yield
function* generator03() {
  yield 0;
  yield 1;
  yield 2;
}

function* generator04() {
  yield* generator03() // ! calling another generative function
  yield 3;
  yield 4;
  yield 5;
}

const r4 = generator04();
for(let value of r4) {
  console.log(value);
}


// * Yields with Functions
function* generator05() {
  yield function() {
    console.log('From Y1!');
  };

  yield function() {
    console.log('From Y2!');
  }

  return // ! When using a return in a generative function, the function stop.

}
const r5 = generator05();
const func1 = r5.next().value
const func2 = r5.next().value
func1();
func2();

