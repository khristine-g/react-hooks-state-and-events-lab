import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false); // state variable and setter function

  // function to toggle inCart
  const toggleInCart = () => {
    setInCart(!inCart); // toggle the state variable
  };

  const cartText = inCart ? "Remove From Cart" : "Add to Cart"; // set the button text based on the state variable
  const itemClass = inCart ? "in-cart" : ""; // set the class based on the state variable

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleInCart}>{cartText}</button> {/* call the toggleInCart function on click */}
    </li>
  );
}

export default Item;
