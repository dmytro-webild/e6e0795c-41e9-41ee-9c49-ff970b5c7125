// AUTO-GENERATED shell by per-section-migrate.
// Section bodies live in the sibling sections/ folder (one file per section).
// Edit those section files directly. Non-block content (wrappers,
// non-inlinable sections) is preserved inline; extracted section blocks
// become component refs.

import React from 'react';
import HeroSection from './HomePage/sections/Hero';
import AboutSection from './HomePage/sections/About';
import MacaronsSection from './HomePage/sections/Macarons';
import CakesSection from './HomePage/sections/Cakes';
import TestimonialsSection from './HomePage/sections/Testimonials';
import PricingSection from './HomePage/sections/Pricing';
import ContactSection from './HomePage/sections/Contact';

export default function HomePage(): React.JSX.Element {
  return (
<>
      <HeroSection />
      <AboutSection />
      <MacaronsSection />
      <CakesSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
    </>
  );
}
