import React from "react";
import { Heart, Menu, X } from "lucide-react";
import { useMenu } from "../hooks/useMenu";
import { COMPANY_INFO, NAVIGATION_LINKS } from "../utils/constants";
import Button from "../ui/Button";

const Header = () => {
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-2 rounded-xl">
              <img src="/ingles/paw.svg" alt="MovilMascota Logo" className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {COMPANY_INFO.name}
              </h1>
              <p className="text-sm text-gray-500">{COMPANY_INFO.tagline}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button>Book Appointment</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 mt-4">
              {NAVIGATION_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-orange-500 transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button className="w-full mt-4">Book Appointment</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
