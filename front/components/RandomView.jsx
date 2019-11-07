import React from 'react';
import StarRatings from 'react-star-ratings';
import { CardDeck, Card } from 'react-bootstrap';

export default function RandomView({ products }) {
  {
    console.log(products);
  }
  return (
    <div>
      <CardDeck>
        {products.map(product => (
          <Card key={product.id}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Title>{product.price}</Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <StarRatings
                  rating={product.rating}
                  starDimension="11px"
                  starSpacing="4px"
                />
              </small>
            </Card.Footer>
            <button>Add to cart</button>
          </Card>
        ))}
      </CardDeck>
    </div>
  );
}
// import React from 'react';
// import StarRatings from 'react-star-ratings';
// import { CardColumns, Card } from 'react-bootstrap';

// export default function RandomView({ products }) {
//   return (
//     <div className="productsContainer">
//       {products.map(product => (
//         <div className="singleProductListView">
//           <article key={product.id}>
//             <div>
//               <img src={product.image} />
//             </div>
//             <span>
//               {product.name} {product.price}
//             </span>
//           </article>

//           <button>Add to cart</button>
//         </div>
//       ))}
//     </div>
//   );
// }
