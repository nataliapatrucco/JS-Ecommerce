import React, { Component } from "react";
import RouteHook from "react-route-hook";
import { Switch, Route } from "react-router-dom";
import store from "../store/store";
import Footer from "../components/Footer";
import NavbarContainer from "../containers/NavbarContainer";
import RegisterContainer from "../containers/RegisterContainer";
import LoginContainer from "../containers/LoginContainer";
import { connect } from "react-redux";

class Main extends Component {
  render() {
    return (
      <div id="main container-fluid">
        <NavbarContainer />
        <Switch>
          <Route
            exact
            path="/register"
            render={() => {
              return <RegisterContainer />;
            }}
          />
          <Route
            exact
            path="/login"
            render={() => {
              return <LoginContainer />;
            }}
          />
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
