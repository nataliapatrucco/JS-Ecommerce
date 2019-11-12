import React from "react";
export default function CategorySidebar({
  selectFilter,
  filterCategories,
  products
}) {
  return (
    <div>
      {products.length == 0 ? (
        ""
      ) : (
        <div className="wrapper">
          <nav id="sidebar">
            <ul className="list-unstyled components">
              <li className="active">
                <a
                  href="#homeSubmenu"
                  id="catMenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  CATEGORIES
                </a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                  {filterCategories.map((category, i) => (
                    <li id="singleCat" key={i}>
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
      )}
    </div>
  );
}
