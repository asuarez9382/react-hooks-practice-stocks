import React from "react";
import Stock from "./Stock";

function StockContainer({
  stocks,
  handleBuy
}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock => (
        <Stock 
          key={stock.id}
          ticker={stock.ticker}
          name={stock.name}
          type={stock.type}
          price={stock.price}
          handleBuy={handleBuy}
        />
      ))}
    </div>
  );
}

export default StockContainer;
