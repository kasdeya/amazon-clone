import React from "react";
import { useDispatch } from "react-redux";
import "./CheckoutProduct.css";
import { remove } from "./features/basket/basketSlice";
import { motion } from "framer-motion"

function CheckoutProduct({ id, title, image, price, rating, hideButton }) {
  const dispatch = useDispatch();

  const removeFromBasket = () => {
    dispatch(
      remove({
        id: id,
      })
    );
  };

  const animations = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    end:     { scale: 0 }
  }

  let dollarUSLocale = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    useGrouping: true,
    // maximumSignificantDigits: 3,
  });

  return (
        <motion.div {...animations} layout className="checkoutProduct">
          <img
            className="checkoutProduct__image"
            src={image}
            alt="productimage"
          />
          <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct_price">
              <small>
                <strong>{dollarUSLocale.format(price)}</strong>
              </small>
            </p>
            <div className="checkoutProduct__rating">
              {Array(rating)
                .fill()
                .map((a, i) => (
                  <p key={Math.floor(Math.random() * 1000)}>⭐</p>
                ))}
            </div>
            {!hideButton && (
            <button onClick={removeFromBasket}>Remove from basket</button>
            )}
          </div>
        </motion.div>
  );
}

export default CheckoutProduct;
