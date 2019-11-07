const Product = require("../models/Product");

Product.bulkCreate([
  {
    name: "black shirt",
    price: 15,
    description: "A nice black shirt that never gets dirty",
    image: "./images/blackshirt.jpg"
  },
  {
    name: "red shirt",
    price: 15,
    description: "A nice red shirt that looks cool",
    image: "./images/redshirt.jpg"
  },
  {
    name: "white shirt",
    price: 15,
    description: "A nice white shirt",
    image: "./images/whiteshirt.jpg"
  },
  {
    name: "gold pants",
    price: 40,
    description: "Stylish gold pants for looking cool",
    image: "./images/goldpants.jpg"
  },
  {
    name: "grey pants",
    price: 25,
    description: "Comfortable sweatpants for home or the streets",
    image: "./images/greypants.jpg"
  },
  {
    name: "brown pants",
    price: 35,
    description: "Standard pants for whatever",
    image: "./images/brownpants.jpg"
  },
  {
    name: "black dress",
    price: 40,
    description: "A nice conservative black dress for any occasion",
    image: "./images/blackdress.jpg"
  },
  {
    name: "red dress",
    price: 65,
    description: "A eye-catching red dress for those special occasions",
    image: "./images/reddress.jpg"
  },
  {
    name: "green dress",
    price: 40,
    description: "A cool green dress for hanging out",
    image: "./images/greendress.jpg"
  }
])
  .then(() => {
    // Notice: There are no arguments here, as of right now you'll have to...
    return Product.findAll();
  })
  .then(products => {
    console.log(products); // ... in order to get the array of user objects
  });
