import React from 'react';
import { Heart, Phone, MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-greenpastel-300 to-greenpastel-500 p-2 rounded-xl">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{COMPANY_INFO.name}</h3>
                <p className="text-gray-400 text-sm">{COMPANY_INFO.tagline}</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              We care for your pet with love and professionalism, bringing our service directly to your home.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Full bath</li>
              <li>Professional haircut</li>
              <li>Premium spa</li>
              <li>Special treatments</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{COMPANY_INFO.hours}</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow us</h4>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-greenpastel-500 transition-colors cursor-pointer">
                <span className="text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-greenpastel-500 transition-colors cursor-pointer">
                <span className="text-sm">@</span>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-greenpastel-500 transition-colors cursor-pointer">
                <span className="text-sm">in</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;