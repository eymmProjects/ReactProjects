import React, { useState } from "react";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  fetch("  http://localhost:8000/products")
    .then((response) => response.json())
    .then((data) => console.log(data));

  return <div>ProductList</div>;
};
