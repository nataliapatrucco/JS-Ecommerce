import React, { Component } from "react";
import RouteHook from "react-route-hook";
import { Switch, Route } from "react-router-dom";
import store from "../store/store";
import Footer from "../components/Footer";
import NavbarContainer from "../containers/NavbarContainer";
import { connect } from "react-redux";
import HomeContainer from "../containers/HomeContainers";
import StarRatings from "./react-star-ratings";

class Main extends Component {
  render() {
    return (
      <div id="main container-fluid">
        <NavbarContainer />
        <Switch>
          <Route exact path="/">
            {HomeContainer}
          </Route>
          {/* <Route
            exact
            path="/register"
            render={() => {
              return <RegisterContainer />;
            }}
          /> */}
          {/* <Route
            exact
            path="/login"
            render={() => {
              return <LoginContainer />;
            }}
          /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default connect(
  null,
  null
)(Main);
