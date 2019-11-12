import React from "react";

export default function AlterQuantButton(props) {
  console.log("BUTTONPROPS!!!!!!!!!!!!", props);
  const { product, quantity, quantAddOne } = props;
  return (
    <div id="alterQuant">
      <button>-</button>
      <span>{quantity}</span>
      <button type="button" onClick={() => quantAddOne(product)}>
        +
      </button>
    </div>
  );
}
