import React from "react";
import { Shield, Users, Smartphone, Clock } from "lucide-react";
import { COMPANY_INFO } from "../utils/constants";
import Button from "../ui/Button";

const About = () => {
  return (
    <section
      id="nosotros"
      className="section-padding bg-gradient-to-br from-orange-50 via-white to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image grid with border and background */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="grid grid-cols-2 gap-6 border-2 border-orange-100 rounded-2xl p-2 bg-white/80 shadow-md">
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
          </div>
          {/* Text and advantages */}
          <div className="lg:w-1/2 lg:pl-16">
            <h2 className="section-title drop-shadow-md text-orange-600">
              About {COMPANY_INFO.name}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a company specialized in mobile grooming services for pets in
              Lima. Our goal is to provide comfort to both pets and their owners
              by bringing our professional service directly to your home.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-lg mr-4">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Comprehensive Insurance
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Complete protection during the service
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Certified Staff
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Professional and trained groomers
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <Smartphone className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Personalized Attention
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We adapt the service to your pet's needs
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-pink-100 p-2 rounded-lg mr-4">
                  <Clock className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Punctuality
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We always arrive on time
                  </p>
                </div>
              </div>
            </div>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;