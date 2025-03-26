import { Menu, Plus } from "lucide-react";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const AdminHeader = ({ setSidebar, sidebar }) => {
  const location = useLocation();

  const routeMap = {
    "/admin": "Admin Dashboard",
    "/admin/add-property-type": "Add Property Type",
    "/admin/add-property": "Add Property",
    "/admin/add-property-status": "Add Property Status",
    "/admin/add-consultant": "Consultant",
    "/admin/users": "Users List",
    "/admin/Rides": "Admin Rides",
    "/admin/Bookings": "Admin Bookings",
    "/admin/addReviews": "Add Reviews",
    "/admin/add-blog": "Add Blogs",
    "/admin/about-us": "About Us",
    "/admin/blog-category": "Blog Category",
    "/admin/testimonial": "Testimonial",
    "/admin/why-choose-us": "Why Choose Us",
    "/admin/interests": "Interest Options",
    "/admin/add-banner": "Add Banner Images",
    "/admin/add-banner": "Add Admin",
    "/admin/add-faqs": "Add FAQ`S",
  };

  const routeName = routeMap[location.pathname] || "Unknown Route";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/admin/login");
  };

  return (
    <header
      className={`flex z-50  items-center justify-between px-4 py-3 bg-[#fff bg-[#2f5fa7]  lg:h-[70px] h-[70px]   shadow-md`}
    >
      <div className="flex items-center gap-4">
        <Menu
          onClick={() => setSidebar(!sidebar)}
          size={34}
          color="#fff"
          className="h-9  w-10 border rounded-md border-white p-1 cursor-pointer"
        />
        <label
          className={`lg:text-2xl text-xl lg:pl-[190px] text-white font-bold`}
        >
          {routeName}
        </label>
      </div>
      <div className="flex gap-3 items-center">
        <button
          onClick={handleLogout}
          className="  px-4 py-2 !text-[#2f5fa7] !font-semibold  !bg-white !rounded-[5px] hover:scale-[102%] transition"
        >
          LOGOUT
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
