import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBasketTotal, selectBasket } from "./features/basket/basketSlice";
import "./Subtotal.css";

function Subtotal() {
  const navigate = useNavigate()
  const basket = useSelector(selectBasket)
  const dispatch = useDispatch()

  let dollarUSLocale = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    useGrouping: true,
    // maximumSignificantDigits: 3,
  });

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items): <strong>{dollarUSLocale.format(getBasketTotal(basket))}</strong>
      </p>
      <small className="subtotal__gifts">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button onClick={e => navigate('/payment')}>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
