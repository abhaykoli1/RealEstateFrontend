import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../../common/config";

function AllPropertyTypes() {
  const [propertyTypes, setPropertyTypes] = useState([]);
  const navigate = useNavigate();

  //   useEffect(() => {
  //     axios
  //       .get(`${config.API_URL}/api/property-type`)
  //       .then((response) => setPropertyTypes(response.data.data))
  //       .catch((error) =>
  //         alert("Error fetching property types: " + error.message)
  //       );
  //   }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${config.API_URL}/api/property-type/${id}`);
      setPropertyTypes((prev) => prev.filter((item) => item._id !== id));
      alert("Property type deleted successfully!");
    } catch (error) {
      alert(
        "Error deleting property type: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div className="p-6 w-full mx-auto">
      <h2 className="text-xl font-semibold mb-4">All Property Types</h2>
      <button
        onClick={() => navigate("/admin/add-property-type")}
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded-md"
      >
        Add New Property Type
      </button>
      <ul className="space-y-2">
        {propertyTypes.length > 0 ? (
          propertyTypes.map((property) => (
            <li
              key={property._id}
              className="border p-4 rounded-md flex justify-between items-center"
            >
              <div>
                {property.image && (
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-32 h-32 object-cover"
                  />
                )}
                <h3 className="font-bold">{property.title}</h3>
                <p>{property.description}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() =>
                    navigate(`/admin/edit-property-type/${property._id}`)
                  }
                  className="bg-yellow-500 text-white px-3 py-1 rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(property._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>No property types found.</p>
        )}
      </ul>
    </div>
  );
}

export default AllPropertyTypes;
