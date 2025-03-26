import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../common/config";
import ImageUploader from "../../common/ImageUpload";

const AddServices = () => {
  const [formData, setFormData] = useState({
    title: "",
    shortDesc: "",
    image: null,
  });

  console.log(formData);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const submitData = new FormData();
    submitData.append("title", formData.title);
    submitData.append("short_desc", formData.shortDesc);

    if (formData.image) {
      submitData.append("image", formData.image);
    }

    try {
      const response = await axios.post(
        `${config.API_URL}/api/services`,
        formData
      );
      console.log(response);
      alert("Service created successfully");
      setFormData({ title: "", shortDesc: "", image: null });
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  };

  const handleUploadImage = (uploadedFile) => {
    setFormData((prev) => ({ ...prev, image: uploadedFile[0] }));
  };

  return (
    <div className="p-3">
      <h2 className="text-xl font-semibold mb-4">Create Service</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border border-gray-300 rounded-md w-full px-4 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Short Description</label>
          <textarea
            name="shortDesc"
            value={formData.shortDesc}
            onChange={handleChange}
            className="border border-gray-300 rounded-md w-full px-4 py-2"
            required
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="image"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Image:
          </label>
          <ImageUploader onUpload={handleUploadImage} />
          <div className="flex flex-wrap gap-3 mt-2">
            {formData.image && (
              <img
                src={formData.image}
                alt="Uploaded Preview"
                className="w-20 h-20 rounded-md object-cover m-1"
              />
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Service"}
        </button>
      </form>
    </div>
  );
};

export default AddServices;
