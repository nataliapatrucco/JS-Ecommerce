import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import UserPageSidebar from "../components/UserPageSidebar";
import axios from "axios";
import PastOrder from "../components/PastOrder";
import UserAddress from "../components/UserAddress";

class UserPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userReviews: {},
      address: "",
      newAddress: "",
      pastOrders: [],
      user: {},
      pastOrder: {}
    };
    this.handleAddress = this.handleAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/user/allMyInfo")
      .then(res => res.data)
      .then(user => {
          
        //   pastOrders.map((order)=> {
        //     if (order.id === orderId) {
        //         this.setState({pastOrder: order})
        //     }

        //   })
        this.setState({
          userReviews: user.reviews,
          address: user.address,
          pastOrders: user.pastOrder,
          user: user
        });
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.address !== "") {
      axios.post("/api/user/address", {
        address: this.state.newAddress
      });
      this.setState({ address: this.state.newAddress });
      this.props.history.push("/user/0");
    }
  }

  handleAddress(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({ newAddress: e.target.value });
  }

  render() {
    console.log(this.state.address);
    return (
      <div className="container">
        <div className="row">
          <UserPageSidebar
            user={this.state.user}
            address={this.state.address}
            pastOrders={this.state.pastOrders}
            reviews={this.state.userReviews}
          />
          {this.props.location.pathname === "/user/address" ? (
            <UserAddress
              handleSubmit={this.handleSubmit}
              handleAddress={this.handleAddress}
              address={this.state.address}
              user={this.state.user}
            />
          ) : (
            <PastOrder />
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(UserPageContainer);
