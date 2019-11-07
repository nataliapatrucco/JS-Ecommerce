import React from 'react';

export default function Search(props) {
  return (
    <div id="jumbotron-container">
      <div className="jumbotron jumbotron-fluid">
        <div className="container inJumbo">
          <h1 className="text-center display-4">JS</h1>
          <form>
            <input
              // onChange={props.handleChange}
              className=" active-purple-3 active-purple-4 mb-4 form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
