import React, { useEffect, useState } from "react";
import "./Home.css"

function Slideshow() {
  const image1 = "https://m.media-amazon.com/images/I/61R0BqBV4HL._SX1500_.jpg";
  const image2 = "https://m.media-amazon.com/images/I/711FoHqZC3L._SX1500_.jpg";
  const image3 = "https://m.media-amazon.com/images/I/71gKz-NeNSL._SX1500_.jpg";

  const images = [image1, image2, image3];
  const delay = 3500;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {};
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((backgroundImage, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
