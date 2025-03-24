import {
  BadgeCheck,
  Bike,
  ChartNoAxesCombined,
  ChevronLeftIcon,
  Contact,
  LayoutDashboard,
  User,
} from "lucide-react";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
// Add Property ,
const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin",
    // icon: <LayoutDashboard className="text-slate-700" />,
  },

  {
    id: "interests",
    label: "Interests",
    path: "/admin/interests",
    // icon can be added here if available
  },
  {
    id: "blog-category",
    label: "Blog Category",
    path: "/admin/blog-category",
  },
  {
    id: "about-us",
    label: "About Us",
    path: "/admin/about-us",
  },
  {
    id: "why-choose-us",
    label: "Why Choose Us",
    path: "/admin/why-choose-us",
  },
  {
    id: "testimonial",
    label: "Testimonial",
    path: "/admin/testimonial",
  },
  {
    id: "add-blog",
    label: "Blog",
    path: "/admin/add-blog",
  },
  {
    id: "property",
    label: "Property",
    path: "/admin/add-property",
  },
  {
    id: "add-consultant",
    label: "Consultant",
    path: "/admin/add-consultant",
  },
  {
    id: "add-property-type",
    label: "Property Type",
    path: "/admin/add-property-type",
  },
  {
    id: "add-developer",
    label: "Developer",
    path: "/admin/add-developer",
  },
  {
    id: "add-community",
    label: "Community",
    path: "/admin/add-community",
  },
  // {
  //   id: "all-property-types",
  //   label: "All Property Type",
  //   path: "/admin/all-property-types",
  // },
  {
    id: "add-property-status",
    label: "Property Status",
    path: "/admin/add-property-status",
  },
];

function MenuItems({ setSidebar, handleClose }) {
  const navigate = useNavigate();

  return (
    <nav className="flex flex-col no-scrollbar gap- pt-[35px] shadow-2xl h-screen mr-[2px]">
      {adminSidebarMenuItems.map((menuItem) => (
        <a
          key={menuItem.id}
          onClick={() => {
            navigate(menuItem.path);
            handleClose();
          }}
          className="flex  no-scrollbar hover:bg-[#2f5fa71d] text-xl cursor-pointer gap-4 hover:!text-[#2f5fa7]  items-center px-5 py-2.5"
        >
          {/* {menuItem.icon} */}
          <span>{menuItem.label}</span>
        </a>
      ))}
    </nav>
  );
}

const Sidebar = ({ setSidebar, sidebar }) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1024px)" });
  const islargeScreen = useMediaQuery({ query: "(max-width: 1023px)" });
  function handleClose() {
    {
      isSmallScreen
        ? setSidebar(false)
        : islargeScreen
        ? setSidebar(true)
        : null;
    }
  }
  useEffect(() => {
    {
      isSmallScreen
        ? setSidebar(false)
        : islargeScreen
        ? setSidebar(true)
        : null;
    }
  }, [isSmallScreen, islargeScreen]);

  const navigate = useNavigate();
  return (
    <div
      className={` h-full z-0 w-60 overflow-y-auto bg-[#fff] text-white  fixed duration-500 transition-all  
      ${sidebar ? "" : "-translate-x-60"}`}
    >
      <aside className="flex flex-col bg-transparent w-full overflow-y-scroll pt-4">
        <div className="flex border-[#d0d0d0] border-b justify-center  cursor-pointer gap-2 items-center lg:pb-[19px] pb-[9px] px-4">
          {/* <div className="flex flex-col text-center items-center">
            <ChartNoAxesCombined size={26} />
            <h2 className="text-[10px] text-slate-700 font-extrabold line-clamp-6">
              Admin
            </h2>
          </div> */}
          <div className="flex bg-[#2f5fa7] border-b border-gray-300  justify-center w-60 fixed items-center leading-3 line-clamp-1 py-[7px] top-0 z-30">
            {/* DNS */}
            {sidebar ? (
              <div
                onClick={() => setSidebar(false)}
                variant="outline"
                className="flex bg-white border h-8 justify-center rounded shadow w-9 absolute cursor-pointer items-center lg:hidden  left-3 top-[19px] "
              >
                <ChevronLeftIcon className="h-6 w-6" color="#222" />
              </div>
            ) : null}
            <img src={logo} alt="logo" className="h-14 z-0 " />
          </div>
        </div>

        <div className="mt-3 overflow-y-scroll no-scrollbar h-screen shadow-2xl border- border-gray-300">
          <MenuItems setSidebar={setSidebar} handleClose={handleClose} />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
