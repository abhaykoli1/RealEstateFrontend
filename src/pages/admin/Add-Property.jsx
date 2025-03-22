import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../common/config";
import { useNavigate } from "react-router-dom";
import ImageUploader from "../../common/ImageUpload";

export default function PropertyForm() {
  const [formData, setFormData] = useState({
    title: "",
    seo_title: "Luxury Villa for Sale",
    seo_description: "Beautiful villa with sea view",
    description: "",
    refernce_number: "",
    permit_number: "",
    property_type: "",
    property_status: "",
    consultant: "",
    price: "",
    features: [],
    amenities: [],
    near_by: [],
    latitude: "",
    longitude: "",
    old_permit_number: "",
    old_permit_description: "",
    comerical: false,
    off_plan: false,
    image: [],
    location: "",
    status: "",
  });

  const [selectedConsultant, setSelectedConsultant] = useState(null);
  console.log(formData);

  useEffect(() => {
    if (formData.consultant) {
      axios
        .get(`${config.API_URL}/api/consultant/${formData.consultant}`)
        .then((response) => {
          setSelectedConsultant(response.data.data); // Assuming API returns { name, profile_pic }
        })
        .catch((error) => {
          console.error("Error fetching consultant details:", error);
          setSelectedConsultant(null);
        });
    }
  }, [formData.consultant]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${config.API_URL}/api/property`,
        formData
      );
      console.log("Response:", response.data);
      alert("Property Added Successfully");
    } catch (error) {
      console.error("Error:", error);
      alert(error.response.data.message);
    }
  };
  const [showDropdown, setShowDropdown] = useState(false);
  const [consultants, setConsultants] = useState([]);
  const [propertyType, setPropertyType] = useState([]);
  const [propertyStatus, setPropertyStatus] = useState([]);

  // console.log("consultants", consultants);
  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/consultant`)
      .then((response) => setConsultants(response.data.data))
      .catch(
        (error) => console.log(error.message)
        // alert("Error fetching property types: " + error.message)
        // }
      );
  }, []);

  // console.log("propertyStatus :", propertyStatus);
  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/property-status`)
      .then((response) => setPropertyStatus(response.data.data))
      .catch(
        (error) => console.log(error.message)
        // alert("Error fetching property types: " + error.message)
      );
  }, []);

  // console.log("propertyType", propertyType);
  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/property-type`)
      .then((response) => setPropertyType(response.data.data))
      .catch(
        (error) => console.log(error.message)
        // alert("Error fetching property types: " + error.message)
      );
  }, []);

  const handleSelect = (consultant) => {
    setFormData({ ...formData, consultant: consultant._id });
    setShowDropdown(false);
  };

  // console.log("formData :", formData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleTitleChange = (e, index, field) => {
    const updatedItems = [...formData[field]];
    updatedItems[index].title = e.target.value;

    setFormData((prev) => ({
      ...prev,
      [field]: updatedItems,
    }));
  };

  const handleUploadComplete = (uploadedUrls, field) => {
    const newEntries = uploadedUrls.map((url) => ({
      title: field === "amenities" ? "" : "",
      [`${field}_img`]: url,
    }));

    setFormData((prev) => ({
      ...prev,
      [field]: prev[field] ? [...prev[field], ...newEntries] : [...newEntries],
    }));
  };

  const handleUploadImages = (uploadedImages) => {
    setFormData((prev) => ({
      ...prev,
      image: [...prev.image, ...uploadedImages.map((url) => ({ image: url }))],
    }));
  };

  const handleArrayChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value.split(",").map((item) => item.trim()),
    });
  };

  const handleFeaturesChange = (index, value) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData((prev) => ({ ...prev, features: newFeatures }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6  text-black rounded-xl"
    >
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
          className="flex bg-white border p-2 rounded-lg w-full cursor-pointer items-center"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {selectedConsultant ? (
            <div className="flex items-center space-x-2">
              <img
                src={
                  selectedConsultant.profile_pic
                    ? `${selectedConsultant.profile_pic}`
                    : "/default-profile.png"
                }
                alt={selectedConsultant.name}
                className="h-8 rounded-full w-8 object-cover"
              />
              <span>{selectedConsultant.name}</span>
            </div>
          ) : (
            <span className="text-gray-400">Select a Consultant</span>
          )}
        </div>

        {showDropdown && (
          <div className="bg-white border rounded-lg shadow-lg w-full absolute mt-1 z-10">
            {consultants.map((consultant) => (
              <div
                key={consultant._id}
                className="flex p-2 cursor-pointer hover:bg-gray-100 items-center"
                onClick={() => handleSelect(consultant)}
              >
                <img
                  src={consultant.profile_pic}
                  alt={consultant.name}
                  className="h-8 rounded-full w-8 object-cover"
                />

                <span className="ml-2">{consultant.name}</span>
              </div>
            ))}
          </div>
        )}
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
      <div className="flex flex-col">
        <label
          htmlFor="title"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Old Permit No :
        </label>
        <input
          name="old_permit_number"
          type="text"
          value={formData.old_permit_number}
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
          name="old_permit_description"
          value={formData.old_permit_description}
          onChange={handleChange}
          className="border border-gray-300 rounded-md w-full px-4 py-2"
          placeholder="Old Permit Description"
        />
      </div>
      {/* <div className="relative">
        <label className="text-gray-700 text-sm block font-medium">
          Consultant
        </label>
        <div
          className="flex bg-white border p-2 rounded-lg w-full cursor-pointer items-center"
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
          <div className="bg-white border rounded-lg shadow-lg w-full absolute mt-1 z-10">
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
      </div> */}

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

      {/* Amenities Upload */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">
          Amenities:
        </label>
        <ImageUploader
          onUpload={(urls) => handleUploadComplete(urls, "amenities")}
        />
        {formData.amenities?.map((amenity, index) => (
          <div key={index} className="flex items-center space-x-2 mt-2">
            <img
              src={amenity.amenities_img}
              alt={amenity.title}
              className="w-10 h-10 rounded-md object-cover"
            />
            <input
              type="text"
              placeholder="Amenity Title"
              value={amenity.title}
              onChange={(e) => handleTitleChange(e, index, "amenities")}
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
            />
          </div>
        ))}
      </div>

      {/* Nearby Places Upload */}
      <div className="flex flex-col mt-4">
        <label className="text-sm font-medium text-gray-700 mb-1">
          Nearby Places:
        </label>
        <ImageUploader
          onUpload={(urls) => handleUploadComplete(urls, "near_by")}
        />
        {formData.near_by?.map((place, index) => (
          <div key={index} className="flex items-center space-x-2 mt-2">
            <img
              src={place.near_by_img}
              alt={place.title}
              className="w-10 h-10 rounded-md object-cover"
            />
            <input
              type="text"
              placeholder="Nearby Place Title"
              value={place.title}
              onChange={(e) => handleTitleChange(e, index, "near_by")}
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="image"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Image:
        </label>

        {/* Use ImageUploader Component */}
        <ImageUploader onUpload={handleUploadImages} />

        {/* Display Uploaded Images */}
        <div className="flex flex-wrap gap-3 mt-2">
          {formData.image.map((img, index) => (
            <img
              key={index}
              src={img.image}
              alt={`Uploaded ${index}`}
              className={` w-20 h-20  rounded-md object-cover m-1`}
            />
          ))}
        </div>
      </div>

      {/* Checkboxes */}

      <div className="flex gap-5">
        <div className="flex items-center space-x-2 bg-white p-2 rounded-md border border-gray-300 shadow-sm">
          <div className="relative">
            <input
              type="checkbox"
              id="comerical"
              name="comerical"
              checked={formData.comerical}
              onChange={(e) =>
                setFormData({ ...formData, comerical: e.target.checked })
              }
              className="peer hidden"
            />
            <div className="w-5 h-5 flex items-center justify-center border-2 border-gray-400 rounded-md peer-checked:bg-blue-500 peer-checked:border-blue-500 transition">
              {formData.comerical && (
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              )}
            </div>
          </div>
          <label
            htmlFor="comerical"
            className="text-sm text-black cursor-pointer"
          >
            Comercial
          </label>
        </div>

        <div className="flex items-center space-x-2 bg-white p-2 rounded-md border border-gray-300 shadow-sm">
          <div className="relative">
            <input
              type="checkbox"
              id="off_plan"
              name="off_plan"
              checked={formData.off_plan}
              onChange={(e) =>
                setFormData({ ...formData, off_plan: e.target.checked })
              }
              className="peer hidden"
            />
            <div className="w-5 h-5 flex items-center justify-center border-2 border-gray-400 rounded-md peer-checked:bg-blue-500 peer-checked:border-blue-500 transition">
              {formData.off_plan && (
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              )}
            </div>
          </div>
          <label
            htmlFor="off_plan"
            className="text-sm text-black cursor-pointer"
          >
            Off Plan
          </label>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
