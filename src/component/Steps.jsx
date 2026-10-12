import React from "react";
import { Link } from "react-router-dom";
import {
  FaCalendarCheck,
  FaUserCheck,
  FaSearch,
  FaTooth,
  FaSmile,
} from "react-icons/fa";

const steps = [
  {
    icon: FaCalendarCheck,
    title: "Book or walk in",
    text: "Book online, call us, or simply visit the clinic. We'll find a time that works for you.",
  },
  {
    icon: FaUserCheck,
    title: "Meet your dentist",
    text: "We welcome you, go over your dental history, and listen to your concerns.",
  },
  {
    icon: FaSearch,
    title: "Examination and diagnosis",
    text: "A thorough check-up, with X-rays if needed, so we know exactly what your teeth need.",
  },
  {
    icon: FaTooth,
    title: "Your treatment",
    text: "We explain your options and cost first, then treat you gently and comfortably.",
  },
  {
    icon: FaSmile,
    title: "Leave with a smile",
    text: "You get clear aftercare advice and your next check-up date before you go.",
  },
];

const Steps = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-24">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Steps to get our services
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            From your first visit to walking out the door, here is what to
            expect.
          </p>
        </div>

        {/* Steps */}
        <ol className="mt-12 lg:mt-16 lg:grid lg:grid-cols-5">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="relative flex gap-5 pb-10 last:pb-0 lg:block lg:px-4 lg:pb-0 lg:text-center"
            >
              {/* Connector line to the next step */}
              {i !== steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-[23px] top-12 w-0.5 bg-teal-200 lg:bottom-auto lg:left-1/2 lg:top-[23px] lg:h-0.5 lg:w-full"
                />
              )}

              {/* Icon circle with step number */}
              <div className="relative z-10 h-12 w-12 shrink-0 lg:mx-auto">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs font-semibold text-white">
                  {i + 1}
                </span>
              </div>

              <div className="lg:mt-5">
                <h3 className="text-lg font-semibold text-black">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* CTA */}
        <div className="mt-12 text-center lg:mt-16">
          <Link
            to="/contact"
            className="inline-block rounded-full bg-teal-600 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
          >
            Book appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Steps;