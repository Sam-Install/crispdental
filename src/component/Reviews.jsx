import React from "react";
import cl1 from '../assets/client1.jpeg';
import cl2 from '../assets/client2.jpeg';
import cl3 from '../assets/client3.jpeg';

const reviews = [
  {
    name: "Ngozi Eze",
    image: cl1,
    review:
      "I used to dread the dentist, but the team here made me feel calm from the start. My treatment was gentle and painless.",
  },
  {
    name: "Musa Ibrahim",
    image: cl2,
    review:
      "Everything was clearly explained, including the cost, before any work began. Clean clinic, friendly staff, and no long wait.",
  },
  {
    name: "Tolu Adebayo",
    image: cl3,
    review:
      "They took great care of my kids and made them feel at ease. We now bring the whole family for our check-ups.",
  },
];

const Reviews = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-24">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            What our clients say
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Real words from patients who trusted us with their smiles.
          </p>
        </div>

    
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {reviews.map((item) => (
            <div key={item.name} className="rounded-2xl bg-gray-50 p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 shrink-0 rounded-full bg-teal-50 object-cover"
                />
                <h3 className="text-lg font-semibold text-black">
                  {item.name}
                </h3>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-gray-600 sm:text-base">
                {item.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;