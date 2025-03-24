import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../common/config";
import ImageUploader from "../../common/ImageUpload";

const AddDeveloper = () => {
  const [formData, setFormData] = useState({
    image: "",
    description: "",
    title: "",
  });

  const [loading, setLoading] = useState(false);
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/developer`)
      .then((response) => setDevelopers(response.data.data))
      .catch((error) => console.log(error.message));
  }, []);

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
      const response = await axios.post(
        `${config.API_URL}/api/developer`,
        formData
      );
      alert("Developer added successfully!");
      setFormData({
        title: "",
        description: "",
        image: null,
      });
    } catch (error) {
      alert(
        "Failed to add developer: " +
          (error.response?.data?.message || error.message)
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto p-3 rounded-lg w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name :</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full mt-1 border !border-gray-300 rounded-md  px-4 py-2"
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
            className="w-full mt-1 border !border-gray-300 rounded-md  px-4 py-2"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium">Image :</label>
          <ImageUploader onUpload={handleUploadImage} />
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
        <button
          type="submit"
          disabled={loading}
          className=" text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Adding..." : "Add Developer"}
        </button>
      </form>
    </div>
  );
};

export default AddDeveloper;
