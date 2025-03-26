function returnDate(){
  let date = new Date();
  return date.toLocaleTimeString('pt-BR', {
    hour12: false
  });
}

// Interval
const timer = setInterval(function () {
  console.log(returnDate()); 
}, 1000); 


// Timeout
setTimeout(function() {
  clearInterval(timer);
  console.log('Stop!')
}, 5000); // stop interval after 5 secs

