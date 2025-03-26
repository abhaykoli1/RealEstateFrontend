import React from "react";

const BlogCardCompo = ({
  image,
  date,
  title,
  description,
  link,
  createdAt,
  seo_title,
}) => {
  return (
    <div className="bg-white shadow-lg  rounded-[5px] overflow-hidden  mx-3">
      <div className="relative p-4">
        <img
          src={image}
          alt={title}
          className="w-full h-[216px] object-cover rounded-[5px]"
        />
        <div className="absolute top-6 left-6 bg-[rgba(255,255,255,0.7)] px-3 py-1 rounded-[5px] text-sm font-semibold shadow-md">
          {new Date(createdAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
          })}
        </div>
      </div>
      <div className="px-4 pb-4">
        <h3 className="font-bold text-[15px]">{title}</h3>
        <p className="text-gray-600 text-[11px] mt-2">
          {description.split(" ").slice(0, 30).join(" ")}
          {description.split(" ").length > 30 && "..."}
        </p>

        <a
          href={`/Blog/${seo_title}`}
          className="text-blue-600 text-[12px] font-semibold mt-3 inline-block"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default BlogCardCompo;
