import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { userRegUser } from "../store/actions/user";
import { userLogOut } from "../store/actions/user";
import { userLogIn } from "../store/actions/user";
import { userLogOutCart } from "../store/actions/cart";
import { fetchCart } from "../store/actions/cart";
import Axios from "axios";

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
    this.handleSubmitCreate = this.handleSubmitCreate.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }

  handleSubmitCreate(e) {
    e.preventDefault();
    let updatedProduct = {};
    updatedProduct.category = this.state.category.split(" ");
    updatedProduct.description = this.state.description;
    updatedProduct.image = this.state.image;
    updatedProduct.name = this.state.name;
    updatedProduct.price = this.state.price;

    Axios.post("/api/admin/create", updatedProduct).then(() => {});
    document.querySelector("#editCruz").click();
    window.location.reload()
  }
  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangePrice(event) {
    this.setState({ price: event.target.value });
  }

  handleChangeDescription(event) {
    this.setState({ description: event.target.value });
  }

  handleChangeImage(event) {
    this.setState({ image: event.target.value });
  }


  handleChangeCategory(event) {
    this.setState({ category: event.target.value });
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
    window.localStorage.clear();
    this.props.history.push("/");
  }
  handleLogIn(event) {
    event.preventDefault();
    document.querySelector("#loginClose").click();
    this.props.userLogIn(this.state.email, this.state.password).then(res => {
      if (!res) {
        alert("Wrong username or password");
      } else {
        this.props.fetchCart(this.props.user, this.props.cart);
        window.localStorage.clear();
      }
    });
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
          handleSubmitCreate={this.handleSubmitCreate}
          handleChangeName={this.handleChangeName}
          handleChangeImage={this.handleChangeImage}
          handleChangePrice={this.handleChangePrice}
          handleChangeDescription={this.handleChangeDescription}
          handleChangeCategory={this.handleChangeCategory}
          wrongUser={this.state.wrongUser}
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
  user: state.user.user,
  cart: state.cart.cart
});

const mapDispatchToProps = {
  userLogOut,
  userLogOutCart,
  userRegUser,
  userLogIn,
  fetchCart
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
