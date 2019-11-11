import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarContainer from "../containers/NavbarContainer";
import { connect } from "react-redux";
import HomeContainer from "../containers/HomeContainers";
import { fetchUser } from "../store/actions/user";
import { fetchCart } from "../store/actions/cart";
import SingleProductContainer from "../containers/SingleProductContainer"



class Main extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchCart(this.props.user)
  }


  render() {
    return (
      <div id="main container-fluid">
        <NavbarContainer />
        <Switch>
          {console.log(this.props)}

          <Route exact path="/product/:id" component={SingleProductContainer}/>
          
          <Route exact path="/" component={HomeContainer} />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return ({
    user: user.user
  })
}

const mapDispatchToProps = {
  fetchUser,
  fetchCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
