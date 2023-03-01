import React from "react";
import "./Home.css";
import Product from "./Product";
import Slideshow from "./Slideshow";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61R0BqBV4HL._SX1500_.jpg"
          alt="Bleeding_Hero"
      /> */}

        <Slideshow />

        <div className="home__row">
          <Product
            id="483902"
            title="American Psycho"
            price={29.99}
            image="https://m.media-amazon.com/images/I/41EBaudHYFL.jpg"
            rating={5}
          />
          <Product
            id="293847"
            title="Cold Steel All-Purpose Axe with Hickory Handle, Great for Camping, Survival, Outdoors, Wood Cutting and Splitting"
            price={47.99}
            image="https://m.media-amazon.com/images/I/71Tt1lg6RxL._AC_SX466_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="354765"
            title="Ultra Male by Jean Paul Gaultier for Men 4.2 oz Eau de Toilette Intense Spray"
            price={91.50}
            image="https://m.media-amazon.com/images/I/51kllSL+8DL._SX679_.jpg"
            rating={4}
          />
          <Product
            id="987876"
            title="Sony WF-1000XM4 Industry Leading Noise Canceling Truly Wireless Earbud Headphones with Alexa Built-in, Black"
            price={279.99}
            image="https://m.media-amazon.com/images/I/61G9yF+ZbEL._AC_SX679_.jpg"
            rating={4}
          />
          <Product
            id="435435"
            title="Nespresso Vertuo Next Coffee and Espresso Machine by De'Longhi, White"
            price={134.25}
            image="https://m.media-amazon.com/images/I/61ri5WXepvL._AC_SX679_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="123321"
            title="Sony 55 Inch 4K Ultra HD TV A95K Series: BRAVIA XR OLED Smart Google TV with Dolby Vision HDR,Bluetooth, Wi-Fi, USB, Ethernet, HDMI and Exclusive Features for The Playstation- 5 XR55A95K- 2022 Model"
            price={2498.00}
            image="https://m.media-amazon.com/images/I/81PhCSQPxFL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
