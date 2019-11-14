import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import SingleProduct from "../components/SingleProduct";
import {
  fetchProduct,
  adminEditProduct,
  adminDeleteProduct
} from "../store/actions/product";
import { fetchAndAddToCart } from "../store/actions/cart";

class SingleProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
    this.getReviews = this.getReviews.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
    if (this.props.selectedProduct && this.state.reviews.length === 0) {
      this.getReviews();
    }
  }
  handleDelete(product) {
    this.props.adminDeleteProduct(product);
    this.props.history.push(`/`);
  }
  handleSubmit(e) {
    e.preventDefault();
    let updatedProduct = {};
    updatedProduct.active =
      this.state.active || this.props.selectedProduct.active;
    updatedProduct.category =
      this.state.category || this.props.selectedProduct.category;
    updatedProduct.description =
      this.state.description || this.props.selectedProduct.description;
    updatedProduct.id = this.state.id || this.props.selectedProduct.id;
    updatedProduct.image = this.state.image || this.props.selectedProduct.image;
    updatedProduct.name = this.state.name || this.props.selectedProduct.name;
    updatedProduct.price = this.state.price || this.props.selectedProduct.price;
    updatedProduct.price = updatedProduct.price.slice(1);
    updatedProduct.rating =
      this.state.rating || this.props.selectedProduct.rating;
    updatedProduct.rating = updatedProduct.rating * 2;
    updatedProduct.stock = this.state.stock || this.props.selectedProduct.stock;

    this.props.adminEditProduct(updatedProduct);
    document.querySelector("#editCruz").click();

    this.props.history.push(`/`);
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

  getReviews() {
    axios
      .get(`/api/review/all/${this.props.selectedProduct.id}`)
      .then(res => res.data)
      .then(reviews => {
        this.setState({
          reviews: reviews
        });
      });
  }

  //YO

  addProduct(product) {
    this.props.fetchAndAddToCart(product, this.props.user);
  }

  render() {
    return (
      <div>
        <SingleProduct
          handleDelete={this.handleDelete}
          handleChangeName={this.handleChangeName}
          handleChangeImage={this.handleChangeImage}
          handleChangePrice={this.handleChangePrice}
          handleChangeDescription={this.handleChangeDescription}
          handleSubmit={this.handleSubmit}
          user={this.props.user}
          addProduct={this.addProduct}
          selectedProduct={this.props.selectedProduct}
          reviews={this.state.reviews}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ products, user }) => {
  return {
    user: user.user,
    selectedProduct: products.selectedProduct
  };
};

const mapDispatchToProps = {
  fetchProduct,
  fetchAndAddToCart,
  adminEditProduct,
  adminDeleteProduct
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductContainer);
