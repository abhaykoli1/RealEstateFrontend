import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router";
import ListingProperties from "./pages/user/ListingPage";
import UserLayout from "./components/user/Layout";
import PropertyPerticular from "./pages/user/propertyPerticular";
import LandingPage from "./pages/user/LandingPage";
import PerticularBlog from "./pages/user/perticularBlog";
import Developers from "./pages/user/developers";
import Comunities from "./pages/user/comunities";
import PerticularDevelopers from "./pages/user/perticularDevelopers";
import PerticularCommunities from "./pages/user/perticularCommunities";
import AdminLayout from "./components/admin/AdminLayout";
import Interests from "./pages/admin/Interest";
import BlogCategory from "./pages/admin/blogCategory";
import AddBlog from "./pages/admin/blog";
import AboutUs from "./pages/admin/aboutUs";
import WhyChooseUs from "./pages/admin/whyChooseUs";
import Testimonial from "./pages/admin/Testimonial";
import AddPropertyType from "./pages/admin/AddPropertyType";
import AllPropertyTypes from "./pages/admin/AllPropertyTypes";
import EditPropertyType from "./pages/admin/EditPropertyType";
import AddProperty from "./pages/admin/Add-Property";
import AddPropertyStatus from "./pages/admin/Add-Property-Status";
import AddConsultant from "./pages/admin/addConsultant";
import AddPropertyNew from "./pages/admin/addPropertynew";

function App() {
  return (
    <div className="flex flex-col overflow-hidden">
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="" element={<LandingPage />} />
          <Route path="listing" element={<ListingProperties />} />
          <Route path="property" element={<PropertyPerticular />} />
          <Route path="blog" element={<PerticularBlog />} />
          <Route path="developers" element={<Developers />} />
          <Route path="developer" element={<PerticularDevelopers />} />
          <Route path="communities" element={<Comunities />} />
          <Route path="communitie" element={<PerticularCommunities />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="interests" element={<Interests />} />

          <Route path="add-property-status" element={<AddPropertyStatus />} />

          <Route path="add-property-type" element={<AddPropertyType />} />
          <Route path="all-property-types" element={<AllPropertyTypes />} />
          <Route path="edit-property-type/:id" element={<EditPropertyType />} />
          <Route path="add" element={<AddPropertyNew />} />

          {/* <Route path="Property-Type" element={<PropertyType />} /> */}
          <Route path="blog-category" element={<BlogCategory />} />
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="why-choose-us" element={<WhyChooseUs />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="add-consultant" element={<AddConsultant />} />
          <Route path="add-property" element={<AddProperty />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
