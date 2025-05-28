// * DefineProperty Method
function product(name, price, quantity) {
  this.name = name,
  this.price = price,

  Object.defineProperty(this, 'quantity', {
    enumerable: true,               // ? Indexable?
    value: quantity,              // ? value
    writable: false,            // ? change value
    configurable: false       // ? change configuration
  }); // ! defineProperty method
}

const p1 = new product("T-Shirt", 20, 5)

console.log(p1)
console.log(p1.quantity)
console.log(Object.keys(p1))


// * DefineProperties Method
function Person(name, age, sallary) {
  Object.defineProperties(this, {
    name : { value: name, writable: false },
    age: { value: age, writable: false },
    sallary: { value: sallary, writable: false }
  });
}
