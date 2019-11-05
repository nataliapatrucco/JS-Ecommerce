import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { userRegUser } from "../store/actions/user";
import { userLogOut } from "../store/actions/user";
import { userLogIn } from "../store/actions/user";

class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleSubmitRegister = this.handleSubmitRegister.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
  }

  handleSubmitRegister(event) {
    event.preventDefault();
    this.props
      .userRegUser(this.state.email, this.state.password)
      .then(() => this.props.history.push("/"));
  }

  handleLogOut(event) {
    event.preventDefault();
    this.props.userLogOut().then(() => this.props.history.push("/"));
  }
  handleLogIn(event) {
    event.preventDefault();
    this.props
      .userLogIn(this.state.email, this.state.password)
      .then(() => this.props.history.push("/"));
  }
  handleEmailInput(e) {
    this.setState({ email: e.target.value });
  }
  handlePasswordInput(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div>
        <Navbar
          handleEmailInput={this.handleEmailInput}
          handlePasswordInput={this.handlePasswordInput}
          handleLogOut={this.handleLogOut}
          handleSubmitRegister={this.handleSubmitRegister}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.user ? state.user.data : ""
});

const mapDispatchToProps = {
  userLogOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
