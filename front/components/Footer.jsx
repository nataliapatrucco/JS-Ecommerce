import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="card text-center footer">
      <div className="card-header"></div>
      <div className="card-body">
        <h5 className="card-title">
          <Link to="/"></Link>Contact
        </h5>
        <p className="card-text">
          <Link to="/"></Link>About Us
        </p>
      </div>
      <div className="card-footer text-muted"></div>
    </div>
  );
}
