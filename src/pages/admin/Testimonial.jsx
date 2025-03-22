import React, { useState } from "react";

function Testimonial() {
  const [formData, setFormData] = useState({
    last_villa: "",
    image: null,
    profession: "",
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { last_villa, image, profession, name, description } = formData;

    // FormData to handle file uploads
    const formDataToSend = new FormData();
    formDataToSend.append("last_villa", last_villa);
    formDataToSend.append("image", image);
    formDataToSend.append("profession", profession);
    formDataToSend.append("name", name);
    formDataToSend.append("description", description);

    // Example of sending the form data to the server (adjust the URL to your backend)
    fetch("/submit-testimonial", {
      method: "POST",
      body: formDataToSend,
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
      <h1 className="!text-3xl font-bold mb-4 text-center">Testimonial</h1>
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
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Image Upload Field */}
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            required
            className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:rounded-md file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit Testimonial
        </button>
      </form>
    </div>
  );
}

export default Testimonial;
