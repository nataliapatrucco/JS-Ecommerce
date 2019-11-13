import React, { Component } from "react";
import AdminUsersList from "../components/AdminUsersList";
import axios from "axios";

export default class AdminUsersListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.handleUpgrade = this.handleUpgrade.bind(this);
    this.handleDowngrade = this.handleDowngrade.bind(this);
  }

  handleUpgrade(user) {
    axios.put("/api/admin/user", user).then(() => {
      this.setState({ hola: "holaaa" });
    });
  }

  handleDowngrade() {}

  componentWillMount() {
    axios
      .get("/api/admin")
      .then(res => res.data)
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div>
        {console.log("entroooooo", this.state)}
        <AdminUsersList
          users={this.state.users}
          handleUpgrade={this.handleUpgrade}
          handleDowngrade={this.handleDowngrade}
        />
      </div>
    );
  }
}
