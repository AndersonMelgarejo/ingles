import React from 'react';
import { Calendar, MapPin, Shield, Heart } from 'lucide-react';
import { PROCESS_STEPS } from '../utils/constants';

const iconMap = {
  calendar: Calendar,
  mapPin: MapPin,
  shield: Shield,
  heart: Heart
};

const colorMap = {
  green: 'text-greenpastel-500',
  blue: 'text-blue-500',
  orange: 'text-greenpastel-500',
  red: 'text-red-500'
};

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-greenpastel-600">
            How it works?
          </h2>
          <p className="section-subtitle">
            Simple and fast process for your pet's care
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {PROCESS_STEPS.map((step, index) => {
            const IconComponent = iconMap[step.icon];
            const colorClass = colorMap[step.color];
            
            return (
              <div key={index} className="text-center relative h-full flex flex-col">
                <div className="bg-gray-50 p-8 rounded-2xl hover:bg-gray-100 transition-colors h-full flex flex-col min-h-[260px]">
                  <div className="flex justify-center mb-4">
                    <IconComponent className={`w-8 h-8 ${colorClass}`} />
                  </div>
                  <div className="bg-greenpastel-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-greenpastel-300"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;