import React, { Component } from "react";
import { connect } from "react-redux";
import Checkout from "../components/Checkout";
import axios from "axios";
import { userLogOutCart } from "../store/actions/cart";
import { fetchCart } from "../store/actions/cart";

class CheckoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      newAddress: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/user/allMyInfo")
      .then(res => res.data)
      .then(user => {
        this.setState({
          address: user.address || ""
        });
      });
  }

  handlePurchase() {
    axios.put("/api/user/allMyInfo");
    axios.post("/api/cart/checkout", {
      user: this.props.user,
      cart: this.props.cart
    });
    // this.props.fetchCart();
    this.props.userLogOutCart();
    this.props.history.push("/");
    window.localStorage.clear();
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post("/api/user/address", {
      address: this.state.newAddress
    });
    this.setState({ address: this.state.newAddress });
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({ newAddress: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <Checkout
          user={this.props.user}
          cart={this.props.cart}
          address={this.state.address}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          handlePurchase={this.handlePurchase}
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
  userLogOutCart,
  fetchCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);
