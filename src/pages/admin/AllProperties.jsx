import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../../common/config";
import { FaEdit, FaTrash } from "react-icons/fa";

function AllProperties() {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/property`)
      .then((response) => setProperties(response.data.data))
      .catch((error) =>
        console.log("Error fetching properties: " + error.message)
      );
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${config.API_URL}/api/property/${id}`);
      setProperties((prev) => prev.filter((item) => item._id !== id));
      alert("Property deleted successfully!");
    } catch (error) {
      alert(
        "Error deleting property: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div className="p-3 w-full mx-auto">
      <button
        onClick={() => navigate("/admin/add-property")}
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded-md"
      >
        Add New Property
      </button>

      <div className="min-h-screen">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Location</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-2 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.length > 0 ? (
              properties.map((property) => (
                <tr key={property._id} className="border">
                  <td className="border px-4 py-2 font-bold">
                    {property.title}
                  </td>
                  <td className="border px-4 py-2">{property.location}</td>
                  <td className="border px-4 py-2">AED {property.price}</td>
                  <td className="px-4 h-full py-3 justify-center gap-5 font-bold flex">
                    <FaEdit
                      className="cursor-pointer"
                      onClick={() =>
                        navigate(`/admin/edit-property/${property._id}`)
                      }
                    />
                    <FaTrash
                      className="cursor-pointer"
                      onClick={() => handleDelete(property._id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No properties found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllProperties;
