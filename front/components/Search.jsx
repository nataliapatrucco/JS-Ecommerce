import React from "react";

export default function Search(props) {
  return (
    <div>
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="text-center  brandLogo">JS</h1>
            <form>
              <input
                onChange={props.handleChange}
                className=" active-purple-3 active-purple-4 mb-4 form-control"
                type="text"
                placeholder="search"
                aria-label="Search"
                style={{ textAlign: "center" }}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
