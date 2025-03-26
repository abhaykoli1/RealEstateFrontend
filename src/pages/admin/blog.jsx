import axios from "axios";
import React, { useEffect, useState } from "react";
import config from "../../common/config";
import ImageUploader from "../../common/ImageUpload";

function AddBlog() {
  const [formData, setFormData] = useState({
    seo_title: "",
    seo_description: "",
    title: "",
    description: "",
    category_id: "",
  });

  const [blogCategories, setBlogCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/blog-category`)
      .then((response) => setBlogCategories(response.data.data))
      .catch((error) => console.log(error.message));
  }, []);

  console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === "seo_title") {
      updatedValue = value.replace(/\s+/g, "-");
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: updatedValue,
    }));
  };

  const handleUploadImage = (uploadedFile) => {
    setFormData({ ...formData, image: uploadedFile[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post(`${config.API_URL}/api/blog`, formData);
      alert("Blog Added Successfully");
      setFormData({
        seo_title: "",
        seo_description: "",
        title: "",
        description: "",
        category_id: "",
      });
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full p-3">
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-500 text-center">{error}</p>}
        {/* SEO Title Field */}
        <div>
          <label
            htmlFor="seo_title"
            className="block text-sm font-medium text-gray-700"
          >
            SEO Title:
          </label>
          <input
            type="text"
            id="seo_title"
            name="seo_title"
            value={formData.seo_title}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* SEO Description Field */}
        <div>
          <label
            htmlFor="seo_description"
            className="block text-sm font-medium text-gray-700"
          >
            SEO Description:
          </label>
          <textarea
            id="seo_description"
            name="seo_description"
            value={formData.seo_description}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

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
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category ID Field (Dropdown) */}
        <div>
          <label
            htmlFor="category_id"
            className="text-gray-700 text-sm block font-medium mb-1.5"
          >
            Category:
          </label>
          <select
            id="category_id"
            name="category_id"
            value={formData.category_id}
            onChange={handleChange}
            required
            className="border p-2 border-gray-300 py-[9px] rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select Category
            </option>
            {blogCategories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Profile Picture</label>
          <ImageUploader onUpload={handleUploadImage} />
        </div>
        {formData.image && (
          <div className="mt-4">
            <img
              src={formData.image}
              alt="Blog Image"
              className="w-24 h-24 rounded-md object-cover"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Blog"}
        </button>
      </form>
    </div>
  );
}

export default AddBlog;
