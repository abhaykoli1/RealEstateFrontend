import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchBar from "./searchbar";
import PropertyValuation from "./propertyValuation";
import Hero from "./hero";

import OffPlanProperty from "./BrowseoffPlanProperty";
import Features from "./featutes";
// import FAQAccordion from "./faq";
import InterestOptions from "./interestOptions";
import FAQWithForm from "./faq";
import Testimonials from "./testrimonials";
import HelpSection from "./help";
import LatestProjects from "./latestProject";
import Partners from "./partners";
import AboutUs from "./AboutUs";
import BlogSection from "./BlogSection";
import AllPropertyImages from "../../../components/user/allPropertyImages";
import config from "../../../common/config";
import axios from "axios";
import DateCompo from "../../../components/user/date";

const LandingPage = () => {
  const [allPropertiesData, setAllPropertiesData] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/api/property`, {
          signal: controller.signal,
        });
        const formattedData = response.data.data.map((property) => ({
          images: property.image.map((img) => img.image),
          seo_title: property.seo_title || "No Title",
          community: property.communities || "No Community",
          types: property.property_type.title,
          statuses: property.property_status.title,
          developer: property.developers || "No Developer",
          createdAt: property.createdAt || "No createdAt",
          location: property.location || "No location",
          price: property.price || "No Price",
          beds: property.beds || "No Beds",
        }));

        setAllPropertiesData(formattedData);
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error("Error fetching properties:", error);
        }
      }
    };

    fetchProperties();

    return () => controller.abort();
  }, []);
  const [date, setDate] = useState(null);

  console.log("allPropertiesData", allPropertiesData);
  return (
    <div className="font-sans">
      <Hero />
      <div className="relative h-[337px]">
        <PropertyValuation allPropertiesData={allPropertiesData} />
      </div>

      <InterestOptions />
      {/* <AllPropertyImages /> */}
      <Features />

      <OffPlanProperty />
      <LatestProjects allPropertiesData={allPropertiesData} />
      <Partners />
      <Testimonials />
      <FAQWithForm />
      <AboutUs />
      <HelpSection />
      <BlogSection />
    </div>
  );
};

export default LandingPage;
