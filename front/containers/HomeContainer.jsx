import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../store/actions/product';
import Search from '../components/Search';
import RandomView from '../components/RandomView';
import { searchProducts } from '../store/actions/product';
import { fetchAndAddToCart } from '../store/actions/cart';
import { fetchProduct } from '../store/actions/product';

export class HomeContainers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  handleChange(event) {
    this.setState({ searchQuery: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/${this.state.searchQuery}`);
  }

  handleAdd(product) {
    this.props.fetchAndAddToCart(product, this.props.user);
  }

  render() {
    return (
      <div>
        <Search
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <RandomView handleAdd={this.handleAdd} products={this.props.products} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchProducts,
  fetchProduct,
  searchProducts,
  fetchAndAddToCart
};

const mapStateToProps = state => ({
  products: state.products.products,
  user: state.user.user,
  selectedProduct: state.products.selectedProduct
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainers);
