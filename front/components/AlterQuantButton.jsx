import React from "react";

export default function AlterQuantButton(props) {
  console.log("BUTTONPROPS!!!!!!!!!!!!", props);
  const { product, quantity, quantAddOne, quantSubOne } = props;
  return (
    <div id="alterQuant">
      <button onClick={() => quantSubOne(product)}>-</button>
      <span>{quantity}</span>
      <button onClick={() => quantAddOne(product)}>+</button>
    </div>
  );
}
