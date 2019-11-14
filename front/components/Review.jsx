import React from "react";
import StarRatings from "react-star-ratings";

export default function Review({author, rating, comment}) {
  console.log("RATING",rating)
  if(rating) rating = rating/2
  return (
    <div>
        <span>{author} </span> <br/>
        <StarRatings
                      rating={rating}
                      starDimension="11px"
                      starSpacing="4px"
                      starRatedColor="rgb(188, 100, 100)"
                    />
                    <br/>
        <span>Comment: {comment}</span>
        <hr/>
    </div>
  );
}