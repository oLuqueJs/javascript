const clock = document.querySelector('.clock');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
let secs = 0;
let timer;

function getTimeSecs(secs) {
  const date = new Date(secs * 1000)
  return date.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

function startClock(){
  if (timer) return;
  clock.classList.remove('paused')
    timer = setInterval(function() {
    secs++;
    clock.innerHTML = getTimeSecs(secs);
  },1000);
}

function stopClock() {
  clearInterval(timer);
  timer = null;
  clock.classList.add('paused')
}

function resetClock() {
  stopClock();
  clock.classList.remove('paused')
  secs = 0;
  clock.innerHTML = getTimeSecs(secs);
}

document.addEventListener('click', function(event) {
  const element = event.target
  if (element.classList.contains('start')) {
    startClock();
  }
  if (element.classList.contains('stop')) {
    stopClock();
  }
  if (element.classList.contains('reset')) {
    resetClock();
  }
})
