import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import SingleProduct from '../components/SingleProduct';
import { fetchProduct } from '../store/actions/product';

class SingleProductContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews : []
        }
        this.getReviews = this.getReviews.bind(this);
        props.fetchProduct(this.props.match.params.id)
    }

    componentDidUpdate() {
       if(this.props.selectedProduct && this.state.reviews.length === 0) this.getReviews();
    }

    getReviews() {
        axios.get(`/api/review/all/${this.props.selectedProduct.id}`).then(res => res.data).then(reviews => {
            this.setState({
                reviews: reviews
              });
        })
    }

    render() {
        return (
            <div>
                {console.log(this.state)}
                {console.log(this.props.selectedProduct)}
                <SingleProduct selectedProduct={this.props.selectedProduct} reviews = {this.state.reviews}/>
            </div>
        )
    }
}

const mapStateToProps = ({ products }) => {
    return ({
        selectedProduct: products.selectedProduct
    })
}

const mapDispatchToProps = {
  fetchProduct
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductContainer);
