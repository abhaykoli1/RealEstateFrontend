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
    <div className="h- py-2.5 z-50 bg-white text-black w-full  lg:border-b-[2px] md:border-b-[2px] border-[#A9B9D6] fixed top-0 fle justify-between items-center pr-5">
      <div className="flex justify-between items-center">
        <img src={logo} className="lg:flex md:flex hidden" />
        <div className="pl-2 lg:hidden md:hidden flex">
          <img src={logo} className="h-10 max-w-20 " />
        </div>
        <div className="xl:hidden h-[37px] lg:h-full md:h-full lg:w-full md:w-full  sm:w-full  flex items-center gap-4  border border-gray-300 shadow-md px-5 py-2 rounded-full  max-w-96 w">
          <AiOutlineSearch size={28} color="text-black" className=" " />
          <input
            className="w-full !focus:border-none"
            placeholder="3517 W. Gray St. Utica, Pennsylvania 57867"
          />
        </div>
        <div className="">
          <div className="xl:flex hidden justify-end mb-2 ">
            <select className="!bg-white border border-[#A9B9D6] h-[28px] w-[100px] rounded-md py- text-black font-bold px-">
              <option value="USD">🇺🇸 USD</option>
              <option value="INR">🇮🇳 INR</option>
              <option value="EUR">🇪🇺 EUR</option>
            </select>
          </div>

          <div className="flex justify-between items-center space-x-3">
            <div className="xl:flex hidden flex-row items-center xl:space-x-7">
              <ul className=" flex xl:space-x-7 text-[15px]  ">
                <li>
                  <a href="/listing">BUY</a>
                </li>
                <li>
                  {" "}
                  <a href="/listing">RENT</a>
                </li>
                <li>
                  {" "}
                  <a href="/listing">SELL</a>
                </li>
                <li>OFF-PLAN</li>
                <li>COMMERCIAL</li>
                <li>MORE</li>
                <li>INSIGHT</li>
                <li>CONTACT</li>
                <li>ABOUT</li>
              </ul>
              <div className="flex relative gap-3 w-[205px] -mr-3  h-[35px] border border-[#A9B9D6] rounded-[5px]">
                <input
                  placeholder="Search..."
                  className="active:border-none px-[14px]"
                />
                <AiOutlineSearch
                  size={25}
                  color="text-black"
                  className=" absolute right-3 top-1 "
                />
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
