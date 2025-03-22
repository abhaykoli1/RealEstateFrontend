import {
  BadgeCheck,
  Bike,
  ChartNoAxesCombined,
  ChartNoAxesCombinedIcon,
  ChevronLeftCircleIcon,
  ChevronLeftIcon,
  Contact,
  LayoutDashboard,
  User,
} from "lucide-react";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

// Add Property ,
const adminSidebarMenuItems = [
  {
    id: "buy",
    label: "BUY",
    path: "/listing",
    // icon: <LayoutDashboard className="text-slate-700" />,
  },
  {
    id: "rent",
    label: "RENT",
    path: "/listing",
    // icon: <BadgeCheck className="text-slate-700" />,
  },
  {
    id: "sell",
    label: "SELL",
    path: "/listing",
    // icon: <User className="text-slate-700" />,
  },
  {
    id: "offplan",
    label: "OFF-PLAN",
    path: "/",
    // icon: <Bike className="text-slate-700" />,
  },
  {
    id: "commercial",
    label: "COMMERCIAL",
    path: "/",
    // icon: <ReviewsOutlined className="text-slate-700" />,
  },
  {
    id: "more",
    label: "MORE",
    path: "/",
    // icon: <QueryStats className="text-slate-700" />,
  },
  {
    id: "insight",
    label: "INSIGHT",
    path: "/",
    // icon: <QueryStats className="text-slate-700" />,
  },
  {
    id: "contact",
    label: "CONTACT",
    path: "/",
    // icon: <QueryStats className="text-slate-700" />,
  },
  {
    id: "about",
    label: "ABOUT",
    path: "/",
    // icon: <QueryStats className="text-slate-700" />,
  },
];

function MenuItems({ setSidebar, handleClose }) {
  const navigate = useNavigate();

  return (
    <nav className="mt-8 flex-col flex gap-2 ">
      {adminSidebarMenuItems.map((menuItem) => (
        <a
          key={menuItem.id}
          onClick={() => {
            navigate(menuItem.path);
            handleClose();
          }}
          className="text-slate-700  flex cursor-pointer text-xl items-center gap-4 rounded-md px-3 py-2 text-muted-foregroun hover:bg-muted hover:text-slate-700"
        >
          {menuItem.icon}
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
        ? setSidebar(false)
        : null;
    }
  }, [isSmallScreen, islargeScreen]);

  const navigate = useNavigate();
  return (
    <div
      className={`h-full w-60 z-50 bg-[rgb(255,255,255)] fixed duration-500 transition-all 
      ${sidebar ? "translate-x-0 shadow-2xl " : "translate-x-full "}`}
      style={{ right: 0 }}
    >
      {sidebar ? (
        <div
          onClick={() => setSidebar(false)}
          variant="outline"
          className="lg:hidden cursor-pointer flex h-8 w-9 absolute  items-center justify-center rounded  top-3 -right-6 bg-white shadow border"
        >
          <ChevronLeftCircleIcon className="h-6 w-6 " color="#222" />
        </div>
      ) : null}

      <aside className=" w-full flex-col bg-transparent pt-20  flex ">
        <div className="px-4 mt-10">
          <div className="flex justify-start ">
            <select className="!bg-white border border-[#A9B9D6] h-[32px] w-[120px] rounded-md px-2 text-black font-bold ">
              <option value="USD">🇺🇸 USD</option>
              <option value="INR">🇮🇳 INR</option>
              <option value="EUR">🇪🇺 EUR</option>
            </select>
          </div>
          <MenuItems setSidebar={setSidebar} handleClose={handleClose} />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
