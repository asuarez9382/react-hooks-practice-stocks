import React from "react";

function SearchBar({ 
  handleAlphabeticalChange,  
  handlePriceChange, 
  isAlphaChecked, 
  isPriceChecked,
  handleFilter
}) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={isAlphaChecked}
          onChange={handleAlphabeticalChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={isPriceChecked}
          onChange={handlePriceChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
