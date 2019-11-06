const Product = require("../models/Product")

Product.bulkCreate([
  { name: 'Black Shirt', price: 15, description: "A nice black shirt that never gets dirty", image: "/back/seed/images/blackshirt.jpg", category: ['shirt','black']},
  { name: 'Red Shirt', price: 15, description: "A nice red shirt that looks cool", image: "/back/seed/images/redshirt.jpg", category: ['shirt','red']},
  { name: 'White Shirt', price: 15, description: "A nice white shirt", image: "/back/seed/images/whiteshirt.jpg", category: ['shirt','white']},
  { name: 'Gold Pants', price: 40, description: "Stylish gold pants for looking cool", image: "/back/seed/images/goldpants.jpg", category: ['pants','gold']},
  { name: 'Grey Pants', price: 25, description: "Comfortable sweatpants for home or the streets", image: "/back/seed/images/greypants.jpg", category: ['pants','grey']},
  { name: 'Brown Pants', price: 35, description: "Standard pants for whatever", image: "/back/seed/images/brownpants.jpg", category: ['pants','brown']},
  { name: 'Black Dress', price: 40, description: "A nice conservative black dress for any occasion", image: "/back/seed/images/blackdress.jpg", category: ['dress','black']},
  { name: 'Red Dress', price: 65, description: "A eye-catching red dress for those special occasions", image: "/back/seed/images/reddress.jpg", category: ['dress','red']},
  { name: 'Green Dress', price: 40, description: "A cool green dress for hanging out", image: "/back/seed/images/greendress.jpg", category: ['dress','green']},
]).then(() => { // Notice: There are no arguments here, as of right now you'll have to...
  return Product.findAll();
}).then(products => {
  console.log(products) // ... in order to get the array of user objects
})

