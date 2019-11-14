import React from "react";

export default function LeaveReview({product, handleReviewSubmit}) {
  return (
    <form onSubmit={handleReviewSubmit}>
      <hr />
      <div className="form-group">
        <h4>Leave a Review: {product.name}</h4>
        <label>Rating</label>
        <select className="form-control form-control-sm col-md-4"  name="rating">
          <option>⭐</option>
          <option>⭐⭐</option>
          <option>⭐⭐⭐</option>
          <option>⭐⭐⭐⭐</option>
          <option>⭐⭐⭐⭐⭐</option>
        </select>
      </div>
      <div className="form-group">
        <label>Comment</label>
        <input
          type="text"
          className="form-control"
          name ="comment"
          placeholder="What'd you think?"
        />
      </div>
      <input type="hidden" name="productId" value={product.id}/>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <hr />
    </form>
  );
}
