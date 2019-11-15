import React from "react";
import LeaveReview from "../components/LeaveReview"
import Review from "../components/Review"

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
              <img id="imgOrder" src={product.image.slice(1)} />
              <li>Product : {product.name}</li>
              <li>Quantity: {product.product_cart.quantity}</li>
              <li>Unit Price: {product.price}</li>


              {!productIds.includes(product.id) ? 
                <LeaveReview 
              handleReviewSubmit = {handleReviewSubmit}
              product = {product}
              /> :
              <div>
                <hr/>
              <span>Thanks for your review!</span>
              <Review  author={userReviews[productIds.indexOf(product.id)].name} rating ={userReviews[productIds.indexOf(product.id)].rating / 2} comment ={userReviews[productIds.indexOf(product.id)].comment}/>
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
