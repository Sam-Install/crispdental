import React from 'react'



const CLINIC = 'Crisp Dental'
const EMAIL = 'info@clinic.com'
const PHONE = '+254 700 000 000'
const ADDRESS = '123 Clinic Street, Town Name, Kenya'
const UPDATED = 'October 13, 2026'

const SECTIONS = [
  {
    id: 'who-we-are',
    title: 'Who we are',
    body: (
      <>
        <p>
          {CLINIC} ("we", "us", "our") is a dental clinic in Kenya. We are the data
          controller for the personal information you share with us through this website
          and at our clinic. We are registered with the Office of the Data Protection
          Commissioner (ODPC) under registration number [ODPC REGISTRATION NUMBER].
        </p>
        <p>
          This policy explains what information we collect, why we collect it, and how we
          protect it, in line with the Kenya Data Protection Act, 2019.
        </p>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    title: 'Information we collect',
    body: (
      <>
        <p>When you book an appointment or contact us, we may collect:</p>
        <ul>
          <li>Your full name, phone number and email address</li>
          <li>The service you need and your preferred date and time</li>
          <li>Any message you write, which may include details about your dental health</li>
        </ul>
        <p>
          When you visit our clinic, we also collect the health and treatment information
          needed to care for you. When you browse this website, we may collect basic
          technical data such as your device type, browser and pages visited.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use-it',
    title: 'How we use your information',
    body: (
      <>
        <p>We use your information to:</p>
        <ul>
          <li>Book, confirm and manage your appointments</li>
          <li>Contact you by phone, SMS or email about your visit</li>
          <li>Provide dental care and keep accurate treatment records</li>
          <li>Reply to your questions and requests</li>
          <li>Improve our website and services</li>
          <li>Meet our legal and professional obligations</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </>
    ),
  },
  {
    id: 'legal-basis',
    title: 'Why we are allowed to use your information',
    body: (
      <p>
        We process your information with your consent (for example, when you submit our
        booking form), to provide the healthcare services you request, and where the law
        requires it. You can withdraw your consent at any time by contacting us, though
        this may affect our ability to provide some services.
      </p>
    ),
  },
  {
    id: 'health-information',
    title: 'Health information',
    body: (
      <p>
        Information about your health is sensitive personal data. We handle it with extra
        care. Only staff involved in your care or in running the clinic can access it, and
        they are bound by professional confidentiality.
      </p>
    ),
  },
  {
    id: 'sharing',
    title: 'Who we share it with',
    body: (
      <>
        <p>We only share your information when necessary, and only with:</p>
        <ul>
          <li>Our dentists and clinic staff who are involved in your care</li>
          <li>
            Trusted service providers who help us run the clinic, such as website hosting,
            appointment or messaging tools, who must protect your data
          </li>
          <li>Your insurer or medical scheme, where you ask us to or give your consent</li>
          <li>
            Other healthcare providers, where you ask us to refer you or share your records
          </li>
          <li>Courts, regulators or authorities, where the law requires us to</li>
        </ul>
      </>
    ),
  },
  {
    id: 'security-retention',
    title: 'Security and how long we keep it',
    body: (
      <>
        <p>
          We use reasonable technical and organisational measures to protect your
          information from loss, misuse and unauthorised access.
        </p>
        <p>
          We keep your information only as long as needed for the purposes above, including
          meeting medical record-keeping and legal requirements. When we no longer need it,
          we delete or anonymise it securely.
        </p>
      </>
    ),
  },
  {
    id: 'transfers',
    title: 'Transfers outside Kenya',
    body: (
      <p>
        Some of our service providers, such as website hosting or email tools, may store
        data outside Kenya. Where this happens, we take steps to make sure your information
        stays protected as required by the Data Protection Act.
      </p>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies',
    body: (
      <p>
        Our website may use cookies and similar tools to make the site work and to
        understand how it is used. You can block or delete cookies in your browser
        settings, but some parts of the site may not work properly without them.
      </p>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your rights',
    body: (
      <>
        <p>Under the Data Protection Act, 2019, you have the right to:</p>
        <ul>
          <li>Be told how your information is used</li>
          <li>Access the information we hold about you</li>
          <li>Ask us to correct information that is wrong or incomplete</li>
          <li>Ask us to delete your information, where the law allows</li>
          <li>Object to or ask us to restrict certain uses of your information</li>
          <li>Ask for a copy of your information in a portable format</li>
          <li>Withdraw your consent at any time</li>
        </ul>
        <p>
          To use any of these rights, contact us using the details below. We will respond
          within the time required by law.
        </p>
      </>
    ),
  },
  {
    id: 'children',
    title: "Children's information",
    body: (
      <p>
        We treat children's dental records with extra care. Appointments and information
        for children under 18 should be provided by a parent or legal guardian, who
        consents on the child's behalf.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <p>
        We may update this policy from time to time. The latest version will always be on
        this page, with the date it was last updated shown at the top.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact us and complaints',
    body: (
      <>
        <p>For any question about this policy or your information, contact us:</p>
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
          <li>Address: {ADDRESS}</li>
        </ul>
        <p>
          If you are not happy with how we handle your information, you have the right to
          complain to the Office of the Data Protection Commissioner (ODPC) at{' '}
          <a
            href="https://www.odpc.go.ke"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 hover:underline"
          >
            www.odpc.go.ke
          </a>
          .
        </p>
      </>
    ),
  },
]

const PrivacyPolicy = () => {
  return (
    <main className="bg-stone-50 text-stone-900">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
    
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold sm:text-5xl">Privacy policy</h1>
          <p className="mt-4 text-stone-500">Last updated: {UPDATED}</p>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            Your privacy matters to us. This page explains in plain language how we
            collect, use and protect your personal information.
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

export default PrivacyPolicy