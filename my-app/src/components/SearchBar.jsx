import React from "react";

export default function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <br />
      <input type="checkbox" />
      <span>Only show products in stock</span>
    </form>
  );
}
