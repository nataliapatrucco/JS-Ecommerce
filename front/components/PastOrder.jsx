import React from "react";
import LeaveReview from "../components/LeaveReview"
import Review from "../components/Review"
import { Link } from "react-router-dom";

export default ({ pastOrder, handleReviewSubmit, userReviews }) => {

  let productIds = [];

  userReviews.map(review =>{
    productIds.push(review.productId);
  })
  

  return (
    <div className="col-8">
      <hr />
      <h5>Order Name: {pastOrder.name}</h5>
      <ul>
        {Object.keys(pastOrder).length &&
          pastOrder.products.map(product => (
            <div key={product.id}>
              <Link to={`/product/${product.id}`} className="noStyleLink">
                {/* <img id="imgOrder" src={product.image.slice(1)} /> */}
                <img id="imgOrder" src={
                    image[0] === '.' ?
                    image.slice(1) : image
                    } />
                <li>Product : {product.name}</li>
                <li>Quantity: {product.product_cart.quantity}</li>
                <li>Unit Price: {product.price}</li>
              </Link>
            
              {!productIds.includes(product.id) ? 
                <LeaveReview 
              handleReviewSubmit = {handleReviewSubmit}
              product = {product}
              /> :
              <div>
                <hr/>
              <span>Thanks for your review!</span>
              <Review  author={userReviews[productIds.indexOf(product.id)].name} rating ={userReviews[productIds.indexOf(product.id)].rating} comment ={userReviews[productIds.indexOf(product.id)].comment}/>
              </div>
              }
            </div>
          ))}
        <hr />
        <h5>Total: $ {pastOrder.total}</h5>
      </ul>
    </div>
  );
};
