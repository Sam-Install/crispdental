import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaTooth } from "react-icons/fa";

const links = [
  { label: "About us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Our team", to: "/team" },
  { label: "Blogs", to: "/blog" },
  {label: "Contact", to: "/contact"}
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  
  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600";

  
  const desktopLink = ({ isActive }) =>
    `border-b-2 px-1 py-1 font-medium text-black transition-colors hover:text-teal-700 ${focusRing} ${
      isActive ? "border-teal-600" : "border-transparent"
    }`;


  const mobileLink = ({ isActive }) =>
    `block border-l-4 px-3 py-3.5 text-base font-medium text-black transition-colors hover:bg-gray-50 ${focusRing} ${
      isActive ? "border-teal-600 bg-teal-50" : "border-transparent"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        
        <Link to="/" className={`flex items-center gap-2 rounded-md ${focusRing}`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-600 text-white">
            <FaTooth className="text-lg" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold text-black">
            CrispDental Clinic
          </span>
        </Link>

    
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={desktopLink}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

    
        <Link
          to="/contact"
          className="hidden rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 md:inline-block"
        >
          Book appointment
        </Link>

        
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className={`flex h-10 w-10 items-center justify-center rounded-md text-black transition-colors hover:bg-gray-100 md:hidden ${focusRing}`}
        >
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </nav>

    
      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-16 border-t border-gray-100 bg-white shadow-lg transition-all duration-200 md:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <ul className="flex flex-col py-2">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={mobileLink}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="px-4 pb-5 pt-2 sm:px-6">
          <Link
            to="/contact"
            className="block rounded-full bg-teal-600 px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
          >
            Book appointment
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;