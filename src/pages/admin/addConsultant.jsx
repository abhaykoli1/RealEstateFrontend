import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../common/config";
import ImageUploader from "../../common/ImageUpload";

const AddConsultant = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    email: "",
    country_code: "",
    phone: "",
    whatsappNumber: "",
    profile_pic: "", // Change from empty string to null
  });

  const [loading, setLoading] = useState(false);
  const [consultants, setConsultants] = useState([]);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/consultant`)
      .then((response) => setConsultants(response.data.data))
      .catch((error) => console.log(error.message));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUploadImage = (uploadedFile) => {
    setFormData({ ...formData, profile_pic: uploadedFile[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${config.API_URL}/api/consultant`,
        formData,
        {
          // headers: {
          //   "Content-Type": "multipart/form-data",
          // },
        }
      );
      alert("Consultant added successfully!");
      setFormData({
        name: "",
        description: "",
        email: "",
        country_code: "",
        phone: "",
        whatsappNumber: "",
        profile_pic: null,
      });
    } catch (error) {
      alert(
        "Failed to add consultant: " +
          (error.response?.data?.message || error.message)
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto p-3 rounded-lg w-full">
      {/* <h2 className="text-xl font-bold mb-4">Add Consultant</h2> */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mt-1 border !border-gray-300 rounded-md  px-4 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md  px-4 py-2"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md  px-4 py-2"
          />
        </div>
        <div className="flex gap-5">
          <div>
            <label className="block text-sm font-medium">Country Code:</label>
            <select
              name="country_code"
              value={formData.country_code}
              onChange={handleChange}
              required
              className=" mt-1 p-2 border border-gray-300 rounded-md w-full px-4 py-2"
            >
              <option value="">Select Country Code</option>
              <option value="+1">+1 (USA)</option>
              <option value="+91">+91 (India)</option>
            </select>
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium">Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md  px-4 py-2"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">WhatsApp Number:</label>
          <input
            type="text"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md  px-4 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Profile Picture</label>
          <ImageUploader onUpload={handleUploadImage} />
        </div>
        {formData.profile_pic && (
          <div className="mt-4">
            <img
              src={formData.profile_pic}
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
          {loading ? "Adding..." : "Add Consultant"}
        </button>
      </form>
    </div>
  );
};

export default AddConsultant;
