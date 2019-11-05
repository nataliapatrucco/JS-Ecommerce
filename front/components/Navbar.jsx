import React from "react";
import Popup from "reactjs-popup";

export default function Navbar(props) {
  return (
    <div>
      <Popup trigger={<button>Register</button>} position="right center">
        <form>
          <input type="text" name="name" placeholder="Please enter your name" />
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <button>Register</button>​
        </form>
      </Popup>

      <Popup trigger={<button>Login</button>} position="right center">
        <form>
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <button>Login</button>​
        </form>
      </Popup>

      <button>Cart</button>
    </div>
  );
}
