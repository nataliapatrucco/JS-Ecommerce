import React from "react";

export default ({ user, address, handleAddress, handleSubmit }) => {
  return (
    <div className="col-8">
      <form onSubmit={handleSubmit}>
        <input onChange={handleAddress} type="text" name="address" />
        <button type="submit" className="btn btn-light">
          Update Address
        </button>
      </form>
    </div>
  );
};
