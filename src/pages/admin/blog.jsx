import React, { useState } from "react";

function AddBlog() {
  const [formData, setFormData] = useState({
    seo_Title: "",
    seo_Description: "",
    title: "",
    Description: "",
    category_id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { seo_Title, seo_Description, title, Description, category_id } =
      formData;

    // Example of sending the form data to the server (adjust the URL to your backend)
    fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        seo_Title,
        seo_Description,
        title,
        Description,
        category_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="mx-auto w-full p-6">
      <h1 className="!text-3xl font-bold mb-4 text-center">Add Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* SEO Title Field */}
        <div>
          <label
            htmlFor="seo_Title"
            className="block text-sm font-medium text-gray-700"
          >
            SEO Title:
          </label>
          <input
            type="text"
            id="seo_Title"
            name="seo_Title"
            value={formData.seo_Title}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* SEO Description Field */}
        <div>
          <label
            htmlFor="seo_Description"
            className="block text-sm font-medium text-gray-700"
          >
            SEO Description:
          </label>
          <textarea
            id="seo_Description"
            name="seo_Description"
            value={formData.seo_Description}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description Field */}
        <div>
          <label
            htmlFor="Description"
            className="block text-sm font-medium text-gray-700"
          >
            Description:
          </label>
          <textarea
            id="Description"
            name="Description"
            value={formData.Description}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category ID Field (Dropdown) */}
        <div>
          <label
            htmlFor="category_id"
            className="block text-sm font-medium text-gray-700"
          >
            Category:
          </label>
          <select
            id="category_id"
            name="category_id"
            value={formData.category_id}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="1">Category 1</option>
            <option value="2">Category 2</option>
            <option value="3">Category 3</option>
            {/* Add more categories as needed */}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
}

export default AddBlog;
