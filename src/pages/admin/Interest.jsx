import React, { useState } from "react";
import ImageUploader from "../../common/ImageUpload";
import config from "../../common/config";
import axios from "axios";

function Interests() {
  const [formData, setFormData] = useState({
    title: "",
    image: null,
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
        `${config.API_URL}/api/intrest`,
        formData
      );
      alert("Interest Added Successfully");
      setFormData({
        title: "",
        image: null,
      });
    } catch (error) {
      console.error("Error:", error);
      alert(error.response.data.message);
    }
  };

  return (
    <div className=" mx-auto w-full p-3 ">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Field */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Image Upload Field */}

        <div>
          <label htmlFor="image" className="block text-sm font-medium">
            Testimonial Image:
          </label>
          <ImageUploader onUpload={handleUploadImage} />
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Interests;
