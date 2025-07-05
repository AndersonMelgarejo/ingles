import React from 'react';
import { CheckCircle, Droplet, Scissors, PawPrint, Bug, Dog, Shield } from 'lucide-react';
import { SERVICES } from '../utils/constants';
import Card from '../ui/Card';
import Button from '../ui/Button';

const iconMap = {
  droplet: Droplet,
  scissors: Scissors,
  paw: PawPrint,
  bug: Bug,
  tooth: PawPrint,
  dog: Dog,
  shield: Shield,
};

const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Our Services
          </h2>
          <p className="section-subtitle">
            We offer professional grooming services with the highest standards of quality and safety
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || PawPrint;
            return (
              <Card key={service.id} padding="p-0">
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.duration}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center mb-2">
                    <h3 className="text-xl font-bold text-gray-800 mr-2">
                      {service.title}
                    </h3>
                    <Icon className={`w-6 h-6 ${service.iconColor}`} />
                  </div>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-orange-600 mb-2">
                      {service.price}
                    </div>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full">
                    Book Now
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;