import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "../../../common/config";

const AdminDashboard = () => {
  // const [propertyTypes, setPropertyTypes] = useState([]);
  // const [propertyStatus, setPropertyStatus] = useState([]);
  // const [properties, setProperties] = useState([]);
  // const [blogCategory, setBlogCategory] = useState([]);
  // const [testimonial, setTestimonial] = useState([]);
  // const [blog, setBlog] = useState([]);
  // const [consultants, setConsultants] = useState([]);
  // const [developers, setDevelopers] = useState([]);
  // const [communities, setCommunities] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`${config.API_URL}/api/property-type`)
  //     .then((response) => setPropertyTypes(response.data.data))
  //     .catch((error) =>
  //       alert("Error fetching property types: " + error.message)
  //     );
  // }, []);

  const [data, setData] = useState({
    propertyTypes: [],
    propertyStatus: [],
    properties: [],
    blogCategory: [],
    testimonial: [],
    blog: [],
    consultants: [],
    developers: [],
    communities: [],
    interests: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          propertyTypesRes,
          propertyStatusRes,
          propertiesRes,
          blogCategoryRes,
          testimonialRes,
          blogRes,
          consultantsRes,
          developersRes,
          communitiesRes,
          interestsRes,
        ] = await Promise.all([
          axios.get(`${config.API_URL}/api/property-type`),
          axios.get(`${config.API_URL}/api/property-status`),
          axios.get(`${config.API_URL}/api/property`),
          axios.get(`${config.API_URL}/api/blog-category`),
          axios.get(`${config.API_URL}/api/testimonial`),
          axios.get(`${config.API_URL}/api/blog`),
          axios.get(`${config.API_URL}/api/consultant`),
          axios.get(`${config.API_URL}/api/developer`),
          axios.get(`${config.API_URL}/api/communities`),
          axios.get(`${config.API_URL}/api/intrest`),
        ]);

        setData({
          propertyTypes: propertyTypesRes.data.data,
          propertyStatus: propertyStatusRes.data.data,
          properties: propertiesRes.data.data,
          blogCategory: blogCategoryRes.data.data,
          testimonial: testimonialRes.data.data,
          blog: blogRes.data.data,
          consultants: consultantsRes.data.data,
          developers: developersRes.data.data,
          communities: communitiesRes.data.data,
          interests: interestsRes.data.data,
        });
      } catch (error) {
        console.log("Error fetching data: " + error.message);
      }
    };

    fetchData();
  }, []);

  const sections = [
    {
      name: "Interests",
      path: "/admin/interests",
      length: data.interests.length,
    },
    {
      name: "Blog Category",
      path: "/admin/blog-category",
      length: data.blogCategory.length,
    },
    // {
    //   name: "About Us",
    //   path: "/admin/about-us",
    //   length: data.propertyTypes.length,
    // },
    // {
    //   name: "Why Choose Us",
    //   path: "/admin/why-choose-us",
    //   length: data.propertyTypes.length,
    // },
    {
      name: "Testimonial",
      path: "/admin/testimonial",
      length: data.testimonial.length,
    },
    { name: "Blog", path: "/admin/blog", length: data.blog.length },
    {
      name: "Property",
      path: "/admin/property",
      length: data.properties.length,
    },
    {
      name: "Consultant",
      path: "/admin/consultant",
      length: data.consultants.length,
    },
    {
      name: "Property Type",
      path: "/admin/all-property-types",
      length: data.propertyTypes.length,
    },
    {
      name: "Developer",
      path: "/admin/developer",
      length: data.developers.length,
    },
    {
      name: "Community",
      path: "/admin/community",
      length: data.communities.length,
    },
    {
      name: "Property Status",
      path: "/admin/property-status",
      length: data.propertyStatus.length,
    },
  ];
  return (
    <div className="min-h-scree  p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <Link
            key={index}
            to={section.path}
            className="border-[.5px] flex items-center px-5 justify-between border-gray-200  !text-black text-center py-6 rounded-md shadow-lg hover:shadow-2xl !hover:text-white hover:from-[#2f5fa7] hover:to-[#2f5fa7] transition-transform transform hover:scale-105 duration-300"
          >
            <div className="text-lg font-semibold ">{section.name}</div>
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
