import React from "react";
import { FaUserMd, FaShieldAlt, FaSmile, FaClock } from "react-icons/fa";
import dt from '../assets/dent.jpeg'


const reasons = [
  {
    icon: FaUserMd,
    title: "Experienced dentists",
    text: "Qualified specialists who explain every step before they begin.",
  },
  {
    icon: FaSmile,
    title: "Comfortable, gentle care",
    text: "Modern techniques that keep treatment calm and pain-free.",
  },
  {
    icon: FaShieldAlt,
    title: "Clean and safe",
    text: "Hospital-grade sterilisation for every tool, every visit.",
  },
  {
    icon: FaClock,
    title: "Flexible appointments",
    text: "Early, late, and weekend slots that fit around your day.",
  },
];

const Trust = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-16 lg:gap-16 lg:px-8 lg:py-24">
    
        <div>
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Why clients trust us with their smiles
          </h2>
          <p className="mt-4 max-w-xl text-base text-gray-900 sm:text-lg">
            Thousands of patients choose us for honest advice, skilled hands,
            and a clinic that feels welcoming from the moment they walk in.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl bg-white p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

    
        <div className="relative">
          <img
            src={dt}
            alt="Dentist caring for a patient"
            className="h-80 w-full rounded-3xl bg-blue-100 object-cover sm:h-96 md:h-[560px] lg:h-[640px]"
          />
          <div className="absolute -bottom-5 left-4 rounded-2xl bg-white px-5 py-4 shadow-lg sm:left-6">
            <p className="text-3xl font-bold leading-none text-gray-900">15+</p>
            <p className="mt-1 text-sm text-gray-600">years of experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;