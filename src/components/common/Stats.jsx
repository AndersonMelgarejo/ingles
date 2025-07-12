import React from 'react';
import { Heart, Award, Star, Phone } from 'lucide-react';
import { STATS } from '../utils/constants';

const iconMap = {
  heart: Heart,
  award: Award,
  star: Star,
  phone: Phone
};

const Stats = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => {
            const IconComponent = iconMap[stat.icon];
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="bg-greenpastel-100 p-3 rounded-full">
                    <IconComponent className="w-6 h-6 text-greenpastel-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;