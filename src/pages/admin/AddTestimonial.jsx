import React, { useState } from "react";
import config from "../../common/config";
import axios from "axios";
import ImageUploader from "../../common/ImageUpload";
import { FaTrash } from "react-icons/fa";

function Testimonial() {
  const [formData, setFormData] = useState({
    last_villa: "",
    image: null,
    profession: "",
    name: "",
    description: "",
  });

  const handleUploadImage = (uploadedFile) => {
    setFormData({ ...formData, image: uploadedFile[0] });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${config.API_URL}/api/testimonial`,
        formData
      );
      alert("Testimonial Added Successfully");
      setFormData({
        name: "",
        last_villa: "",
        image: null,
        profession: "",
        description: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert(error.response.data.message);
    }
  };

  return (
    <div className="mx-auto w-full p-3">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Last Villa Field */}
        <div>
          <label
            htmlFor="last_villa"
            className="block text-sm font-medium text-gray-700"
          >
            Last Villa:
          </label>
          <input
            type="text"
            id="last_villa"
            name="last_villa"
            value={formData.last_villa}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Profession Field */}
        <div>
          <label
            htmlFor="profession"
            className="block text-sm font-medium text-gray-700"
          >
            Profession:
          </label>
          <input
            type="text"
            id="profession"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description Field */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Image Upload Field */}

        <div>
          <label className="block text-sm font-medium">
            Testimonial Image:
          </label>
          <div className="flex gap-4">
            <div className="w-full">
              <ImageUploader onUpload={handleUploadImage} />
            </div>

            {/* Delete Button */}
            <div
              className="px-5 flex items-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  image: null, // Instead of [], set to null to match data type
                }))
              }
            >
              <FaTrash size={20} />
            </div>
          </div>
          {formData.image && (
            <div className="mt-4">
              <img
                src={formData.image}
                alt="Testimonial Image"
                className="w-24 h-24 rounded-md object-cover"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Testimonial
        </button>
      </form>
    </div>
  );
}

export default Testimonial;
