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


import UspSection from './HomePage/sections/Usp';
import ThematicMacaronsSection from './HomePage/sections/ThematicMacarons';export default function HomePage(): React.JSX.Element {
  return (
<>
      <HeroSection />
      <UspSection />
      <AboutSection />
      <MacaronsSection />
      <ThematicMacaronsSection />
      <CakesSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
    </>
  );
}
