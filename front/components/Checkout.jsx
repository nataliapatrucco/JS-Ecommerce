import React from "react";

//submit
export default function Checkout({
  cart,
  user,
  address,
  handleInput,
  handleSubmit,
  handlePurchase
}) {
  return (
    <div>
      {cart.length ? (
        <div className="row">
          <div id="addressChange" className="col">
            <p>Your shipping address is: {address}</p>
            <p>If you want to update the address, fill the form below</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="address"
                  onChange={e => {
                    handleInput(e);
                  }}
                ></input>
              </div>
              <button type="submit" className="btn btn-light">
                Submit
              </button>
            </form>
          </div>
          <div className="col">
            {cart.map(item => {
              const { name, price, image, quantity } = item;
              return (
                <div key={item.id}>
                  <p>
                    <strong>{name}</strong>
                  </p>
                  <p>Unit Price: {price}</p>
                  <img id="checkoutImg" src={image.slice(1)} />
                  <p>Quantity: {quantity}</p>
                  <p>
                    Subtotal ${" "}
                    {typeof price === "string"
                      ? parseInt(price.slice(1)) * quantity
                      : price * quantity}
                  </p>
                  <hr />
                </div>
              );
            })}
            <div>
              {
                <p>
                  TOTAL $
                  {cart
                    .map(cartItem =>
                      typeof cartItem.price === "string"
                        ? parseInt(cartItem.price.slice(1)) * cartItem.quantity
                        : cartItem.price * cartItem.quantity
                    )
                    .reduce((total, nextItem) => total + nextItem)}
                </p>
              }
              <button
                type="submit"
                className="btn btn-light"
                onClick={handlePurchase}
              >
                Confirm your order
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
