function Calculator() {
  this.display = document.querySelector('.display');
  
  this.init = () => {
    this.getClicks();
    this.getEnter();
  }
  
  this.getClicks = () => {
    document.addEventListener('click', event => {
      const elemen = event.target;
      if (elemen.classList.contains('btn-num')) this.addNumberDisplay(elemen); 
      if (elemen.classList.contains('btn-clear')) this.clearDisplay(elemen); 
      if (elemen.classList.contains('btn-del')) this.del(elemen); 
      if (elemen.classList.contains('btn-eq')) this.execute(elemen); 
    })
  }

  this.getEnter = () => {
    document.addEventListener('keypress', event => {
      if (event.keyCode === 13) {
        this.execute()
      }
    })
  }

  this.addNumberDisplay = (elemen) => {
    this.display.value += elemen.innerText;
    this.display.focus();
  }

  this.clearDisplay = () => {
    this.display.value = '';
  }

  this.del = () => {
    this.display.value = this.display.value.slice(0, -1)
  }

  this.execute = () => {
    try {
      const operation = eval(this.display.value)
      if(!operation){
        alert('Invalid Operation')
        return;
      }
      this.display.value = operation
    } catch (error) {
      alert('Error!')
      return;
    }
  }
}
const c1 = new Calculator()
c1.init();