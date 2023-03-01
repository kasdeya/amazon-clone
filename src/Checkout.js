import React from "react";
import { useSelector } from "react-redux";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { selectBasket } from "./features/basket/basketSlice";
import Subtotal from "./Subtotal";
import { AnimatePresence } from "framer-motion";

function Checkout() {
  const basket = useSelector(selectBasket);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner3.png"
          className="checkout__ad"
          alt="ad_image"
        />
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
          <AnimatePresence>
            {basket.map((item, i) => (
              <CheckoutProduct
                key={item.key}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
