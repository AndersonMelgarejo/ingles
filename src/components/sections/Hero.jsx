import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-greenpastel-50 via-white to-greenpastel-100 section-padding">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="bg-greenpastel-100 text-greenpastel-800 px-4 py-2 rounded-full inline-block mb-6">
              <span className="text-sm font-semibold">🐈 Professional mobile service</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Your pet <span className="text-greenpastel-500">beautiful and clean</span> without leaving home
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional grooming service with <strong>rigorous disinfection</strong> and <strong>comprehensive insurance</strong>. 
              We bring the pet salon to your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg">
                📞 Call Now
              </Button>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-greenpastel-500 mr-2" />
                <span>Insurance included</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-greenpastel-500 mr-2" />
                <span>Certified staff</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-greenpastel-500 mr-2" />
                <span>Professional equipment</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=500&fit=crop" 
                alt="Professional mobile grooming" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-semibold text-gray-700">4.9/5</span>
                </div>
                <p className="text-sm text-gray-600">500+ pets served</p>
                <p className="text-xs text-gray-500 mt-1">⭐ Excellent service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;