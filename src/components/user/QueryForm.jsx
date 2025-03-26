import React, { useState } from "react";
import axios from "axios";
import config from "../../common/config";

const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    currency: "",
    message: "",
    acceptedPrivacy: false,
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // console.log(formData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await axios.post(
        `${config.API_URL}/api/queries`,
        formData
      );
      setSuccessMessage("Query submitted successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        phone: "",
        currency: "",
        message: "",
        acceptedPrivacy: false,
      });
    } catch (error) {
      setErrorMessage(error.response?.data?.error || "Something went wrong");
    }

    setLoading(false);
  };

  return (
    <section>
      <div className="w-full max-w-[597px] bg-white p-6 rounded-lg shadow-lg">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="border h-[42px] border-gray-300 p-3 rounded-[5px] w-full pl-10"
              required
            />
            <i className="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2F5FA7]"></i>
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              className="border h-[42px] border-gray-300 p-3 rounded-[5px] w-full pl-10"
              required
            />
            <i className="fas fa-at absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2F5FA7] text-xl"></i>
          </div>

          <div className="relative">
            <input
              type="text"
              name="subject"
              placeholder="Subject *"
              value={formData.subject}
              onChange={handleChange}
              className="border h-[42px] border-gray-300 p-3 rounded-[5px] w-full pl-10"
              required
            />
            <i className="fas fa-heading absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2F5FA7]"></i>
          </div>

          <div className="relative">
            <input
              type="number"
              name="phone"
              placeholder="Phone *"
              value={formData.phone}
              onChange={handleChange}
              className="border h-[42px] border-gray-300 p-3 rounded-[5px] w-full pl-24"
              required
            />
            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className="bg-white absolute left-2 top-1/2 transform -translate-y-1/2 border border-gray-300 h-[28px] w-[80px] rounded-[5px] text-black font-bold"
            >
              <option value="INR">🇮🇳 INR</option>
              <option value="USD">🇺🇸 USD</option>
              <option value="EUR">🇪🇺 EUR</option>
            </select>
          </div>

          <div className="relative">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-[5px] w-full h-32 pl-10"
              required
            />
            <i className="fas fa-comment-dots absolute left-3 top-3.5 transform translate-y-1 text-[#2F5FA7]"></i>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="privacy"
              name="acceptedPrivacy"
              checked={formData.acceptedPrivacy}
              onChange={handleChange}
              className="w-4 h-4"
              required
            />
            <label htmlFor="privacy" className="text-sm text-gray-700">
              He leído y acepto la{" "}
              <a href="#" className="text-blue-400 underline">
                política de privacidad.
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="bg-[#1A2948] text-white py-3 max-w-[149px] rounded-[5px] text-lg font-semibold hover:bg-[#15203A]"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {successMessage && <p className="text-green-600">{successMessage}</p>}
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default QueryForm;
