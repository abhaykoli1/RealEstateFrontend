import axios from "axios";
import React, { useState } from "react";
import config from "../../common/config";

function AboutUs() {
  const [formData, setFormData] = useState({
    long_description: "",
    first_dec: "",
    second_dec: "",
    third_dec: "",
    fourth_dec: "",
  });

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
        `${config.API_URL}/api/about-us`,
        formData
      );
      // console.log("Response:", response.data);
      alert("Content Added Successfully");
      setFormData({
        long_description: "",
        first_dec: "",
        second_dec: "",
        third_dec: "",
        fourth_dec: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert(error.response.data.message);
    }
  };

  return (
    <div className="mx-auto w-full p-3">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Long Description Field */}
        <div>
          <label
            htmlFor="long_description"
            className="block text-sm font-medium text-gray-700"
          >
            Long Description:
          </label>
          <textarea
            id="long_description"
            name="long_description"
            value={formData.long_description}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AboutUs;
