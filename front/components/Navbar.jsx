import React from "react";
import Popup from "reactjs-popup";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {Object.keys(props.user).length ? (
        <div>
          <button onClick={props.handleLogOut}>Log Out</button>Hello{" "}
          {props.user.name}
        </div>
      ) : (
        <div>
          <Popup trigger={<button>Register</button>} position="bottom left">
            <form onSubmit={props.handleSubmitRegister}>
              <h3>Register</h3>

              <div className="form-group">
                <label>Name</label>
                <input
                  onChange={props.handleNameInput}
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="name"
                />
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input
                  onChange={props.handleEmailInput}
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  onChange={props.handlePasswordInput}
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

          <Popup trigger={<button>Login</button>} position="bottom left">
            <form onSubmit={props.handleLogIn}>
              <h3>LogIn</h3>

              <div className="form-group">
                <label>Email address</label>
                <input
                  onChange={props.handleEmailInput}
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  onChange={props.handlePasswordInput}
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
