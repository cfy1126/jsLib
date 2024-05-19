import React from "react";

export default function SearchBar({
  value,
  isStock,
  onValueChange,
  onIsStockChange,
}) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
      <br />
      <input
        type="checkbox"
        value={isStock}
        onChange={(e) => {
          onIsStockChange(e.target.checked);
        }}
      />
      <span>Only show products in stock</span>
    </form>
  );
}
