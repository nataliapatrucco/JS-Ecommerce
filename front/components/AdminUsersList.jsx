import React, { Component } from "react";

export default ({ users, handleUpgrade, handleDowngrade }) => {
  console.log("que rarrrroooooooooooo", users);
  return (
    <div>
      aofnadmofinadfoiadf
      {users.map(user => {
        {
          console.log(user);
        }
        return (
          <div>
            <p>{user.name}</p>;
            {user.userType === "admin" ? (
              <button onClick={() => handleUpgrade(user)}>
                Downgrade to User
              </button>
            ) : (
              <button onClick={() => handleDowngrade(user)}>
                Upgrade to Admin
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};
