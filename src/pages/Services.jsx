import React from 'react'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import {
  FaStethoscope,
  FaTooth,
  FaMagic,
  FaSmileBeam,
  FaChild,
  FaAmbulance,
} from 'react-icons/fa'

// Icons are looked up by name, so your backend can just send a string like "checkup".
const ICONS = {
  checkup: FaStethoscope,
  cleaning: FaTooth,
  whitening: FaMagic,
  braces: FaSmileBeam,
  kids: FaChild,
  emergency: FaAmbulance,
}

const SERVICES = [
  {
    id: 1,
    icon: 'checkup',
    title: 'General check-up',
    description:
      'A full exam to catch problems early and keep your teeth and gums healthy.',
    points: ['Oral exam and X-rays', 'Gum health check', 'Personal care advice'],
  },
  {
    id: 2,
    icon: 'cleaning',
    title: 'Teeth cleaning',
    description:
      'Professional cleaning that removes plaque and tartar that brushing cannot reach.',
    points: ['Scale and polish', 'Fresher breath', 'Helps prevent gum disease'],
  },
  {
    id: 3,
    icon: 'whitening',
    title: 'Teeth whitening',
    description:
      'Safe, supervised whitening that lifts stains for a brighter smile.',
    points: ['Visible results in one visit', 'Gentle on teeth', 'Tailored to your shade goals'],
  },
  {
    id: 4,
    icon: 'braces',
    title: 'Braces and aligners',
    description:
      'Straighten your teeth with traditional braces or clear aligners, for teens and adults.',
    points: ['Free first consultation', 'Fixed and clear options', 'Regular progress checks'],
  },
  {
    id: 5,
    icon: 'kids',
    title: 'Kids dentistry',
    description:
      'Gentle, friendly care that helps children feel calm and builds good habits early.',
    points: ['First-visit friendly', 'Fluoride and sealants', 'Tips for parents'],
  },
  {
    id: 6,
    icon: 'emergency',
    title: 'Tooth pain and emergencies',
    description:
      'Fast help for toothache, swelling, broken or knocked-out teeth.',
    points: ['Same-day visits when possible', 'Pain relief first', 'Clear treatment plan'],
  },
]

const Services = () => {
  return (
    <main className="bg-stone-50 text-stone-900">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold sm:text-5xl">Our services</h1>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            Complete dental care for you and your family, all in one place.
          </p>
        </header>

      
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon] || FaTooth
            return (
              <article
                key={service.id}
                className="group flex flex-col gap-5 rounded-2xl bg-white p-6 ring-1 ring-stone-200 transition-colors hover:ring-teal-600"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-2xl text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                  <Icon aria-hidden="true" />
                </span>

                <div>
                  <h2 className="text-xl font-semibold">{service.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 text-sm text-stone-700">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <FiCheck
                        className="mt-0.5 h-4 w-4 shrink-0 text-teal-700"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact#book"
                  className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold text-teal-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
                >
                  Book this service
                  <FiArrowRight aria-hidden="true" />
                </a>
              </article>
            )
          })}
        </div>

      
        <section className="mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl bg-teal-700 p-8 text-white sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="text-2xl font-bold">Not sure what you need?</h2>
            <p className="mt-2 text-teal-50">
              Book a check-up and our dentist will recommend the right treatment.
            </p>
          </div>
          <a
            href="/contact#book"
            className="shrink-0 rounded-full bg-white px-6 py-3 font-semibold text-teal-800 transition-colors hover:bg-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Book an appointment
          </a>
        </section>
      </div>
    </main>
  )
}

export default Services