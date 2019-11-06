import React from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  console.log(props);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {props.user ? (
        <div>
          <button onClick={props.handleLogOut}>Log Out</button>Hello{" "}
          {prop.user.name}
        </div>
      ) : (
        <div>
          <Popup trigger={<button>Register</button>} position="right center">
            <form onSubmit={props.handleSubmitRegister}>
              <h3>Register</h3>

              <div className="form-group">
                <label>Name</label>
                <input
                  onClick={props.handleNameImput}
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="name"
                />
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input
                  onClick={props.handleEmailInput}
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  onClick={props.handlePasswordInput}
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Register
              </button>
            </form>
          </Popup>

          <Popup trigger={<button>Login</button>} position="right center">
            <form onSubmit={props.handleLogIn}>
              <h3>LogIn</h3>

              <div className="form-group">
                <label>Email address</label>
                <input
                  onClick={props.handleEmailInput}
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  onClick={props.handlePasswordInput}
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
            </form>
          </Popup>
        </div>
      )}

      <button>Cart</button>
    </nav>
  );
}
