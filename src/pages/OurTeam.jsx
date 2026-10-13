import React from 'react'
import { FiAward, FiBookOpen } from 'react-icons/fi'
import dct1 from '../assets/doctor1.jpeg'
import dct2 from '../assets/doctor2.jpeg'
import dct3 from '../assets/doctor3.jpeg'
import dct4 from '../assets/doctor4.jpeg'

// Names, roles and images match the team section on the home page.
// Experience, education and bio are sample text — replace with the real details,
// or load everything from your backend later.
// Each doctor needs: id, name, role, experience, education, bio, image
const DOCTORS = [
  {
    id: 1,
    name: 'Dr. Amina Bello',
    role: 'Lead Dentist',
    experience: '15 years of experience',
    education: 'Add degree and university',
    bio: 'Amina leads our clinic and focuses on general dentistry and preventive care. She is known for explaining every step so patients feel at ease.',
    image: dct1,
  },
  {
    id: 2,
    name: 'Dr. Chidi Okafor',
    role: 'Orthodontist',
    experience: '10 years of experience',
    education: 'Add degree and university',
    bio: 'Chidi specialises in braces and clear aligners for children, teens and adults, with a focus on long-lasting results.',
    image: dct2,
  },
  {
    id: 3,
    name: 'Dr. Fatima Yusuf',
    role: 'Pediatric Dentist',
    experience: '8 years of experience',
    education: 'Add degree and university',
    bio: 'Fatima makes first visits calm and fun for young patients, and teaches parents simple habits for healthy teeth.',
    image: dct3,
  },
  {
    id: 4,
    name: 'Dr. David Adeyemi',
    role: 'Oral Surgeon',
    experience: '12 years of experience',
    education: 'Add degree and university',
    bio: 'David performs tooth extractions, wisdom tooth removal and other oral surgery, with a focus on comfort and a smooth recovery.',
    image: dct4,
  },
]

const OurTeam = () => {
  return (
    <main className="bg-stone-50 text-stone-900">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Header */}
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold sm:text-5xl">Meet our team</h1>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            Our dentists are experienced, caring and here to help you keep a
            healthy smile.
          </p>
        </header>

        {/* Doctors */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {DOCTORS.map((doc) => (
            <article
              key={doc.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-stone-200"
            >
              <div className="aspect-[4/5] overflow-hidden bg-teal-50">
                <img
                  src={doc.image}
                  alt={`${doc.name}, ${doc.role}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5">
                <div>
                  <h2 className="text-lg font-semibold">{doc.name}</h2>
                  <p className="font-medium text-teal-700">{doc.role}</p>
                </div>

                <p className="text-sm leading-relaxed text-stone-600">{doc.bio}</p>

                <ul className="mt-auto space-y-1.5 pt-2 text-sm text-stone-500">
                  <li className="flex items-center gap-2">
                    <FiAward className="shrink-0 text-teal-700" aria-hidden="true" />
                    {doc.experience}
                  </li>
                  <li className="flex items-center gap-2">
                    <FiBookOpen className="shrink-0 text-teal-700" aria-hidden="true" />
                    {doc.education}
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

export default OurTeam