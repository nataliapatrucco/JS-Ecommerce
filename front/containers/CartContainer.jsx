import React, { Component as C } from "react";
import { connect } from "react-redux";

import Cart from "../components/Cart";

import {
  fetchCart,
  fetchAndAddToCart,
  fetchAndSubstractFromCart
} from "../store/actions/cart";

class CartContainer extends C {
  constructor(props) {
    super(props);
    this.quantAddOne = this.quantAddOne.bind(this);
    this.quantSubOne = this.quantSubOne.bind(this);
    // this.removeItem = this.removeItem.bind(this)
  }

  // componentDidMount() {
  //  //refresh cart
  //  this.props.fetchCart();
  // }

  quantAddOne(product) {
    this.props.fetchAndAddToCart(product, this.props.user);
  }

  quantSubOne(product) {
    this.props.fetchAndSubstractFromCart(product, this.props.user);
  }
  /*
  quantRemoveOne(product){
      this.props.fetchAndSubstractFromCart(product, this.props.user)
  }

  removeItem(){}
*/

  render() {
    const { cart } = this.props;

    return (
      <div>
        <Cart
          cart={cart}
          quantAddOne={this.quantAddOne}
          quantSubOne={this.quantSubOne}
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
  fetchAndSubstractFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
