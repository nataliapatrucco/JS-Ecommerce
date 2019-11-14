import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const {
    handleInput,
    handleLogIn,
    handleLogOut,
    handleSubmitRegister,
    location,
    user,
    wrongUser,
    handleSubmitCreate,
    handleChangePrice,
    handleChangeName,
    handleChangeStock,
    handleChangeCategory,
    handleChangeImage,
    handleChangeActive,
    handleChangeRaiting,
    handleChangeDescription
  } = props;

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-light">
      <div className="container-fluid">
        {Object.keys(user).length ? (
          <div>
            <button
              className="navbar-toggler"
              type="button"
              id="logoutButton"
              className="btn btn-light"
              onClick={handleLogOut}
            >
              LOG OUT
            </button>
            {location.pathname === "/" ? (
              ""
            ) : (
              <Link to={`/`}>
                <label>
                  <div className="brandLogoMiniDiv">
                    <p className="brandLogoMini">JS</p>
                  </div>
                </label>
              </Link>
            )}
          </div>
        ) : (
          <div>
            <button
              type="button"
              className="btn btn-light"
              data-toggle="modal"
              id="registerButton"
              data-target="#register"
            >
              REGISTER
            </button>

            <div
              className="modal fade"
              id="register"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2 className="modal-title" id="exampleModalLabel">
                      Register
                    </h2>
                    <button
                      type="button"
                      className="close"
                      id="registerClose"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form id="registerForm" onSubmit={handleSubmitRegister}>
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          onChange={handleInput}
                          name="name"
                          type="text"
                          className="form-control"
                          placeholder="name"
                        />
                      </div>

                      <div className="form-group">
                        <label>Email address</label>
                        <input
                          onChange={handleInput}
                          name="email"
                          type="email"
                          className="form-control"
                          placeholder="Enter email"
                        />
                      </div>

                      <div className="form-group">
                        <label>Password</label>
                        <input
                          onChange={handleInput}
                          name="password"
                          type="password"
                          className="form-control"
                          placeholder="Enter password"
                        />
                      </div>
                      <div className="modal-footer">
                        <button type="submit" className="btn btn-dark">
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              id="loginButton"
              className="btn btn-light"
              data-toggle="modal"
              data-target="#login"
            >
              LOGIN
            </button>

            {location.pathname === "/" ? (
              ""
            ) : (
              <Link to={`/`}>
                <label>
                  <div className="brandLogoMiniDiv">
                    <p className="brandLogoMini">JS</p>
                  </div>
                </label>
              </Link>
            )}

            <div
              className="modal fade"
              id="login"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2 className="modal-title" id="exampleModalLabel">
                      Login
                    </h2>
                    <button
                      type="button"
                      className="close"
                      id="loginClose"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={handleLogIn}>
                      <div className="form-group">
                        <label>Email address</label>
                        <input
                          onChange={handleInput}
                          name="email"
                          type="email"
                          className="form-control"
                          placeholder="Enter email"
                        />
                      </div>

                      <div className="form-group">
                        <label>Password</label>
                        <input
                          onChange={handleInput}
                          name="password"
                          type="password"
                          className="form-control"
                          placeholder="Enter password"
                        />
                      </div>
                      <div className="modal-footer">
                        <p>{wrongUser}</p>
                        <button
                          type="submit"
                          id="submitLogin"
                          className="btn btn-dark"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div>
          {Object.keys(user).length ? (
            <Link to="/user/id">
              <span id="helloUser">Hello {user.name}</span>
            </Link>
          ) : (
            ""
          )}
          {user.userType == "admin" ? (
            <div>
              <button
                type="button"
                className="btn btn-light"
                data-toggle="modal"
                id="registerButton"
                data-target="#register"
              >
                CREATE
              </button>
              <div
                className="modal fade"
                id="register"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h2 className="modal-title" id="exampleModalLabel">
                        Create product
                      </h2>
                      <button
                        type="button"
                        className="close"
                        id="editCruz"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form id="registerForm" onSubmit={handleSubmitCreate}>
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            name="name"
                            type="text"
                            className="form-control"
                            required
                            onChange={handleChangeName}
                          />
                          <div className="form-group">
                            <label>Price</label>
                            <input
                              onChange={handleChangePrice}
                              name="price"
                              type="number"
                              min="0"
                              className="form-control"
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label>Description</label>
                            <input
                              onChange={handleChangeDescription}
                              name="description"
                              type="text"
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>Stock</label>
                            <input
                              onChange={handleChangeStock}
                              name="stock"
                              type="number"
                              min="0"
                              className="form-control"
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label>Image</label>
                            <input
                              onChange={handleChangeImage}
                              name="Image"
                              type="text"
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>Raiting</label>
                            <input
                              onChange={handleChangeRaiting}
                              name="raiting"
                              type="number"
                              min="0"
                              max="10"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group">
                            <label>Active:</label>
                            <br></br>
                            <label>
                              <input
                                type="checkbox"
                                id="cbox1"
                                value="true"
                                onChange={handleChangeActive}
                              />{" "}
                              True
                            </label>
                            <input
                              type="checkbox"
                              id="cbox2"
                              value="false"
                              onChange={handleChangeActive}
                            />{" "}
                            <label for="cbox2">False</label>
                          </div>
                          <div className="form-group">
                            <label>Category</label>
                            <input
                              onChange={handleChangeCategory}
                              name="category"
                              type="text"
                              className="form-control"
                            />
                          </div>

                          <div className="modal-footer">
                            <button type="submit" className="btn btn-dark">
                              Send
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/admin/users">
                <button>USERS</button>
              </Link>
            </div>
          ) : (
            " "
          )}
          <button id="cartButton">
            <AiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </nav>
  );
}
