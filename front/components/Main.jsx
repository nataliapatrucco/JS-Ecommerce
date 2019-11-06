import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarContainer from "../containers/NavbarContainer";
import { connect } from "react-redux";
import HomeContainer from "../containers/HomeContainers";

class Main extends Component {
  render() {
    return (
      <div id="main container-fluid">
        <NavbarContainer />
        <Switch>
          <Route exact path="/">
            {HomeContainer}
          </Route>
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
