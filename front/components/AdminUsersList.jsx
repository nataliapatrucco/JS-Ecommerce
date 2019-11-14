import React from "react";
import { Link } from "react-router-dom";

export default ({ users, handleDownUp, handleDelete }) => {
  return (
    <div>
      {users.map(user => {
        return (
          <div>
            <p>{user.name}</p>;
            <button id="auto_btn" onClick={() => handleDownUp(user)}>
              {user.userType == "admin"
                ? "Downgrade to User"
                : "Upgrade to Admin"}
            </button>
            <Link to={`/admin/users/${user.id}`}>
              <button id="auto_btn" onClick={() => handleDelete(user)}>
                DELETE
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
