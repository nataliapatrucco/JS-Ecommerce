const {Product, Category, User} = require("../models/index")
const S = require("sequelize")
const Op = S.Op

// Adding relations
    Category.findOne({where: {categoryName: "pants"}}).then((category => {
      Product.findAll({where: {category: {[Op.contains]: ['pants'] }}}).then(products =>{
        category.setProduct(products);
      })
    }))

    Category.findOne({where: {categoryName: "shirts"}}).then((category => {
      Product.findAll({where: {category: {[Op.contains]: ['shirts'] }}}).then(products =>{
        category.setProduct(products);
      })
    }))

    Category.findOne({where: {categoryName: "dresses"}}).then((category => {
      Product.findAll({where: {category: {[Op.contains]: ['dresses'] }}}).then(products =>{
        category.setProduct(products);
      })
    }))

    Category.findOne({where: {categoryName: "black"}}).then((category => {
      Product.findAll({where: {category: {[Op.contains]: ['black'] }}}).then(products =>{
        category.setProduct(products);
      })
    }))

    Category.findOne({where: {categoryName: "red"}}).then((category => {
      Product.findAll({where: {category: {[Op.contains]: ['red'] }}}).then(products =>{
        category.setProduct(products);
      })
    }))

    Category.findOne({where: {categoryName: "blue"}}).then((category => {
      Product.findAll({where: {category: {[Op.contains]: ['blue'] }}}).then(products =>{
        category.setProduct(products);
      })
    }))

    /* 
    
    magic methods of category:

    getProduct: [Function]
    countProduct: [Function]
    hasProduct: [Function]
    setProduct: [Function]
    addProduct: [Function]
    removeProduct: [Function]
    createProduct: [Function] 

    */


  //  Product.findOne({where:{name: 'black shirt'}}).then(product=>{
  //   product.createReview({rating: 5, comment: "Very Nice"});
  //   product.createReview({rating: 8, comment: "Amazing!!"});
  // })
  // Product.findOne({where:{name: 'blue shirt'}}).then(product=>{
  //   product.createReview({rating: 3, comment: "Very Nice"});
  //   product.createReview({rating: 8, comment: "Amazing!!"});
  // })
  // Product.findOne({where:{name: 'red pants'}}).then(product=>{
  //   product.createReview({rating: 5, comment: "Very Nice"});
  //   product.createReview({rating: 8, comment: "Amazing!!"});
  // })
  // Product.findOne({where:{name: 'black dress'}}).then(product=>{
  //   product.createReview({rating: 5, comment: "Very Nice"});
  //   product.createReview({rating: 8, comment: "Amazing!!"});
  // })
     
/*
magic methods of Product

getCategories: [Function],
countCategories: [Function],
hasCategory: [Function],
hasCategories: [Function],
setCategories: [Function],
addCategory: [Function],
addCategories: [Function],
removeCategory: [Function],
removeCategories: [Function],
createCategory: [Function],
getCarts: [Function],
countCarts: [Function],
hasCart: [Function],
hasCarts: [Function],
setCarts: [Function],
addCart: [Function],
addCarts: [Function],
removeCart: [Function],
removeCarts: [Function],
createCart: [Function],
getReviews: [Function],
countReviews: [Function],
hasReview: [Function],
hasReviews: [Function],
setReviews: [Function],
addReview: [Function],
addReviews: [Function],
removeReview: [Function],
removeReviews: [Function],
createReview: [Function] }

*/

/*

User methods

hashPassword: [Function],
  randomSalt: [Function],
  validatePassword: [Function],
  getCurrentCart: [Function],
  setCurrentCart: [Function],
  createCurrentCart: [Function],
  getHistory: [Function],
  countHistory: [Function],
  hasHistory: [Function],
  setHistory: [Function],
  addHistory: [Function],
  removeHistory: [Function],
  createHistory: [Function],
  getReviews: [Function],
  countReviews: [Function],
  hasReview: [Function],
  hasReviews: [Function],
  setReviews: [Function],
  addReview: [Function],
  addReviews: [Function],
  removeReview: [Function],
  removeReviews: [Function],
  createReview: [Function] }

  */

User.findOne({where:{name: 'jared'}}).then(user=>{
  Product.findOne({where:{name: 'black shirt'}}).then(product=>{
    user.createReview({rating: 5, comment: "not the best, but still functions as a shirt", author: user.name}).then(review=>{
      product.addReview(review)
    })
  })  
  Product.findOne({where:{name: 'blue shirt'}}).then(product=>{
    user.createReview({rating: 8, comment: "looks coooooool", author: user.name}).then(review=>{
      product.addReview(review)
    })
  }) 
})

User.findOne({where:{name: 'ivan'}}).then(user=>{
  Product.findOne({where:{name: 'black shirt'}}).then(product=>{
    user.createReview({rating: 9, comment: "love the color!", author: user.name}).then(review=>{
      product.addReview(review)
    })
  })  
  Product.findOne({where:{name: 'blue shirt'}}).then(product=>{
    user.createReview({rating: 3, comment: "not blue enough", author: user.name}).then(review=>{
      product.addReview(review)
    })
  }) 
  Product.findOne({where:{name: 'red pants'}}).then(product=>{
    user.createReview({rating: 10, comment: "like a glove!", author: user.name}).then(review=>{
      product.addReview(review)
    })
  }) 
  Product.findOne({where:{name: 'black dress'}}).then(product=>{
    user.createReview({rating: 1, comment: "wtf i ordered the black shirt", author: user.name}).then(review=>{
      product.addReview(review)
    })
  }) 
})

User.findOne({where:{name: 'gonza'}}).then(user=>{
  Product.findOne({where:{name: 'black shirt'}}).then(product=>{
    user.createReview({rating: 5, comment: "eh...whatever", author: user.name}).then(review=>{
      product.addReview(review)
    })
  })  
  Product.findOne({where:{name: 'blue shirt'}}).then(product=>{
    user.createReview({rating: 5, comment: "whatever....", author: user.name}).then(review=>{
      product.addReview(review)
    })
  }) 
})

User.findOne({where:{name: 'milo'}}).then(user=>{
  Product.findOne({where:{name: 'black shirt'}}).then(product=>{
    user.createReview({rating: 1, comment: "fuck this shirt", author: user.name}).then(review=>{
      product.addReview(review)
    })
  })  
  Product.findOne({where:{name: 'blue shirt'}}).then(product=>{
    user.createReview({rating: 10, comment: "yaaaa, i wear this everyday", author: user.name}).then(review=>{
      product.addReview(review)
    })
  }) 
  Product.findOne({where:{name: 'red pants'}}).then(product=>{
    user.createReview({rating: 8, comment: "cant go wrong with red", author: user.name}).then(review=>{
      product.addReview(review)
    })
  }) 
  Product.findOne({where:{name: 'black dress'}}).then(product=>{
    user.createReview({rating: 1, comment: "no thx", author: user.name}).then(review=>{
      product.addReview(review)
    })
  }) 
})

User.findOne({where:{name: 'nati'}}).then(user=>{
  Product.findOne({where:{name: 'black shirt'}}).then(product=>{
    user.createReview({rating: 10, comment: "good shirt", author: user.name}).then(review=>{
      product.addReview(review)
    })
  })  
  Product.findOne({where:{name: 'blue shirt'}}).then(product=>{
    user.createReview({rating: 10, comment: "great shirt", author: user.name}).then(review=>{
      product.addReview(review)
    })
  }) 
  Product.findOne({where:{name: 'red pants'}}).then(product=>{
    user.createReview({rating: 5, comment: "more red plz..", author: user.name}).then(review=>{
      product.addReview(review)
    })
  }) 
  Product.findOne({where:{name: 'black dress'}}).then(product=>{
    user.createReview({rating: 6, comment: "ok, but not black enough", author: user.name}).then(review=>{
      product.addReview(review)
    })
  }) 
})
