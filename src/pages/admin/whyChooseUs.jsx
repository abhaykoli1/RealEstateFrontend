import React, { useState } from "react";

function WhyChooseUs() {
  const [formData, setFormData] = useState({
    Description: "",
    small_features: [],
  });

  const handleDescriptionChange = (e) => {
    setFormData({
      ...formData,
      Description: e.target.value,
    });
  };

  const handleFeatureChange = (index, field, value) => {
    const newFeatures = [...formData.small_features];
    newFeatures[index][field] = value;
    setFormData({
      ...formData,
      small_features: newFeatures,
    });
  };

  const handleAddFeature = () => {
    setFormData({
      ...formData,
      small_features: [
        ...formData.small_features,
        { image: "", description: "" },
      ],
    });
  };

  const handleRemoveFeature = (index) => {
    const newFeatures = formData.small_features.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      small_features: newFeatures,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { Description, small_features } = formData;

    // Example of sending the form data to the server (adjust the URL to your backend)
    fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Description, small_features }),
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
    <div className="p-6 w-full mx-auto">
      <h1 className="text-center !text-3xl font-bold mb-4">Why Choose Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Description Field */}
        <div>
          <label
            htmlFor="Description"
            className="text-gray-700 text-sm block font-medium"
          >
            Description:
          </label>
          <textarea
            id="Description"
            value={formData.Description}
            onChange={handleDescriptionChange}
            required
            className="border border-gray-300 rounded-md shadow-sm w-full block focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1 px-4 py-2"
          />
        </div>

        {/* Small Features Field */}
        <div>
          <label className="text-gray-700 text-sm block font-medium">
            Small Features:
          </label>
          {formData.small_features.map((feature, index) => (
            <div key={index} className="mt-4 space-y-2">
              {/* Image Field */}
              <div>
                <label
                  htmlFor={`image-${index}`}
                  className="text-gray-700 text-sm block font-medium"
                >
                  Image {index + 1}:
                </label>
                <input
                  type="file"
                  id={`image-${index}`}
                  onChange={(e) =>
                    handleFeatureChange(
                      index,
                      "image",
                      URL.createObjectURL(e.target.files[0])
                    )
                  }
                  className="text-gray-500 text-sm w-full block file:bg-blue-50 file:border file:font-semibold file:px-4 file:py-2 file:rounded-md file:text-blue-700 file:text-sm mt-1"
                />
              </div>

              {/* Description Field for Small Feature */}
              <div>
                <label
                  htmlFor={`description-${index}`}
                  className="text-gray-700 text-sm block font-medium"
                >
                  Description {index + 1}:
                </label>
                <input
                  type="text"
                  id={`description-${index}`}
                  value={feature.description}
                  onChange={(e) =>
                    handleFeatureChange(index, "description", e.target.value)
                  }
                  required
                  className="border border-gray-300 rounded-md shadow-sm w-full block focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1 px-4 py-2"
                />
              </div>

              {/* Remove Button */}
              <button
                type="button"
                onClick={() => handleRemoveFeature(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove Feature
              </button>
            </div>
          ))}

          {/* Add New Feature Button */}
          <button
            type="button"
            onClick={handleAddFeature}
            className="bg-green-500 rounded-md shadow-sm text-white w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 font-semibold hover:bg-green-600 px-4 py-2"
          >
            Add New Feature
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 rounded-md shadow-sm text-white w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold hover:bg-blue-600 px-4 py-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default WhyChooseUs;
