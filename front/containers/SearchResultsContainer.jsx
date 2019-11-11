import React, { Component } from "react";
import { connect } from "react-redux";
import SearchResults from "../components/SearchResults";
import { searchProducts } from "../store/actions/product";
import CategorySideBar from "../components/CategorySidebar";
import { TiFilter } from "react-icons/ti";

export class SearchResultsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catFilter: ""
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.selectFilter = this.selectFilter.bind(this);
    props.searchProducts(props.searchQuery);
  }

  handleFilter() {
    this.props.products.filter(product => {});
  }

  selectFilter(e) {
    this.setState({ catFilter: e.target.name });
  }

  render() {
    return (
      <div>
        <CategorySideBar selectFilter={this.selectFilter} />
        <SearchResults
          catFilter={this.state.catFilter}
          products={this.props.products}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  searchProducts
};

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsContainer);
