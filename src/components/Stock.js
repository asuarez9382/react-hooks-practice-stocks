import React from "react";

function Stock({
  ticker,
  name,
  type,
  price,
  handleBuy,
  handleSell
}) {
  return (
    <div>
      <div className="card" onClick={handleBuy || handleSell}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{`${ticker}: ${price}`}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
