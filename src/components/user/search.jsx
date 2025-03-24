import { useState, useEffect } from "react";
import axios from "axios";
import config from "../../common/config";
import { FaAngleDown } from "react-icons/fa";

export default function PropertySearch({ setProperties, properties }) {
  const [filters, setFilters] = useState({
    property_type: "",
    property_status: "",
    comerical: null,
    beds: "",
  });

  //   const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);
  const [selectedPropertyStatus, setSelectedPropertyStatus] = useState(null);
  const [selectedBeds, setSelectedBeds] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownType, setDropdownType] = useState(null); // New state to track which dropdown is showing
  const [propertyStatus, setPropertyStatus] = useState([]);
  const [propertyType, setPropertyType] = useState([]);

  console.log("properties", properties);
  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/property-type`)
      .then((response) => setPropertyType(response.data.data))
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/property-status`)
      .then((response) => setPropertyStatus(response.data.data))
      .catch((error) => console.log(error.message));
  }, []);

  //`filters`
  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${config.API_URL}/api/property/filters`,
          {
            params: filters,
          }
        );
        // console.log(response.data.properties);
        setProperties(response.data.properties); // Make sure you set the fetched properties
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchProperties();
  }, [filters]);

  const beds = [
    { _id: "1", title: "1 Bed" },
    { _id: "2", title: "2 Beds" },
    { _id: "3", title: "3 Beds" },
    { _id: "4", title: "4+ Beds" },
  ];

  const price = [
    { _id: "1", from: "1 M", to: "4 M" },
    { _id: "2", from: "4 M", to: "8 M" },
    { _id: "3", from: "8 M", to: "12 M" },
    { _id: "4", from: "12 M", to: "16 M" },
  ];

  //   console.log(properties.data.properties);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters({
      ...filters,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSelect = (type, typeCategory) => {
    if (typeCategory === "propertyType") {
      setFilters({ ...filters, property_type: type._id });
      setSelectedPropertyType(type.title);
    } else if (typeCategory === "propertyStatus") {
      setFilters({ ...filters, property_status: type._id });
      setSelectedPropertyStatus(type.title);
    } else if (typeCategory === "beds") {
      setFilters({ ...filters, beds: type._id });
      setSelectedBeds(type.title);
    }

    setShowDropdown(false);
  };

  return (
    <section>
      <div className=" gap-3 flex flex-wrap relative lg:px-5">
        <div className="bg-white px-7 py-3 flex items-center gap-3 rounded-md shadow-[0px_5px_10px_rgba(0,0,0,0.1)] border-gray-300 p-2   cursor-pointer ">
          <input
            type="checkbox"
            id="comerical"
            name="comerical"
            checked={filters.comerical}
            onChange={handleChange}
            className="w-4 h-4"
          />
          <label
            htmlFor="comerical"
            className="text-sm text-black cursor-pointer"
          >
            Comercial
          </label>
        </div>
        {/* Beds */}
        <div
          className="bg-white gap-3 px-7 py-3 flex items-center  rounded-md shadow-[0px_5px_10px_rgba(0,0,0,0.1)] border-gray-300 p-2   cursor-pointer "
          onClick={() => {
            setDropdownType("beds");
            setShowDropdown(!showDropdown);
          }}
        >
          {selectedBeds ? (
            <div className="flex items-center justify-between w-full space-x-2">
              <div className="flex items-center gap-4">
                <span>{selectedBeds}</span>
              </div>
              <FaAngleDown color="gray" size={20} />
            </div>
          ) : (
            <span className="text-gray-400 flex gap-4 w-full  justify-between items-center">
              Beds <FaAngleDown size={20} color="gray" />
            </span>
          )}
        </div>

        {showDropdown && dropdownType === "beds" && (
          <div className="bg-white border border-gray-500/55 rounded-lg shadow-lg w-full absolute mt-1 z-10">
            {beds.map((bed) => (
              <div
                key={bed._id}
                className="flex p-2 cursor-pointer hover:bg-gray-100 rounded-lg items-center"
                onClick={() => handleSelect(bed, "beds")}
              >
                <span className="ml-2">{bed.title}</span>
              </div>
            ))}
          </div>
        )}

        {/* Location */}
        <div
          className="bg-white px-7 py-3 flex items-center gap-3 rounded-md shadow-[0px_5px_10px_rgba(0,0,0,0.1)] border-gray-300 p-2   cursor-pointer "
          onClick={() => {
            setDropdownType("beds");
            setShowDropdown(!showDropdown);
          }}
        >
          {selectedBeds ? (
            <div className="flex items-center justify-between w-full space-x-2">
              <div className="flex items-center gap-4">
                <span>{selectedBeds}</span>
              </div>
              <FaAngleDown color="gray" size={20} />
            </div>
          ) : (
            <span className="text-gray-400 gap-4  flex w-full  justify-between items-center">
              Location <FaAngleDown size={20} color="gray" />
            </span>
          )}
        </div>
        {showDropdown && dropdownType === "beds" && (
          <div className="bg-white border border-gray-500/55 rounded-lg shadow-lg w-full absolute mt-1 z-10">
            {beds.map((bed) => (
              <div
                key={bed._id}
                className="flex p-2 cursor-pointer hover:bg-gray-100 rounded-lg items-center"
                onClick={() => handleSelect(bed, "beds")}
              >
                <span className="ml-2">{bed.title}</span>
              </div>
            ))}
          </div>
        )}

        {/* Price Range */}
        <div
          className="bg-white  relative px-7 py-3 flex items-center gap-3 rounded-md shadow-[0px_5px_10px_rgba(0,0,0,0.1)] border-gray-300 p-2   cursor-pointer "
          onClick={() => {
            setDropdownType("price");
            setShowDropdown(!showDropdown);
          }}
        >
          {selectedBeds ? (
            <div className="flex   w-40 items-center justify-between space-x-2">
              <div className="flex items-center gap-4">
                <span>{selectedBeds}</span>
              </div>
              <FaAngleDown color="gray" size={20} />
            </div>
          ) : (
            <span className="text-gray-400 gap-4  flex w-full  justify-between items-center">
              Price Range <FaAngleDown size={20} color="gray" />
            </span>
          )}
        </div>
        {showDropdown && dropdownType === "price" && (
          <div className="bg-white border border-gray-500/55 rounded-lg shadow-lg w-full absolute mt-1 z-10">
            {price.map((item) => (
              <div
                key={item._id}
                className="flex p-2 cursor-pointer hover:bg-gray-100 rounded-lg items-center"
                onClick={() => handleSelect(item, "price")}
              >
                <span className="ml-2">
                  {item.from} - {item.to}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Property Status */}
        <div
          className="bg-white px-7 py-3 flex items-center gap-3 rounded-md shadow-[0px_5px_10px_rgba(0,0,0,0.1)] border-gray-300 p-2  cursor-pointer "
          onClick={() => {
            setDropdownType("propertyStatus");
            setShowDropdown(!showDropdown);
          }}
        >
          {selectedPropertyStatus ? (
            <div className="flex items-center justify-between w-full space-x-2">
              <div className="flex items-center gap-4">
                <span>{selectedPropertyStatus}</span>
              </div>
              <FaAngleDown color="gray" size={20} />
            </div>
          ) : (
            <span className="text-gray-400 gap-4  flex w-full  justify-between items-center">
              Property Status <FaAngleDown size={20} color="gray" />
            </span>
          )}
        </div>

        {showDropdown && dropdownType === "propertyStatus" && (
          <div className="bg-white border border-gray-500/55 rounded-lg shadow-lg w-full absolute mt-1 z-10">
            {propertyStatus.map((status) => (
              <div
                key={status._id}
                className="flex p-2 cursor-pointer hover:bg-gray-100 rounded-lg items-center"
                onClick={() => handleSelect(status, "propertyStatus")}
              >
                <span className="ml-2">{status.title}</span>
              </div>
            ))}
          </div>
        )}

        {/* Property Type */}
        <div
          className="bg-white px-7 py-3 flex items-center gap-3 rounded-md shadow-[0px_5px_10px_rgba(0,0,0,0.1)] border-gray-300 p-2   cursor-pointer "
          onClick={() => {
            setDropdownType("propertyType");
            setShowDropdown(!showDropdown);
          }}
        >
          {selectedPropertyType ? (
            <div className="flex items-center justify-between w-full space-x-2">
              <div className="flex items-center gap-4">
                <span>{selectedPropertyType}</span>
              </div>
              <FaAngleDown color="gray" size={20} />
            </div>
          ) : (
            <span className="text-gray-400 gap-4  flex w-full  justify-between items-center">
              Property Type <FaAngleDown size={20} color="gray" />
            </span>
          )}
        </div>
        {showDropdown && dropdownType === "propertyType" && (
          <div className="bg-white border border-gray-500/55 rounded-lg shadow-lg w-full absolute mt-1 z-10">
            {propertyType.map((type) => (
              <div
                key={type._id}
                className="flex p-2 cursor-pointer hover:bg-gray-100 rounded-lg items-center"
                onClick={() => handleSelect(type, "propertyType")}
              >
                <span className="ml-2">{type.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
