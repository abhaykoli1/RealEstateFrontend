import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import PropertyCardCompo from "../../components/user/propertyCardCompo";
import property from "../../assets/property.png";
import Slider from "react-slick";
import Divider from "../../components/user/divider";
import {
  FaChevronDown,
  FaDollarSign,
  FaLocationArrow,
  FaSlidersH,
} from "react-icons/fa";
const properties = [
  { id: 1, image: "villa1.jpg", type: "VILLA", location: "The Acres" },
  { id: 2, image: "villa2.jpg", type: "VILLA", location: "The Acres" },
  { id: 3, image: "villa3.jpg", type: "VILLA", location: "The Acres" },
  { id: 4, image: "villa4.jpg", type: "VILLA", location: "The Acres" },
  { id: 5, image: "villa5.jpg", type: "VILLA", location: "The Acres" },
  { id: 6, image: "villa6.jpg", type: "VILLA", location: "The Acres" },
  { id: 7, image: "villa6.jpg", type: "VILLA", location: "The Acres" },
  { id: 8, image: "villa6.jpg", type: "VILLA", location: "The Acres" },
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

const PerticularDevelopers = () => {
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
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState("map");

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const menuItems = [
    { label: "New Projects", icon: null, options: ["1 ", "2 ", "3 "] },

    {
      label: "Location",
      icon: <FaLocationArrow />,
      options: ["New York", "Los Angeles", "Chicago"],
    },
  ];
  return (
    <section>
      <div className="p-6 max-w-[1320px] mx-auto lg:mt-0 md:mt-0 -mt-10">
        <h2 className="text-2xl font-bold text-center my-8">
          DUBAI PROPERTIES
        </h2>
        <p className="text-gray-600 text-center mt-2">
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
        <p className="text-gray-600 text-center mt-2">
          The practice of providing patients with the best care possible while
          also treating their illnesses is at the heart of the medical
          profession. Because the medical sector encompasses a wide range of
          specialities, including endocrinology, biochemistry, and biomedical
          science. As you are aware, the medical field encompasses a wide range
          of occupations other than those of the doctor and patient, including
          nurses, ward boys, and others. This is because it requires a great
          deal of medical research, medical specialities for assignment writing,
          and patient care.
        </p>
        <p className="text-gray-600 text-center mt-2">
          Students have a variety of opportunities in the medical profession to
          gain the advantages of assisting people and reducing their pain.
          Additionally, they can engage with the newest innovations and develop
          into professionals in research and technology. Along with these,
          medicine offers a wide range of job options, including those in
          research, nursing, medicine, public health, and many more. A person
          who studies medicine can work anywhere in the globe and enjoy high
          career stability. Additionally, this field property provides
          opportunities and constant excellent security. Therefore, choosing a
          career in this field to achieve all of your personal and professional
          goals while promoting humanities is a fantastic decision. Let's look
          at some of the most original and popular concepts that can give you a
          general notion of your study topic in the section that follows.
        </p>

        <div className="mt-10">
          {" "}
          <Divider />
        </div>
        {/* Filters */}
        <div className="flex gap-3 flex-wrap w-full justify-center relative mt-12 mb-10">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              <a
                onClick={() => toggleDropdown(index)}
                className="bg-white px-7 py-3 flex items-center gap-3 rounded-md shadow-[0px_5px_10px_rgba(0,0,0,0.1)]"
              >
                {item.icon} {item.label} <FaChevronDown />
              </a>
              {openDropdown === index && (
                <div className="absolute mt-2 bg-white shadow-md rounded-md w-48 z-10">
                  {item.options.map((option, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  xl:grid-cols-4 !gap-2 ">
          {properties.map((project) => (
            <div
              key={project.id}
              className="relative w-auto h- bg-500  !p-0 hover:scale-[98%] transition-all duration-300"
            >
              <img
                src="https://picsum.photos/400/300"
                alt={project.name}
                className="w-auto h-[300px] rounded-[5px]  object-cover"
              />
              <span className="absolute top-3 right-3 bg-[rgba(255,255,255,0.7)] text-black text-xs px-2 py-1 rounded">
                {project.type}
              </span>
              <div className="absolute bottom-3 left-3 bg-[rgba(255,255,255,0.7)] text-black text-sm px-2 py-1 rounded">
                {project.location}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-4 mb-10">
          <button className="h-[49px] w-[210px] bg-[#2F5FA7] hover:scale-[102%] transition-all duration-500 text-white !rounded-[5px]">
            Load More
          </button>
        </div>
      </div>
      <Divider />

      <h2 className="lg:text-[32px] md:text-[32px] text-[25px] font-semibold text-center mb-4 mt-5">
        AVAILABLE PROPERTIES{" "}
      </h2>
      <section className=" bg-[#F4F4F4] mt-12">
        <div className="max-w-[1320px] mx-auto py-5 pb-14">
          <h3 className="lg:text-[32px] md:text-[32px] text-[27px] font-bold mb-1 px-5 ">
            RENT
          </h3>
          <span className="border-b-[3px]  border-[#A9B9D6] flex w-[150px] mb-8 mx-5 "></span>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10 mt-6"> */}

          <div className="mt-10  relative mx-10 SliderMargin">
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
      <section className=" bg-[#F4F4F4] mt-12">
        <div className="max-w-[1320px] mx-auto py-5 pb-14">
          <h3 className="lg:text-[32px] md:text-[32px] text-[27px] font-bold mb-1 px-5 ">
            BUY
          </h3>
          <span className="border-b-[3px]  border-[#A9B9D6] flex w-[150px] mb-8 mx-5 "></span>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10 mt-6"> */}

          <div className="mt-10  relative mx-10 SliderMargin">
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

export default PerticularDevelopers;
