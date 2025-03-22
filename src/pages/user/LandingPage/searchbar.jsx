import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <section className="z-40 bg-white shadow-[0px_5px_10px_rgba(0,0,0,0.1)] h-full -[80px] xl:h-[68px] py-2  rounded-md mt-2 flex  px-2.5 items-center gap-5 justify-between">
      {/* Location Dropdown */}
      <div className="gri grid-cols-4 w-full gap-5 flex justify-between flex-wrap">
        <div className="flex flex-col lg:w-fit   md:w-fit sm:w-fit w-full">
          <label className="text-[14px] text-black ml-2">Location</label>
          <div className="relative">
            <select className="w-full  p-1 outline-none text-sm">
              <option>Dubai, Ali ghar</option>
            </select>
            {/* <span className="absolute right-2 top-2 text-gray-400">▼</span> */}
          </div>
        </div>

        {/* Property Type Dropdown */}
        <div className="flex flex-col lg:w-fit md:w-fit sm:w-fit  w-full">
          <label className="text-[14px] text-black ml-2">Property</label>
          <div className="relative">
            <select className="w-full  p-1 outline-none text-sm">
              <option>Dubai, Ali ghar</option>
            </select>
            {/* <span className="absolute right-2 top-2 text-gray-400">▼</span> */}
          </div>
        </div>

        {/* Price Range Dropdown */}
        <div className="flex flex-col lg:w-fit md:w-fit sm:w-fit  w-full">
          <label className="text-[14px] text-black ml-2">Price Range</label>
          <div className="relative">
            <select className="w-full  p-1 outline-none text-sm">
              <option>120,000 - 150,000</option>
            </select>
            {/* <span className="absolute right-2 top-2 text-gray-400">▼</span> */}
          </div>
        </div>
        {/* Search Button */}
        <div className="flex flex-col lg:w-fit md:w-fit sm:w-fit  w-full">
          <button className="flex gap-2  justify-center !px-3 items-center !bg-[#7A9DC4] text-[14px] !rounded-[5px] text-white  py-2 h-[47px] lg:w-[108px] !hover:bg-[#7A9DC4] transition">
            Search
            <IoSearchOutline size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
