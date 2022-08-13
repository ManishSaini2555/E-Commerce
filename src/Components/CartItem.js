import React from "react";

const CartItem = ({ item }) => {
  const itemStyle = {
    maxWidth: "60vw",
  };
  const imageSize = {
    maxWidth: "150px",
    maxHeight: "130px",
  };

  return (
    <div className="mt-2">
      <div className="card px-3 py-3" style={itemStyle}>
        <div className="row g-0">
          <div className="col-md-2">
            <img src={item.image} alt={item.category} style={imageSize} />
          </div>
          <div className="col-md-10">
            <div>
              <h5>{item.name}</h5>
              <h5 className="ms-2 text-success">{item.quantity} pieces</h5>
              <h6>Total- Rs {item.price * item.quantity}/-</h6>
              <p className="ps-5"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
