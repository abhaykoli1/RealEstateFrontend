import React, { useState } from "react";

function Interests() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    // Example of sending the form data to the server (adjust the URL to your backend)
    fetch("/submit", {
      method: "POST",
      body: formData,
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
    <div className=" mx-auto w-full p-6 ">
      <h1 className="!text-3xl font-bold mb-4 text">Interest Options</h1>
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
            value={title}
            onChange={handleTitleChange}
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
            onChange={handleImageChange}
            accept="image/*"
            required
            className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:rounded-md file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

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
