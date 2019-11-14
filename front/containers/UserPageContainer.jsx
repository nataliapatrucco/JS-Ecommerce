import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import UserPageSidebar from "../components/UserPageSidebar";
import axios from "axios";
import PastOrder from "../components/PastOrder";
import UserAddress from "../components/UserAddress";
import UserHomePage from "../components/UserHomePage";

class UserPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userReviews: [],
      address: "",
      newAddress: "",
      pastOrders: [],
      user: {},
      pastOrder: {}
    };
    this.handleAddress = this.handleAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.userRender = this.userRender.bind(this);
    this.fetchPastOrder = this.fetchPastOrder.bind(this);
    this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
    
  }

  fetchPastOrder() {
    
    this.state.pastOrders.map(order => {
      
      if (order.id === parseInt(this.props.orderId)) {
        
        order.total = order.products.reduce((accum, product)=>{
            return accum + (parseInt(product.price.slice(1)) * product.product_cart.quantity)
        }, 0)
        this.setState({ pastOrder: order });
      }
    });
  }

  handleReviewSubmit(e) {
    e.preventDefault();
      axios.post("/api/review/",{rating: e.target[0].value, comment: e.target[1].value, productId: e.target[2].value}).then(res=>res.data).then(()=> {
       axios.get("/api/review/user").then(res=>res.data).then(reviews=>{
        this.setState({userReviews: reviews})
       })
      })
  }

  componentDidMount() {
    axios
      .get("/api/user/allMyInfo")
      .then(res => res.data)
      .then(user => {
        this.setState({
          userReviews: user.reviews || [],
          address: user.address || "",
          pastOrders: user.pastOrder || [],
          user: user
        });
      });
  }

  handleSubmit(e) {
    e.preventDefault();
      axios.post("/api/user/address", {
        address: this.state.newAddress
      })
      this.setState({ address: this.state.newAddress });
      this.props.history.push("/user/");
  }

  handleAddress(e) {
    e.preventDefault();
    this.setState({ newAddress: e.target.value });
  }

  userRender(pathname, orderId) {
    
    switch (pathname) {
      case "/user/address":
        
        return (
          <UserAddress
            handleSubmit={this.handleSubmit}
            handleAddress={this.handleAddress}
            address={this.state.address}
            user={this.state.user}
          />
        );
      case `/user/order/${orderId}`:
        if (
          !this.state.pastOrder ||
          this.state.pastOrder.id !== parseInt(this.props.orderId)
        )
          this.fetchPastOrder();          ///give warning that the state is changing within render
        return <PastOrder 
        userReviews = {this.state.userReviews}
        handleReviewSubmit = {this.handleReviewSubmit}
        pastOrder={this.state.pastOrder} 
        />;
      default:
        return <UserHomePage />;
    }
  }

  render() {
   
    return (
      <div className="container">
        <div className="row">
          <UserPageSidebar
            user={this.state.user}
            address={this.state.address}
            pastOrders={this.state.pastOrders}
            reviews={this.state.userReviews}
          />
          {this.userRender(this.props.location.pathname, this.props.orderId)}
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(UserPageContainer);
