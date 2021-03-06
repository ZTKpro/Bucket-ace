import * as React from "react";

import "../styles/index.scss";

import ProductsWrapper from "../components/ProductsWrapper/ProductsWrapper";
import Busket from "../components/Busket/Busket";

const IndexPage = () => {
  return (
    <main className="index">
      <ProductsWrapper />
      <Busket />
    </main>
  );
};

export default IndexPage;
