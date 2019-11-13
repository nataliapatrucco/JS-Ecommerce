import React from "react";

export default ({ pastOrder }) => {
  {
    console.log("PastOrder", pastOrder);
  }
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
            </div>
          ))}
        <hr />
        <h5>Total: $ {pastOrder.total}</h5>
      </ul>
    </div>
  );
};
