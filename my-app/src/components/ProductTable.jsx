import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable() {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">name</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <ProductCategoryRow />
        <ProductRow />
      </tbody>
    </table>
  );
}
