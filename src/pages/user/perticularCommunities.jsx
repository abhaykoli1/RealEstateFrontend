import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import PropertyCardCompo from "../../components/user/propertyCardCompo";
import property from "../../assets/property.png";
import City from "../../assets/City.png";

import Slider from "react-slick";
import Divider from "../../components/user/divider";
import {
  FaChevronDown,
  FaDollarSign,
  FaLocationArrow,
  FaSlidersH,
} from "react-icons/fa";
const PropertyImages = [
  { id: 1, image: property, type: "VILLA", location: "The Acres" },
  { id: 2, image: property, type: "VILLA", location: "The Acres" },
  { id: 3, image: property, type: "VILLA", location: "The Acres" },
  { id: 4, image: property, type: "VILLA", location: "The Acres" },
  { id: 5, image: property, type: "VILLA", location: "The Acres" },
  { id: 6, image: property, type: "VILLA", location: "The Acres" },
  { id: 7, image: property, type: "VILLA", location: "The Acres" },
  { id: 8, image: property, type: "VILLA", location: "The Acres" },
];
const propertiess = [
  {
    id: 1,
    name: "The Acres",
    location: "Dubailand",
    deliveryDate: "Dec, 2028",
    price: "AED 5,080,000",
    developer: "MERAAS",
    image: property,
  },
  {
    id: 2,
    name: "Palm Heights",
    location: "Palm Jumeirah",
    deliveryDate: "Jan, 2027",
    price: "AED 7,200,000",
    developer: "Emaar Properties",
    image: property,
  },
  {
    id: 3,
    name: "Skyline Residences",
    location: "Downtown Dubai",
    deliveryDate: "Mar, 2026",
    price: "AED 4,500,000",
    developer: "Nakheel",
    image: property,
  },
  {
    id: 4,
    name: "Skyline Residences",
    location: "Downtown Dubai",
    deliveryDate: "Mar, 2026",
    price: "AED 4,500,000",
    developer: "Nakheel",
    image: property,
  },
];
const menuItems = [
  { label: "New Projects", icon: null, options: ["1 ", "2 ", "3 "] },

  {
    label: "Location",
    icon: <FaLocationArrow />,
    options: ["New York", "Los Angeles", "Chicago"],
  },
];
const options = [
  { id: 1, name: "10 Minutes To Downtown", icon: City },
  { id: 2, name: "10 Minutes To Beach", icon: City },
  {
    id: 3,
    name: "10 Minutes To Downtown",
    icon: City,
  },
  { id: 4, name: "10 Minutes To Downtown", icon: City },
  { id: 5, name: "10 Minutes To Downtown", icon: City },
];
const options2 = [
  { id: 1, name: "View of Landmark", icon: City },
  { id: 2, name: "Landscape Garden ", icon: City },
  {
    id: 3,
    name: "View of Landmark",
    icon: City,
  },
  { id: 4, name: "View of Landmark", icon: City },
  { id: 5, name: "View of Landmark", icon: City },
];

const PerticularCommunities = () => {
  const sliderRef = useRef(null);
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

  return (
    <section>
      <div className="p-6 -mt-10 lg:mt-0 max-w-[1320px] md:mt-0 mx-auto">
        <h2 className="text-2xl text-center font-bold my-8">
          DUBAI PROPERTIES
        </h2>
        <p className="text-center text-gray-600 mt-2">
          The medical sector is so vast and fascinating, that students have a
          special attraction to it. as the study of human and animal health is
          the primary objective of this profession. With therapy, disease
          diagnosis, and disease treatment, the medical industry offers a wide
          range of remedies and helps save lives. It's a pretty broad field,
          thus it's crucial to perform the research and finish the task.
          additionally, it's crucial to make the greatest decision possible. So
          let's get started with the blog and talk about the many medical
          specialties and research areas.
        </p>

        <div className="mb-12 mt-10 relative">
          <Slider ref={sliderRef} {...ImagesSettings}>
            {PropertyImages.map((pro, index) => (
              <div key={pro.id} className="slick-slide">
                <img
                  src={pro.image}
                  alt="Property"
                  className="rounded-[5px] w-[100%] h mb-4 object-cover px-1"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="max-w-[1320px] mx-auto px-5">
        <h2 className="text-[25px] text-center font-semibold lg:text-[32px] mb-4 md:text-[32px] mt-5">
          HIGHLIGHTS
        </h2>
        <Divider />
        <div className="mb-16 ml-2 mt-10 mx- relative">
          <Slider ref={sliderRef} {...OptionsSettings}>
            {options.map((option, index) => (
              <div key={option.id} className="slick-slide">
                <div
                  onClick={() => setSelected(option.id)}
                  className={`PerCommHighSwipp flex flex-col  items-center justify-center gap-2 w-[95%] h-[198px]   px-3  rounded-lg transition-all duration-500  cursor-pointer
                  bg-whit hover:shadow-lg border border-[#A9B9D6]`}
                >
                  <img src={option.icon} className="px-8" />
                  <span className="text-center text-gray-600 font-medium">
                    {option.name}
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
            {options2.map((option, index) => (
              <div key={option.id} className="slick-slide">
                <div
                  onClick={() => setSelected(option.id)}
                  className={` flex flex-col mx-auto  items-center justify-center gap-2 w-[164px] h-[164px]     rounded-full transition-all duration-500  cursor-pointer
                  bg-whit hover:shadow-lg border border-[#A9B9D6] mb-2`}
                >
                  <img src={option.icon} className="px-" />
                </div>
                <div className="flex justify-center text-cente text-gray-600 font-medium items-center mx-auto">
                  {option.name}
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
      <section className="bg-[#F4F4F4] mt-12">
        <div className="max-w-[1320px] mx-auto pb-14 py-5">
          <h3 className="text-[27px] font-bold lg:text-[32px] mb-1 md:text-[32px] px-5">
            RENT
          </h3>
          <span className="flex border-[#A9B9D6] border-b-[3px] w-[150px] mb-8 mx-5"></span>

          <div className="mt-10 mx-10 relative SliderMargin">
            <Slider ref={sliderRef} {...settings}>
              {propertiess.map((pro, index) => (
                <div key={index} className="slick-slide">
                  <PropertyCardCompo pro={pro} />
                </div>
              ))}
            </Slider>
          </div>
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

          <div className="mt-10 mx-10 relative SliderMargin">
            <Slider ref={sliderRef} {...settings}>
              {propertiess.map((pro, index) => (
                <div key={index} className="slick-slide">
                  <PropertyCardCompo pro={pro} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PerticularCommunities;
