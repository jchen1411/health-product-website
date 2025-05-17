import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductShowcase from '../components/ProductShowcase';
import BenefitsSection from '../components/BenefitsSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <BenefitsSection />
      <Testimonials />
      <Footer />
    </>
  );
}

export default HomePage;
