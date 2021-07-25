import React, { useState } from "react";

function Item({ name, category }) {
  const[currentCart, setCart] = useState(false)


  const liClass = currentCart ? "in-cart" : ""
  function addToCart() {
    setCart((currentCart) => !currentCart)
  }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={currentCart ? "remove" : "add"} onClick={addToCart}>{currentCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
