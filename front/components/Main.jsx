import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import NavbarContainer from '../containers/NavbarContainer';
import { connect } from 'react-redux';
import HomeContainer from '../containers/HomeContainers';
import { fetchUser } from '../store/actions/user';
import SingleProductContainer from '../containers/SingleProductContainer';
import { testForHome } from '../store/actions/navbar';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  componentDidUpdate() {
    this.props.testForHome(
      this.props.location.pathname === this.props.match.path
    );
  }

  render() {
    const { isUrlHome } = this.props;
    return (
      <div id="main container-fluid">
        <NavbarContainer isUrlHome={isUrlHome} />
        <Switch>
          <Route exact path="/product/:id" component={SingleProductContainer} />
          <Route exact path="/" component={HomeContainer} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchUser,
  testForHome
};

const mapStateToProps = state => ({
  user: state.user.user,
  isUrlHome: state.navbar.home
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
