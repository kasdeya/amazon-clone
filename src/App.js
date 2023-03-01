import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "./features/basket/basketSlice";
import Payment from "./Payment";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51MYfKlFkNEokozpv4MIsWUeWcohrkBMU00ESVrNKMeE4PloxP5v2JuWUfXdPwKCO4BSoSCt5dJUx7hoYXul2lBhh00CCGOtXzt"
);

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (userInfo) => {
      if (userInfo) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = userInfo.uid;
        const email = userInfo.email;
        // ...
        // console.log(userInfo)
        dispatch(
          setUser({
            user: { email: email, uid: uid },
          })
        );
      } else {
        // User is signed out
        // ...
        dispatch(
          setUser({
            user: null,
          })
        );
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
        <Route path="/orders" element={<Orders />}>
        </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          ></Route>
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
