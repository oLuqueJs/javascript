// * Symbol
const _speed = Symbol('speed') // ? Private


// * Class
class Car {
  constructor(name) {
    this.name = name;
    this[_speed] = 0;
    this.maxSpeed = 105;
  }

  accelerate() {
    if (this[_speed] >= this.maxSpeed) return;
    this[_speed]++; //? 
  }

  brake() {
    if (this._speed < 0) return;
    this[_speed]--;
  }

  get speed() {
    return this[_speed];
  } // ? Getter


  set speed(value) {
    if (typeof value !== 'number') return;
    if (value >= 100 || value <= 0) return;
    this[_speed] = value;
  } // ? Setter
}

const c1 = new Car('Skyline R34');
for (let i = 0; i <= 200; i++) {
  c1.accelerate();
}

console.log(c1);