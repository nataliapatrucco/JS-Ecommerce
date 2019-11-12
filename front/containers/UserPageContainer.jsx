import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import UserPage from '../components/UserPage';
import axios from 'axios';

class UserPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userReviews: {},
        address: "",
        pastOrders: [],
        user: {}
    }
  }

  componentDidMount(){
      axios.get('/api/user/allMyInfo').then(res=>res.data).then((user)=>{
        this.setState({
            userReviews: user.reviews,
            address: user.address,
            pastOrders: user.pastOrder,
            user: user
          });
      })
  }

  render() {
    return (
    <div>
        <UserPage 
        user = {this.state.user}
        address = {this.state.address}
        pastOrders = {this.state.pastOrders}
        reviews = {this.state.userReviews}
        />
      </div>
    );
  }
}

export default connect(
  null,
  null
)(UserPageContainer);
