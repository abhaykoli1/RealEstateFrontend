import React, { useState } from "react";

function AboutUs() {
  const [formData, setFormData] = useState({
    Long_Description: "",
    first_dec: "",
    second_dec: "",
    third_dec: "",
    fourth_dec: "",
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

    const { Long_Description, first_dec, second_dec, third_dec, fourth_dec } =
      formData;

    // Example of sending the form data to the server (adjust the URL to your backend)
    fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Long_Description,
        first_dec,
        second_dec,
        third_dec,
        fourth_dec,
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
      <h1 className="!text-3xl font-bold mb-4 text-center">About Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Long Description Field */}
        <div>
          <label
            htmlFor="Long_Description"
            className="block text-sm font-medium text-gray-700"
          >
            Long Description:
          </label>
          <textarea
            id="Long_Description"
            name="Long_Description"
            value={formData.Long_Description}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* First Description Field */}
        <div>
          <label
            htmlFor="first_dec"
            className="block text-sm font-medium text-gray-700"
          >
            First Description:
          </label>
          <textarea
            id="first_dec"
            name="first_dec"
            value={formData.first_dec}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Second Description Field */}
        <div>
          <label
            htmlFor="second_dec"
            className="block text-sm font-medium text-gray-700"
          >
            Second Description:
          </label>
          <textarea
            id="second_dec"
            name="second_dec"
            value={formData.second_dec}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Third Description Field */}
        <div>
          <label
            htmlFor="third_dec"
            className="block text-sm font-medium text-gray-700"
          >
            Third Description:
          </label>
          <textarea
            id="third_dec"
            name="third_dec"
            value={formData.third_dec}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Fourth Description Field */}
        <div>
          <label
            htmlFor="fourth_dec"
            className="block text-sm font-medium text-gray-700"
          >
            Fourth Description:
          </label>
          <textarea
            id="fourth_dec"
            name="fourth_dec"
            value={formData.fourth_dec}
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
          Submit
        </button>
      </form>
    </div>
  );
}

export default AboutUs;
