import React from "react";

export default function Review({author, rating, comment}) {
  return (
    <div>
        <span>{author} </span> <br/>
        <span>Rating: {rating}</span> <br/>
        <span>Comment: {comment}</span>
        <hr/>
    </div>
  );
}