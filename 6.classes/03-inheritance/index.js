// * Class
class Device {
  constructor(name) {
    this.name = name;
    this.isOn = false;
  }

  turnOn() {
    if (this.isOn) return;
    this.isOn = true;
  }

  turnOff() {
    if (!this.isOn) return;
    this.isOn = false;
  }
}

const d1 = new Device('Notebook')
d1.turnOn();

console.log(d1)


// * Inheritance (extends)
class Desktop extends Device { 
  constructor(name, processor) {
    super(name); // ? Super (Device Constructor)
    this.processor = processor;
  }
}

const pc = new Desktop('Asus', 'Ryzen 7');
pc.turnOff();

console.log(pc)


// * Override Existing Methods
class Tablet extends Device {
  constructor(name, battery) {
    super(name);
    this.battery = battery;
  }

  turnOn() {
    if (this.battery <= 30) {
      console.log("Low Battery")
      return;
    }

    this.isOn = true  
    
  } // ? Override Method
}

const t1 = new Tablet("Samsung", 29);
const t2 = new Tablet("Ipad", 55);
t1.turnOn();
t2.turnOn();

console.log(t1)
console.log(t2)
