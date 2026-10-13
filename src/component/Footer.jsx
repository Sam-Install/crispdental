import React from "react";
import { Link } from "react-router-dom";
import { FaTooth, FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const quickLinks = [
  { label: "About us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Our team", to: "/team" },
  { label: "Blogs", to: "/blog" },
  {label:"Contact", to: "/contact"},
];

const resources = [
  { label: "FAQs", to: "/faqs" },
  { label: "Insurance information", to: "/insurance" },
  { label: "Privacy policy", to: "/privacy-policy" },
  { label: "Terms of service", to: "/terms" },
];


const phone = "+254 800 000 0000";
const email = "hello@crispdental.com";

const linkClass =
  "rounded text-gray-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-12">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-600 text-white">
                <FaTooth className="text-lg" aria-hidden="true" />
              </span>
              <span className="text-lg font-semibold text-white">
                CrispDental Clinic
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-300">
              Gentle, modern dental care for the whole family. We're here to
              keep your smile healthy, bright, and confident.
            </p>
          </div>


          <nav aria-label="Quick links">
            <h3 className="text-base font-semibold text-white">Quick links</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

    
          <nav aria-label="Resources">
            <h3 className="text-base font-semibold text-white">Resources</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {resources.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          
          <div>
            <h3 className="text-base font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className={`${linkClass} inline-flex items-center gap-3`}
                >
                  <FaPhoneAlt
                    size={14}
                    className="text-teal-500"
                    aria-hidden="true"
                  />
                  {phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className={`${linkClass} inline-flex items-center gap-3 break-all`}
                >
                  <FiMail
                    size={16}
                    className="shrink-0 text-teal-500"
                    aria-hidden="true"
                  />
                  {email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400 sm:text-left">
          © {new Date().getFullYear()} CrispDental Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;