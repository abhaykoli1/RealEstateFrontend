import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../common/config";
import ImageUploader from "../../common/ImageUpload";
import { FaTrash } from "react-icons/fa";

function EditTestimonial() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    last_villa: "",
    image: null,
    profession: "",
    name: "",
    description: "",
  });

  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/testimonial/${id}`)
      .then((response) => {
        const { last_villa, image, profession, name, description } =
          response.data.data;
        setFormData({
          last_villa,
          image,
          profession,
          name,
          description,
        });
      })
      .catch((error) => alert("Error fetching testimonial: " + error.message));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUploadImage = (uploadedFile) => {
    setFormData({ ...formData, image: uploadedFile[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${config.API_URL}/api/testimonial/${id}`, formData);
      alert("Testimonial Updated Successfully!");
      navigate("/admin/all-testimonials");
    } catch (error) {
      console.error("Error:", error);
      alert(error.response?.data?.message || "Failed to update testimonial.");
    }
  };

  return (
    <div className="mx-auto w-full p-3">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Last Villa */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Villa:
          </label>
          <input
            type="text"
            name="last_villa"
            value={formData.last_villa}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Profession */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Profession:
          </label>
          <input
            type="text"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description:
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Image Upload */}
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
              className="px-5 flex items-center border border-gray-300 rounded-lg cursor-pointer"
              onClick={() => setFormData({ ...formData, image: null })}
            >
              <FaTrash size={20} />
            </div>
          </div>

          {formData.image && (
            <div className="mt-4">
              <img
                src={formData.image}
                alt="Testimonial"
                className="w-24 h-24 rounded-md object-cover"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
        >
          Update Testimonial
        </button>
      </form>
    </div>
  );
}

export default EditTestimonial;
