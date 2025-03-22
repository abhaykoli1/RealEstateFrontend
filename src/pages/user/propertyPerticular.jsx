import React from "react";
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
import Calendar from "../../assets/Calendar.png";
import { FcLock } from "react-icons/fc";

const properties = [
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

  return (
    <section className="">
      <div className="max-w-[1320px mx-auto lg:px-10 md:px-10 px-5">
        {/* Breadcrumb Navigation */}
        <div className="text-gray-500 text-sm mt-7">
          <a href="#" className="hover:underline">
            Back to Listing
          </a>{" "}
          &gt; Home &gt; Property sale in Dubai &gt; Sell &gt; Shree Vilass
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[60vw_1fr] gap-4 px-5">
          <img
            src={main}
            className="w-full h-auto md:h-full object-cover rounded-lg"
          />

          <div className="flex lg:flex-col gap-4 sm:flex-nowrap flex-wrap">
            <img
              src={image1}
              className="w-full h-auto object-cover rounded-lg"
            />
            <img
              src={image3}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-[60%_1fr]  sm:grid-cols-1 grid-cols-1 lg:mb-10 md:mb-10 mb-5  gap-6">
          <div className="overflow-y-scrol h-full">
            <div className="bg-white  shadow-lg p-5 rounded-lg my-5">
              <h2 className="text-[22px] font-bold">
                Elegant 3bhk | Maid room | Terrace | Parking
              </h2>
              <p className="text-[14px] mt-2">
                haus & haus proudly brings to market this exquisite 2-bed
                apartment in FIVE Palm Jumeirah. This apartment presents an
                exceptional investment opportunity with a promising ROI
                year-round. Located on the iconic West Beach side of The Palm
                Jumeirah, this opulent residence offers unobstructed views of
                the sea and the Emaar Beachfront skyline.
              </p>
              <p className="text-[14px] mt-3">
                A very well-known lifestyle destination FIVE Palm is
                world-renowned now for its famed atmosphere, beaches, &
                nightlife. The property is vacant now and is ready for
                occupancy, the unit can be short-termed out and managed in full
                by the hotel itself. This is an excellent investor opportunity.
              </p>
              <p className="text-[14px] mt-3">
                Please call for more information, to arrange a viewing, or to
                make an offer.{" "}
              </p>
              <p className="text-[14px] mt-3">
                Finance is available on this property through haus & haus
                partners.
              </p>
              <p className="text-[14px] mt-3">
                For further details, please drop into our flagship office at the
                Gold & Diamond Park - or browse the incredible selection of
                properties we maintain at the haus & haus website.
              </p>
              <div className="border-b-2 border-[#7A9DC4] my-5"></div>
              <h2 className="text-[22px] font-bold">Amenities</h2>
              <ul className="flex justify-between  mt-2 text-[14px]">
                <li>🔐 Security</li>
                <li>🌊 Water View</li>
                <li>⛹️ Shared Gym</li>
                <li>🏖 Beach Access</li>
              </ul>
              <div className="border-b-2 border-[#7A9DC4] my-5"></div>
              <div className=" mt-8">
                <h2 className="text-2xl font-bold mb-4">Near By</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
                  {places.map((place) => (
                    <div
                      key={place.id}
                      className="flex items-center gap-2 mb-2"
                    >
                      <img src={plane} alt="Plane" className="w-12 h-12" />
                      {/* 🛫 */}
                      <div>
                        <h3 className="font-bold text-lg">{place.name}</h3>
                        <p className="text-gray-600">
                          Distance: {place.distance}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-b-2 border-[#7A9DC4] my-5"></div>
              <h2 className="text-[22px] font-bold">Location</h2>
              <p className="text-[14px] mt-1">
                FIVE Palm Jumeirah, Palm Jumeirah, Dubai
              </p>
              <img src={map} className="w-full mt-2" />
              <div className="border-b-2 border-[#7A9DC4] my-5"></div>
              <div className="">
                {/* Header */}
                <h2 className="text-xl font-bold  pb-3">Mortgage Calculator</h2>

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
              <div className="border-b-2 border-[#7A9DC4] my-5"></div>
              <div className="flex items-center">
                <img src={QR} />
                <div>
                  {" "}
                  <h2 className="text-[18px] font-semibold">
                    DLD Permit Number:
                  </h2>
                  <p className="text-[15px] font-light">71135879299</p>
                  <p className="text-[13px] font-light">
                    This property listing has been reviewed and verified by
                    Dubai Land Department
                  </p>
                </div>
              </div>
              <h2 className="text-[22px] font-bold mt-6">
                Other properties that may interest you
              </h2>
              <div className="max-w-screen-xl mx-auto pb-7 px-0">
                <Slider {...settings}>
                  {properties.map((pro) => (
                    <div key={pro.id} className="slick-slide  my-5">
                      <PropertyCard {...pro} />{" "}
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          <div className=" relative overflow-y-hidde ">
            <div className="fixe right-0 top-32  rounded-lg p-6 w-full  mx-auto shadow-lg space-y-3">
              {/* Reference and Permit Number */}
              <div className="grid grid-cols-2 gap-4 border-b-2 border-[#7A9DC4] pb-3">
                <div>
                  <h4 className="font-bold text-sm">REFERENCE NUMBER</h4>
                  <p className="text-gray-700">VI8398</p>
                </div>
                <div>
                  <h4 className="font-bold text-sm">PERMIT NUMBER</h4>
                  <p className="text-gray-700">6589633000</p>
                </div>
              </div>

              {/* Property Status & Type */}
              <div className="grid grid-cols-2 gap-4 border-b-2 border-[#7A9DC4] py-3">
                <div>
                  <h4 className="font-bold text-sm">PROPERTY STATUS</h4>
                  <p className="text-gray-700">Rent (Yearly)</p>
                </div>
                <div>
                  <h4 className="font-bold text-sm">PROPERTY TYPE</h4>
                  <p className="text-gray-700">Apartment</p>
                </div>
              </div>

              {/* Features */}
              <div className="py-3 border-b-2 border-[#7A9DC4]">
                <h4 className="font-bold">Features</h4>
                <div className="grid grid-cols-2 text-gray-700 text-sm mt-2 gap-4">
                  <ul className=" pl-4">
                    <li>🛌 2 Bedrooms</li>
                    <li>💯 Furnished</li>
                    <li>🚌 Vacant On Transfer</li>
                    <li>🎯 BUA 1,646 Sqft</li>
                    <li>🏞 Valet Parking</li>
                  </ul>
                  <ul className="">
                    <li>⚡ High ROI</li>
                    <li>♀ Gymnasium</li>
                    <li>🍽 Fine Dining</li>
                    <li>⛱Private Beach/Pool</li>
                    <li>🏡 Property reference</li>
                  </ul>
                </div>
              </div>

              {/* Price */}
              <div className="py-3 border-b-2 gap-5 border-[#7A9DC4] flex justify-between items-center">
                <h4 className="font-bold flex-[.5px] text-[18px]">
                  PROPERTY STATUS
                </h4>
                <div className="flex-[.5px]">
                  <p className="text-[18px] font- text-black">AED 164,000</p>
                </div>
              </div>

              <div className="flex justify-between gap-3 flex-wrap">
                <div className="flex w-ful items-center gap-4">
                  <img src={user} />
                  <div>
                    <h3 className="text-[18px] font-semibold">Abhay</h3>
                    <p className="text-[13px] ">Property Consultant</p>
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="flex flex-col gap-2">
                  <button className="!bg-[#7A9DC4] gap-1 h-[38px] w-[108px] text-white py-2 rounded-md flex items-center justify-center">
                    CALL <IoIosCall size={25} />
                  </button>

                  <button className="!bg-[#7A9DC4] gap-1 h-[38px] w-[108px] text-white py-2 rounded-md flex items-center justify-center">
                    Email <IoIosMail size={25} />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-3 flex-wrap">
              <button className="!p-2  h-[49px] !bg-white shadow-md rounded-lg flex items-center justify-center">
                {" "}
                <img src={download} />
              </button>

              <button className="!p-2 !px-6 h-[49px] !bg-white shadow-md rounded-lg flex items-center gap-2">
                <span className="text-black font-medium">Book a Viewing</span>
                <img src={Calendar} />
              </button>

              <button className="!p-2 !px-10 h-[49px] !bg-white shadow-md rounded-lg flex items-center justify-center">
                {" "}
                <img src={share} />
              </button>
              <button className="!p-2 !px-6 h-[49px] !bg-white shadow-md rounded-lg flex items-center gap-2">
                <span className="text-black font-medium">WhatsApp</span>
                <img src={WhatsApp} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </section>
  );
};

export default PropertyPerticular;
