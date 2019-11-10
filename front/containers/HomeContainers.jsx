import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/actions/product";
import Search from "../components/Search";
import RandomView from "../components/RandomView";
import { searchProducts } from "../store/actions/product";
import { isHome } from "../store/actions/navbar";

export class HomeContainers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.fetchProducts();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.props.isHome(
      this.props.location.pathname === window.location.pathname
    );
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchProducts(this.state.text);
  }

  handleAdd() {}

  render() {
    console.log("!----! HOME CONTAINERS PROPS", this.props);
    return (
      <div>
        <Search
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <RandomView products={this.props.products} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchProducts,
  searchProducts,
  isHome
};
const mapStateToProps = state => ({
  products: state.products.products,
  isHome: state.isHome
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainers);
