import dubai from "../../../assets/dubai.png";
import Divider from "../../../components/user/divider";
import React from "react";
import Slider from "react-slick";
const Partners = () => {
  const partnersData = [
    {
      id: 1,
      image: dubai,
      label: "VILLA",
      name: "The Acres",
    },
    {
      id: 2,
      image: dubai,
      label: "VILLA",
      name: "The Acres",
    },
    {
      id: 3,
      image: dubai,
      label: "VILLA",
      name: "The Acres",
    },
    {
      id: 4,
      image: dubai,
      label: "VILLA",
      name: "The Acres",
    },
  ];

  const settings = {
    arrows: false, // Disable navi
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 cards at a time
    slidesToScroll: 1,
    dots: true, // Enable pagination dots
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 3563,
        settings: {
          slidesToShow: 4, // Show 3 cards on larger screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1116,
        settings: {
          slidesToShow: 3, // Show 2 cards on medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 644,
        settings: {
          slidesToShow: 2, // Show 1 card on small screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1, // Show 1 card on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#F4F4F4] mt-8 py-6 pb-14">
      <h2 className="lg:text-[32px] px-5 md:text-[32px]  text-[25px] font-bold text-center mb-4 ">
        WE PARTNER WITH THE BEST
      </h2>
      <Divider />

      <div className="max-w-[1320px] mx-auto  px-5 ">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> */}
        <div className="  relative mt-6">
          <Slider {...settings}>
            {partnersData.map((partner, index) => (
              <div
                key={index}
                className="slick-slide   relative  p-0 hover:scale-105 transition-all duration-300"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-[300px] h-auto  object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Partners;
