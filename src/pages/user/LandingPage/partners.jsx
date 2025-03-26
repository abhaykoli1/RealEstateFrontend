import axios from "axios";
import dubai from "../../../assets/dubai.png";
import Divider from "../../../components/user/divider";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import config from "../../../common/config";
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

  const [communities, setCommunities] = useState([]);
  // console.log(communities);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/communities`)
      .then((response) => setCommunities(response.data.data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <section className="bg-[#F4F4F4]">
      {communities.length > 0 ? (
        <div className=" mt-8 py-6 pb-14">
          <h2 className="lg:text-[32px] px-5 md:text-[32px]  text-[25px] font-bold text-center mb-4 ">
            WE PARTNER WITH THE BEST
          </h2>
          <Divider />
          <div className="max-w-[1320px] mx-auto  mt-10 px-5 ">
            <div className="  relative mt-6">
              <Slider {...settings}>
                {communities.map((partner, index) => (
                  <div
                    key={index}
                    className="slick-slide   relative  p-0 hover:scale-105 transition-all duration-300"
                  >
                    <img
                      src={partner.logo_image}
                      alt={partner.name}
                      className=" h-auto  object-cover"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Partners;
