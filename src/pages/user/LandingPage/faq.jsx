import { useEffect, useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import QueryForm from "../../../components/user/QueryForm";
import axios from "axios";
import config from "../../../common/config";

const faqData = [
  {
    question: "What real estate services do haus & haus offer?",
    answer: `Yes. Whether you're looking to invest in a ready property or are searching for an off-plan investment, our property experts are on hand to help you find the best opportunities that suit your needs. 
    Maybe you’re a seasoned investor, or perhaps you just want some extra info – whatever your case, we’ll provide useful advice to steer you in the right direction.`,
  },
  {
    question: "Which Dubai communities do haus & haus cover?",
    answer: `Yes. Whether you're looking to invest in a ready property or are searching for an off-plan investment, our property experts are on hand to help you find the best opportunities that suit your needs. 
    Maybe you’re a seasoned investor, or perhaps you just want some extra info – whatever your case, we’ll provide useful advice to steer you in the right direction.`,
  },
  {
    question: "Is haus & haus Group a leading real estate agency?",
    answer: `Yes. Whether you're looking to invest in a ready property or are searching for an off-plan investment, our property experts are on hand to help you find the best opportunities that suit your needs. 
    Maybe you’re a seasoned investor, or perhaps you just want some extra info – whatever your case, we’ll provide useful advice to steer you in the right direction.`,
  },
  {
    question: "Can haus & haus help me with real estate investments?",
    answer: `Yes. Whether you're looking to invest in a ready property or are searching for an off-plan investment, our property experts are on hand to help you find the best opportunities that suit your needs. 
      Maybe you’re a seasoned investor, or perhaps you just want some extra info – whatever your case, we’ll provide useful advice to steer you in the right direction.`,
  },
  {
    question: "Is haus & haus Group a leading real estate agency?",
    answer: `Yes. Whether you're looking to invest in a ready property or are searching for an off-plan investment, our property experts are on hand to help you find the best opportunities that suit your needs. 
    Maybe you’re a seasoned investor, or perhaps you just want some extra info – whatever your case, we’ll provide useful advice to steer you in the right direction.`,
  },
];

export default function FAQWithForm() {
  const [openIndex, setOpenIndex] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/api/faqs`);
        setFaqs(response.data);
        console.log(response.data);
      } catch (error) {
        setError("Failed to fetch FAQs");
      }
      setLoading(false);
    };
    fetchFaqs();
  }, []);

  return (
    <div className="bg-[#F3F4F7] py-5 mt-8">
      <div className="max-w-[1320px] mx-auto px-5  flex flex-col lg:flex-row   gap-10">
        {/* Left Side - FAQ Accordion */}
        <div className="w-full lg:w-full">
          <h2 className="lg:text-[32px] md:text-[32px] text-[25px] font-bold text-[#1A2948] mb-2">
            Why Choose DNS
          </h2>
          <span className="border-b-[3px]  border-[#A9B9D6] flex w-[150px] mb-6"></span>
          <div>
            {faqs.length > 0 &&
              faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-300">
                  <a
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center py-5 text-lg font-normal text-[#1A2948] focus:outline-none"
                  >
                    {faq.question}
                    {openIndex === index ? (
                      <IoRemove className="text-2xl text-[#1A2948]" />
                    ) : (
                      <IoAdd className="text-2xl text-[#1A2948]" />
                    )}
                  </a>
                  {openIndex === index && (
                    <div className="pb-5 text-gray-700 text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full lg:w-1/2  shadow-lg">
          <QueryForm />
        </div>
      </div>
    </div>
  );
}
