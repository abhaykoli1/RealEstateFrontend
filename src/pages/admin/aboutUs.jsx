import axios from "axios";
import React, { useState, useEffect } from "react";
import config from "../../common/config";

function AboutUs() {
  const [formData, setFormData] = useState({
    long_description: "",
    first_dec: "",
    second_dec: "",
    third_dec: "",
    fourth_dec: "",
  });

  const [aboutUsId, setAboutUsId] = useState(null); // Store the ID for updating

  // Fetch existing About Us data
  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/api/about-us`);
        if (response.data && response.data.data) {
          setFormData(response.data.data);
          setAboutUsId(response.data.data._id); // Store ID for update
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchAboutUs();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (Add or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (aboutUsId) {
        // Update existing entry
        response = await axios.put(
          `${config.API_URL}/api/about-us/${aboutUsId}`,
          formData
        );
        alert("Content Updated Successfully");
      } else {
        // Create new entry
        response = await axios.post(`${config.API_URL}/api/about-us`, formData);
        alert("Content Added Successfully");
        setAboutUsId(response.data.data._id); // Store new ID
      }
    } catch (error) {
      console.error("Error:", error);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="mx-auto w-full p-3">
      <h2 className="text-xl font-bold mb-4">
        {aboutUsId ? "Edit About Us" : "Add About Us"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Long Description Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Long Description:
          </label>
          <textarea
            name="long_description"
            value={formData.long_description}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* First Description Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Description:
          </label>
          <textarea
            name="first_dec"
            value={formData.first_dec}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Second Description Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Second Description:
          </label>
          <textarea
            name="second_dec"
            value={formData.second_dec}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Third Description Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Third Description:
          </label>
          <textarea
            name="third_dec"
            value={formData.third_dec}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Fourth Description Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Fourth Description:
          </label>
          <textarea
            name="fourth_dec"
            value={formData.fourth_dec}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {aboutUsId ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default AboutUs;
