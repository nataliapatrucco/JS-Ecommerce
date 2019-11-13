import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarContainer from "../containers/NavbarContainer";
import { connect } from "react-redux";
import HomeContainer from "../containers/HomeContainer";
import { fetchUser } from "../store/actions/user";
import SingleProductContainer from "../containers/SingleProductContainer";
import SearchResultsContainer from "../containers/SearchResultsContainer";
import UserPageContainer from "../containers/UserPageContainer";
import { fetchCart } from "../store/actions/cart";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchCart(this.props.user);
  }

  render() {
    const { location, history } = this.props;
    return (
      <div id="main container-fluid">
        <NavbarContainer location={location} history={history} />
        <Switch>
          <Route exact path="/product/:id" component={SingleProductContainer} />
          <Route
            exact
            path="/search/:query"
            render={({ match, history }) => (
              <SearchResultsContainer
                searchQuery={match.params.query}
                history={history}
              />
            )}
          />
          <Route exact path="/" component={HomeContainer} />

          {Object.keys(this.props.user).length ?  (
            <div>
            <Route
            exact
            path="/user"
            render={({ location, history, match }) => {
              
              return <UserPageContainer location={location} history={history}/>
              }}
          />

          <Route
            exact
            path="/user/order/:pastOrderId"
            render={({ location, history, match }) => {
              
              return <UserPageContainer location={location} history={history} orderId = {match.params.pastOrderId}/>}}
          />

          <Route
            exact
            path="/user/address"
            render={({ location, history, match }) => {
              
              return <UserPageContainer location={location} history={history}/>}}
          /> 
            </div>

          ) : 
          
          (<Route
            exact
            path="/user"
            component={HomeContainer}
          />)
          
          }
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchUser,
  fetchCart
};

const mapStateToProps = state => ({
  user: state.user.user,
  isUrlHome: state.navbar.home
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
