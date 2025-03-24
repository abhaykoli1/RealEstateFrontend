import { useEffect, useState } from "react";
import config from "../../common/config";
import axios from "axios";

const AddPropertyStatus = () => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const [propertyStatus, setPropertyStatus] = useState([]);

  console.log("propertyStatus :", propertyStatus);
  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/property-status`)
      .then((response) => setPropertyStatus(response.data.data))
      .catch((error) => console.log(error.message));
  }, []);

  const handleSelect = (consultant) => {
    setFormData({ ...formData, consultant: consultant._id });
    setShowDropdown(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);

    try {
      await axios.post(`${config.API_URL}/api/property-status`, formData);
      alert("Property status added successfully!");
      //   navigate("/admin/all-property-types");
      setTitle("");
    } catch (error) {
      alert("Error: " + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" mx-auto  p-3 rounded-lg w-full">
      {/* <h2 className="text-xl font-bold mb-4">Add Property Status</h2> */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full mt-1 border !border-gray-300 rounded-md  px-4 py-2"
          />
        </div>

        {/* <div className="flex items-center">
          <label className="text-sm font-medium mr-2">Status:</label>
          <input
            type="checkbox"
            checked={status}
            onChange={() => setStatus(!status)}
            className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
        </div> */}

        {/* <div>
          <label className="block text-sm font-medium">Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div> */}

        <button type="submit" disabled={loading} className=" ">
          {loading ? "Adding..." : "Add Property Status"}
        </button>
      </form>
    </div>
  );
};

export default AddPropertyStatus;
