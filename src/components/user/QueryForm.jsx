import React from "react";

const QueryForm = () => {
  return (
    <section>
      <div className="w-full  max-w-[597px bg-white p-6 rounded-lg shadow-lg">
        <form className="flex flex-col gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              className="border h-[42px] border-gray-300 p-3 !rounded-[5px] w-full pl-10"
            />
            <i className="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2F5FA7]"></i>
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="Email *"
              className="border h-[42px] border-gray-300 p-3 !rounded-[5px] w-full pl-10"
            />
            <i className="fas fa-at absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2F5FA7] text-xl"></i>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Subject *"
              className="border h-[42px] border-gray-300 p-3 !rounded-[5px] w-full pl-10"
            />
            <i className="fas fa-heading absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2F5FA7]"></i>
          </div>

          <div className="relative">
            <input
              type="number"
              placeholder="Phone *"
              className="border h-[42px] border-gray-300 p-3 !rounded-[5px] w-full pl-24"
            />

            <select className="!bg-white absolute left-2 top-1/2 transform -translate-y-1/2 border border-gray-300 h-[28px] w-[80px] !rounded-[5px] py- text-black font-bold px-">
              <option value="INR">🇮🇳 INR</option>
              <option value="USD">🇺🇸 USD</option>
              <option value="EUR">🇪🇺 EUR</option>
            </select>
          </div>

          <div className="relative">
            <textarea
              placeholder="Message"
              className="border border-gray-300 p-3 !rounded-[5px] w-full h-32 pl-10"
            />
            <i className="fas fa-comment-dots  absolute left-3 top-3.5 transform translate-y-1 text-[#2F5FA7]"></i>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="privacy" className="w-4 h-4" />
            <label htmlFor="privacy" className="text-sm text-gray-700">
              He leído y acepto la{" "}
              <a href="#" className="!text-blue-400 !underline">
                política de privacidad.
              </a>
            </label>
          </div>

          <button className="bg-[#1A2948] text-white py-3 max-w-[149px] !rounded-[5px] text-lg font-semibold hover:bg-[#15203A]">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default QueryForm;
