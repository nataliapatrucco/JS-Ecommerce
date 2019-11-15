const { Product, Category, User, Cart } = require("../models/index");
const S = require("sequelize");
const Op = S.Op;

//To run the seed first run the two bulk creates and then comment them and run the associations.

Product.bulkCreate([
  {
    name: "black shirt",
    price: 15,
    description:
      "T-shirt in soft cotton jersey with a printed motif at front. Rounded, ribbed neckline and gently dropped shoulders.",
    image: "./images/blackshirt.jpeg",
    category: ["shirts", "black"]
  },
  {
    name: "blue shirt",
    price: 15,
    description: "Jersey T-shirt with a printed motif.",
    image: "./images/blueshirt.jpeg",
    category: ["shirts", "blue"]
  },
  {
    name: "white shirt",
    price: 15,
    description: "A nice white cotton shirt",
    image: "./images/whiteshirt.jpeg",
    category: ["shirts", "white"]
  },
  {
    name: "blue chinos",
    price: 40,
    description:
      "Chinos in washed, stretch cotton twill. Zip fly with button, side pockets, and welt back pockets with button. Slim Fit - relaxed over thighs and tapered from knees down for a relaxed, well-tailored look.",
    image: "./images/bluepants.jpeg",
    category: ["pants", "blue"]
  },
  {
    name: "red pants",
    price: 25,
    description:
      "Slacks in stretch twill. Regular waist, elasticized waistband, mock fly, diagonal side pockets, and mock welt back pockets. Ankle-length legs with creases.",
    image: "./images/redpants.jpeg",
    category: ["pants", "red"]
  },
  {
    name: "plaid pants",
    price: 35,
    description:
      "Pants in woven fabric. High waist with pleats, removable tie belt, and zip fly with concealed hook-and-eye fastener. Side pockets and tapered legs with creases.",
    image: "./images/tweedpants.jpeg",
    category: ["pants", "brown"]
  },
  {
    name: "black dress",
    price: 40,
    description:
      "A little black dress for any occasion. Short, sleeveless dress in sequined mesh with a low-cut V-neck front and back. Jersey lining made from recycled polyester.",
    image: "./images/blackdress.jpeg",
    category: ["dress", "black"]
  },
  {
    name: "long dress",
    price: 65,
    description:
      "Long dress in airy, lightly crinkled chiffon with a printed pattern. Narrow stand-up collar, buttons at top, and long sleeves with covered, elasticized cuffs. Gathered seam at waist and skirt with flounce at hem. Jersey liner dress with a V-neck and narrow, adjustable shoulder straps.",
    image: "./images/longdress.jpeg",
    category: ["dress", "black"]
  },
  {
    name: "red dress",
    price: 40,
    description:
      "Sleeveless, calf-length dress in airy woven fabric made from a Tencel® lyocell blend with linen content. Decorative gathers on shoulders, gathered yoke at back, and seam at hips. Seam at lower skirt with a flounce. V-neck liner dress in woven Tencel® lyocell fabric with narrow shoulder straps with concealed snap fastener for detaching liner dress..",
    image: "./images/reddress.jpeg",
    category: ["dress", "black"]
  },
  {
    name: "pattern shirt",
    price: 15,
    description:
      "Yo whatever buy the shirt!!",
    image: "./images/patternshirt.jpg",
    category: ["shirts", "black"]
  },
  {
    name: "design shirt",
    price: 30,
    description: "Shirt with some photo or something, just buy already!",
    image: "./images/designshirt.jpg",
    category: ["shirts", "black"]
  },
  {
    name: "offwhite shirt",
    price: 15,
    description: "not white, not orange, what color?? just buy!! ",
    image: "./images/offwhiteshirt.jpg",
    category: ["shirts", "white"]
  }
])
  .then(() => {
    // Notice: There are no arguments here, as of right now you'll have to...
    return Product.findAll();
  })
  .then(products => {
    console.log(products); // ... in order to get the array of user objects
  });

Category.bulkCreate([
  {
    categoryName: "shirts"
  },
  {
    categoryName: "pants"
  },
  {
    categoryName: "dresses"
  },
  {
    categoryName: "black"
  },
  {
    categoryName: "red"
  },
  {
    categoryName: "blue"
  }
])
  .then(() => {
    return Category.findAll();
  })
  .then(category => {
    console.log(category); // ... in order to get the array of user objects
  });

Category.bulkCreate([
  {
    categoryName: "shirts"
  },
  {
    categoryName: "pants"
  },
  {
    categoryName: "dresses"
  },
  {
    categoryName: "black"
  },
  {
    categoryName: "red"
  },
  {
    categoryName: "blue"
  }
])
  .then(() => {
    return Category.findAll();
  })
  .then(category => {
    console.log(category); // ... in order to get the array of user objects
  });

//     User.bulkCreate([
//       {name: 'jared', email: 'jared@jared.com', password:'abc123'},
//       {name: 'ivan', email: 'ivan@ivan.com', password:'abc123'},
//       {name: 'gonza', email: 'gonza@gonza.com', password:'abc123'},
//       {name: 'milo', email: 'milo@milo.com', password:'abc123'},
//       {name: 'nati', email: 'nati@nati.com', password:'abc123'},
//     ]).then(() => {
//       return User.findAll();
//     })
//     .then(users => {
//        console.log(users); // ... in order to get the array of user objects
//     });

User.create({ name: "jared", email: "j@j.com", password: "abc123" }).then(a =>
  console.log(JSON.stringify(a))
);
User.create({ name: "ivan", email: "i@ji.com", password: "abc123" }).then(a =>
  console.log(JSON.stringify(a))
);
User.create({ name: "gonza", email: "g@g.com", password: "abc123" }).then(a =>
  console.log(JSON.stringify(a))
);
User.create({ name: "milo", email: "m@m.com", password: "abc123" }).then(a =>
  console.log(JSON.stringify(a))
);
User.create({ name: "nati", email: "n@n.com", password: "abc123" }).then(a =>
  console.log(JSON.stringify(a))
);
