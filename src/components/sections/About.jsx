import React from "react";
import { Shield, Users, Smartphone, Clock } from "lucide-react";
import { COMPANY_INFO } from "../utils/constants";
import Button from "../ui/Button";

const About = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-greenpastel-50 to-greenpastel-100">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Galería de imágenes */}
        <div className="grid grid-cols-2 gap-4 mb-8 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=300&h=200&fit=crop"
            alt="Professional team"
            className="w-full h-40 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          />
          <img
            src="https://i.pinimg.com/736x/0d/d3/d5/0dd3d50d779d86ee69b3884361bd6132.jpg"
            alt="Happy pet"
            className="w-full h-40 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          />
          <img
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=200&fit=crop"
            alt="Professional service"
            className="w-full h-40 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          />
          <img
            src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=200&fit=crop"
            alt="Mobile vehicle"
            className="w-full h-40 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          />
        </div>
        {/* Texto y características */}
        <div>
          <h2 className="section-title text-greenpastel-600 mb-4">
            About {COMPANY_INFO.name}
          </h2>
          <p className="text-gray-700 mb-6">
            We are a company specialized in mobile grooming services for pets in
            Lima. Our goal is to provide comfort to both pets and their owners
            by bringing our professional service directly to your home.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <span className="text-greenpastel-500">
                <i className="fas fa-shield-alt" />
              </span>
              <span className="font-semibold text-gray-700">
                Comprehensive Insurance
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-greenpastel-500">
                <i className="fas fa-user-check" />
              </span>
              <span className="font-semibold text-gray-700">Certified Staff</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-greenpastel-500">
                <i className="fas fa-user-friends" />
              </span>
              <span className="font-semibold text-gray-700">
                Personalized Attention
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-greenpastel-500">
                <i className="fas fa-clock" />
              </span>
              <span className="font-semibold text-gray-700">Punctuality</span>
            </div>
          </div>
          <Button className="mt-6">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default About;