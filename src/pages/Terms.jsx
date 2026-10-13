import React from 'react'
import { Link } from 'react-router-dom'

/*
  Terms of service for Crisp Dental's website.
  Check the items marked [CHECK] against your real clinic policies
  (notice period, no-show fee, payment methods), then have a Kenyan
  lawyer review the text before you publish.
*/

const CLINIC = 'Crisp Dental'
const EMAIL = 'info@clinic.com'
const PHONE = '+254 700 000 000'
const UPDATED = 'October 13, 2026'

const SECTIONS = [
  {
    id: 'about',
    title: 'About these terms',
    body: (
      <p>
        These terms explain how you can use the {CLINIC} website and book appointments
        through it. By using this website or submitting our booking form, you agree to
        these terms. If you do not agree, please do not use the website.
      </p>
    ),
  },
  {
    id: 'appointments',
    title: 'Booking appointments',
    body: (
      <>
        <p>
          The booking form on this website sends us a request. Your appointment is not
          confirmed until a member of our team contacts you and confirms the date and
          time.
        </p>
        <p>
          Please give accurate details so we can reach you. We may offer you a different
          time if your preferred slot is not available.
        </p>
      </>
    ),
  },
  {
    id: 'cancellations',
    title: 'Cancellations and late arrivals',
    body: (
      <>
        <p>
          If you cannot attend, please tell us at least [24 hours] before your
          appointment so we can offer the time to another patient. [CHECK]
        </p>
        <p>
          If you arrive late, we will try to see you, but we may need to shorten or
          reschedule your visit so we do not delay other patients. Repeated missed
          appointments without notice may affect your ability to book online.
        </p>
      </>
    ),
  },
  {
    id: 'fees',
    title: 'Fees and payment',
    body: (
      <>
        <p>
          Any prices shown on this website are a guide only. The final cost depends on
          your examination and the treatment you need. We will explain the cost and give
          you a treatment plan before any treatment begins.
        </p>
        <p>
          Payment is due on the day of treatment unless we have agreed a payment plan with
          you in writing. We accept [cash, M-Pesa, cards and approved insurance]. [CHECK]
        </p>
      </>
    ),
  },
  {
    id: 'medical-information',
    title: 'Medical information on this website',
    body: (
      <p>
        The articles, service descriptions and other content on this website are general
        information only. They are not a diagnosis or personal medical advice, and they do
        not replace an examination by a dentist. Always speak to a qualified dentist about
        your own situation.
      </p>
    ),
  },
  {
    id: 'emergencies',
    title: 'Emergencies',
    body: (
      <p>
        Do not use the booking form for emergencies such as severe pain, swelling of the
        face or mouth, heavy bleeding or a knocked-out tooth. Call us directly on{' '}
        <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="text-teal-700 hover:underline">
          {PHONE}
        </a>
        . If you have difficulty breathing or swallowing, go to the nearest hospital
        emergency department immediately.
      </p>
    ),
  },
  {
    id: 'using-website',
    title: 'Using this website',
    body: (
      <>
        <p>When you use this website, you agree that you will not:</p>
        <ul>
          <li>Give false or misleading information in our forms</li>
          <li>Try to access parts of the website or its systems that you are not allowed to</li>
          <li>Send harmful code, spam or abusive messages through the website</li>
          <li>Copy or reuse our content for commercial purposes without our permission</li>
        </ul>
      </>
    ),
  },
  {
    id: 'ownership',
    title: 'Our content',
    body: (
      <p>
        The text, images, logos and design on this website belong to {CLINIC} or are used
        with permission. You may view and print pages for your own personal use, but you
        may not copy, sell or republish our content without our written permission.
      </p>
    ),
  },
  {
    id: 'links',
    title: 'Links to other websites',
    body: (
      <p>
        This website may link to other websites. We do not control them and are not
        responsible for their content or how they handle your information.
      </p>
    ),
  },
  {
    id: 'liability',
    title: 'Our responsibility',
    body: (
      <>
        <p>
          We work to keep this website accurate and available, but we cannot promise it
          will always be free of errors or interruptions. We are not responsible for loss
          caused by the website being unavailable or by relying on general information
          shown on it.
        </p>
        <p>
          Nothing in these terms limits any rights you have under Kenyan law, including
          your rights as a patient and a consumer.
        </p>
      </>
    ),
  },
  {
    id: 'privacy',
    title: 'Your privacy',
    body: (
      <p>
        How we collect and protect your personal information is explained in our{' '}
        <Link to="/privacy-policy" className="text-teal-700 hover:underline">
          Privacy Policy
        </Link>
        . Please read it together with these terms.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to these terms',
    body: (
      <p>
        We may update these terms from time to time. The latest version will always be on
        this page, with the date it was last updated shown at the top. By continuing to
        use the website after a change, you accept the updated terms.
      </p>
    ),
  },
  {
    id: 'law',
    title: 'Governing law',
    body: (
      <p>
        These terms are governed by the laws of Kenya. Any dispute will be dealt with by
        the courts of Kenya.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact us',
    body: (
      <>
        <p>If you have a question about these terms, contact us:</p>
        <ul>
          <li>
            Email:{' '}
            <a href={`mailto:${EMAIL}`} className="text-teal-700 hover:underline">
              {EMAIL}
            </a>
          </li>
          <li>
            Phone:{' '}
            <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="text-teal-700 hover:underline">
              {PHONE}
            </a>
          </li>
        </ul>
      </>
    ),
  },
]

const Terms = () => {
  return (
    <main className="bg-stone-50 text-stone-900">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold sm:text-5xl">Terms of service</h1>
          <p className="mt-4 text-stone-500">Last updated: {UPDATED}</p>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            These terms explain the rules for using our website and booking appointments
            with us, in plain language.
          </p>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-[240px_1fr]">
          
          <nav aria-label="Contents" className="hidden lg:block">
            <div className="sticky top-8">
              <p className="mb-3 font-semibold">On this page</p>
              <ul className="space-y-2 border-l border-stone-200 text-sm">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px block border-l border-transparent pl-4 text-stone-600 hover:border-teal-700 hover:text-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-700"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

        
          <article className="max-w-3xl space-y-10 rounded-3xl bg-white p-6 ring-1 ring-stone-200 sm:p-10">
            {SECTIONS.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-8">
                <h2 className="text-2xl font-semibold">{s.title}</h2>
                <div className="mt-3 space-y-3 leading-relaxed text-stone-700 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-6">
                  {s.body}
                </div>
              </section>
            ))}
          </article>
        </div>
      </div>
    </main>
  )
}

export default Terms