import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ myStocks, handleSell }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        myStocks.map(stock => (
          <Stock 
          key={stock.id}
          ticker={stock.ticker}
          name={stock.name}
          type={stock.type}
          price={stock.price}
          handleSell={handleSell}
        />
        ))
      }
    </div>
  );
}

export default PortfolioContainer;
