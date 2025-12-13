import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/business", label: "Business" },
    { to: "/media", label: "Media" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    // 💡 MODIFIED: Added 'sticky top-0' for sticky position.
    // Kept 'bg-black/20' and 'backdrop-blur-lg' for the glassy effect.
    <nav className="sticky top-0 bg-black/20 backdrop-blur-lg text-white px-4 py-3 md:px-8 md:py-4 z-50 border-b border-black/30">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            loading="lazy"
            src='https://res.cloudinary.com/drgbysqgy/image/upload/v1765336500/WhatsApp_Image_2025-12-07_at_22.17.36_7cc7f070-removebg-preview_lzqzbx.png'
            alt="Logo"
            className="h-24 w-24 md:h-14 md:w-24 lg:h-24 lg:w-24 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-10">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative text-base lg:text-lg font-medium transition-colors duration-300
                    ${isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"}
                  group`
                }
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg transition-colors duration-300 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu
              size={24}
              className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                }`}
            />
            <X
              size={24}
              className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        // 💡 MODIFIED: Kept 'bg-black/30' and 'backdrop-blur-md' for mobile menu glassmorphism.
        className={`md:hidden bg-black/30 backdrop-blur-md border-t border-black/30 overflow-hidden transition-all duration-400 ease-in-out ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <ul className="pt-4 pb-2 space-y-1">
          {navLinks.map((link, index) => (
            <li
              key={link.to}
              // Added a small delay for staggered animation on open
              style={{ transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms" }}
              className={`transform transition-all duration-300 ${mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `block py-3 px-4 text-lg font-medium rounded-lg transition-all duration-300
                  ${isActive
                    ? "text-yellow-400 bg-yellow-400/20"
                    : "text-white hover:text-yellow-400 hover:bg-white/10"
                  }`
                }
                onClick={closeMobileMenu}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;