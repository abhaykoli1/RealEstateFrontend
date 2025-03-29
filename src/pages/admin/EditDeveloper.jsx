// EditDeveloper.js
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../common/config";
import ImageUploader from "../../common/ImageUpload";
import { FaTrash } from "react-icons/fa";

const EditDeveloper = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/developer/${id}`)
      .then((response) => {
        const { title, description, image } = response.data.data;
        setFormData({ title, description, image });
      })
      .catch((error) => alert("Error fetching developer: " + error.message));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUploadImage = (uploadedFile) => {
    setFormData({ ...formData, image: uploadedFile[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.put(`${config.API_URL}/api/developer/${id}`, formData);
      alert("Developer updated successfully!");
      navigate("/admin/all-developers");
    } catch (error) {
      alert("Error: " + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-3 w-full mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name :</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full mt-1 border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Description :</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            className="w-full mt-1 border border-gray-300 rounded-md px-4 py-2"
          ></textarea>
        </div>
        {/* Images */}
        <div>
          <label className="block text-sm font-medium">Image :</label>
          <div className="flex gap-4">
            <div className="w-full">
              <ImageUploader onUpload={handleUploadImage} />
            </div>

            {/* Delete Button */}
            <div
              className="px-5 flex items-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  image: null, // Instead of [], set to null to match data type
                }))
              }
            >
              <FaTrash size={20} />
            </div>
          </div>
          {formData.image && (
            <div className="mt-4">
              <img
                src={formData.image}
                alt="Profile"
                className="w-24 h-24 rounded-md object-cover"
              />
            </div>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 w-full"
        >
          {loading ? "Updating..." : "Update Developer"}
        </button>
      </form>
    </div>
  );
};

export default EditDeveloper;
