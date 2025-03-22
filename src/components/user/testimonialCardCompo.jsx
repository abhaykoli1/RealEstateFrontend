import React from "react";

const TestimonialCardCompo = ({ id, image, name, post, text }) => {
  return (
    <div className="w-full text-center md:text-left pb-20 px-5">
      <div className="relative text-center">
        <span className="text-5xl text-[#2F5FA7] absolute -top-3 left-10">
          “
        </span>
        <div className="mt-6 flex  w-full text-center flex-col items-center md:items-start">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full mx-auto border-black-500"
          />
          <p className="mt-2 text-lg text-center mx-auto font-semibold text-gray-900">
            {name}
          </p>
          <p className="mx-auto text-[10px] font-normal mb-3">{post}</p>
        </div>
        <p className="text-gray-700 text-lg  leading-relaxed max-w-xl mx-auto">
          {text}
        </p>
        <span className="text-5xl text-[#2F5FA7] absolute -bottom-12 right-4">
          ”
        </span>
      </div>
    </div>
  );
};

export default TestimonialCardCompo;
