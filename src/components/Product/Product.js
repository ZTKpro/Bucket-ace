import * as React from "react";

import "./Product.scss";

import ProductImage from "../../images/productImage.png";

const Product = () => {
  return (
    <div className="product">
      <img src={ProductImage} alt="product image" />
      <p className="product__name">Glen 20</p>
      <p className="product__price">12 zł</p>
      <button className="product__add">DO KOSZYKA</button>
    </div>
  );
};

export default Product;
