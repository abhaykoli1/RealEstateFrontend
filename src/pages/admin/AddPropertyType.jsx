import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../../common/config";

function AddPropertyType() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    // if (image) formData.append("image", image);

    try {
      await axios.post(`${config.API_URL}/api/property-type`, formData);
      alert("Property type added successfully!");
      navigate("/admin/all-property-types");
    } catch (error) {
      alert("Error: " + (error.response?.data?.message || error.message));
    }
  };

  const [propertyType, setPropertyType] = useState([]);

  console.log(propertyType);
  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/property-type`)
      .then((response) => setPropertyType(response.data.data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="p-6 w-full mx-auto">
      <h2 className="text-xl font-semibold mb-4">Add Property Type</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-gray-700 text-sm block font-medium">
            Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="border border-gray-300 rounded-md w-full px-4 py-2"
          />
        </div>
        <div>
          <label className="text-gray-700 text-sm block font-medium">
            Description:
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="border border-gray-300 rounded-md w-full px-4 py-2"
          ></textarea>
        </div>
        {/* <div>
          <label className="text-gray-700 text-sm block font-medium">
            Upload Image:
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="border border-gray-300 rounded-md w-full px-4 py-2"
          />
        </div> */}
        <button
          type="submit"
          className="bg-blue-500 rounded-md text-white w-full px-4 py-2 hover:bg-blue-600"
        >
          Add Property Type
        </button>
      </form>
    </div>
  );
}

export default AddPropertyType;
