import React, { useState } from 'react'
import { FiClock, FiArrowRight } from 'react-icons/fi'

// Sample data — later, replace with the response from your backend.
// Each post needs: id, slug, title, excerpt, category, date, readTime, image
//
// Placeholder images come from loremflickr.com, which returns a photo matching
// the keywords in the URL (dentist, teeth, smile...). The "?lock=" number keeps
// the same photo each time. Replace with your own image URLs later.
const POSTS = [
  {
    id: 1,
    slug: 'how-often-should-you-visit-the-dentist',
    title: 'How often should you really visit the dentist?',
    excerpt:
      'Most people need a check-up every six months, but some need to come more often. Here is how to know what is right for you.',
    category: 'Oral Care',
    date: 'Oct 12, 2026',
    readTime: 5,
    image: 'https://loremflickr.com/1200/800/dentist,teeth?lock=11',
  },
  {
    id: 2,
    slug: 'what-to-expect-during-teeth-whitening',
    title: 'What to expect during a teeth whitening session',
    excerpt:
      'From the first shade check to aftercare, here is a simple walk-through of professional whitening and how long results last.',
    category: 'Treatments',
    date: 'Oct 8, 2026',
    readTime: 4,
    image: 'https://loremflickr.com/800/500/smile,teeth?lock=12',
  },
  {
    id: 3,
    slug: 'five-habits-for-healthier-teeth',
    title: 'Five simple habits for healthier teeth',
    excerpt:
      'Small daily changes in how you brush, floss and eat can protect your smile for years to come.',
    category: 'Oral Care',
    date: 'Oct 3, 2026',
    readTime: 3,
    image: 'https://loremflickr.com/800/500/toothbrush?lock=13',
  },
  {
    id: 4,
    slug: 'helping-your-child-at-their-first-dental-visit',
    title: "Helping your child feel calm at their first dental visit",
    excerpt:
      'Simple ways to prepare your child, what we do during a first visit, and how to make dental care a happy routine.',
    category: "Kids' Dental",
    date: 'Sep 28, 2026',
    readTime: 6,
    image: 'https://loremflickr.com/800/500/child,dentist?lock=14',
  },
  {
    id: 5,
    slug: 'braces-or-clear-aligners',
    title: 'Braces or clear aligners: which is right for you?',
    excerpt:
      'Both straighten teeth well. We compare comfort, cost, treatment time and who each option suits best.',
    category: 'Treatments',
    date: 'Sep 21, 2026',
    readTime: 7,
    image: 'https://loremflickr.com/800/500/braces,teeth?lock=15',
  },
  {
    id: 6,
    slug: 'new-extended-opening-hours',
    title: 'We are now open longer on weekdays',
    excerpt:
      'To make booking easier, we have extended our weekday hours. See the new times and how to reserve your slot.',
    category: 'Clinic News',
    date: 'Sep 15, 2026',
    readTime: 2,
    image: 'https://loremflickr.com/800/500/dental,clinic?lock=16',
  },
]

const CATEGORIES = ['All', 'Oral Care', 'Treatments', "Kids' Dental", 'Clinic News']

const Meta = ({ post }) => (
  <p className="flex items-center gap-3 text-sm text-stone-500">
    <span>{post.date}</span>
    <span className="inline-flex items-center gap-1">
      <FiClock aria-hidden="true" />
      {post.readTime} min read
    </span>
  </p>
)

const Blog = () => {
  const [category, setCategory] = useState('All')

  const filtered =
    category === 'All' ? POSTS : POSTS.filter((p) => p.category === category)

  // Feature the newest post only on the "All" view
  const featured = category === 'All' ? filtered[0] : null
  const rest = featured ? filtered.slice(1) : filtered

  return (
    <main className="bg-stone-50 text-stone-900">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Header */}
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold sm:text-5xl">Our blog</h1>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            Dental tips, treatment guides and news from our team.
          </p>
        </header>

        {/* Categories */}
        <div
          className="mt-8 flex gap-2 overflow-x-auto pb-1"
          role="group"
          aria-label="Filter by category"
        >
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 ${
                category === c
                  ? 'bg-teal-700 text-white'
                  : 'bg-white text-stone-700 ring-1 ring-stone-200 hover:bg-stone-100'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Featured post */}
        {featured && (
          <a
            href={`/blog/${featured.slug}`}
            className="group mt-10 grid overflow-hidden rounded-3xl bg-white ring-1 ring-stone-200 lg:grid-cols-2"
          >
            <div className="aspect-[16/10] overflow-hidden bg-teal-50 lg:aspect-auto">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 p-6 sm:p-10">
              <span className="w-fit rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800">
                {featured.category}
              </span>
              <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
                {featured.title}
              </h2>
              <p className="leading-relaxed text-stone-600">{featured.excerpt}</p>
              <Meta post={featured} />
              <span className="inline-flex items-center gap-2 font-semibold text-teal-700">
                Read article
                <FiArrowRight aria-hidden="true" />
              </span>
            </div>
          </a>
        )}

        {/* Post grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <a
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-stone-200 transition-shadow hover:shadow-md"
            >
              <div className="aspect-[16/10] overflow-hidden bg-teal-50">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <span className="w-fit rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800">
                  {post.category}
                </span>
                <h3 className="text-lg font-semibold leading-snug">{post.title}</h3>
                <p className="line-clamp-2 text-sm leading-relaxed text-stone-600">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-2">
                  <Meta post={post} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Blog