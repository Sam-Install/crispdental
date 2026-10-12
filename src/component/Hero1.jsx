import React from "react";
import heroimage from '../assets/h1.jpeg'

const clientImages = [
  "/images/client-1.jpg",
  "/images/client-2.jpg",
  "/images/client-3.jpg",
];

const Hero1 = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:gap-12 md:py-16 lg:gap-16 lg:px-8 lg:py-24">
        {/* Left: image */}


  <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
            Healthy smiles start here
          </h1>

          <h2 className="mt-4 text-xl font-semibold text-teal-700 sm:text-2xl">
            Gentle, modern dental care for the whole family
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg md:mx-0">
            From routine check-ups to cosmetic treatments, our experienced team
            makes every visit comfortable, clear, and stress-free. Book today
            and take the first step toward a smile you love.
          </p>

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block rounded-full bg-teal-600 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
            >
              Book appointment
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-10 flex items-center justify-center gap-4 md:justify-start">
            <div className="flex -space-x-3">
              {clientImages.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Satisfied client ${i + 1}`}
                  className="h-12 w-12 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className="text-left">
              <p className="text-xl font-bold leading-none text-black">1k+</p>
              <p className="mt-1 text-sm text-gray-600">satisfied clients</p>
            </div>
          </div>
        </div>


        
        {/* Right: content */}



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



