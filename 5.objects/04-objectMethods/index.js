// * Object
const product = { name: 'Mug', price: 9.90 }


// * Copy object
const newProduct = product


// * Copy with more fields
const newProduct2 = { 
  ...product,
  color: "Black" 
}


// * Copy selected fields
const newProduct3 = {
  name: product.name
}


// * Change object field value
newProduct.price = 11.00;


// * Object Keys
console.log(Object.keys(newProduct));


// * GetOwnProperty
console.log(Object.getOwnPropertyDescriptor(product, 'name'))


// * Entries
for (let Entry of Object.entries(product)) {
  console.log(Entry)
}