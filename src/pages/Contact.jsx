import React, { useState } from 'react'
import { FiPhone, FiMail, FiMapPin, FiClock, FiCheckCircle } from 'react-icons/fi'

const SERVICES = [
  'General check-up',
  'Teeth cleaning',
  'Teeth whitening',
  'Braces / aligners',
  'Kids dentistry',
  'Tooth pain / emergency',
  'Other',
]

const TIMES = ['Morning (8am – 12pm)', 'Afternoon (12pm – 4pm)', 'Evening (4pm – 6pm)']

const INITIAL = {
  name: '',
  phone: '',
  email: '',
  service: '',
  date: '',
  time: '',
  message: '',
}

// Today's date as YYYY-MM-DD in local time (blocks past dates in the picker)
const getToday = () => {
  const d = new Date()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${month}-${day}`
}

const validate = (v) => {
  const e = {}
  if (!v.name.trim()) e.name = 'Enter your full name.'
  if (!/^[+\d\s()-]{7,}$/.test(v.phone.trim()))
    e.phone = 'Enter a valid phone number, like 0712 345 678.'
  if (v.email.trim() && !/^\S+@\S+\.\S+$/.test(v.email.trim()))
    e.email = 'Enter a valid email, like name@example.com.'
  if (!v.service) e.service = 'Choose a service.'
  if (!v.date) e.date = 'Pick a preferred date.'
  else if (v.date < getToday()) e.date = 'Pick today or a future date.'
  if (!v.time) e.time = 'Choose a preferred time.'
  return e
}

const inputBase =
  'w-full rounded-xl bg-white px-4 py-3 text-stone-900 ring-1 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-700'

const Field = ({ id, label, optional, error, children }) => (
  <div>
    <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-stone-800">
      {label}
      {optional && <span className="ml-1 font-normal text-stone-500">(optional)</span>}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">
        {error}
      </p>
    )}
  </div>
)

const Contact = () => {
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    const next = { ...values, [name]: value }
    setValues(next)
    // Re-check a field as the user fixes it
    if (touched[name]) setErrors(validate(next))
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors(validate(values))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    setTouched({ name: true, phone: true, email: true, service: true, date: true, time: true })

    if (Object.keys(found).length > 0) {
      // Move focus to the first invalid field
      const first = Object.keys(found)[0]
      document.getElementById(first)?.focus()
      return
    }

    setStatus('submitting')
    try {
      // TODO: replace with your backend call, e.g.
      // await fetch('/api/appointments', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) })
      await new Promise((r) => setTimeout(r, 800))
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const bookAnother = () => {
    setValues(INITIAL)
    setErrors({})
    setTouched({})
    setStatus('idle')
  }

  const ring = (name) =>
    touched[name] && errors[name] ? 'ring-red-400' : 'ring-stone-300'
  const aria = (name) => ({
    'aria-invalid': touched[name] && errors[name] ? true : undefined,
    'aria-describedby': touched[name] && errors[name] ? `${name}-error` : undefined,
  })
  const err = (name) => (touched[name] ? errors[name] : undefined)

  return (
    <main className="bg-stone-50 text-stone-900">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Header */}
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold sm:text-5xl">Book an appointment</h1>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            Fill in the form and our team will call you to confirm your visit.
          </p>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <section
            id="book"
            aria-label="Appointment form"
            className="rounded-3xl bg-white p-6 ring-1 ring-stone-200 sm:p-10"
          >
            {status === 'success' ? (
              <div role="status" className="flex flex-col items-center py-10 text-center">
                <FiCheckCircle className="h-14 w-14 text-teal-700" aria-hidden="true" />
                <h2 className="mt-5 text-2xl font-bold">Request received</h2>
                <p className="mt-3 max-w-sm text-stone-600">
                  Thank you, {values.name.split(' ')[0]}. We will call you on{' '}
                  {values.phone} to confirm your appointment.
                </p>
                <button
                  type="button"
                  onClick={bookAnother}
                  className="mt-8 rounded-full px-6 py-3 font-semibold text-teal-700 ring-1 ring-teal-700 hover:bg-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                >
                  Book another appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Full name" error={err('name')}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Jane Doe"
                      className={`${inputBase} ${ring('name')}`}
                      {...aria('name')}
                    />
                  </Field>

                  <Field id="phone" label="Phone number" error={err('phone')}>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="0712 345 678"
                      className={`${inputBase} ${ring('phone')}`}
                      {...aria('phone')}
                    />
                  </Field>
                </div>

                <Field id="email" label="Email" optional error={err('email')}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="name@example.com"
                    className={`${inputBase} ${ring('email')}`}
                    {...aria('email')}
                  />
                </Field>

                <Field id="service" label="What do you need?" error={err('service')}>
                  <select
                    id="service"
                    name="service"
                    value={values.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${inputBase} ${ring('service')}`}
                    {...aria('service')}
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="date" label="Preferred date" error={err('date')}>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      min={getToday()}
                      value={values.date}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputBase} ${ring('date')}`}
                      {...aria('date')}
                    />
                  </Field>

                  <Field id="time" label="Preferred time" error={err('time')}>
                    <select
                      id="time"
                      name="time"
                      value={values.time}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputBase} ${ring('time')}`}
                      {...aria('time')}
                    >
                      <option value="">Select a time</option>
                      {TIMES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field id="message" label="Anything we should know?" optional>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={values.message}
                    onChange={handleChange}
                    placeholder="For example: tooth pain on the left side for 3 days."
                    className={`${inputBase} ring-stone-300 resize-y`}
                  />
                </Field>

                {status === 'error' && (
                  <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                    Something went wrong and your request was not sent. Please try again or
                    call us.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full rounded-full bg-teal-700 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'submitting' ? 'Sending...' : 'Request appointment'}
                </button>
              </form>
            )}
          </section>

          {/* Clinic info */}
          <aside aria-label="Clinic contact details" className="space-y-8 lg:pt-4">
            <div>
              <h2 className="text-xl font-semibold">Prefer to talk to us?</h2>
              <p className="mt-2 text-stone-600">Call, email or visit us at the clinic.</p>
            </div>

            <ul className="space-y-5">
              <li className="flex gap-4">
                <FiPhone className="mt-1 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+254700000000" className="text-stone-600 hover:text-teal-700">
                    +254 800 000 000
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <FiMail className="mt-1 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:info@clinic.com" className="text-stone-600 hover:text-teal-700">
                    info@clinic.com
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <FiMapPin className="mt-1 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-stone-600">
                    123 Clinic Street, Town Name
                    <br />
                    Opposite Landmark Building
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <FiClock className="mt-1 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
                <div>
                  <p className="font-medium">Opening hours</p>
                  <p className="text-stone-600">
                    Mon – Fri: 8am – 6pm
                    <br />
                    Saturday: 9am – 2pm
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </li>
            </ul>

            <div className="rounded-2xl bg-teal-50 p-5 text-sm leading-relaxed text-teal-900">
              Have severe pain or swelling? Call us directly instead of using the form so we
              can see you as soon as possible.
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default Contact