// * IIFE -> Immediately Invoked Function Expression
function anything() {
  console.log(231);
}
anything(); // ! this is a Immediately Invocation...


// * Automatic Invocation (IIFE)
(function(age, weight) {
  // ! Protected Scope

  const surname = 'Pereira';
  function createName(name) {
    return name + ' ' + surname;
  }

  function speakName() {
    console.log(createName('Louis'));
  }

  speakName();
  console.log(age, weight) // ! 30,80
  
})(30,80)


// * IIFE Structure
(function() {
  // ! code here...
})();