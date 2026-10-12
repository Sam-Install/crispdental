import React from "react";
import { Link } from "react-router-dom";
import dct1 from '../assets/doctor1.jpeg';
import dct2 from '../assets/doctor2.jpeg';
import dct3 from '../assets/doctor3.jpeg';
import dct4 from '../assets/doctor4.jpeg'

// Replace names, roles, and image paths with your own
const team = [
  {
    name: "Dr. Amina Bello",
    role: "Lead Dentist",
    image: dct1,
  },
  {
    name: "Dr. Chidi Okafor",
    role: "Orthodontist",
    image: dct2,
  },
  {
    name: "Dr. Fatima Yusuf",
    role: "Pediatric Dentist",
    image: dct3,
  },
  {
    name: "Dr. David Adeyemi",
    role: "Oral Surgeon",
    image: dct4,
  },
];

const SmallTeam = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-24">
        
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Meet our team
          </h2>
        </div>

        
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:mt-16 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name}>
              <img
                src={member.image}
                alt={`${member.name}, ${member.role}`}
                className="aspect-[4/5] w-full rounded-2xl bg-teal-50 object-cover"
              />
              <h3 className="mt-4 text-base font-semibold text-black sm:text-lg">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>

    
        <div className="mt-12 text-center">
          <Link
            to="/team"
            className="inline-block rounded-full bg-teal-600 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
          >
            View all team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SmallTeam;