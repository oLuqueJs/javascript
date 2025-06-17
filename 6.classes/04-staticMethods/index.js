// * Static Methods
class RemoteController {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  increaseVolume() {
    if (this.volume == 100) return
    this.volume += 2;
  }

  decreaseVolume() {
    if (this.volume == 0) return;
    this.volume -= 2;
  }

  static changeBattery() {
    console.log("New batteries!")
  } // ? Static method (RemoteController class method)
}

const controller1 = new RemoteController("Samsung") // ? Instance
controller1.increaseVolume();
controller1.decreaseVolume();
// ! controller1.changeBattery(); You can't use class methods in an instance.

RemoteController.changeBattery(); // ? Class method
console.log(controller1);


