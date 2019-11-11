<<<<<<< HEAD
import React from 'react';
import { connect } from 'react-redux';
import SingleProduct from '../components/SingleProduct';
import { fetchProduct } from '../store/actions/product';
=======
import React from "react"
import { connect } from "react-redux";
import SingleProduct from "../components/SingleProduct"
import { fetchProduct } from "../store/actions/product"
import { fetchAndAddToCart } from "../store/actions/cart"
>>>>>>> 5a8dcdb9299a71c8926517f2a8627a0fcfeae1ff

class SingleProductContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.addProduct = this.addProduct.bind(this)
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.id)
    }

    addProduct(product) {
        
        this.props.fetchAndAddToCart(product, this.props.user)
    }

    render() {
        return (
            <div>
                <SingleProduct addProduct={this.addProduct} selectedProduct={this.props.selectedProduct}/>
            </div>
        )
    }
}

<<<<<<< HEAD
const mapStateToProps = ({ products }) => {
=======
const mapStateToProps = ({ products, user }) => {
    console.log(products)
>>>>>>> 5a8dcdb9299a71c8926517f2a8627a0fcfeae1ff
    return ({
        user: user.user,
        selectedProduct: products.selectedProduct
    })
}

const mapDispatchToProps = {
<<<<<<< HEAD
  fetchProduct
};
=======
    fetchProduct,
    fetchAndAddToCart
  };
>>>>>>> 5a8dcdb9299a71c8926517f2a8627a0fcfeae1ff

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductContainer);
