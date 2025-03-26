import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import PropertyCardCompo from "../../../components/user/propertyCardCompo";
import axios from "axios";
import config from "../../../common/config";

const OffPlanProperty = () => {
  const sliderRef = useRef(null);
  const [properties, setProperties] = useState([]);
  // console.log("first : ", properties);
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/api/property`);
        const propertiesData = response.data.data;
        setProperties(propertiesData);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  // console.log("properties ==================", properties);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // This will center the active slide
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 4,
          centerPadding: "0", // Optional: adjust this if you want a gap between slides
        },
      },
      {
        breakpoint: 1356,
        settings: {
          slidesToShow: 3,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 1044,
        settings: {
          slidesToShow: 2,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 695,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <section className=" bg-[#F4F4F4] mt-12">
      {properties.length > 0 ? (
        <div className="max-w-[1320px] mx-auto py-5 pb-14">
          <h3 className="lg:text-[32px] md:text-[32px] text-[27px] font-bold mb-1 px-5 ">
            Browse our Off Plan properties
          </h3>
          <span className="border-b-[3px]  border-[#A9B9D6] flex w-[150px] mb-8 mx-5 "></span>

          <div className="mt-10  relative mx-10">
            <Slider ref={sliderRef} {...settings}>
              {properties
                .filter((pro) => pro.off_plan === true)
                .map((pro, index) => (
                  <div key={index} className="slick-slide">
                    <PropertyCardCompo pro={pro} />
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default OffPlanProperty;
