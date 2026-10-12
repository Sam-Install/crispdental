import React from "react";
import { Link } from "react-router-dom";
import { FaStethoscope, FaRegSmileBeam, FaTooth, FaChild } from "react-icons/fa";

const services = [
  {
    icon: FaStethoscope,
    title: "Check-ups and cleaning",
    text: "Regular exams and professional cleaning to catch problems early and keep your teeth healthy.",
  },
  {
    icon: FaRegSmileBeam,
    title: "Teeth whitening",
    text: "Safe, effective whitening that brightens your smile several shades in a single visit.",
  },
  {
    icon: FaTooth,
    title: "Braces and aligners",
    text: "Straighten your teeth with options that fit your lifestyle, for both teens and adults.",
  },
  {
    icon: FaChild,
    title: "Children's dentistry",
    text: "Gentle, friendly care that helps kids build healthy habits and feel at ease.",
  },
];

const FourServices = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-24">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Our services
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Complete dental care under one roof, from routine check-ups to
            smile makeovers.
          </p>
        </div>

        {/* Services */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white">
                <Icon size={20} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-black">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-block rounded-full bg-teal-600 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
          >
            See more services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FourServices;