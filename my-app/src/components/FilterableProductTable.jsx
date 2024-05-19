import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default function FilterableProductTable({ products = [] }) {
  const [value, setValue] = useState("");
  const [isStock, setIsStock] = useState(false);
  return (
    <>
      <SearchBar
        value={value}
        isStock={isStock}
        onValueChange={setValue}
        onIsStockChange={setIsStock}
      />
      <ProductTable products={products} value={value} isStock={isStock} />
    </>
  );
}
