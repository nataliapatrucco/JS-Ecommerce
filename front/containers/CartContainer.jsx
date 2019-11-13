import React, { Component as C } from "react";
import { connect } from "react-redux";

import Cart from "../components/Cart";

import {
  fetchCart,
  fetchAndAddToCart,
  fetchAndRemoveFromCart,
  fetchAndSubstractFromCart
} from "../store/actions/cart";

class CartContainer extends C {
  constructor(props) {
    super(props);

    this.state = {}

    this.quantAddOne = this.quantAddOne.bind(this);
    this.quantSubOne = this.quantSubOne.bind(this);
    this.quantRemove = this.quantRemove.bind(this);
  }



  quantAddOne(product) {
    this.props.fetchAndAddToCart(product, this.props.user);
  }

  quantSubOne(product) {
    this.props.fetchAndSubstractFromCart(product, this.props.user);
  }

  quantRemove(product) {
    this.props.fetchAndRemoveFromCart(product, this.props.user);
  }

  render() {
    const { cart } = this.props;

    return (
      <div className='container' >
        <Cart
          cart={cart}
          quantAddOne={this.quantAddOne}
          quantSubOne={this.quantSubOne}
          quantRemove={this.quantRemove}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  cart: state.cart.cart
});

const mapDispatchToProps = {
  fetchCart,
  fetchAndAddToCart,
  fetchAndRemoveFromCart,
  fetchAndSubstractFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
