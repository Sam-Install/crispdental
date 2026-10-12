import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import d3 from '../assets/dent3.jpeg';



const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "Most people should have a check-up and cleaning every six months. If you have gum disease or other ongoing issues, we may suggest more frequent visits.",
  },
  {
    question: "Is dental treatment painful?",
    answer:
      "We use modern techniques and local anaesthesia, so most treatments cause little to no pain. If you feel anxious, tell us and we'll go at your pace.",
  },
  {
    question: "Do I need to book an appointment first?",
    answer:
      "Booking is best because it keeps your waiting time short. We also accommodate walk-ins and dental emergencies whenever we have space.",
  },
  {
    question: "How long does teeth whitening last?",
    answer:
      "Professional whitening usually lasts between one and three years, depending on your diet and habits such as drinking coffee, tea, or smoking.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Yes. We care for patients of all ages, and our team is gentle and patient with children, from their very first visit.",
  },
  {
    question: "What should I do in a dental emergency?",
    answer:
      "Call us right away. If a tooth is knocked out, hold it by the crown, rinse it gently, and keep it in milk or back in its socket until you reach us.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((current) => (current === i ? null : i));

  return (
    <section className="bg-gray-50">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:gap-12 md:py-16 lg:gap-16 lg:px-8 lg:py-24">
    
        <div>
          <img
            src={d3}
            alt="Friendly dentist answering a patient's questions"
            className="h-80 w-full rounded-3xl bg-teal-50 object-cover sm:h-96 md:h-[560px] lg:h-[640px]"
          />
        </div>

    
        <div>
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 max-w-xl text-base text-gray-600 sm:text-lg">
            Quick answers to what patients ask us most.
          </p>

          <div className="mt-8 space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-gray-200 bg-white"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                    >
                      <span className="text-base font-semibold text-black sm:text-lg">
                        {faq.question}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                          isOpen
                            ? "bg-teal-600 text-white"
                            : "bg-teal-50 text-teal-700"
                        }`}
                      >
                        <FiPlus
                          size={18}
                          aria-hidden="true"
                          className={`transition-transform duration-200 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    className={`grid transition-all duration-200 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;