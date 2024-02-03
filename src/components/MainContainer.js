import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [stagnantStocks, setStagnantStocks] = useState([])
  const [myStocks, setMyStocks] = useState([])
  const [isAlphaChecked, setIsAlphaChecked] = useState(false)
  const [isPriceChecked, setIsPriceChecked] = useState(false)

  useEffect(()=> {
    fetch("http://localhost:3001/stocks")
      .then(res => res.json())
      .then(data => {
        setStagnantStocks(data)
        setStocks(data)
      })
  }, [])

  function handleBuy(e) {
    const stockNameBought = e.target.firstChild.textContent

    console.log(stocks.find(stock=> stock.name === stockNameBought))

    const newStock = stocks.find(stock=> stock.name === stockNameBought)

    setMyStocks(prevStock => [...prevStock, newStock])
  }

  function handleSell(e) {
    console.log(`${e.target.firstChild.textContent} sold`)

    const stockNameSold = e.target.firstChild.textContent

    const myNewStocks = myStocks.filter(stock=> stock.name !== stockNameSold)

    setMyStocks(myNewStocks)
  }

  function handleAlphabeticalChange(e) {
    

    const sortedArray = stocks.sort((a, b) => {
      // Use localeCompare for string comparison
      return a.name.localeCompare(b.name);
    });

    console.log(sortedArray)
    setIsPriceChecked(false)
    setIsAlphaChecked(true)
    setStocks(sortedArray)

  }

  function handlePriceChange(e) {

    const sortedArray = stocks.sort((a, b) => a.price - b.price);

    console.log(sortedArray)
    setIsAlphaChecked(false)
    setIsPriceChecked(true)
    setStocks(sortedArray)
  }

  function handleFilter(e) {
    const filter = e.target.value;

  // If stocks are not stagnant (i.e., fetched from the server), use the stagnantStocks
  // Otherwise, use the current state of stocks
  const stocksToFilter = stocks !== stagnantStocks ? stagnantStocks : stocks;

  const newStocks = filter === "All" ? stocksToFilter : stocksToFilter.filter(stock => stock.type === filter);

  setStocks(newStocks);
    
  }
 
  return (
    <div>
      <SearchBar 
        handleAlphabeticalChange={handleAlphabeticalChange}
        handlePriceChange={handlePriceChange}
        handleFilter={handleFilter}
        isAlphaChecked={isAlphaChecked}
        isPriceChecked={isPriceChecked}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={stocks}
            handleBuy={handleBuy}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
            myStocks={myStocks}
            handleSell={handleSell}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
