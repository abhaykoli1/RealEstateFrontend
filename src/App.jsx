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
import Interests from "./pages/admin/AddInterest";
import AddBlog from "./pages/admin/AddBlog";
import AboutUs from "./pages/admin/aboutUs";
import WhyChooseUs from "./pages/admin/whyChooseUs";
import Testimonial from "./pages/admin/AddTestimonial";
import AddPropertyType from "./pages/admin/AddPropertyType";
import AllPropertyTypes from "./pages/admin/AllPropertyTypes";
import EditPropertyType from "./pages/admin/EditPropertyType";
import AddProperty from "./pages/admin/Add-Property";
import AddPropertyStatus from "./pages/admin/Add-Property-Status";
import AddConsultant from "./pages/admin/AddConsultant";
import AdminLogin from "./pages/auth/AdminLogin";
import CheckAuth from "./components/auth/check-auth";
import AddDeveloper from "./pages/admin/AddDeveloper";
import AddCommunity from "./pages/admin/add-communities";
import AdminDashboard from "./pages/admin/dashboard";
import CommingSoon from "./pages/user/LandingPage/CommingSoon";
import { Date } from "./pages/user/LandingPage/date";
import AddBanner from "./pages/admin/add-banner-images";
import AddFAQ from "./pages/admin/AddFaq";
import AddServices from "./pages/admin/add-Service";
import CalendarCompo from "./pages/user/LandingPage/calender";
import AllPropertyStatus from "./pages/admin/allPropertyStatus";
import EditPropertyStatus from "./pages/admin/EditPropertyStatus";
import AllProperties from "./pages/admin/AllProperties";
import EditProperty from "./pages/admin/Edit-Property";
import AllDevelopers from "./pages/admin/AllDevelopers";
import AllCommunities from "./pages/admin/AllCommunities";
import EditCommunity from "./pages/admin/EditCommunities";
import EditDeveloper from "./pages/admin/EditDeveloper";
import AllConsultant from "./pages/admin/AllConultants";
import EditConsultant from "./pages/admin/EditConsultant";
import AllTestimonial from "./pages/admin/AllTestimonials";
import AllBlogCategory from "./pages/admin/AllBlogCategories";
import AllInterests from "./pages/admin/AllInterests";
import AllBlogs from "./pages/admin/AllBlogs";
import AllFaqs from "./pages/admin/AllFaqs";
import EditBlogCategory from "./pages/admin/EditBlogCategory";
import EditBlog from "./pages/admin/EditBlog";
import EditTestimonial from "./pages/admin/EditTestimonal";
import EditFAQ from "./pages/admin/EditFaq";
import EditInterest from "./pages/admin/EditInterest";
import AddBlogCategory from "./pages/admin/AllBlogCategories";
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
          <Route path="c" element={<CalendarCompo />} />
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
          <Route path="add-property-status" element={<AddPropertyStatus />} />
          <Route path="add-interest" element={<Interests />} />
          <Route path="edit-interest/:id" element={<EditInterest />} />
          <Route path="all-interests" element={<AllInterests />} />
          <Route path="all-blogs" element={<AllBlogs />} />
          <Route path="all-faqs" element={<AllFaqs />} />
          <Route path="add-property-type" element={<AddPropertyType />} />
          <Route path="edit-property-type/:id" element={<EditPropertyType />} />
          <Route path="edit-testimonial/:id" element={<EditTestimonial />} />
          <Route
            path="edit-property-status/:id"
            element={<EditPropertyStatus />}
          />
          <Route path="edit-faq/:id" element={<EditFAQ />} />
          <Route path="add-blog-category" element={<AddBlogCategory />} />

          <Route path="all-blog-categories" element={<AllBlogCategory />} />
          <Route path="edit-blog-category/:id" element={<EditBlogCategory />} />
          <Route path="edit-blog/:id" element={<EditBlog />} />
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="add-banner" element={<AddBanner />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="why-choose-us" element={<WhyChooseUs />} />
          <Route path="add-testimonial" element={<Testimonial />} />
          <Route path="all-testimonials" element={<AllTestimonial />} />
          <Route path="add-consultant" element={<AddConsultant />} />
          <Route path="all-consultant" element={<AllConsultant />} />
          <Route path="edit-consultant/:id" element={<EditConsultant />} />
          <Route path="add-property" element={<AddProperty />} />
          <Route path="edit-property/:id" element={<EditProperty />} />
          <Route path="all-properties" element={<AllProperties />} />
          <Route path="add-developer" element={<AddDeveloper />} />
          <Route path="all-developers" element={<AllDevelopers />} />
          <Route path="add-community" element={<AddCommunity />} />
          <Route path="all-communities" element={<AllCommunities />} />
          <Route path="edit-community/:id" element={<EditCommunity />} />
          <Route path="edit-developer/:id" element={<EditDeveloper />} />
          <Route path="add-faq" element={<AddFAQ />} />
          <Route path="add-services" element={<AddServices />} />
          <Route path="all-property-types" element={<AllPropertyTypes />} />
          <Route path="all-property-status" element={<AllPropertyStatus />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
