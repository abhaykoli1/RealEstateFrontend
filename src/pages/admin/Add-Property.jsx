import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../common/config";
import { useNavigate } from "react-router-dom";
import ImageUploader from "../../common/ImageUpload";
import { FaAngleDown } from "react-icons/fa6";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

export default function PropertyForm() {
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
    amenities: [],
    near_by: [],
    latitude: "",
    longitude: "",
    old_permit_image: "",
    old_permit_number: "",
    old_permit_description: "",
    comerical: false,
    off_plan: false,
    image: [],
    location: "",
    communities: "",
    developers: "",
    beds: "",
    shower: "",
    sqr_foot: "",
    status: "",
  });

  console.log(formData);

  const [selectedConsultant, setSelectedConsultant] = useState(null);

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
      if (formData.seo_title) {
        formData.seo_title = formData.seo_title.replace(/\s+/g, "-"); // Replace spaces with dashes
      }
      const response = await axios.post(
        `${config.API_URL}/api/property`,
        formData
      );
      console.log("Response:", response.data);
      alert("Property Added Successfully");
      setFormData({
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
        amenities: [],
        near_by: [],
        latitude: "",
        longitude: "",
        old_permit_image: "",
        old_permit_number: "",
        old_permit_description: "",
        comerical: false,
        off_plan: false,
        image: [],
        location: "",
        communities: "",
        developers: "",
        beds: "",
        shower: "",
        sqr_foot: "",
        status: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert(error.response.data.message);
    }
  };

  console.log(formData);

  const [showDropdown, setShowDropdown] = useState(false);
  const [consultants, setConsultants] = useState([]);
  const [propertyType, setPropertyType] = useState([]);
  const [propertyStatus, setPropertyStatus] = useState([]);
  const [allDevelopers, setAllDeveloper] = useState([]);
  const [allCommunities, setAllCommunities] = useState([]);

  // console.log("consultants", consultants);
  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/consultant`)
      .then((response) => setConsultants(response.data.data))
      .catch((error) => console.log(error.message));
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

  // console.log("developor :", allDevelopers);
  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/developer`)
      .then((response) => setAllDeveloper(response.data.data))
      .catch((error) => console.log(error.message));
  }, []);

  // console.log("allCommunities :", allCommunities);
  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/communities`)
      .then((response) => setAllCommunities(response.data.data))
      .catch((error) => console.log(error.message));
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

  // consultant  changes
  const handleSelect = (consultant) => {
    setFormData({ ...formData, consultant: consultant._id });
    setShowDropdown(false);
  };

  // form Change
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

  const handleSubTitleChange = (e, index, field) => {
    const updatedItems = [...formData[field]];
    updatedItems[index].sub_title = e.target.value;

    setFormData((prev) => ({
      ...prev,
      [field]: updatedItems,
    }));
  };

  const handleUploadFeatures = (uploadedUrls, field) => {
    const newEntries = uploadedUrls.map((url) => ({
      title: field === "features" ? "" : "",
      [`${field}_img`]: url,
    }));

    setFormData((prev) => ({
      ...prev,
      [field]: prev[field] ? [...prev[field], ...newEntries] : [...newEntries],
    }));
  };

  const handleUploadComplete = (uploadedUrls, field) => {
    const newEntries = uploadedUrls.map((url) => ({
      title: field === "amenities" ? "" : "",
      sub_title: field === "near_by" ? "" : "",
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

  // upload a image
  const handleUploadImage = (uploadedFile) => {
    setFormData({ ...formData, old_permit_image: uploadedFile[0] });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-3  text-black rounded-xl"
    >
      {/* title and description */}
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
        {/* <SunEditor
          setContents={description}
          onChange={handleChange}
          setOptions={{
            buttonList: [["bold", "italic", "underline", "list"]],
          }}
        /> */}
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

      {/* Numbers */}
      <div className="flex flex-col">
        <label
          htmlFor="title"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Number of Beds :
        </label>
        <input
          type="number"
          required
          name="beds"
          placeholder="Number of Beds"
          value={formData.beds}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-2 py-1 w-full"
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="title"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Number of Showers :
        </label>
        <input
          required
          name="shower"
          type="number"
          placeholder="Number of Showers"
          value={formData.shower}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-2 py-1 w-full"
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="title"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Square Area :
        </label>
        <input
          required
          name="sqr_foot"
          type="number"
          placeholder="Square Area"
          value={formData.sqr_foot}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-2 py-1 w-full"
        />
      </div>

      {/* Dropdowns */}
      <div>
        <label className="text-gray-700  text-sm block font-medium mb-1.5">
          Property Type
        </label>
        <select
          name="property_type"
          value={formData.property_type}
          onChange={handleChange}
          className="border p-2 border-gray-300 py-[9px] rounded-lg w-full"
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
        <label className="text-gray-700  text-sm block font-medium mb-1.5">
          Property Status
        </label>
        <select
          name="property_status"
          value={formData.property_status}
          onChange={handleChange}
          className="border border-gray-300 py-[9px] p-2 rounded-lg w-full"
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
      <div>
        <label className="text-gray-700  text-sm block font-medium mb-1.5">
          Communities
        </label>
        <select
          name="communities"
          value={formData.communities}
          onChange={handleChange}
          className="border p-2 border-gray-300 py-[9px] rounded-lg w-full"
        >
          <option value="" disabled>
            Select Community
          </option>
          {allCommunities.map((type) => (
            <option key={type._id} value={type._id}>
              {type.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="text-gray-700  text-sm block font-medium mb-1.5">
          Developers
        </label>
        <select
          name="developers"
          value={formData.developers}
          onChange={handleChange}
          className="border p-2 border-gray-300 py-[9px] rounded-lg w-full"
        >
          <option value="" disabled>
            Select Developer
          </option>
          {allDevelopers.map((type) => (
            <option key={type._id} value={type._id}>
              {type.title}
            </option>
          ))}
        </select>
      </div>
      <div className="relative">
        <label className="text-gray-700 text-sm block font-medium mb-1.5">
          Consultant
        </label>
        <div
          className="flex bg-white border border-gray-300 p-2 rounded-lg w-full cursor-pointer items-center"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {selectedConsultant ? (
            <div className="flex items-center justify-between w-full space-x-2">
              <div className="flex items-center gap-4">
                <img
                  src={
                    selectedConsultant.profile_pic
                      ? `${selectedConsultant.profile_pic}`
                      : "/default-profile.png"
                  }
                  alt={selectedConsultant.name}
                  className="h-6 rounded-full  w-6 object-cover"
                />
                <span>{selectedConsultant.name}</span>
              </div>
              <FaAngleDown color="gray" />
            </div>
          ) : (
            <span className="text-gray-400">Select a Consultant</span>
          )}
        </div>

        {showDropdown && (
          <div className="bg-white border  border-gray-500/55 rounded-lg shadow-lg w-full absolute mt-1 z-10">
            {consultants.map((consultant) => (
              <div
                key={consultant._id}
                className="flex p-2 cursor-pointer hover:bg-gray-100 rounded-lg  items-center"
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

      {/* Location */}
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

      {/* Refrence and Permit no  */}
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

      {/* Price */}
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

      {/*  Dld Permit */}
      <div className="flex flex-col">
        <label
          htmlFor="title"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Dld Permit Number :
        </label>
        <input
          name="old_permit_number"
          type="text"
          value={formData.old_permit_number}
          onChange={handleChange}
          className="border border-gray-300 rounded-md w-full px-4 py-2"
          placeholder="Dld Permit Number"
          required
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="title"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Dld Permit Description :
        </label>
        <textarea
          name="old_permit_description"
          value={formData.old_permit_description}
          onChange={handleChange}
          className="border border-gray-300 rounded-md w-full px-4 py-2"
          placeholder="Dld Permit Description"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Dld QR</label>
        <ImageUploader onUpload={handleUploadImage} />
      </div>
      {formData.old_permit_image && (
        <div className="mt-4">
          <img
            src={formData.old_permit_image}
            alt="Profile"
            className="w-24 h-24 rounded-md object-cover"
          />
        </div>
      )}

      {/* Features */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">
          Features:
        </label>
        <ImageUploader
          onUpload={(urls) => handleUploadFeatures(urls, "features")}
        />
        {formData.features?.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2 mt-2">
            <img
              src={feature.features_img}
              alt={feature.title}
              className="w-10 h-10 rounded-md object-cover"
            />
            <input
              type="text"
              placeholder="Feature Title"
              value={feature.title}
              onChange={(e) => handleTitleChange(e, index, "features")}
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
            />
          </div>
        ))}
      </div>

      {/* Amenities */}
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

      {/* Nearby Places */}
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
              placeholder="Nearby Place Name"
              value={place.title}
              onChange={(e) => handleTitleChange(e, index, "near_by")}
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
            />
            <input
              type="text"
              placeholder="Distance"
              value={place.sub_title}
              onChange={(e) => handleSubTitleChange(e, index, "near_by")}
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
            />
          </div>
        ))}
      </div>

      {/* Property Image*/}
      <div className="flex flex-col">
        <label
          htmlFor="image"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Image:
        </label>

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
          <input
            type="checkbox"
            id="comerical"
            name="comerical"
            checked={formData.comerical}
            onChange={(e) =>
              setFormData({ ...formData, comerical: e.target.checked })
            }
            className="w-4 h-4"
          />
          <label
            htmlFor="comerical"
            className="text-sm text-black cursor-pointer"
          >
            Comercial
          </label>
        </div>
        <div className="flex items-center space-x-2 bg-white p-2 rounded-md border border-gray-300 shadow-sm">
          <input
            type="checkbox"
            id="off_plan"
            name="off_plan"
            checked={formData.off_plan}
            onChange={(e) =>
              setFormData({ ...formData, off_plan: e.target.checked })
            }
            className="w-4 h-4 "
          />
          <label
            htmlFor="off_plan"
            className="text-sm text-black cursor-pointer"
          >
            Off Plan
          </label>
        </div>
      </div>

      <button className="text-white bg-[#2f5fa7]" type="submit">
        Add Property
      </button>
    </form>
  );
}
