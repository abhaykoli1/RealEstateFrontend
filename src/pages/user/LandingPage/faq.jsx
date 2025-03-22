import { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import QueryForm from "../../../components/user/QueryForm";

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

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F3F4F7] py-5 mt-8">
      <div className="max-w-[1320px] mx-auto px-5  flex flex-col lg:flex-row   gap-10">
        {/* Left Side - FAQ Accordion */}
        <div className="w-full lg:w-full">
          <h2 className="lg:text-[32px] md:text-[32px] text-[25px] font-bold text-[#1A2948] mb-2">
            Why choose haus & haus
          </h2>
          <span className="border-b-[3px]  border-[#A9B9D6] flex w-[150px] mb-6"></span>
          <div>
            {faqData.map((faq, index) => (
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
          {/* <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Abhay Das"
              className="border h-[42px] border-gray-300  p-3 rounded-sm w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border h-[42px] border-gray-300 p-3 rounded-sm w-full"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border h-[42px] border-gray-300 p-3 rounded-sm w-full"
            />
            <input
              type="number"
              placeholder="Phone"
              className="border h-[42px] border-gray-300 p-3 rounded-sm w-full"
            />
            <textarea
              placeholder="Message"
              className="border  border-gray-300 p-3 rounded-sm w-full h-32"
            />
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
          </form> */}
        </div>
      </div>
    </div>
  );
}
