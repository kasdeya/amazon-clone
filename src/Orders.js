import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/basket/basketSlice";
import { db } from "./firebase";
import "./Orders.css";
import Order from "./Order";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { Link } from "react-router-dom";

function Orders() {
  const user = useSelector(selectUser);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user?.user) {
      onSnapshot(
        query(
          collection(db, "users", user?.user.uid, "orders"),
          orderBy("created", "desc")
        ),
        (snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        }
      );
    } else {
      setOrders([]);
    }
  }, [user?.user]);

  return (
    <div className="orders">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order, i) => (
          <Order order={order} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
