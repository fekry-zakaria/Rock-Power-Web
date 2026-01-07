import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const navLinks = [
    { name: t("navbar.home"), path: "/" },
    { name: t("navbar.about"), path: "/About" },
    { name: t("navbar.services"), path: "/services" },
    { name: t("navbar.partners"), path: "/partners" },
    { name: t("navbar.contact"), path: "/contact" },
  ];

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 20);

      if (currentScroll > lastScrollY && currentScroll > 80) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${showNav ? "translate-y-0" : "-translate-y-full"}
      ${scrolled ? "bg-black/50 backdrop-blur-md shadow-lg" : "bg-transparent"}
      `}
      dir="ltr"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="logo" className="h-20" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <ul
              className={`flex items-center gap-12 text-lg mt-2 ${
                isArabic ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white font-bold transition hover:text-[#bbfe32]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex">
              <LanguageSwitcher />
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="block md:hidden text-4xl text-white"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center gap-8 transform transition-all duration-500 ${ open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-3xl text-white hover:text-[#bbfe32]"
        >
          ✕
        </button>

        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setOpen(false)}
            className="text-white text-2xl font-bold transition hover:text-[#bbfe32]"
          >
            {link.name}
          </Link>
        ))}

        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Navbar;
