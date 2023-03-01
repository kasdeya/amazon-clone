import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, selectBasket } from "./features/basket/basketSlice";
import "./Product.css";
import { motion } from "framer-motion"

function Product({ id, title, image, price, rating }) {
  const basket = useSelector(selectBasket);
  const dispatch = useDispatch();

  const addToBasket = () => {
    // debugger;
    //dispatch the item into the data layer
    dispatch(
      increment({
        item: {
          key: Math.floor(Math.random() * 1000),
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      })
    );
  };

  let dollarUSLocale = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    useGrouping: true,
    // maximumSignificantDigits: 3,
  });

  return (
    <motion.div 
    className="product"
    whileHover={{ scale: [null, 1.05, 1.04 ], boxShadow: "4px 4px 4px rgba(0,0,0 0.2)" }}
    transition={{ duration: 0.3 }}
    >
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          {/* <small>$</small> */}
          <strong>{dollarUSLocale.format(price)}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p key={i.toString()}>⭐</p>;
            })}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>add to basket</button>
      {/* <button onClick={() => dispatch(increment())}>add to basket</button> */}
    </motion.div>
  );
}

export default Product;
