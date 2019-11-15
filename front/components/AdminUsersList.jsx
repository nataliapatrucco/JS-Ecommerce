import React from "react";
import { Link } from "react-router-dom";
import {FaTrashAlt} from "react-icons/fa"

export default ({ users, handleDownUp, handleDelete }) => {
  return (
    <div>
    <div id="userList">
      {users.map(user => {
        return (
          <div> 
          
            <p>{user.name}</p>
            <button id="auto_btn" onClick={() => handleDownUp(user)}>
              {user.userType == "admin"
                ? "Downgrade to User"
                : "Upgrade to Admin"}
            </button>
            <Link to={`/admin/users/${user.id}`}>
              <button className="btn btn-danger" id="auto_btn" onClick={() => handleDelete(user)}>
                <FaTrashAlt/>
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  </div>
  );
};
