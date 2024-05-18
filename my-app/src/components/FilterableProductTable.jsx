import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default function FilterableProductTable({ products = [] }) {
  return (
    <>
      <SearchBar />
      <ProductTable products={products} />
    </>
  );
}
