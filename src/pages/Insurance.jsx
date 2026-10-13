import React from 'react'
import { Link } from 'react-router-dom'
import { FiCheck, FiInfo, FiExternalLink, FiArrowRight } from 'react-icons/fi'

/*
  Insurance information for Crisp Dental.
  Items marked [CHECK] depend on your clinic. Confirm them before you publish:
  - whether the clinic is contracted/accredited by SHA, and at which level
  - which private insurers you work with
  SHA benefits and limits can change, so re-check sha.go.ke every few months.
*/

const SHA_DENTAL = [
  'Dental check-ups and consultations',
  'Preventive care such as scaling and cleaning',
  'Tooth extractions',
  'Treatment of dental infections',
  'Other restorative care covered under SHA benefit rules',
]

const STEPS = [
  {
    id: 1,
    title: 'Register with SHA',
    text: 'All residents of Kenya can register, including citizens, refugees and other non-citizens. Registration is done online or at an SHA office.',
  },
  {
    id: 2,
    title: 'Keep your contributions up to date',
    text: 'Your SHA status must be active to use your benefits. Check your status on the SHA platform before your visit.',
  },
  {
    id: 3,
    title: 'Bring your ID',
    text: 'Bring your national ID (or your child’s birth certificate or ID details) so we can verify your SHA details at the clinic.',
  },
  {
    id: 4,
    title: 'We check what is covered',
    text: 'Before treatment, we explain which part of your care SHA covers and what, if anything, you pay yourself.',
  },
]

const FAQS = [
  {
    q: 'Does Crisp Dental accept SHA?',
    a: 'We are [CONTRACTED / IN THE PROCESS OF BEING CONTRACTED] with SHA. [CHECK] Please call us before your visit so we can confirm what applies to your treatment.',
  },
  {
    q: 'Is every dental treatment covered by SHA?',
    a: 'No. SHA covers a defined set of dental services, and there are limits on what it pays. Treatments such as teeth whitening, braces and aligners, and other cosmetic work are generally not covered. We will tell you the cost before we start.',
  },
  {
    q: 'What if my treatment costs more than SHA covers?',
    a: 'You pay the difference. We give you a written treatment plan and price first, so there are no surprises, and we can discuss a payment plan for larger treatments.',
  },
  {
    q: 'Can my children use SHA for dental care?',
    a: 'Yes, if they are registered as dependants under your household on SHA. Bring their details when you book.',
  },
  {
    q: 'Do you work with private insurance?',
    a: 'We work with [LIST YOUR INSURERS]. [CHECK] Cover and limits depend on your policy, so please check your policy or call your insurer, and tell us when you book.',
  },
  {
    q: 'What if I am not registered with SHA?',
    a: 'You are still welcome. You can pay for your visit yourself, and we can help you understand how to register for future visits.',
  },
]

const Insurance = () => {
  return (
    <main className="bg-stone-50 text-stone-900">
      <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:space-y-20 sm:px-6 sm:py-20 lg:px-8">
        {/* Header */}
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold sm:text-5xl">Insurance and SHA</h1>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            Know what your cover pays for before you visit. Here is how dental care works
            with the Social Health Authority (SHA) and private insurance.
          </p>
        </header>

        {/* SHA overview */}
        <section className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Dental care under SHA</h2>
            <p className="mt-4 leading-relaxed text-stone-700">
              The Social Health Authority replaced the National Hospital Insurance Fund
              (NHIF) as Kenya's national health insurance. Dental care is part of the
              benefits, and it covers more than the old NHIF did, which mainly paid for
              tooth extractions.
            </p>
            <p className="mt-4 leading-relaxed text-stone-700">
              SHA pays for a defined set of dental services, up to the limits and tariffs
              it sets. Anything beyond that is paid by you.
            </p>
          </div>

          <div className="rounded-3xl bg-teal-50 p-6 sm:p-8">
            <h3 className="font-semibold">Dental services SHA generally covers</h3>
            <ul className="mt-4 space-y-3">
              {SHA_DENTAL.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-700 text-white">
                    <FiCheck className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-stone-800">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 flex items-start gap-2 text-sm text-stone-600">
              <FiInfo className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" aria-hidden="true" />
              Cosmetic treatments such as whitening, and braces or aligners, are generally
              not covered.
            </p>
          </div>
        </section>

        
        <section>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">How to use SHA at our clinic</h2>
            <p className="mt-3 text-lg leading-relaxed text-stone-600">
              Four simple steps before your visit.
            </p>
          </div>

          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <li key={step.id} className="rounded-2xl bg-white p-5 ring-1 ring-stone-200">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-700 text-sm font-semibold text-white">
                  {step.id}
                </span>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        
        <section className="rounded-3xl bg-white p-6 ring-1 ring-stone-200 sm:p-10">
          <h2 className="text-3xl font-bold">Private insurance</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-stone-700">
            If you have a private medical or dental cover, check your policy for dental
            benefits, yearly limits and whether your insurer needs approval before
            treatment. Tell us your insurer when you book, and we will guide you through
            the paperwork.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold">Common questions</h2>
          <div className="mt-8 max-w-3xl divide-y divide-stone-200 rounded-2xl bg-white ring-1 ring-stone-200">
            {FAQS.map((item) => (
              <details key={item.q} className="group p-5 sm:p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700 [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="text-2xl leading-none text-teal-700 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-stone-600">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

    
        <section className="rounded-2xl bg-stone-100 p-5 text-sm leading-relaxed text-stone-600 sm:p-6">
          <p>
            <strong className="text-stone-800">Please note:</strong> SHA benefits, limits and
            tariffs are set by the Social Health Authority and can change. This page is a
            general guide, not a guarantee of cover. For the latest rules, visit{' '}
            <a
              href="https://sha.go.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-teal-700 hover:underline"
            >
              sha.go.ke
              <FiExternalLink aria-hidden="true" />
            </a>{' '}
            or call us and we will help you check.
          </p>
        </section>

    
        <section className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-teal-700 p-8 text-white sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="text-2xl font-bold">Not sure what your cover includes?</h2>
            <p className="mt-2 text-teal-50">
              Book a visit and mention your insurance. We will explain it before treatment.
            </p>
          </div>
          <Link
            to="/contact#book"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-teal-800 transition-colors hover:bg-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Book an appointment
            <FiArrowRight aria-hidden="true" />
          </Link>
        </section>
      </div>
    </main>
  )
}

export default Insurance