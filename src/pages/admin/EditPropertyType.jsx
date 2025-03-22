import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../common/config";

function EditPropertyType() {
  const { id } = useParams();

  console.log(id);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState(null);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/property-type/${id}`)
      .then((response) => {
        console.log(response);

        const { title, description, image } = response.data.data;
        setTitle(title);
        setDescription(description);
        setExistingImage(image);
      })
      .catch((error) =>
        alert("Error fetching property type: " + error.message)
      );
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) formData.append("image", image); // Append new image if uploaded

    try {
      await axios.put(`${config.API_URL}/api/property-type/${id}`, formData);
      alert("Property type updated successfully!");
      navigate("/admin/all-property-types");
    } catch (error) {
      alert("Error: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="p-6 w-full mx-auto">
      <h2 className="text-xl font-semibold mb-4">Edit Property Type</h2>
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

        <div>
          <label className="text-gray-700 text-sm block font-medium">
            Current Image:
          </label>
          {existingImage && (
            <img
              src={existingImage}
              alt="Property Type"
              className="w-32 h-32 object-cover mt-2"
            />
          )}
        </div>

        <div>
          <label className="text-gray-700 text-sm block font-medium">
            Upload New Image (optional):
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="border border-gray-300 rounded-md w-full px-4 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 rounded-md text-white w-full px-4 py-2 hover:bg-blue-600"
        >
          Update Property Type
        </button>
      </form>
    </div>
  );
}

export default EditPropertyType;
