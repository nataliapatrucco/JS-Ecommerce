import React from "react";

export default function CategorySidebar({ selectFilter }) {
  return (
    <div>
      <div className="wrapper">
        <nav id="sidebar">
          <ul className="list-unstyled components">
            <li className="active">
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                Categories
              </a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                {[
                  "dress",
                  "pants",
                  "shirts",
                  "black",
                  "red",
                  "white",
                  "brown",
                  "blue"
                ].map((category, i) => (
                  <li key={i}>
                    <a onClick={selectFilter} name={`${category}`}>
                      {`${category.toUpperCase()}`}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
