import React, { useEffect, useState } from "react";
import Banner from "../../assets/Banner.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCardCompo from "../../components/user/blogCardCompo";
import property from "../../assets/property.png";
import QueryForm from "../../components/user/QueryForm";
import axios from "axios";
import config from "../../common/config";
import { useParams } from "react-router-dom"; // If using React Router

// const blogs = [
//   {
//     image: property,
//     date: "10 March",
//     title: "Top 5 Resources for Writing Excellent Academic Assignments",
//     description:
//       " of an individual's work. In the following lines, we'll look at some of the research tools available online that can make collecting details for an assignment much more straightforward for students, as well ",
//     link: "#",
//   },
//   {
//     image: property,
//     date: "10 March",
//     title: "Top 5 Resources for Writing Excellent Academic Assignments",
//     description:
//       " of an individual's work. In the following lines, we'll look at some of the research tools available online that can make collecting details for an assignment much more straightforward for students, as well ",
//     link: "#",
//   },
//   {
//     image: property,
//     date: "10 March",
//     title: "Top 5 Resources for Writing Excellent Academic Assignments",
//     description:
//       " of an individual's work. In the following lines, we'll look at some of the research tools available online that can make collecting details for an assignment much more straightforward for students, as well ",
//     link: "#",
//   },
//   {
//     image: property,
//     date: "10 March",
//     title: "Top 5 Resources for Writing Excellent Academic Assignments",
//     description:
//       " of an individual's work. In the following lines, we'll look at some of the research tools available online that can make collecting details for an assignment much more straightforward for students, as well ",
//     link: "#",
//   },
//   {
//     image: property,
//     date: "10 March",
//     title: "Top 5 Resources for Writing Excellent Academic Assignments",
//     description:
//       " of an individual's work. In the following lines, we'll look at some of the research tools available online that can make collecting details for an assignment much more straightforward for students, as well ",
//     link: "#",
//   },
//   {
//     image: property,
//     date: "10 March",
//     title: "Top 5 Resources for Writing Excellent Academic Assignments",
//     description:
//       " of an individual's work. In the following lines, we'll look at some of the research tools available online that can make collecting details for an assignment much more straightforward for students, as well ",
//     link: "#",
//   },
// ];
const PerticularBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // console.log(blogs);
  const fetchBlogs = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(`${config.API_URL}/api/blog`);
      setBlogs(response.data.data);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const settings = {
    arrows: false, // Disable navi
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 cards at a time
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 612,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { seoTitle } = useParams(); // Get the SEO title from URL params

  const [blog, setBlog] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  console.log("blog :", blog);
  const fetchBlog = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `${config.API_URL}/api/blog/seo/${seoTitle}`
      );
      console.log(response);
      setBlog(response.data.data);
    } catch (err) {
      console.log(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [seoTitle]);
  return (
    <div className="max-w-[1450px] mx-auto p-4 lg:mt-0 md:mt-0 -mt-10">
      <img
        src={Banner}
        alt="Blog Image"
        className="w-full h-auto rounded-lg mt-5"
      />
      <div className="grid lg:grid-cols-[60%_1fr] md:grid-cols-[55%_1fr]  sm:grid-cols-1 grid-cols-1  gap-6">
        {/* Blog Content */}
        <div className="md:col-span-">
          {blog ? (
            <div className=" bg-white p-5 rounded-[5px] shadow-lg  pb-5">
              <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
              <p className="text-gray-700 leading-relaxed">
                {blog.description}
              </p>
              {/* <p className="text-gray-700 leading-relaxed mt-2">
                The practice of providing patients with the best care possible
                while also treating their illnesses is at the heart of the
                medical profession. Because the medical sector encompasses a
                wide range of specialities, including endocrinology,
                biochemistry, and biomedical science. As you are aware, the
                medical field encompasses a wide range of occupations other than
                those of the doctor and patient, including nurses, ward boys,
                and others. This is because it requires a great deal of medical
                research, medical specialities for assignment writing, and
                patient care.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Students have a variety of opportunities in the medical
                profession to gain the advantages of assisting people and
                reducing their pain. Additionally, they can engage with the
                newest innovations and develop into professionals in research
                and technology. Along with these, medicine offers a wide range
                of job options, including those in research, nursing, medicine,
                public health, and many more. A person who studies medicine can
                work anywhere in the globe and enjoy high career stability.
                Additionally, this field property provides opportunities and
                constant excellent security. Therefore, choosing a career in
                this field to achieve all of your personal and professional
                goals while promoting humanities is a fantastic decision. Let's
                look at some of the most original and popular concepts that can
                give you a general notion of your study topic in the section
                that follows.
              </p> */}

              <p className="text-gray-700 leading-relaxed mt-3">
                Veterinary Medicine Research Paper Topics
              </p>

              <ol class="space-y-1 text-gray-700 mt-3">
                <li class="list-inside list-decimal">
                  Diseases: Describe the most common illnesses among pets.
                </li>
                <li class="list-inside list-decimal">
                  Is human food safe for animals? Explain.
                </li>
                <li class="list-inside list-decimal">
                  How essential are vaccinations for pets?
                </li>
                <li class="list-inside list-decimal">
                  The health of pets with climate change: Talk about the
                  effects.
                </li>
                <li class="list-inside list-decimal">
                  Comparative oncology: What is it?
                </li>
                <li class="list-inside list-decimal">
                  What diseases can pets transmit to humans? How can you keep
                  yourself safe? Discuss.
                </li>
                <li class="list-inside list-decimal">
                  Farm animals: How to care for them?
                </li>
                <li class="list-inside list-decimal">
                  Explain the effects in terms of parasitology.
                </li>
                <li class="list-inside list-decimal">
                  Describe the behaviour issues that pets have and how to solve
                  them.
                </li>
                <li class="list-inside list-decimal">
                  Describe the various types of pet therapy.
                </li>
                <li class="list-inside list-decimal">
                  What is veterinary telemedicine? Explain.
                </li>
                <li class="list-inside list-decimal">
                  What is a health strategy? Discuss.
                </li>
                <li class="list-inside list-decimal">
                  How significant are animal nutrition and diet? Explain.
                </li>
                <li class="list-inside list-decimal">
                  Infection illnesses: Explain the various sorts of sickness.
                </li>
              </ol>
              <div className="border-b-2 border-[#7A9DC4]  my-5"></div>

              {blogs.length > 1 ? (
                <div>
                  <h2 className="text-[22px] font-semibold">
                    More Related Blogs
                  </h2>
                  <div className="max-w-screen-xl mx-auto pb-10 px-0">
                    <Slider {...settings}>
                      {blogs.map((blog, index) => (
                        <div key={index} className="slick-slide  my-5">
                          <BlogCardCompo {...blog} />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            "Loading..."
          )}
        </div>

        {/* Contact Form Section */}
        <div>
          <QueryForm />
        </div>
      </div>
    </div>
  );
};

export default PerticularBlog;
