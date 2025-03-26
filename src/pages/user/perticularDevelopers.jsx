import { useEffect, useRef, useState } from "react";
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
import SmallPropertyComponent from "../../components/user/SmallPropertyComponent";
import config from "../../common/config";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
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
  const { id } = useParams();
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

  const [developer, setDeveloper] = useState();
  console.log("developer", developer);
  const fetchDeveloper = async (id) => {
    if (!id) {
      console.error("developer ID is required");
      return;
    }

    try {
      const response = await axios.get(`${config.API_URL}/api/developer/${id}`);
      setDeveloper(response.data.data);
    } catch (error) {
      console.error(
        "Error fetching community:",
        error.response?.data || error.message
      );
    }
  };
  useEffect(() => {
    fetchDeveloper(id);
  }, [id]);

  // Properties Data

  const [allPropertiesData, setAllPropertiesData] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/api/property`, {
          signal: controller.signal,
        });
        const formattedData = response.data.data.map((property) => ({
          images: property.image.map((img) => img.image),
          seo_title: property.seo_title || "No Title",
          community: property.communities || "No Community",
          property_type: property.property_type || "No Property Type",
          property_status: property.property_status || "No Property Status",
          developer: property.developers || "No Developer",
          createdAt: property.createdAt || "No createdAt",
          location: property.location || "No location",
          price: property.price || "No Price",
          beds: property.beds || "No Beds",
          developer: property.developers || "No Developer",
        }));

        setAllPropertiesData(formattedData);
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error("Error fetching properties:", error);
        }
      }
    };

    fetchProperties();

    return () => controller.abort();
  }, []);

  console.log("allPropertiesData", allPropertiesData);

  // Flatten all images with their corresponding seo_title
  const allImages = allPropertiesData.flatMap((property) =>
    property.images.map((image) => ({
      image,
      seo_title: property.seo_title,
      community: property.communities || "No Community",
      property_type: property.property_type || "No Property Type",
      property_status: property.property_status || "No Property Status",
      developer: property.developers || "No Developer",
      createdAt: property.createdAt || "No createdAt",
      location: property.location || "No location",
      price: property.price || "No Price",
      beds: property.beds || "No Beds",
      developer: property.developers || "No Developer",
    }))
  );

  const shuffledImages = [...allImages].sort(() => Math.random() - 0.5);

  const property_status = "";
  const property_type = "";

  const [status, setStatus] = useState(null);
  const [pType, setPType] = useState(null);
  // const { seo_title } = useParams();

  useEffect(() => {
    const fetchPropertyStatus = async () => {
      console.log("id" + property_status["_id"]);
      try {
        const response = await axios.get(
          `${config.API_URL}/api/property-status/${property_status["_id"]}`
        );
        setStatus(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (property_status) {
      fetchPropertyStatus();
    }
  }, [property_status]);

  useEffect(() => {
    const fetchPropertyType = async () => {
      try {
        const response = await axios.get(
          `${config.API_URL}/api/property-type/${property_type["_id"]}`
        );
        setPType(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (property_type) {
      fetchPropertyType();
    }
  }, [property_type]);

  const navigate = useNavigate();
  const handelPerticularProperty = (seoTitle) => {
    navigate(`/property/${seoTitle}`);
  };

  return (
    <section>
      {developer ? (
        <div className="p-6 max-w-[1320px] mx-auto lg:mt-0 md:mt-0 -mt-10">
          <h2 className="text-2xl font-bold text-center my-8">
            DUBAI PROPERTIES
          </h2>
          <p className="text-gray-600 text-center mt-2">
            {developer.description}
          </p>

          <div className="mt-10">
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
            {shuffledImages.slice(0, 6).map((item, index) => (
              <div
                onClick={() => handelPerticularProperty(item.seo_title)}
                key={index}
                className="relative border cursor-pointer border-gray-300 rounded-[5px] w-auto h-auto hover:scale-[98%] transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.seo_title}
                  className="w-auto h-[300px] rounded-[5px]  object-cover"
                />
                <span className="absolute top-3 right-3 bg-[rgba(255,255,255,0.7)] text-black text-xs px-2 py-1 rounded">
                  {item.property_status}
                </span>
                <span className="absolute bottom-3 left-3 bg-[rgba(255,255,255,0.7)] text-black text-sm px-2 py-1 rounded">
                  {item.property_type}
                </span>
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
      ) : (
        ""
      )}
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
          <SmallPropertyComponent Status={"Rent"} />
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
          <SmallPropertyComponent Status={"Buy"} />
        </div>
      </section>
    </section>
  );
};

export default PerticularDevelopers;
