import axios from "axios";
import React, { useState } from "react";
import config from "../../common/config";
import ImageUploader from "../../common/ImageUpload";

function WhyChooseUs() {
  const [formData, setFormData] = useState({
    description: "",
    small_features: [],
  });

  console.log(formData);

  const handledChange = (e) => {
    setFormData({
      ...formData,
      description: e.target.value,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${config.API_URL}/api/why-chose`, formData);
      alert("Content Added Successfully");
      setFormData({
        description: "",
        small_features: [],
      });
    } catch (error) {
      console.error("Error:", error);
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  const handleUploadImage = (index, uploadedFile) => {
    if (uploadedFile.length > 0) {
      const newFeatures = [...formData.small_features];
      newFeatures[index].image = uploadedFile[0]; // Assuming ImageUploader provides a full URL
      setFormData({ ...formData, small_features: newFeatures });
    }
  };

  return (
    <div className="p-3 w-full mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-gray-700 text-sm block font-medium">
            Description:
          </label>
          <textarea
            value={formData.description}
            onChange={handledChange}
            required
            className="border border-gray-300 rounded-md  w-full block focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1 px-4 py-2"
          />
        </div>

        <div>
          <label className="text-gray-700 text-sm block font-medium">
            Small Features:
          </label>
          {formData.small_features.map((feature, index) => (
            <div key={index} className="mt-4 space-y-2">
              <div>
                <label className="text-gray-700 text-sm block font-medium">
                  Image {index + 1}:
                </label>
                <ImageUploader
                  onUpload={(uploadedFile) =>
                    handleUploadImage(index, uploadedFile)
                  }
                />
              </div>

              <div className="flex items-end gap-5 ">
                {feature.image && (
                  <div className="mt-4">
                    <img
                      src={feature.image}
                      alt="Uploaded"
                      className="w-24 h-24 rounded-md object-cover"
                    />
                  </div>
                )}
                <div className="w-full">
                  {" "}
                  <label className="text-gray-700 text-sm block font-medium">
                    Description {index + 1}:
                  </label>
                  <textarea
                    type="text"
                    value={feature.description}
                    onChange={(e) =>
                      handleFeatureChange(index, "description", e.target.value)
                    }
                    required
                    className="border border-gray-300 rounded-md  w-full block focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1 px-4 py-2"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleRemoveFeature(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove Feature
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddFeature}
            className=" mt-5 rounded-md  text-white w-full  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add New Feature
          </button>
        </div>

        <button
          type="submit"
          className="bg-blue-500 rounded-md  text-white w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold hover:bg-blue-600 px-4 py-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default WhyChooseUs;
