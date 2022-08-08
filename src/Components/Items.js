import React from "react";

const Items = ({ item }) => {
  const itemStyle = {
    maxWidth: "70vw",
  };
  const imageSize = {
    maxWidth: "400px",
    maxHeight: "350px",
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
              <p className="ps-5">
                <button type="button" className="btn btn-outline-warning">
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
