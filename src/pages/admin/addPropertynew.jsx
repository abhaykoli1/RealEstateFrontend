import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../common/config";

const AddPropertyNew = () => {
  const [formData, setFormData] = useState({
    title: "",
    seo_title: "",
    seo_description: "",
    description: "",
    refernce_number: "",
    permit_number: "",
    property_type: "",
    property_status: "",
    consultant: "",
    price: "",
    features: [],
    latitude: "",
    longitude: "",
    old_permit_no: "",
    old_permit_dec: "",
    comerical: false,
    location: "",
    off_plan: false,
  });

  console.log(formData);
  const [amenities, setAmenities] = useState([
    { title: "", amenity_img: null },
  ]);
  const [nearby, setNearby] = useState([{ title: "", near_by_img: null }]);
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [consultants, setConsultants] = useState([]);
  const [propertyStatus, setPropertyStatus] = useState([]);
  const [propertyType, setPropertyType] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Fetch property consultants
  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/consultant`)
      .then((response) => setConsultants(response.data.data))
      .catch((error) => alert("Error fetching consultants: " + error.message));
  }, []);

  // Fetch property statuses
  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/property-status`)
      .then((response) => setPropertyStatus(response.data.data))
      .catch((error) =>
        alert("Error fetching property statuses: " + error.message)
      );
  }, []);

  // Fetch property types
  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/property-type`)
      .then((response) => setPropertyType(response.data.data))
      .catch((error) =>
        alert("Error fetching property types: " + error.message)
      );
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e, type) => {
    const files = Array.from(e.target.files);
    if (type === "images") setImages(files);
    if (type === "videos") setVideos(files);
  };

  const handleAmenityChange = (index, e) => {
    const { name, value } = e.target;
    const newAmenities = [...amenities];
    newAmenities[index][name] = value;
    setAmenities(newAmenities);
  };

  const handleNearbyChange = (index, e) => {
    const { name, value } = e.target;
    const newNearby = [...nearby];
    newNearby[index][name] = value;
    setNearby(newNearby);
  };

  const handleAmenityFileChange = (index, e) => {
    const newAmenities = [...amenities];
    newAmenities[index].amenity_img = e.target.files[0];
    setAmenities(newAmenities);
  };

  const handleNearbyFileChange = (index, e) => {
    const newNearby = [...nearby];
    newNearby[index].near_by_img = e.target.files[0];
    setNearby(newNearby);
  };

  const addAmenity = () => {
    setAmenities([...amenities, { title: "", amenity_img: null }]);
  };

  const addNearby = () => {
    setNearby([...nearby, { title: "", near_by_img: null }]);
  };

  // Handle features input (comma-separated)s
  const handleArrayChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value.split(",").map((item) => item.trim()),
    });
  };
  // Handle consultant selection
  const handleSelect = (consultant) => {
    setFormData({ ...formData, consultant: consultant._id });
    setShowDropdown(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    console.log(formDataObj);
    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, formData[key]);
    });

    images.forEach((img) => formDataObj.append("image", img));
    videos.forEach((vid) => formDataObj.append("video", vid));

    amenities.forEach((amenity, index) => {
      formDataObj.append(`amenities[${index}][title]`, amenity.title);
      if (amenity.amenity_img) {
        formDataObj.append("amenity_img", amenity.amenity_img);
      }
    });

    nearby.forEach((place, index) => {
      formDataObj.append(`near_by[${index}][title]`, place.title);
      if (place.near_by_img) {
        formDataObj.append("near_by_img", place.near_by_img);
      }
    });

    try {
      const response = await axios.post(
        `${config.API_URL}/api/property`,
        formDataObj,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert(response);
    } catch (error) {
      console.error("Error:", error);
      alert(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Property</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              SEO Title :
            </label>
            <input
              name="seo_title"
              value={formData.seo_title}
              onChange={handleChange}
              placeholder="SEO Title"
              className="border border-gray-300 rounded-md w-full px-4 py-2"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              SEO Description :
            </label>
            <textarea
              name="seo_description"
              value={formData.seo_description}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full px-4 py-2"
              placeholder="SEO Description"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Title :
            </label>
            <input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              required
              className="border border-gray-300 rounded-md w-full px-4 py-2"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Description :
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full px-4 py-2"
              placeholder="Description"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Refernce Number :
            </label>
            <input
              name="refernce_number"
              value={formData.refernce_number}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full px-4 py-2"
              placeholder="Reference Number"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Permit Number :
            </label>
            <input
              name="permit_number"
              value={formData.permit_number}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full px-4 py-2"
              placeholder="Permit Number"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Old Permit No :
            </label>
            <input
              name="old_permit_no"
              type="number"
              value={formData.old_permit_no}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full px-4 py-2"
              placeholder="Old Permit No"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Old Permit Dec :
            </label>
            <textarea
              name="old_permit_dec"
              value={formData.old_permit_dec}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full px-4 py-2"
              placeholder="Old Permit Description"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Price :
            </label>
            <input
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full px-4 py-2"
              placeholder="Price"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Location :
            </label>
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full px-4 py-2"
              placeholder="Location"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Latitude :
            </label>
            <input
              name="latitude"
              value={formData.latitude}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full px-4 py-2"
              placeholder="Latitude"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              longitude :
            </label>
            <input
              name="longitude"
              value={formData.longitude}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full px-4 py-2"
              placeholder="Longitude"
              required
            />
          </div>
        </div>

        <div>
          <label className="text-gray-700 text-sm block font-medium">
            Property Type
          </label>
          <select
            name="property_type"
            value={formData.property_type}
            onChange={handleChange}
            className="border p-2 rounded-lg w-full"
          >
            <option value="" disabled>
              Select Property Type
            </option>
            {propertyType.map((type) => (
              <option key={type._id} value={type._id}>
                {type.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-gray-700 text-sm block font-medium">
            Property Status
          </label>
          <select
            name="property_status"
            value={formData.property_status}
            onChange={handleChange}
            className="border p-2 rounded-lg w-full"
          >
            <option value="" disabled>
              Select Property Status
            </option>
            {propertyStatus.map((type) => (
              <option key={type._id} value={type._id}>
                {type.title}
              </option>
            ))}
          </select>
        </div>
        <div className="relative">
          <label className="text-gray-700 text-sm block font-medium">
            Consultant
          </label>
          <div
            className="flex bg- border p-2 rounded-lg w-full cursor-pointer items-center"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {formData.consultant ? (
              <div className="flex items-center space-x-2">
                <img
                  src={`${config.API_URL}${
                    consultants.find((c) => c.name === formData.consultant)
                      ?.profile_pic
                  }`}
                  alt={formData.consultant}
                  className="h-8 rounded-full w-8"
                />

                <span>{formData.consultant}</span>
              </div>
            ) : (
              <span className="text-gray-400">Select a Consultant</span>
            )}
          </div>

          {showDropdown && (
            <div className="bg-black border rounded-lg shadow-lg w-full absolute mt-1 z-10">
              {consultants.map((consultant) => (
                <div
                  key={consultant._id}
                  className="flex p-2 cursor-pointer hover:bg-gray-100 items-center"
                  onClick={() => handleSelect(consultant)}
                >
                  <img
                    src={consultant.image}
                    alt={consultant.name}
                    className="h-8 rounded-full w-8"
                  />
                  <span className="ml-2">{consultant.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Array inputs */}
        <div className="flex flex-col">
          <label
            htmlFor="features"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Features:
          </label>
          <input
            name="features"
            value={formData.features.join(", ")} // Convert array back to a comma-separated string
            className="border border-gray-300 rounded-md w-full px-4 py-2"
            onChange={(e) => handleArrayChange("features", e.target.value)}
            placeholder="Enter features separated by commas"
          />
        </div>
        <div className="mt-4">
          <label className="block">Upload Images</label>
          <input
            type="file"
            multiple
            onChange={(e) => handleFileChange(e, "images")}
          />
        </div>

        <div className="mt-4">
          <label className="block">Upload Videos</label>
          <input
            type="file"
            multiple
            onChange={(e) => handleFileChange(e, "videos")}
          />
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-bold">Amenities</h3>
          {amenities.map((amenity, index) => (
            <div key={index} className="flex gap-2 mt-2">
              <input
                name="title"
                placeholder="Amenity Title"
                className="p-2 border"
                onChange={(e) => handleAmenityChange(index, e)}
              />
              <input
                type="file"
                onChange={(e) => handleAmenityFileChange(index, e)}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addAmenity}
            className="mt-2 bg-blue-500 p-2 rounded"
          >
            + Add Amenity
          </button>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-bold">Nearby Places</h3>
          {nearby.map((place, index) => (
            <div key={index} className="flex gap-2 mt-2">
              <input
                name="title"
                placeholder="Nearby Place"
                className="p-2 border"
                onChange={(e) => handleNearbyChange(index, e)}
              />
              <input
                type="file"
                onChange={(e) => handleNearbyFileChange(index, e)}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addNearby}
            className="mt-2 bg-green-500 p-2 rounded"
          >
            + Add Nearby
          </button>
        </div>

        <button type="submit" className="w-full mt-4 bg-purple-500 p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPropertyNew;
