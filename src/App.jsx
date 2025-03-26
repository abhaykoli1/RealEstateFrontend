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
import AdminLogin from "./pages/auth/AdminLogin";
import CheckAuth from "./components/auth/check-auth";
import AddDeveloper from "./pages/admin/add-developer";
import AddCommunity from "./pages/admin/add-communities";
import AdminDashboard from "./pages/admin/dashboard";
import CommingSoon from "./pages/user/LandingPage/CommingSoon";
import { Date } from "./pages/user/LandingPage/date";
import AddBanner from "./pages/admin/add-banner-images";
import AddFAQ from "./pages/admin/addFaq";
import AddServices from "./pages/admin/add-Service";

function App() {
  return (
    <div className="flex flex-col overflow-hidden">
      <Routes>
        {/* Public Routes */}

        {/* <Route path="/" element={<UserLayout />}> */}
        {/* <Route path="/" element={<CommingSoon />} />
        <Route path="/listing" element={<ListingProperties />} />
        <Route path="/property/:seoTitle" element={<PropertyPerticular />} /> */}
        {/* </Route> */}
        <Route path="/" element={<UserLayout />}>
          <Route path="" element={<LandingPage />} />
          <Route path="date" element={<Date />} />
          <Route path="listing" element={<ListingProperties />} />
          <Route path="property/:seoTitle" element={<PropertyPerticular />} />
          <Route path="blog/:seoTitle" element={<PerticularBlog />} />
          <Route path="developers" element={<Developers />} />
          <Route path="developer/:id" element={<PerticularDevelopers />} />
          <Route path="community/:id" element={<PerticularCommunities />} />
          <Route path="communities" element={<Comunities />} />
        </Route>

        {/* Protected Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/*"
          element={
            <CheckAuth>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="" element={<AdminDashboard />} />
          <Route path="interests" element={<Interests />} />
          <Route path="add-property-status" element={<AddPropertyStatus />} />
          <Route path="add-property-type" element={<AddPropertyType />} />
          <Route path="edit-property-type/:id" element={<EditPropertyType />} />
          <Route path="blog-category" element={<BlogCategory />} />
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="add-banner" element={<AddBanner />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="why-choose-us" element={<WhyChooseUs />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="add-consultant" element={<AddConsultant />} />
          <Route path="add-property" element={<AddProperty />} />
          <Route path="add-developer" element={<AddDeveloper />} />
          <Route path="add-community" element={<AddCommunity />} />
          <Route path="add-faqs" element={<AddFAQ />} />
          <Route path="add-services" element={<AddServices />} />

          <Route path="all-property-types" element={<AllPropertyTypes />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
