import { useState,lazy } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessDropdownOpen, setBusinessDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleBusinessDropdown = () =>
    setBusinessDropdownOpen(!businessDropdownOpen);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setBusinessDropdownOpen(false);
  };

  return (
    <nav className="bg-black text-white p-5 relative">
      <div className="flex justify-between items-center">

        <div className="flex items-center ml-3">
          <img loading="lazy" src='https://res.cloudinary.com/drgbysqgy/image/upload/v1763492978/Logooo_1_lkty4h.webp' alt="Logo" className="h-10 ml-2" />
        </div>
        <ul className="hidden md:flex space-x-8 items-center relative">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg font-semibold hover:text-yellow-400 ${isActive ? "text-yellow-400" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-lg font-semibold hover:text-yellow-400 ${isActive ? "text-yellow-400" : ""}`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/business"
              className={({ isActive }) =>
                `text-lg font-semibold hover:text-yellow-400 ${isActive ? "text-yellow-400" : ""}`
              }
            >
              Business
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/media"
              className={({ isActive }) =>
                `text-lg font-semibold hover:text-yellow-400 ${isActive ? "text-yellow-400" : ""}`
              }
            >
              Media
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-lg font-semibold hover:text-yellow-400 ${isActive ? "text-yellow-400" : ""}`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        <button
          onClick={toggleMobileMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>


      {mobileMenuOpen && (
        <ul className="md:hidden mt-4 space-y-4 pb-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block text-lg font-semibold hover:text-yellow-400 ${isActive ? "text-yellow-400" : ""}`
              }
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block text-lg font-semibold hover:text-yellow-400 ${isActive ? "text-yellow-400" : ""}`
              }
              onClick={closeMobileMenu}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/business"
              className={({ isActive }) =>
                `block text-lg font-semibold hover:text-yellow-400 ${isActive ? "text-yellow-400" : ""}`
              }
              onClick={closeMobileMenu}
            >
              Business
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/media"
              className={({ isActive }) =>
                `block text-lg font-semibold hover:text-yellow-400 ${isActive ? "text-yellow-400" : ""}`
              }
              onClick={closeMobileMenu}
            >
              Media
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block text-lg font-semibold hover:text-yellow-400 ${isActive ? "text-yellow-400" : ""}`
              }
              onClick={closeMobileMenu}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;



