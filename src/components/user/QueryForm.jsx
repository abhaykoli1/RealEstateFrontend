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
      console.log(error);
      setErrorMessage(error.response?.data?.error || "Something went wrong");
    }

    setLoading(false);
  };

  return (
    <section>
      <div className="w-full max-w-[597px bg-white p-6 rounded-lg shadow-lg">
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
            <i className="fas fa-book absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2F5FA7]"></i>
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
              <option value="UAE">+971</option>
              <option value="USA">+1</option>
              <option value="UK">+44</option>
              <option value="CAN">+1</option>
              <option value="AUS">+61</option>
              <option value="GER">+49</option>
              <option value="FRA">+33</option>
              <option value="ITA">+39</option>
              <option value="ESP">+34</option>
              <option value="NLD">+31</option>
              <option value="SWE">+46</option>
              <option value="SWZ">+41</option>
              <option value="NOR">+47</option>
              <option value="DEN">+45</option>
              <option value="BEL">+32</option>
              <option value="AUT">+43</option>
              <option value="NZL">+64</option>
              <option value="SGP">+65</option>
              <option value="HKG">+852</option>
              <option value="JPN">+81</option>
              <option value="CHN">+86</option>
              <option value="IND">+91</option>
              <option value="PAK">+92</option>
              <option value="BAN">+880</option>
              <option value="SL">+94</option>
              <option value="NEP">+977</option>
              <option value="BRA">+55</option>
              <option value="MEX">+52</option>
              <option value="RUS">+7</option>
              <option value="SA">+966</option>
              <option value="EGY">+20</option>
              <option value="TUR">+90</option>
              <option value="ARG">+54</option>
              <option value="COL">+57</option>
              <option value="IDN">+62</option>
              <option value="PHL">+63</option>
              <option value="VNM">+84</option>
              <option value="THA">+66</option>
              <option value="MYS">+60</option>
              <option value="KOR">+82</option>
              <option value="ISR">+972</option>
              <option value="ZAF">+27</option>
              <option value="KEN">+254</option>
              <option value="NGA">+234</option>
              <option value="ETH">+251</option>
              <option value="IRN">+98</option>
              <option value="IRQ">+964</option>
              <option value="KWT">+965</option>
              <option value="QAT">+974</option>
              <option value="OMN">+968</option>
              <option value="JOR">+962</option>
              <option value="LBN">+961</option>
              <option value="CZE">+420</option>
              <option value="POL">+48</option>
              <option value="HUN">+36</option>
              <option value="GRE">+30</option>
              <option value="PRT">+351</option>
              <option value="ROU">+40</option>
              <option value="BGR">+359</option>
              <option value="FIN">+358</option>
              <option value="ISL">+354</option>
              <option value="LUX">+352</option>
              <option value="IRL">+353</option>
              <option value="EST">+372</option>
              <option value="LVA">+371</option>
              <option value="LTU">+370</option>
              <option value="UKR">+380</option>
              <option value="SRB">+381</option>
              <option value="HRV">+385</option>
              <option value="SVK">+421</option>
              <option value="SVN">+386</option>
              <option value="BLR">+375</option>
              <option value="GEO">+995</option>
              <option value="ARM">+374</option>
              <option value="AZE">+994</option>
              <option value="KAZ">+7</option>
              <option value="UZB">+998</option>
              <option value="TJK">+992</option>
              <option value="TKM">+993</option>
              <option value="KGZ">+996</option>
              <option value="MNG">+976</option>
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
              Agree to our{" "}
              <a href="#" className="text-blue-400 underline">
                privacy policy.
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
          {errorMessage && (
            <p className="text-red-600">Failed To Submit Query</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default QueryForm;
