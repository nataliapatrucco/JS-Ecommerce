import React, { Component } from "react";
import { connect } from "react-redux";

import Navbar from "../components/Navbar";

import { userLogOutCart } from "../store/actions/cart";
import { userRegUser, userLogOut, userLogIn } from "../store/actions/user";

class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: ""
    };
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleSubmitRegister = this.handleSubmitRegister.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmitRegister(event) {
    event.preventDefault();
    this.props.userRegUser(
      this.state.name,
      this.state.email,
      this.state.password
    );
    document.querySelector("#registerForm").reset();
    document.querySelector("#registerClose").click();

    // .then(() => this.props.history.push("/"));
  }

  handleLogOut(event) {
    event.preventDefault();
    this.props.userLogOut();
    this.props.userLogOutCart();
    //.then(() => this.props.history.push("/"));
  }
  handleLogIn(event) {
    event.preventDefault();
    document.querySelector("#loginClose").click();
    this.props.userLogIn(this.state.email, this.state.password);

    // .then(() => this.props.history.push("/"));
  }

  handleInput(e) {
    const tag = e.target.name.toLowerCase();
    this.setState({ [tag]: e.target.value });
  }

  render() {
    const { user, location } = this.props;
    return (
      <div>
        <Navbar
          location={location}
          user={user}
          handleLogIn={this.handleLogIn}
          handleInput={this.handleInput}
          handleLogOut={this.handleLogOut}
          handleSubmitRegister={this.handleSubmitRegister}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = {
  userLogOut,
  userLogOutCart,
  userRegUser,
  userLogIn
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
