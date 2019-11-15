import React, { Component } from "react";
import AdminUsersList from "../components/AdminUsersList";
import axios from "axios";

export default class AdminUsersListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.handleDownUp = this.handleDownUp.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDownUp(user) {
    axios.put(`/api/admin/user`, user).then(() => {});
    window.location.reload();
  }

  handleDelete(user) {
    axios.delete(`/api/admin/${user.id}`, user).then(() => {});
    window.location.reload();
  }

  componentWillMount() {
    axios
      .get("/api/admin")
      .then(res => res.data)
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div>
        {console.log(this.state.users)}
        <AdminUsersList
          users={this.state.users}
          handleDownUp={this.handleDownUp}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
