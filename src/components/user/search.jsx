// import { useState, useEffect } from "react";
// import axios from "axios";
// import config from "../../common/config";
// // import { GoChevronDown } from "react-icons/fa";
// import { GoChevronDown } from "react-icons/go";

// export default function PropertySearch({
//   setShowDropdown,
//   setProperties,
//   setActiveTab,
//   showDropdown,
//   properties,
//   activeTab,
//   map,
// }) {
//   const [filters, setFilters] = useState({
//     property_type: "",
//     property_status: "",
//     comerical: null,
//     beds: "",
//     price: "",
//     location: "",
//   });

//   //   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedPropertyType, setSelectedPropertyType] = useState(null);
//   const [selectedPropertyStatus, setSelectedPropertyStatus] = useState(null);
//   const [selectedBeds, setSelectedBeds] = useState(null);
//   const [selectedPrice, setSelectedPrice] = useState(null);
//   const [selectedLocation, setSelectedLocation] = useState(null);
//   const [dropdownType, setDropdownType] = useState(null);
//   const [propertyStatus, setPropertyStatus] = useState([]);
//   const [propertyType, setPropertyType] = useState([]);

//   console.log("searched Properties", properties);

//   useEffect(() => {
//     axios
//       .get(`${config.API_URL}/api/property-type`)
//       .then((response) => setPropertyType(response.data.data))
//       .catch((error) => console.log(error.message));
//   }, []);

//   useEffect(() => {
//     axios
//       .get(`${config.API_URL}/api/property-status`)
//       .then((response) => setPropertyStatus(response.data.data))
//       .catch((error) => console.log(error.message));
//   }, []);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(
//           `${config.API_URL}/api/property/filters`,
//           { params: filters }
//         );
//         console.log("Filter Respoces =====", response.data.properties);
//         setProperties(response.data.properties); // Update properties
//       } catch (error) {
//         console.log(error);
//       }
//       setLoading(false);
//     };

//     fetchProperties();
//   }, [filters]);

//   const beds = [
//     { _id: "1", title: "1 Bed" },
//     { _id: "2", title: "2 Beds" },
//     { _id: "3", title: "3 Beds" },
//     { _id: "4", title: "4+ Beds" },
//   ];

//   const location = [
//     { _id: "1", location: "Dubai" },
//     { _id: "2", location: "Dubas" },
//     { _id: "3", location: "Dubai" },
//     { _id: "4", location: "Dubai" },
//   ];

//   const price = [
//     { _id: "1", from: "1 M", to: "4 M" },
//     { _id: "2", from: "4 M", to: "8 M" },
//     { _id: "3", from: "8 M", to: "12 M" },
//     { _id: "4", from: "12 M", to: "16 M" },
//   ];

//   //   console.log(properties.data.properties);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFilters({
//       ...filters,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSelect = (type, typeCategory) => {
//     if (typeCategory === "propertyType") {
//       setFilters({ ...filters, property_type: type._id });
//       setSelectedPropertyType(type.title);
//     } else if (typeCategory === "propertyStatus") {
//       setFilters({ ...filters, property_status: type._id });
//       setSelectedPropertyStatus(type.title);
//     } else if (typeCategory === "beds") {
//       console.log("Bedds", type);
//       setFilters({ ...filters, beds: type.title });
//       setSelectedBeds(type.title);
//     } else if (typeCategory === "price") {
//       setFilters({ ...filters, price: type._id });
//       setSelectedPrice([type.from, " - ", type.to]);
//     } else if (typeCategory === "location") {
//       setFilters((prevFilters) => ({ ...prevFilters, location: type._id }));
//       setSelectedLocation(type.location);
//       setShowDropdown(false);
//     }

//     setShowDropdown(false);
//   };

//   console.log(filters);

//   return (
//     <section>
//       <div className=" gap-3 flex flex-wrap relative lg:px-5">
//         <div
//           className={`${
//             filters.comerical === null ? "" : ""
//           } border border-gray-100 px-5 py-3 flex items-center gap-3 rounded-md shadow-[0px_5px_10px_rgba(0,0,0,0.1)]  p-2   cursor-pointer `}
//         >
//           <input
//             type="checkbox"
//             id="comerical"
//             name="comerical"
//             checked={filters.comerical}
//             onChange={handleChange}
//             className="w-4 h-4"
//           />
//           <label
//             htmlFor="comerical"
//             className="text-sm text-black cursor-pointer"
//           >
//             Comercial
//           </label>
//         </div>
//         {/* Beds */}
//         <div
//           className="bg-white gap-3 border border-gray-100 pl-5 py-3 flex items-center  rounded-md shadow-[0px_5px_10px_rgba(0,0,0,0.1)]  p-2   cursor-pointer "
//           onClick={() => {
//             setDropdownType("beds");
//             setShowDropdown(!showDropdown);
//           }}
//         >
//           {selectedBeds ? (
//             <div className="flex items-center justify-between w-full space-x-2">
//               <div className="flex items-center gap-4">
//                 <span>{selectedBeds}</span>
//               </div>
//               <GoChevronDown color="gray" size={23} />
//             </div>
//           ) : (
//             <span className="text-black flex gap-4 w-full  justify-between items-center">
//               Beds <GoChevronDown size={23} color="gray" />
//             </span>
//           )}
//         </div>

//         {showDropdown && dropdownType === "beds" && (
//           <div className="bg-white border border-gray-500/55 rounded-lg shadow-lg w-full absolute mt-1 z-10">
//             {beds.map((bed) => (
//               <div
//                 key={bed._id}
//                 className="flex p-2 cursor-pointer hover:bg-gray-100 rounded-lg items-center"
//                 onClick={() => handleSelect(bed, "beds")}
//               >
//                 <span className="ml-2">{bed.title}</span>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Location */}
//         <div
//           className="bg-white pl-5 py-3 flex items-center gap-3 rounded-md shadow-[0px_5px_10px_rgba(0,0,0,0.1)] border border-gray-100 p-2   cursor-pointer "
//           onClick={() => {
//             setDropdownType("location");
//             setShowDropdown(!showDropdown);
//           }}
//         >
//           {selectedLocation ? (
//             <div className="flex items-center justify-between w-full space-x-2">
//               <div className="flex items-center gap-4">
//                 <span>{selectedLocation}</span>
//               </div>
//               <GoChevronDown color="gray" size={23} />
//             </div>
//           ) : (
//             <span className="text-black gap-4  flex w-full  justify-between items-center">
//               Location <GoChevronDown size={23} color="gray" />
//             </span>
//           )}
//         </div>
//         {showDropdown && dropdownType === "location" && (
//           <div className="bg-white border border-gray-500/55 rounded-lg shadow-lg w-full absolute mt-1 z-10">
//             {location?.length > 0 &&
//               location.map((item) => (
//                 <div
//                   key={item._id}
//                   className="flex p-2 cursor-pointer hover:bg-gray-100 rounded-lg items-center"
//                   onClick={() => handleSelect(item, "location")}
//                 >
//                   <span className="ml-2">{item.location}</span>
//                 </div>
//               ))}
//           </div>
//         )}

//         {/* Price Range */}
//         <div
//           className="bg-white  relative pl-5 py-3 flex items-center gap-3 rounded-md shadow-[0px_5px_10px_rgba(0,0,0,0.1)] border border-gray-100 p-2   cursor-pointer "
//           onClick={() => {
//             setDropdownType("price");
//             setShowDropdown(!showDropdown);
//           }}
//         >
//           {selectedPrice ? (
//             <div className="flex   w-40 items-center justify-between space-x-2">
//               <div className="flex items-center gap-4">
//                 <span>{selectedPrice}</span>
//               </div>
//               <GoChevronDown color="gray" size={23} />
//             </div>
//           ) : (
//             <span className="text-black gap-4  flex w-full  justify-between items-center">
//               Price Range <GoChevronDown size={23} color="gray" />
//             </span>
//           )}
//         </div>
//         {showDropdown && dropdownType === "price" && (
//           <div className="bg-white border border-gray-500/55 rounded-lg shadow-lg w-full absolute mt-1 z-10">
//             {price.map((item) => (
//               <div
//                 key={item._id}
//                 className="flex p-2 cursor-pointer hover:bg-gray-100 rounded-lg items-center"
//                 onClick={() => handleSelect(item, "price")}
//               >
//                 <span className="ml-2">
//                   {item.from} - {item.to}
//                 </span>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Property Status */}
//         <div
//           className="bg-white pl-5 py-3 flex items-center gap-3 rounded-md shadow-[0px_5px_10px_rgba(0,0,0,0.1)] border border-gray-100 p-2  cursor-pointer "
//           onClick={() => {
//             setDropdownType("propertyStatus");
//             setShowDropdown(!showDropdown);
//           }}
//         >
//           {selectedPropertyStatus ? (
//             <div className="flex items-center justify-between w-full space-x-2">
//               <div className="flex items-center gap-4">
//                 <span>{selectedPropertyStatus}</span>
//               </div>
//               <GoChevronDown color="gray" size={23} />
//             </div>
//           ) : (
//             <span className="text-black gap-4  flex w-full  justify-between items-center">
//               Property Status <GoChevronDown size={23} color="gray" />
//             </span>
//           )}
//         </div>

//         {showDropdown && dropdownType === "propertyStatus" && (
//           <div className="bg-white border border-gray-500/55 rounded-lg shadow-lg w-full absolute mt-1 z-10">
//             {propertyStatus.map((status) => (
//               <div
//                 key={status._id}
//                 className="flex p-2 cursor-pointer hover:bg-gray-100 rounded-lg items-center"
//                 onClick={() => handleSelect(status, "propertyStatus")}
//               >
//                 <span className="ml-2">{status.title}</span>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Property Type */}
//         <div
//           className="bg-white pl-5 py-3 flex items-center gap-3 rounded-md shadow-[0px_5px_10px_rgba(0,0,0,0.1)] border border-gray-100 p-2   cursor-pointer "
//           onClick={() => {
//             setDropdownType("propertyType");
//             setShowDropdown(!showDropdown);
//           }}
//         >
//           {selectedPropertyType ? (
//             <div className="flex items-center justify-between w-full space-x-2">
//               <div className="flex items-center gap-4">
//                 <span>{selectedPropertyType}</span>
//               </div>
//               <GoChevronDown color="gray" size={23} />
//             </div>
//           ) : (
//             <span className="text-black gap-4  flex w-full  justify-between items-center">
//               Property Type <GoChevronDown size={23} color="gray" />
//             </span>
//           )}
//         </div>
//         {showDropdown && dropdownType === "propertyType" && (
//           <div className="bg-white border border-gray-500/55 rounded-lg shadow-lg w-full absolute mt-1 z-10">
//             {propertyType.map((type) => (
//               <div
//                 key={type._id}
//                 className="flex p-2 cursor-pointer hover:bg-gray-100 rounded-lg items-center"
//                 onClick={() => handleSelect(type, "propertyType")}
//               >
//                 <span className="ml-2">{type.title}</span>
//               </div>
//             ))}
//           </div>
//         )}
//         <div
//           className={`${
//             map ? "flex" : "hidden"
//           }  bg-white shadow-[0px_5px_10px_rgba(0,0,0,0.1)] border border-gray-100 rounded-md`}
//         >
//           <a
//             className={`px-7 py-3 text-[16px]  flex items-center gap-3 transition-all cursor-pointer shadow-[0px_5px_10px_rgba(0,0,0,0.1)] rounded-l-md  ${
//               activeTab === "map"
//                 ? "bg-[#204A7A] !text-white"
//                 : "bg-white text-black"
//             }`}
//             onClick={() => setActiveTab("map")}
//           >
//             Map
//           </a>
//           <a
//             className={`px-7 py-3 text-[16px]  flex items-center gap-3 transition-all cursor-pointer rounded-r-md shadow-[0px_5px_10px_rgba(0,0,0,0.1)] ${
//               activeTab === "list"
//                 ? "bg-[#204A7A] !text-white"
//                 : "bg-white text-black"
//             }`}
//             onClick={() => setActiveTab("list")}
//           >
//             List
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useEffect } from "react";
import axios from "axios";
import { GoChevronDown } from "react-icons/go";
import config from "../../common/config";

export default function PropertySearch({
  setShowDropdown,
  setActiveTab,
  showDropdown,
  setProperties,
  properties = [], // Ensure properties is always an array
  activeTab,
  setUpdatedProperties,
  map,
}) {
  const [filters, setFilters] = useState({
    property_type: "",
    property_status: "",
    comerical: null,
    beds: "",
    price: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

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

  const [selectedPropertyType, setSelectedPropertyType] = useState(null);
  const [selectedPropertyStatus, setSelectedPropertyStatus] = useState(null);
  const [selectedBeds, setSelectedBeds] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [dropdownType, setDropdownType] = useState(null);
  const [propertyStatus, setPropertyStatus] = useState([]);
  const [propertyType, setPropertyType] = useState([]);
  const [location, setLocations] = useState([]);

  useEffect(() => {
    if (properties.length > 0) {
      const uniqueLocations = [
        ...new Map(
          properties.map((property) => [
            property.location,
            { _id: property._id, location: property.location },
          ])
        ).values(),
      ];

      setLocations(uniqueLocations);
    }
  }, [properties]);

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

  useEffect(() => {
    console.log("Properties before filtering:", properties);
    console.log("Filters applied:", filters);

    if (!Array.isArray(properties)) {
      console.error("Properties is not an array:", properties);
      return;
    }

    const filteredProperties = properties.filter((property) => {
      return (
        (!filters.beds || property.beds === filters.beds) &&
        (!filters.property_type ||
          property.property_type.title === filters.property_type) &&
        (!filters.property_status ||
          property.property_status === filters.property_status.title) &&
        (!filters.price || property.price === filters.price) &&
        (!filters.location || property.location === filters.location) &&
        (filters.comerical === null || property.comerical === filters.comerical)
      );
    });

    console.log("Filtered properties:", filteredProperties);

    setUpdatedProperties(filteredProperties);
  }, [filters, properties]);

  const handleSelect = (type, typeCategory) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (typeCategory === "propertyType") {
        console.log("typeCategory", type);
        updatedFilters.property_type = type.title;
        setSelectedPropertyType(type.title);
      } else if (typeCategory === "propertyStatus") {
        updatedFilters.property_status = type.title;
        setSelectedPropertyStatus(type.title);
      } else if (typeCategory === "beds") {
        updatedFilters.beds = type._id;
        setSelectedBeds(type.title);
      } else if (typeCategory === "price") {
        updatedFilters.price = type._id;
        setSelectedPrice([type.from, " - ", type.to]);
      } else if (typeCategory === "location") {
        updatedFilters.location = type.location;
        setSelectedLocation(type.location);
      }

      return updatedFilters;
    });

    setShowDropdown(false);
  };

  return (
    <section>
      <div className=" gap-3 flex flex-wrap relative lg:px-5">
        <div
          className={`${
            filters.comerical === null ? "" : ""
          } border border-gray-100 px-5 py-3 flex items-center gap-3 rounded-md shadow-[0px_5px_10px_rgba(0,0,0,0.1)]  p-2   cursor-pointer `}
        >
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
          className="bg-white gap-3 border border-gray-100 pl-5 py-3 flex items-center  rounded-md shadow-[0px_5px_10px_rgba(0,0,0,0.1)]  p-2   cursor-pointer "
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
              <GoChevronDown color="gray" size={23} />
            </div>
          ) : (
            <span className="text-black flex gap-4 w-full  justify-between items-center">
              Beds <GoChevronDown size={23} color="gray" />
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
          className="bg-white pl-5 py-3 flex items-center gap-3 rounded-md shadow-[0px_5px_10px_rgba(0,0,0,0.1)] border border-gray-100 p-2   cursor-pointer "
          onClick={() => {
            setDropdownType("location");
            setShowDropdown(!showDropdown);
          }}
        >
          {selectedLocation ? (
            <div className="flex items-center justify-between w-full space-x-2">
              <div className="flex items-center gap-4">
                <span>{selectedLocation}</span>
              </div>
              <GoChevronDown color="gray" size={23} />
            </div>
          ) : (
            <span className="text-black gap-4  flex w-full  justify-between items-center">
              Location <GoChevronDown size={23} color="gray" />
            </span>
          )}
        </div>
        {showDropdown && dropdownType === "location" && (
          <div className="bg-white border border-gray-500/55 rounded-lg shadow-lg w-full absolute mt-1 z-10">
            {location?.length > 0 &&
              location.map((item) => (
                <div
                  key={item._id}
                  className="flex p-2 cursor-pointer hover:bg-gray-100 rounded-lg items-center"
                  onClick={() => handleSelect(item, "location")}
                >
                  <span className="ml-2">{item.location}</span>
                </div>
              ))}
          </div>
        )}

        {/* Price Range */}
        <div
          className="bg-white  relative pl-5 py-3 flex items-center gap-3 rounded-md shadow-[0px_5px_10px_rgba(0,0,0,0.1)] border border-gray-100 p-2   cursor-pointer "
          onClick={() => {
            setDropdownType("price");
            setShowDropdown(!showDropdown);
          }}
        >
          {selectedPrice ? (
            <div className="flex   w-40 items-center justify-between space-x-2">
              <div className="flex items-center gap-4">
                <span>{selectedPrice}</span>
              </div>
              <GoChevronDown color="gray" size={23} />
            </div>
          ) : (
            <span className="text-black gap-4  flex w-full  justify-between items-center">
              Price Range <GoChevronDown size={23} color="gray" />
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
          className="bg-white pl-5 py-3 flex items-center gap-3 rounded-md shadow-[0px_5px_10px_rgba(0,0,0,0.1)] border border-gray-100 p-2  cursor-pointer "
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
              <GoChevronDown color="gray" size={23} />
            </div>
          ) : (
            <span className="text-black gap-4  flex w-full  justify-between items-center">
              Property Status <GoChevronDown size={23} color="gray" />
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
          className="bg-white pl-5 py-3 flex items-center gap-3 rounded-md shadow-[0px_5px_10px_rgba(0,0,0,0.1)] border border-gray-100 p-2   cursor-pointer "
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
              <GoChevronDown color="gray" size={23} />
            </div>
          ) : (
            <span className="text-black gap-4  flex w-full  justify-between items-center">
              Property Type <GoChevronDown size={23} color="gray" />
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
        <div
          className={`${
            map ? "flex" : "hidden"
          }  bg-white shadow-[0px_5px_10px_rgba(0,0,0,0.1)] border border-gray-100 rounded-md`}
        >
          <a
            className={`px-7 py-3 text-[16px]  flex items-center gap-3 transition-all cursor-pointer shadow-[0px_5px_10px_rgba(0,0,0,0.1)] rounded-l-md  ${
              activeTab === "map"
                ? "bg-[#204A7A] !text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setActiveTab("map")}
          >
            Map
          </a>
          <a
            className={`px-7 py-3 text-[16px]  flex items-center gap-3 transition-all cursor-pointer rounded-r-md shadow-[0px_5px_10px_rgba(0,0,0,0.1)] ${
              activeTab === "list"
                ? "bg-[#204A7A] !text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setActiveTab("list")}
          >
            List
          </a>
        </div>
      </div>
    </section>
  );
}
