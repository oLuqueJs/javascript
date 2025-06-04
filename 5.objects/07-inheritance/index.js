// * T-Shirt, mug => Product
function Product(name, price) {
  this.name = name;
  this.price = price;
}


// * Product methods in proto
Product.prototype.increase = function(value) {
  this.price += value
};

Product.prototype.decrease = function(value) {
  this.price -= value
};


// * T-shirt Constructor
function Tshirt(name, price, color) {
  Product.call(this, name, price);                  // ? Calling Product Constructor 
  this.color = color
}

Tshirt.prototype = Object.create(Product.prototype) // ? Cloning Product Prototype
Tshirt.prototype.constructor = Tshirt               // ? Setting Tshirt Constructor

const newTshirt = new Tshirt('basic', 20, "white");
newTshirt.increase(20);

console.log(newTshirt);


// * Mug Constructor
function Mug(name, price, material, stock) {
  Product.call(this, name, price);                   // ? this = Mug!
  this.material = material

  Object.defineProperty(this, 'stock', {
    enumerable: true,
    configurable: false,
    get: function() {
      return stock
    },
    set: function() {
      this.stock = stock
    },
  });
}

Mug.prototype = Object.create(Product.prototype)
Mug.prototype.constructor = Mug

const newMug = new Mug("boss mug", 35, "porcelain", 10);
newMug.decrease(10);

console.log(newMug);

