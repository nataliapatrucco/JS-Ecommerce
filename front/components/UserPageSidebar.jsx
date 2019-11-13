import React from "react";
import { Link } from "react-router-dom";

export default ({ user, address, pastOrders, reviews }) => {
  return (
    <div className="col-4">
      <hr />
      {console.log("ADDRESS-----", address)}
      <h5>Your address: {address}</h5>
      <Link to="/user/address">Update your address</Link>

      <hr />
      <h5>You Past Orders</h5>
      {pastOrders.map(order => {
        return (
          <Link key={order.id} to={`/user/order/${order.id}`}>
            {order.name}
            <hr />
          </Link>
        );
      })}
    </div>
  );
};
