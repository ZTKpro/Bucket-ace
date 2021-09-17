import * as React from "react";

import "./ProductsWrapper.scss";

import ProductGrid from "../ProductGrid/ProductGrid";
import Search from "../Search/Search";

const ProductsWrapper = () => {
  return (
    <section className="products-wrapper">
      <div className="products-wrapper__header">
        <Search />
      </div>
      <div className="products-wrapper__main">
        <ProductGrid />
      </div>
    </section>
  );
};

export default ProductsWrapper;
