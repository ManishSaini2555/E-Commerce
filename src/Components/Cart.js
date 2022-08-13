import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  let fullList = [...props.list];
  let list = [];
  if (props.list.length) {
    fullList.forEach((item) => {
      let index = list.findIndex((prod) => prod.name === item.name);
      if (index !== -1) list[index].quantity += 1;
      else list.push({ ...item });
    });
  }

  let total = 0;
  list.forEach((item) => {
    total += item.quantity * item.price;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col col-lg-11"></div>
        <div className="col col-lg-1" style={{ cursor: "pointer" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-x-circle mt-1"
            viewBox="0 0 16 16"
            onClick={props.setCartToggle}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
      </div>
      {list.length ? (
        <>
          {list.map((item) => {
            return (
              <>
                <CartItem item={item} />
              </>
            );
          })}
          <h2 className="text-success mx-3 my-2">Grand Total- Rs {total}/-</h2>
          <p className="ps-5">
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => {
                alert("Order Placed Successfully");
                setTimeout(() => {
                  window.location.reload();
                }, 500);
              }}
            >
              Place Order and Pay
            </button>
          </p>
        </>
      ) : (
        <div className="grid text-center mt-5">
          <h3>
            <strong>Your Cart is Empty.</strong>
          </h3>
          <h3>Please add Items to the Cart.</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
