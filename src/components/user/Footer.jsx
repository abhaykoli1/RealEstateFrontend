import {
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex } from "react-icons/fa";
import { FaLocationPin, FaTruckFast } from "react-icons/fa6";
import { Locate, Map } from "lucide-react";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
  FaCcDiscover,
  FaGooglePay,
  FaApplePay,
  FaStripe,
  FaCcDinersClub,
} from "react-icons/fa";
import smallLogo from "../../assets/smallLogo.png";

export default function Footer() {
  return (
    <section className="bg-[#2F5FA7] text-white pb-10 pt-7">
      <footer className="">
        {/* Service Cards */}

        <div className="max-w-7xl mx-auto px-5">
          <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 place-items-center gap-3 ">
            {Array(4)
              .fill("Service")
              .map((text, index) => (
                <div
                  key={index}
                  className="bg-[#2F5FA7] FooterServices w-full border-2 flex border-white rounded-lg items-center justify-start  p-2 gap-4 shadow-md"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <FaTruckFast size={32} />{" "}
                      <h4 className="font-semibold text-[16px]">{text}</h4>
                    </div>
                    <p className="text-[10px]">
                      Trust us to connect your business to global markets with
                      efficiency.
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* Footer Links */}
          <div className="grid lg:grid-cols-[300px_1fr] md:grid-cols-1 sm:grid-cols-1 grid-cols-1  gap-10">
            <div className="pt-10">
              <div className="mb-4 flex items-center gap-4">
                <img src={smallLogo} alt="logo" />
                <h3 className="text-[20px] font-bold">DNS</h3>
              </div>
              <p className="text-[14px]">
                Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
                diska. Jinesade bel när feras redorade i belogi. FAR paratyp i
                muvåning, och pesask vyfisat. Viktiga poddradio har un mad och
                inde.{" "}
              </p>
            </div>
            <div className="flex flex-wrap justify-between gap-10  pb-10 lg:pt-10  text-left ">
              <div>
                <h3 className="text-lg font-semibold">Service</h3>
                <div className="border-b-2 w-[35px] border-white"></div>
                <ul className="mt-5 space-y-4 text-[14px] text-[#DDDDDD] list-disc list-inside">
                  <li>Home it work</li>
                  <li>Pricing</li>
                  <li>Blog</li>
                  <li>Demo</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Resources</h3>
                <div className="border-b-2 w-[35px] border-white"></div>
                <ul className="mt-5 space-y-4 text-[14px] text-[#DDDDDD] list-disc list-inside">
                  <li>Home it work</li>
                  <li>Pricing</li>
                  <li>Blog</li>
                  <li>Demo</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">About</h3>
                <div className="border-b-2 w-[35px] border-white"></div>
                <ul className="mt-5 space-y-4 text-[14px] text-[#DDDDDD] list-disc list-inside">
                  <li>Home it work</li>
                  <li>Pricing</li>
                  <li>Blog</li>
                  <li>Demo</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Contact</h3>
                <div className="border-b-2 w-[35px] border-white"></div>
                <div className="mt-5 space-y-4">
                  <p className="flex items-center gap-2 text-[14px] text-[#DDDDDD]">
                    <FaPhoneAlt color="white" /> (406) 555-0120
                  </p>
                  <p className="flex items-center gap-2 text-[14px] text-[#DDDDDD]">
                    <MdEmail color="white" /> mangcoding123@gmail.com
                  </p>
                  <p className="flex items-center gap-2 text-[14px] text-[#DDDDDD]">
                    <FaLocationPin color="white" /> 2972 Westheimer Rd. Santa
                    Ana, IL 85486
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Payment Methods */}

          <div className="flex justify- gap-4 text-2xl my-6">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
            <FaCcAmex />
            <FaCcDiscover />
            <FaGooglePay />
            <FaApplePay />
            <FaStripe />
            <FaCcDinersClub />
          </div>
        </div>

        <div className="border-b-[.5px] border-gray-100/50"></div>
        {/* Social Media */}
        <div className="flex justify-center gap-6 text-lg mt-4">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
        </div>

        {/* Footer Bottom */}
        <p className="text-center text-xs mt-6">
          © 2025 Lift media Online S.L.
        </p>
      </footer>
    </section>
  );
}
