import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesBento from '@/components/sections/features/FeaturesBento';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import PricingSimpleCards from '@/components/sections/pricing/PricingSimpleCards';
import TestimonialTrustCard from '@/components/sections/testimonial/TestimonialTrustCard';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboard
      tag="Kutná Hora, Czech Republic"
      title="Handmade sweetness, made just for you."
      description="Beautiful handmade macarons, cakes, and custom sweet creations crafted in Kutná Hora."
      primaryButton={{
        text: "Request an Order",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Explore Our Creations",
        href: "#macarons",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/abstract-minimal-concept-veggies-plate-copy-space_23-2148835310.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTestimonial
      tag="Our Story"
      quote="Every creation at Makronky od holky is a piece of art, made with genuine passion, premium ingredients, and a personal touch meant to make your celebrations truly special."
      author="Pastry Artist & Founder"
      role="Studio Owner"
      imageSrc="http://img.b2bpic.net/free-photo/retired-man-following-culinary-advice-tablet-learning-cooking-tutorial-social-media-forming-dough-with-wooden-rolling-pin-grandfather-with-bonete-apron-using-laptop-preparing-home-cakes_482257-14491.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="macarons" data-section="macarons">
    <SectionErrorBoundary name="macarons">
          <FeaturesBento
      tag="Our Specialties"
      title="The star of the show: macarons."
      description="Handmade macarons are at the heart of our studio. From timeless classics like Pistachio and Salted Caramel to playful custom themes for your special events."
      features={[
        {
          title: "Artisanal Craft",
          description: "Every batch is handcrafted to ensure the perfect texture and vibrant flavor.",
          bentoComponent: "media-stack",
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-french-macarons-with-candies-inside-tray-dark-space_140725-97872.jpg",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/delicious-cookies-arrangement_23-2150714538.jpg",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-colorful-delicious-macarons-little-cakes-with-candies-white-space_140725-79670.jpg",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-minimal-concept-veggies-plate-copy-space_23-2148835310.jpg",
          imageAlt: "gift box of colorful handmade macarons",
        },
        {
          title: "Custom Themes",
          description: "Personalized designs for weddings, birthdays, and corporate branding.",
          bentoComponent: "checklist-timeline",
          heading: "Design Process",
          subheading: "From concept to creation",
          checklistItems: [
            {
              label: "Flavor Selection",
              detail: "Consultation",
            },
            {
              label: "Visual Design",
              detail: "Custom palette",
            },
            {
              label: "Hand-finishing",
              detail: "Detailing",
            },
          ],
          completedLabel: "Ready",
          imageSrc: "http://img.b2bpic.net/free-photo/retired-man-following-culinary-advice-tablet-learning-cooking-tutorial-social-media-forming-dough-with-wooden-rolling-pin-grandfather-with-bonete-apron-using-laptop-preparing-home-cakes_482257-14491.jpg",
          imageAlt: "gift box of colorful handmade macarons",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="cakes" data-section="cakes">
    <SectionErrorBoundary name="cakes">
          <FeaturesImageBento
      tag="Custom Cakes & Sweet Bars"
      title="Unforgettable edible moments."
      description="From tiered wedding cakes to bespoke sweet bars, we bring your vision to life."
      items={[
        {
          title: "Bespoke Cakes",
          description: "Custom birthday & wedding creations.",
          imageSrc: "http://img.b2bpic.net/free-photo/cupcake-still-life_23-2148097833.jpg",
        },
        {
          title: "Signature Macarons",
          description: "Timeless flavors reimagined.",
          imageSrc: "http://img.b2bpic.net/free-photo/web_53876-88496.jpg",
        },
        {
          title: "Full Sweet Bars",
          description: "Perfect for your event.",
          imageSrc: "http://img.b2bpic.net/free-photo/green-red-sweets-served-box-candy-bar_8353-8474.jpg",
        },
        {
          title: "Themed Macarons",
          description: "Personalized for you.",
          imageSrc: "http://img.b2bpic.net/free-photo/chocolate-cookies-glass-cup-top-view_114579-19093.jpg",
        },
        {
          title: "Artisan Pastry",
          description: "Small-batch delights.",
          imageSrc: "http://img.b2bpic.net/free-photo/tasty-morning-pastry-coffee-display-traditional-city-cafe_613910-18517.jpg",
        },
        {
          title: "Gourmet Cakes",
          description: "Artistry in every slice.",
          imageSrc: "http://img.b2bpic.net/free-photo/slice-chocolate-cake-glass-plate_114579-87378.jpg",
        },
        {
          title: "Wedding Desserts",
          description: "Sweet dreams come true.",
          imageSrc: "http://img.b2bpic.net/free-photo/pyramid-pink-white-macaroons_1304-5624.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialTrustCard
      quote="The macarons were not only stunning to look at, but they tasted like heaven. A true centerpiece for our wedding celebration!"
      rating={5}
      author="Jana Novotná"
      avatars={[
        {
          name: "Jana",
          imageSrc: "http://img.b2bpic.net/free-photo/female-confectioner-boxing-desserts_23-2150360238.jpg",
        },
        {
          name: "Petr",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-young-woman-wearing-coat_171337-17061.jpg",
        },
        {
          name: "Lucie",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-young-girl-student-curly-dark-hair-looking-with-anticipation-interest-smiling-pleased-gazing-camera-waiting-hopeful-white-background_176420-46707.jpg",
        },
        {
          name: "David",
          imageSrc: "http://img.b2bpic.net/free-photo/online-doctor-clinic-young-woman-medical-face-mask-using-smartphone-client-remote-online_1258-118496.jpg",
        },
        {
          name: "Klára",
          imageSrc: "http://img.b2bpic.net/free-photo/serious-young-lady-posing-while-sitting-near-cupcakes_171337-14482.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingSimpleCards
      tag="Request a Quote"
      title="Start your sweet journey."
      description="Custom creations are priced based on design, flavor complexity, and quantity."
      plans={[
        {
          tag: "Essentials",
          price: "Custom",
          description: "Small-batch orders & themed boxes.",
          features: [
            "Consultation",
            "1 Flavor Choice",
            "Pick-up in KH",
          ],
        },
        {
          tag: "Celebration",
          price: "Custom",
          description: "Large events & sweet bars.",
          features: [
            "Full Design",
            "Multiple Flavors",
            "Delivery Option",
          ],
        },
        {
          tag: "Wedding",
          price: "Custom",
          description: "Premium full-scale service.",
          features: [
            "Design Suite",
            "Custom Palette",
            "Set-up Service",
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get in Touch"
      text="Ready to craft something beautiful together? Let's discuss your custom order today."
      primaryButton={{
        text: "Contact Us",
        href: "mailto:hello@makronkyodholky.cz",
      }}
      secondaryButton={{
        text: "Visit Our Instagram",
        href: "https://instagram.com",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
