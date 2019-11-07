import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/actions/product";
import Search from "../components/Search";
import RandomView from "../components/RandomView";

export class HomeContainers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.fetchProducts();
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleAdd() {}

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <RandomView products={this.props.products} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchProducts
};
const mapStateToProps = state => ({
  products: state.products.products
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainers);
