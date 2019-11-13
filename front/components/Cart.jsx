import React from "react";

import AlterQuantButton from "../components/AlterQuantButton";

export default function Cart({ cart, quantAddOne, quantSubOne, quantRemove }) {
  return (
    <div className='row'>
      <div className="col-8">
        {cart &&
          cart.map(cartItem => {
            const { name, price, id, image, quantity } = cartItem;
            console.log('PRICEEEEEEEEEEEE', price)

            return (
              <div className="singleItemInCart" key={`${cartItem}_${id}`}>
                <img src={image} alt={`${name} image`} />
                <div className="singleItemText">
                  <p>{name}</p>
                  <p>{price}</p>
                  <AlterQuantButton
                    product={cartItem}
                    quantity={quantity}
                    quantAddOne={quantAddOne}
                    quantSubOne={quantSubOne}
                    quantRemove={quantRemove}
                  />
                  <button
                    className="removeItemButton"
                    onClick={() => quantRemove(cartItem)}
                  ></button>
                  {price
                    ? <p>subtotal: $ {typeof price === 'string'
                      ? parseInt(price.slice(1)) * quantity
                      : price * quantity}</p>
                    : <p>Loading...</p>}
                </div>
              </div>
            );
          })}

      </div>
      {Object.keys(cart).length ? (
        <div className='checkoutDiv col-4'>
          <p>TOTAL ${cart
            .map(cartItem => typeof cartItem.price === 'string'
              ? parseInt(cartItem.price.slice(1)) * cartItem.quantity
              : cartItem.price * cartItem.quantity)
            .reduce((total, nextItem) => total + nextItem)}</p>
          <button
            type='button'
            className='btn btn-light'
            onClick={() => {
              alert('Please Log in')
              document.querySelector("#loginButton").click()
            }
            }>checkout</button>
        </div>)
        : <p>Loading...</p>}
    </div>

  );
}
