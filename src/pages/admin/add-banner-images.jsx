import axios from "axios";
import React, { useState } from "react";
import ImageUploader from "../../common/ImageUpload";
import config from "../../common/config";

function AddBanner() {
  const [formData, setFormData] = useState({ images: [] });

  console.log(formData);

  const handleUploadImage = (uploadedFiles) => {
    if (uploadedFiles.length > 0) {
      setFormData((prevFormData) => ({
        images: [...prevFormData.images, ...uploadedFiles],
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.images.length === 0) {
      alert("Please upload at least one image.");
      return;
    }

    try {
      const response = await axios.post(`${config.API_URL}/api/banner`, {
        images: formData.images,
        status: true,
      });
      alert("Banner Added Successfully!");
      setFormData({ images: [] });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-3 w-full mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className=" text-sm block font-medium mb-2">
            Banner Images:
          </label>
          <ImageUploader onUpload={handleUploadImage} multiple={true} />
          <div className="mt-4 space-y-2 flex gap-4">
            {formData.images.map((image, index) => (
              <div key={index} className="flex items-center gap-5">
                <img
                  src={image}
                  alt={`Uploaded ${index + 1}`}
                  className="w-24 h-24 rounded-md  object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 rounded-md text-white w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold hover:bg-blue-600 px-4 py-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddBanner;
