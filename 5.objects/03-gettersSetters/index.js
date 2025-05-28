// * < DefineProperty with Getter & Setters >

function product(name, price, quantity) {
  this.name = name,
  this.price = price,

  Object.defineProperty(this, 'quantity', {
    enumerable: true,
    configurable: true,          
    get: function() {
      return quantity;
    }, // ? Getter
    set: function(value) {
      if (typeof value !== 'number') {
        throw new TypeError("Value is not number")
      }

      this.quantity = value
    }, // ? Setter
  })
}