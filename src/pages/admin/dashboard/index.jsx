import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "../../../common/config";
import {
  FaShapes,
  FaClipboardCheck,
  FaBuilding,
  FaHeart,
  FaListAlt,
  FaQuoteLeft,
  FaBlog,
  FaQuestionCircle,
  FaUserTie,
  FaCity,
  FaImage,
  FaInfoCircle,
  FaCheckCircle,
} from "react-icons/fa";
const AdminDashboard = () => {
  const [data, setData] = useState({
    propertyTypes: [],
    propertyStatus: [],
    properties: [],
    blogCategory: [],
    blog: [],
    consultants: [],
    developers: [],
    communities: [],
    interests: [],
    testimonial: [],
    faqs: [],
  });

  useEffect(() => {
    const fetchPropertyTypes = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/api/property-type`);
        setData((prev) => ({ ...prev, propertyTypes: response.data.data }));
      } catch (error) {
        console.error("Error fetching property types:", error);
      }
    };

    const fetchPropertyStatus = async () => {
      try {
        const response = await axios.get(
          `${config.API_URL}/api/property-status`
        );
        setData((prev) => ({ ...prev, propertyStatus: response.data.data }));
      } catch (error) {
        console.error("Error fetching property status:", error);
      }
    };

    const fetchProperties = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/api/property`);
        setData((prev) => ({ ...prev, properties: response.data.data }));
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    const fetchBlogCategory = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/api/blog-category`);
        setData((prev) => ({ ...prev, blogCategory: response.data.data }));
      } catch (error) {
        console.error("Error fetching blog categories:", error);
      }
    };

    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/api/blog`);
        setData((prev) => ({ ...prev, blog: response.data.data }));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    const fetchConsultants = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/api/consultant`);
        setData((prev) => ({ ...prev, consultants: response.data.data }));
      } catch (error) {
        console.error("Error fetching consultants:", error);
      }
    };

    const fetchDevelopers = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/api/developer`);
        setData((prev) => ({ ...prev, developers: response.data.data }));
      } catch (error) {
        console.error("Error fetching developers:", error);
      }
    };

    const fetchCommunities = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/api/communities`);
        setData((prev) => ({ ...prev, communities: response.data.data }));
      } catch (error) {
        console.error("Error fetching communities:", error);
      }
    };

    const fetchInterests = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/api/intrest`);
        setData((prev) => ({ ...prev, interests: response.data.data }));
      } catch (error) {
        console.error("Error fetching interests:", error);
      }
    };
    const fetchFaqs = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/api/faqs`);
        setData((prev) => ({ ...prev, faqs: response.data.data }));
      } catch (error) {
        console.error("Error fetching Faqs:", error);
      }
    };

    const fetchTestimonial = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/api/testimonial`);
        setData((prev) => ({ ...prev, testimonial: response.data.data }));
      } catch (error) {
        console.error("Error fetching Testimonial:", error);
      }
    };

    fetchPropertyTypes();
    fetchPropertyStatus();
    fetchProperties();
    fetchBlogCategory();
    fetchBlogs();
    fetchConsultants();
    fetchDevelopers();
    fetchCommunities();
    fetchInterests();
    fetchTestimonial();
    fetchFaqs();
  }, []);

  const sections = [
    {
      name: "Property Type",
      path: "/admin/all-property-types",
      length: data.propertyTypes.length,
      icon: <FaShapes />,
    },
    {
      name: "Property Status",
      path: "/admin/all-property-status",
      length: data.propertyStatus.length,
      icon: <FaClipboardCheck />,
    },
    {
      name: "Properties",
      path: "/admin/all-properties",
      length: data.properties.length,
      icon: <FaBuilding />,
    },
    {
      name: "Interests",
      path: "/admin/all-interests",
      length: data.interests.length,
      icon: <FaHeart />,
    },
    {
      name: "Blog Category",
      path: "/admin/all-blog-categories",
      length: data.blogCategory.length,
      icon: <FaListAlt />,
    },
    {
      name: "Testimonial",
      path: "/admin/all-testimonials",
      length: data.testimonial.length,
      icon: <FaQuoteLeft />,
    },
    {
      name: "Blog",
      path: "/admin/all-blogs",
      length: data.blog.length,
      icon: <FaBlog />,
    },
    {
      name: "Faq's",
      path: "/admin/all-faqs",
      length: data?.faqs?.length,
      icon: <FaQuestionCircle />,
    },
    {
      name: "Consultant",
      path: "/admin/all-consultant",
      length: data.consultants.length,
      icon: <FaUserTie />,
    },
    {
      name: "Developer",
      path: "/admin/all-developers",
      length: data.developers.length,
      icon: <FaCity />,
    },
    {
      name: "Community",
      path: "/admin/all-communities",
      length: data.communities.length,
      icon: <FaCity />,
    },
  ];
  const sections2 = [
    { id: 1, name: "Banner", icon: <FaImage />, path: "/admin/add-banner" },
    {
      id: 2,
      name: "About Us",
      icon: <FaInfoCircle />,
      path: "/admin/about-us",
    },
    {
      id: 3,
      name: "Why Choose Us",
      icon: <FaCheckCircle />,
      path: "/admin/why-choose-us",
    },
  ];

  return (
    <div className="min-h-screen p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
        {sections2.map((section) => (
          <a key={section.id} href={section.path}>
            <div className="border-[.5px] flex items-center px-5 justify-between border-gray-200 text-black text-center py-6 rounded-md shadow-lg hover:shadow-2xl  hover:text-[#2f5fa7] transition-transform transform hover:scale-105 duration-300">
              <div className="text-lg font-semibold">{section.name}</div>
              <div className="text-[#2f5fa7]">{section.icon}</div>
            </div>
          </a>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {sections?.map((section, index) => (
          <Link
            key={index}
            to={section.path}
            className="border-[.5px] flex items-center px-5 justify-between border-gray-200 text-black text-center py-6 rounded-md shadow-lg hover:shadow-2xl hover:text-white hover:from-[#2f5fa7] hover:to-[#2f5fa7] transition-transform transform hover:scale-105 duration-300"
          >
            {section.icon}
            <div className="text-lg font-semibold">{section.name}</div>
            <div className="text-[#2f5fa7]">
              ({section.length ? section.length : 0})
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
