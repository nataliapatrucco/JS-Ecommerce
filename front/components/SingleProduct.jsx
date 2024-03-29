import React from "react";
import StarRatings from "react-star-ratings";
import Review from "../components/Review";

export default ({
  selectedProduct,
  addProduct,
  reviews,
  user,
  handleSubmit,
  handleChangeName,
  handleChangePrice,
  handleChangeDescription,
  handleChangeImage,
  handleDelete,
  handleChangeCategory
}) => {
  if (selectedProduct.image) {
    let urlImg = 
    selectedProduct.image[0] === '.' ?
    selectedProduct.image.slice(1) : selectedProduct.image
      
    return (
      <div id="singleView" className="container">
        {console.log("ENTERSINLGEPRODUCT")}
        {console.log(selectedProduct)}
        {user.userType == "admin" ? (
          <form>
            <div className="row">
              <div id="singleProdImg" className="col-8 card card-body">
                <img
                  src={
                    urlImg[0]=== '/' ? 
                    `${window.location.origin}${urlImg}` :
                    urlImg
                    }
                  className="thumbnail"
                  alt="Image"
                />
              </div>
              <div className="col-6">
                <br />

                <h2 className="mb-4">{selectedProduct.name}</h2>
                <ul className="list-group">
                  <li id="singlePrice" className="list-group-item">
                    <strong>{selectedProduct.price}</strong>
                  </li>
                  <li className="list-group-item">
                    <strong>{selectedProduct.description}</strong>
                  </li>
                  <li className="list-group-item">
                    <small className="text-muted">
                      <StarRatings
                        rating={selectedProduct.rating}
                        starDimension="11px"
                        starSpacing="4px"
                        starRatedColor="rgb(188, 100, 100)"
                      />
                    </small>
                  </li>
                  <li className="list-group-item">
                    <strong>Product Reviews:</strong>
                    {reviews.length &&
                      reviews.map(review => {
                        return (
                          <div key={review.id}>
                            <Review
                              author={review.author}
                              rating={review.rating}
                              comment={review.comment}
                            />
                          </div>
                        );
                      })}
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleDelete(selectedProduct)}
                type="button"
                className="btn btn-light"
                data-toggle="modal"
                id="registerButton"
                data-target="#delete"
              >
                Delete
              </button>
            </div>
            <button
              type="button"
              className="btn btn-light"
              data-toggle="modal"
              id="registerButton"
              data-target="#edit"
            >
              Edit
            </button>
            <div
              className="modal fade"
              id="edit"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2 className="modal-title" id="exampleModalLabel">
                      Edit
                    </h2>
                    <button
                      type="button"
                      className="close"
                      id="editClose"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form id="registerForm" onSubmit={handleSubmit}>
                      {console.log("enterFOrm!!!!!!")}
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          value={selectedProduct.name}
                          onChange={handleChangeName}
                        />
                        <div className="form-group">
                          <label>Price</label>
                          <input
                            onChange={handleChangePrice}
                            name="price"
                            type="text"
                            className="form-control"
                            value={selectedProduct.price}
                          />
                        </div>

                        <div className="form-group">
                          <label>Description</label>
                          <input
                            onChange={handleChangeDescription}
                            name="description"
                            type="text"
                            className="form-control"
                            value={selectedProduct.description}
                          />
                        </div>

                        <div className="form-group">
                          <label>Image</label>
                          <input
                            onChange={handleChangeImage}
                            name="Image"
                            type="text"
                            className="form-control"
                            value={selectedProduct.image}
                          />
                        </div>
                        <div className="form-group">
                          <label>Categories</label>
                          <input
                            name="Category"
                            type="text"
                            className="form-control"
                            value={selectedProduct.category}
                            onChange={handleChangeCategory}
                          />
                        </div>

                        <div className="modal-footer">
                          <button type="submit" className="btn btn-dark">
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="card card-body bg-dark my-5 text-light">
                <button
                  onClick={() => addProduct(selectedProduct)}
                  type="button"
                  className="btn btn-default text-light"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </form>
        ) : (
          <form>
            <div className="row">
              <div id="singleProdImg" className="col-8 card card-body">
                <img
                src={
                    urlImg[0]=== '/' ? 
                    `${window.location.origin}${urlImg}` :
                    urlImg
                    }
                  className="thumbnail"
                  alt="Image"
                />
              </div>
              <div className="col-6">
                <br />

                <h2 className="mb-4">{selectedProduct.name}</h2>
                <ul className="list-group">
                  <li id="singlePrice" className="list-group-item">
                    <strong>{selectedProduct.price}</strong>
                  </li>
                  <li className="list-group-item">
                    <strong>{selectedProduct.description}</strong>
                  </li>
                  <li className="list-group-item">
                    <small className="text-muted">
                      <StarRatings
                        rating={selectedProduct.rating}
                        starDimension="11px"
                        starSpacing="4px"
                        starRatedColor="rgb(188, 100, 100)"
                      />
                    </small>
                  </li>
                  <li className="list-group-item">
                  <div className="card card-body bg-dark my-5 text-light">
                <button
                  onClick={() => addProduct(selectedProduct)}
                  type="button"
                  className="btn btn-default text-light"
                  id="editclose"
                >
                  Add to Cart
                </button>
              </div>
                    <strong>Product Reviews:</strong>
                    {reviews.map(review => {
                      return (
                        <Review
                          key={review.id}
                          author={review.author}
                          rating={review.rating}
                          comment={review.comment}
                        />
                      );
                    })}
                  </li>
                </ul>
              
              </div>
            </div>
            <div className="row">
            </div>
          </form>
        )}
      </div>
    );
  } else return <p>Loading...</p>;
};
