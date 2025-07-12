import React from 'react';
import { COMPANY_INFO } from '../utils/constants';
import Button from '../ui/Button';

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-greenpastel-300 to-greenpastel-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to pamper your pet?
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Book your appointment today and give your pet the professional care they deserve, 
          without leaving home.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white text-greenpastel-600 hover:bg-gray-100 border-white"
          >
            📞 Call: {COMPANY_INFO.phone}
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-greenpastel-600"
          >
            🕒 Book appointment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;