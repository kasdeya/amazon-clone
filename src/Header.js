import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBasket, selectUser } from "./features/basket/basketSlice";
import { getAuth, signOut } from "firebase/auth";

function Header() {
  const basket = useSelector(selectBasket);
  const user = useSelector(selectUser)
  const auth = getAuth()

  const handleAuthentication = () => {
    if (user.user) {
      signOut(auth).then(() => {
        // Sign Out successful
      }).catch((error) => {
        // An error happened
      })
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" alt="logo" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user.user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello {user.user ? user.user.email : "Guest"}</span>
            <span className="header__optionLineTwo">{!user.user ? "Sign In" : "Sign Out"}</span>
          </div>
        </Link>
        
        <Link to='/orders'>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasket />
            {/* <span className="header__optionLineTwo header__basketCount">{basket?.basket.length}</span> */}
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
