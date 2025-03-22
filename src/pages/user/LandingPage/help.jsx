import {
  Mail,
  HelpCircle,
  Verified,
  MailCheckIcon,
  ChartArea,
} from "lucide-react";
import { IoIosMail } from "react-icons/io";
import { IoLogoWechat } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";

export default function HelpSection() {
  return (
    <div className="w-full mx-auto text-center  my-10 mb-16  px-6">
      {/* Heading */}
      <h2 className="lg:text-[40px] md:text-[40px] text-[28px] font-extrabold text-gray-900 leading-[1.2]">
        Do You Have Any Questions?
      </h2>
      <h3 className="lg:text-[40px] md:text-[40px]  text-[28px] font-extrabold text-gray-900 -mt-1">
        Get Help From Us
      </h3>

      {/* Support Options */}
      <div className="flex justify-center flex-wrap lg:gap-5 md:gap-5 gap-3 mt-6 text-gray-800">
        <div className="flex items-center gap-2 font-bold">
          <IoLogoWechat className="w-5 h-5 text-[18px] text-[#2F5FA7]" />
          <span>Chat live with our support team</span>
        </div>
        <div className="flex items-center gap-2 font-bold">
          <RiVerifiedBadgeFill className="w-5 h-5 text-[18px] text-[#2F5FA7]" />
          <span>Browse our FAQ</span>
        </div>
      </div>

      <p className=" text-center pt-3 font-bold">Subscribe your news letter</p>

      {/* Email Input with Submit Button */}
      <div className="mt-8 flex flex-wrap gap-3 items-center justify-center ">
        <div className="relative  w-[505px]">
          <IoIosMail size={28} className="absolute left-3 top-2 text-black" />
          <input
            type="email"
            placeholder="Enter your email address..."
            className="pl-12 pr-4 placeholder:text-black  py-2 w-full max-w-[705px] !text-[18px] borde border-gray-200 font-medium rounded-sm shadow-[0px_5px_10px_rgba(0,0,0,0.1)] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className=" bg-blue-600 w-[156px] text-white px-5 py-2 !rounded-sm hover:bg-blue-700">
          Submit
        </button>
      </div>
    </div>
  );
}
