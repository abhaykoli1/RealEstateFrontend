import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../common/config";
import ImageUploader from "../../common/ImageUpload";

const AddCommunity = () => {
  const [formData, setFormData] = useState({
    title: "",
    sub_title: "",
    logo_image: "",
    image: [],
    amenities: [],
    highlights: [],
    description: "",
  });

  console.log(formData);
  const [loading, setLoading] = useState(false);
  const [communities, setCommunities] = useState([]);
  console.log(communities);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/communities`)
      .then((response) => setCommunities(response.data.data))
      .catch((error) => console.log(error.message));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUploadImage = (uploadedFile) => {
    setFormData({ ...formData, logo_image: uploadedFile[0] });
  };

  const handleUploadImages = (uploadedImages) => {
    setFormData((prev) => ({
      ...prev,
      image: [...prev.image, ...uploadedImages.map((url) => ({ image: url }))],
    }));
  };

  //    Animities
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

  const handleTitleChange = (e, index, field) => {
    const updatedItems = [...formData[field]];
    updatedItems[index].title = e.target.value;

    setFormData((prev) => ({
      ...prev,
      [field]: updatedItems,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${config.API_URL}/api/communities`,
        formData
      );
      alert("Community added successfully!");
      setFormData({
        title: "",
        sub_title: "",
        logo_image: null,
        image: [],
        amenities: [],
        highlights: [],
        description: "",
      });
    } catch (error) {
      alert(
        "Failed to add community: " +
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
          <label className="block text-sm font-medium">sub Title :</label>
          <input
            type="text"
            name="sub_title"
            value={formData.sub_title}
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
          <label className="block text-sm font-medium">Logo Image :</label>
          <ImageUploader onUpload={handleUploadImage} />
        </div>
        {formData.logo_image && (
          <div className="mt-4">
            <img
              src={formData.logo_image}
              alt="Profile"
              className="w-24 h-24 rounded-md object-cover"
            />
          </div>
        )}
        {/*  */}

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

        {/* Highlights */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Highlights:
          </label>
          <ImageUploader
            onUpload={(urls) => handleUploadComplete(urls, "highlights")}
          />
          {formData.highlights?.map((highlight, index) => (
            <div key={index} className="flex items-center space-x-2 mt-2">
              <img
                src={highlight.highlights_img}
                alt={highlight.title}
                className="w-10 h-10 rounded-md object-cover"
              />
              <input
                type="text"
                placeholder="Highlights Title"
                value={highlight.title}
                onChange={(e) => handleTitleChange(e, index, "highlights")}
                className="border border-gray-300 rounded-md px-2 py-1 w-full"
              />
            </div>
          ))}
        </div>

        {/* Images */}
        <div className="flex flex-col">
          <label
            htmlFor="image"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Images :
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
        <button
          type="submit"
          disabled={loading}
          className=" text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Adding..." : "Add Community"}
        </button>
      </form>
    </div>
  );
};

export default AddCommunity;
