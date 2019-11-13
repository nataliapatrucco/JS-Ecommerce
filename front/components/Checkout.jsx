
import React from 'react'

//submit
export default function Checkout({ cart, user, handleInput, handleSubmit }) {


    const { address } = user
    return (
        <div>
            <p>Your shipping address is {address}</p>
            <p>If you want to update the address, fill the form below</p>

            <form onSubmit={handleSubmit}>
                <input type='text' name='address' onChange={handleInput}></input>
            </form>

            {cart.map(item => {
                const { name, price, image, quantity } = item;
                return (<div>
                    <p>{name}</p>
                    <p>{price}</p>
                    <img src={image} alt={`${name} image`} />
                    <p>{quantity}</p>
                    <p>Subtotal ${price * quantity}</p>
                </div>)
            }
            )}
            <div>{
                <p>TOTAL: ${cart
                    .map(cartItem => cartItem.price * cartItem.quantity)
                    .reduce((total, nextItem) => total + nextItem)}</p>}
            </div>
        </div>
    )
}
