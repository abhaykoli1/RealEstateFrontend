import React, { useEffect, useState } from "react";
import main from "../../assets/main.png";
import image1 from "../../assets/image1.png";
import map from "../../assets/pmap.png";
import image3 from "../../assets/image3.png";
import { IoIosMail } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import PropertyCard from "../../components/user/propertyCard";
import QR from "../../assets/QR.png";
import Slider from "react-slick";
import property from "../../assets/property.png";
import user from "../../assets/user.png";
import plane from "../../assets/planee.png";
import WhatsApp from "../../assets/whatsapp.png";
import download from "../../assets/download.png";
import share from "../../assets/Share.png";
import Cal from "../../assets/Calendar.png";
import { FcLock } from "react-icons/fc";
import axios from "axios";
import config from "../../common/config";
import { useParams } from "react-router";
import TimeSlotSelector from "../../components/user/timeSlots";
import Calendar from "react-calendar";

// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { X } from "lucide-react";

const PropertyPerticular = () => {
  const places = [
    { id: 1, name: "Airport", distance: "1.2 Km" },
    { id: 2, name: "Airport", distance: "1.2 Km" },
    { id: 3, name: "Airport", distance: "1.2 Km" },
    { id: 4, name: "Airport", distance: "1.2 Km" },
    { id: 5, name: "Airport", distance: "1.2 Km" },
  ];
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const ImageSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };
  const ImageSettingsVertical = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };
  const [properties, setProperties] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(new Date());

  console.log("value =====", value);

  console.log("properties", properties);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/api/property`);
        // console.log(response.data.data);
        setProperties(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProperties();
  }, []);

  const [propertyData, setPropertyData] = useState(null);
  const [propertyStatus, setPropertyStatus] = useState(null); // Store property type data

  console.log("propertyData :", propertyData);

  const propertyStatusId = propertyData?.property_status; // En

  console.log("propertyStatusId :", propertyStatusId);
  useEffect(() => {
    if (!propertyStatusId) return; // Prevent API call if propertyTypeId is undefined

    const fetchPropertyStatus = async () => {
      try {
        const response = await axios.get(
          `${config.API_URL}/api/property-status/${propertyStatusId}`
        );
        console.log("Property Status Data:", response.data.data);
        setPropertyStatus(response.data.data); // Store fetched property type
      } catch (error) {
        console.error(
          "Error fetching property type:",
          error.response?.data || error.message
        );
      }
    };

    fetchPropertyStatus();
  }, [propertyStatusId]);

  const [propertyType, setPropertyType] = useState(null); // Store property type data

  const propertyTypeId = propertyData?.property_type; // En

  useEffect(() => {
    if (!propertyTypeId) return; // Prevent API call if propertyTypeId is undefined

    const fetchPropertyType = async () => {
      try {
        const response = await axios.get(
          `${config.API_URL}/api/property-type/${propertyTypeId}`
        );
        // console.log("Property Type Data:", response.data.data);
        setPropertyType(response.data.data); // Store fetched property type
      } catch (error) {
        console.error(
          "Error fetching property type:",
          error.response?.data || error.message
        );
      }
    };

    fetchPropertyType();
  }, [propertyTypeId]);

  const { seoTitle } = useParams();

  const [selectedConsultant, setSelectedConsultant] = useState(null);

  console.log("selectedConsultant : ", selectedConsultant);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (propertyData?.consultant) {
      setLoading(true);
      axios
        .get(`${config.API_URL}/api/consultant/${propertyData.consultant}`)
        .then((response) => {
          setSelectedConsultant(response.data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error fetching consultant details:", error);
          setSelectedConsultant(null);
          setLoading(false);
        });
    } else {
      setSelectedConsultant(null);
    }
  }, [propertyData?.consultant]);

  useEffect(() => {
    const fetchPropertyData = async () => {
      try {
        const response = await axios.get(
          `${config.API_URL}/api/property/seo/${seoTitle}`
        );
        setPropertyData(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPropertyData();
  }, [seoTitle]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % propertyData.image.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [propertyData ? propertyData.image.length : ""]);

  const subject = "Your Subject Here";
  const body = "Hello, I would like to discuss...";

  const mapStyles = {
    height: "400px",
    width: "100%",
    borderRadius: "x", // Adjust this for rounded corners
    overflow: "hidden", // Ensures the border radius is applied properly
  };

  const defaultCenter = {
    lat: propertyData?.latitude,
    lng: propertyData?.longitude,
  };

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 800) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="">
      {propertyData ? (
        <div className="max-w-[1320px mx-auto ">
          <div className="text-gray-500 text-sm lg:mt-7  md:mt-7 -my-3 lg:px-8 md:px-8 px-5 mb-2">
            <a href="/listing" className="hover:underline">
              Back to Listing
            </a>{" "}
            &gt; Property sale in Dubai &gt; Sell &gt; Shree Vilass
          </div>
          <div className=" lg:grid hidden grid-cols-1 lg:grid-cols-[60vw_1fr] xl:gap-4 lg:gap-4  md:gap-2  gap-2 lg:px-8 md:px-8 px-5">
            {/* First Image (Left Side) */}
            <div className="h-full">
              <img
                src={
                  propertyData.image[index % propertyData.image.length].image
                }
                className="w-full h-full object-cover rounded-[5px] transition-opacity duration-500"
                alt="Property"
              />
            </div>

            {/* Two Images (Right Side) */}
            <div className="grid grid-rows-2 gap-2 h-full">
              <img
                src={
                  propertyData.image[(index + 1) % propertyData.image.length]
                    .image
                }
                className="w-full h-full object-cover rounded-[5px] transition-opacity duration-500"
                alt="Property"
              />
              <img
                src={
                  propertyData.image[(index + 2) % propertyData.image.length]
                    .image
                }
                className="w-full h-full object-cover rounded-[5px] transition-opacity duration-500"
                alt="Property"
              />
            </div>
          </div>
          <div className="lg:hidden grid grid-cols-1 lg:grid-cols-[60vw_1fr] xl:gap-4 lg:gap-4  md:gap-2  gap-2 lg:px-8 md:px-8 px-5">
            <div className="overflow-hidden">
              <img
                src={propertyData.image[0].image}
                className="w-full h-auto  md:h-full object-cover rounded-[5px] hideImage"
              />
            </div>
            <span></span>
            {/* <div className="overflow-hidden">
              <div className="lg:flex hidden -mb-[16px] ">
                <Slider {...ImageSettingsVertical}>
                  {propertyData.image.slice(1).map((img, index) => (
                    <div key={index} className="slick-slid !rounded-[5px]">
                      <img
                        key={img._id}
                        src={img.image}
                        alt="Gallery"
                        className="w-full h-[280px] rounded-[5px] my-[7px]"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div> */}
            <div className="overflow-hidden">
              <div className=" -mr-[1.5%] horizontalImageConPro">
                <Slider {...ImageSettings}>
                  {propertyData.image.slice(1).map((img, index) => (
                    <div key={index} className={"slick-slid "}>
                      <img
                        key={img._id}
                        src={img.image}
                        alt="Gallery"
                        className="w-[97%] h-auto rounded-[5px] bg-red-500 "
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          {/* lg:px-8 md:px-8 px-5 */}
          <div className="grid mt-10 lg:grid-cols-[60%_1fr] lg:px-8 md:px-8 px-5  sm:grid-cols-1 grid-cols-1 lg:mb-10 md:mb-10 mb-5  gap-5">
            <div className="overflow-y-scrol h-full ">
              <div className="bg-white  lg:shadow-xl md:shadow-xl sm:shadow-xl  lg:p-5 md:p-5 sm:p-5 rounded-lg ">
                <h2 className="text-[22px] font-bold">{propertyData.title}</h2>
                <p className="text-[14px] mt-2">{propertyData.description}</p>

                <div className="border-b-2 border-[#7A9DC4] my-5"></div>
                <h2 className="text-[22px] font-bold">Amenities</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1">
                  {propertyData.amenities.map((ani, index) => {
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-betwee gap-2 mt-2 text-[14px]"
                      >
                        <img
                          src={ani.amenities_img}
                          alt={ani.title}
                          className="h-10"
                        />
                        <p className="text-[15px] font-medium">{ani.title}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="border-b-2 border-[#7A9DC4] my-5"></div>
                <div className=" mt-8">
                  <h2 className="text-2xl font-bold mb-4">Near By</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
                    {propertyData.near_by.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-2 mb-2 "
                        >
                          <img src={item.near_by_img} className="w-12 h-12" />

                          <div>
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <p className="text-gray-600">
                              Distance: {item.sub_title} km
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="border-b-2 border-[#7A9DC4] my-5"></div>
                <h2 className="text-[22px] font-bold">Location</h2>
                <p className="text-[14px] mt-1">
                  {/* FIVE Palm Jumeirah, Palm Jumeirah, Dubai */}
                </p>

                <MapContainer
                  center={defaultCenter}
                  zoom={15}
                  style={{
                    height: "400px",
                    width: "100%",
                    borderRadius: "5px",
                    zIndex: 0,
                  }}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={defaultCenter}>
                    <Popup>San Francisco</Popup>
                  </Marker>
                </MapContainer>

                <div className="border-b-2 border-[#7A9DC4] my-5"></div>
                <div className="">
                  {/* Header */}
                  <h2 className="text-xl font-bold  pb-3">
                    Mortgage Calculator
                  </h2>

                  {/* Input Fields */}
                  <div className="flex flex-wrap gap-4">
                    {/* Property Price */}
                    <div className="flex flex-col max-w-[160px]">
                      <label className="text-sm text-gray-600 mb-1">
                        Property Price
                      </label>
                      <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                        <input
                          type="text"
                          value="5,799,995"
                          className="w-full outline-none bg-transparent"
                        />
                        <span className="text-gray-500">AED</span>
                      </div>
                    </div>

                    {/* Deposit */}
                    <div className="flex flex-col max-w-[160px]">
                      <label className="text-sm text-gray-600 mb-1">
                        Deposit
                      </label>
                      <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                        <input
                          type="text"
                          value="1,159,999"
                          className="w-full outline-none bg-transparent"
                        />
                      </div>
                    </div>

                    {/* Mortgage Period */}
                    <div className="flex flex-col max-w-[160px]">
                      <label className="text-sm text-gray-600 mb-1">
                        Mortgage Period
                      </label>
                      <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                        <input
                          type="text"
                          value="25"
                          className="w-full outline-none bg-transparent"
                        />
                        <span className="text-gray-500">Years</span>
                      </div>
                    </div>

                    {/* Interest Rate */}
                    <div className="flex flex-col max-w-[160px]">
                      <label className="text-sm text-gray-600 mb-1">
                        Interest Rate
                      </label>
                      <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                        <input
                          type="text"
                          value="5"
                          className="w-full outline-none bg-transparent"
                        />
                        <span className="text-gray-500">%</span>
                      </div>
                    </div>
                  </div>

                  {/* Net Rent & ROI */}
                  <div className="mt-5 flex justify-between flex-wrap items-center gap-5">
                    <div className=" flex justify-between gap-10">
                      <div>
                        <p className="text-gray-600 text-[14px]">Net Rent</p>
                        <p className="text-[16px]">AED 716,000</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-[14px]">NET ROI</p>
                        <p className="text-[16px]">8.00%</p>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="">
                      <button className="!bg-[#7A9DC4] text-white !text-[15px] !px-8 !w-[243px] h-[38px] !py-0 !rounded-[5px]  md:w-auto">
                        Get pre-approve
                      </button>
                    </div>
                  </div>
                </div>

                {/*  DLD Permit : */}
                <div className="border-b-2 border-[#7A9DC4] my-5"></div>
                <div className="flex items-center gap-5">
                  <img src={propertyData.old_permit_image} className="h-20" />
                  <div>
                    {" "}
                    <h2 className="text-[18px] font-semibold">
                      DLD Permit Number:
                    </h2>
                    <p className="text-[15px] font-light">
                      {propertyData.old_permit_number}
                    </p>
                    <p className="text-[13px] font-light">
                      {propertyData.old_permit_description}
                    </p>
                  </div>
                </div>
                {properties.length > 1 && (
                  <h2 className={` text-[22px] font-bold mt-6 `}>
                    Other properties that may interest you
                  </h2>
                )}
                <div className="max-w-screen-xl mx-auto pb-7 px-0">
                  <Slider {...settings}>
                    {properties.length > 1 &&
                      properties.map((pro) => (
                        <div key={pro.id} className={`slick-slide  my-5 `}>
                          <PropertyCard {...pro} />{" "}
                        </div>
                      ))}
                  </Slider>
                </div>
              </div>
            </div>

            <div className="relative overflow-y-hidde ">
              <div
                className={`${
                  isFixed ? "lg:fixed top-[100px] lg:max-w-[37.5%] right-8" : ""
                } w-full `}
              >
                <div
                  className={` ml-[5px] bg-white lg:shadow-xl md:shadow-xl sm:shadow-xl  lg:p-5 md:p-5 sm:p-5 rounded-lg  w-full  mx-auto  space-y-3`}
                >
                  {/* Reference and Permit Number */}
                  <div className="grid grid-cols-2 gap-4 border-b-2 border-[#7A9DC4] pb-3">
                    <div>
                      <h4 className="font-bold text-sm">REFERENCE NUMBER</h4>
                      <p className="text-gray-700">
                        {propertyData.refernce_number}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">PERMIT NUMBER</h4>
                      <p className="text-gray-700">
                        {propertyData.permit_number}
                      </p>
                    </div>
                  </div>

                  {/* Property Status & Type */}
                  <div className="grid grid-cols-2 gap-4 border-b-2 border-[#7A9DC4] py-3">
                    <div>
                      <h4 className="font-bold text-sm">PROPERTY STATUS</h4>
                      <p className="text-gray-700">
                        {" "}
                        {propertyStatus ? propertyStatus.title : " "}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">PROPERTY TYPE</h4>
                      <p className="text-gray-700">
                        {propertyType ? propertyType.title : " "}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="py-3 border-b-2 border-[#7A9DC4]">
                    <h4 className="font-bold">Features</h4>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 text-gray-700 text-sm mt-2 gap-">
                      {propertyData.features.map((ani, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center justify-betwee gap-2 mt-2 text-[14px]"
                          >
                            <div className="h-7 w-10 flex items-center justify-center">
                              <img
                                src={ani.features_img}
                                alt={ani.title}
                                className="h-6"
                              />
                            </div>
                            <p className="text-[15px] font-medium">
                              {ani.title}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="py-3 border-b-2 gap-5 border-[#7A9DC4] flex justify-between items-center">
                    <h4 className="font-bold flex-[.5px] text-[18px]">PRICE</h4>
                    <div className="flex-[.5px]">
                      <p className="text-[18px] font- text-black">
                        AED {propertyData.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between gap-3 flex-wrap">
                    {selectedConsultant ? (
                      <div className="flex w-ful items-center gap-4 ">
                        <img
                          src={selectedConsultant.profile_pic}
                          alt={selectedConsultant.name}
                          className="h-[75px]"
                        />
                        <div>
                          <h3 className="text-[18px] font-semibold">
                            {selectedConsultant.name}
                          </h3>
                          <p className="text-[13px] ">Property Consultant</p>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {/* Action Buttons */}
                    {selectedConsultant ? (
                      <div className="flex flex-col gap-2">
                        <a
                          href={`tel:${selectedConsultant?.phone}`}
                          className="!bg-[#7A9DC4] gap-1 h-[38px] w-[108px] !text-white py-2 rounded-md flex items-center justify-center"
                        >
                          Call <IoIosCall size={25} />
                        </a>

                        <a
                          href={`mailto:${
                            selectedConsultant?.email
                          }?subject=${encodeURIComponent(
                            subject
                          )}&body=${encodeURIComponent(body)}`}
                          className="!bg-[#7A9DC4] gap-1 h-[38px] w-[108px] !text-white py-2 rounded-md flex items-center justify-center"
                        >
                          Email <IoIosMail size={25} />
                        </a>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="flex gap-2 mt-3 flex-wrap">
                  <button className="!p-2  h-[49px] !bg-white shadow-md rounded-lg flex items-center justify-center">
                    {" "}
                    <img src={download} />
                  </button>

                  <button
                    onClick={() => setIsOpen(true)}
                    className="!p-2 !px-6 h-[49px] !bg-white shadow-md rounded-lg flex items-center gap-2"
                  >
                    <span className="text-black font-medium">
                      Book a Viewing
                    </span>
                    <img src={Cal} />
                  </button>

                  <button className="!p-2 !px-10 h-[49px] !bg-white shadow-md rounded-lg flex items-center justify-center">
                    <img src={share} />
                  </button>
                  {selectedConsultant && (
                    <a
                      href={`https://wa.me/${selectedConsultant?.country_code}${selectedConsultant?.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="!p-2 !px-6 hover:outline-[#2f5fa7] outline outline-transparent h-[49px] !bg-white shadow-md cursor-pointer hover:scale-[101%] !rounded-[5px] flex items-center gap-2"
                    >
                      <span className="text-black font-medium">WhatsApp</span>
                      <img src={WhatsApp} alt="WhatsApp Icon" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Modal */}
          {isOpen && (
            <div className="fixed inset-0  flex justify-center items-center ">
              <div className="bg-white rounded-lg shadow-lg p-6 z-20 mt-20 relative">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Select a Date & Time
                </h2>

                <div className="calendar-container flex items-center justify-center w-">
                  <Calendar onChange={setValue} value={value} />
                  <div className="w-96 h-[422px] overflow-hidden ">
                    <h3 className="text-lg text-center font-semibold mb-2 text-gray-800">
                      Select Time
                    </h3>
                    <div className="h-full overflow-y-auto p-2">
                      <TimeSlotSelector />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <div
                    className="absolute top-4 right-4 !bg-transparent cursor-pointer hover:scale-115 transition-all duration-300   !text-gray-700 rounded-md !hover:bg-gray-400"
                    onClick={() => setIsOpen(false)}
                  >
                    <X />
                  </div>
                </div>
              </div>
              {isOpen ? (
                <div
                  onClick={() => setIsOpen(false)}
                  className="bg-[rgba(0,0,0,0.3)] bg-opacity0   fixed top-0 right-0 left-0 bottom-0 z-10"
                ></div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
      ) : (
        ""
      )}
      {/* <Footer /> */}
    </section>
  );
};

export default PropertyPerticular;
