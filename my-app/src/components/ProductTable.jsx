import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ products = [] }) {
  const dataSources = products.reduce((acc, item) => {
    const { category } = item;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  const children = () => {
    let arr = [];
    for (let category in dataSources) {
      arr.push(
        <React.Fragment key={category}>
          <ProductCategoryRow key={category} category={category} />
          {dataSources[category].map((item, index) => (
            <ProductRow key={index} product={item} />
          ))}
        </React.Fragment>
      );
    }
    return arr;
  };

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>{children()}</tbody>
    </table>
  );
}
