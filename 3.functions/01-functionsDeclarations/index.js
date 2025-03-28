// Function Declaration (Function Hoisting)
cheers()
function cheers() {
  console.log("Hello World");
}

// First-class Objetcs
const data = function() {
  console.log("random data here")
}
data()

// Function as Parameter
function execute(func) {
  func()
}
execute(data)

// Arrow Function
const arrow = () => {
  console.log('Heyy!')
}
arrow()

// Object Functions
const obj = {
  speak() {
    console.log("My object is speaking!")
  }
};
obj.speak