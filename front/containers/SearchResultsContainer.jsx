import React, { Component } from "react";
import { connect } from "react-redux";
import SearchResults from "../components/SearchResults";
import { searchProducts } from "../store/actions/product";
import CategorySideBar from "../components/CategorySidebar";

export class SearchResultsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catFilter: ""
    };
    this.selectFilter = this.selectFilter.bind(this);
    this.filteredCategories = this.filteredCategories.bind(this);
    props.searchProducts(props.searchQuery);
  }

  selectFilter(e) {
    this.setState({ catFilter: e.target.name });
  }

  filteredCategories() {
    const filters = [];
    this.props.products.map(product =>
      product.category.map(category => {
        if (!filters.includes(category)) filters.push(category);
      })
    );
    return filters;
  }

  render() {
    return (
      <div>
        <CategorySideBar
          selectFilter={this.selectFilter}
          filterCategories={this.filteredCategories()}
        />
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
