import React, { useState } from "react";
import Slider from "react-slick";

const SwiperComponent = () => {
  const data = [
    { id: 1, title: "Slide 1", description: "This is the first slide" },
    { id: 2, title: "Slide 2", description: "This is the second slide" },
    { id: 3, title: "Slide 3", description: "This is the third slide" },
    { id: 4, title: "Slide 4", description: "This is the fourth slide" },
  ];

  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % data.length); // Loop back to 0 if the last slide
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + data.length) % data.length); // Loop back to last slide
  };

  return (
    <div>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </Slider>

      <div className="navigation-buttons">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default SwiperComponent;
