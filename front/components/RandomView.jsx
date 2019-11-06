import React from "react";
import StarRatings from "react-star-ratings";
import { CardDeck } from "react-bootstrap";

export default function RandomView({ products }) {
  return (
    <div>
      <CardDeck>
        {products.map(product => (
          <Card key={product.id}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Title>{product.price}</Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <StarRatings
                  rating={product.rating}
                  starDimension="40px"
                  starSpacing="15px"
                />
              </small>
            </Card.Footer>
            <button onClick={props.handleAdd}>Add to cart</button>
          </Card>
        ))}
      </CardDeck>
    </div>
  );
}
