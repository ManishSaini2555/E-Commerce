import React from "react";
import Items from "./Items.js";

const ShowItems = ({ items }) => {
  return (
    <div className="mt-5">
      <h3>Available Items: </h3>
      {items.map((item) => {
        return <Items key={item.key} item={item} />;
      })}
    </div>
  );
};

export default ShowItems;