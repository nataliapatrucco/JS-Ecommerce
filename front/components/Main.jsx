import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarContainer from "../containers/NavbarContainer";
import { connect } from "react-redux";
import HomeContainer from "../containers/HomeContainers";
import { fetchUser } from "../store/actions/user";

class Main extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div id="main container-fluid">
        <NavbarContainer />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchUser
};

export default connect(
  null,
  mapDispatchToProps
)(Main);
