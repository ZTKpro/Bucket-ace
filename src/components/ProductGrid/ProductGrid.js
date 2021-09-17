import * as React from "react";

import "./ProductGrid.scss";

import Product from "../Product/Product";

const ProductGrid = () => {
  return (
    <section className="product-grid">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </section>
  );
};

export default ProductGrid;
