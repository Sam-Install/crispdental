import React from 'react'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
import dct2 from '../assets/doctor2.jpeg'
import abs from '../assets/abs.jpeg'


const STEPS = [
  {
    id: 1,
    title: 'Book online or by phone',
    text: 'Choose a date and time that suits you. We confirm quickly, usually the same day.',
  },
  {
    id: 2,
    title: 'Meet your dentist',
    text: 'We check your teeth, listen to your concerns and explain what we find in plain language.',
  },
  {
    id: 3,
    title: 'Get a clear plan and price',
    text: 'You receive a written treatment plan with the full cost before anything starts.',
  },
  {
    id: 4,
    title: 'Comfortable treatment',
    text: 'Treatment is gentle and paced to you. Pain relief comes first, and you can pause at any time.',
  },
  {
    id: 5,
    title: 'Follow-up care',
    text: 'We check in after your visit and remind you when your next check-up is due.',
  },
]

const AFFORDABLE = [
  'Clear prices given upfront, with no surprise charges',
  'Flexible payment plans for larger treatments',
  'We accept major insurance providers',
  'Affordable check-ups and cleanings for the whole family',
]

const About = () => {
  return (
    <main className="bg-stone-50 text-stone-900">
      <div className="mx-auto max-w-6xl space-y-20 px-4 py-16 sm:space-y-24 sm:px-6 sm:py-20 lg:px-8">
      
        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Dental care that feels comfortable and honest
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-stone-600">
              We are a family dental clinic with a simple goal: to help every patient
              keep a healthy smile without fear or stress. Our team has been caring for
              the community for over 10 years.
            </p>
            <p className="mt-4 leading-relaxed text-stone-600">
              From first check-ups to advanced treatment, we take the time to listen,
              explain your options and treat you with respect.
            </p>
            <a
              href="/contact#book"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              Book an appointment
              <FiArrowRight aria-hidden="true" />
            </a>
          </div>

          <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-stone-200">
            <img
              src={abs}
              alt="Inside our dental clinic"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

      
        <section>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">A smooth process from start to finish</h2>
            <p className="mt-3 text-lg leading-relaxed text-stone-600">
              Here is what to expect when you visit us.
            </p>
          </div>

          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((step) => (
              <li
                key={step.id}
                className="rounded-2xl bg-white p-5 ring-1 ring-stone-200"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-700 text-sm font-semibold text-white">
                  {step.id}
                </span>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

  
        <section className="grid items-center gap-10 rounded-3xl bg-teal-50 p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Quality care that fits your budget</h2>
            <p className="mt-4 leading-relaxed text-stone-700">
              Good dental care should not be out of reach. We keep our prices fair and
              explain every cost before treatment, so you can decide with confidence.
            </p>
          </div>

          <ul className="space-y-4">
            {AFFORDABLE.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-700 text-white">
                  <FiCheck className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-stone-800">{item}</span>
              </li>
            ))}
          </ul>
        </section>

      
        <section className="grid items-center gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div className="mx-auto w-full max-w-sm">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-stone-200">
              <img
                src={dct2}
                alt="Portrait of our CEO"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <figure>
            <h2 className="text-3xl font-bold">A word from our CEO</h2>
            <blockquote className="mt-6 space-y-4 text-lg leading-relaxed text-stone-700">
              <p>
                When we started this clinic, we wanted a place where people could walk in
                without worry and leave with a smile. That is still what drives us today.
              </p>
              <p>
                Every patient is treated the way we would want our own family to be
                treated: with patience, honesty and care. Thank you for trusting us with
                your smile.
              </p>
            </blockquote>
            <figcaption className="mt-6">
              <p className="font-semibold">Dr. Full Name</p>
              <p className="text-stone-500">Founder and CEO</p>
            </figcaption>
          </figure>
        </section>
      </div>
    </main>
  )
}

export default About