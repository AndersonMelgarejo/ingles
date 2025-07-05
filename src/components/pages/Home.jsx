import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Gallery from '../common/Gallery';
import Hero from '../sections/Hero';
import Services from '../pages/Services';
import Stats from '../common/Stats';
import HowItWorks from '../sections/HowItWorks';
import About from '../sections/About';
import CTA from '../sections/CTA';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
      <About />
      <Gallery />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;