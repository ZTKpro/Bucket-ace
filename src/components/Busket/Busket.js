import * as React from "react";

import "./Busket.scss";

import shoppingBag from "../../images/shopping-bag.png";

const Busket = () => {
  return (
    <section className="busket">
      <div className="busket__header">
        <img src={shoppingBag} alt="shopping bag" />
        <div className="busket__many">2</div>
        <p>Koszyk</p>
      </div>
      <div className="busket__section">
        <p>Cena:</p>
        <p>2255,15 zł</p>
      </div>
      <div className="busket__your-busket">
        <h4>Twój Koszyk</h4>
        <div className="busket__section">
          <p>Product_1</p>
          <p>256 zł</p>
        </div>
        <div className="busket__section">
          <p>Product_1</p>
          <p>256 zł</p>
        </div>
        <div className="busket__section">
          <p>Product_1</p>
          <p>256 zł</p>
        </div>
      </div>
      <div className="busket__code">
        <input placeholder="Kod rabatowy" />
      </div>
    </section>
  );
};

export default Busket;
