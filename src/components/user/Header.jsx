import React from "react";
import { FaChevronDown, FaFlag, FaSearch } from "react-icons/fa";
import Flags from "country-flag-icons/react/3x2";
import logo from "../../assets/logo.png";
import { Menu } from "lucide-react";
import { AiOutlineSearch } from "react-icons/ai";
import { LuListFilter } from "react-icons/lu";
import smallLogo from "../../assets/smallLogo.png";

const Header = ({ setSidebar, sidebar, setFilterBar, filterBar }) => {
  return (
    <div className="h- py-2.5 z-50 bg-white text-black w-full   lg:border-b-[2px] md:border-b-[2px] border-[#A9B9D6] fixed top-0 fle justify-between items-center pr-5">
      <div className="flex justify-between items-center overflow-hidden">
        <a href="/" className="lg:flex md:flex hidden -mb-2">
          <img src={logo} className=" " />
        </a>
        <div className="pl-2 lg:hidden md:hidden flex">
          <a href="/">
            <img src={logo} className="h-10 max-w-20 " />
          </a>
        </div>
        <div className="xl:hidden h-[37px] lg:h-full lg:w-full md:h-full  md:w-full  sm:w-full  flex items-center gap-3  border border-gray-300 shadow px-3 py-2 rounded-full md:max-w-[50%] sm:max-w-[50%] max-w-[90%]  lg:max-w-[50%] ">
          <AiOutlineSearch size={28} color="gray" className=" " />
          <input
            className="w-full !focus:border-none lg:text-lg md:text-lg text-[14px] outline-none"
            placeholder="3517 W. Gray St. Utica, Pennsylvania 57867"
          />
        </div>
        <div className="">
          <div className="flex justify-between items-center space-x-3">
            <div className="xl:flex hidden flex-row items-center xl:space-x-7">
              <ul className=" flex xl:space-x-7 text-[15px]  ">
                <li>
                  <a href="/listing">BUY</a>
                </li>
                <li>
                  <a href="/listing">RENT</a>
                </li>
                <li>
                  <a href="/listing">SELL</a>
                </li>
                {/* <li>OFF-PLAN</li>
                <li>COMMERCIAL</li> */}
                <li>
                  <a href="/communities">COMMUNITIES</a>
                </li>
                <li>
                  <a href="/developers">DEVELOPERS</a>
                </li>
                <li>CONTACT</li>
                <li>ABOUT</li>
              </ul>
              <div className="xl:flex hidden justify-end  ">
                <select className="!bg-white border border-[#A9B9D6] h-[28px] w-[100px] rounded-md py- text-black font-bold px-">
                  <option value="AED">🇪🇺 AED</option>
                  <option value="USD">🇺🇸 USD</option>
                  <option value="INR">🇮🇳 INR</option>
                  <option value="EUR">🇪🇺 EUR</option>
                </select>
              </div>
            </div>

            <Menu
              onClick={() => setSidebar(!sidebar)}
              size={40}
              color="#222"
              className="lg:h-12 md:h-12 h-10 xl:hidden lg:w-9 md:w-9 w-8 xl:absolute ml-4  rounded-md   cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
