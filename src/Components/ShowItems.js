import React from "react";
import Items from "./Items.js";

const ShowItems = ({ items, addToCart }) => {
  return (
    <div className="pt-3">
      <h3>Item List: </h3>
      {items.map((item) => {
        return <Items key={item.key} item={item} addToCart={addToCart} />;
      })}
    </div>
  );
};

export default ShowItems;
