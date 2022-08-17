import React from "react";

const Items = ({ item, addToCart }) => {
  const itemStyle = {
    maxWidth: "70vw",
  };
  const imageSize = {
    maxWidth: "400px",
    maxHeight: "350px",
  };
  const outOfStockError = () => {
    alert("Cannot add this item to the cart.");
  };
  return (
    <div className="mt-5">
      <div className="card mb-3 px-3 py-3" style={itemStyle}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={item.image} alt={item.category} style={imageSize} />
          </div>
          <div className="col-md-8">
            <div>
              <h5>{item.name}</h5>
              <h6>Rs {item.price}/-</h6>
              <h5>Specifications:</h5>
              <ul>
                {item.spec.map((e) => {
                  return <li key={e}>{e}</li>;
                })}
              </ul>
              <h5
                className={
                  item.quantity ? "ms-2 text-info" : "ms-2 text-warning"
                }
                style={{ display: "inline-block" }}
              >
                {item.quantity
                  ? `${item.quantity} pieces left`
                  : `Out of Stock`}
              </h5>
              {item.addedToCart ? (
                <h5
                  className="ms-5 text-success"
                  style={{ display: "inline-block" }}
                >
                  {item.addedToCart} item added to cart.
                </h5>
              ) : (
                ""
              )}
              <p className="ps-5">
                <button
                  type="button"
                  className={
                    item.quantity
                      ? "btn btn-outline-success"
                      : "btn btn-outline-danger"
                  }
                  onClick={
                    item.quantity ? () => addToCart(item) : outOfStockError
                  }
                >
                  Add to Cart
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
