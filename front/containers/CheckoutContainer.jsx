import React, { Component } from 'react'
import { connect } from 'react-redux'

import Checkout from '../components/Checkout'

class CheckoutContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            address: ''
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(e) {
        const tag = e.target.name
        this.setState({ [tag]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        //        axios.post('/api/user/address')
    }

    render() {
        const { cart, user } = this.props
        return (
            <div className='container'>
                <Checkout
                    user={user}
                    cart={cart}
                    handleInput={this.handleInput}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user.user,
    cart: state.cart.cart
});

export default connect(mapStateToProps, null)(Checkout)

