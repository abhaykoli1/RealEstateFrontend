import React from "react";
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
import SwiperComponent from "./sw";

const LandingPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <Hero />

      {/* Property Valuation Card */}
      <div className="relative h-[337px]">
        <PropertyValuation />
      </div>
      <InterestOptions />
      {/* Search by Feature */}
      <Features />
      {/* Off Plan Properties */}
      <OffPlanProperty />

      <LatestProjects />
      <Partners />
      <Testimonials />

      {/* FAQ Section */}

      <FAQWithForm />
      <AboutUs />

      <HelpSection />
      {/* <SwiperComponent /> */}
      <BlogSection />
    </div>
  );
};

export default LandingPage;
