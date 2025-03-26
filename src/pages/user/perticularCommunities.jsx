import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Divider from "../../components/user/divider";
import config from "../../common/config";
import axios from "axios";
import { useParams } from "react-router";
import SmallPropertyComponent from "../../components/user/SmallPropertyComponent";

const PerticularCommunities = () => {
  const { id } = useParams();
  console.log("first :", id);
  const sliderRef = useRef(null);

  const OptionsSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true, // This will center the active slide
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 5,
          centerPadding: "0", // Optional: adjust this if you want a gap between slides
        },
      },
      {
        breakpoint: 1356,
        settings: {
          slidesToShow: 5,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 1044,
        settings: {
          slidesToShow: 4,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 835,
        settings: {
          slidesToShow: 3,
          centerPadding: "0",
        },
      },

      {
        breakpoint: 630,
        settings: {
          slidesToShow: 2,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
    ],
  };
  const AmenSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // arrows: false,
    centerMode: true, // This will center the active slide
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 5,
          centerPadding: "0", // Optional: adjust this if you want a gap between slides
        },
      },
      {
        breakpoint: 1356,
        settings: {
          slidesToShow: 5,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 1044,
        settings: {
          slidesToShow: 4,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 835,
        settings: {
          slidesToShow: 3,
          centerPadding: "0",
        },
      },

      {
        breakpoint: 630,
        settings: {
          slidesToShow: 2,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
    ],
  };
  const ImagesSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
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
          slidesToShow: 4,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 1044,
        settings: {
          slidesToShow: 3,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 695,
        settings: {
          slidesToShow: 2,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
    ],
  };

  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState("map");

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const [community, setCommunity] = useState();

  const fetchCommunity = async (id) => {
    if (!id) {
      console.error("Community ID is required");
      return;
    }

    try {
      const response = await axios.get(
        `${config.API_URL}/api/communities/${id}`
      );
      setCommunity(response.data.data);
    } catch (error) {
      console.error(
        "Error fetching community:",
        error.response?.data || error.message
      );
    }
  };
  useEffect(() => {
    fetchCommunity(id);
  }, [id]);

  const [properties, setProperties] = useState([]);

  console.log("properties", properties);

  return (
    <section>
      {community ? (
        <div>
          <div className="p-6 -mt-10 lg:mt-0 max-w-[1320px] md:mt-0 mx-auto">
            <h2 className="text-2xl text-center font-bold my-8">
              DUBAI PROPERTIES
            </h2>
            <p className="text-center text-gray-600 mt-2">
              {community.description}
            </p>

            <div className="mb-12 mt-10 relative">
              <Slider ref={sliderRef} {...ImagesSettings}>
                {community.length > 0 &&
                  community.image.map((pro, index) => (
                    <div key={index} className="slick-slide">
                      <img
                        src={pro.image}
                        alt="Property"
                        className="rounded-[5px] w-[100%] h-52 mb-4 object-cover px-1"
                      />
                    </div>
                  ))}
              </Slider>
            </div>
          </div>

          {/* Hignlights */}
          <div className="max-w-[1320px] mx-auto px-5">
            <h2 className="text-[25px] text-center font-semibold lg:text-[32px] mb-4 md:text-[32px] mt-5">
              HIGHLIGHTS
            </h2>
            <Divider />
            <div className="mb-16 ml-2 mt-10 mx- relative">
              <Slider ref={sliderRef} {...OptionsSettings}>
                {community.highlights.map((option, index) => (
                  <div key={index} className="slick-slide">
                    <div
                      onClick={() => setSelected(option.id)}
                      className={`PerCommHighSwipp flex flex-col  items-center justify-center gap-2 w-[95%] h-[198px]   px-3  rounded-lg transition-all duration-500  cursor-pointer
                  bg-whit hover:shadow-lg border border-[#A9B9D6]`}
                    >
                      <img src={option.highlights_img} className="px-8" />
                      <span className="text-center text-gray-600 font-medium">
                        {option.title}
                      </span>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="max-w-[1320px] mx-auto px-5">
            <h2 className="text-[25px] text-center font-semibold lg:text-[32px] mb-4 md:text-[32px]">
              AMENITIES
            </h2>
            <Divider />
            <div className="mb-16 mt-10 mx-12 relativ">
              {" "}
              <Slider ref={sliderRef} {...AmenSettings}>
                {community.amenities.map((option, index) => (
                  <div key={index} className="slick-slide">
                    <div
                      onClick={() => setSelected(option.id)}
                      className={` flex flex-col mx-auto  items-center justify-center gap-2 w-[164px] h-[164px]     rounded-full transition-all duration-500  cursor-pointer
                  bg-whit hover:shadow-lg border border-[#A9B9D6] mb-2`}
                    >
                      <img src={option.amenities_img} className="px-" />
                    </div>
                    <div className="flex justify-center text-cente text-gray-600 font-medium items-center mx-auto">
                      {option.title}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <Divider />

          <h2 className="text-[25px] text-center font-semibold lg:text-[32px] mb-4 md:text-[32px] mt-5">
            AVAILABLE PROPERTIES{" "}
          </h2>

          {/* Rent Property status */}
          <section className="bg-[#F4F4F4] mt-12">
            <div className="max-w-[1320px] mx-auto pb-14 py-5">
              <h3 className="text-[27px] font-bold lg:text-[32px] mb-1 md:text-[32px] px-5">
                RENT
              </h3>
              <span className="flex border-[#A9B9D6] border-b-[3px] w-[150px] mb-8 mx-5"></span>
              <SmallPropertyComponent Status={"Rent"} />
            </div>
          </section>

          <div className="mt-10">
            <Divider />
          </div>
          <section className="bg-[#F4F4F4] mt-12">
            <div className="max-w-[1320px] mx-auto pb-14 py-5">
              <h3 className="text-[27px] font-bold lg:text-[32px] mb-1 md:text-[32px] px-5">
                BUY
              </h3>
              <span className="flex border-[#A9B9D6] border-b-[3px] w-[150px] mb-8 mx-5"></span>
              <SmallPropertyComponent Status={"Buy"} />
            </div>
          </section>
        </div>
      ) : (
        "Loading..."
      )}
    </section>
  );
};

export default PerticularCommunities;
