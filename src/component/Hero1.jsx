import React from "react";
import { Link } from "react-router-dom";
import { FiPhone, FiClock } from "react-icons/fi";
import heroimage from "../assets/h1.jpeg";

// Placeholder faces from pravatar.cc so the avatars always load.
// Replace with your own images (imports from ../assets) when you have them.
const clientImages = [
  "https://i.pravatar.cc/96?img=32",
  "https://i.pravatar.cc/96?img=15",
  "https://i.pravatar.cc/96?img=47",
];

// Change these to the clinic's real number (Kenya numbers start with +254)
const PHONE_DISPLAY = "+254 700 000 000";
const PHONE_LINK = "tel:+254700000000";

const Hero1 = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:gap-12 md:py-16 lg:gap-16 lg:px-8 lg:py-24">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
            Healthy smiles start here
          </h1>

          <h2 className="mt-4 text-xl font-semibold text-teal-700 sm:text-2xl">
            Gentle, modern dental care for the whole family
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-gray-700 md:mx-0">
            From routine check-ups to cosmetic treatments, our experienced team
            makes every visit comfortable, clear, and stress-free. Book today
            and take the first step toward a smile you love.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
            <Link
              to="/contact#book"
              className="inline-block w-full rounded-full bg-teal-600 px-8 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 sm:w-auto"
            >
              Book appointment
            </Link>

            <a
              href={PHONE_LINK}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold text-teal-700 ring-1 ring-teal-600 transition-colors hover:bg-teal-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 sm:w-auto"
            >
              <FiPhone aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
          </div>

          {/* Opening days */}
          <p className="mt-5 flex items-center justify-center gap-2 text-sm font-medium text-gray-700 md:justify-start">
            <FiClock className="text-teal-700" aria-hidden="true" />
            Open Monday to Sunday
          </p>

          {/* Social proof */}
          <div className="mt-8 flex items-center justify-center gap-4 md:justify-start">
            <div className="flex -space-x-3">
              {clientImages.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Satisfied client ${i + 1}`}
                  className="h-12 w-12 rounded-full border-2 border-white bg-teal-50 object-cover"
                />
              ))}
            </div>
            <div className="text-left">
              <p className="text-xl font-bold leading-none text-black">1k+</p>
              <p className="mt-1 text-sm text-gray-600">satisfied clients</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-teal-50">
            <img
              src={heroimage}
              alt="Smiling patient at our dental clinic"
              className="h-80 w-full object-cover sm:h-96 md:h-[480px] lg:h-[560px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;